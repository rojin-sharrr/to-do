import {EntitySchema} from "typeorm";

const todo = new EntitySchema({
    name: "Todo",
    tableName: "todos",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        title: {
            type: "varchar",
            nullable: false,
        },
        description: {
            type: "text",
            nullable: true,
        },
        completed: {
            type: "boolean",
            nullable: false,
        },
        createdAt: {
            type: "timestamp",
            createDate: true,
        },
        updatedAt: {
            type: "timestamp",
            updateDate: true,
        },
    },
});

export  {todo};
