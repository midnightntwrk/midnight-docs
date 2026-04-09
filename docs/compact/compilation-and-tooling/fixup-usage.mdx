Compact Fixup Manual Page
============================

NAME
====

fixup-compact

OVERVIEW
========

The Compact fixup takes as input a Compact source program in a specified source
file, attempts to update it to account for recent changes in the Compact
language, formats it, and writes the updated and reformatted program to a
specified file.  If such a file is not specified, it writes the updated and
formatted program to standard output.

SYNOPSIS
========

**fixup-compact** _flag_ **...**... _sourcepath_ _targetpath_

DESCRIPTION
===========

The flags _flag_ **...** are optional.  They are described under FLAGS later in
this document.

_sourcepath_ should specify a file containing a Compact source program, and
_targetpath_ should specify the file into which the updated and formatted 
program should be written.  _targetpath_
may be the same as _sourcepath_,  in which case the source program is replaced
with the updated and reformatted equivalent.  We recommend, however, that you
direct the output to a different file and compare it with the original, to
verify that the changes make sense. 

FLAGS
=====

The following flags, if present, affect the fixup tool's behavior as follows:

**--help**

prints help text and exits.

**--version**

prints the compiler version and exits.

**--language-version**

prints the language version and exits.

**--vscode**

causes error messages to be printed on a single line so they are rendered
properly within the VS Code extension for Compact.

**--update-Uint-ranges**

adjusts the end point of each Uint whose size is given by
a range with a constant end point and issues a warning for each Uint whose
size is given by a range when the end point is a generic-variable reference.

**--compact-path _search list_**

sets the Compact search list to **_search list_**, overriding the default (the
value of the **COMPACT_PATH** environment variable, if set, otherwise empty).
The search list is a colon-separated (semicolon-separated on Windows) list of
directory pathnames.

**--trace-search**

causes the fixup tool to print a sequence of messages saying where it is looking
for each included file and imported module source file.

**--line-length _n_**

sets the target line length to _n_ (default 100).

EXAMPLES
========

Assuming **src/test.compact** contains a well-formed Compact program

```
fixup-compact src/test.compact
```

prints the updated and formatted program of **src/test.compact** to standard
output.

Assuming that **fixed** is an existing directory

```
fixup-compact src/test.compact fixed/test.compact
```

writes the updated and formatted program to **fixed/test.compact**.  If the
**fixed** directory does not exist the fixup tool complains that it cannot
create the output file.

Alternatively, 

```
fixup-compact src/test.compact src/test.compact
```

rewrites the updated and formatted program to **src/test.compact**.

Assuming **src/test.compact** contains an ill-formed Compact program

```
fixup-compact src/test.compact
```

exits with an error message describing the problem that prevents the
Compact program in **src/test.compact** from compiling.
