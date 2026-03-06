Compact Compiler Manual Page
============================

NAME
====

compactc

OVERVIEW
========

The Compact compiler, **compactc**, takes as input a Compact source
program in a specified source file and translates it into several
target files in a specified directory.

SYNOPSYS
========

**compactc** _flag_ **...** _sourcepath_ _targetpath_

DESCRIPTION
===========

The flags _flag_ **...** are optional.  They are described under FLAGS later in this document.

_sourcepath_ should identify a file containing a Compact source program, and
_targetpath_ should identify a target directory into which the target files are to be placed.
The target directory is created if it does not already exist.

**compactc** compiles the source file and produces from it the following target files,
where _sourceroot_ is the name of the file identified by _sourcepath_ without any
extension.

- a Typescript type-definition file _targetdir_**/contract/index.d.ts**

- a Javascript source file _targetdir_**/contract/index.js**

- a Javascript source-map file _targetdir_**/contract/index.js.map**

- one Zk/ir circuit file for each exported circuit _circuitname_
  in _targetdir_**/zkir/**_circuitname_**.zkir**,
  and

- a pair of proving keys for each exported circuit _circuitname_
  in _targetdir_**/keys/**_circuitname_**.prover** and
  _targetdir_**/keys/**_circuitname_**.verifier**.

Compact source files can include other Compact source files via an **include** form:

**include** '_name_';

They can also import externally defined modules via an **import** form:

**import** _name_;
**import** '_name_';

By default, the compiler looks for include files and externally defined modules
with non-absolute pathnames relative to the directory of the including or importing
file under the full filename _name_**.compact**.
If this fails, it looks for the file in the *Compact search list*.
The Compact search list is
- the value of the **--compact-path** command-line option, if provided,
- otherwise the value of the **COMPACT_PATH** environment variable, if set,
- otherwise empty.
The search list is a colon-separated (semicolon-separated on Windows) list of
directory pathnames _dirpath_**:...:**_dirpath_ (_dirpath_**;...;**_dirpath_
under Windows), and the compiler looks under the full pathname
_dirpath_**/**_name_**.compact** for each _dirpath_ in order until the file is
found or the set of _dirpath_ entries is exhausted.

Most Compact source programs should import the standard library **CompactStandardLibrary**.
This is typically done by placing the following line near the top of the program:

**import CompactStandardLibrary;** 

**CompactStandardLibrary** is built into the compiler, not found in the filesystem.

FLAGS
=====

The following flags, if present, affect the compiler's behavior as follows:

**--help**

prints help text and exits.

**--version**

prints the compiler version and exits.

**--language-version**

prints the language version supported by the compiler and exits.

**--runtime-version**

prints the runtime version required by the compiler and exits.

**--ledger-version**

prints the ledger version required by the compiler and exits.

**--vscode**

causes the compiler to omit newlines from error messages, so that they are rendered
properly within the VS Code extension for Compact.

**--skip-zk**

causes the compiler to skip the generation of proving keys.
Generating proving keys can be time-consuming, so this option is useful
when debugging only the Typescript output.  The compiler also skips,
after printing a warning message, the generation of proving keys when
it cannot find zkir.

**--no-communications-commitment**

omits the contract communications commitment that enables data integrity for contract-to-contract calls.

**--sourceRoot _sourceRoot-value_**

overrides the compiler's setting of the
sourceRoot field in the generated source-map (.js.map) file.  By default,
the compiler tries to determine a useful value based on the source and
target-directory pathnames, but this value might not be appropriate for
the deployed structure of the application.

**--compact-path _search list_**

sets the Compact search list to **_search list_**.

**--trace-import**

causes the compiler to print a sequence of messages saying where it is looking
for each included file and imported module source file.

**--trace-passes**

causes the compiler to print tracing information that is
generally useful only to compiler developers.

EXAMPLES
========

Assuming **src/test.compact** contains a well-formed Compact program exporting circuits *foo*
and *bar*:

```
compactc src/test.compact obj/test
```

produces:

```
obj/test/contract/index.d.ts
obj/test/contract/index.js
obj/test/contract/index.js.map

obj/test/zkir/foo.zkir
obj/test/zkir/bar.zkir

obj/test/keys/foo.prover
obj/test/keys/foo.verifier
obj/test/keys/bar.prover
obj/test/keys/bar.verifier
```

**compactc --skip-zk src/test.compact obj/test**

produces the same, except without the keys.
