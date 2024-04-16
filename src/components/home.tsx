import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, updateUser } from "../redux/slice/userSlice";
import { Loader } from "./loader";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate()

    const { data, loading, error }: any = useSelector((state: any) => state.user);
    const [edit, setEdit] = useState(
        {
            id: "114",
            firstName: "Anbu",
            lastName: "Ramar",
            emailId: "anbu.ramar@coherent.in",
            userName: "Anbu Ramar",
            mobileNo: "9003840702"
        }
    )

    const [paginate, setPaginate] = useState<any>({
        pageNo: 0,
        pageSize: 10,
        search: ''
    })

    const updateUsers = () => {
        dispatch(updateUser(edit))

    }

    useEffect(() => {
        console.log('aaaaaaaaaaaaaa')
        dispatch(fetchAllUsers(paginate))
    }, [paginate]);

    if (loading) {
        return (<Loader />);
    }
    return (
        <>
            <h1>home</h1>
            {/* <button onClick={updateUsers}>Update</button> */}
            <button onClick={() => navigate('/client')}>client</button>

            <button onClick={() => navigate('/staff')}>staff</button>

            {/* {
                data?.data?.map((item: any) => (
                    <div key={item?.id}>
                        <h1>{item?.firstName}</h1>
                        <h1>{item?.lastName}</h1>
                    </div>

                ))
            } */}

        </>
    )
};