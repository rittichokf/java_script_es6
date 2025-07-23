const data_1 = {
    id: 1,
    name: 'John Doe',
    age: 30
};

console.log(data_1);

const id = 1;
const name = 'John Doe';
const age = 30;

const data_2 = {
    id,
    name,
    age
};

console.log(data_2);

const data_3 = {
    id: 1,
    name: 'John Doe',
    age: 30,
    show_data() {
        console.log('Data method called');
    }
};

console.log(data_3);

data_3.show_data();
