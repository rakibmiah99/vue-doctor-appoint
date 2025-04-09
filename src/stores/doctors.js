import {defineStore} from "pinia";
import {reactive} from "vue";

export const useDoctorsStore = defineStore('doctors', ()  => {
    const doctors = reactive([
        {
            id: 1,
            name: "Dr. Habibullah",
            education: "BDS, FCPS (Dental Surgery)",
            specialty: "Dental Specialist",
            open: ["Fri: 4PM - 6PM", "Sat: 2PM - 6PM"],
            experience: "10 years",
            rating: 4.6,
            location: "Dhaka Dental Hospital",
            contact: "+8801712345671",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8ZHQEXFF5oSIzXifb0rWe70DxdMyW4nWvA&s"
        },
        {
            id: 2,
            name: "Dr. Nafisa Islam",
            education: "MBBS, FCPS (Gynecology)",
            specialty: "Gynecologist",
            open: ["Sun: 10AM - 1PM", "Tue: 4PM - 7PM"],
            experience: "12 years",
            rating: 4.8,
            location: "Green Life Hospital",
            contact: "+8801712345672",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4Kk3Ijg4KPDaJH4A3JUfgJYEBuoAfYJRjQ&s"
        },
        {
            id: 3,
            name: "Dr. Mahmud Hasan",
            education: "MBBS, MD (Cardiology)",
            specialty: "Cardiologist",
            open: ["Mon: 5PM - 8PM", "Wed: 3PM - 6PM"],
            experience: "15 years",
            rating: 4.9,
            location: "National Heart Foundation",
            contact: "+8801712345673",
            image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
        },
        {
            id: 4,
            name: "Dr. Sarah Rahman",
            education: "MBBS, DCH",
            specialty: "Child Specialist",
            open: ["Thu: 9AM - 12PM", "Sat: 2PM - 5PM"],
            experience: "9 years",
            rating: 4.7,
            location: "Shishu Hospital",
            contact: "+8801712345674",
            image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg"
        },
        {
            id: 5,
            name: "Dr. Khalid Jamil",
            education: "MBBS, MS (Ortho)",
            specialty: "Orthopedic Surgeon",
            open: ["Sun: 3PM - 6PM", "Wed: 11AM - 2PM"],
            experience: "14 years",
            rating: 4.5,
            location: "Labaid Hospital",
            contact: "+8801712345675",
            image: "https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE="
        },
        {
            id: 6,
            name: "Dr. Ayesha Siddique",
            education: "MBBS, FCPS (Dermatology)",
            specialty: "Dermatologist",
            open: ["Tue: 1PM - 5PM", "Fri: 10AM - 1PM"],
            experience: "11 years",
            rating: 4.6,
            location: "Popular Diagnostic Center",
            contact: "+8801712345676",
            image: "https://t3.ftcdn.net/jpg/03/13/77/82/360_F_313778250_Y0o5can6MA490Nt7G6p03Zfu5fKmWCIv.jpg"
        },
        {
            id: 7,
            name: "Dr. Tareq Mahmud",
            education: "MBBS, MD (Medicine)",
            specialty: "Medicine Specialist",
            open: ["Mon: 4PM - 7PM", "Thu: 10AM - 1PM"],
            experience: "13 years",
            rating: 4.7,
            location: "Ibn Sina Hospital",
            contact: "+8801712345677",
            image: "https://thumbs.dreamstime.com/b/doctor-portrait-hospital-42042245.jpg"
        },
        {
            id: 8,
            name: "Dr. Lamiya Anwar",
            education: "MBBS, MS (ENT)",
            specialty: "ENT Specialist",
            open: ["Wed: 5PM - 8PM", "Fri: 3PM - 6PM"],
            experience: "10 years",
            rating: 4.5,
            location: "Bangabandhu Medical College",
            contact: "+8801712345678",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIdRGCXzBZGBuE3MzgFyoXT3SfTZSGdKQgA&s"
        },
        {
            id: 9,
            name: "Dr. Farhan Kabir",
            education: "MBBS, MS (Neuro Surgery)",
            specialty: "Neurosurgeon",
            open: ["Sun: 12PM - 4PM", "Tue: 10AM - 2PM"],
            experience: "16 years",
            rating: 4.9,
            location: "Square Hospital",
            contact: "+8801712345679",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5xC7l1MPMk1D2hHH_5_xH-Nd5lsogHP_iw&s"
        },
        {
            id: 10,
            name: "Dr. Rafiq Rahman",
            education: "MBBS, FCPS (Psychiatry)",
            specialty: "Psychiatrist",
            open: ["Mon: 2PM - 5PM", "Wed: 3PM - 6PM"],
            experience: "12 years",
            rating: 4.6,
            location: "Mental Health Institute",
            contact: "+8801712345680",
            image: "https://cdn.prod.website-files.com/62d4f06f9c1357a606c3b7ef/65ddf3cdf19abaf5688af2f8_shutterstock_1933145801%20(1).jpg"
        },
        {
            id: 11,
            name: "Dr. Nasima Khatun",
            education: "MBBS, MS (Gastroenterology)",
            specialty: "Gastroenterologist",
            open: ["Tue: 3PM - 6PM", "Thu: 11AM - 2PM"],
            experience: "10 years",
            rating: 4.5,
            location: "Dhaka Medical College",
            contact: "+8801712345681",
            image: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"
        },
        {
            id: 12,
            name: "Dr. Fardin Haque",
            education: "MBBS, D-Ortho",
            specialty: "Orthopedist",
            open: ["Mon: 10AM - 1PM", "Thu: 3PM - 6PM"],
            experience: "8 years",
            rating: 4.3,
            location: "Ibn Sina Specialized Hospital",
            contact: "+8801712345682",
            image: "https://media.istockphoto.com/id/1372002650/photo/cropped-portrait-of-an-attractive-young-female-doctor-standing-with-her-arms-folded-in-the.jpg?s=612x612&w=0&k=20&c=o1QtStNsowOU0HSof6xQ_jZMglU8ZK565gHd655U6S4="
        },
        {
            id: 13,
            name: "Dr. Mehnaz Hossain",
            education: "MBBS, DGO",
            specialty: "Obstetrician",
            open: ["Sun: 9AM - 12PM", "Tue: 2PM - 5PM"],
            experience: "11 years",
            rating: 4.6,
            location: "Bangladesh Specialized Hospital",
            contact: "+8801712345683",
            image: "https://images.healthshots.com/healthshots/en/uploads/2022/07/02195043/doctor-stress.jpg"
        },
        {
            id: 14,
            name: "Dr. Anwar Sadat",
            education: "MBBS, MD (Oncology)",
            specialty: "Oncologist",
            open: ["Mon: 1PM - 4PM", "Fri: 11AM - 2PM"],
            experience: "13 years",
            rating: 4.8,
            location: "Cancer Research Institute",
            contact: "+8801712345684",
            image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 15,
            name: "Dr. Nusrat Jahan",
            education: "MBBS, FCPS (Eye)",
            specialty: "Ophthalmologist",
            open: ["Wed: 9AM - 12PM", "Sat: 3PM - 6PM"],
            experience: "9 years",
            rating: 4.5,
            location: "Islamia Eye Hospital",
            contact: "+8801712345685",
            image: "https://t4.ftcdn.net/jpg/02/20/30/45/360_F_220304581_3BRbk3UhoYrcVlt72fdBcVRHBtHAKuvD.jpg"
        },
        {
            id: 16,
            name: "Dr. Tanvir Ahmed",
            education: "MBBS, MS (Urology)",
            specialty: "Urologist",
            open: ["Tue: 10AM - 1PM", "Thu: 3PM - 6PM"],
            experience: "10 years",
            rating: 4.6,
            location: "Labaid Specialized Hospital",
            contact: "+8801712345686",
            image: "https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg"
        },
        {
            id: 17,
            name: "Dr. Sabrina Afroz",
            education: "MBBS, FCPS (Neurology)",
            specialty: "Neurologist",
            open: ["Sun: 2PM - 5PM", "Wed: 10AM - 1PM"],
            experience: "14 years",
            rating: 4.9,
            location: "United Hospital",
            contact: "+8801712345687",
            image: "https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg"
        },
        {
            id: 18,
            name: "Dr. Kamrul Hasan",
            education: "MBBS, MD (Endocrinology)",
            specialty: "Endocrinologist",
            open: ["Tue: 4PM - 7PM", "Sat: 11AM - 2PM"],
            experience: "12 years",
            rating: 4.7,
            location: "BRB Hospital",
            contact: "+8801712345688",
            image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
        },
        {
            id: 19,
            name: "Dr. Sumaiya Rahim",
            education: "MBBS, FCPS (Radiology)",
            specialty: "Radiologist",
            open: ["Thu: 1PM - 4PM", "Fri: 10AM - 1PM"],
            experience: "10 years",
            rating: 4.5,
            location: "Popular Diagnostic Center",
            contact: "+8801712345689",
            image: "https://physiciansallianceofconnecticut.com/wp-content/uploads/2024/12/AdobeStock_174687350-scaled.jpeg"
        },
        {
            id: 20,
            name: "Dr. Zubair Ahmed",
            education: "MBBS, MD (Nephrology)",
            specialty: "Nephrologist",
            open: ["Mon: 3PM - 6PM", "Wed: 11AM - 2PM"],
            experience: "13 years",
            rating: 4.8,
            location: "Bangabandhu Sheikh Mujib Medical University",
            contact: "+8801712345690",
            image: "https://previews.123rf.com/images/muralinathypr/muralinathypr1306/muralinathypr130600040/20535440-indian-doctor.jpg"
        }
    ])

    return {doctors}
})