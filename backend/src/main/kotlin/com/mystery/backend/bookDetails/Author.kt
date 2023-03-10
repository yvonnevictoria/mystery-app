package com.mystery.backend.bookDetails

import java.util.Arrays

class Author(val id: String, private val firstName: String, private val lastName: String) {

    companion object {
        private val authors: List<Author> = Arrays.asList(
            Author("author-1", "Joanne", "Rowling"),
            Author("author-2", "Herman", "Melville"),
            Author("author-3", "Anne", "Rice")
        )

        fun getById(id: String?): Author {
            return authors.stream().filter { author -> author.id == id }.findFirst().orElse(null)
        }
    }
}
