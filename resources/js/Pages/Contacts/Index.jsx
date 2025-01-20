import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

const Index = ({auth}) => {
  return (
    <AuthenticatedLayout 
    user={auth.user}

    username={auth.user.name}
    
    header={
        <div className="flex items-center justify-between"> 

        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Contactos
        </h2>

        <Link href={route('contact.create')} > Crear Contacto</Link>
</div>
    }
    
>
    <Head title="Dashboard" />

    <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    Listado de Contactos
                </div>
            </div>
        </div>
    </div>

    </AuthenticatedLayout>
  )
}

export default Index