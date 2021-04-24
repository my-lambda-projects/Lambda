        function getNodeById(nodeId) {
            let nodeToReturn;

            nodes.forEach(node => {
                if (node._id === nodeId) {
                    nodeToReturn = node;
                    return;
                }
            });

            return nodeToReturn;
        }

        nodes.forEach(tempNode => {
            tempNode.isVisited = false;
        });

        function breadthFirstTraverseNodes() {
            let queue = [];
            let rootNode = nodes[0];
            rootNode.isVisited = true;
            queue.push(rootNode);

            while (queue.length > 0) {
                let nextNode = queue[0];
                console.log("=> NEXTNODE", nextNode.name)

                // visit unvisited neighbors
                links.forEach((link, i) => {
                    if(i===0){
                        console.log("link", link)
                    }
                    let nodeFrom = getNodeById(link._from);
                    // if link._to === nextNode._id then nodeFrom is neighbor, but only queue if nodeFrom has NOT been visited
                    if (link._to === nextNode._id && !nodeFrom.isVisited) {
                        console.log("nodeFrom", nodeFrom.name, nodeFrom._id)
                        nodeFrom.isVisited = true;
                        queue.push(nodeFrom);
                    }

                    // if link._from === nextNode._id then nodeTo is neighbor, but only queue if nodeTo has NOT been visited
                    let nodeTo = getNodeById(link._to);
                    if (link._from === nextNode._id && !nodeTo.isVisited) {
                        console.log("nodeTo", nodeTo.name, nodeTo._id)
                        nodeTo.isVisited = true;
                        queue.push(nodeTo)
                    }

                });
                // Queue holds unvisited neighbors
                queue.splice(0, 1);
                console.log("queue", JSON.stringify(queue.map(node => {
                    return node.name
                })))
            }
        }


        breadthFirstTraverseNodes();

        // ======== SAMPLE DATA ========
        var nodes = [
            {
                "name": "CLUSTER MID",
                "_id": "47691669357"
            },
            {
                "name": "0a",
                "_id": "47682101101"
            },
            {
                "name": "0b",
                "_id": "47684853613"
            },
            {
                "name": "0",
                "_id": "47681118061"
            },
            {
                "name": "CLUSTER0",
                "_id": "47670959981"
            },
            {
                "name": "CLUSTER1",
                "_id": "47674105709"
            },
            {
                "name": "1a",
                "_id": "47688982381"
            },
            {
                "name": "1",
                "_id": "47686754157"
            }
        ];

        var links = [
            {
                "_from": "47691669357",
                "_to": "47682101101"
            },
            {
                "_from": "47691669357",
                "_to": "47681118061"
            },
            {
                "_from": "47691669357",
                "_to": "47674105709"
            },
            {
                "_from": "47682101101",
                "_to": "47684853613"
            },
            {
                "_from": "47684853613",
                "_to": "47691669357"
            },
            {
                "_from": "47681118061",
                "_to": "47682101101"
            },
            {
                "_from": "47681118061",
                "_to": "47674105709"
            },
            {
                "_from": "47670959981",
                "_to": "47681118061"
            },
            {
                "_from": "47670959981",
                "_to": "47674105709"
            },
            {
                "_from": "47674105709",
                "_to": "47684853613"
            },
            {
                "_from": "47674105709",
                "_to": "47686754157"
            },
            {
                "_from": "47688982381",
                "_to": "47684853613"
            },
            {
                "_from": "47686754157",
                "_to": "47688982381"
            }
        ];