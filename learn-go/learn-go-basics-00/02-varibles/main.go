package main

import "fmt"

// public
const LOGINTOKEN string = "gibberish"

func main() {
	var username string = "yetano"
	fmt.Println(username)
	fmt.Printf("Varible is of type:%T \n", username)

	var isLoggedIn bool = true
	fmt.Println(isLoggedIn)
	fmt.Printf("Varible is of type:%T \n", isLoggedIn)

	var smallValue int = 256
	fmt.Println(smallValue)
	fmt.Printf("Varible is of type:%T \n", smallValue)

	var smallFloat float64 = 256.123456789
	fmt.Println(smallFloat)
	fmt.Printf("Varible is of type:%T \n", smallFloat)

	// default values and some aliases
	var anotherVariabkle int
	fmt.Println(anotherVariabkle)
	fmt.Printf("Varible is of type %T \n", anotherVariabkle)

	//implicit type
	var website = "example.com"
	fmt.Println(website)

	// no var styles
	numberOfUser := 3000000000.1
	fmt.Println(numberOfUser)

	fmt.Println(LOGINTOKEN)
	fmt.Printf("Varible is of type %T \n", LOGINTOKEN)
}
