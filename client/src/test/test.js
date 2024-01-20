export function test (){
    const person = {
        name: 'bob',
        id:'1',
    }

    const {name, id} = person;
    console.log(name, id)
}