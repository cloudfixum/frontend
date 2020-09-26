import template from './layout-card-services.template';
import ServicesApi from "../../../shared/services/services-api";
import useData from "../../../hooks/useData";

export default function LayoutCardServices(props) {

    const servicesApi = new ServicesApi();
    const data = useData(servicesApi.getServices);

    return template(data);
}
