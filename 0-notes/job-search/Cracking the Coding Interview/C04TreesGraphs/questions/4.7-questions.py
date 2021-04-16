# 4.7 Build Order

# You are given a list of projects and a list of dependencies (which is a list of pairs of projects where the
    # second project is dependent on the first).
# All of a project's dependencies must be built before the project is.
# Find a build order that will allow the projects to be built.
# If there is no valid build order, return an error.

# INPUT:   projects:      a, b, c, d, e, f
#          dependencies:  (a,d), (f,b), (b,d), (f,a), (d,c)
# OUTPUT:  f, e, a, b, d, c 
