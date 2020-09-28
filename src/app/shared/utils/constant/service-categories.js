export class ServiceCategories {
    category_model = [
        {
            category: 'health',
            sub_categories: {
                NURSE: 'Nurse',
                NUTRITIONIST: 'Nutritionist',
                PHYCHOLOGIST: 'Phychologist',
                DERMATOLOGIST: 'Dermatologist',
                PEDIATRIST: 'Pediatrist',
                DENTIST: 'Dentist',
                CAREGIVER: 'Caregiver',
            },
        },
        {
            category: 'beauty',
            sub_categories: {
                BARBER: 'Barber',
                DRESSMAKER: 'Dressmaker',
                MAKEUPARTIST: 'Make-up Artist',
                MANICURE: 'Manicure',
                STYLIST: 'Stylist',
                TATTOARTIST: 'Tatto Artist',
            },
        },
        {
            category: 'vehicle',
            sub_categories: {
                TYREREPAIRER: 'Tyre Repairer',
                CARALARM: 'Car Alarm',
                CARPAINTER: 'Car Painter',
                PLATER: 'Plater',
                CARWASH: 'Car Wash',
                CARELECTRICIAN: 'Car Electrician',
                MECHANIC: 'Mechanic',
            },
        },
        {
            category: 'wellness',
            sub_categories: {
                PERSONAL_TRAINER: 'Personal Trainer',
                YOGA: 'Yoga',
                MASSAGETHERAPIST: 'Massage Therapist',
                GYM: 'Gym',
                AROMATHERAPY: 'Aromatherapy',
            },
        },
        {
            category: 'home',
            sub_categories: {
                ELECT_TECH: 'Electrical Technician',
                GAS_OPERATOR: 'Gas Operator',
                PLUMBER: 'Plumber',
                METALLURGICAL: 'Metallurgical',
                BRICKLAYER: 'Bricklayer',
                GARDENER: 'Gardener',
                MAID: 'Maid',
                REPAIR_TECH: 'Repair Technician',
                CARPENTER: 'Carpenter',
                GLAZIER: 'Glazier',
                AIRCON_TECH: 'Air Conditioning Technician',
                PAINTER: 'Painter',
                LOCKSMITH: 'Locksmith',
            },
        },
        {
            category: 'other',
            sub_categories: {
                OTHER: 'Other',
            },
        },
    ];

    getSubCategoriesByType(type) {
        let category = this.category_model.find(
            (category) => category.category === type
        );
        let categories_ordered = Object.keys(category.sub_categories).sort();
        let serviceCategories = {};

        Object.keys(category.sub_categories).forEach((key, index) => {
            serviceCategories[categories_ordered[index]] =
                category.sub_categories[categories_ordered[index]];
        });
        return serviceCategories;
    }

    getCategories() {
        let categories = [];

        this.category_model.forEach((category) => {
            categories.push(category.category);
        });

        return categories.sort();
    }
}
