## Package:

A Go package is a namespace and unit of compilation. One source directory constitutes one package, and all of the source files in the directory make up the package.

Source file names must end with .go. Certain suffixes starting with underscore can be used to specify that a file should only be compiled for certain platforms, e.g. the file foo_linux.go will only be included when compiling for linux. Otherwise, source file names can be anything you want.

**The first line of code in each source file must be a package statement declaring the name of the package.**.
package foobar          //declare that this file is part of the package named foobar.

All source files in a directory must declare the same package name.

The **package name main** is special. A package named main is compiled into an executable. Any package not named main is compiled into an object file.

## Imports:

In each source file, you can use by name anything defined in the current package. To use names from another package, that other package must be imported into the current file with an import statement:

package whatever
// all imports must be at top of file but after the package statement.
import "otherpackage"

The package to import is specified by its import path as a string. **An import path tells the Go compiler where to find a package relative to the GOPATH/src directory (GOPATH is an environment variable pointing to your chose Go Working directory):**
import "foo/bar/ack"      // import the package in GOPATH/src/foo/bar/ack.

A package's import path and its name can be completly different, but by convention the last segment of the import path matches the name, e.g, the package at import path "foo/bar/ack" would have the name ack.

Standard library packages are kept in a subdirectory where the Go tool itself is installed, and they generally have short import paths, like "fmt".
when a package is imported, names of that package are prefixed by the package name and a dot:

mary.David()            //invoke a function David from a package named mary.

Only names starting with **uppercase letters are public**, i.e. visible to other packages. **Names starting with lowercase letters are private to their package**.

**Packages named main cannot be imported by othe packages.** 

Package imports cannot be cyclical, e.g. if package A imports package B which imports package C, B cannot import A, and C cannot import either A or B.


