import { ServiceDetailTag } from '@/presentation';
import { serviceList } from '../serviceData';
import { notFound } from 'next/navigation';

// interface Props {
//   params: {
//     id: string;
//   };
// }

export async function generateStaticParams() {
  return services.map(service => ({ id: service.id }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const service = serviceList.find(s => s.id === params.id);

  if (!service) return notFound();

  return <ServiceDetailTag serviceList={service} />;
}
