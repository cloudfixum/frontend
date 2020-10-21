export class ServiceCategories {
    category_model = [
        {
            category: 'Health',
            image: 'health.jpg',
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
            category: 'Beauty',
            image: 'beauty.jpg',
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
            category: 'Vehicle',
            image: 'vehicle.jpg',
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
            category: 'Wellness',
            image: 'wellness.jpg',
            sub_categories: {
                PERSONAL_TRAINER: 'Personal Trainer',
                YOGA: 'Yoga',
                MASSAGETHERAPIST: 'Massage Therapist',
                GYM: 'Gym',
                AROMATHERAPY: 'Aromatherapy',
            },
        },
        {
            category: 'Home',
            image: 'home.jpg',
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
            category: 'Other',
            image: 'other.png',
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

    getAllSubCategories() {
        let categories = [];
        this.category_model.forEach((category) => {
            Object.keys(category.sub_categories).forEach((key) => {
                categories.push({ [key]: category.sub_categories[key] });
            });
        });
        return categories;
    }

    getCategories() {
        let categories = [];

        this.category_model.forEach((category) => {
            categories.push(category.category);
        });

        return categories.sort();
    }

    getImageBycategory(categoryId) {
        let image = '';
        this.category_model.forEach((category) => {
            if (category.category === categoryId) {
                image = category.image;
            }
        });

        return image;
    }
}
