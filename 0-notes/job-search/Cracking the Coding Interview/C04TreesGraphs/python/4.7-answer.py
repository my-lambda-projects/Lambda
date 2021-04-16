# 4.7 Build Order

# You are given a list of projects and a list of dependencies (which is a list of pairs of projects where the
    # second project is dependent on the first).
# All of a project's dependencies must be built before the project is.
# Find a build order that will allow the projects to be built.
# If there is no valid build order, return an error.

# INPUT:   projects:      a, b, c, d, e, f
#          dependencies:  (a,d), (f,b), (b,d), (f,a), (d,c)
# OUTPUT:  f, e, a, b, d, c 

def build_order(projects, dependencies):
    projects_length = len(projects)
    # do following three times:
    for x in range(0, 3):
        # for each item in projects
        for y in range(0, projects_length):
            dependencies_length = len(dependencies)
            for z in range(0, dependencies_length):
                if projects[y] == dependencies[z][0]:
                    for w in range(0, projects_length):
                        if projects[w] == dependencies[z][1]:
                            if w < y:
                                item_to_move = projects[w]
                                # remove dependencies[1]/projects[w]
                                del projects[w]
                                # add dependencies[1] to before projects[y]
                                projects.insert(y-1, item_to_move)
                            # else move on to next dependencies
        
    # check if new projects list matches all dependencies
    for x in range(0, projects_length):
        for y in range(0, projects_length):
            for z in range(0, dependencies_length):
                if dependencies[z][1] == projects[y] and projects[x] == dependencies[z][0]:
                    if y < x:
                        # if yes then return true
                        return False
    # else return false
    return True
