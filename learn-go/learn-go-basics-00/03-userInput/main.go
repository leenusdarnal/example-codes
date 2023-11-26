package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	welcome := "welcome to Golang"
	fmt.Println(welcome)

	reader := bufio.NewReader(os.Stdin)

	fmt.Println("Enter a number:")

	// comma OK || err ok

	inout, err := reader.ReadString('\n')

	fmt.Println("Tank for input, ", inout, err)
	fmt.Printf("Type of this rating is %T \n", inout)

}
