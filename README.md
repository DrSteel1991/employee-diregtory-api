This project was created with NodeJs and GraphQL

## Available Scripts

Before running please do

### `npm install`

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view the GraphQL playground

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Will run the tests written, but please stop the server before running this command

## Querying

Here is a sample query you can write

### 
    query{
        companies{
            edges{
                node{
                    id
                    name
                    departments{
                        edges{
                            node{
                                id
                                name
                                employees{
                                    edges{
                                        node{
                                            id
                                            name
                                            department{
                                                id
                                                name
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

## Query Filters

You can also add filters using the filter variable

### 
    query{
        companies{
            edges{
                node{
                    id
                    name
                    departments(filter:{field:"name", op: EQ , value: "Engineering"}){
                        edges{
                            node{
                                id
                                name
                                employees(filter:{field:"name", op: LIKE , value: "anthony"}){
                                    edges{
                                        node{
                                            id
                                            name
                                            department{
                                                id
                                                name
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


And of course you can query each entity on it's own.

You can get a specific employee, department or company

### 
    query{
        employee(id: 1){
            id
            name
            jobTitle
            department{
            id
            name
            }
        }
    }


## Pagination

You can also paginate through the data using first and after variables

### 
    query{
        companies{
            edges{
                node{
                    id
                    name
                    departments(filter:{field:"name", op: EQ , value: "Engineering"}){
                        edges{
                            node{
                                id
                                name
                                employees(first: 2, after: 0){
                                    edges{
                                        node{
                                            id
                                            name
                                            department{
                                                id
                                                name
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


## Mutations

You can add, update, delete an Employee

### 
    mutation($input: addEmployeeInput!){
        addEmployee(input: $input){
            id
            name
            age
            name
            location
            department{
                id
                name
            }
        }
    }

With $input : 

### 
    {
        "input": {
            "name": "test",
            "email": "test@test.com",
            "jobTitle": "engineer",
            "age": "32",
            "location": "Lebanon",
            "dep_id": 1
        }
    }


### 
    mutation($input: updateEmployeeInput!){
        updateEmployee(input: $input){
            id
            name
            age
            name
            location
            department{
                id
                name
            }
        }
    }

With $input you can pass whatever values yo uwant to update : 

### 
    {
        "input": {
            "id": 1,
            "name": "test",
            "email": "test@test.com"
        }
    }

### 
    mutation{
        deleteEmployee(id: 1)
    }




