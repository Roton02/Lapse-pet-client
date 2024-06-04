// const {user} = useAuth()
//     const axiosSecure = useAxiosPublic()
//     const { data: peats = [], refetch } = useQuery({
//         queryKey: ['peats'],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`http://localhost:5000/myAdded/${user.email}`);
//             return res.data;
//         }
//     })
//     console.log(peats);