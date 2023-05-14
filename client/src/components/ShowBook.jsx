import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowBook = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = () => {
    axios
      .get("http://localhost:8000/getBook")
      .then((response) => {
        const books = response.data.books;
        setBooks(books);
        console.log(books);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const displayBooks = books
    .filter((book) => {
      if (searchTerm === "") {
        return book;
      } else if (
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return book;
      }
      return 0;
    })
    // .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((book) => {
      return (
        <div>
          <div class='overflow-x-auto'>
            <table class='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
              <tbody class='divide-y divide-gray-200'>
                <tr class='odd:bg-gray-50'>
                  <td class='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                    {book.name}
                  </td>
                  <td class='whitespace-nowrap px-4 py-2 text-gray-700'>
                    {book.author}
                  </td>
                  <td class='whitespace-nowrap px-4 py-2 text-gray-700'>
                    {book.publishDate}
                  </td>
                  <td class='whitespace-nowrap px-4 py-2 text-gray-700'>
                    {book.totalPage}
                  </td>
                  <td class='whitespace-nowrap px-4 py-2 text-gray-700'>
                    {book.genre}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    });
  return (
    <div>
      <div>
        <div class='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
          <div class='mx-auto max-w-lg'>
            <h1 class='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
              Book Find{" "}
            </h1>

            <form
              onSubmit=''
              class='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
            >
              <div>
                <label for='email' class='sr-only'>
                  Book Name
                </label>

                <div class='relative'>
                  <input
                    type='text'
                    class='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                    placeholder='Enter keyword'
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                  />

                  <span class='absolute inset-y-0 end-0 grid place-content-center px-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-4 w-4 text-gray-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label for='email' class='sr-only'>
                  Genre
                </label>

                <div class='relative'>
                  <input
                    type='text'
                    class='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                    placeholder='Enter book genre/type'
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                  />

                  <span class='absolute inset-y-0 end-0 grid place-content-center px-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-4 w-4 text-gray-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <button
                type='button'
                class='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
              >
                Find
              </button>
            </form>
          </div>
        </div>
        <div class='overflow-x-auto'>
          <table class='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
            <tbody class='divide-y divide-gray-200'>
              <tr class='odd:bg-gray-50'>
                <td class='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  Book Name
                </td>
                <td class='whitespace-nowrap px-4 py-2 font-medium text-gray-700'>
                  Author
                </td>
                <td class='whitespace-nowrap px-4 py-2 font-medium text-gray-700'>
                  Publish Date
                </td>
                <td class='whitespace-nowrap px-4 py-2 font-medium text-gray-700'>
                  Total Pages
                </td>
                <td class='whitespace-nowrap px-4 py-2 font-medium text-gray-700'>
                  Genre
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {displayBooks}
    </div>
  );
};

export default ShowBook;
