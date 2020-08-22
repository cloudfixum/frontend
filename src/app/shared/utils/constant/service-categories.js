export class ServiceCategories {
    categories = {
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
        OTHER: 'Other'
    }

    getCategories() {
        let categories_ordered = Object.keys(this.categories).sort();
        let serviceCategories = {};

        Object.keys(this.categories).forEach((key, index) => {
            serviceCategories[categories_ordered[index]] = this.categories[categories_ordered[index]]
        })

        return serviceCategories;
    }
}

