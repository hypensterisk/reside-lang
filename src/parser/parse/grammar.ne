@{%
const lexer=require('./lexer').default
const ast=require('../../ast').default
%}
@lexer lexer
number -> %NUMBER {%([{value}])=>ast.createNumber(value)%}