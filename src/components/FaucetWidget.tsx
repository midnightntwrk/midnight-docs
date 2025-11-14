// src/components/FaucetWidget.tsx
import React, { useMemo, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Turnstile from "@site/src/components/Turnstile";

type NetworkId = "midnight";
type EnvironmentId = "preprod" | "preview";

interface DocsFaucetSuccess {
  status: "success";
  value: {
    transactionIdentifier: string;
    timeToNextRequest: string;
  };
}

interface DocsFaucetError {
  status: "error";
  code: "invalid_address" | "rate_limited" | "backend_error" | "config_error";
  message: string;
  timeToNextRequest?: string;
}

interface EnvConfig {
  id: EnvironmentId;
  label: string;
}

interface NetworkConfig {
  id: NetworkId;
  label: string;
  environments: EnvConfig[];
}

// ---- NETWORK CONFIG (THIS IS WHAT WAS MISSING) ----
const networks: NetworkConfig[] = [
  {
    id: "midnight",
    label: "Midnight",
    environments: [
      { id: "preprod", label: "Pre-Prod" },
      { id: "preview", label: "Preview" },
    ],
  },
];

// ---------------------------------------------------

const FaucetWidget: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const TURNSTILE_SITE_KEY =
    (siteConfig.customFields?.turnstileSiteKey as string) || "";

  const [networkId, setNetworkId] = useState<NetworkId>("midnight");
  const [environmentId, setEnvironmentId] = useState<EnvironmentId | "">("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTxId, setSuccessTxId] = useState<string | null>(null);
  const [nextRequestInfo, setNextRequestInfo] = useState<string | null>(null);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const selectedNetwork = useMemo(
    () => networks.find((n) => n.id === networkId),
    [networkId],
  );

  const isFormValid =
    !!networkId &&
    !!environmentId &&
    !!address &&
    !addressError &&
    !!captchaToken;

  function handleAddressChange(value: string) {
  const trimmed = value.trim();
  setAddress(trimmed);
  setAddressError(null);
  setSuccessTxId(null);
  setGlobalError(null);
  setNextRequestInfo(null);

  // Very light client-side check:
  // - non-empty
  // - at least some reasonable length (to avoid obvious junk like "a")
  if (trimmed && trimmed.length < 20) {
    setAddressError("This doesn't look like a valid Midnight wallet address.");
  }
}


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isFormValid || !captchaToken || !environmentId) return;

    setIsSubmitting(true);
    setGlobalError(null);
    setSuccessTxId(null);
    setNextRequestInfo(null);

    try {
      const res = await fetch("/api/docs-faucet/request-tokens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          network: networkId,
          environment: environmentId,
          address: address.trim(),
          captchaToken,
        }),
      });

      const data = (await res.json()) as DocsFaucetSuccess | DocsFaucetError;

      if (data.status === "success") {
        setSuccessTxId(data.value.transactionIdentifier);
        if (data.value.timeToNextRequest) {
          setNextRequestInfo(
            `You can request again in ${formatDuration(data.value.timeToNextRequest)}.`,
          );
        }
        trackFaucetEvent("success", { network: networkId, environment: environmentId });
      } else {
        handleError(data, environmentId);
      }
    } catch (err) {
      setGlobalError(
        "The faucet is temporarily unavailable. Please try again in a few minutes.",
      );
      trackFaucetEvent("failure", {
        network: networkId,
        environment: environmentId,
        errorCode: "backend_error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleError(error: DocsFaucetError, env: EnvironmentId) {
    switch (error.code) {
      case "invalid_address":
        setAddressError(error.message || "Invalid wallet address.");
        break;
      case "rate_limited":
        setGlobalError(
          error.message ||
            "You have already claimed tokens recently. Please wait before requesting again.",
        );
        if (error.timeToNextRequest) {
          setNextRequestInfo(
            `Next eligible request in ${formatDuration(error.timeToNextRequest)}.`,
          );
        }
        break;
      case "config_error":
        setGlobalError(
          "Faucet configuration error. Please contact the Midnight team if this persists.",
        );
        break;
      case "backend_error":
      default:
        setGlobalError(
          error.message ||
            "Something went wrong while processing your request. Please try again.",
        );
    }

    trackFaucetEvent("failure", {
      network: networkId,
      environment: env,
      errorCode: error.code,
    });
  }

  return (
    <form className="faucet-widget" onSubmit={handleSubmit}>
      <h2>Request tmNIGHT test tokens</h2>
      <p>
        Use this faucet to request <code>tmNIGHT</code> tokens for the Midnight test
        environments.
      </p>

      {/* Network */}
      <label className="faucet-field">
        <span>Network</span>
        <select
          value={networkId}
          onChange={(e) => setNetworkId(e.target.value as NetworkId)}
        >
          {networks.map((n) => (
            <option key={n.id} value={n.id}>
              {n.label}
            </option>
          ))}
        </select>
      </label>

      {/* Environment */}
      <label className="faucet-field">
        <span>Environment</span>
        <select
          value={environmentId}
          onChange={(e) => setEnvironmentId(e.target.value as EnvironmentId)}
        >
          <option value="">Select environment</option>
          {selectedNetwork?.environments.map((env) => (
            <option key={env.id} value={env.id}>
              {env.label}
            </option>
          ))}
        </select>
      </label>

      {/* Wallet address */}
      <label className="faucet-field">
        <span>Wallet address</span>
        <input
          type="text"
          value={address}
          onChange={(e) => handleAddressChange(e.target.value)}
          placeholder="Enter your Midnight wallet address"
        />
      </label>
      {addressError && <p className="field-error">{addressError}</p>}

      {/* Turnstile captcha */}
      {TURNSTILE_SITE_KEY ? (
        <div className="faucet-field">
          <span>Verification</span>
          <Turnstile
            siteKey={TURNSTILE_SITE_KEY}
            onVerify={(token) => setCaptchaToken(token)}
          />
        </div>
      ) : (
        <p className="field-error">
          Turnstile site key is not configured. Please contact the Midnight team.
        </p>
      )}

      {/* Submit button */}
      <button type="submit" disabled={!isFormValid || isSubmitting}>
        {isSubmitting ? "Requesting..." : "Request tmNIGHT"}
      </button>

      {/* Messages */}
      {successTxId && (
        <div className="faucet-success">
          <p>Request successful.</p>
          <p>
            Transaction ID: <code>{successTxId}</code>
          </p>
          {nextRequestInfo && <p>{nextRequestInfo}</p>}
        </div>
      )}

      {globalError && <div className="faucet-error">{globalError}</div>}

      {nextRequestInfo && !successTxId && (
        <div className="faucet-info">{nextRequestInfo}</div>
      )}
    </form>
  );
};

export default FaucetWidget;

// ------- helpers -------

function formatDuration(iso: string): string {
  // simple formatter for "PT24H", "PT1H30M", etc.
  const hours = iso.match(/(\d+)H/);
  const minutes = iso.match(/(\d+)M/);
  const seconds = iso.match(/(\d+)S/);
  const parts: string[] = [];
  if (hours) parts.push(`${hours[1]} hour${hours[1] === "1" ? "" : "s"}`);
  if (minutes) parts.push(`${minutes[1]} minute${minutes[1] === "1" ? "" : "s"}`);
  if (!hours && !minutes && seconds)
    parts.push(`${seconds[1]} second${seconds[1] === "1" ? "" : "s"}`);
  return parts.join(" ");
}

function trackFaucetEvent(
  outcome: "success" | "failure",
  params: { network: string; environment: string; errorCode?: string },
) {
  // Wire this into your analytics provider as needed.
  // For now, just log:
  // eslint-disable-next-line no-console
  console.log("faucet_request", { outcome, ...params });
}
