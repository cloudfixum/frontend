import template from './layout-card-services.template';

import ServicesApi from '../../../shared/services/services-api';
import usePaginationService from '../../../hooks/usePaginationService';

export default function LayoutCardServices() {
    const servicesApi = new ServicesApi();
    const data = usePaginationService(servicesApi.getServiceForPagination);

    return template(data);
}
