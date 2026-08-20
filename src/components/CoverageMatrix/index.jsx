import React, { useMemo, useState } from "react";
import Link from "@docusaurus/Link";
import { columns as exampleColumns, features as exampleFeatures } from "./data";
import styles from "./styles.module.css";

const DEFAULT_GROUPS = ["All", "DApps", "Contracts"];

// A coverage cell is either a plain "x" / "?" string, or an object
// { level: "x" | "?", href: "/path#anchor" } that also deep-links to the place
// in the docs where the feature is covered.
function cellOf(feature, columnId) {
  const entry = feature.coverage[columnId];
  if (!entry) return null;
  return typeof entry === "string" ? { level: entry } : entry;
}

function CoverageMark({ cell, featureName, columnName, fullLabel, partialLabel }) {
  const mark =
    cell?.level === "x"
      ? { cls: "markFull", label: fullLabel }
      : cell?.level === "?"
        ? { cls: "markPartial", label: partialLabel }
        : { cls: "markNone", label: "Not covered" };
  const dot = <span className={styles[mark.cls]} aria-hidden="true" />;
  if (cell?.href) {
    return (
      <Link
        className={styles.markLink}
        to={cell.href}
        title={`${mark.label}. Open the relevant section of the ${columnName} tutorial.`}
        aria-label={`${featureName} in ${columnName}: ${mark.label}. Open the relevant tutorial section.`}
      >
        {dot}
      </Link>
    );
  }
  return (
    <span role="img" aria-label={mark.label} title={mark.label}>
      {dot}
    </span>
  );
}

function groupClass(group) {
  return group === "Contracts" ? styles.isContracts : styles.isDapps;
}

function ColumnHeader({ column }) {
  const inner = <span className={styles.colName}>{column.name}</span>;
  return (
    <th
      className={`${styles.colHeader} ${groupClass(column.group)}`}
      scope="col"
    >
      {column.href ? (
        <Link className={styles.colLink} to={column.href}>
          {inner}
        </Link>
      ) : (
        <span className={styles.colPlain}>{inner}</span>
      )}
    </th>
  );
}

