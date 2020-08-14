import template from './layout-card-services.template';

import useData from '../../../hooks/useData';
import ServicesApi from '../../../shared/services/services-api';

export default function LayoutCardServices() {
    const servicesApi = new ServicesApi();

    const data = useData(servicesApi.getServices);

    return template(data);
}
