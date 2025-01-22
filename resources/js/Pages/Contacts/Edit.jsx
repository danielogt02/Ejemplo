import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

const Edit = ({ auth, contact }) => {
    const initialValues = {
        name: contact.name,
        avatar: "",
        phone: contact.phone,
        visibility: contact.visibility,
    };

    const { data, setData, errors, post, recentlySuccessful } =
        useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        //console.log(data);
        post(route("contact.update", contact));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            username={auth.user.name}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Actualizar Contacto
                    </h2>

                    <Link href={route("contact.index")}> Contacto</Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="space-y-3">
                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-green-600 text-center">
                                        Contacto Actualizado.
                                    </p>
                                </Transition>

                                <div>
                                    <InputLabel htmlFor="name" value="Nombre" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="phone"
                                        value="Telefono"
                                    />

                                    <TextInput
                                        id="phone"
                                        type="text"
                                        placeholder="+123-456-7890"
                                        name="phone"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.phone}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="avatar"
                                        value="Avatar"
                                    />

                                    <TextInput
                                        id="avatar"
                                        type="file"
                                        placeholder="+123-456-7890"
                                        name="avatar"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("avatar", e.target.files[0])
                                        }
                                    />

                                    <InputError
                                        message={errors.avatar}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="visibility"
                                        value="Visibilidad"
                                    />

                                    <select
                                        name="visibility"
                                        id="visibility"
                                        className="rounded-md w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        defaultValue={data.visibility}
                                        onChange={(e) =>
                                            setData(
                                                "visibility",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value=""></option>
                                        <option value="public">Publico</option>
                                        <option value="private">Privado</option>
                                    </select>

                                    <InputError
                                        message={errors.visibility}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <PrimaryButton>
                                        Actualizar Contacto
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