export default function CoverageMatrix({
  columns = exampleColumns,
  features = exampleFeatures,
  groups = DEFAULT_GROUPS,
  itemNoun = "example",
  fullLabel = "Demonstrated",
  partialLabel = "Partial or in progress",
  summaryLabel = "Demonstrated by",
  stretch = false
}) {
  const [group, setGroup] = useState("All");
  const [selectedFeature, setSelectedFeature] = useState("all");
  const [expandedSections, setExpandedSections] = useState(() => new Set());

  const visibleColumns = useMemo(
    () =>
      group === "All" ? columns : columns.filter((c) => c.group === group),
    [group, columns]
  );

  // Optional `section` on features groups the dropdown into optgroups and turns
  // the table into collapsible sections. Datasets without sections render as a
  // flat table, exactly as before.
  const sections = useMemo(() => {
    if (!features.some((f) => f.section)) return null;
    const order = [];
    const bySection = new Map();
    features.forEach((f) => {
      const key = f.section || "Other";
      if (!bySection.has(key)) {
        bySection.set(key, []);
        order.push(key);
      }
      bySection.get(key).push(f);
    });
    return order.map((name) => ({ name, features: bySection.get(name) }));
  }, [features]);

  const allExpanded =
    sections !== null && expandedSections.size === sections.length;

  const toggleSection = (name) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const toggleAllSections = () => {
    setExpandedSections(
      allExpanded ? new Set() : new Set(sections.map((s) => s.name))
    );
  };

  // Columns that cover the currently selected feature. Computed against every
  // column (not the group-filtered view) so the summary always reflects
  // reality, then we note when the active filter hides some of them.
  const matches = useMemo(() => {
    if (selectedFeature === "all") return null;
    const feature = features.find((f) => f.name === selectedFeature);
    if (!feature) return [];
    return columns
      .map((c) => {
        const cell = cellOf(feature, c.id);
        return cell ? { ...c, level: cell.level, cellHref: cell.href } : null;
      })
      .filter(Boolean);
  }, [selectedFeature, columns, features]);

  // Of the matches, how many are hidden by the current group filter.
  const hiddenByFilter = useMemo(() => {
    if (!matches || group === "All") return 0;
    return matches.filter((m) => m.group !== group).length;
  }, [matches, group]);

  // Datasets with only full marks get a two-entry legend.
  const hasPartial = useMemo(
    () =>
      features.some((f) =>
        Object.values(f.coverage).some(
          (entry) => (typeof entry === "string" ? entry : entry.level) === "?"
        )
      ),
    [features]
  );

  const featureOption = (f) => (
    <option key={f.name} value={f.name}>
      {f.name}
    </option>
  );

  const featureRow = (feature) => (
    <tr
      key={feature.name}
      className={
        selectedFeature === feature.name ? styles.rowActive : undefined
      }
    >
      <th className={styles.rowHeader} scope="row">
        {feature.name}
      </th>
      {visibleColumns.map((c) => (
        <td key={c.id} className={styles.cell}>
          <CoverageMark
            cell={cellOf(feature, c.id)}
            featureName={feature.name}
            columnName={c.name}
            fullLabel={fullLabel}
            partialLabel={partialLabel}
          />
        </td>
      ))}
    </tr>
  );

  const sectionLabelRow = (name) => (
    <tr key={`section-${name}`} className={styles.sectionRow}>
      <th
        className={`${styles.sectionHeader} ${styles.sectionPlain}`}
        scope="colgroup"
        colSpan={1 + visibleColumns.length}
      >
        {name}
      </th>
    </tr>
  );

  // Table body: three shapes.
  // 1. A single feature is selected: show just that row, with a plain section
  //    label above it for context (collapse state is ignored).
  // 2. Sectioned dataset, no selection: collapsible section rows.
  // 3. Flat dataset: all rows.
  let bodyRows;
  if (selectedFeature !== "all") {
    const feature = features.find((f) => f.name === selectedFeature);
    bodyRows = feature
      ? [
          feature.section ? sectionLabelRow(feature.section) : null,
          featureRow(feature)
        ]
      : [];
  } else if (sections) {
    bodyRows = sections.map((s) => {
      const expanded = expandedSections.has(s.name);
      return (
        <React.Fragment key={s.name}>
          <tr
            className={
              expanded
                ? `${styles.sectionRow} ${styles.sectionRowOpen}`
                : styles.sectionRow
            }
            onClick={() => toggleSection(s.name)}
          >
            <th className={styles.sectionHeader} scope="row">
              <button
                type="button"
                className={styles.sectionToggle}
                aria-expanded={expanded}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection(s.name);
                }}
              >
                <span
                  className={
                    expanded ? styles.chevronOpen : styles.chevron
                  }
                  aria-hidden="true"
                />
                {s.name}
                <span className={styles.sectionCount}>
                  {s.features.length}
                </span>
              </button>
            </th>
            {visibleColumns.map((c) => {
              const covered = s.features.filter((f) =>
                cellOf(f, c.id)
              ).length;
              return (
                <td key={c.id} className={styles.sectionCell}>
                  {covered > 0 ? (
                    <span
                      className={`${styles.countPill} ${groupClass(c.group)}`}
                      title={`${c.name} covers ${covered} of ${s.features.length} ${s.name} features. Click to expand.`}
                    >
                      {covered}
                    </span>
                  ) : (
                    <span className={styles.markNone} title="Not covered" />
                  )}
                </td>
              );
            })}
          </tr>
          {expanded ? s.features.map(featureRow) : null}
        </React.Fragment>
      );
    });
  } else {
    bodyRows = features.map(featureRow);
  }

  return (
    <div className={`${styles.wrapper}${stretch ? ` ${styles.stretch}` : ""}`}>
      <div className={styles.controls}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>
            Browse by feature or problem
          </span>
          <div className={styles.selectShell}>
            <select
              className={styles.select}
              aria-label="Browse by feature or problem"
              value={selectedFeature}
              onChange={(e) => setSelectedFeature(e.target.value)}
            >
              <option value="all">All features</option>
              {sections
                ? sections.map((s) => (
                    <optgroup key={s.name} label={s.name}>
                      {s.features.map(featureOption)}
                    </optgroup>
                  ))
                : features.map(featureOption)}
            </select>
          </div>
        </label>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>Show</span>
          <div
            className={styles.groupToggle}
            role="group"
            aria-label={`Filter by ${itemNoun} type`}
          >
            {groups.map((g) => (
              <button
                key={g}
                type="button"
                aria-pressed={g === group}
                className={
                  g === group ? styles.groupBtnActive : styles.groupBtn
                }
                onClick={() => setGroup(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {sections && selectedFeature === "all" ? (
          <div className={styles.field}>
            <span className={styles.fieldLabel}>Sections</span>
            <button
              type="button"
              className={styles.expandBtn}
              onClick={toggleAllSections}
            >
              {allExpanded ? "Collapse all" : "Expand all"}
            </button>
          </div>
        ) : null}
      </div>

      {matches ? (
        <div className={styles.summary}>
          {matches.length > 0 ? (
            <>
              <span className={styles.summaryLabel}>{summaryLabel}</span>
              <span className={styles.chips}>
                {matches.map((m) => {
                  const href = m.cellHref || m.href;
                  return href ? (
                    <Link key={m.id} to={href} className={styles.chipLink}>
                      {m.name}
                      {m.level === "?" ? <em> partial</em> : null}
                    </Link>
                  ) : (
                    <span key={m.id} className={styles.chip}>
                      {m.name}
                      {m.level === "?" ? <em> partial</em> : null}
                    </span>
                  );
                })}
              </span>
              {hiddenByFilter > 0 ? (
                <span className={styles.summaryHint} role="status">
                  {hiddenByFilter} hidden by the current filter. Switch to All
                  to see {hiddenByFilter === 1 ? "it" : "them"}.
                </span>
              ) : null}
            </>
          ) : (
            <span className={styles.summaryEmpty}>
              No documented {itemNoun} covers this yet.
            </span>
          )}
        </div>
      ) : null}

      <div className={styles.tableCard}>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.cornerHeader} scope="col">
                  Feature / problem
                </th>
                {visibleColumns.map((c) => (
                  <ColumnHeader key={c.id} column={c} />
                ))}
              </tr>
            </thead>
            <tbody>{bodyRows}</tbody>
          </table>
        </div>
      </div>

      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.markFull} /> {fullLabel}
        </span>
        {hasPartial ? (
          <span className={styles.legendItem}>
            <span className={styles.markPartial} /> {partialLabel}
          </span>
        ) : null}
        <span className={styles.legendItem}>
          <span className={styles.markNone} /> Not covered
        </span>
        <span className={styles.legendSpacer} />
        <span className={styles.legendItem}>
          <span className={`${styles.swatch} ${styles.isDapps}`} /> DApp
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.swatch} ${styles.isContracts}`} /> Contract
        </span>
      </div>
    </div>
  );
}
