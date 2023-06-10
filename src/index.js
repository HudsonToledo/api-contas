"use strict";

const api = require("./server");

api.listen(3000, () => {
    console.log('servidor rodando na porta 3000 em: http://localhost:3000');
});