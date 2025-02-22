import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let data = [
  {
    id: "m5gr84i9",
    name: "John Doe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    address: "123 Main St, Cityville",
    profile: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "a1b2c3d4",
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane.smith@example.com",
    address: "456 Elm St, Townsville",
    profile: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "x9y8z7w6",
    name: "Alice Johnson",
    phone: "555-123-4567",
    email: "alice.j@example.com",
    address: "789 Oak St, Villagetown",
    profile: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "r4t5y6u7",
    name: "Bob Brown",
    phone: "222-333-4444",
    email: "bob.b@example.com",
    address: "101 Maple St, Suburbia",
    profile: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "m1n2o3p4",
    name: "Charlie Wilson",
    phone: "666-777-8888",
    email: "charlie.w@example.com",
    address: "202 Pine St, Metropolis",
    profile: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "p5q6r7s8",
    name: "David Miller",
    phone: "111-222-3333",
    email: "david.m@example.com",
    address: "303 Cedar St, Countryside",
    profile: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: "a7s6d5f4",
    name: "Emma White",
    phone: "444-555-6666",
    email: "emma.w@example.com",
    address: "404 Birch St, Seaside",
    profile: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: "z1x2c3v4",
    name: "Frank Harris",
    phone: "777-888-9999",
    email: "frank.h@example.com",
    address: "505 Walnut St, Mountainside",
    profile: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: "w5e6r7t8",
    name: "Grace Lee",
    phone: "999-000-1111",
    email: "grace.l@example.com",
    address: "606 Chestnut St, Riverside",
    profile: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: "o9i8u7y6",
    name: "Henry Adams",
    phone: "333-444-5555",
    email: "henry.a@example.com",
    address: "707 Spruce St, Hilltop",
    profile: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: "l4k3j2h1",
    name: "Ivy Thomas",
    phone: "555-666-7777",
    email: "ivy.t@example.com",
    address: "808 Redwood St, Baytown",
    profile: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: "g1f2d3s4",
    name: "Jack Nelson",
    phone: "123-789-4560",
    email: "jack.n@example.com",
    address: "909 Aspen St, Forestville",
    profile: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: "v5b6n7m8",
    name: "Kara Scott",
    phone: "456-123-7890",
    email: "kara.s@example.com",
    address: "111 Beech St, Harborview",
    profile: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    id: "h9j8k7l6",
    name: "Leo Carter",
    phone: "888-999-0000",
    email: "leo.c@example.com",
    address: "222 Cypress St, Cliffside",
    profile: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: "d1s2a3f4",
    name: "Mia Evans",
    phone: "000-111-2222",
    email: "mia.e@example.com",
    address: "333 Hemlock St, Meadowlands",
    profile: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: "p9o8i7u6",
    name: "Noah Wright",
    phone: "234-567-8901",
    email: "noah.w@example.com",
    address: "444 Magnolia St, Beachside",
    profile: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    id: "y1t2r3e4",
    name: "Olivia King",
    phone: "876-543-2109",
    email: "olivia.k@example.com",
    address: "555 Sequoia St, Brookside",
    profile: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    id: "m7n8b9v6",
    name: "Paul Baker",
    phone: "345-678-9012",
    email: "paul.b@example.com",
    address: "666 Alder St, Woodlands",
    profile: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    id: "a4s3d2f1",
    name: "Quinn Walker",
    phone: "567-890-1234",
    email: "quinn.w@example.com",
    address: "777 Dogwood St, Valleyview",
    profile: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    id: "x9c8v7b6",
    name: "Ryan Hall",
    phone: "789-012-3456",
    email: "ryan.h@example.com",
    address: "888 Hickory St, Hillside",
    profile: "https://randomuser.me/api/portraits/men/20.jpg",
  },
];

export const employeesApi = createApi({
  reducerPath: "employeesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      queryFn: async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: [...data] });
          }, 2000);
        });
      },
      providesTags: ["Employees"],
    }),
    addEmployee: builder.mutation({
      queryFn: async (newEmployee) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            newEmployee.id = Math.random().toString(36).substr(2, 9);
            data = [...data, newEmployee];
            resolve({ data: newEmployee });
          }, 1000);
        });
      },
      invalidatesTags: ["Employees"],
    }),

    updateEmployee: builder.mutation({
      queryFn: async (updatedEmployee) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            data = data.map((employee) =>
              employee.id === updatedEmployee.id
                ? { ...employee, ...updatedEmployee }
                : employee
            );
            resolve({ data: updatedEmployee });
          }, 1000);
        });
      },
      invalidatesTags: ["Employees"],
    }),

    deleteEmployee: builder.mutation({
      queryFn: async (id) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            data = data.filter((employee) => employee.id !== id);
            resolve({ data: { id } });
          }, 1000);
        });
      },
      invalidatesTags: ["Employees"],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeesApi;
