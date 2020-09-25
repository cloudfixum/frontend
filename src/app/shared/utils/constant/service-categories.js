export class ServiceCategories {

    category_model = [
        {
            category_type: 'sub_categories',
            categories: {
                BARBER: 'Barber',
                ELECT_TECH: 'Electrical Technician',
                GAS_OPERATOR: 'Gas Operator',
                PLUMBER: 'Plumber',
                METALLURGICAL: 'Metallurgical',
                BRICKLAYER: 'Bricklayer',
                CAREGIVER: 'Caregiver',
                MAID: 'Maid',
                REPAIR_TECH: 'Repair Technician',
                MECHANIC: 'Mechanic',
                TECH_SERVICE: 'Technician Service',
                PRIVATE_TUTORING: 'Private Tutoring ',
                PERSONAL_TRAINER: 'Personal Trainer',
                CARPENTER: 'Carpenter',
                GLAZIER: 'Glazier',
                BLACKSMITH: 'Blacksmith',
                COBBLER: 'Cobbler',
                DRESSMAKER: 'Dressmaker',
                AIRCON_TECH: 'Air Conditioning Technician',
                PAINTER: 'Painter',
                LOCKSMITH: 'Locksmith',
                OTHER: 'Other',
                GARDENER: 'Gardener',
            },
        },
        {
            category_type: 'super_categories',
            categories: {
                HEALTH : 'Health',
                BEAUTY: 'Beauty',
                VEHICLE: 'Vehicle',
                WELLNESS: 'Wellness'
            },
        }
    ]

    getCategoriesByType(type){
        let categories = this.category_model.find((category) => category.category_type === type)
        let categories_ordered = Object.keys(categories).sort();
        let serviceCategories = {};

        Object.keys(categories).forEach((key, index) => {
            serviceCategories[categories_ordered[index]] = categories[
                categories_ordered[index]
                ];
        });
        return serviceCategories;
    }

}
