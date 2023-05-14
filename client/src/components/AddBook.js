import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
    const [data, setData] = useState({
        
        name: "",
        author: "",
        authorAge: "",
        totalPage: "",
        publishDate: "",
        genre: "",
        bookslug: "",
        
      });
      const [error, setError] = useState(" ");
      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
            try {
              const url = "http://localhost:8000/addBook";
              const { data: res } = await axios.post(url, data);
            } catch (error) {
          
        console.log(error)
        }
      };
  return (
    <div><div class='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
    <div class='mx-auto max-w-lg'>
      <h1 class='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
        Add a Book
      </h1>

      

      <form
        onSubmit={handleSubmit}
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
              placeholder='Enter book name'
              onChange={handleChange}
                      value={data.name}
                      name="name"
                      required
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
            Author Name
          </label>

          <div class='relative'>
            <input
              type='text'
              class='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter author name'
              onChange={handleChange}
                      value={data.author}
                      name="author"
                      required
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
Author Age          </label>

          <div class='relative'>
            <input
              type='text'
              class='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter author age'
              onChange={handleChange}
                      value={data.authorAge}
                      name="authorAge"
                      required
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
Total page         </label>

          <div class='relative'>
            <input
              type='text'
              class='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter total page'
              onChange={handleChange}
                      value={data.totalPage}
                      name="totalPage"
                      required
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
          <label for='email' class='sr-only'>Publish Date</label>

          <div class='relative'>
            <input
              type='text'
              class='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter publish date'
              onChange={handleChange}
                      value={data.publishDate}
                      name="publishDate"
                      required
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
          <label for='email' class='sr-only'>Genre</label>

          <div class='relative'>
            <input
              type='text'
              class='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter book genre/type'
              onChange={handleChange}
                      value={data.genre}
                      name="genre"
                      required
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
          <label for='email' class='sr-only'>Book slug</label>

          <div class='relative'>
            <input
              type='text'
              class='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter a unique slug'
              onChange={handleChange}
                      value={data.bookslug}
                      name="bookslug"
                      required
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
          type='submit'
          class='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
        >
          Add Book
        </button>

        
      </form>
    </div>
  </div></div>
  )
}

export default AddBook