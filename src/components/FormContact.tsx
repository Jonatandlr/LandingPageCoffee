'use client'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { buttonVariants } from './ui/button';
import { useToast } from "@/components/ui/use-toast"

const validatonSchema = Yup.object().shape({
  Name: Yup.string().required('Name is required'),
  Email: Yup.string().email('Invalid email').required('Email is required'),
  Message: Yup.string().required('Message is required'),
});


export default function FormiContact() {
  const {toast} = useToast()
  return (
    <div>
      <Formik
        initialValues={{
          Name: '',
          Email: '',
          Message: '',
        }}
        validationSchema={validatonSchema}
        onSubmit={async(values,{resetForm}) => {
          const { Name, Email, Message } = values
          const res = await fetch('/api/resent', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Name, Email, Message })
          })
          const data = await res.json()
          if (data.status === 'ok') {
            toast({
              description: "Tu mensaje ha sido enviado",
            })
            resetForm()
          }else{
            toast({
              description: "Algo salio mal.",
            })

          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="max-w-4xl text-2xl font-normal md:text-3xl lg:text-4xl mb-5 flex justify-start">Contactanos</h2>
              <p className="mt-4 mb-8 mx-auto max-w-lg text-start">
                Si tienes alguna duda o sugerencia, no dudes en contactarnos. Estaremos encantados de atenderte.
              </p>
            </div>

            <div className="flex items-start justify-center ">
              <div className="mr-5 ">
                <div className="flex flex-col mb-5">
                  <label htmlFor="Name" className="text-gray-700">Nombre</label>
                  <Field
                    type="text"
                    name="Name"
                    id="Name"
                    className="border border-gray-400 p-2 rounded-md w-80"
                  />
                  {errors.Name && touched.Name ? (
                    <p className="text-red-500">{errors.Name}</p>
                  ) : null}
                </div>
                <div className="flex flex-col mb-5">
                  <label htmlFor="Email" className="text-gray-700">Email</label>
                  <Field
                    type="email"
                    name="Email"
                    id="Email"
                    className="border border-gray-400 p-2 rounded-md w-80"
                  />
                  {errors.Email && touched.Email ? (
                    <p className="text-red-500">{errors.Email}</p>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col justify-start items-start">
                <label htmlFor="Message" className="text-gray-700">Mensaje</label>
                <Field
                  as="textarea"
                  name="Message"
                  id="Message"
                  className="border border-gray-400 p-2 rounded-md w-80 h-32"
                />
                {errors.Message && touched.Message ? (
                  <p className="text-red-500">{errors.Message}</p>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className={buttonVariants()}
            >Enviar Mensaje</button>

          </Form>
        )}
      </Formik>
    </div>
  )
}
