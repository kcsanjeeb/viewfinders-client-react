// import React, {useEffect, useState, useRef} from 'react';
// import debounce from "lodash.debounce";
// import {getAllUser} from '../../services/user';


// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// function InfiniteScroll(props) {
//     const [loading, setLoading] = useState(true);
//     const [datas, setDatas] = useState([]);
//     const [page, setPage] = useState(1);
//     const scrollContainer = useRef(null);

//     useEffect(() => {
//         console.log('oages', page)
//         fetchMyApi(page);
//     }, [])

//     async function fetchMyApi(page) {
//         try {
//             setLoading(true)
//             let response = await getAllUser(page)
//             setDatas(response.data);
//             setLoading(false)
//             setPage(page + 1)
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
//     console.log(datas.results)
//     console.log(page)

//     const onScrollHandler = debounce(() => {
//         const container = scrollContainer.current
//         console.log(container)
//         if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
//             console.log("buttom of page")
//             if (loading == false) {
//                 fetchMyApi(page)
//             }
//         }
//     }, 250)

//     return (
//         // <div onScroll={onScrollHandler} ref={scrollContainer} className={"music-card"}>
//         //     {
//         //         datas.results && datas.results.map(data => 
//         //             <div   key={data.login.uuid}>
//         //                 <p>test</p>
//         //            <p>{data.gender} </p>
//         //            <p>{data.email} </p>
//         //            <p>{data.phone} </p>
//         //            </div>
//         //        )
//         //     }
//         // </div>
//         <div>
//     <TableContainer  component={Paper} onScroll={onScrollHandler} ref={scrollContainer}>
//     <Table aria-label="simple table">
//         <TableHead>
//             <TableRow>
//                 <TableCell >Date</TableCell>
//                 <TableCell>Price</TableCell>
//                 <TableCell>ProductName</TableCell>
//             </TableRow>
//         </TableHead>
//         <TableBody>
//             {datas.results && datas.results.map((data) => (

//                 < TableRow  >
//                     <TableCell>{data.gender}</TableCell>
//                     <TableCell >{data.email}</TableCell>
//                     <TableCell >{data.phone}</TableCell>
//                 </TableRow>
//             ))}
//         </TableBody>
//     </Table>
// </TableContainer >
//     </div>
//     );
// }

// export default InfiniteScroll;

import React, { useState, useEffect, useRef } from 'react';
import {getAllUser} from '../../services/user';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import debounce from "lodash.debounce";


function createData(Date, Price, ProductName, Uuid) {
    return { Date, Price, ProductName, Uuid };
}


export default function Tables() {
    const [datas, setDatas] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState({
        startDate: null,
        endDate: null
    });
    const scrollContainer = useRef(null);


    useEffect(() => {
        fetchMyApi(page);
    }, [])

    async function fetchMyApi(page) {
        try {
            setLoading(true)
            let response = await getAllUser(page)
            console.log(response.data.results)
            const rows = response.data.results.map(item => createData(item.email, item.gender, item.phone, item.phone))
            setDatas(prev => [...prev, ...rows]);
            setLoading(false)
            setPage(page + 1)
        }
        catch (error) {
            console.log(error)
        }
    }
    console.log(datas)

    const onScrollHandler = debounce(() => {
        const container = scrollContainer?.current
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
            console.log("buttom of page")
            if (loading == false) {
                fetchMyApi(page)
            }
        }
    }, 250)
    console.log('called', scrollContainer)

    return (
        <>

            <TableContainer style={{marginTop: 20}} component={Paper} onScroll={onScrollHandler} ref={scrollContainer}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Date</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>ProductName</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas && datas.map((data) => (

                            < TableRow  >
                                < TableRow  >
                                <TableCell>{data.Date}</TableCell>
                                <TableCell >{data.Price}</TableCell>
                                <TableCell >{data.ProductName}</TableCell>
                            </TableRow>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );
}
