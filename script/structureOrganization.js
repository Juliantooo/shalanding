
config = {
    container: "#tree-simple",
    connectors: {
        type: 'step',
        style: {
            'stroke-width': 4,
        }
    },
    levelSeparation: 85
};

parent_node = {
    text: { name: "Parent node" },
    HTMLclass: "node-box"
};

first_child = {
    parent: parent_node,
    text: { name: "First child" },
    HTMLclass: "node-box"
};

second_child = {
    parent: parent_node,
    text: { name: "Second child" },
    HTMLclass: "node-box"
};

third_child = {
    parent: parent_node,
    text: { name: "third child" },
    HTMLclass: "node-box"
};
fourth_child = {
    parent: second_child,
    text: { name: "fourth child" },
    HTMLclass: "node-box"
};
fifth_child = {
    parent: second_child,
    text: { name: "fifth child" },
    HTMLclass: "node-box"
};
sixth_child = {
    parent: second_child,
    text: { name: "sixth child" },
    HTMLclass: "node-box"
};
seventh_child = {
    parent: second_child,
    text: { name: "seventh child" },
    HTMLclass: "node-box"
};

simple_chart_config = [
    config, parent_node,
    first_child, second_child, third_child, fourth_child, fifth_child, sixth_child, seventh_child
];

const my_chart = new Treant(simple_chart_config);