package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type User struct {
	ID   string    `json:"id"`
	Name string `json:"name"`
	Age int `json:"age"`
	Address string `json:"address"`
	City string `json:"city"`
	State string `json:"state"`
	Zip string `json:"zip"`
	Country string `json:"country"`
	Phone string `json:"phone"`
	Email string `json:"email"`
	Birthday string `json:"birthday"`
}

var users = []User{
	{
		ID: "1",
        Name: "John Doe",
        Age: 18,
        Address: "123 Main St",
        City: "San Francisco",
        State: "CA",
        Zip: "94101",
        Country: "US",
        Phone: "+1 (555) 555-1234",
        Email: "dycjh@example.com",
        Birthday: "2017-01-01",
    },
	{
		ID: "2",
		Name: "Jane Doe",
        Age: 18,
        Address: "123 Main St",
        City: "San Francisco",
        State: "CA",
        Zip: "94101",
        Country: "US",
        Phone: "+1 (555) 555-1234",
        Email: "dycjh@example.com",
        Birthday: "2017-01-01",
	},
}

func getUsers(c  *gin.Context){
	c.IndentedJSON(http.StatusOK, users)
}

func postUsers(c *gin.Context){
	var newUser User


		if err := c.BindJSON(&newUser); err != nil {
			return;
		}


	users = append(users, newUser)
	c.IndentedJSON(http.StatusCreated, newUser)
}

func getUserById(c *gin.Context){
	id := c.Param("id")

	for _, a := range users {
		if a.ID == id {
			c.IndentedJSON(http.StatusFound, a)
			return;
		}
	}

    c.IndentedJSON(http.StatusNotFound, gin.H{"message": "User not found"})
}

func main(){
	r := gin.Default();
	r.GET("/users", getUsers)
	r.GET("/users/:id", getUserById)
	r.POST("/post/users", postUsers)
	

	r.Run(":8080");
}