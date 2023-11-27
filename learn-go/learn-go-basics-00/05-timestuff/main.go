package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Time  with golang")

	presentTime := time.Now()
	fmt.Println(presentTime)

	fmt.Println(presentTime.Format("01-02-2006 15:04:05 Monday"))

	createdDate := time.Date(2020, time.August, 15, 15, 15, 15, 15, time.UTC)
	fmt.Println(createdDate.Format("01-02-2006 Monday"))
}
