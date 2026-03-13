package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type ResponseValue struct {
	Value int `json:"value"`
}

type ResponseMobile struct {
	Mobile string `json:"mobile"`
}

var a int = 5
var mobile string = "E100"

func main() {
	http.HandleFunc("/api/value", corsMiddleware(sendValue))
	http.HandleFunc("/api/mobile", corsMiddleware(sendMobile))
	log.Println("сервер запущен")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func sendValue(w http.ResponseWriter, r *http.Request) {
	response := ResponseValue{Value: a}
	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "Ошибка при формировании ответа", http.StatusInternalServerError)
		return
	}
}

func sendMobile(w http.ResponseWriter, r *http.Request) {
	response := ResponseMobile{Mobile: mobile}
	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "Ошибка при формировании ответа", http.StatusInternalServerError)
		return
	}
}

func corsMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Разрешаем запросы с любого источника
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Set("Access-Control-Expose-Headers", "Content-Length")
		w.Header().Set("Access-Control-Allow-Credentials", "true")

		// Обрабатываем preflight запросы
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		next(w, r)
	}
}
