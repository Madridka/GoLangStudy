package main

import (
	// "encoding/json"
	"encoding/json"
	"log"
	"net/http"
)

type Response struct {
	Value int `json:"value"`
}

var a int = 5

func main() {
	http.HandleFunc("/api/value", sendValue)
	log.Println("сервер запущен")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func sendValue(w http.ResponseWriter, r *http.Request) {
	log.Println(a)
	if r.Method != http.MethodGet {
		http.Error(w, "такого метода нет", http.StatusMethodNotAllowed)
		return
	}

	response := Response{Value: a}
	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "Ошибка при формировании ответа", http.StatusInternalServerError)
		return
	}
}
