import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Card, Carousel, Modal } from "flowbite-react";
import {useState } from "react";

const Lista = ({ auth, contacts }) => {
    console.log(contacts);
    const [openModal, setOpenModal] = useState(false);
    
    const [selectedImage, setSelectedImage] = useState(''); // Estado para almacenar la imagen seleccionada

    const handleCardClick = (imagePath) => {
        setSelectedImage(imagePath); // Actualizar la imagen seleccionada
        setOpenModal(true); // Abrir el modal
    };

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
                                
                                <div className="h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
                                    <Carousel slideInterval={5000}>
                                        {contacts?.map((contact) => (

                                            <div key={contact.id} className="flex items-center justify-center" onClick={() => handleCardClick(`/storage/${contact.avatar}`)} // Pasar la ruta de la imagen
                                            >
                                                <Card 
                                                    className="max-w-sm"
                                                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                                                    imgSrc={`/storage/${contact.avatar}`}
                                                >
                                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                        Noteworthy technology acquisitions 2021
                                                    </h5>
                                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                                    </p>
                                                </Card>
                                                
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>

                                <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                                    <img src={selectedImage} alt="" />
                                    
                                </Modal>
                               
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Lista;
