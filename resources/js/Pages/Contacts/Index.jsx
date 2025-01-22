import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, contacts }) => {
    console.log(contacts);

    return (
        <AuthenticatedLayout
            user={auth.user}
            username={auth.user.name}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Contactos
                    </h2>

                    <Link href={route("contact.create")}> Crear Contacto</Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Nombre
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Telefono
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Visibilidad
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Avatar
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contacts?.map((contact) => (
                                            <tr
                                                key={contact.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {contact.name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {contact.phone}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {contact.visibility}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <img
                                                        className="w-16 h-14 rounded-full"
                                                        src={`/storage/${contact.avatar}`}
                                                    />
                                                </td>

                                                <td className="px-6 py-4">
                                                    <div className="space-x-5">
                                                        <Link
                                                            href={route(
                                                                "contact.edit",
                                                                [contact.id]
                                                            )}
                                                        >
                                                            Editar
                                                        </Link>
                                                        <Link
                                                            href={route(
                                                                "contact.destroy",
                                                                [contact.id]
                                                            )}
                                                            method="delete"
                                                        >
                                                            Eliminar
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
