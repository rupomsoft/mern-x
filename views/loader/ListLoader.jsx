import React from 'react';
import Skeleton from "react-loading-skeleton";
const ListLoader = () => {
    return (
        <section>
            <div className="container p-20 m-auto">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                    <div className="col-span-4 md:col-span-8 lg:col-span-12">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full text-left border border-separate rounded border-slate-200" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
                                    <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    Array.from({length:6}).map((_,index)=>{
                                        return (
                                            <tr key={index} className={index % 2 === 0 ? "odd:bg-slate-50" : ""}>
                                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                                    <Skeleton/>
                                                </td>
                                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                                    <Skeleton/>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ListLoader;