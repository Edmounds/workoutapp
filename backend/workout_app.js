/*
 Navicat Premium Data Transfer

 Source Server         : MongoDB@localhost
 Source Server Type    : MongoDB
 Source Server Version : 80009 (8.0.9)
 Source Host           : localhost:27017
 Source Schema         : workout_app

 Target Server Type    : MongoDB
 Target Server Version : 80009 (8.0.9)
 File Encoding         : 65001

 Date: 25/05/2025 02:04:25
*/


// ----------------------------
// Collection structure for user_health_data
// ----------------------------
db.getCollection("user_health_data").drop();
db.createCollection("user_health_data");

// ----------------------------
// Documents of user_health_data
// ----------------------------
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720442"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-20T10:39:18.495Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("156"),
        NumberInt("93"),
        NumberInt("97"),
        NumberInt("155"),
        NumberInt("99"),
        NumberInt("159"),
        NumberInt("61"),
        NumberInt("63"),
        NumberInt("97"),
        NumberInt("81")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("117"),
        NumberInt("111"),
        NumberInt("116"),
        NumberInt("105"),
        NumberInt("106"),
        NumberInt("100"),
        NumberInt("124"),
        NumberInt("120"),
        NumberInt("98")
    ],
    paceData: [
        5.5,
        5.7,
        5.9,
        5.4,
        5.5,
        5.6,
        5.7,
        5,
        5.3,
        5.4
    ],
    weekData: [
        NumberInt("58"),
        NumberInt("62"),
        NumberInt("66"),
        NumberInt("54"),
        NumberInt("56"),
        NumberInt("38"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("81"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("81"),
            timestamp: ISODate("2025-05-20T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-20T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-20T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-20T10:39:18.495Z"),
    updateTime: ISODate("2025-05-20T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720443"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-19T10:39:18.495Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("124"),
        NumberInt("146"),
        NumberInt("91"),
        NumberInt("150"),
        NumberInt("89"),
        NumberInt("97"),
        NumberInt("160"),
        NumberInt("142"),
        NumberInt("157"),
        NumberInt("90")
    ],
    stepRateData: [
        NumberInt("116"),
        NumberInt("92"),
        NumberInt("121"),
        NumberInt("113"),
        NumberInt("108"),
        NumberInt("102"),
        NumberInt("106"),
        NumberInt("92"),
        NumberInt("116"),
        NumberInt("107")
    ],
    paceData: [
        5.3,
        5.2,
        5.9,
        5.8,
        5.8,
        5.7,
        5.5,
        5.2,
        5.5,
        5.1
    ],
    weekData: [
        NumberInt("31"),
        NumberInt("71"),
        NumberInt("62"),
        NumberInt("51"),
        NumberInt("66"),
        NumberInt("39"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("90"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-19T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-19T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-19T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:39:18.495Z"),
    updateTime: ISODate("2025-05-19T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720444"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-18T10:39:18.495Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("122"),
        NumberInt("121"),
        NumberInt("118"),
        NumberInt("146"),
        NumberInt("75"),
        NumberInt("67"),
        NumberInt("61"),
        NumberInt("83"),
        NumberInt("77"),
        NumberInt("149")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("112"),
        NumberInt("130"),
        NumberInt("106"),
        NumberInt("109"),
        NumberInt("110"),
        NumberInt("104"),
        NumberInt("90"),
        NumberInt("130"),
        NumberInt("119")
    ],
    paceData: [
        5.6,
        5.3,
        5.5,
        5.3,
        5.7,
        5.1,
        5.5,
        5.3,
        5.8,
        5.4
    ],
    weekData: [
        NumberInt("81"),
        NumberInt("85"),
        NumberInt("36"),
        NumberInt("72"),
        NumberInt("36"),
        NumberInt("83"),
        NumberInt("65")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("149"),
    currentStepRate: NumberInt("119"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("149"),
            timestamp: ISODate("2025-05-18T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-18T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-18T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-18T10:39:18.495Z"),
    updateTime: ISODate("2025-05-18T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720445"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-16T10:39:18.495Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("95"),
        NumberInt("120"),
        NumberInt("73"),
        NumberInt("60"),
        NumberInt("132"),
        NumberInt("66"),
        NumberInt("157"),
        NumberInt("88"),
        NumberInt("81"),
        NumberInt("73")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("129"),
        NumberInt("121"),
        NumberInt("127"),
        NumberInt("91"),
        NumberInt("101"),
        NumberInt("96"),
        NumberInt("105"),
        NumberInt("105"),
        NumberInt("118")
    ],
    paceData: [
        5.2,
        5.5,
        5.8,
        5.9,
        5.1,
        5.8,
        5.2,
        5.3,
        5.5,
        5
    ],
    weekData: [
        NumberInt("80"),
        NumberInt("32"),
        NumberInt("31"),
        NumberInt("39"),
        NumberInt("86"),
        NumberInt("67"),
        NumberInt("51")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("65"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("73"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("73"),
            timestamp: ISODate("2025-05-16T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-05-16T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-16T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:39:18.495Z"),
    updateTime: ISODate("2025-05-16T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720446"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-15T10:39:18.495Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("96"),
        NumberInt("92"),
        NumberInt("72"),
        NumberInt("93"),
        NumberInt("132"),
        NumberInt("134"),
        NumberInt("109"),
        NumberInt("135"),
        NumberInt("87"),
        NumberInt("153")
    ],
    stepRateData: [
        NumberInt("124"),
        NumberInt("122"),
        NumberInt("129"),
        NumberInt("96"),
        NumberInt("114"),
        NumberInt("114"),
        NumberInt("119"),
        NumberInt("115"),
        NumberInt("124"),
        NumberInt("129")
    ],
    paceData: [
        5.3,
        5.1,
        5.5,
        5.7,
        5.1,
        5.8,
        5.1,
        5.4,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("42"),
        NumberInt("68"),
        NumberInt("50"),
        NumberInt("53"),
        NumberInt("86"),
        NumberInt("81"),
        NumberInt("63")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("83"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("153"),
    currentStepRate: NumberInt("129"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("153"),
            timestamp: ISODate("2025-05-15T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-05-15T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-15T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:39:18.495Z"),
    updateTime: ISODate("2025-05-15T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720447"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-13T10:39:18.495Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("73"),
        NumberInt("99"),
        NumberInt("144"),
        NumberInt("149"),
        NumberInt("121"),
        NumberInt("148"),
        NumberInt("111"),
        NumberInt("85"),
        NumberInt("77"),
        NumberInt("135")
    ],
    stepRateData: [
        NumberInt("128"),
        NumberInt("113"),
        NumberInt("99"),
        NumberInt("117"),
        NumberInt("117"),
        NumberInt("120"),
        NumberInt("124"),
        NumberInt("101"),
        NumberInt("115"),
        NumberInt("91")
    ],
    paceData: [
        5.9,
        5.2,
        5.7,
        5.9,
        5.4,
        5.9,
        5.7,
        5.5,
        5.2,
        5.8
    ],
    weekData: [
        NumberInt("74"),
        NumberInt("76"),
        NumberInt("76"),
        NumberInt("83"),
        NumberInt("41"),
        NumberInt("49"),
        NumberInt("81")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("135"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("135"),
            timestamp: ISODate("2025-05-13T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-13T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-13T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:39:18.495Z"),
    updateTime: ISODate("2025-05-13T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720448"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-11T10:39:18.495Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("156"),
        NumberInt("103"),
        NumberInt("109"),
        NumberInt("128"),
        NumberInt("145"),
        NumberInt("83"),
        NumberInt("130"),
        NumberInt("125"),
        NumberInt("126"),
        NumberInt("147")
    ],
    stepRateData: [
        NumberInt("112"),
        NumberInt("126"),
        NumberInt("119"),
        NumberInt("100"),
        NumberInt("97"),
        NumberInt("100"),
        NumberInt("128"),
        NumberInt("117"),
        NumberInt("97"),
        NumberInt("110")
    ],
    paceData: [
        5.3,
        5.4,
        5.7,
        5.5,
        5.7,
        5.2,
        5.8,
        5.4,
        6,
        5
    ],
    weekData: [
        NumberInt("63"),
        NumberInt("59"),
        NumberInt("58"),
        NumberInt("81"),
        NumberInt("77"),
        NumberInt("64"),
        NumberInt("89")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("147"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("147"),
            timestamp: ISODate("2025-05-11T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-05-11T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-11T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:39:18.495Z"),
    updateTime: ISODate("2025-05-11T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720449"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-10T10:39:18.495Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("156"),
        NumberInt("115"),
        NumberInt("97"),
        NumberInt("128"),
        NumberInt("154"),
        NumberInt("61"),
        NumberInt("154"),
        NumberInt("88"),
        NumberInt("78"),
        NumberInt("91")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("93"),
        NumberInt("94"),
        NumberInt("97"),
        NumberInt("130"),
        NumberInt("102"),
        NumberInt("95"),
        NumberInt("90"),
        NumberInt("121"),
        NumberInt("102")
    ],
    paceData: [
        5.6,
        5.4,
        5.4,
        5.9,
        5.5,
        5.4,
        5.6,
        5.5,
        5.7,
        5.9
    ],
    weekData: [
        NumberInt("50"),
        NumberInt("40"),
        NumberInt("78"),
        NumberInt("36"),
        NumberInt("86"),
        NumberInt("73"),
        NumberInt("46")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("27"),
    currentHeartRate: NumberInt("91"),
    currentStepRate: NumberInt("102"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-10T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-05-10T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-10T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:39:18.495Z"),
    updateTime: ISODate("2025-05-10T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72044a"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-09T10:39:18.495Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("91"),
        NumberInt("155"),
        NumberInt("98"),
        NumberInt("87"),
        NumberInt("71"),
        NumberInt("139"),
        NumberInt("73"),
        NumberInt("80"),
        NumberInt("133"),
        NumberInt("103")
    ],
    stepRateData: [
        NumberInt("91"),
        NumberInt("109"),
        NumberInt("93"),
        NumberInt("112"),
        NumberInt("92"),
        NumberInt("110"),
        NumberInt("108"),
        NumberInt("124"),
        NumberInt("112"),
        NumberInt("108")
    ],
    paceData: [
        5.7,
        5.7,
        5.6,
        5.3,
        5.7,
        5.9,
        5.3,
        5,
        5,
        6
    ],
    weekData: [
        NumberInt("63"),
        NumberInt("56"),
        NumberInt("38"),
        NumberInt("34"),
        NumberInt("68"),
        NumberInt("35"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("103"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-05-09T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-09T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-09T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:39:18.495Z"),
    updateTime: ISODate("2025-05-09T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72044b"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-08T10:39:18.495Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("144"),
        NumberInt("77"),
        NumberInt("112"),
        NumberInt("125"),
        NumberInt("120"),
        NumberInt("91"),
        NumberInt("149"),
        NumberInt("100"),
        NumberInt("79"),
        NumberInt("146")
    ],
    stepRateData: [
        NumberInt("107"),
        NumberInt("113"),
        NumberInt("121"),
        NumberInt("117"),
        NumberInt("112"),
        NumberInt("97"),
        NumberInt("92"),
        NumberInt("99"),
        NumberInt("101"),
        NumberInt("127")
    ],
    paceData: [
        5.1,
        5.7,
        5.5,
        5.3,
        5.5,
        5.7,
        5.9,
        5.1,
        5.8,
        5.9
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("67"),
        NumberInt("35"),
        NumberInt("60"),
        NumberInt("81"),
        NumberInt("54"),
        NumberInt("41")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("146"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("146"),
            timestamp: ISODate("2025-05-08T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-08T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-08T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:39:18.495Z"),
    updateTime: ISODate("2025-05-08T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72044c"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-07T10:39:18.495Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("138"),
        NumberInt("95"),
        NumberInt("91"),
        NumberInt("124"),
        NumberInt("156"),
        NumberInt("86"),
        NumberInt("114"),
        NumberInt("114"),
        NumberInt("143"),
        NumberInt("115")
    ],
    stepRateData: [
        NumberInt("103"),
        NumberInt("91"),
        NumberInt("111"),
        NumberInt("111"),
        NumberInt("127"),
        NumberInt("104"),
        NumberInt("95"),
        NumberInt("109"),
        NumberInt("95"),
        NumberInt("91")
    ],
    paceData: [
        5.5,
        5.6,
        5,
        5.3,
        5.6,
        5.1,
        5.8,
        5.1,
        5.6,
        5.4
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("82"),
        NumberInt("57"),
        NumberInt("30"),
        NumberInt("35"),
        NumberInt("80"),
        NumberInt("85")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("115"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-05-07T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-07T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-07T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:39:18.495Z"),
    updateTime: ISODate("2025-05-07T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72044d"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-05T10:39:18.495Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("120"),
        NumberInt("65"),
        NumberInt("101"),
        NumberInt("116"),
        NumberInt("117"),
        NumberInt("108"),
        NumberInt("106"),
        NumberInt("98"),
        NumberInt("90"),
        NumberInt("76")
    ],
    stepRateData: [
        NumberInt("127"),
        NumberInt("125"),
        NumberInt("90"),
        NumberInt("128"),
        NumberInt("129"),
        NumberInt("96"),
        NumberInt("91"),
        NumberInt("107"),
        NumberInt("122"),
        NumberInt("99")
    ],
    paceData: [
        5.8,
        5.3,
        5.7,
        5.9,
        5.7,
        5.5,
        5.3,
        5.6,
        5.9,
        5.8
    ],
    weekData: [
        NumberInt("79"),
        NumberInt("66"),
        NumberInt("74"),
        NumberInt("71"),
        NumberInt("86"),
        NumberInt("47"),
        NumberInt("36")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("76"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("76"),
            timestamp: ISODate("2025-05-05T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-05T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-05T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:39:18.495Z"),
    updateTime: ISODate("2025-05-05T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72044e"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-03T10:39:18.495Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("145"),
        NumberInt("100"),
        NumberInt("91"),
        NumberInt("90"),
        NumberInt("82"),
        NumberInt("103"),
        NumberInt("104"),
        NumberInt("61"),
        NumberInt("157"),
        NumberInt("98")
    ],
    stepRateData: [
        NumberInt("103"),
        NumberInt("94"),
        NumberInt("97"),
        NumberInt("99"),
        NumberInt("117"),
        NumberInt("125"),
        NumberInt("115"),
        NumberInt("93"),
        NumberInt("97"),
        NumberInt("124")
    ],
    paceData: [
        5.5,
        5.5,
        5.4,
        5.9,
        5.8,
        5.7,
        5.8,
        5.8,
        5.6,
        5.2
    ],
    weekData: [
        NumberInt("74"),
        NumberInt("62"),
        NumberInt("43"),
        NumberInt("33"),
        NumberInt("86"),
        NumberInt("65"),
        NumberInt("60")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("98"),
    currentStepRate: NumberInt("124"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-03T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-03T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-03T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:39:18.495Z"),
    updateTime: ISODate("2025-05-03T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72044f"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-02T10:39:18.495Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("119"),
        NumberInt("107"),
        NumberInt("135"),
        NumberInt("60"),
        NumberInt("71"),
        NumberInt("149"),
        NumberInt("89"),
        NumberInt("159"),
        NumberInt("143"),
        NumberInt("78")
    ],
    stepRateData: [
        NumberInt("128"),
        NumberInt("99"),
        NumberInt("118"),
        NumberInt("90"),
        NumberInt("97"),
        NumberInt("115"),
        NumberInt("122"),
        NumberInt("113"),
        NumberInt("126"),
        NumberInt("122")
    ],
    paceData: [
        5.9,
        5.1,
        5.7,
        5.2,
        5.2,
        5.3,
        5.8,
        5.9,
        5.2,
        5.2
    ],
    weekData: [
        NumberInt("82"),
        NumberInt("38"),
        NumberInt("31"),
        NumberInt("42"),
        NumberInt("40"),
        NumberInt("34"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("78"),
    currentStepRate: NumberInt("122"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("78"),
            timestamp: ISODate("2025-05-02T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-05-02T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-02T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:39:18.495Z"),
    updateTime: ISODate("2025-05-02T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720450"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-01T10:39:18.495Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("77"),
        NumberInt("108"),
        NumberInt("98"),
        NumberInt("95"),
        NumberInt("106"),
        NumberInt("74"),
        NumberInt("90"),
        NumberInt("80"),
        NumberInt("117"),
        NumberInt("111")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("108"),
        NumberInt("126"),
        NumberInt("127"),
        NumberInt("130"),
        NumberInt("120"),
        NumberInt("127"),
        NumberInt("125"),
        NumberInt("99"),
        NumberInt("92")
    ],
    paceData: [
        5.7,
        5.7,
        5.4,
        5.2,
        5.1,
        5.4,
        5,
        5.7,
        5.6,
        5.4
    ],
    weekData: [
        NumberInt("35"),
        NumberInt("34"),
        NumberInt("42"),
        NumberInt("58"),
        NumberInt("63"),
        NumberInt("53"),
        NumberInt("41")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("111"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("111"),
            timestamp: ISODate("2025-05-01T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-05-01T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-01T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:39:18.495Z"),
    updateTime: ISODate("2025-05-01T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720451"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-29T10:39:18.495Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("71"),
        NumberInt("107"),
        NumberInt("128"),
        NumberInt("89"),
        NumberInt("62"),
        NumberInt("116"),
        NumberInt("74"),
        NumberInt("82"),
        NumberInt("82"),
        NumberInt("138")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("123"),
        NumberInt("97"),
        NumberInt("128"),
        NumberInt("95"),
        NumberInt("119"),
        NumberInt("107"),
        NumberInt("119"),
        NumberInt("99"),
        NumberInt("96")
    ],
    paceData: [
        5.1,
        5.9,
        5.8,
        5.7,
        5.5,
        5,
        5.5,
        5.8,
        5.9,
        5.8
    ],
    weekData: [
        NumberInt("86"),
        NumberInt("52"),
        NumberInt("78"),
        NumberInt("63"),
        NumberInt("41"),
        NumberInt("80"),
        NumberInt("51")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("81"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("138"),
    currentStepRate: NumberInt("96"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("138"),
            timestamp: ISODate("2025-04-29T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-29T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-29T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:39:18.495Z"),
    updateTime: ISODate("2025-04-29T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720452"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-28T10:39:18.495Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("68"),
        NumberInt("156"),
        NumberInt("74"),
        NumberInt("150"),
        NumberInt("122"),
        NumberInt("121"),
        NumberInt("148"),
        NumberInt("146"),
        NumberInt("104"),
        NumberInt("68")
    ],
    stepRateData: [
        NumberInt("108"),
        NumberInt("91"),
        NumberInt("101"),
        NumberInt("122"),
        NumberInt("126"),
        NumberInt("97"),
        NumberInt("121"),
        NumberInt("117"),
        NumberInt("103"),
        NumberInt("98")
    ],
    paceData: [
        5.3,
        5.6,
        5.9,
        5.3,
        5.9,
        5.4,
        5.5,
        5.7,
        5.9,
        5.3
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("72"),
        NumberInt("55"),
        NumberInt("30"),
        NumberInt("86"),
        NumberInt("65"),
        NumberInt("70")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("68"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("68"),
            timestamp: ISODate("2025-04-28T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-28T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-28T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:39:18.495Z"),
    updateTime: ISODate("2025-04-28T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720453"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-26T10:39:18.495Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("104"),
        NumberInt("153"),
        NumberInt("139"),
        NumberInt("94"),
        NumberInt("138"),
        NumberInt("124"),
        NumberInt("99"),
        NumberInt("142"),
        NumberInt("139"),
        NumberInt("121")
    ],
    stepRateData: [
        NumberInt("117"),
        NumberInt("124"),
        NumberInt("122"),
        NumberInt("99"),
        NumberInt("115"),
        NumberInt("115"),
        NumberInt("106"),
        NumberInt("104"),
        NumberInt("99"),
        NumberInt("128")
    ],
    paceData: [
        5.3,
        6,
        5.7,
        5.1,
        5.3,
        5.3,
        5.2,
        5.5,
        5.7,
        5.4
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("84"),
        NumberInt("48"),
        NumberInt("65"),
        NumberInt("59"),
        NumberInt("44"),
        NumberInt("32")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("121"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-04-26T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-04-26T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-26T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:39:18.495Z"),
    updateTime: ISODate("2025-04-26T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720454"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-25T10:39:18.495Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("131"),
        NumberInt("122"),
        NumberInt("109"),
        NumberInt("67"),
        NumberInt("62"),
        NumberInt("149"),
        NumberInt("106"),
        NumberInt("142"),
        NumberInt("98"),
        NumberInt("142")
    ],
    stepRateData: [
        NumberInt("97"),
        NumberInt("98"),
        NumberInt("101"),
        NumberInt("107"),
        NumberInt("92"),
        NumberInt("123"),
        NumberInt("129"),
        NumberInt("118"),
        NumberInt("94"),
        NumberInt("91")
    ],
    paceData: [
        5.8,
        6,
        5.1,
        5,
        5.7,
        5.7,
        5.6,
        5.6,
        5.3,
        5.4
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("36"),
        NumberInt("88"),
        NumberInt("35"),
        NumberInt("58"),
        NumberInt("55"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("65"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("142"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("142"),
            timestamp: ISODate("2025-04-25T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-04-25T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-25T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:39:18.495Z"),
    updateTime: ISODate("2025-04-25T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720455"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-24T10:39:18.495Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("124"),
        NumberInt("156"),
        NumberInt("108"),
        NumberInt("60"),
        NumberInt("116"),
        NumberInt("87"),
        NumberInt("118"),
        NumberInt("106"),
        NumberInt("90"),
        NumberInt("128")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("120"),
        NumberInt("106"),
        NumberInt("106"),
        NumberInt("128"),
        NumberInt("125"),
        NumberInt("98"),
        NumberInt("95"),
        NumberInt("129"),
        NumberInt("121")
    ],
    paceData: [
        5.4,
        5.9,
        6,
        5.6,
        5.5,
        5.8,
        5.9,
        5.3,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("42"),
        NumberInt("59"),
        NumberInt("57"),
        NumberInt("58"),
        NumberInt("45"),
        NumberInt("53"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("72"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("128"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-04-24T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-04-24T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-24T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:39:18.495Z"),
    updateTime: ISODate("2025-04-24T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720456"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-22T10:39:18.495Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("124"),
        NumberInt("119"),
        NumberInt("60"),
        NumberInt("70"),
        NumberInt("144"),
        NumberInt("83"),
        NumberInt("108"),
        NumberInt("137"),
        NumberInt("108"),
        NumberInt("70")
    ],
    stepRateData: [
        NumberInt("107"),
        NumberInt("122"),
        NumberInt("128"),
        NumberInt("113"),
        NumberInt("112"),
        NumberInt("94"),
        NumberInt("112"),
        NumberInt("95"),
        NumberInt("116"),
        NumberInt("107")
    ],
    paceData: [
        5,
        5.9,
        5.4,
        5.4,
        5.3,
        5.4,
        5.9,
        5.4,
        5.8,
        6
    ],
    weekData: [
        NumberInt("42"),
        NumberInt("32"),
        NumberInt("84"),
        NumberInt("30"),
        NumberInt("80"),
        NumberInt("52"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("86"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("70"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("70"),
            timestamp: ISODate("2025-04-22T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-22T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-22T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:39:18.495Z"),
    updateTime: ISODate("2025-04-22T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720457"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-21T10:39:18.495Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("77"),
        NumberInt("151"),
        NumberInt("132"),
        NumberInt("77"),
        NumberInt("123"),
        NumberInt("95"),
        NumberInt("83"),
        NumberInt("130"),
        NumberInt("68"),
        NumberInt("88")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("120"),
        NumberInt("94"),
        NumberInt("124"),
        NumberInt("95"),
        NumberInt("108"),
        NumberInt("106"),
        NumberInt("100"),
        NumberInt("115"),
        NumberInt("110")
    ],
    paceData: [
        5.8,
        5.9,
        5.4,
        5.1,
        5.9,
        5.2,
        5.6,
        6,
        6,
        6
    ],
    weekData: [
        NumberInt("85"),
        NumberInt("81"),
        NumberInt("73"),
        NumberInt("61"),
        NumberInt("39"),
        NumberInt("57"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("88"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("88"),
            timestamp: ISODate("2025-04-21T10:39:18.495Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-04-21T10:39:18.495Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-21T10:39:18.495Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:39:18.495Z"),
    updateTime: ISODate("2025-04-21T10:39:18.495Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720458"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-20T10:39:18.503Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("97"),
        NumberInt("134"),
        NumberInt("97"),
        NumberInt("159"),
        NumberInt("82"),
        NumberInt("76"),
        NumberInt("135"),
        NumberInt("71"),
        NumberInt("74"),
        NumberInt("124")
    ],
    stepRateData: [
        NumberInt("103"),
        NumberInt("123"),
        NumberInt("125"),
        NumberInt("128"),
        NumberInt("110"),
        NumberInt("105"),
        NumberInt("120"),
        NumberInt("120"),
        NumberInt("97"),
        NumberInt("91")
    ],
    paceData: [
        6,
        5.5,
        5.8,
        5.2,
        5.3,
        5.6,
        5.4,
        5.4,
        5.9,
        5.2
    ],
    weekData: [
        NumberInt("73"),
        NumberInt("48"),
        NumberInt("82"),
        NumberInt("64"),
        NumberInt("68"),
        NumberInt("79"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("124"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-20T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-20T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-20T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-20T10:39:18.503Z"),
    updateTime: ISODate("2025-05-20T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720459"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-19T10:39:18.503Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("146"),
        NumberInt("83"),
        NumberInt("64"),
        NumberInt("131"),
        NumberInt("76"),
        NumberInt("125"),
        NumberInt("134"),
        NumberInt("159"),
        NumberInt("144"),
        NumberInt("107")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("120"),
        NumberInt("90"),
        NumberInt("115"),
        NumberInt("92"),
        NumberInt("94"),
        NumberInt("102"),
        NumberInt("103"),
        NumberInt("104"),
        NumberInt("98")
    ],
    paceData: [
        5.6,
        5.7,
        5.3,
        5.2,
        5.4,
        5.1,
        5.6,
        5.7,
        5.8,
        5.7
    ],
    weekData: [
        NumberInt("59"),
        NumberInt("35"),
        NumberInt("41"),
        NumberInt("83"),
        NumberInt("41"),
        NumberInt("42"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("107"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-19T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-19T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-19T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:39:18.503Z"),
    updateTime: ISODate("2025-05-19T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72045a"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-18T10:39:18.503Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("160"),
        NumberInt("61"),
        NumberInt("160"),
        NumberInt("88"),
        NumberInt("137"),
        NumberInt("66"),
        NumberInt("70"),
        NumberInt("106"),
        NumberInt("101"),
        NumberInt("84")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("103"),
        NumberInt("122"),
        NumberInt("118"),
        NumberInt("111"),
        NumberInt("102"),
        NumberInt("130"),
        NumberInt("94"),
        NumberInt("128"),
        NumberInt("103")
    ],
    paceData: [
        5.2,
        5.9,
        5.2,
        5.7,
        5.1,
        5.4,
        6,
        5.3,
        5.3,
        5.7
    ],
    weekData: [
        NumberInt("89"),
        NumberInt("63"),
        NumberInt("56"),
        NumberInt("65"),
        NumberInt("45"),
        NumberInt("45"),
        NumberInt("79")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("67"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("84"),
    currentStepRate: NumberInt("103"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("84"),
            timestamp: ISODate("2025-05-18T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-05-18T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-18T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-18T10:39:18.503Z"),
    updateTime: ISODate("2025-05-18T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72045b"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-16T10:39:18.503Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("104"),
        NumberInt("69"),
        NumberInt("66"),
        NumberInt("90"),
        NumberInt("126"),
        NumberInt("118"),
        NumberInt("98"),
        NumberInt("147"),
        NumberInt("118"),
        NumberInt("154")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("121"),
        NumberInt("95"),
        NumberInt("119"),
        NumberInt("110"),
        NumberInt("97"),
        NumberInt("119"),
        NumberInt("107"),
        NumberInt("96"),
        NumberInt("105")
    ],
    paceData: [
        5.5,
        5.3,
        5.3,
        5.3,
        5.3,
        5.6,
        5.6,
        5,
        5.7,
        5.4
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("49"),
        NumberInt("82"),
        NumberInt("78"),
        NumberInt("67"),
        NumberInt("73"),
        NumberInt("65")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("154"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("154"),
            timestamp: ISODate("2025-05-16T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-05-16T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-16T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:39:18.503Z"),
    updateTime: ISODate("2025-05-16T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72045c"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-15T10:39:18.503Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("127"),
        NumberInt("132"),
        NumberInt("151"),
        NumberInt("141"),
        NumberInt("61"),
        NumberInt("88"),
        NumberInt("81"),
        NumberInt("96"),
        NumberInt("137"),
        NumberInt("87")
    ],
    stepRateData: [
        NumberInt("125"),
        NumberInt("118"),
        NumberInt("95"),
        NumberInt("105"),
        NumberInt("119"),
        NumberInt("127"),
        NumberInt("125"),
        NumberInt("90"),
        NumberInt("111"),
        NumberInt("106")
    ],
    paceData: [
        5.1,
        5.7,
        5.1,
        5.5,
        5.7,
        5.7,
        5.1,
        5.1,
        5.9,
        5.8
    ],
    weekData: [
        NumberInt("31"),
        NumberInt("82"),
        NumberInt("67"),
        NumberInt("58"),
        NumberInt("34"),
        NumberInt("89"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("87"),
    currentStepRate: NumberInt("106"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("87"),
            timestamp: ISODate("2025-05-15T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-15T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-15T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:39:18.503Z"),
    updateTime: ISODate("2025-05-15T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72045d"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-14T10:39:18.503Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("144"),
        NumberInt("139"),
        NumberInt("98"),
        NumberInt("86"),
        NumberInt("113"),
        NumberInt("156"),
        NumberInt("135"),
        NumberInt("124"),
        NumberInt("141"),
        NumberInt("108")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("104"),
        NumberInt("127"),
        NumberInt("120"),
        NumberInt("109"),
        NumberInt("122"),
        NumberInt("99"),
        NumberInt("99"),
        NumberInt("128"),
        NumberInt("96")
    ],
    paceData: [
        5.7,
        5.3,
        5.3,
        5.2,
        5.8,
        5.8,
        5.3,
        5.3,
        6,
        5.9
    ],
    weekData: [
        NumberInt("82"),
        NumberInt("39"),
        NumberInt("60"),
        NumberInt("43"),
        NumberInt("35"),
        NumberInt("58"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("108"),
    currentStepRate: NumberInt("96"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-14T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-14T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-14T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:39:18.503Z"),
    updateTime: ISODate("2025-05-14T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72045e"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-13T10:39:18.503Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("146"),
        NumberInt("141"),
        NumberInt("154"),
        NumberInt("116"),
        NumberInt("138"),
        NumberInt("89"),
        NumberInt("150"),
        NumberInt("137"),
        NumberInt("131"),
        NumberInt("148")
    ],
    stepRateData: [
        NumberInt("128"),
        NumberInt("90"),
        NumberInt("90"),
        NumberInt("92"),
        NumberInt("100"),
        NumberInt("118"),
        NumberInt("122"),
        NumberInt("113"),
        NumberInt("123"),
        NumberInt("99")
    ],
    paceData: [
        5.2,
        6,
        6,
        5.2,
        5.2,
        5.1,
        5.3,
        5.9,
        5,
        5.4
    ],
    weekData: [
        NumberInt("33"),
        NumberInt("30"),
        NumberInt("62"),
        NumberInt("50"),
        NumberInt("74"),
        NumberInt("86"),
        NumberInt("52")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("148"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("148"),
            timestamp: ISODate("2025-05-13T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-13T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-13T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:39:18.503Z"),
    updateTime: ISODate("2025-05-13T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72045f"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-11T10:39:18.503Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("120"),
        NumberInt("72"),
        NumberInt("123"),
        NumberInt("68"),
        NumberInt("103"),
        NumberInt("111"),
        NumberInt("72"),
        NumberInt("148"),
        NumberInt("98"),
        NumberInt("89")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("115"),
        NumberInt("96"),
        NumberInt("114"),
        NumberInt("94"),
        NumberInt("110"),
        NumberInt("91"),
        NumberInt("109"),
        NumberInt("106"),
        NumberInt("119")
    ],
    paceData: [
        5,
        5.2,
        5,
        5.9,
        5.2,
        5.6,
        5.3,
        5.8,
        5.4,
        5.1
    ],
    weekData: [
        NumberInt("54"),
        NumberInt("43"),
        NumberInt("86"),
        NumberInt("73"),
        NumberInt("49"),
        NumberInt("36"),
        NumberInt("36")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("23"),
    currentHeartRate: NumberInt("89"),
    currentStepRate: NumberInt("119"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("89"),
            timestamp: ISODate("2025-05-11T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-11T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-11T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:39:18.503Z"),
    updateTime: ISODate("2025-05-11T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720460"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-10T10:39:18.503Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("79"),
        NumberInt("116"),
        NumberInt("104"),
        NumberInt("82"),
        NumberInt("139"),
        NumberInt("143"),
        NumberInt("72"),
        NumberInt("100"),
        NumberInt("158"),
        NumberInt("94")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("104"),
        NumberInt("117"),
        NumberInt("90"),
        NumberInt("130"),
        NumberInt("115"),
        NumberInt("102"),
        NumberInt("102"),
        NumberInt("97"),
        NumberInt("113")
    ],
    paceData: [
        5.6,
        5,
        5.3,
        5.1,
        5.3,
        5.4,
        5.4,
        5.9,
        5.7,
        5.7
    ],
    weekData: [
        NumberInt("46"),
        NumberInt("87"),
        NumberInt("31"),
        NumberInt("80"),
        NumberInt("33"),
        NumberInt("34"),
        NumberInt("58")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("94"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-05-10T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-10T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-10T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:39:18.503Z"),
    updateTime: ISODate("2025-05-10T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720461"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-09T10:39:18.503Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("88"),
        NumberInt("148"),
        NumberInt("69"),
        NumberInt("147"),
        NumberInt("62"),
        NumberInt("129"),
        NumberInt("157"),
        NumberInt("148"),
        NumberInt("79"),
        NumberInt("97")
    ],
    stepRateData: [
        NumberInt("122"),
        NumberInt("129"),
        NumberInt("125"),
        NumberInt("129"),
        NumberInt("100"),
        NumberInt("101"),
        NumberInt("99"),
        NumberInt("113"),
        NumberInt("103"),
        NumberInt("99")
    ],
    paceData: [
        5.9,
        5.5,
        5.9,
        5.2,
        5.9,
        5.6,
        5.6,
        5.3,
        5.8,
        5.7
    ],
    weekData: [
        NumberInt("60"),
        NumberInt("39"),
        NumberInt("74"),
        NumberInt("40"),
        NumberInt("61"),
        NumberInt("44"),
        NumberInt("77")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("97"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-09T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-09T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-09T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:39:18.503Z"),
    updateTime: ISODate("2025-05-09T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720462"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-08T10:39:18.503Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("89"),
        NumberInt("103"),
        NumberInt("100"),
        NumberInt("149"),
        NumberInt("114"),
        NumberInt("127"),
        NumberInt("124"),
        NumberInt("65"),
        NumberInt("96"),
        NumberInt("67")
    ],
    stepRateData: [
        NumberInt("111"),
        NumberInt("109"),
        NumberInt("124"),
        NumberInt("100"),
        NumberInt("102"),
        NumberInt("109"),
        NumberInt("129"),
        NumberInt("96"),
        NumberInt("126"),
        NumberInt("116")
    ],
    paceData: [
        5.6,
        5.4,
        5.4,
        5.7,
        5.4,
        5.7,
        5.1,
        5.8,
        5.6,
        6
    ],
    weekData: [
        NumberInt("36"),
        NumberInt("69"),
        NumberInt("78"),
        NumberInt("78"),
        NumberInt("65"),
        NumberInt("57"),
        NumberInt("51")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("67"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("67"),
            timestamp: ISODate("2025-05-08T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-08T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-08T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:39:18.503Z"),
    updateTime: ISODate("2025-05-08T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720463"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-07T10:39:18.503Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("132"),
        NumberInt("75"),
        NumberInt("145"),
        NumberInt("97"),
        NumberInt("104"),
        NumberInt("159"),
        NumberInt("100"),
        NumberInt("67"),
        NumberInt("83"),
        NumberInt("84")
    ],
    stepRateData: [
        NumberInt("122"),
        NumberInt("114"),
        NumberInt("118"),
        NumberInt("90"),
        NumberInt("115"),
        NumberInt("113"),
        NumberInt("104"),
        NumberInt("123"),
        NumberInt("90"),
        NumberInt("99")
    ],
    paceData: [
        5.8,
        5.1,
        5.1,
        5.1,
        5.1,
        5.1,
        5.9,
        5.1,
        5.6,
        6
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("90"),
        NumberInt("47"),
        NumberInt("56"),
        NumberInt("36"),
        NumberInt("56"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("84"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("84"),
            timestamp: ISODate("2025-05-07T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-07T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-07T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:39:18.503Z"),
    updateTime: ISODate("2025-05-07T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720464"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-06T10:39:18.503Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("91"),
        NumberInt("160"),
        NumberInt("68"),
        NumberInt("123"),
        NumberInt("60"),
        NumberInt("123"),
        NumberInt("112"),
        NumberInt("85"),
        NumberInt("129"),
        NumberInt("128")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("129"),
        NumberInt("94"),
        NumberInt("105"),
        NumberInt("120"),
        NumberInt("128"),
        NumberInt("102"),
        NumberInt("95"),
        NumberInt("90"),
        NumberInt("98")
    ],
    paceData: [
        5.3,
        5.3,
        5.8,
        5.3,
        5.9,
        5.3,
        5.6,
        5.9,
        5.2,
        5.6
    ],
    weekData: [
        NumberInt("65"),
        NumberInt("87"),
        NumberInt("32"),
        NumberInt("52"),
        NumberInt("61"),
        NumberInt("87"),
        NumberInt("39")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("128"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-06T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-06T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-06T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:39:18.503Z"),
    updateTime: ISODate("2025-05-06T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720465"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-05T10:39:18.503Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("68"),
        NumberInt("141"),
        NumberInt("75"),
        NumberInt("116"),
        NumberInt("135"),
        NumberInt("122"),
        NumberInt("83"),
        NumberInt("76"),
        NumberInt("76"),
        NumberInt("81")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("90"),
        NumberInt("104"),
        NumberInt("129"),
        NumberInt("100"),
        NumberInt("123"),
        NumberInt("101"),
        NumberInt("124"),
        NumberInt("91"),
        NumberInt("110")
    ],
    paceData: [
        5.8,
        5.8,
        5.8,
        5.8,
        5,
        5.5,
        5.7,
        5.2,
        6,
        5.2
    ],
    weekData: [
        NumberInt("43"),
        NumberInt("33"),
        NumberInt("63"),
        NumberInt("53"),
        NumberInt("33"),
        NumberInt("87"),
        NumberInt("57")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("81"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("81"),
            timestamp: ISODate("2025-05-05T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-05-05T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-05T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:39:18.503Z"),
    updateTime: ISODate("2025-05-05T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720466"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-04T10:39:18.503Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("152"),
        NumberInt("60"),
        NumberInt("73"),
        NumberInt("88"),
        NumberInt("107"),
        NumberInt("115"),
        NumberInt("62"),
        NumberInt("143"),
        NumberInt("102"),
        NumberInt("104")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("122"),
        NumberInt("111"),
        NumberInt("111"),
        NumberInt("102"),
        NumberInt("100"),
        NumberInt("99"),
        NumberInt("111"),
        NumberInt("118"),
        NumberInt("98")
    ],
    paceData: [
        5.6,
        5.1,
        5.5,
        5.3,
        5.5,
        5.6,
        5.1,
        5.4,
        5.3,
        5.4
    ],
    weekData: [
        NumberInt("65"),
        NumberInt("54"),
        NumberInt("55"),
        NumberInt("87"),
        NumberInt("83"),
        NumberInt("34"),
        NumberInt("33")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("104"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-05-04T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-04T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-04T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:39:18.503Z"),
    updateTime: ISODate("2025-05-04T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720467"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-03T10:39:18.503Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("63"),
        NumberInt("63"),
        NumberInt("91"),
        NumberInt("94"),
        NumberInt("143"),
        NumberInt("95"),
        NumberInt("99"),
        NumberInt("121"),
        NumberInt("86"),
        NumberInt("64")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("122"),
        NumberInt("122"),
        NumberInt("127"),
        NumberInt("101"),
        NumberInt("130"),
        NumberInt("127"),
        NumberInt("128"),
        NumberInt("94"),
        NumberInt("112")
    ],
    paceData: [
        6,
        5.5,
        5.8,
        6,
        5.3,
        5.4,
        5.9,
        5.5,
        5.4,
        5.9
    ],
    weekData: [
        NumberInt("68"),
        NumberInt("50"),
        NumberInt("71"),
        NumberInt("82"),
        NumberInt("64"),
        NumberInt("43"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("64"),
    currentStepRate: NumberInt("112"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("64"),
            timestamp: ISODate("2025-05-03T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-03T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-03T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:39:18.503Z"),
    updateTime: ISODate("2025-05-03T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720468"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-02T10:39:18.503Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("63"),
        NumberInt("146"),
        NumberInt("99"),
        NumberInt("128"),
        NumberInt("70"),
        NumberInt("138"),
        NumberInt("112"),
        NumberInt("116"),
        NumberInt("155"),
        NumberInt("106")
    ],
    stepRateData: [
        NumberInt("103"),
        NumberInt("103"),
        NumberInt("109"),
        NumberInt("108"),
        NumberInt("107"),
        NumberInt("104"),
        NumberInt("124"),
        NumberInt("96"),
        NumberInt("96"),
        NumberInt("95")
    ],
    paceData: [
        5.9,
        5.7,
        5.5,
        5.1,
        5.9,
        5.7,
        5.8,
        5.8,
        5.4,
        5.9
    ],
    weekData: [
        NumberInt("48"),
        NumberInt("85"),
        NumberInt("32"),
        NumberInt("50"),
        NumberInt("40"),
        NumberInt("88"),
        NumberInt("55")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("106"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-02T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-02T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-02T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:39:18.503Z"),
    updateTime: ISODate("2025-05-02T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720469"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-01T10:39:18.503Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("152"),
        NumberInt("94"),
        NumberInt("145"),
        NumberInt("96"),
        NumberInt("159"),
        NumberInt("84"),
        NumberInt("113"),
        NumberInt("105"),
        NumberInt("142"),
        NumberInt("155")
    ],
    stepRateData: [
        NumberInt("97"),
        NumberInt("112"),
        NumberInt("95"),
        NumberInt("101"),
        NumberInt("129"),
        NumberInt("123"),
        NumberInt("128"),
        NumberInt("126"),
        NumberInt("103"),
        NumberInt("116")
    ],
    paceData: [
        5.5,
        5.4,
        5.6,
        5.8,
        5.2,
        5.9,
        5.2,
        5.4,
        6,
        5.9
    ],
    weekData: [
        NumberInt("64"),
        NumberInt("74"),
        NumberInt("61"),
        NumberInt("71"),
        NumberInt("83"),
        NumberInt("73"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("155"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("155"),
            timestamp: ISODate("2025-05-01T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-01T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-01T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:39:18.503Z"),
    updateTime: ISODate("2025-05-01T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72046a"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-30T10:39:18.503Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("83"),
        NumberInt("104"),
        NumberInt("62"),
        NumberInt("123"),
        NumberInt("128"),
        NumberInt("103"),
        NumberInt("138"),
        NumberInt("118"),
        NumberInt("109"),
        NumberInt("101")
    ],
    stepRateData: [
        NumberInt("124"),
        NumberInt("114"),
        NumberInt("130"),
        NumberInt("127"),
        NumberInt("93"),
        NumberInt("94"),
        NumberInt("93"),
        NumberInt("90"),
        NumberInt("115"),
        NumberInt("98")
    ],
    paceData: [
        5.5,
        5.8,
        5.2,
        5.2,
        5.4,
        5.2,
        5.7,
        5.5,
        5.1,
        5.3
    ],
    weekData: [
        NumberInt("50"),
        NumberInt("45"),
        NumberInt("58"),
        NumberInt("87"),
        NumberInt("58"),
        NumberInt("83"),
        NumberInt("37")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("101"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-04-30T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-30T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-30T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:39:18.503Z"),
    updateTime: ISODate("2025-04-30T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72046b"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-28T10:39:18.503Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("68"),
        NumberInt("87"),
        NumberInt("143"),
        NumberInt("145"),
        NumberInt("127"),
        NumberInt("159"),
        NumberInt("109"),
        NumberInt("72"),
        NumberInt("151"),
        NumberInt("105")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("105"),
        NumberInt("94"),
        NumberInt("96"),
        NumberInt("114"),
        NumberInt("129"),
        NumberInt("103"),
        NumberInt("128"),
        NumberInt("113"),
        NumberInt("107")
    ],
    paceData: [
        5.4,
        5.5,
        5,
        5.8,
        5.9,
        5.9,
        5.8,
        5.9,
        5.9,
        5.3
    ],
    weekData: [
        NumberInt("60"),
        NumberInt("79"),
        NumberInt("86"),
        NumberInt("52"),
        NumberInt("83"),
        NumberInt("81"),
        NumberInt("81")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("10"),
    currentHeartRate: NumberInt("105"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-04-28T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-28T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-28T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:39:18.503Z"),
    updateTime: ISODate("2025-04-28T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72046c"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-27T10:39:18.503Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("74"),
        NumberInt("63"),
        NumberInt("107"),
        NumberInt("132"),
        NumberInt("136"),
        NumberInt("80"),
        NumberInt("160"),
        NumberInt("87"),
        NumberInt("129"),
        NumberInt("111")
    ],
    stepRateData: [
        NumberInt("122"),
        NumberInt("106"),
        NumberInt("108"),
        NumberInt("123"),
        NumberInt("122"),
        NumberInt("108"),
        NumberInt("118"),
        NumberInt("96"),
        NumberInt("113"),
        NumberInt("122")
    ],
    paceData: [
        5,
        6,
        5.5,
        6,
        6,
        5.7,
        5.6,
        5.1,
        5.8,
        5.7
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("43"),
        NumberInt("84"),
        NumberInt("62"),
        NumberInt("48"),
        NumberInt("59"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("111"),
    currentStepRate: NumberInt("122"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("111"),
            timestamp: ISODate("2025-04-27T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-04-27T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-27T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-04-27T10:39:18.503Z"),
    updateTime: ISODate("2025-04-27T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72046d"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-25T10:39:18.503Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("140"),
        NumberInt("124"),
        NumberInt("113"),
        NumberInt("111"),
        NumberInt("121"),
        NumberInt("94"),
        NumberInt("123"),
        NumberInt("105"),
        NumberInt("77"),
        NumberInt("83")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("100"),
        NumberInt("114"),
        NumberInt("126"),
        NumberInt("98"),
        NumberInt("92"),
        NumberInt("107"),
        NumberInt("96"),
        NumberInt("127"),
        NumberInt("123")
    ],
    paceData: [
        5.6,
        5.8,
        5.4,
        5.2,
        5.5,
        5.2,
        5.9,
        5.2,
        5,
        5.9
    ],
    weekData: [
        NumberInt("76"),
        NumberInt("70"),
        NumberInt("76"),
        NumberInt("58"),
        NumberInt("88"),
        NumberInt("34"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("27"),
    currentHeartRate: NumberInt("83"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("83"),
            timestamp: ISODate("2025-04-25T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-04-25T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-25T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:39:18.503Z"),
    updateTime: ISODate("2025-04-25T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72046e"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-23T10:39:18.503Z"),
    date: "2025-04-23",
    heartRateData: [
        NumberInt("128"),
        NumberInt("82"),
        NumberInt("129"),
        NumberInt("141"),
        NumberInt("82"),
        NumberInt("74"),
        NumberInt("136"),
        NumberInt("100"),
        NumberInt("113"),
        NumberInt("77")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("129"),
        NumberInt("121"),
        NumberInt("93"),
        NumberInt("122"),
        NumberInt("112"),
        NumberInt("123"),
        NumberInt("105"),
        NumberInt("125"),
        NumberInt("125")
    ],
    paceData: [
        5.3,
        5.1,
        5.5,
        5.7,
        5.7,
        5.7,
        5.9,
        5.8,
        5.5,
        5.1
    ],
    weekData: [
        NumberInt("43"),
        NumberInt("42"),
        NumberInt("84"),
        NumberInt("82"),
        NumberInt("82"),
        NumberInt("39"),
        NumberInt("56")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("77"),
    currentStepRate: NumberInt("125"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("77"),
            timestamp: ISODate("2025-04-23T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-04-23T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-23T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-04-23T10:39:18.503Z"),
    updateTime: ISODate("2025-04-23T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72046f"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-22T10:39:18.503Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("141"),
        NumberInt("153"),
        NumberInt("82"),
        NumberInt("95"),
        NumberInt("64"),
        NumberInt("113"),
        NumberInt("100"),
        NumberInt("159"),
        NumberInt("151"),
        NumberInt("128")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("96"),
        NumberInt("91"),
        NumberInt("117"),
        NumberInt("91"),
        NumberInt("114"),
        NumberInt("92"),
        NumberInt("103"),
        NumberInt("99"),
        NumberInt("90")
    ],
    paceData: [
        5.3,
        5.8,
        6,
        5.1,
        5.2,
        5.4,
        5.4,
        5.4,
        5.8,
        5.3
    ],
    weekData: [
        NumberInt("76"),
        NumberInt("47"),
        NumberInt("71"),
        NumberInt("62"),
        NumberInt("83"),
        NumberInt("36"),
        NumberInt("85")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("128"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-04-22T10:39:18.503Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-04-22T10:39:18.503Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-22T10:39:18.503Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:39:18.503Z"),
    updateTime: ISODate("2025-04-22T10:39:18.503Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720470"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-20T10:39:18.504Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("67"),
        NumberInt("109"),
        NumberInt("131"),
        NumberInt("102"),
        NumberInt("100"),
        NumberInt("79"),
        NumberInt("75"),
        NumberInt("89"),
        NumberInt("90"),
        NumberInt("94")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("115"),
        NumberInt("92"),
        NumberInt("125"),
        NumberInt("106"),
        NumberInt("120"),
        NumberInt("102"),
        NumberInt("120"),
        NumberInt("104"),
        NumberInt("108")
    ],
    paceData: [
        5.4,
        5.4,
        5.5,
        5,
        5.3,
        5.3,
        5.6,
        5.1,
        5.1,
        5.7
    ],
    weekData: [
        NumberInt("80"),
        NumberInt("85"),
        NumberInt("81"),
        NumberInt("63"),
        NumberInt("61"),
        NumberInt("49"),
        NumberInt("83")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("92"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("94"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-05-20T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-20T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-20T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-20T10:39:18.504Z"),
    updateTime: ISODate("2025-05-20T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720471"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-19T10:39:18.504Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("155"),
        NumberInt("86"),
        NumberInt("94"),
        NumberInt("158"),
        NumberInt("107"),
        NumberInt("148"),
        NumberInt("73"),
        NumberInt("97"),
        NumberInt("101"),
        NumberInt("133")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("120"),
        NumberInt("108"),
        NumberInt("127"),
        NumberInt("98"),
        NumberInt("121"),
        NumberInt("121"),
        NumberInt("122"),
        NumberInt("120"),
        NumberInt("99")
    ],
    paceData: [
        5.3,
        5,
        5.1,
        5.7,
        5.8,
        5.5,
        5,
        5.8,
        5.5,
        5
    ],
    weekData: [
        NumberInt("43"),
        NumberInt("70"),
        NumberInt("39"),
        NumberInt("37"),
        NumberInt("73"),
        NumberInt("39"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("64"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("133"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("133"),
            timestamp: ISODate("2025-05-19T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-19T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-19T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:39:18.504Z"),
    updateTime: ISODate("2025-05-19T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720472"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-17T10:39:18.504Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("97"),
        NumberInt("91"),
        NumberInt("116"),
        NumberInt("101"),
        NumberInt("110"),
        NumberInt("154"),
        NumberInt("125"),
        NumberInt("104"),
        NumberInt("79"),
        NumberInt("67")
    ],
    stepRateData: [
        NumberInt("124"),
        NumberInt("113"),
        NumberInt("120"),
        NumberInt("106"),
        NumberInt("129"),
        NumberInt("93"),
        NumberInt("101"),
        NumberInt("94"),
        NumberInt("102"),
        NumberInt("103")
    ],
    paceData: [
        5.6,
        5.7,
        5.2,
        5.4,
        5.7,
        5.3,
        5.4,
        5.9,
        5.2,
        5.4
    ],
    weekData: [
        NumberInt("45"),
        NumberInt("44"),
        NumberInt("82"),
        NumberInt("49"),
        NumberInt("62"),
        NumberInt("61"),
        NumberInt("45")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("67"),
    currentStepRate: NumberInt("103"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("67"),
            timestamp: ISODate("2025-05-17T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-05-17T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-17T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-17T10:39:18.504Z"),
    updateTime: ISODate("2025-05-17T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720473"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-15T10:39:18.504Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("84"),
        NumberInt("118"),
        NumberInt("98"),
        NumberInt("122"),
        NumberInt("68"),
        NumberInt("136"),
        NumberInt("113"),
        NumberInt("108"),
        NumberInt("108"),
        NumberInt("89")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("114"),
        NumberInt("103"),
        NumberInt("94"),
        NumberInt("103"),
        NumberInt("102"),
        NumberInt("123"),
        NumberInt("118"),
        NumberInt("93"),
        NumberInt("119")
    ],
    paceData: [
        5.2,
        5.9,
        5.1,
        5.4,
        5.9,
        5.7,
        5.7,
        5.8,
        5.8,
        5.3
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("65"),
        NumberInt("89"),
        NumberInt("50"),
        NumberInt("82"),
        NumberInt("37"),
        NumberInt("67")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("89"),
    currentStepRate: NumberInt("119"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("89"),
            timestamp: ISODate("2025-05-15T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-15T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-15T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:39:18.504Z"),
    updateTime: ISODate("2025-05-15T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720474"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-14T10:39:18.504Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("110"),
        NumberInt("135"),
        NumberInt("107"),
        NumberInt("66"),
        NumberInt("119"),
        NumberInt("154"),
        NumberInt("60"),
        NumberInt("129"),
        NumberInt("153"),
        NumberInt("158")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("124"),
        NumberInt("126"),
        NumberInt("129"),
        NumberInt("118"),
        NumberInt("102"),
        NumberInt("114"),
        NumberInt("110"),
        NumberInt("98"),
        NumberInt("120")
    ],
    paceData: [
        5,
        5.1,
        5.1,
        5.6,
        5.8,
        5.9,
        5.7,
        5.6,
        5.8,
        6
    ],
    weekData: [
        NumberInt("55"),
        NumberInt("46"),
        NumberInt("38"),
        NumberInt("62"),
        NumberInt("71"),
        NumberInt("30"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("158"),
    currentStepRate: NumberInt("120"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("158"),
            timestamp: ISODate("2025-05-14T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-05-14T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-14T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:39:18.504Z"),
    updateTime: ISODate("2025-05-14T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720475"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-12T10:39:18.504Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("73"),
        NumberInt("99"),
        NumberInt("95"),
        NumberInt("88"),
        NumberInt("111"),
        NumberInt("129"),
        NumberInt("132"),
        NumberInt("81"),
        NumberInt("81"),
        NumberInt("100")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("124"),
        NumberInt("99"),
        NumberInt("97"),
        NumberInt("119"),
        NumberInt("111"),
        NumberInt("113"),
        NumberInt("106"),
        NumberInt("123"),
        NumberInt("91")
    ],
    paceData: [
        5.5,
        5.2,
        5,
        5.6,
        5.7,
        5.4,
        5.6,
        5.5,
        5.3,
        5.8
    ],
    weekData: [
        NumberInt("45"),
        NumberInt("43"),
        NumberInt("33"),
        NumberInt("87"),
        NumberInt("89"),
        NumberInt("32"),
        NumberInt("58")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("100"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-12T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-12T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-12T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:39:18.504Z"),
    updateTime: ISODate("2025-05-12T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720476"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-11T10:39:18.504Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("80"),
        NumberInt("137"),
        NumberInt("122"),
        NumberInt("90"),
        NumberInt("109"),
        NumberInt("142"),
        NumberInt("141"),
        NumberInt("134"),
        NumberInt("112"),
        NumberInt("115")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("90"),
        NumberInt("128"),
        NumberInt("101"),
        NumberInt("115"),
        NumberInt("122"),
        NumberInt("112"),
        NumberInt("126"),
        NumberInt("118"),
        NumberInt("106")
    ],
    paceData: [
        5.6,
        5.7,
        5.2,
        5.7,
        5.4,
        5.1,
        5.7,
        5.6,
        5.3,
        5.9
    ],
    weekData: [
        NumberInt("47"),
        NumberInt("40"),
        NumberInt("30"),
        NumberInt("62"),
        NumberInt("56"),
        NumberInt("66"),
        NumberInt("56")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("86"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("115"),
    currentStepRate: NumberInt("106"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-05-11T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-11T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-11T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:39:18.504Z"),
    updateTime: ISODate("2025-05-11T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720477"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-09T10:39:18.504Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("94"),
        NumberInt("78"),
        NumberInt("124"),
        NumberInt("159"),
        NumberInt("88"),
        NumberInt("90"),
        NumberInt("79"),
        NumberInt("149"),
        NumberInt("98"),
        NumberInt("118")
    ],
    stepRateData: [
        NumberInt("114"),
        NumberInt("105"),
        NumberInt("103"),
        NumberInt("99"),
        NumberInt("104"),
        NumberInt("129"),
        NumberInt("124"),
        NumberInt("116"),
        NumberInt("98"),
        NumberInt("95")
    ],
    paceData: [
        5.7,
        6,
        5.2,
        5.9,
        5.7,
        5.7,
        5.8,
        5.8,
        5.5,
        5.6
    ],
    weekData: [
        NumberInt("67"),
        NumberInt("79"),
        NumberInt("73"),
        NumberInt("72"),
        NumberInt("62"),
        NumberInt("68"),
        NumberInt("69")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("118"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-05-09T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-09T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-09T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:39:18.504Z"),
    updateTime: ISODate("2025-05-09T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720478"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-08T10:39:18.504Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("94"),
        NumberInt("140"),
        NumberInt("80"),
        NumberInt("138"),
        NumberInt("95"),
        NumberInt("155"),
        NumberInt("145"),
        NumberInt("81"),
        NumberInt("149"),
        NumberInt("120")
    ],
    stepRateData: [
        NumberInt("122"),
        NumberInt("129"),
        NumberInt("105"),
        NumberInt("99"),
        NumberInt("97"),
        NumberInt("100"),
        NumberInt("98"),
        NumberInt("95"),
        NumberInt("104"),
        NumberInt("96")
    ],
    paceData: [
        5.9,
        5.4,
        5.7,
        5.2,
        5,
        5.6,
        5.1,
        5.1,
        5.2,
        5.3
    ],
    weekData: [
        NumberInt("36"),
        NumberInt("77"),
        NumberInt("75"),
        NumberInt("78"),
        NumberInt("58"),
        NumberInt("36"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("72"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("120"),
    currentStepRate: NumberInt("96"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-05-08T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-08T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-08T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:39:18.504Z"),
    updateTime: ISODate("2025-05-08T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720479"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-06T10:39:18.504Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("71"),
        NumberInt("129"),
        NumberInt("141"),
        NumberInt("87"),
        NumberInt("122"),
        NumberInt("90"),
        NumberInt("141"),
        NumberInt("80"),
        NumberInt("139"),
        NumberInt("116")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("113"),
        NumberInt("115"),
        NumberInt("119"),
        NumberInt("130"),
        NumberInt("107"),
        NumberInt("101"),
        NumberInt("95"),
        NumberInt("128"),
        NumberInt("115")
    ],
    paceData: [
        5.1,
        5.4,
        5.6,
        6,
        5.9,
        5.6,
        5.7,
        5,
        5.6,
        5.3
    ],
    weekData: [
        NumberInt("63"),
        NumberInt("82"),
        NumberInt("90"),
        NumberInt("84"),
        NumberInt("84"),
        NumberInt("83"),
        NumberInt("73")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("116"),
    currentStepRate: NumberInt("115"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-06T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-05-06T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-06T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:39:18.504Z"),
    updateTime: ISODate("2025-05-06T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72047a"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-05T10:39:18.504Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("75"),
        NumberInt("152"),
        NumberInt("72"),
        NumberInt("91"),
        NumberInt("105"),
        NumberInt("156"),
        NumberInt("130"),
        NumberInt("130"),
        NumberInt("143"),
        NumberInt("155")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("114"),
        NumberInt("92"),
        NumberInt("129"),
        NumberInt("124"),
        NumberInt("102"),
        NumberInt("94"),
        NumberInt("127"),
        NumberInt("109"),
        NumberInt("120")
    ],
    paceData: [
        5.5,
        5.7,
        6,
        5.4,
        5.6,
        5.2,
        5.9,
        5.8,
        5.6,
        5.4
    ],
    weekData: [
        NumberInt("55"),
        NumberInt("53"),
        NumberInt("31"),
        NumberInt("50"),
        NumberInt("55"),
        NumberInt("49"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("83"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("155"),
    currentStepRate: NumberInt("120"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("155"),
            timestamp: ISODate("2025-05-05T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-05-05T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-05T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:39:18.504Z"),
    updateTime: ISODate("2025-05-05T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72047b"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-04T10:39:18.504Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("113"),
        NumberInt("129"),
        NumberInt("83"),
        NumberInt("70"),
        NumberInt("149"),
        NumberInt("106"),
        NumberInt("152"),
        NumberInt("94"),
        NumberInt("80"),
        NumberInt("159")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("106"),
        NumberInt("121"),
        NumberInt("91"),
        NumberInt("116"),
        NumberInt("101"),
        NumberInt("116"),
        NumberInt("102"),
        NumberInt("108"),
        NumberInt("123")
    ],
    paceData: [
        5.2,
        5.6,
        5.5,
        5.1,
        5.4,
        5.2,
        5.2,
        5.8,
        5.5,
        6
    ],
    weekData: [
        NumberInt("41"),
        NumberInt("66"),
        NumberInt("35"),
        NumberInt("34"),
        NumberInt("88"),
        NumberInt("73"),
        NumberInt("89")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("159"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("159"),
            timestamp: ISODate("2025-05-04T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-04T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-04T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:39:18.504Z"),
    updateTime: ISODate("2025-05-04T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72047c"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-03T10:39:18.504Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("115"),
        NumberInt("97"),
        NumberInt("119"),
        NumberInt("133"),
        NumberInt("150"),
        NumberInt("121"),
        NumberInt("69"),
        NumberInt("85"),
        NumberInt("133"),
        NumberInt("67")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("129"),
        NumberInt("91"),
        NumberInt("112"),
        NumberInt("126"),
        NumberInt("119"),
        NumberInt("115"),
        NumberInt("126"),
        NumberInt("113"),
        NumberInt("93")
    ],
    paceData: [
        6,
        5.9,
        5.8,
        5.3,
        5.9,
        5.3,
        5.9,
        5.9,
        5.7,
        5.3
    ],
    weekData: [
        NumberInt("90"),
        NumberInt("46"),
        NumberInt("82"),
        NumberInt("48"),
        NumberInt("76"),
        NumberInt("73"),
        NumberInt("71")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("67"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("67"),
            timestamp: ISODate("2025-05-03T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-03T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-03T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:39:18.504Z"),
    updateTime: ISODate("2025-05-03T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72047d"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-02T10:39:18.504Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("106"),
        NumberInt("113"),
        NumberInt("100"),
        NumberInt("84"),
        NumberInt("155"),
        NumberInt("64"),
        NumberInt("153"),
        NumberInt("127"),
        NumberInt("87"),
        NumberInt("119")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("114"),
        NumberInt("123"),
        NumberInt("97"),
        NumberInt("106"),
        NumberInt("95"),
        NumberInt("118"),
        NumberInt("129"),
        NumberInt("123"),
        NumberInt("122")
    ],
    paceData: [
        5.9,
        5.9,
        5.3,
        5.3,
        5.8,
        5.5,
        5.2,
        5.7,
        5.1,
        5.5
    ],
    weekData: [
        NumberInt("41"),
        NumberInt("75"),
        NumberInt("84"),
        NumberInt("75"),
        NumberInt("69"),
        NumberInt("51"),
        NumberInt("63")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("119"),
    currentStepRate: NumberInt("122"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-02T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-05-02T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-02T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:39:18.504Z"),
    updateTime: ISODate("2025-05-02T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72047e"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-01T10:39:18.504Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("112"),
        NumberInt("129"),
        NumberInt("158"),
        NumberInt("90"),
        NumberInt("102"),
        NumberInt("71"),
        NumberInt("121"),
        NumberInt("72"),
        NumberInt("64"),
        NumberInt("129")
    ],
    stepRateData: [
        NumberInt("130"),
        NumberInt("92"),
        NumberInt("102"),
        NumberInt("127"),
        NumberInt("130"),
        NumberInt("115"),
        NumberInt("127"),
        NumberInt("97"),
        NumberInt("115"),
        NumberInt("91")
    ],
    paceData: [
        6,
        5.4,
        5.5,
        5.2,
        5.8,
        5.3,
        5.1,
        5.5,
        5.9,
        5.5
    ],
    weekData: [
        NumberInt("61"),
        NumberInt("63"),
        NumberInt("30"),
        NumberInt("44"),
        NumberInt("38"),
        NumberInt("50"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("129"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-05-01T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-01T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-01T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:39:18.504Z"),
    updateTime: ISODate("2025-05-01T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72047f"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-30T10:39:18.504Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("143"),
        NumberInt("123"),
        NumberInt("136"),
        NumberInt("69"),
        NumberInt("75"),
        NumberInt("159"),
        NumberInt("119"),
        NumberInt("80"),
        NumberInt("101"),
        NumberInt("135")
    ],
    stepRateData: [
        NumberInt("98"),
        NumberInt("130"),
        NumberInt("115"),
        NumberInt("95"),
        NumberInt("98"),
        NumberInt("113"),
        NumberInt("109"),
        NumberInt("99"),
        NumberInt("119"),
        NumberInt("120")
    ],
    paceData: [
        5.3,
        5.9,
        5.2,
        5.7,
        5.5,
        5.8,
        5.5,
        5.7,
        5.6,
        5.2
    ],
    weekData: [
        NumberInt("32"),
        NumberInt("36"),
        NumberInt("55"),
        NumberInt("86"),
        NumberInt("47"),
        NumberInt("63"),
        NumberInt("49")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("135"),
    currentStepRate: NumberInt("120"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("135"),
            timestamp: ISODate("2025-04-30T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-04-30T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-30T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:39:18.504Z"),
    updateTime: ISODate("2025-04-30T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720480"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-28T10:39:18.504Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("112"),
        NumberInt("76"),
        NumberInt("97"),
        NumberInt("134"),
        NumberInt("103"),
        NumberInt("135"),
        NumberInt("137"),
        NumberInt("108"),
        NumberInt("96"),
        NumberInt("90")
    ],
    stepRateData: [
        NumberInt("107"),
        NumberInt("95"),
        NumberInt("116"),
        NumberInt("93"),
        NumberInt("90"),
        NumberInt("123"),
        NumberInt("117"),
        NumberInt("109"),
        NumberInt("93"),
        NumberInt("107")
    ],
    paceData: [
        5.1,
        5.6,
        5.5,
        5.5,
        5.5,
        5.1,
        5.3,
        5,
        5.6,
        5.1
    ],
    weekData: [
        NumberInt("78"),
        NumberInt("73"),
        NumberInt("71"),
        NumberInt("34"),
        NumberInt("74"),
        NumberInt("71"),
        NumberInt("77")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("90"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-04-28T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-28T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-28T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:39:18.504Z"),
    updateTime: ISODate("2025-04-28T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720481"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-27T10:39:18.504Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("79"),
        NumberInt("71"),
        NumberInt("132"),
        NumberInt("151"),
        NumberInt("75"),
        NumberInt("137"),
        NumberInt("61"),
        NumberInt("134"),
        NumberInt("141"),
        NumberInt("82")
    ],
    stepRateData: [
        NumberInt("117"),
        NumberInt("127"),
        NumberInt("102"),
        NumberInt("105"),
        NumberInt("103"),
        NumberInt("103"),
        NumberInt("128"),
        NumberInt("126"),
        NumberInt("127"),
        NumberInt("93")
    ],
    paceData: [
        5.5,
        5.4,
        5.9,
        5.9,
        5.6,
        5.8,
        5.3,
        5.8,
        5.2,
        5.3
    ],
    weekData: [
        NumberInt("77"),
        NumberInt("88"),
        NumberInt("41"),
        NumberInt("53"),
        NumberInt("81"),
        NumberInt("41"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("82"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("82"),
            timestamp: ISODate("2025-04-27T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-04-27T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-27T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-04-27T10:39:18.504Z"),
    updateTime: ISODate("2025-04-27T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720482"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-26T10:39:18.504Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("87"),
        NumberInt("136"),
        NumberInt("109"),
        NumberInt("145"),
        NumberInt("60"),
        NumberInt("132"),
        NumberInt("125"),
        NumberInt("105"),
        NumberInt("87"),
        NumberInt("138")
    ],
    stepRateData: [
        NumberInt("112"),
        NumberInt("126"),
        NumberInt("103"),
        NumberInt("109"),
        NumberInt("129"),
        NumberInt("106"),
        NumberInt("124"),
        NumberInt("93"),
        NumberInt("104"),
        NumberInt("129")
    ],
    paceData: [
        5.1,
        5.2,
        5.7,
        5.3,
        5.5,
        5.4,
        5.1,
        5,
        5.6,
        5.5
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("68"),
        NumberInt("49"),
        NumberInt("87"),
        NumberInt("60"),
        NumberInt("61"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("138"),
    currentStepRate: NumberInt("129"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("138"),
            timestamp: ISODate("2025-04-26T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-04-26T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-26T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:39:18.504Z"),
    updateTime: ISODate("2025-04-26T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720483"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-25T10:39:18.504Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("139"),
        NumberInt("123"),
        NumberInt("73"),
        NumberInt("111"),
        NumberInt("129"),
        NumberInt("136"),
        NumberInt("106"),
        NumberInt("96"),
        NumberInt("152"),
        NumberInt("138")
    ],
    stepRateData: [
        NumberInt("111"),
        NumberInt("112"),
        NumberInt("124"),
        NumberInt("110"),
        NumberInt("130"),
        NumberInt("92"),
        NumberInt("103"),
        NumberInt("113"),
        NumberInt("99"),
        NumberInt("123")
    ],
    paceData: [
        5.5,
        5.4,
        5.7,
        5.4,
        5.7,
        5.4,
        5.2,
        5,
        5.2,
        5.5
    ],
    weekData: [
        NumberInt("86"),
        NumberInt("86"),
        NumberInt("30"),
        NumberInt("83"),
        NumberInt("40"),
        NumberInt("89"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("83"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("138"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("138"),
            timestamp: ISODate("2025-04-25T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-04-25T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-25T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:39:18.504Z"),
    updateTime: ISODate("2025-04-25T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720484"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-24T10:39:18.504Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("82"),
        NumberInt("160"),
        NumberInt("131"),
        NumberInt("68"),
        NumberInt("60"),
        NumberInt("75"),
        NumberInt("94"),
        NumberInt("136"),
        NumberInt("145"),
        NumberInt("153")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("109"),
        NumberInt("112"),
        NumberInt("127"),
        NumberInt("119"),
        NumberInt("101"),
        NumberInt("106"),
        NumberInt("99"),
        NumberInt("97"),
        NumberInt("119")
    ],
    paceData: [
        5.9,
        5.7,
        5.2,
        5.9,
        5.1,
        5.5,
        5.5,
        5.1,
        5.4,
        5.8
    ],
    weekData: [
        NumberInt("69"),
        NumberInt("80"),
        NumberInt("65"),
        NumberInt("88"),
        NumberInt("73"),
        NumberInt("43"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("153"),
    currentStepRate: NumberInt("119"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("153"),
            timestamp: ISODate("2025-04-24T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-04-24T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-24T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:39:18.504Z"),
    updateTime: ISODate("2025-04-24T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720485"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-23T10:39:18.504Z"),
    date: "2025-04-23",
    heartRateData: [
        NumberInt("69"),
        NumberInt("75"),
        NumberInt("64"),
        NumberInt("104"),
        NumberInt("95"),
        NumberInt("100"),
        NumberInt("119"),
        NumberInt("140"),
        NumberInt("113"),
        NumberInt("67")
    ],
    stepRateData: [
        NumberInt("114"),
        NumberInt("115"),
        NumberInt("102"),
        NumberInt("104"),
        NumberInt("101"),
        NumberInt("127"),
        NumberInt("130"),
        NumberInt("104"),
        NumberInt("96"),
        NumberInt("91")
    ],
    paceData: [
        5.5,
        5.3,
        5.9,
        5.6,
        5.5,
        5.2,
        5.8,
        5.8,
        5.8,
        5.6
    ],
    weekData: [
        NumberInt("33"),
        NumberInt("81"),
        NumberInt("43"),
        NumberInt("81"),
        NumberInt("46"),
        NumberInt("61"),
        NumberInt("47")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("67"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("67"),
            timestamp: ISODate("2025-04-23T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-04-23T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-23T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-04-23T10:39:18.504Z"),
    updateTime: ISODate("2025-04-23T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720486"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-21T10:39:18.504Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("109"),
        NumberInt("113"),
        NumberInt("138"),
        NumberInt("119"),
        NumberInt("64"),
        NumberInt("68"),
        NumberInt("61"),
        NumberInt("135"),
        NumberInt("66"),
        NumberInt("157")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("100"),
        NumberInt("103"),
        NumberInt("111"),
        NumberInt("97"),
        NumberInt("128"),
        NumberInt("127"),
        NumberInt("116"),
        NumberInt("92"),
        NumberInt("114")
    ],
    paceData: [
        5.2,
        5.3,
        5.7,
        5.8,
        5.2,
        5.8,
        5.4,
        5.6,
        6,
        5.6
    ],
    weekData: [
        NumberInt("42"),
        NumberInt("61"),
        NumberInt("60"),
        NumberInt("58"),
        NumberInt("32"),
        NumberInt("62"),
        NumberInt("63")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("93"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("157"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("157"),
            timestamp: ISODate("2025-04-21T10:39:18.504Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-04-21T10:39:18.504Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-21T10:39:18.504Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:39:18.504Z"),
    updateTime: ISODate("2025-04-21T10:39:18.504Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720487"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-20T10:39:18.505Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("108"),
        NumberInt("123"),
        NumberInt("71"),
        NumberInt("108"),
        NumberInt("76"),
        NumberInt("130"),
        NumberInt("151"),
        NumberInt("148"),
        NumberInt("133"),
        NumberInt("97")
    ],
    stepRateData: [
        NumberInt("107"),
        NumberInt("91"),
        NumberInt("106"),
        NumberInt("112"),
        NumberInt("95"),
        NumberInt("115"),
        NumberInt("120"),
        NumberInt("117"),
        NumberInt("113"),
        NumberInt("93")
    ],
    paceData: [
        5.9,
        5.1,
        5.6,
        5.3,
        5.9,
        5.1,
        5.2,
        5.9,
        5.1,
        5.2
    ],
    weekData: [
        NumberInt("30"),
        NumberInt("30"),
        NumberInt("55"),
        NumberInt("56"),
        NumberInt("83"),
        NumberInt("71"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("97"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-20T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-20T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-20T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-20T10:39:18.505Z"),
    updateTime: ISODate("2025-05-20T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720488"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-19T10:39:18.505Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("116"),
        NumberInt("143"),
        NumberInt("115"),
        NumberInt("105"),
        NumberInt("67"),
        NumberInt("63"),
        NumberInt("101"),
        NumberInt("160"),
        NumberInt("63"),
        NumberInt("125")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("114"),
        NumberInt("128"),
        NumberInt("126"),
        NumberInt("102"),
        NumberInt("106"),
        NumberInt("90"),
        NumberInt("91"),
        NumberInt("104"),
        NumberInt("109")
    ],
    paceData: [
        5.2,
        5.1,
        5.5,
        5.1,
        5.4,
        5.8,
        5.1,
        6,
        5.1,
        5.8
    ],
    weekData: [
        NumberInt("71"),
        NumberInt("60"),
        NumberInt("82"),
        NumberInt("56"),
        NumberInt("69"),
        NumberInt("62"),
        NumberInt("60")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("125"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-05-19T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-19T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-19T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:39:18.505Z"),
    updateTime: ISODate("2025-05-19T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720489"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-18T10:39:18.505Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("160"),
        NumberInt("120"),
        NumberInt("149"),
        NumberInt("113"),
        NumberInt("62"),
        NumberInt("68"),
        NumberInt("105"),
        NumberInt("100"),
        NumberInt("108"),
        NumberInt("157")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("129"),
        NumberInt("117"),
        NumberInt("98"),
        NumberInt("106"),
        NumberInt("105"),
        NumberInt("111"),
        NumberInt("120"),
        NumberInt("109"),
        NumberInt("107")
    ],
    paceData: [
        5.2,
        5.6,
        5.1,
        5.9,
        5.1,
        5.7,
        5.1,
        5.4,
        5.1,
        5.9
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("74"),
        NumberInt("86"),
        NumberInt("30"),
        NumberInt("43"),
        NumberInt("43"),
        NumberInt("85")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("157"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("157"),
            timestamp: ISODate("2025-05-18T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-18T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-18T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-18T10:39:18.505Z"),
    updateTime: ISODate("2025-05-18T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72048a"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-17T10:39:18.505Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("150"),
        NumberInt("85"),
        NumberInt("83"),
        NumberInt("159"),
        NumberInt("157"),
        NumberInt("144"),
        NumberInt("121"),
        NumberInt("64"),
        NumberInt("148"),
        NumberInt("116")
    ],
    stepRateData: [
        NumberInt("122"),
        NumberInt("115"),
        NumberInt("124"),
        NumberInt("127"),
        NumberInt("101"),
        NumberInt("91"),
        NumberInt("120"),
        NumberInt("104"),
        NumberInt("114"),
        NumberInt("108")
    ],
    paceData: [
        6,
        5.1,
        5.4,
        5.6,
        5.8,
        5.2,
        5.2,
        5.1,
        5.8,
        5.5
    ],
    weekData: [
        NumberInt("87"),
        NumberInt("49"),
        NumberInt("75"),
        NumberInt("72"),
        NumberInt("77"),
        NumberInt("75"),
        NumberInt("73")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("67"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("116"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-17T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-17T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-17T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-17T10:39:18.505Z"),
    updateTime: ISODate("2025-05-17T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72048b"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-16T10:39:18.505Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("67"),
        NumberInt("157"),
        NumberInt("89"),
        NumberInt("71"),
        NumberInt("160"),
        NumberInt("67"),
        NumberInt("82"),
        NumberInt("90"),
        NumberInt("94"),
        NumberInt("153")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("102"),
        NumberInt("127"),
        NumberInt("117"),
        NumberInt("114"),
        NumberInt("100"),
        NumberInt("96"),
        NumberInt("129"),
        NumberInt("118"),
        NumberInt("102")
    ],
    paceData: [
        5.5,
        5.2,
        5.4,
        5.7,
        5.2,
        5.5,
        5.8,
        5.8,
        5.9,
        5.1
    ],
    weekData: [
        NumberInt("48"),
        NumberInt("73"),
        NumberInt("65"),
        NumberInt("78"),
        NumberInt("90"),
        NumberInt("56"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("90"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("153"),
    currentStepRate: NumberInt("102"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("153"),
            timestamp: ISODate("2025-05-16T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-05-16T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-16T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:39:18.505Z"),
    updateTime: ISODate("2025-05-16T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72048c"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-13T10:39:18.505Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("115"),
        NumberInt("103"),
        NumberInt("146"),
        NumberInt("123"),
        NumberInt("151"),
        NumberInt("65"),
        NumberInt("68"),
        NumberInt("90"),
        NumberInt("88"),
        NumberInt("120")
    ],
    stepRateData: [
        NumberInt("112"),
        NumberInt("101"),
        NumberInt("114"),
        NumberInt("120"),
        NumberInt("91"),
        NumberInt("117"),
        NumberInt("125"),
        NumberInt("102"),
        NumberInt("91"),
        NumberInt("129")
    ],
    paceData: [
        6,
        5.5,
        5,
        5.9,
        5.3,
        5.8,
        5.5,
        5.4,
        5.2,
        5.6
    ],
    weekData: [
        NumberInt("74"),
        NumberInt("62"),
        NumberInt("74"),
        NumberInt("90"),
        NumberInt("77"),
        NumberInt("58"),
        NumberInt("45")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("120"),
    currentStepRate: NumberInt("129"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-05-13T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-05-13T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-13T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:39:18.505Z"),
    updateTime: ISODate("2025-05-13T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72048d"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-12T10:39:18.505Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("61"),
        NumberInt("99"),
        NumberInt("128"),
        NumberInt("141"),
        NumberInt("124"),
        NumberInt("126"),
        NumberInt("77"),
        NumberInt("101"),
        NumberInt("133"),
        NumberInt("78")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("124"),
        NumberInt("101"),
        NumberInt("102"),
        NumberInt("100"),
        NumberInt("107"),
        NumberInt("104"),
        NumberInt("128"),
        NumberInt("103"),
        NumberInt("108")
    ],
    paceData: [
        5.4,
        5.9,
        5.3,
        5,
        5.9,
        5.5,
        5.2,
        5.9,
        5.6,
        5.6
    ],
    weekData: [
        NumberInt("55"),
        NumberInt("65"),
        NumberInt("35"),
        NumberInt("56"),
        NumberInt("68"),
        NumberInt("46"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("78"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("78"),
            timestamp: ISODate("2025-05-12T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-12T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-12T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:39:18.505Z"),
    updateTime: ISODate("2025-05-12T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72048e"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-10T10:39:18.505Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("63"),
        NumberInt("63"),
        NumberInt("150"),
        NumberInt("64"),
        NumberInt("139"),
        NumberInt("94"),
        NumberInt("141"),
        NumberInt("79"),
        NumberInt("75"),
        NumberInt("78")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("122"),
        NumberInt("128"),
        NumberInt("130"),
        NumberInt("108"),
        NumberInt("123"),
        NumberInt("116"),
        NumberInt("117"),
        NumberInt("98"),
        NumberInt("97")
    ],
    paceData: [
        5.9,
        5.5,
        6,
        5.2,
        6,
        5.8,
        5.7,
        5.3,
        5.8,
        5.3
    ],
    weekData: [
        NumberInt("38"),
        NumberInt("63"),
        NumberInt("67"),
        NumberInt("44"),
        NumberInt("37"),
        NumberInt("77"),
        NumberInt("65")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("61"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("78"),
    currentStepRate: NumberInt("97"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("78"),
            timestamp: ISODate("2025-05-10T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-10T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-10T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:39:18.505Z"),
    updateTime: ISODate("2025-05-10T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72048f"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-09T10:39:18.505Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("152"),
        NumberInt("118"),
        NumberInt("142"),
        NumberInt("72"),
        NumberInt("142"),
        NumberInt("91"),
        NumberInt("136"),
        NumberInt("70"),
        NumberInt("75"),
        NumberInt("124")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("106"),
        NumberInt("104"),
        NumberInt("92"),
        NumberInt("100"),
        NumberInt("105"),
        NumberInt("95"),
        NumberInt("90"),
        NumberInt("96"),
        NumberInt("107")
    ],
    paceData: [
        5.1,
        5.9,
        5.9,
        5.8,
        5.3,
        5.1,
        5.9,
        5.5,
        5.2,
        5.4
    ],
    weekData: [
        NumberInt("39"),
        NumberInt("37"),
        NumberInt("86"),
        NumberInt("53"),
        NumberInt("57"),
        NumberInt("80"),
        NumberInt("34")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("124"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-09T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-09T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-09T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:39:18.505Z"),
    updateTime: ISODate("2025-05-09T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720490"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-08T10:39:18.505Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("130"),
        NumberInt("111"),
        NumberInt("130"),
        NumberInt("87"),
        NumberInt("90"),
        NumberInt("158"),
        NumberInt("142"),
        NumberInt("144"),
        NumberInt("76"),
        NumberInt("124")
    ],
    stepRateData: [
        NumberInt("117"),
        NumberInt("112"),
        NumberInt("104"),
        NumberInt("98"),
        NumberInt("110"),
        NumberInt("123"),
        NumberInt("127"),
        NumberInt("117"),
        NumberInt("112"),
        NumberInt("108")
    ],
    paceData: [
        5.4,
        5.6,
        5.4,
        5.8,
        5.3,
        5.4,
        5.6,
        5.2,
        5.1,
        5.7
    ],
    weekData: [
        NumberInt("45"),
        NumberInt("82"),
        NumberInt("36"),
        NumberInt("64"),
        NumberInt("87"),
        NumberInt("78"),
        NumberInt("75")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("93"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("124"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-08T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-08T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-08T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:39:18.505Z"),
    updateTime: ISODate("2025-05-08T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720491"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-07T10:39:18.505Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("110"),
        NumberInt("96"),
        NumberInt("127"),
        NumberInt("83"),
        NumberInt("87"),
        NumberInt("129"),
        NumberInt("147"),
        NumberInt("88"),
        NumberInt("160"),
        NumberInt("133")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("113"),
        NumberInt("98"),
        NumberInt("119"),
        NumberInt("103"),
        NumberInt("126"),
        NumberInt("96"),
        NumberInt("105"),
        NumberInt("123"),
        NumberInt("117")
    ],
    paceData: [
        5.4,
        5.1,
        5.7,
        5.3,
        5,
        5.8,
        5.8,
        5.6,
        5.8,
        5.6
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("41"),
        NumberInt("87"),
        NumberInt("61"),
        NumberInt("88"),
        NumberInt("63"),
        NumberInt("80")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("81"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("133"),
    currentStepRate: NumberInt("117"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("133"),
            timestamp: ISODate("2025-05-07T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-07T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-07T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:39:18.505Z"),
    updateTime: ISODate("2025-05-07T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720492"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-06T10:39:18.505Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("65"),
        NumberInt("97"),
        NumberInt("71"),
        NumberInt("100"),
        NumberInt("60"),
        NumberInt("159"),
        NumberInt("61"),
        NumberInt("89"),
        NumberInt("141"),
        NumberInt("140")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("126"),
        NumberInt("117"),
        NumberInt("129"),
        NumberInt("94"),
        NumberInt("96"),
        NumberInt("130"),
        NumberInt("101"),
        NumberInt("111"),
        NumberInt("121")
    ],
    paceData: [
        5.3,
        5.9,
        5.6,
        5,
        6,
        5.2,
        5.7,
        5.7,
        5.9,
        5.8
    ],
    weekData: [
        NumberInt("61"),
        NumberInt("52"),
        NumberInt("67"),
        NumberInt("73"),
        NumberInt("45"),
        NumberInt("63"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("93"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("140"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("140"),
            timestamp: ISODate("2025-05-06T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-06T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-06T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:39:18.505Z"),
    updateTime: ISODate("2025-05-06T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720493"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-05T10:39:18.505Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("87"),
        NumberInt("94"),
        NumberInt("100"),
        NumberInt("110"),
        NumberInt("112"),
        NumberInt("143"),
        NumberInt("125"),
        NumberInt("138"),
        NumberInt("127"),
        NumberInt("97")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("95"),
        NumberInt("107"),
        NumberInt("110"),
        NumberInt("104"),
        NumberInt("92"),
        NumberInt("108"),
        NumberInt("99"),
        NumberInt("98"),
        NumberInt("110")
    ],
    paceData: [
        5.9,
        5.6,
        5.5,
        5.1,
        5.6,
        5.3,
        5,
        5.2,
        5.9,
        5.8
    ],
    weekData: [
        NumberInt("85"),
        NumberInt("90"),
        NumberInt("89"),
        NumberInt("49"),
        NumberInt("42"),
        NumberInt("56"),
        NumberInt("55")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("67"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("97"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-05T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-05-05T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-05T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:39:18.505Z"),
    updateTime: ISODate("2025-05-05T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720494"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-04T10:39:18.505Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("115"),
        NumberInt("71"),
        NumberInt("70"),
        NumberInt("159"),
        NumberInt("155"),
        NumberInt("153"),
        NumberInt("60"),
        NumberInt("141"),
        NumberInt("110"),
        NumberInt("66")
    ],
    stepRateData: [
        NumberInt("125"),
        NumberInt("111"),
        NumberInt("94"),
        NumberInt("104"),
        NumberInt("96"),
        NumberInt("111"),
        NumberInt("97"),
        NumberInt("112"),
        NumberInt("110"),
        NumberInt("119")
    ],
    paceData: [
        5.6,
        5.7,
        5.8,
        5.1,
        5,
        5.6,
        5.8,
        6,
        5.6,
        5.4
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("90"),
        NumberInt("87"),
        NumberInt("60"),
        NumberInt("90"),
        NumberInt("66"),
        NumberInt("47")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("66"),
    currentStepRate: NumberInt("119"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("66"),
            timestamp: ISODate("2025-05-04T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-04T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-04T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:39:18.505Z"),
    updateTime: ISODate("2025-05-04T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720495"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-03T10:39:18.505Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("135"),
        NumberInt("82"),
        NumberInt("153"),
        NumberInt("122"),
        NumberInt("62"),
        NumberInt("121"),
        NumberInt("80"),
        NumberInt("97"),
        NumberInt("156"),
        NumberInt("146")
    ],
    stepRateData: [
        NumberInt("127"),
        NumberInt("98"),
        NumberInt("108"),
        NumberInt("99"),
        NumberInt("129"),
        NumberInt("96"),
        NumberInt("122"),
        NumberInt("115"),
        NumberInt("108"),
        NumberInt("104")
    ],
    paceData: [
        5.3,
        5.8,
        5.8,
        5.4,
        5.6,
        5.3,
        5.8,
        5.8,
        5.1,
        5.8
    ],
    weekData: [
        NumberInt("68"),
        NumberInt("48"),
        NumberInt("50"),
        NumberInt("88"),
        NumberInt("87"),
        NumberInt("63"),
        NumberInt("31")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("67"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("146"),
    currentStepRate: NumberInt("104"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("146"),
            timestamp: ISODate("2025-05-03T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-05-03T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-03T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:39:18.505Z"),
    updateTime: ISODate("2025-05-03T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720496"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-02T10:39:18.505Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("117"),
        NumberInt("73"),
        NumberInt("122"),
        NumberInt("77"),
        NumberInt("100"),
        NumberInt("122"),
        NumberInt("112"),
        NumberInt("110"),
        NumberInt("118"),
        NumberInt("131")
    ],
    stepRateData: [
        NumberInt("106"),
        NumberInt("108"),
        NumberInt("128"),
        NumberInt("105"),
        NumberInt("106"),
        NumberInt("96"),
        NumberInt("121"),
        NumberInt("114"),
        NumberInt("100"),
        NumberInt("114")
    ],
    paceData: [
        5.8,
        5.2,
        5.4,
        5.2,
        5.6,
        5.6,
        5.4,
        5.2,
        5.9,
        5.1
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("48"),
        NumberInt("57"),
        NumberInt("44"),
        NumberInt("79"),
        NumberInt("72"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("131"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("131"),
            timestamp: ISODate("2025-05-02T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-02T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-02T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:39:18.505Z"),
    updateTime: ISODate("2025-05-02T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720497"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-01T10:39:18.505Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("105"),
        NumberInt("148"),
        NumberInt("120"),
        NumberInt("115"),
        NumberInt("122"),
        NumberInt("75"),
        NumberInt("113"),
        NumberInt("127"),
        NumberInt("109"),
        NumberInt("115")
    ],
    stepRateData: [
        NumberInt("106"),
        NumberInt("113"),
        NumberInt("113"),
        NumberInt("110"),
        NumberInt("128"),
        NumberInt("129"),
        NumberInt("111"),
        NumberInt("113"),
        NumberInt("99"),
        NumberInt("125")
    ],
    paceData: [
        5.5,
        5.7,
        6,
        5.6,
        5,
        5,
        5.2,
        5.2,
        5.5,
        5.9
    ],
    weekData: [
        NumberInt("52"),
        NumberInt("52"),
        NumberInt("48"),
        NumberInt("70"),
        NumberInt("78"),
        NumberInt("72"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("115"),
    currentStepRate: NumberInt("125"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-05-01T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-05-01T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-01T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:39:18.505Z"),
    updateTime: ISODate("2025-05-01T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720498"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-30T10:39:18.505Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("148"),
        NumberInt("143"),
        NumberInt("143"),
        NumberInt("122"),
        NumberInt("130"),
        NumberInt("106"),
        NumberInt("111"),
        NumberInt("104"),
        NumberInt("128"),
        NumberInt("82")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("128"),
        NumberInt("104"),
        NumberInt("122"),
        NumberInt("99"),
        NumberInt("95"),
        NumberInt("130"),
        NumberInt("112"),
        NumberInt("94"),
        NumberInt("130")
    ],
    paceData: [
        5.6,
        5.7,
        6,
        6,
        5.9,
        5.1,
        5,
        5,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("61"),
        NumberInt("84"),
        NumberInt("53"),
        NumberInt("48"),
        NumberInt("69"),
        NumberInt("50"),
        NumberInt("38")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("82"),
    currentStepRate: NumberInt("130"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("82"),
            timestamp: ISODate("2025-04-30T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("130"),
            timestamp: ISODate("2025-04-30T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-30T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:39:18.505Z"),
    updateTime: ISODate("2025-04-30T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d720499"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-29T10:39:18.505Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("89"),
        NumberInt("88"),
        NumberInt("152"),
        NumberInt("95"),
        NumberInt("144"),
        NumberInt("60"),
        NumberInt("72"),
        NumberInt("129"),
        NumberInt("89"),
        NumberInt("147")
    ],
    stepRateData: [
        NumberInt("118"),
        NumberInt("124"),
        NumberInt("114"),
        NumberInt("113"),
        NumberInt("127"),
        NumberInt("106"),
        NumberInt("109"),
        NumberInt("99"),
        NumberInt("130"),
        NumberInt("110")
    ],
    paceData: [
        5.1,
        5.9,
        5.1,
        5.6,
        5.6,
        5.8,
        5.6,
        5.5,
        5,
        5.8
    ],
    weekData: [
        NumberInt("47"),
        NumberInt("39"),
        NumberInt("33"),
        NumberInt("44"),
        NumberInt("38"),
        NumberInt("76"),
        NumberInt("85")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("147"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("147"),
            timestamp: ISODate("2025-04-29T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-04-29T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-29T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:39:18.505Z"),
    updateTime: ISODate("2025-04-29T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72049a"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-28T10:39:18.505Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("125"),
        NumberInt("143"),
        NumberInt("60"),
        NumberInt("160"),
        NumberInt("102"),
        NumberInt("118"),
        NumberInt("79"),
        NumberInt("139"),
        NumberInt("150"),
        NumberInt("143")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("125"),
        NumberInt("129"),
        NumberInt("92"),
        NumberInt("93"),
        NumberInt("94"),
        NumberInt("129"),
        NumberInt("119"),
        NumberInt("99"),
        NumberInt("107")
    ],
    paceData: [
        5.1,
        5.9,
        5,
        5.3,
        5.8,
        5.7,
        5.5,
        5.1,
        5.5,
        5.4
    ],
    weekData: [
        NumberInt("42"),
        NumberInt("35"),
        NumberInt("79"),
        NumberInt("30"),
        NumberInt("58"),
        NumberInt("75"),
        NumberInt("58")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("143"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("143"),
            timestamp: ISODate("2025-04-28T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-28T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-28T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:39:18.505Z"),
    updateTime: ISODate("2025-04-28T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72049b"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-26T10:39:18.505Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("125"),
        NumberInt("126"),
        NumberInt("130"),
        NumberInt("82"),
        NumberInt("74"),
        NumberInt("64"),
        NumberInt("95"),
        NumberInt("117"),
        NumberInt("95"),
        NumberInt("115")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("107"),
        NumberInt("107"),
        NumberInt("120"),
        NumberInt("118"),
        NumberInt("103"),
        NumberInt("112"),
        NumberInt("90"),
        NumberInt("109"),
        NumberInt("101")
    ],
    paceData: [
        5.4,
        5.8,
        5.7,
        5.6,
        5.8,
        5.9,
        5.5,
        6,
        5.2,
        5.1
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("46"),
        NumberInt("74"),
        NumberInt("36"),
        NumberInt("74"),
        NumberInt("38"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("115"),
    currentStepRate: NumberInt("101"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-04-26T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-04-26T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-26T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:39:18.505Z"),
    updateTime: ISODate("2025-04-26T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72049c"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-25T10:39:18.505Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("118"),
        NumberInt("96"),
        NumberInt("141"),
        NumberInt("108"),
        NumberInt("154"),
        NumberInt("64"),
        NumberInt("150"),
        NumberInt("124"),
        NumberInt("114"),
        NumberInt("109")
    ],
    stepRateData: [
        NumberInt("106"),
        NumberInt("90"),
        NumberInt("92"),
        NumberInt("130"),
        NumberInt("101"),
        NumberInt("122"),
        NumberInt("110"),
        NumberInt("111"),
        NumberInt("94"),
        NumberInt("100")
    ],
    paceData: [
        5.5,
        6,
        5.8,
        5.2,
        5.4,
        5.1,
        5.3,
        5.7,
        6,
        5.4
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("49"),
        NumberInt("59"),
        NumberInt("64"),
        NumberInt("35"),
        NumberInt("73"),
        NumberInt("52")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("86"),
    stressIndex: NumberInt("10"),
    currentHeartRate: NumberInt("109"),
    currentStepRate: NumberInt("100"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-04-25T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-25T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-25T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:39:18.505Z"),
    updateTime: ISODate("2025-04-25T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72049d"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-24T10:39:18.505Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("108"),
        NumberInt("63"),
        NumberInt("132"),
        NumberInt("63"),
        NumberInt("109"),
        NumberInt("99"),
        NumberInt("137"),
        NumberInt("101"),
        NumberInt("150"),
        NumberInt("142")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("111"),
        NumberInt("121"),
        NumberInt("123"),
        NumberInt("100"),
        NumberInt("105"),
        NumberInt("122"),
        NumberInt("122"),
        NumberInt("109"),
        NumberInt("127")
    ],
    paceData: [
        5.8,
        5.4,
        5.3,
        6,
        5.7,
        5.5,
        5.3,
        5.8,
        5.7,
        5.7
    ],
    weekData: [
        NumberInt("38"),
        NumberInt("63"),
        NumberInt("73"),
        NumberInt("73"),
        NumberInt("30"),
        NumberInt("56"),
        NumberInt("42")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("142"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("142"),
            timestamp: ISODate("2025-04-24T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-04-24T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-24T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:39:18.505Z"),
    updateTime: ISODate("2025-04-24T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72049e"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-23T10:39:18.505Z"),
    date: "2025-04-23",
    heartRateData: [
        NumberInt("73"),
        NumberInt("96"),
        NumberInt("105"),
        NumberInt("118"),
        NumberInt("86"),
        NumberInt("102"),
        NumberInt("81"),
        NumberInt("154"),
        NumberInt("77"),
        NumberInt("109")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("107"),
        NumberInt("92"),
        NumberInt("106"),
        NumberInt("109"),
        NumberInt("106"),
        NumberInt("104"),
        NumberInt("94"),
        NumberInt("118"),
        NumberInt("107")
    ],
    paceData: [
        5.8,
        5.6,
        5.7,
        5.2,
        5.6,
        6,
        5.4,
        5.4,
        5.6,
        5.2
    ],
    weekData: [
        NumberInt("64"),
        NumberInt("44"),
        NumberInt("76"),
        NumberInt("60"),
        NumberInt("74"),
        NumberInt("39"),
        NumberInt("33")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("109"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-04-23T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-23T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-23T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-04-23T10:39:18.505Z"),
    updateTime: ISODate("2025-04-23T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d72049f"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-22T10:39:18.505Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("95"),
        NumberInt("101"),
        NumberInt("141"),
        NumberInt("121"),
        NumberInt("77"),
        NumberInt("109"),
        NumberInt("150"),
        NumberInt("67"),
        NumberInt("152"),
        NumberInt("75")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("98"),
        NumberInt("102"),
        NumberInt("97"),
        NumberInt("118"),
        NumberInt("130"),
        NumberInt("95"),
        NumberInt("115"),
        NumberInt("129"),
        NumberInt("123")
    ],
    paceData: [
        5,
        5.6,
        5.5,
        5,
        5.2,
        5.8,
        5.6,
        5.5,
        5.2,
        5.8
    ],
    weekData: [
        NumberInt("78"),
        NumberInt("66"),
        NumberInt("69"),
        NumberInt("61"),
        NumberInt("65"),
        NumberInt("70"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("75"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("75"),
            timestamp: ISODate("2025-04-22T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-04-22T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-22T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:39:18.505Z"),
    updateTime: ISODate("2025-04-22T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204a0"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-21T10:39:18.505Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("106"),
        NumberInt("84"),
        NumberInt("113"),
        NumberInt("127"),
        NumberInt("127"),
        NumberInt("110"),
        NumberInt("60"),
        NumberInt("155"),
        NumberInt("86"),
        NumberInt("139")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("129"),
        NumberInt("95"),
        NumberInt("101"),
        NumberInt("99"),
        NumberInt("95"),
        NumberInt("97"),
        NumberInt("106"),
        NumberInt("97"),
        NumberInt("117")
    ],
    paceData: [
        5.6,
        5.1,
        5.6,
        5.2,
        5.7,
        5.6,
        5.3,
        5.6,
        5.8,
        5.6
    ],
    weekData: [
        NumberInt("64"),
        NumberInt("62"),
        NumberInt("83"),
        NumberInt("62"),
        NumberInt("49"),
        NumberInt("83"),
        NumberInt("73")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("139"),
    currentStepRate: NumberInt("117"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("139"),
            timestamp: ISODate("2025-04-21T10:39:18.505Z")
        },
        {
            type: "stepRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-04-21T10:39:18.505Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-21T10:39:18.505Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:39:18.505Z"),
    updateTime: ISODate("2025-04-21T10:39:18.505Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204a1"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-19T10:39:18.506Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("90"),
        NumberInt("88"),
        NumberInt("121"),
        NumberInt("149"),
        NumberInt("74"),
        NumberInt("69"),
        NumberInt("103"),
        NumberInt("126"),
        NumberInt("151"),
        NumberInt("109")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("129"),
        NumberInt("117"),
        NumberInt("100"),
        NumberInt("120"),
        NumberInt("94"),
        NumberInt("130"),
        NumberInt("100"),
        NumberInt("110"),
        NumberInt("119")
    ],
    paceData: [
        5.8,
        5.2,
        5.4,
        5.8,
        5.2,
        5.5,
        5.1,
        5.4,
        5.6,
        5.5
    ],
    weekData: [
        NumberInt("75"),
        NumberInt("66"),
        NumberInt("59"),
        NumberInt("88"),
        NumberInt("37"),
        NumberInt("36"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("109"),
    currentStepRate: NumberInt("119"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-19T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-19T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-19T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:39:18.506Z"),
    updateTime: ISODate("2025-05-19T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204a2"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-18T10:39:18.506Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("122"),
        NumberInt("82"),
        NumberInt("160"),
        NumberInt("89"),
        NumberInt("159"),
        NumberInt("118"),
        NumberInt("151"),
        NumberInt("114"),
        NumberInt("148"),
        NumberInt("80")
    ],
    stepRateData: [
        NumberInt("112"),
        NumberInt("119"),
        NumberInt("104"),
        NumberInt("99"),
        NumberInt("121"),
        NumberInt("125"),
        NumberInt("111"),
        NumberInt("92"),
        NumberInt("120"),
        NumberInt("99")
    ],
    paceData: [
        5.6,
        5.8,
        5.8,
        5.9,
        5.6,
        5.9,
        5.2,
        5.7,
        5.4,
        5.1
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("54"),
        NumberInt("74"),
        NumberInt("80"),
        NumberInt("90"),
        NumberInt("58"),
        NumberInt("47")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("80"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("80"),
            timestamp: ISODate("2025-05-18T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-18T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-18T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-18T10:39:18.506Z"),
    updateTime: ISODate("2025-05-18T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204a3"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-17T10:39:18.506Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("95"),
        NumberInt("116"),
        NumberInt("120"),
        NumberInt("76"),
        NumberInt("110"),
        NumberInt("160"),
        NumberInt("121"),
        NumberInt("121"),
        NumberInt("111"),
        NumberInt("86")
    ],
    stepRateData: [
        NumberInt("97"),
        NumberInt("127"),
        NumberInt("108"),
        NumberInt("109"),
        NumberInt("115"),
        NumberInt("121"),
        NumberInt("114"),
        NumberInt("111"),
        NumberInt("90"),
        NumberInt("112")
    ],
    paceData: [
        5.5,
        5.9,
        5.6,
        5.9,
        5.3,
        5.7,
        5,
        5.4,
        5.3,
        5.4
    ],
    weekData: [
        NumberInt("41"),
        NumberInt("34"),
        NumberInt("36"),
        NumberInt("88"),
        NumberInt("90"),
        NumberInt("32"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("86"),
    currentStepRate: NumberInt("112"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("86"),
            timestamp: ISODate("2025-05-17T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-17T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-17T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-17T10:39:18.506Z"),
    updateTime: ISODate("2025-05-17T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204a4"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-15T10:39:18.506Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("74"),
        NumberInt("108"),
        NumberInt("120"),
        NumberInt("78"),
        NumberInt("134"),
        NumberInt("73"),
        NumberInt("152"),
        NumberInt("65"),
        NumberInt("87"),
        NumberInt("123")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("105"),
        NumberInt("112"),
        NumberInt("100"),
        NumberInt("109"),
        NumberInt("122"),
        NumberInt("110"),
        NumberInt("119"),
        NumberInt("116"),
        NumberInt("108")
    ],
    paceData: [
        5.3,
        5.3,
        5.1,
        5.5,
        5.5,
        6,
        5.9,
        5.7,
        5.7,
        5.7
    ],
    weekData: [
        NumberInt("67"),
        NumberInt("55"),
        NumberInt("83"),
        NumberInt("70"),
        NumberInt("82"),
        NumberInt("42"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("123"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-15T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-15T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-15T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:39:18.506Z"),
    updateTime: ISODate("2025-05-15T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204a5"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-14T10:39:18.506Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("80"),
        NumberInt("133"),
        NumberInt("64"),
        NumberInt("90"),
        NumberInt("160"),
        NumberInt("104"),
        NumberInt("141"),
        NumberInt("140"),
        NumberInt("88"),
        NumberInt("73")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("98"),
        NumberInt("122"),
        NumberInt("93"),
        NumberInt("95"),
        NumberInt("102"),
        NumberInt("127"),
        NumberInt("95"),
        NumberInt("110"),
        NumberInt("119")
    ],
    paceData: [
        5.7,
        5.6,
        5.4,
        5.1,
        5.5,
        5.4,
        5.1,
        5.9,
        5,
        5.6
    ],
    weekData: [
        NumberInt("83"),
        NumberInt("56"),
        NumberInt("34"),
        NumberInt("56"),
        NumberInt("79"),
        NumberInt("52"),
        NumberInt("47")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("10"),
    currentHeartRate: NumberInt("73"),
    currentStepRate: NumberInt("119"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("73"),
            timestamp: ISODate("2025-05-14T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-14T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-14T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:39:18.506Z"),
    updateTime: ISODate("2025-05-14T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204a6"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-13T10:39:18.506Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("88"),
        NumberInt("110"),
        NumberInt("68"),
        NumberInt("134"),
        NumberInt("150"),
        NumberInt("65"),
        NumberInt("103"),
        NumberInt("146"),
        NumberInt("157"),
        NumberInt("132")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("101"),
        NumberInt("125"),
        NumberInt("102"),
        NumberInt("102"),
        NumberInt("112"),
        NumberInt("110"),
        NumberInt("91"),
        NumberInt("126"),
        NumberInt("122")
    ],
    paceData: [
        6,
        5,
        6,
        5.2,
        5.3,
        5.9,
        5.4,
        6,
        5.5,
        5.2
    ],
    weekData: [
        NumberInt("67"),
        NumberInt("32"),
        NumberInt("70"),
        NumberInt("60"),
        NumberInt("86"),
        NumberInt("30"),
        NumberInt("35")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("86"),
    stressIndex: NumberInt("23"),
    currentHeartRate: NumberInt("132"),
    currentStepRate: NumberInt("122"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("132"),
            timestamp: ISODate("2025-05-13T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-05-13T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-13T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:39:18.506Z"),
    updateTime: ISODate("2025-05-13T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204a7"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-12T10:39:18.506Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("113"),
        NumberInt("148"),
        NumberInt("122"),
        NumberInt("134"),
        NumberInt("127"),
        NumberInt("142"),
        NumberInt("95"),
        NumberInt("130"),
        NumberInt("96"),
        NumberInt("86")
    ],
    stepRateData: [
        NumberInt("107"),
        NumberInt("122"),
        NumberInt("123"),
        NumberInt("113"),
        NumberInt("96"),
        NumberInt("98"),
        NumberInt("95"),
        NumberInt("104"),
        NumberInt("101"),
        NumberInt("92")
    ],
    paceData: [
        5.6,
        5.5,
        5.1,
        5.5,
        5.2,
        5.4,
        5.1,
        6,
        6,
        5.9
    ],
    weekData: [
        NumberInt("78"),
        NumberInt("90"),
        NumberInt("30"),
        NumberInt("53"),
        NumberInt("49"),
        NumberInt("51"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("86"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("86"),
            timestamp: ISODate("2025-05-12T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-05-12T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-12T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:39:18.506Z"),
    updateTime: ISODate("2025-05-12T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204a8"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-11T10:39:18.506Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("118"),
        NumberInt("123"),
        NumberInt("97"),
        NumberInt("80"),
        NumberInt("61"),
        NumberInt("91"),
        NumberInt("126"),
        NumberInt("120"),
        NumberInt("135"),
        NumberInt("64")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("125"),
        NumberInt("94"),
        NumberInt("106"),
        NumberInt("100"),
        NumberInt("121"),
        NumberInt("129"),
        NumberInt("123"),
        NumberInt("127"),
        NumberInt("113")
    ],
    paceData: [
        6,
        5.1,
        5.4,
        5.4,
        5.2,
        5.2,
        5.6,
        5.8,
        5.8,
        5.3
    ],
    weekData: [
        NumberInt("60"),
        NumberInt("79"),
        NumberInt("52"),
        NumberInt("58"),
        NumberInt("80"),
        NumberInt("38"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("81"),
    stressIndex: NumberInt("10"),
    currentHeartRate: NumberInt("64"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("64"),
            timestamp: ISODate("2025-05-11T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-11T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-11T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:39:18.506Z"),
    updateTime: ISODate("2025-05-11T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204a9"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-10T10:39:18.506Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("103"),
        NumberInt("128"),
        NumberInt("141"),
        NumberInt("111"),
        NumberInt("100"),
        NumberInt("126"),
        NumberInt("149"),
        NumberInt("68"),
        NumberInt("129"),
        NumberInt("74")
    ],
    stepRateData: [
        NumberInt("111"),
        NumberInt("91"),
        NumberInt("110"),
        NumberInt("102"),
        NumberInt("130"),
        NumberInt("122"),
        NumberInt("120"),
        NumberInt("129"),
        NumberInt("90"),
        NumberInt("128")
    ],
    paceData: [
        5.1,
        5.1,
        5.2,
        5.5,
        5.9,
        5,
        5.4,
        5.2,
        5.3,
        5.5
    ],
    weekData: [
        NumberInt("38"),
        NumberInt("81"),
        NumberInt("51"),
        NumberInt("85"),
        NumberInt("66"),
        NumberInt("69"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("74"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("74"),
            timestamp: ISODate("2025-05-10T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-10T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-10T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:39:18.506Z"),
    updateTime: ISODate("2025-05-10T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204aa"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-09T10:39:18.506Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("137"),
        NumberInt("138"),
        NumberInt("65"),
        NumberInt("145"),
        NumberInt("129"),
        NumberInt("62"),
        NumberInt("136"),
        NumberInt("81"),
        NumberInt("145"),
        NumberInt("73")
    ],
    stepRateData: [
        NumberInt("103"),
        NumberInt("122"),
        NumberInt("104"),
        NumberInt("119"),
        NumberInt("100"),
        NumberInt("95"),
        NumberInt("130"),
        NumberInt("105"),
        NumberInt("128"),
        NumberInt("126")
    ],
    paceData: [
        5.2,
        5.3,
        5,
        5.6,
        5.5,
        5.8,
        5.5,
        5.2,
        5.2,
        5.9
    ],
    weekData: [
        NumberInt("57"),
        NumberInt("76"),
        NumberInt("74"),
        NumberInt("31"),
        NumberInt("55"),
        NumberInt("41"),
        NumberInt("46")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("63"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("73"),
    currentStepRate: NumberInt("126"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("73"),
            timestamp: ISODate("2025-05-09T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("126"),
            timestamp: ISODate("2025-05-09T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-09T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:39:18.506Z"),
    updateTime: ISODate("2025-05-09T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204ab"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-08T10:39:18.506Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("132"),
        NumberInt("132"),
        NumberInt("67"),
        NumberInt("71"),
        NumberInt("118"),
        NumberInt("119"),
        NumberInt("91"),
        NumberInt("149"),
        NumberInt("122"),
        NumberInt("101")
    ],
    stepRateData: [
        NumberInt("130"),
        NumberInt("103"),
        NumberInt("126"),
        NumberInt("110"),
        NumberInt("117"),
        NumberInt("103"),
        NumberInt("115"),
        NumberInt("99"),
        NumberInt("91"),
        NumberInt("100")
    ],
    paceData: [
        5.6,
        5.1,
        5.4,
        5.6,
        5.5,
        5.9,
        6,
        5.1,
        5.4,
        5.9
    ],
    weekData: [
        NumberInt("78"),
        NumberInt("59"),
        NumberInt("61"),
        NumberInt("75"),
        NumberInt("73"),
        NumberInt("71"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("101"),
    currentStepRate: NumberInt("100"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-05-08T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-08T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-08T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:39:18.506Z"),
    updateTime: ISODate("2025-05-08T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204ac"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-07T10:39:18.506Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("144"),
        NumberInt("74"),
        NumberInt("71"),
        NumberInt("79"),
        NumberInt("61"),
        NumberInt("99"),
        NumberInt("132"),
        NumberInt("155"),
        NumberInt("76"),
        NumberInt("133")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("118"),
        NumberInt("110"),
        NumberInt("90"),
        NumberInt("96"),
        NumberInt("130"),
        NumberInt("106"),
        NumberInt("129"),
        NumberInt("124"),
        NumberInt("129")
    ],
    paceData: [
        5.3,
        5.6,
        5.6,
        5.4,
        5.1,
        5.9,
        5.6,
        5.9,
        5.7,
        5.5
    ],
    weekData: [
        NumberInt("64"),
        NumberInt("58"),
        NumberInt("89"),
        NumberInt("50"),
        NumberInt("40"),
        NumberInt("62"),
        NumberInt("31")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("133"),
    currentStepRate: NumberInt("129"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("133"),
            timestamp: ISODate("2025-05-07T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-05-07T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-07T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:39:18.506Z"),
    updateTime: ISODate("2025-05-07T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204ad"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-06T10:39:18.506Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("98"),
        NumberInt("112"),
        NumberInt("80"),
        NumberInt("85"),
        NumberInt("104"),
        NumberInt("130"),
        NumberInt("84"),
        NumberInt("63"),
        NumberInt("124"),
        NumberInt("141")
    ],
    stepRateData: [
        NumberInt("105"),
        NumberInt("125"),
        NumberInt("106"),
        NumberInt("123"),
        NumberInt("102"),
        NumberInt("116"),
        NumberInt("104"),
        NumberInt("102"),
        NumberInt("111"),
        NumberInt("91")
    ],
    paceData: [
        5.2,
        5.4,
        5.3,
        5.8,
        5.1,
        5.3,
        5.3,
        5.5,
        5.4,
        5.2
    ],
    weekData: [
        NumberInt("66"),
        NumberInt("45"),
        NumberInt("38"),
        NumberInt("69"),
        NumberInt("50"),
        NumberInt("51"),
        NumberInt("85")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("141"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("141"),
            timestamp: ISODate("2025-05-06T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-06T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-06T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:39:18.506Z"),
    updateTime: ISODate("2025-05-06T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204ae"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-05T10:39:18.506Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("155"),
        NumberInt("61"),
        NumberInt("69"),
        NumberInt("150"),
        NumberInt("110"),
        NumberInt("151"),
        NumberInt("134"),
        NumberInt("92"),
        NumberInt("82"),
        NumberInt("73")
    ],
    stepRateData: [
        NumberInt("130"),
        NumberInt("115"),
        NumberInt("121"),
        NumberInt("107"),
        NumberInt("107"),
        NumberInt("103"),
        NumberInt("98"),
        NumberInt("93"),
        NumberInt("111"),
        NumberInt("112")
    ],
    paceData: [
        5.2,
        5.8,
        5.7,
        5.9,
        5.4,
        6,
        5.9,
        5.6,
        5.3,
        6
    ],
    weekData: [
        NumberInt("68"),
        NumberInt("45"),
        NumberInt("35"),
        NumberInt("60"),
        NumberInt("55"),
        NumberInt("81"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("72"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("73"),
    currentStepRate: NumberInt("112"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("73"),
            timestamp: ISODate("2025-05-05T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-05T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-05T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:39:18.506Z"),
    updateTime: ISODate("2025-05-05T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204af"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-04T10:39:18.506Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("94"),
        NumberInt("62"),
        NumberInt("141"),
        NumberInt("114"),
        NumberInt("147"),
        NumberInt("147"),
        NumberInt("119"),
        NumberInt("119"),
        NumberInt("160"),
        NumberInt("98")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("106"),
        NumberInt("118"),
        NumberInt("92"),
        NumberInt("126"),
        NumberInt("117"),
        NumberInt("103"),
        NumberInt("92"),
        NumberInt("106"),
        NumberInt("95")
    ],
    paceData: [
        5.1,
        5.4,
        5.4,
        5.2,
        5.8,
        5.3,
        5.7,
        5.6,
        5.7,
        5.9
    ],
    weekData: [
        NumberInt("58"),
        NumberInt("85"),
        NumberInt("82"),
        NumberInt("46"),
        NumberInt("87"),
        NumberInt("30"),
        NumberInt("35")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("98"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-04T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-04T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-04T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:39:18.506Z"),
    updateTime: ISODate("2025-05-04T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204b0"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-02T10:39:18.506Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("100"),
        NumberInt("112"),
        NumberInt("66"),
        NumberInt("71"),
        NumberInt("135"),
        NumberInt("141"),
        NumberInt("137"),
        NumberInt("80"),
        NumberInt("87"),
        NumberInt("61")
    ],
    stepRateData: [
        NumberInt("127"),
        NumberInt("92"),
        NumberInt("91"),
        NumberInt("104"),
        NumberInt("114"),
        NumberInt("98"),
        NumberInt("127"),
        NumberInt("125"),
        NumberInt("111"),
        NumberInt("128")
    ],
    paceData: [
        5.4,
        5,
        5.5,
        5.8,
        5.4,
        5.3,
        5.5,
        5.1,
        5.7,
        5.2
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("53"),
        NumberInt("66"),
        NumberInt("85"),
        NumberInt("82"),
        NumberInt("39"),
        NumberInt("54")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("65"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("61"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("61"),
            timestamp: ISODate("2025-05-02T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-02T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-02T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:39:18.506Z"),
    updateTime: ISODate("2025-05-02T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204b1"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-01T10:39:18.506Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("72"),
        NumberInt("146"),
        NumberInt("94"),
        NumberInt("120"),
        NumberInt("98"),
        NumberInt("141"),
        NumberInt("117"),
        NumberInt("144"),
        NumberInt("131"),
        NumberInt("151")
    ],
    stepRateData: [
        NumberInt("106"),
        NumberInt("100"),
        NumberInt("95"),
        NumberInt("96"),
        NumberInt("95"),
        NumberInt("107"),
        NumberInt("106"),
        NumberInt("102"),
        NumberInt("117"),
        NumberInt("103")
    ],
    paceData: [
        6,
        5.1,
        5.8,
        5.9,
        5.9,
        5.8,
        5.8,
        5.2,
        5.7,
        5.8
    ],
    weekData: [
        NumberInt("71"),
        NumberInt("68"),
        NumberInt("65"),
        NumberInt("83"),
        NumberInt("60"),
        NumberInt("46"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("151"),
    currentStepRate: NumberInt("103"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("151"),
            timestamp: ISODate("2025-05-01T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-05-01T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-01T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:39:18.506Z"),
    updateTime: ISODate("2025-05-01T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204b2"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-30T10:39:18.506Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("156"),
        NumberInt("114"),
        NumberInt("107"),
        NumberInt("102"),
        NumberInt("144"),
        NumberInt("113"),
        NumberInt("83"),
        NumberInt("113"),
        NumberInt("77"),
        NumberInt("106")
    ],
    stepRateData: [
        NumberInt("91"),
        NumberInt("116"),
        NumberInt("101"),
        NumberInt("100"),
        NumberInt("91"),
        NumberInt("97"),
        NumberInt("120"),
        NumberInt("122"),
        NumberInt("92"),
        NumberInt("94")
    ],
    paceData: [
        5.5,
        5,
        5.3,
        5.5,
        5,
        5.4,
        5.8,
        6,
        5.7,
        5.5
    ],
    weekData: [
        NumberInt("47"),
        NumberInt("63"),
        NumberInt("45"),
        NumberInt("44"),
        NumberInt("77"),
        NumberInt("72"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("106"),
    currentStepRate: NumberInt("94"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-04-30T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-04-30T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-30T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:39:18.506Z"),
    updateTime: ISODate("2025-04-30T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204b3"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-29T10:39:18.506Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("93"),
        NumberInt("124"),
        NumberInt("60"),
        NumberInt("63"),
        NumberInt("115"),
        NumberInt("160"),
        NumberInt("111"),
        NumberInt("62"),
        NumberInt("137"),
        NumberInt("127")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("92"),
        NumberInt("94"),
        NumberInt("126"),
        NumberInt("98"),
        NumberInt("94"),
        NumberInt("94"),
        NumberInt("93"),
        NumberInt("104"),
        NumberInt("97")
    ],
    paceData: [
        5.8,
        5.3,
        5.4,
        5.6,
        5.6,
        5.4,
        5.8,
        5.6,
        5.7,
        5.2
    ],
    weekData: [
        NumberInt("54"),
        NumberInt("55"),
        NumberInt("39"),
        NumberInt("33"),
        NumberInt("54"),
        NumberInt("34"),
        NumberInt("39")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("127"),
    currentStepRate: NumberInt("97"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-04-29T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-29T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-29T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:39:18.506Z"),
    updateTime: ISODate("2025-04-29T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204b4"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-28T10:39:18.506Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("122"),
        NumberInt("150"),
        NumberInt("70"),
        NumberInt("125"),
        NumberInt("141"),
        NumberInt("94"),
        NumberInt("100"),
        NumberInt("157"),
        NumberInt("90"),
        NumberInt("64")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("94"),
        NumberInt("129"),
        NumberInt("101"),
        NumberInt("113"),
        NumberInt("124"),
        NumberInt("112"),
        NumberInt("93"),
        NumberInt("98"),
        NumberInt("95")
    ],
    paceData: [
        5.9,
        5.7,
        5.5,
        5.7,
        5.3,
        5.6,
        5.9,
        6,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("51"),
        NumberInt("44"),
        NumberInt("37"),
        NumberInt("58"),
        NumberInt("70"),
        NumberInt("64"),
        NumberInt("34")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("27"),
    currentHeartRate: NumberInt("64"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("64"),
            timestamp: ISODate("2025-04-28T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-28T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-28T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:39:18.506Z"),
    updateTime: ISODate("2025-04-28T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204b5"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-27T10:39:18.506Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("67"),
        NumberInt("96"),
        NumberInt("109"),
        NumberInt("122"),
        NumberInt("133"),
        NumberInt("101"),
        NumberInt("83"),
        NumberInt("132"),
        NumberInt("113"),
        NumberInt("76")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("101"),
        NumberInt("104"),
        NumberInt("111"),
        NumberInt("93"),
        NumberInt("113"),
        NumberInt("99"),
        NumberInt("130"),
        NumberInt("103"),
        NumberInt("107")
    ],
    paceData: [
        5.8,
        5.9,
        5.6,
        5.4,
        5.6,
        5.3,
        6,
        5.8,
        5.1,
        5.5
    ],
    weekData: [
        NumberInt("64"),
        NumberInt("45"),
        NumberInt("49"),
        NumberInt("55"),
        NumberInt("38"),
        NumberInt("67"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("76"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("76"),
            timestamp: ISODate("2025-04-27T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-27T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-27T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-04-27T10:39:18.506Z"),
    updateTime: ISODate("2025-04-27T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204b6"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-26T10:39:18.506Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("85"),
        NumberInt("111"),
        NumberInt("157"),
        NumberInt("149"),
        NumberInt("87"),
        NumberInt("127"),
        NumberInt("142"),
        NumberInt("91"),
        NumberInt("60"),
        NumberInt("138")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("97"),
        NumberInt("121"),
        NumberInt("128"),
        NumberInt("117"),
        NumberInt("124"),
        NumberInt("120"),
        NumberInt("126"),
        NumberInt("125"),
        NumberInt("99")
    ],
    paceData: [
        5.6,
        5.6,
        5.9,
        5.2,
        5.2,
        5.8,
        5.1,
        5.5,
        5.5,
        5.5
    ],
    weekData: [
        NumberInt("42"),
        NumberInt("86"),
        NumberInt("82"),
        NumberInt("69"),
        NumberInt("64"),
        NumberInt("53"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("65"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("138"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("138"),
            timestamp: ISODate("2025-04-26T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-26T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-26T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:39:18.506Z"),
    updateTime: ISODate("2025-04-26T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204b7"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-25T10:39:18.506Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("113"),
        NumberInt("106"),
        NumberInt("135"),
        NumberInt("117"),
        NumberInt("68"),
        NumberInt("86"),
        NumberInt("139"),
        NumberInt("133"),
        NumberInt("92"),
        NumberInt("107")
    ],
    stepRateData: [
        NumberInt("128"),
        NumberInt("92"),
        NumberInt("96"),
        NumberInt("126"),
        NumberInt("102"),
        NumberInt("111"),
        NumberInt("103"),
        NumberInt("106"),
        NumberInt("93"),
        NumberInt("110")
    ],
    paceData: [
        5.1,
        5.7,
        5.6,
        5.1,
        5.4,
        5.1,
        5.3,
        5.2,
        5.8,
        5.3
    ],
    weekData: [
        NumberInt("77"),
        NumberInt("39"),
        NumberInt("42"),
        NumberInt("43"),
        NumberInt("30"),
        NumberInt("50"),
        NumberInt("75")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("107"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-25T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-04-25T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-25T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:39:18.506Z"),
    updateTime: ISODate("2025-04-25T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204b8"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-24T10:39:18.506Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("117"),
        NumberInt("146"),
        NumberInt("114"),
        NumberInt("138"),
        NumberInt("119"),
        NumberInt("76"),
        NumberInt("65"),
        NumberInt("108"),
        NumberInt("97"),
        NumberInt("117")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("121"),
        NumberInt("129"),
        NumberInt("97"),
        NumberInt("117"),
        NumberInt("93"),
        NumberInt("98"),
        NumberInt("91"),
        NumberInt("117"),
        NumberInt("110")
    ],
    paceData: [
        5.2,
        5.4,
        5.9,
        5.4,
        5.6,
        5.7,
        5.1,
        5.4,
        5.1,
        5.5
    ],
    weekData: [
        NumberInt("31"),
        NumberInt("78"),
        NumberInt("41"),
        NumberInt("53"),
        NumberInt("66"),
        NumberInt("48"),
        NumberInt("33")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("117"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-04-24T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-04-24T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-24T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:39:18.506Z"),
    updateTime: ISODate("2025-04-24T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204b9"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-23T10:39:18.506Z"),
    date: "2025-04-23",
    heartRateData: [
        NumberInt("71"),
        NumberInt("66"),
        NumberInt("154"),
        NumberInt("152"),
        NumberInt("152"),
        NumberInt("154"),
        NumberInt("135"),
        NumberInt("133"),
        NumberInt("109"),
        NumberInt("154")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("106"),
        NumberInt("128"),
        NumberInt("121"),
        NumberInt("117"),
        NumberInt("122"),
        NumberInt("124"),
        NumberInt("129"),
        NumberInt("97"),
        NumberInt("96")
    ],
    paceData: [
        5.8,
        5.5,
        5.3,
        6,
        5.1,
        5.2,
        5.1,
        5.7,
        5.2,
        5.3
    ],
    weekData: [
        NumberInt("61"),
        NumberInt("87"),
        NumberInt("53"),
        NumberInt("42"),
        NumberInt("45"),
        NumberInt("89"),
        NumberInt("52")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("154"),
    currentStepRate: NumberInt("96"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("154"),
            timestamp: ISODate("2025-04-23T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-23T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-23T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-04-23T10:39:18.506Z"),
    updateTime: ISODate("2025-04-23T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204ba"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-22T10:39:18.506Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("99"),
        NumberInt("160"),
        NumberInt("141"),
        NumberInt("159"),
        NumberInt("80"),
        NumberInt("116"),
        NumberInt("71"),
        NumberInt("138"),
        NumberInt("96"),
        NumberInt("119")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("92"),
        NumberInt("113"),
        NumberInt("124"),
        NumberInt("94"),
        NumberInt("129"),
        NumberInt("123"),
        NumberInt("101"),
        NumberInt("94"),
        NumberInt("121")
    ],
    paceData: [
        5.2,
        5.7,
        5.9,
        5.5,
        6,
        5.6,
        5.6,
        5.1,
        5.7,
        5.7
    ],
    weekData: [
        NumberInt("32"),
        NumberInt("61"),
        NumberInt("62"),
        NumberInt("59"),
        NumberInt("74"),
        NumberInt("82"),
        NumberInt("82")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("119"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-04-22T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-04-22T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-22T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:39:18.506Z"),
    updateTime: ISODate("2025-04-22T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb565253db543d7204bb"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-21T10:39:18.506Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("137"),
        NumberInt("129"),
        NumberInt("146"),
        NumberInt("136"),
        NumberInt("120"),
        NumberInt("115"),
        NumberInt("144"),
        NumberInt("66"),
        NumberInt("135"),
        NumberInt("120")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("114"),
        NumberInt("91"),
        NumberInt("107"),
        NumberInt("109"),
        NumberInt("92"),
        NumberInt("115"),
        NumberInt("114"),
        NumberInt("105"),
        NumberInt("92")
    ],
    paceData: [
        5.4,
        5.5,
        5.9,
        5.2,
        5.1,
        5.2,
        5.8,
        5.2,
        5.8,
        5.8
    ],
    weekData: [
        NumberInt("75"),
        NumberInt("74"),
        NumberInt("89"),
        NumberInt("59"),
        NumberInt("44"),
        NumberInt("49"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("120"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-04-21T10:39:18.506Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-04-21T10:39:18.506Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-21T10:39:18.506Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:39:18.506Z"),
    updateTime: ISODate("2025-04-21T10:39:18.506Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e93f"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-20T10:39:52.226Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("63"),
        NumberInt("133"),
        NumberInt("146"),
        NumberInt("137"),
        NumberInt("113"),
        NumberInt("86"),
        NumberInt("87"),
        NumberInt("65"),
        NumberInt("99"),
        NumberInt("92")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("109"),
        NumberInt("103"),
        NumberInt("97"),
        NumberInt("119"),
        NumberInt("122"),
        NumberInt("107"),
        NumberInt("125"),
        NumberInt("130"),
        NumberInt("102")
    ],
    paceData: [
        5.5,
        5.1,
        5.5,
        5.3,
        6,
        5.5,
        5.8,
        5.5,
        5.3,
        5
    ],
    weekData: [
        NumberInt("83"),
        NumberInt("77"),
        NumberInt("59"),
        NumberInt("90"),
        NumberInt("50"),
        NumberInt("38"),
        NumberInt("56")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("92"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("92"),
    currentStepRate: NumberInt("102"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-05-20T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-05-20T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-20T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-20T10:39:52.226Z"),
    updateTime: ISODate("2025-05-20T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e940"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-19T10:39:52.226Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("145"),
        NumberInt("140"),
        NumberInt("150"),
        NumberInt("61"),
        NumberInt("133"),
        NumberInt("100"),
        NumberInt("146"),
        NumberInt("62"),
        NumberInt("81"),
        NumberInt("121")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("129"),
        NumberInt("117"),
        NumberInt("126"),
        NumberInt("110"),
        NumberInt("106"),
        NumberInt("121"),
        NumberInt("120"),
        NumberInt("96"),
        NumberInt("122")
    ],
    paceData: [
        5.4,
        5.9,
        5.1,
        5.8,
        5.9,
        5.6,
        5.3,
        5.1,
        5.7,
        5.4
    ],
    weekData: [
        NumberInt("64"),
        NumberInt("50"),
        NumberInt("53"),
        NumberInt("70"),
        NumberInt("62"),
        NumberInt("74"),
        NumberInt("50")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("121"),
    currentStepRate: NumberInt("122"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-19T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-05-19T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-19T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:39:52.226Z"),
    updateTime: ISODate("2025-05-19T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e941"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-18T10:39:52.226Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("73"),
        NumberInt("140"),
        NumberInt("66"),
        NumberInt("158"),
        NumberInt("75"),
        NumberInt("82"),
        NumberInt("73"),
        NumberInt("114"),
        NumberInt("95"),
        NumberInt("132")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("130"),
        NumberInt("112"),
        NumberInt("91"),
        NumberInt("123"),
        NumberInt("95"),
        NumberInt("92"),
        NumberInt("96"),
        NumberInt("99"),
        NumberInt("107")
    ],
    paceData: [
        5.4,
        5.1,
        5.3,
        5.2,
        5.6,
        5.6,
        6,
        5.7,
        5.5,
        5.3
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("72"),
        NumberInt("62"),
        NumberInt("42"),
        NumberInt("60"),
        NumberInt("69"),
        NumberInt("83")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("132"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("132"),
            timestamp: ISODate("2025-05-18T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-18T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-18T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-18T10:39:52.226Z"),
    updateTime: ISODate("2025-05-18T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e942"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-17T10:39:52.226Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("102"),
        NumberInt("125"),
        NumberInt("156"),
        NumberInt("141"),
        NumberInt("116"),
        NumberInt("96"),
        NumberInt("90"),
        NumberInt("143"),
        NumberInt("63"),
        NumberInt("133")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("125"),
        NumberInt("91"),
        NumberInt("124"),
        NumberInt("116"),
        NumberInt("114"),
        NumberInt("127"),
        NumberInt("112"),
        NumberInt("118"),
        NumberInt("93")
    ],
    paceData: [
        6,
        5.2,
        5.5,
        5.7,
        5.6,
        5.6,
        5.8,
        5.5,
        5.2,
        5.7
    ],
    weekData: [
        NumberInt("30"),
        NumberInt("71"),
        NumberInt("51"),
        NumberInt("62"),
        NumberInt("78"),
        NumberInt("89"),
        NumberInt("81")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("133"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("133"),
            timestamp: ISODate("2025-05-17T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-17T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-17T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-17T10:39:52.226Z"),
    updateTime: ISODate("2025-05-17T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e943"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-16T10:39:52.226Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("117"),
        NumberInt("73"),
        NumberInt("141"),
        NumberInt("117"),
        NumberInt("137"),
        NumberInt("121"),
        NumberInt("66"),
        NumberInt("79"),
        NumberInt("104"),
        NumberInt("102")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("118"),
        NumberInt("126"),
        NumberInt("97"),
        NumberInt("110"),
        NumberInt("127"),
        NumberInt("95"),
        NumberInt("92"),
        NumberInt("115"),
        NumberInt("120")
    ],
    paceData: [
        5.3,
        5.1,
        5.3,
        5.7,
        5.5,
        5.4,
        5.2,
        5.5,
        5.3,
        5.5
    ],
    weekData: [
        NumberInt("61"),
        NumberInt("85"),
        NumberInt("69"),
        NumberInt("77"),
        NumberInt("69"),
        NumberInt("59"),
        NumberInt("66")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("63"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("102"),
    currentStepRate: NumberInt("120"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-05-16T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-05-16T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-16T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:39:52.226Z"),
    updateTime: ISODate("2025-05-16T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e944"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-15T10:39:52.226Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("152"),
        NumberInt("62"),
        NumberInt("142"),
        NumberInt("67"),
        NumberInt("138"),
        NumberInt("70"),
        NumberInt("141"),
        NumberInt("98"),
        NumberInt("104"),
        NumberInt("142")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("128"),
        NumberInt("96"),
        NumberInt("120"),
        NumberInt("108"),
        NumberInt("124"),
        NumberInt("116"),
        NumberInt("120"),
        NumberInt("102"),
        NumberInt("124")
    ],
    paceData: [
        5.2,
        5.1,
        6,
        5.7,
        5.7,
        6,
        5.6,
        5.8,
        5.5,
        5.1
    ],
    weekData: [
        NumberInt("32"),
        NumberInt("80"),
        NumberInt("73"),
        NumberInt("38"),
        NumberInt("70"),
        NumberInt("75"),
        NumberInt("66")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("142"),
    currentStepRate: NumberInt("124"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("142"),
            timestamp: ISODate("2025-05-15T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-15T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-15T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:39:52.226Z"),
    updateTime: ISODate("2025-05-15T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e945"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-14T10:39:52.226Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("136"),
        NumberInt("141"),
        NumberInt("97"),
        NumberInt("101"),
        NumberInt("159"),
        NumberInt("84"),
        NumberInt("78"),
        NumberInt("97"),
        NumberInt("159"),
        NumberInt("79")
    ],
    stepRateData: [
        NumberInt("99"),
        NumberInt("107"),
        NumberInt("124"),
        NumberInt("105"),
        NumberInt("98"),
        NumberInt("97"),
        NumberInt("103"),
        NumberInt("103"),
        NumberInt("121"),
        NumberInt("110")
    ],
    paceData: [
        5.2,
        5.9,
        5.7,
        5.4,
        5.9,
        5.3,
        5.5,
        5.7,
        5.9,
        5.4
    ],
    weekData: [
        NumberInt("51"),
        NumberInt("56"),
        NumberInt("90"),
        NumberInt("47"),
        NumberInt("59"),
        NumberInt("61"),
        NumberInt("43")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("79"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("79"),
            timestamp: ISODate("2025-05-14T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-05-14T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-14T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:39:52.226Z"),
    updateTime: ISODate("2025-05-14T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e946"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-13T10:39:52.226Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("113"),
        NumberInt("82"),
        NumberInt("159"),
        NumberInt("71"),
        NumberInt("108"),
        NumberInt("145"),
        NumberInt("125"),
        NumberInt("133"),
        NumberInt("79"),
        NumberInt("141")
    ],
    stepRateData: [
        NumberInt("106"),
        NumberInt("117"),
        NumberInt("93"),
        NumberInt("119"),
        NumberInt("99"),
        NumberInt("113"),
        NumberInt("117"),
        NumberInt("103"),
        NumberInt("105"),
        NumberInt("121")
    ],
    paceData: [
        5.6,
        5.1,
        5.2,
        5.4,
        5.7,
        5.3,
        5.4,
        5,
        5.3,
        5.3
    ],
    weekData: [
        NumberInt("76"),
        NumberInt("30"),
        NumberInt("73"),
        NumberInt("90"),
        NumberInt("61"),
        NumberInt("87"),
        NumberInt("35")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("141"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("141"),
            timestamp: ISODate("2025-05-13T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-13T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-13T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:39:52.226Z"),
    updateTime: ISODate("2025-05-13T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e947"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-12T10:39:52.226Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("135"),
        NumberInt("114"),
        NumberInt("88"),
        NumberInt("65"),
        NumberInt("131"),
        NumberInt("70"),
        NumberInt("156"),
        NumberInt("158"),
        NumberInt("149"),
        NumberInt("114")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("117"),
        NumberInt("124"),
        NumberInt("113"),
        NumberInt("123"),
        NumberInt("94"),
        NumberInt("127"),
        NumberInt("113"),
        NumberInt("101"),
        NumberInt("113")
    ],
    paceData: [
        5.8,
        5.1,
        5.3,
        5.5,
        5.5,
        5.8,
        5.6,
        6,
        5.8,
        5.6
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("68"),
        NumberInt("41"),
        NumberInt("86"),
        NumberInt("36"),
        NumberInt("75"),
        NumberInt("58")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("114"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-12T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-12T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-12T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:39:52.226Z"),
    updateTime: ISODate("2025-05-12T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e948"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-11T10:39:52.226Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("75"),
        NumberInt("112"),
        NumberInt("74"),
        NumberInt("133"),
        NumberInt("76"),
        NumberInt("77"),
        NumberInt("76"),
        NumberInt("132"),
        NumberInt("117"),
        NumberInt("101")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("95"),
        NumberInt("127"),
        NumberInt("129"),
        NumberInt("94"),
        NumberInt("96"),
        NumberInt("90"),
        NumberInt("101"),
        NumberInt("119"),
        NumberInt("128")
    ],
    paceData: [
        5.1,
        5.2,
        5.5,
        6,
        5.3,
        5.3,
        5.5,
        5.1,
        5.1,
        5.8
    ],
    weekData: [
        NumberInt("45"),
        NumberInt("81"),
        NumberInt("30"),
        NumberInt("79"),
        NumberInt("82"),
        NumberInt("48"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("83"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("101"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-05-11T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-11T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-11T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:39:52.226Z"),
    updateTime: ISODate("2025-05-11T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e949"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-10T10:39:52.226Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("135"),
        NumberInt("128"),
        NumberInt("70"),
        NumberInt("67"),
        NumberInt("127"),
        NumberInt("94"),
        NumberInt("106"),
        NumberInt("100"),
        NumberInt("116"),
        NumberInt("156")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("91"),
        NumberInt("121"),
        NumberInt("91"),
        NumberInt("97"),
        NumberInt("124"),
        NumberInt("117"),
        NumberInt("120"),
        NumberInt("123"),
        NumberInt("123")
    ],
    paceData: [
        5.7,
        5,
        5.9,
        5.3,
        5.5,
        5.1,
        6,
        5.4,
        5.2,
        5.6
    ],
    weekData: [
        NumberInt("78"),
        NumberInt("85"),
        NumberInt("79"),
        NumberInt("45"),
        NumberInt("54"),
        NumberInt("59"),
        NumberInt("33")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("156"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("156"),
            timestamp: ISODate("2025-05-10T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-10T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-10T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:39:52.226Z"),
    updateTime: ISODate("2025-05-10T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e94a"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-09T10:39:52.226Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("76"),
        NumberInt("125"),
        NumberInt("113"),
        NumberInt("101"),
        NumberInt("65"),
        NumberInt("128"),
        NumberInt("122"),
        NumberInt("109"),
        NumberInt("89"),
        NumberInt("116")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("129"),
        NumberInt("128"),
        NumberInt("129"),
        NumberInt("130"),
        NumberInt("120"),
        NumberInt("130"),
        NumberInt("92"),
        NumberInt("123"),
        NumberInt("107")
    ],
    paceData: [
        5.2,
        6,
        5.8,
        5.2,
        5.6,
        5.6,
        5.8,
        5.8,
        5.9,
        5.3
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("54"),
        NumberInt("44"),
        NumberInt("67"),
        NumberInt("87"),
        NumberInt("58"),
        NumberInt("79")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("116"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-09T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-09T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-09T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:39:52.226Z"),
    updateTime: ISODate("2025-05-09T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e94b"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-08T10:39:52.226Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("82"),
        NumberInt("117"),
        NumberInt("82"),
        NumberInt("104"),
        NumberInt("107"),
        NumberInt("113"),
        NumberInt("121"),
        NumberInt("77"),
        NumberInt("113"),
        NumberInt("112")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("99"),
        NumberInt("114"),
        NumberInt("124"),
        NumberInt("127"),
        NumberInt("109"),
        NumberInt("111"),
        NumberInt("125"),
        NumberInt("105"),
        NumberInt("128")
    ],
    paceData: [
        5,
        5.8,
        5.8,
        5.7,
        5.3,
        5.3,
        5.5,
        5.2,
        5.2,
        5.9
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("89"),
        NumberInt("43"),
        NumberInt("62"),
        NumberInt("88"),
        NumberInt("69"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("112"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-08T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-08T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-08T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:39:52.226Z"),
    updateTime: ISODate("2025-05-08T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e94c"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-07T10:39:52.226Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("146"),
        NumberInt("96"),
        NumberInt("123"),
        NumberInt("75"),
        NumberInt("137"),
        NumberInt("160"),
        NumberInt("102"),
        NumberInt("92"),
        NumberInt("140"),
        NumberInt("82")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("125"),
        NumberInt("99"),
        NumberInt("111"),
        NumberInt("94"),
        NumberInt("125"),
        NumberInt("115"),
        NumberInt("98"),
        NumberInt("128"),
        NumberInt("122")
    ],
    paceData: [
        5.2,
        5.2,
        5.9,
        5.8,
        5.1,
        5.8,
        5.3,
        5,
        5,
        5.5
    ],
    weekData: [
        NumberInt("40"),
        NumberInt("42"),
        NumberInt("31"),
        NumberInt("30"),
        NumberInt("78"),
        NumberInt("66"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("81"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("82"),
    currentStepRate: NumberInt("122"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("82"),
            timestamp: ISODate("2025-05-07T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-05-07T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-07T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:39:52.226Z"),
    updateTime: ISODate("2025-05-07T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e94d"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-06T10:39:52.226Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("129"),
        NumberInt("102"),
        NumberInt("95"),
        NumberInt("103"),
        NumberInt("128"),
        NumberInt("77"),
        NumberInt("81"),
        NumberInt("149"),
        NumberInt("130"),
        NumberInt("61")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("103"),
        NumberInt("112"),
        NumberInt("94"),
        NumberInt("99"),
        NumberInt("115"),
        NumberInt("119"),
        NumberInt("97"),
        NumberInt("121"),
        NumberInt("127")
    ],
    paceData: [
        5.5,
        5.3,
        5.3,
        5.1,
        5.1,
        5.9,
        5.5,
        5.9,
        5.5,
        5.8
    ],
    weekData: [
        NumberInt("61"),
        NumberInt("57"),
        NumberInt("45"),
        NumberInt("35"),
        NumberInt("81"),
        NumberInt("60"),
        NumberInt("85")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("61"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("61"),
            timestamp: ISODate("2025-05-06T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-06T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-06T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:39:52.226Z"),
    updateTime: ISODate("2025-05-06T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e94e"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-05T10:39:52.226Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("80"),
        NumberInt("87"),
        NumberInt("129"),
        NumberInt("83"),
        NumberInt("157"),
        NumberInt("68"),
        NumberInt("79"),
        NumberInt("100"),
        NumberInt("145"),
        NumberInt("83")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("128"),
        NumberInt("114"),
        NumberInt("107"),
        NumberInt("102"),
        NumberInt("95"),
        NumberInt("116"),
        NumberInt("106"),
        NumberInt("127"),
        NumberInt("92")
    ],
    paceData: [
        5.6,
        5.8,
        5.9,
        5.5,
        5.6,
        5.3,
        5.9,
        6,
        5.6,
        5.8
    ],
    weekData: [
        NumberInt("81"),
        NumberInt("55"),
        NumberInt("30"),
        NumberInt("56"),
        NumberInt("77"),
        NumberInt("47"),
        NumberInt("63")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("83"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("83"),
            timestamp: ISODate("2025-05-05T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-05-05T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-05T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:39:52.226Z"),
    updateTime: ISODate("2025-05-05T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e94f"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-04T10:39:52.226Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("114"),
        NumberInt("110"),
        NumberInt("149"),
        NumberInt("121"),
        NumberInt("156"),
        NumberInt("60"),
        NumberInt("113"),
        NumberInt("97"),
        NumberInt("136"),
        NumberInt("75")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("104"),
        NumberInt("97"),
        NumberInt("95"),
        NumberInt("98"),
        NumberInt("92"),
        NumberInt("128"),
        NumberInt("110"),
        NumberInt("113"),
        NumberInt("118")
    ],
    paceData: [
        5.9,
        5.4,
        5.2,
        5.4,
        5.4,
        5.3,
        5.3,
        5.7,
        5.7,
        5.7
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("63"),
        NumberInt("85"),
        NumberInt("44"),
        NumberInt("52"),
        NumberInt("83"),
        NumberInt("70")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("75"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("75"),
            timestamp: ISODate("2025-05-04T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-05-04T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-04T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:39:52.226Z"),
    updateTime: ISODate("2025-05-04T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e950"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-03T10:39:52.226Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("83"),
        NumberInt("156"),
        NumberInt("142"),
        NumberInt("151"),
        NumberInt("122"),
        NumberInt("82"),
        NumberInt("138"),
        NumberInt("66"),
        NumberInt("143"),
        NumberInt("67")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("102"),
        NumberInt("112"),
        NumberInt("118"),
        NumberInt("107"),
        NumberInt("121"),
        NumberInt("129"),
        NumberInt("108"),
        NumberInt("104"),
        NumberInt("94")
    ],
    paceData: [
        5.8,
        5.9,
        5.8,
        5.5,
        5.3,
        6,
        5.3,
        5.1,
        5.8,
        5.2
    ],
    weekData: [
        NumberInt("48"),
        NumberInt("48"),
        NumberInt("74"),
        NumberInt("73"),
        NumberInt("65"),
        NumberInt("81"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("67"),
    currentStepRate: NumberInt("94"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("67"),
            timestamp: ISODate("2025-05-03T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-05-03T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-03T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:39:52.226Z"),
    updateTime: ISODate("2025-05-03T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e951"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-02T10:39:52.226Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("70"),
        NumberInt("97"),
        NumberInt("145"),
        NumberInt("116"),
        NumberInt("133"),
        NumberInt("116"),
        NumberInt("118"),
        NumberInt("99"),
        NumberInt("69"),
        NumberInt("104")
    ],
    stepRateData: [
        NumberInt("117"),
        NumberInt("92"),
        NumberInt("108"),
        NumberInt("107"),
        NumberInt("110"),
        NumberInt("103"),
        NumberInt("121"),
        NumberInt("101"),
        NumberInt("102"),
        NumberInt("95")
    ],
    paceData: [
        5.3,
        5.9,
        6,
        5.7,
        5.2,
        5.5,
        5.1,
        5.4,
        5.8,
        5.9
    ],
    weekData: [
        NumberInt("78"),
        NumberInt("30"),
        NumberInt("78"),
        NumberInt("83"),
        NumberInt("62"),
        NumberInt("70"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("104"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-05-02T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-02T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-02T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:39:52.226Z"),
    updateTime: ISODate("2025-05-02T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e952"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-01T10:39:52.226Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("117"),
        NumberInt("130"),
        NumberInt("137"),
        NumberInt("97"),
        NumberInt("61"),
        NumberInt("132"),
        NumberInt("69"),
        NumberInt("121"),
        NumberInt("121"),
        NumberInt("75")
    ],
    stepRateData: [
        NumberInt("103"),
        NumberInt("115"),
        NumberInt("120"),
        NumberInt("106"),
        NumberInt("125"),
        NumberInt("98"),
        NumberInt("129"),
        NumberInt("115"),
        NumberInt("93"),
        NumberInt("119")
    ],
    paceData: [
        5.7,
        5.4,
        5.7,
        5.7,
        5.1,
        5.1,
        5.6,
        5.8,
        5.4,
        5.2
    ],
    weekData: [
        NumberInt("42"),
        NumberInt("35"),
        NumberInt("82"),
        NumberInt("53"),
        NumberInt("60"),
        NumberInt("62"),
        NumberInt("42")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("75"),
    currentStepRate: NumberInt("119"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("75"),
            timestamp: ISODate("2025-05-01T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-01T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-01T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:39:52.226Z"),
    updateTime: ISODate("2025-05-01T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e953"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-29T10:39:52.226Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("111"),
        NumberInt("108"),
        NumberInt("115"),
        NumberInt("104"),
        NumberInt("96"),
        NumberInt("160"),
        NumberInt("81"),
        NumberInt("144"),
        NumberInt("80"),
        NumberInt("115")
    ],
    stepRateData: [
        NumberInt("127"),
        NumberInt("125"),
        NumberInt("117"),
        NumberInt("94"),
        NumberInt("122"),
        NumberInt("120"),
        NumberInt("124"),
        NumberInt("107"),
        NumberInt("91"),
        NumberInt("116")
    ],
    paceData: [
        5.9,
        5.7,
        5.5,
        5.9,
        5.1,
        5.7,
        5.4,
        5.9,
        5.2,
        5.4
    ],
    weekData: [
        NumberInt("72"),
        NumberInt("78"),
        NumberInt("32"),
        NumberInt("89"),
        NumberInt("40"),
        NumberInt("40"),
        NumberInt("46")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("61"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("115"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-04-29T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-04-29T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-29T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:39:52.226Z"),
    updateTime: ISODate("2025-04-29T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e954"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-28T10:39:52.226Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("154"),
        NumberInt("67"),
        NumberInt("152"),
        NumberInt("111"),
        NumberInt("67"),
        NumberInt("77"),
        NumberInt("61"),
        NumberInt("118"),
        NumberInt("145"),
        NumberInt("129")
    ],
    stepRateData: [
        NumberInt("98"),
        NumberInt("123"),
        NumberInt("123"),
        NumberInt("99"),
        NumberInt("104"),
        NumberInt("95"),
        NumberInt("102"),
        NumberInt("128"),
        NumberInt("118"),
        NumberInt("96")
    ],
    paceData: [
        5.6,
        5.8,
        5.3,
        6,
        5.5,
        5.6,
        5.9,
        5.7,
        5.2,
        5.2
    ],
    weekData: [
        NumberInt("86"),
        NumberInt("75"),
        NumberInt("30"),
        NumberInt("39"),
        NumberInt("55"),
        NumberInt("66"),
        NumberInt("65")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("67"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("129"),
    currentStepRate: NumberInt("96"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-04-28T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-28T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-28T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:39:52.226Z"),
    updateTime: ISODate("2025-04-28T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e955"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-27T10:39:52.226Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("71"),
        NumberInt("114"),
        NumberInt("95"),
        NumberInt("138"),
        NumberInt("158"),
        NumberInt("112"),
        NumberInt("150"),
        NumberInt("97"),
        NumberInt("138"),
        NumberInt("68")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("122"),
        NumberInt("112"),
        NumberInt("129"),
        NumberInt("113"),
        NumberInt("100"),
        NumberInt("105"),
        NumberInt("119"),
        NumberInt("97"),
        NumberInt("104")
    ],
    paceData: [
        5.2,
        5.7,
        5.1,
        5.4,
        5.4,
        5.1,
        5.2,
        5.9,
        5.3,
        5.2
    ],
    weekData: [
        NumberInt("55"),
        NumberInt("32"),
        NumberInt("52"),
        NumberInt("79"),
        NumberInt("61"),
        NumberInt("47"),
        NumberInt("57")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("68"),
    currentStepRate: NumberInt("104"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("68"),
            timestamp: ISODate("2025-04-27T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-04-27T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-27T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-04-27T10:39:52.226Z"),
    updateTime: ISODate("2025-04-27T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e956"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-26T10:39:52.226Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("96"),
        NumberInt("91"),
        NumberInt("113"),
        NumberInt("126"),
        NumberInt("140"),
        NumberInt("141"),
        NumberInt("109"),
        NumberInt("132"),
        NumberInt("113"),
        NumberInt("97")
    ],
    stepRateData: [
        NumberInt("124"),
        NumberInt("124"),
        NumberInt("118"),
        NumberInt("107"),
        NumberInt("109"),
        NumberInt("114"),
        NumberInt("126"),
        NumberInt("104"),
        NumberInt("123"),
        NumberInt("125")
    ],
    paceData: [
        5.1,
        5.8,
        5.9,
        5.5,
        5.1,
        5,
        5,
        5.8,
        5.9,
        5.1
    ],
    weekData: [
        NumberInt("69"),
        NumberInt("89"),
        NumberInt("46"),
        NumberInt("61"),
        NumberInt("74"),
        NumberInt("82"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("97"),
    currentStepRate: NumberInt("125"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-26T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-04-26T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-26T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:39:52.226Z"),
    updateTime: ISODate("2025-04-26T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e957"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-25T10:39:52.226Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("79"),
        NumberInt("126"),
        NumberInt("60"),
        NumberInt("106"),
        NumberInt("80"),
        NumberInt("91"),
        NumberInt("62"),
        NumberInt("87"),
        NumberInt("146"),
        NumberInt("124")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("113"),
        NumberInt("124"),
        NumberInt("125"),
        NumberInt("119"),
        NumberInt("109"),
        NumberInt("93"),
        NumberInt("107"),
        NumberInt("111"),
        NumberInt("122")
    ],
    paceData: [
        5.9,
        5.8,
        5.4,
        5.5,
        5.8,
        5.8,
        5.5,
        5.1,
        6,
        5.5
    ],
    weekData: [
        NumberInt("81"),
        NumberInt("83"),
        NumberInt("75"),
        NumberInt("84"),
        NumberInt("70"),
        NumberInt("85"),
        NumberInt("77")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("61"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("124"),
    currentStepRate: NumberInt("122"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-04-25T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-04-25T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-25T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:39:52.226Z"),
    updateTime: ISODate("2025-04-25T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e958"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-24T10:39:52.226Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("125"),
        NumberInt("113"),
        NumberInt("127"),
        NumberInt("89"),
        NumberInt("103"),
        NumberInt("158"),
        NumberInt("82"),
        NumberInt("105"),
        NumberInt("142"),
        NumberInt("124")
    ],
    stepRateData: [
        NumberInt("111"),
        NumberInt("121"),
        NumberInt("113"),
        NumberInt("91"),
        NumberInt("102"),
        NumberInt("105"),
        NumberInt("106"),
        NumberInt("119"),
        NumberInt("101"),
        NumberInt("109")
    ],
    paceData: [
        5.1,
        5.1,
        5.7,
        5.3,
        5.8,
        5.1,
        5.8,
        5.8,
        6,
        5.8
    ],
    weekData: [
        NumberInt("54"),
        NumberInt("50"),
        NumberInt("42"),
        NumberInt("33"),
        NumberInt("86"),
        NumberInt("53"),
        NumberInt("32")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("81"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("124"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-04-24T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-04-24T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-24T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:39:52.226Z"),
    updateTime: ISODate("2025-04-24T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e959"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-23T10:39:52.226Z"),
    date: "2025-04-23",
    heartRateData: [
        NumberInt("93"),
        NumberInt("85"),
        NumberInt("110"),
        NumberInt("110"),
        NumberInt("81"),
        NumberInt("115"),
        NumberInt("152"),
        NumberInt("81"),
        NumberInt("66"),
        NumberInt("148")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("91"),
        NumberInt("92"),
        NumberInt("99"),
        NumberInt("117"),
        NumberInt("99"),
        NumberInt("100"),
        NumberInt("102"),
        NumberInt("106"),
        NumberInt("94")
    ],
    paceData: [
        5.8,
        5.4,
        5.5,
        5.5,
        5.3,
        5.7,
        6,
        5.8,
        5.9,
        5.7
    ],
    weekData: [
        NumberInt("41"),
        NumberInt("63"),
        NumberInt("84"),
        NumberInt("70"),
        NumberInt("59"),
        NumberInt("42"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("148"),
    currentStepRate: NumberInt("94"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("148"),
            timestamp: ISODate("2025-04-23T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-04-23T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-23T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-04-23T10:39:52.226Z"),
    updateTime: ISODate("2025-04-23T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e95a"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-22T10:39:52.226Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("121"),
        NumberInt("133"),
        NumberInt("135"),
        NumberInt("83"),
        NumberInt("113"),
        NumberInt("153"),
        NumberInt("140"),
        NumberInt("153"),
        NumberInt("134"),
        NumberInt("94")
    ],
    stepRateData: [
        NumberInt("124"),
        NumberInt("123"),
        NumberInt("111"),
        NumberInt("123"),
        NumberInt("116"),
        NumberInt("106"),
        NumberInt("98"),
        NumberInt("101"),
        NumberInt("128"),
        NumberInt("125")
    ],
    paceData: [
        5,
        5.6,
        5.1,
        5.6,
        5.1,
        5.1,
        5.7,
        5.3,
        5,
        5.6
    ],
    weekData: [
        NumberInt("39"),
        NumberInt("53"),
        NumberInt("33"),
        NumberInt("80"),
        NumberInt("82"),
        NumberInt("56"),
        NumberInt("71")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("94"),
    currentStepRate: NumberInt("125"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-04-22T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-04-22T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-22T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:39:52.226Z"),
    updateTime: ISODate("2025-04-22T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e95b"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-21T10:39:52.226Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("131"),
        NumberInt("120"),
        NumberInt("156"),
        NumberInt("139"),
        NumberInt("81"),
        NumberInt("93"),
        NumberInt("133"),
        NumberInt("103"),
        NumberInt("125"),
        NumberInt("67")
    ],
    stepRateData: [
        NumberInt("107"),
        NumberInt("125"),
        NumberInt("108"),
        NumberInt("120"),
        NumberInt("122"),
        NumberInt("117"),
        NumberInt("116"),
        NumberInt("95"),
        NumberInt("124"),
        NumberInt("92")
    ],
    paceData: [
        5.8,
        5.6,
        5.8,
        6,
        5.8,
        5,
        5.1,
        5.8,
        5.5,
        5.7
    ],
    weekData: [
        NumberInt("39"),
        NumberInt("87"),
        NumberInt("66"),
        NumberInt("73"),
        NumberInt("64"),
        NumberInt("34"),
        NumberInt("36")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("67"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("67"),
            timestamp: ISODate("2025-04-21T10:39:52.226Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-04-21T10:39:52.226Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-21T10:39:52.226Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:39:52.226Z"),
    updateTime: ISODate("2025-04-21T10:39:52.226Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e95c"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-20T10:39:52.228Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("98"),
        NumberInt("102"),
        NumberInt("137"),
        NumberInt("94"),
        NumberInt("117"),
        NumberInt("122"),
        NumberInt("94"),
        NumberInt("83"),
        NumberInt("106"),
        NumberInt("90")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("110"),
        NumberInt("97"),
        NumberInt("119"),
        NumberInt("103"),
        NumberInt("92"),
        NumberInt("98"),
        NumberInt("104"),
        NumberInt("93"),
        NumberInt("110")
    ],
    paceData: [
        5,
        5.9,
        5.4,
        5.1,
        5.6,
        5.3,
        6,
        5.4,
        5.9,
        5.2
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("31"),
        NumberInt("32"),
        NumberInt("31"),
        NumberInt("75"),
        NumberInt("86"),
        NumberInt("69")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("90"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-20T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-05-20T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-20T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-20T10:39:52.228Z"),
    updateTime: ISODate("2025-05-20T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e95d"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-19T10:39:52.228Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("95"),
        NumberInt("122"),
        NumberInt("137"),
        NumberInt("153"),
        NumberInt("120"),
        NumberInt("146"),
        NumberInt("123"),
        NumberInt("103"),
        NumberInt("156"),
        NumberInt("61")
    ],
    stepRateData: [
        NumberInt("91"),
        NumberInt("124"),
        NumberInt("95"),
        NumberInt("106"),
        NumberInt("128"),
        NumberInt("107"),
        NumberInt("116"),
        NumberInt("90"),
        NumberInt("108"),
        NumberInt("96")
    ],
    paceData: [
        6,
        5.5,
        5.8,
        5.6,
        5.8,
        5.4,
        5.8,
        5.5,
        5.7,
        5.5
    ],
    weekData: [
        NumberInt("55"),
        NumberInt("54"),
        NumberInt("75"),
        NumberInt("63"),
        NumberInt("70"),
        NumberInt("37"),
        NumberInt("36")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("61"),
    currentStepRate: NumberInt("96"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("61"),
            timestamp: ISODate("2025-05-19T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-19T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-19T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:39:52.228Z"),
    updateTime: ISODate("2025-05-19T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e95e"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-16T10:39:52.228Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("135"),
        NumberInt("144"),
        NumberInt("147"),
        NumberInt("151"),
        NumberInt("96"),
        NumberInt("90"),
        NumberInt("71"),
        NumberInt("68"),
        NumberInt("88"),
        NumberInt("60")
    ],
    stepRateData: [
        NumberInt("130"),
        NumberInt("93"),
        NumberInt("130"),
        NumberInt("113"),
        NumberInt("95"),
        NumberInt("121"),
        NumberInt("126"),
        NumberInt("110"),
        NumberInt("109"),
        NumberInt("115")
    ],
    paceData: [
        5.6,
        5.7,
        5,
        5.5,
        5.3,
        6,
        5.1,
        5.9,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("30"),
        NumberInt("31"),
        NumberInt("88"),
        NumberInt("63"),
        NumberInt("89"),
        NumberInt("85"),
        NumberInt("44")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("60"),
    currentStepRate: NumberInt("115"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("60"),
            timestamp: ISODate("2025-05-16T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-05-16T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-16T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:39:52.228Z"),
    updateTime: ISODate("2025-05-16T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e95f"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-15T10:39:52.228Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("155"),
        NumberInt("107"),
        NumberInt("160"),
        NumberInt("123"),
        NumberInt("62"),
        NumberInt("78"),
        NumberInt("79"),
        NumberInt("76"),
        NumberInt("106"),
        NumberInt("120")
    ],
    stepRateData: [
        NumberInt("118"),
        NumberInt("97"),
        NumberInt("120"),
        NumberInt("125"),
        NumberInt("118"),
        NumberInt("103"),
        NumberInt("110"),
        NumberInt("105"),
        NumberInt("95"),
        NumberInt("117")
    ],
    paceData: [
        5.9,
        5.2,
        5.7,
        5.8,
        5.8,
        5.6,
        5.6,
        5.5,
        5.9,
        5
    ],
    weekData: [
        NumberInt("85"),
        NumberInt("83"),
        NumberInt("63"),
        NumberInt("32"),
        NumberInt("86"),
        NumberInt("42"),
        NumberInt("73")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("120"),
    currentStepRate: NumberInt("117"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-05-15T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-15T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-15T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:39:52.228Z"),
    updateTime: ISODate("2025-05-15T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e960"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-13T10:39:52.228Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("68"),
        NumberInt("98"),
        NumberInt("98"),
        NumberInt("119"),
        NumberInt("113"),
        NumberInt("138"),
        NumberInt("139"),
        NumberInt("123"),
        NumberInt("86"),
        NumberInt("117")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("127"),
        NumberInt("105"),
        NumberInt("123"),
        NumberInt("95"),
        NumberInt("104"),
        NumberInt("120"),
        NumberInt("111"),
        NumberInt("98"),
        NumberInt("105")
    ],
    paceData: [
        5.2,
        5.8,
        5.3,
        5.6,
        5.4,
        5.7,
        5.3,
        5.4,
        5.1,
        5.5
    ],
    weekData: [
        NumberInt("64"),
        NumberInt("38"),
        NumberInt("32"),
        NumberInt("55"),
        NumberInt("57"),
        NumberInt("79"),
        NumberInt("63")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("117"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-13T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-05-13T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-13T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:39:52.228Z"),
    updateTime: ISODate("2025-05-13T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e961"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-12T10:39:52.228Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("148"),
        NumberInt("86"),
        NumberInt("63"),
        NumberInt("99"),
        NumberInt("117"),
        NumberInt("122"),
        NumberInt("63"),
        NumberInt("141"),
        NumberInt("64"),
        NumberInt("141")
    ],
    stepRateData: [
        NumberInt("108"),
        NumberInt("94"),
        NumberInt("109"),
        NumberInt("106"),
        NumberInt("130"),
        NumberInt("126"),
        NumberInt("122"),
        NumberInt("99"),
        NumberInt("103"),
        NumberInt("122")
    ],
    paceData: [
        6,
        5.3,
        5.1,
        5.4,
        5.5,
        5.6,
        5.1,
        5.3,
        5.2,
        5.2
    ],
    weekData: [
        NumberInt("71"),
        NumberInt("63"),
        NumberInt("49"),
        NumberInt("69"),
        NumberInt("53"),
        NumberInt("74"),
        NumberInt("46")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("63"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("141"),
    currentStepRate: NumberInt("122"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("141"),
            timestamp: ISODate("2025-05-12T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-05-12T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-12T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:39:52.228Z"),
    updateTime: ISODate("2025-05-12T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e962"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-11T10:39:52.228Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("116"),
        NumberInt("115"),
        NumberInt("116"),
        NumberInt("84"),
        NumberInt("74"),
        NumberInt("153"),
        NumberInt("157"),
        NumberInt("65"),
        NumberInt("131"),
        NumberInt("160")
    ],
    stepRateData: [
        NumberInt("128"),
        NumberInt("130"),
        NumberInt("99"),
        NumberInt("105"),
        NumberInt("105"),
        NumberInt("102"),
        NumberInt("127"),
        NumberInt("104"),
        NumberInt("92"),
        NumberInt("104")
    ],
    paceData: [
        5.2,
        5.6,
        6,
        5.9,
        5.8,
        5.5,
        5.4,
        5.5,
        5.1,
        5.3
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("35"),
        NumberInt("90"),
        NumberInt("79"),
        NumberInt("32"),
        NumberInt("32"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("160"),
    currentStepRate: NumberInt("104"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("160"),
            timestamp: ISODate("2025-05-11T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-05-11T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-11T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:39:52.228Z"),
    updateTime: ISODate("2025-05-11T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e963"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-10T10:39:52.228Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("97"),
        NumberInt("145"),
        NumberInt("149"),
        NumberInt("141"),
        NumberInt("87"),
        NumberInt("115"),
        NumberInt("103"),
        NumberInt("134"),
        NumberInt("130"),
        NumberInt("88")
    ],
    stepRateData: [
        NumberInt("91"),
        NumberInt("126"),
        NumberInt("115"),
        NumberInt("124"),
        NumberInt("122"),
        NumberInt("122"),
        NumberInt("129"),
        NumberInt("112"),
        NumberInt("96"),
        NumberInt("110")
    ],
    paceData: [
        5.1,
        5.8,
        5.6,
        5.8,
        5.9,
        5.5,
        5,
        6,
        6,
        6
    ],
    weekData: [
        NumberInt("66"),
        NumberInt("66"),
        NumberInt("75"),
        NumberInt("77"),
        NumberInt("39"),
        NumberInt("65"),
        NumberInt("33")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("88"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("88"),
            timestamp: ISODate("2025-05-10T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-05-10T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-10T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:39:52.228Z"),
    updateTime: ISODate("2025-05-10T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e964"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-08T10:39:52.228Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("145"),
        NumberInt("113"),
        NumberInt("61"),
        NumberInt("112"),
        NumberInt("129"),
        NumberInt("75"),
        NumberInt("108"),
        NumberInt("140"),
        NumberInt("140"),
        NumberInt("91")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("90"),
        NumberInt("101"),
        NumberInt("118"),
        NumberInt("110"),
        NumberInt("108"),
        NumberInt("104"),
        NumberInt("109"),
        NumberInt("122"),
        NumberInt("90")
    ],
    paceData: [
        5.3,
        5.9,
        5.3,
        5.9,
        5.6,
        5.3,
        5.8,
        5.5,
        5.8,
        5
    ],
    weekData: [
        NumberInt("61"),
        NumberInt("68"),
        NumberInt("55"),
        NumberInt("86"),
        NumberInt("69"),
        NumberInt("70"),
        NumberInt("86")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("91"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-08T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-08T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-08T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:39:52.228Z"),
    updateTime: ISODate("2025-05-08T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e965"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-05T10:39:52.228Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("97"),
        NumberInt("85"),
        NumberInt("98"),
        NumberInt("60"),
        NumberInt("95"),
        NumberInt("73"),
        NumberInt("66"),
        NumberInt("90"),
        NumberInt("123"),
        NumberInt("159")
    ],
    stepRateData: [
        NumberInt("127"),
        NumberInt("107"),
        NumberInt("96"),
        NumberInt("93"),
        NumberInt("119"),
        NumberInt("117"),
        NumberInt("110"),
        NumberInt("103"),
        NumberInt("126"),
        NumberInt("110")
    ],
    paceData: [
        5.5,
        5.9,
        5.1,
        5.6,
        5.4,
        5.5,
        5.1,
        5.4,
        5.1,
        6
    ],
    weekData: [
        NumberInt("73"),
        NumberInt("47"),
        NumberInt("36"),
        NumberInt("72"),
        NumberInt("32"),
        NumberInt("70"),
        NumberInt("70")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("92"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("159"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("159"),
            timestamp: ISODate("2025-05-05T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-05-05T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-05T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:39:52.228Z"),
    updateTime: ISODate("2025-05-05T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e966"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-04T10:39:52.228Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("104"),
        NumberInt("78"),
        NumberInt("153"),
        NumberInt("124"),
        NumberInt("79"),
        NumberInt("136"),
        NumberInt("79"),
        NumberInt("131"),
        NumberInt("63"),
        NumberInt("143")
    ],
    stepRateData: [
        NumberInt("130"),
        NumberInt("114"),
        NumberInt("94"),
        NumberInt("120"),
        NumberInt("95"),
        NumberInt("104"),
        NumberInt("125"),
        NumberInt("101"),
        NumberInt("122"),
        NumberInt("114")
    ],
    paceData: [
        5,
        5.7,
        5.2,
        5.4,
        5.9,
        5.8,
        5.2,
        5.7,
        5.9,
        5.6
    ],
    weekData: [
        NumberInt("78"),
        NumberInt("62"),
        NumberInt("58"),
        NumberInt("69"),
        NumberInt("83"),
        NumberInt("89"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("143"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("143"),
            timestamp: ISODate("2025-05-04T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-04T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-04T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:39:52.228Z"),
    updateTime: ISODate("2025-05-04T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e967"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-03T10:39:52.228Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("109"),
        NumberInt("106"),
        NumberInt("112"),
        NumberInt("157"),
        NumberInt("124"),
        NumberInt("156"),
        NumberInt("96"),
        NumberInt("126"),
        NumberInt("111"),
        NumberInt("159")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("110"),
        NumberInt("93"),
        NumberInt("116"),
        NumberInt("107"),
        NumberInt("101"),
        NumberInt("96"),
        NumberInt("125"),
        NumberInt("108"),
        NumberInt("91")
    ],
    paceData: [
        5.4,
        5.3,
        5.4,
        6,
        5.1,
        5,
        5.7,
        5.3,
        5.6,
        5.5
    ],
    weekData: [
        NumberInt("85"),
        NumberInt("88"),
        NumberInt("74"),
        NumberInt("66"),
        NumberInt("34"),
        NumberInt("36"),
        NumberInt("71")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("159"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("159"),
            timestamp: ISODate("2025-05-03T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-03T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-03T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:39:52.228Z"),
    updateTime: ISODate("2025-05-03T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e968"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-02T10:39:52.228Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("154"),
        NumberInt("84"),
        NumberInt("78"),
        NumberInt("151"),
        NumberInt("106"),
        NumberInt("83"),
        NumberInt("134"),
        NumberInt("120"),
        NumberInt("111"),
        NumberInt("72")
    ],
    stepRateData: [
        NumberInt("114"),
        NumberInt("129"),
        NumberInt("97"),
        NumberInt("123"),
        NumberInt("127"),
        NumberInt("96"),
        NumberInt("116"),
        NumberInt("100"),
        NumberInt("120"),
        NumberInt("113")
    ],
    paceData: [
        5.4,
        5.2,
        5.1,
        5.7,
        5.8,
        5.8,
        5.6,
        5.9,
        6,
        5.5
    ],
    weekData: [
        NumberInt("62"),
        NumberInt("31"),
        NumberInt("45"),
        NumberInt("36"),
        NumberInt("83"),
        NumberInt("86"),
        NumberInt("52")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("61"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("72"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("72"),
            timestamp: ISODate("2025-05-02T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-02T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-02T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:39:52.228Z"),
    updateTime: ISODate("2025-05-02T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e969"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-01T10:39:52.228Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("146"),
        NumberInt("98"),
        NumberInt("157"),
        NumberInt("82"),
        NumberInt("152"),
        NumberInt("103"),
        NumberInt("147"),
        NumberInt("88"),
        NumberInt("144"),
        NumberInt("72")
    ],
    stepRateData: [
        NumberInt("107"),
        NumberInt("117"),
        NumberInt("128"),
        NumberInt("94"),
        NumberInt("111"),
        NumberInt("93"),
        NumberInt("119"),
        NumberInt("96"),
        NumberInt("102"),
        NumberInt("112")
    ],
    paceData: [
        5.3,
        5.7,
        5.5,
        5.4,
        5,
        5.4,
        5.2,
        5,
        5,
        5.4
    ],
    weekData: [
        NumberInt("43"),
        NumberInt("45"),
        NumberInt("83"),
        NumberInt("49"),
        NumberInt("61"),
        NumberInt("82"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("72"),
    currentStepRate: NumberInt("112"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("72"),
            timestamp: ISODate("2025-05-01T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-01T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-01T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:39:52.228Z"),
    updateTime: ISODate("2025-05-01T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e96a"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-30T10:39:52.228Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("116"),
        NumberInt("99"),
        NumberInt("134"),
        NumberInt("82"),
        NumberInt("121"),
        NumberInt("119"),
        NumberInt("148"),
        NumberInt("122"),
        NumberInt("76"),
        NumberInt("121")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("94"),
        NumberInt("94"),
        NumberInt("102"),
        NumberInt("126"),
        NumberInt("124"),
        NumberInt("126"),
        NumberInt("127"),
        NumberInt("121"),
        NumberInt("94")
    ],
    paceData: [
        5.8,
        5.7,
        5.2,
        5.6,
        5.5,
        5.4,
        6,
        5.6,
        5.9,
        5.9
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("32"),
        NumberInt("30"),
        NumberInt("58"),
        NumberInt("72"),
        NumberInt("82"),
        NumberInt("89")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("10"),
    currentHeartRate: NumberInt("121"),
    currentStepRate: NumberInt("94"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-04-30T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-04-30T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-30T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:39:52.228Z"),
    updateTime: ISODate("2025-04-30T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e96b"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-29T10:39:52.228Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("66"),
        NumberInt("132"),
        NumberInt("126"),
        NumberInt("123"),
        NumberInt("61"),
        NumberInt("125"),
        NumberInt("69"),
        NumberInt("95"),
        NumberInt("68"),
        NumberInt("107")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("122"),
        NumberInt("120"),
        NumberInt("118"),
        NumberInt("105"),
        NumberInt("120"),
        NumberInt("130"),
        NumberInt("110"),
        NumberInt("124"),
        NumberInt("127")
    ],
    paceData: [
        5.1,
        5.6,
        5.5,
        5.9,
        5.3,
        5.1,
        5.7,
        5.5,
        5.1,
        5.8
    ],
    weekData: [
        NumberInt("85"),
        NumberInt("51"),
        NumberInt("90"),
        NumberInt("62"),
        NumberInt("33"),
        NumberInt("73"),
        NumberInt("49")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("107"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-29T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-04-29T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-29T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:39:52.228Z"),
    updateTime: ISODate("2025-04-29T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e96c"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-28T10:39:52.228Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("155"),
        NumberInt("159"),
        NumberInt("140"),
        NumberInt("89"),
        NumberInt("138"),
        NumberInt("143"),
        NumberInt("153"),
        NumberInt("65"),
        NumberInt("138"),
        NumberInt("95")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("93"),
        NumberInt("115"),
        NumberInt("124"),
        NumberInt("94"),
        NumberInt("111"),
        NumberInt("128"),
        NumberInt("108"),
        NumberInt("98"),
        NumberInt("90")
    ],
    paceData: [
        5,
        5.8,
        5.4,
        5.7,
        5.9,
        5.5,
        5.5,
        5.8,
        5.3,
        5.9
    ],
    weekData: [
        NumberInt("34"),
        NumberInt("77"),
        NumberInt("35"),
        NumberInt("61"),
        NumberInt("58"),
        NumberInt("89"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("95"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-28T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-04-28T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-28T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:39:52.228Z"),
    updateTime: ISODate("2025-04-28T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e96d"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-26T10:39:52.228Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("92"),
        NumberInt("61"),
        NumberInt("80"),
        NumberInt("82"),
        NumberInt("151"),
        NumberInt("151"),
        NumberInt("99"),
        NumberInt("146"),
        NumberInt("126"),
        NumberInt("104")
    ],
    stepRateData: [
        NumberInt("114"),
        NumberInt("125"),
        NumberInt("91"),
        NumberInt("97"),
        NumberInt("117"),
        NumberInt("117"),
        NumberInt("92"),
        NumberInt("107"),
        NumberInt("114"),
        NumberInt("92")
    ],
    paceData: [
        5.9,
        6,
        5.3,
        5.3,
        5.5,
        5.5,
        5.5,
        5.6,
        5.3,
        5.2
    ],
    weekData: [
        NumberInt("68"),
        NumberInt("67"),
        NumberInt("46"),
        NumberInt("30"),
        NumberInt("48"),
        NumberInt("85"),
        NumberInt("43")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("104"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-04-26T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-04-26T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-26T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:39:52.228Z"),
    updateTime: ISODate("2025-04-26T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e96e"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-25T10:39:52.228Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("92"),
        NumberInt("116"),
        NumberInt("92"),
        NumberInt("76"),
        NumberInt("68"),
        NumberInt("141"),
        NumberInt("90"),
        NumberInt("140"),
        NumberInt("143"),
        NumberInt("107")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("93"),
        NumberInt("123"),
        NumberInt("97"),
        NumberInt("116"),
        NumberInt("124"),
        NumberInt("107"),
        NumberInt("128"),
        NumberInt("111"),
        NumberInt("128")
    ],
    paceData: [
        5.3,
        5.4,
        5.1,
        5.4,
        5.2,
        5.6,
        5.8,
        5.1,
        5.3,
        5.3
    ],
    weekData: [
        NumberInt("57"),
        NumberInt("49"),
        NumberInt("54"),
        NumberInt("54"),
        NumberInt("38"),
        NumberInt("77"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("65"),
    stressIndex: NumberInt("23"),
    currentHeartRate: NumberInt("107"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-25T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-04-25T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-25T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:39:52.228Z"),
    updateTime: ISODate("2025-04-25T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e96f"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-24T10:39:52.228Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("135"),
        NumberInt("137"),
        NumberInt("96"),
        NumberInt("150"),
        NumberInt("96"),
        NumberInt("126"),
        NumberInt("78"),
        NumberInt("139"),
        NumberInt("151"),
        NumberInt("99")
    ],
    stepRateData: [
        NumberInt("98"),
        NumberInt("107"),
        NumberInt("91"),
        NumberInt("124"),
        NumberInt("99"),
        NumberInt("104"),
        NumberInt("102"),
        NumberInt("90"),
        NumberInt("93"),
        NumberInt("113")
    ],
    paceData: [
        5.4,
        5.6,
        5.6,
        5.6,
        5.4,
        5.3,
        5.7,
        5.6,
        5.6,
        5.9
    ],
    weekData: [
        NumberInt("86"),
        NumberInt("75"),
        NumberInt("89"),
        NumberInt("61"),
        NumberInt("90"),
        NumberInt("49"),
        NumberInt("34")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("99"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-24T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-04-24T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-24T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:39:52.228Z"),
    updateTime: ISODate("2025-04-24T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e970"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-22T10:39:52.228Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("97"),
        NumberInt("110"),
        NumberInt("89"),
        NumberInt("157"),
        NumberInt("114"),
        NumberInt("155"),
        NumberInt("109"),
        NumberInt("114"),
        NumberInt("147"),
        NumberInt("128")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("127"),
        NumberInt("93"),
        NumberInt("117"),
        NumberInt("105"),
        NumberInt("105"),
        NumberInt("93"),
        NumberInt("109"),
        NumberInt("121"),
        NumberInt("109")
    ],
    paceData: [
        5.5,
        5.4,
        5.5,
        5.8,
        5.1,
        5.9,
        5.7,
        5.1,
        5.5,
        5
    ],
    weekData: [
        NumberInt("50"),
        NumberInt("90"),
        NumberInt("75"),
        NumberInt("30"),
        NumberInt("62"),
        NumberInt("79"),
        NumberInt("48")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("128"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-04-22T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-04-22T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-22T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:39:52.228Z"),
    updateTime: ISODate("2025-04-22T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e971"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-21T10:39:52.228Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("121"),
        NumberInt("151"),
        NumberInt("156"),
        NumberInt("99"),
        NumberInt("154"),
        NumberInt("84"),
        NumberInt("85"),
        NumberInt("143"),
        NumberInt("107"),
        NumberInt("129")
    ],
    stepRateData: [
        NumberInt("118"),
        NumberInt("98"),
        NumberInt("105"),
        NumberInt("92"),
        NumberInt("98"),
        NumberInt("102"),
        NumberInt("98"),
        NumberInt("125"),
        NumberInt("119"),
        NumberInt("112")
    ],
    paceData: [
        5.1,
        6,
        5.2,
        5.3,
        5.1,
        5.8,
        5.1,
        5.9,
        5.4,
        5.2
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("78"),
        NumberInt("68"),
        NumberInt("85"),
        NumberInt("53"),
        NumberInt("38"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("129"),
    currentStepRate: NumberInt("112"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-04-21T10:39:52.228Z")
        },
        {
            type: "stepRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-04-21T10:39:52.228Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-21T10:39:52.228Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:39:52.228Z"),
    updateTime: ISODate("2025-04-21T10:39:52.228Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e972"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-19T10:39:52.23Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("143"),
        NumberInt("63"),
        NumberInt("121"),
        NumberInt("139"),
        NumberInt("157"),
        NumberInt("105"),
        NumberInt("77"),
        NumberInt("145"),
        NumberInt("141"),
        NumberInt("106")
    ],
    stepRateData: [
        NumberInt("116"),
        NumberInt("114"),
        NumberInt("113"),
        NumberInt("102"),
        NumberInt("110"),
        NumberInt("93"),
        NumberInt("90"),
        NumberInt("114"),
        NumberInt("111"),
        NumberInt("116")
    ],
    paceData: [
        5.1,
        5.9,
        6,
        5.3,
        5.4,
        5.1,
        5.2,
        5.2,
        5,
        5.7
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("54"),
        NumberInt("64"),
        NumberInt("51"),
        NumberInt("50"),
        NumberInt("37"),
        NumberInt("70")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("106"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-19T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-19T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-19T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:39:52.23Z"),
    updateTime: ISODate("2025-05-19T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e973"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-17T10:39:52.23Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("65"),
        NumberInt("117"),
        NumberInt("89"),
        NumberInt("160"),
        NumberInt("121"),
        NumberInt("104"),
        NumberInt("133"),
        NumberInt("144"),
        NumberInt("70"),
        NumberInt("82")
    ],
    stepRateData: [
        NumberInt("111"),
        NumberInt("90"),
        NumberInt("94"),
        NumberInt("129"),
        NumberInt("114"),
        NumberInt("112"),
        NumberInt("126"),
        NumberInt("94"),
        NumberInt("120"),
        NumberInt("104")
    ],
    paceData: [
        5.8,
        5.4,
        5.1,
        5.9,
        5.4,
        5.5,
        5.3,
        5.6,
        5.8,
        5.6
    ],
    weekData: [
        NumberInt("89"),
        NumberInt("34"),
        NumberInt("84"),
        NumberInt("65"),
        NumberInt("48"),
        NumberInt("51"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("65"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("82"),
    currentStepRate: NumberInt("104"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("82"),
            timestamp: ISODate("2025-05-17T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-05-17T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-17T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-17T10:39:52.23Z"),
    updateTime: ISODate("2025-05-17T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e974"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-16T10:39:52.23Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("146"),
        NumberInt("98"),
        NumberInt("135"),
        NumberInt("157"),
        NumberInt("129"),
        NumberInt("115"),
        NumberInt("98"),
        NumberInt("122"),
        NumberInt("126"),
        NumberInt("137")
    ],
    stepRateData: [
        NumberInt("97"),
        NumberInt("102"),
        NumberInt("125"),
        NumberInt("118"),
        NumberInt("99"),
        NumberInt("120"),
        NumberInt("122"),
        NumberInt("96"),
        NumberInt("113"),
        NumberInt("103")
    ],
    paceData: [
        5.8,
        5,
        5,
        5.7,
        6,
        5.4,
        5,
        5.9,
        5.8,
        5.7
    ],
    weekData: [
        NumberInt("88"),
        NumberInt("68"),
        NumberInt("33"),
        NumberInt("89"),
        NumberInt("30"),
        NumberInt("69"),
        NumberInt("81")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("10"),
    currentHeartRate: NumberInt("137"),
    currentStepRate: NumberInt("103"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("137"),
            timestamp: ISODate("2025-05-16T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-05-16T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-16T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:39:52.23Z"),
    updateTime: ISODate("2025-05-16T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e975"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-15T10:39:52.23Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("77"),
        NumberInt("89"),
        NumberInt("136"),
        NumberInt("147"),
        NumberInt("81"),
        NumberInt("95"),
        NumberInt("122"),
        NumberInt("151"),
        NumberInt("119"),
        NumberInt("92")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("125"),
        NumberInt("106"),
        NumberInt("109"),
        NumberInt("90"),
        NumberInt("106"),
        NumberInt("128"),
        NumberInt("100"),
        NumberInt("90"),
        NumberInt("118")
    ],
    paceData: [
        6,
        5.7,
        5.1,
        5.2,
        5.9,
        5.2,
        5.1,
        5.9,
        5.2,
        5.5
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("53"),
        NumberInt("80"),
        NumberInt("46"),
        NumberInt("76"),
        NumberInt("64"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("92"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-05-15T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-05-15T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-15T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:39:52.23Z"),
    updateTime: ISODate("2025-05-15T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e976"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-14T10:39:52.23Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("128"),
        NumberInt("135"),
        NumberInt("145"),
        NumberInt("94"),
        NumberInt("155"),
        NumberInt("95"),
        NumberInt("107"),
        NumberInt("67"),
        NumberInt("132"),
        NumberInt("89")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("107"),
        NumberInt("98"),
        NumberInt("114"),
        NumberInt("91"),
        NumberInt("124"),
        NumberInt("126"),
        NumberInt("113"),
        NumberInt("120"),
        NumberInt("90")
    ],
    paceData: [
        5.6,
        5.7,
        5.6,
        5,
        5.1,
        5.4,
        5.8,
        5.3,
        5.6,
        5.3
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("73"),
        NumberInt("41"),
        NumberInt("47"),
        NumberInt("72"),
        NumberInt("68"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("61"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("89"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("89"),
            timestamp: ISODate("2025-05-14T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-14T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-14T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:39:52.23Z"),
    updateTime: ISODate("2025-05-14T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e977"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-13T10:39:52.23Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("119"),
        NumberInt("71"),
        NumberInt("129"),
        NumberInt("95"),
        NumberInt("115"),
        NumberInt("133"),
        NumberInt("76"),
        NumberInt("97"),
        NumberInt("69"),
        NumberInt("76")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("129"),
        NumberInt("124"),
        NumberInt("129"),
        NumberInt("112"),
        NumberInt("96"),
        NumberInt("102"),
        NumberInt("112"),
        NumberInt("103"),
        NumberInt("106")
    ],
    paceData: [
        5.4,
        5.8,
        5,
        5.7,
        5.7,
        5.8,
        5.2,
        5.1,
        5.4,
        5.1
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("90"),
        NumberInt("44"),
        NumberInt("40"),
        NumberInt("41"),
        NumberInt("34"),
        NumberInt("81")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("76"),
    currentStepRate: NumberInt("106"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("76"),
            timestamp: ISODate("2025-05-13T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-13T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-13T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:39:52.23Z"),
    updateTime: ISODate("2025-05-13T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e978"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-12T10:39:52.23Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("148"),
        NumberInt("97"),
        NumberInt("146"),
        NumberInt("99"),
        NumberInt("74"),
        NumberInt("146"),
        NumberInt("141"),
        NumberInt("91"),
        NumberInt("77"),
        NumberInt("116")
    ],
    stepRateData: [
        NumberInt("114"),
        NumberInt("129"),
        NumberInt("91"),
        NumberInt("107"),
        NumberInt("124"),
        NumberInt("106"),
        NumberInt("101"),
        NumberInt("115"),
        NumberInt("127"),
        NumberInt("91")
    ],
    paceData: [
        5.3,
        5.5,
        5.1,
        5.4,
        5.7,
        5.1,
        5.8,
        6,
        5.1,
        5.7
    ],
    weekData: [
        NumberInt("77"),
        NumberInt("75"),
        NumberInt("84"),
        NumberInt("33"),
        NumberInt("36"),
        NumberInt("84"),
        NumberInt("34")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("116"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-12T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-12T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-12T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:39:52.23Z"),
    updateTime: ISODate("2025-05-12T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e979"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-11T10:39:52.23Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("153"),
        NumberInt("153"),
        NumberInt("136"),
        NumberInt("91"),
        NumberInt("157"),
        NumberInt("152"),
        NumberInt("109"),
        NumberInt("70"),
        NumberInt("153"),
        NumberInt("101")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("130"),
        NumberInt("106"),
        NumberInt("95"),
        NumberInt("123"),
        NumberInt("123"),
        NumberInt("107"),
        NumberInt("126"),
        NumberInt("119"),
        NumberInt("99")
    ],
    paceData: [
        5.3,
        5.3,
        5.5,
        5.9,
        5.7,
        5.1,
        5.7,
        5.8,
        5.7,
        5.6
    ],
    weekData: [
        NumberInt("74"),
        NumberInt("62"),
        NumberInt("81"),
        NumberInt("75"),
        NumberInt("86"),
        NumberInt("84"),
        NumberInt("37")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("101"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-05-11T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-11T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-11T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:39:52.23Z"),
    updateTime: ISODate("2025-05-11T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e97a"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-10T10:39:52.23Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("81"),
        NumberInt("64"),
        NumberInt("88"),
        NumberInt("109"),
        NumberInt("95"),
        NumberInt("160"),
        NumberInt("90"),
        NumberInt("141"),
        NumberInt("65"),
        NumberInt("117")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("108"),
        NumberInt("130"),
        NumberInt("105"),
        NumberInt("112"),
        NumberInt("107"),
        NumberInt("97"),
        NumberInt("125"),
        NumberInt("110"),
        NumberInt("119")
    ],
    paceData: [
        5.3,
        5.3,
        5.8,
        5.5,
        5.3,
        5.6,
        5.2,
        5.4,
        5.9,
        6
    ],
    weekData: [
        NumberInt("55"),
        NumberInt("30"),
        NumberInt("57"),
        NumberInt("30"),
        NumberInt("56"),
        NumberInt("62"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("117"),
    currentStepRate: NumberInt("119"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-10T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-10T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-10T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:39:52.23Z"),
    updateTime: ISODate("2025-05-10T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e97b"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-09T10:39:52.23Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("141"),
        NumberInt("147"),
        NumberInt("72"),
        NumberInt("68"),
        NumberInt("141"),
        NumberInt("157"),
        NumberInt("109"),
        NumberInt("108"),
        NumberInt("138"),
        NumberInt("77")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("114"),
        NumberInt("129"),
        NumberInt("106"),
        NumberInt("124"),
        NumberInt("119"),
        NumberInt("121"),
        NumberInt("105"),
        NumberInt("111"),
        NumberInt("111")
    ],
    paceData: [
        5.6,
        6,
        5.9,
        5,
        5.4,
        5.4,
        5.3,
        5.5,
        5.5,
        5.4
    ],
    weekData: [
        NumberInt("79"),
        NumberInt("51"),
        NumberInt("41"),
        NumberInt("82"),
        NumberInt("82"),
        NumberInt("56"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("77"),
    currentStepRate: NumberInt("111"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("77"),
            timestamp: ISODate("2025-05-09T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("111"),
            timestamp: ISODate("2025-05-09T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-09T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:39:52.23Z"),
    updateTime: ISODate("2025-05-09T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e97c"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-08T10:39:52.23Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("100"),
        NumberInt("73"),
        NumberInt("141"),
        NumberInt("75"),
        NumberInt("136"),
        NumberInt("94"),
        NumberInt("118"),
        NumberInt("64"),
        NumberInt("112"),
        NumberInt("74")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("115"),
        NumberInt("116"),
        NumberInt("109"),
        NumberInt("97"),
        NumberInt("102"),
        NumberInt("98"),
        NumberInt("112"),
        NumberInt("104"),
        NumberInt("92")
    ],
    paceData: [
        5.3,
        5.1,
        5.8,
        5.3,
        5.8,
        5.2,
        5.9,
        5.2,
        5,
        5.2
    ],
    weekData: [
        NumberInt("39"),
        NumberInt("81"),
        NumberInt("65"),
        NumberInt("52"),
        NumberInt("52"),
        NumberInt("75"),
        NumberInt("34")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("74"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("74"),
            timestamp: ISODate("2025-05-08T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-05-08T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-08T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:39:52.23Z"),
    updateTime: ISODate("2025-05-08T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e97d"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-07T10:39:52.23Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("146"),
        NumberInt("151"),
        NumberInt("65"),
        NumberInt("143"),
        NumberInt("120"),
        NumberInt("70"),
        NumberInt("160"),
        NumberInt("103"),
        NumberInt("115"),
        NumberInt("149")
    ],
    stepRateData: [
        NumberInt("108"),
        NumberInt("123"),
        NumberInt("92"),
        NumberInt("114"),
        NumberInt("122"),
        NumberInt("108"),
        NumberInt("94"),
        NumberInt("96"),
        NumberInt("116"),
        NumberInt("101")
    ],
    paceData: [
        5.3,
        5,
        5.7,
        5.9,
        5.4,
        5.7,
        6,
        5.2,
        5.7,
        5.6
    ],
    weekData: [
        NumberInt("50"),
        NumberInt("73"),
        NumberInt("50"),
        NumberInt("78"),
        NumberInt("74"),
        NumberInt("71"),
        NumberInt("42")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("149"),
    currentStepRate: NumberInt("101"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("149"),
            timestamp: ISODate("2025-05-07T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-05-07T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-07T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:39:52.23Z"),
    updateTime: ISODate("2025-05-07T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e97e"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-06T10:39:52.23Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("130"),
        NumberInt("119"),
        NumberInt("111"),
        NumberInt("73"),
        NumberInt("137"),
        NumberInt("137"),
        NumberInt("62"),
        NumberInt("103"),
        NumberInt("138"),
        NumberInt("90")
    ],
    stepRateData: [
        NumberInt("116"),
        NumberInt("119"),
        NumberInt("124"),
        NumberInt("104"),
        NumberInt("99"),
        NumberInt("105"),
        NumberInt("128"),
        NumberInt("105"),
        NumberInt("118"),
        NumberInt("123")
    ],
    paceData: [
        5.5,
        5.9,
        5.4,
        5.4,
        5.8,
        5.3,
        5.3,
        5.3,
        5.9,
        5.2
    ],
    weekData: [
        NumberInt("66"),
        NumberInt("38"),
        NumberInt("90"),
        NumberInt("78"),
        NumberInt("89"),
        NumberInt("76"),
        NumberInt("48")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("63"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("90"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-06T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-06T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-06T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:39:52.23Z"),
    updateTime: ISODate("2025-05-06T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e97f"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-05T10:39:52.23Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("65"),
        NumberInt("133"),
        NumberInt("111"),
        NumberInt("81"),
        NumberInt("144"),
        NumberInt("62"),
        NumberInt("89"),
        NumberInt("102"),
        NumberInt("110"),
        NumberInt("158")
    ],
    stepRateData: [
        NumberInt("112"),
        NumberInt("92"),
        NumberInt("94"),
        NumberInt("100"),
        NumberInt("117"),
        NumberInt("97"),
        NumberInt("107"),
        NumberInt("99"),
        NumberInt("92"),
        NumberInt("106")
    ],
    paceData: [
        5.2,
        5.3,
        5.4,
        5.7,
        5.8,
        5.9,
        5.9,
        5.1,
        5.4,
        5.3
    ],
    weekData: [
        NumberInt("71"),
        NumberInt("36"),
        NumberInt("48"),
        NumberInt("89"),
        NumberInt("41"),
        NumberInt("39"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("158"),
    currentStepRate: NumberInt("106"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("158"),
            timestamp: ISODate("2025-05-05T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-05T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-05T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:39:52.23Z"),
    updateTime: ISODate("2025-05-05T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e980"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-04T10:39:52.23Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("104"),
        NumberInt("153"),
        NumberInt("108"),
        NumberInt("74"),
        NumberInt("130"),
        NumberInt("138"),
        NumberInt("71"),
        NumberInt("100"),
        NumberInt("88"),
        NumberInt("122")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("93"),
        NumberInt("130"),
        NumberInt("94"),
        NumberInt("106"),
        NumberInt("92"),
        NumberInt("101"),
        NumberInt("95"),
        NumberInt("95"),
        NumberInt("113")
    ],
    paceData: [
        5.6,
        5.8,
        5.5,
        5.1,
        5.6,
        5.8,
        5.2,
        5.7,
        5.2,
        5.7
    ],
    weekData: [
        NumberInt("62"),
        NumberInt("51"),
        NumberInt("85"),
        NumberInt("88"),
        NumberInt("56"),
        NumberInt("49"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("64"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("122"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-05-04T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-04T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-04T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:39:52.23Z"),
    updateTime: ISODate("2025-05-04T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e981"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-03T10:39:52.23Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("106"),
        NumberInt("107"),
        NumberInt("155"),
        NumberInt("82"),
        NumberInt("92"),
        NumberInt("76"),
        NumberInt("78"),
        NumberInt("158"),
        NumberInt("138"),
        NumberInt("117")
    ],
    stepRateData: [
        NumberInt("98"),
        NumberInt("91"),
        NumberInt("92"),
        NumberInt("117"),
        NumberInt("114"),
        NumberInt("125"),
        NumberInt("108"),
        NumberInt("100"),
        NumberInt("102"),
        NumberInt("93")
    ],
    paceData: [
        5.4,
        6,
        5.7,
        5.7,
        5.6,
        5.4,
        5.9,
        5.4,
        5.6,
        5.2
    ],
    weekData: [
        NumberInt("78"),
        NumberInt("90"),
        NumberInt("68"),
        NumberInt("54"),
        NumberInt("62"),
        NumberInt("48"),
        NumberInt("42")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("61"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("117"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-03T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-03T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-03T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:39:52.23Z"),
    updateTime: ISODate("2025-05-03T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e982"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-02T10:39:52.23Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("140"),
        NumberInt("148"),
        NumberInt("141"),
        NumberInt("143"),
        NumberInt("133"),
        NumberInt("116"),
        NumberInt("106"),
        NumberInt("67"),
        NumberInt("71"),
        NumberInt("72")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("110"),
        NumberInt("106"),
        NumberInt("121"),
        NumberInt("121"),
        NumberInt("100"),
        NumberInt("115"),
        NumberInt("106"),
        NumberInt("95"),
        NumberInt("110")
    ],
    paceData: [
        5.6,
        5.4,
        5.2,
        5.5,
        5.4,
        5.7,
        6,
        5.8,
        5.2,
        5.7
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("51"),
        NumberInt("57"),
        NumberInt("41"),
        NumberInt("54"),
        NumberInt("55"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("81"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("72"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("72"),
            timestamp: ISODate("2025-05-02T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-05-02T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-02T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:39:52.23Z"),
    updateTime: ISODate("2025-05-02T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e983"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-01T10:39:52.23Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("85"),
        NumberInt("152"),
        NumberInt("66"),
        NumberInt("155"),
        NumberInt("136"),
        NumberInt("158"),
        NumberInt("150"),
        NumberInt("152"),
        NumberInt("143"),
        NumberInt("74")
    ],
    stepRateData: [
        NumberInt("114"),
        NumberInt("101"),
        NumberInt("93"),
        NumberInt("101"),
        NumberInt("124"),
        NumberInt("100"),
        NumberInt("91"),
        NumberInt("117"),
        NumberInt("121"),
        NumberInt("93")
    ],
    paceData: [
        5.4,
        5.6,
        5.8,
        5.3,
        5.2,
        6,
        5.2,
        5.2,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("77"),
        NumberInt("55"),
        NumberInt("61"),
        NumberInt("36"),
        NumberInt("51"),
        NumberInt("78"),
        NumberInt("77")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("74"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("74"),
            timestamp: ISODate("2025-05-01T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-01T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-01T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:39:52.23Z"),
    updateTime: ISODate("2025-05-01T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e984"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-30T10:39:52.23Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("67"),
        NumberInt("86"),
        NumberInt("108"),
        NumberInt("127"),
        NumberInt("83"),
        NumberInt("114"),
        NumberInt("84"),
        NumberInt("64"),
        NumberInt("90"),
        NumberInt("90")
    ],
    stepRateData: [
        NumberInt("125"),
        NumberInt("113"),
        NumberInt("130"),
        NumberInt("95"),
        NumberInt("97"),
        NumberInt("91"),
        NumberInt("123"),
        NumberInt("92"),
        NumberInt("117"),
        NumberInt("95")
    ],
    paceData: [
        5.9,
        6,
        5.1,
        5.6,
        5.6,
        5.8,
        5.9,
        5.3,
        5.5,
        5.3
    ],
    weekData: [
        NumberInt("33"),
        NumberInt("73"),
        NumberInt("64"),
        NumberInt("90"),
        NumberInt("52"),
        NumberInt("34"),
        NumberInt("86")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("90"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-04-30T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-30T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-30T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:39:52.23Z"),
    updateTime: ISODate("2025-04-30T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e985"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-29T10:39:52.23Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("131"),
        NumberInt("74"),
        NumberInt("156"),
        NumberInt("145"),
        NumberInt("102"),
        NumberInt("64"),
        NumberInt("70"),
        NumberInt("142"),
        NumberInt("78"),
        NumberInt("117")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("114"),
        NumberInt("95"),
        NumberInt("117"),
        NumberInt("107"),
        NumberInt("114"),
        NumberInt("104"),
        NumberInt("100"),
        NumberInt("105"),
        NumberInt("107")
    ],
    paceData: [
        5.6,
        5.3,
        5.2,
        5.2,
        5.8,
        5.9,
        5.7,
        5.1,
        6,
        5.3
    ],
    weekData: [
        NumberInt("81"),
        NumberInt("64"),
        NumberInt("65"),
        NumberInt("61"),
        NumberInt("33"),
        NumberInt("88"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("117"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-04-29T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-29T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-29T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:39:52.23Z"),
    updateTime: ISODate("2025-04-29T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e986"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-28T10:39:52.23Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("86"),
        NumberInt("133"),
        NumberInt("70"),
        NumberInt("103"),
        NumberInt("68"),
        NumberInt("66"),
        NumberInt("91"),
        NumberInt("126"),
        NumberInt("70"),
        NumberInt("121")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("119"),
        NumberInt("118"),
        NumberInt("125"),
        NumberInt("91"),
        NumberInt("109"),
        NumberInt("119"),
        NumberInt("107"),
        NumberInt("106"),
        NumberInt("129")
    ],
    paceData: [
        6,
        5.7,
        5.2,
        5.7,
        5.2,
        5.4,
        5.2,
        6,
        5.9,
        5.3
    ],
    weekData: [
        NumberInt("47"),
        NumberInt("87"),
        NumberInt("71"),
        NumberInt("70"),
        NumberInt("84"),
        NumberInt("38"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("121"),
    currentStepRate: NumberInt("129"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-04-28T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-04-28T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-28T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:39:52.23Z"),
    updateTime: ISODate("2025-04-28T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e987"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-27T10:39:52.23Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("110"),
        NumberInt("94"),
        NumberInt("60"),
        NumberInt("66"),
        NumberInt("79"),
        NumberInt("101"),
        NumberInt("83"),
        NumberInt("105"),
        NumberInt("117"),
        NumberInt("156")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("112"),
        NumberInt("124"),
        NumberInt("102"),
        NumberInt("113"),
        NumberInt("91"),
        NumberInt("128"),
        NumberInt("128"),
        NumberInt("94"),
        NumberInt("121")
    ],
    paceData: [
        5.1,
        5.9,
        5.6,
        5.6,
        5.9,
        5.7,
        5.8,
        5.4,
        5.2,
        6
    ],
    weekData: [
        NumberInt("86"),
        NumberInt("52"),
        NumberInt("52"),
        NumberInt("89"),
        NumberInt("74"),
        NumberInt("59"),
        NumberInt("49")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("156"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("156"),
            timestamp: ISODate("2025-04-27T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-04-27T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-27T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-04-27T10:39:52.23Z"),
    updateTime: ISODate("2025-04-27T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e988"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-26T10:39:52.23Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("88"),
        NumberInt("71"),
        NumberInt("90"),
        NumberInt("93"),
        NumberInt("132"),
        NumberInt("80"),
        NumberInt("128"),
        NumberInt("135"),
        NumberInt("72"),
        NumberInt("124")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("106"),
        NumberInt("121"),
        NumberInt("103"),
        NumberInt("102"),
        NumberInt("123"),
        NumberInt("101"),
        NumberInt("120"),
        NumberInt("90"),
        NumberInt("118")
    ],
    paceData: [
        5.7,
        5.4,
        5.5,
        6,
        5.1,
        5.3,
        5.7,
        5.9,
        6,
        5.5
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("45"),
        NumberInt("34"),
        NumberInt("40"),
        NumberInt("89"),
        NumberInt("49"),
        NumberInt("82")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("124"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-04-26T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-04-26T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-26T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:39:52.23Z"),
    updateTime: ISODate("2025-04-26T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e989"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-25T10:39:52.23Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("130"),
        NumberInt("157"),
        NumberInt("146"),
        NumberInt("119"),
        NumberInt("101"),
        NumberInt("81"),
        NumberInt("114"),
        NumberInt("100"),
        NumberInt("101"),
        NumberInt("138")
    ],
    stepRateData: [
        NumberInt("97"),
        NumberInt("127"),
        NumberInt("104"),
        NumberInt("101"),
        NumberInt("112"),
        NumberInt("94"),
        NumberInt("104"),
        NumberInt("106"),
        NumberInt("104"),
        NumberInt("100")
    ],
    paceData: [
        5.3,
        5.8,
        5.6,
        5.7,
        5.7,
        5.6,
        5.1,
        5.7,
        5.9,
        5.1
    ],
    weekData: [
        NumberInt("88"),
        NumberInt("37"),
        NumberInt("78"),
        NumberInt("81"),
        NumberInt("67"),
        NumberInt("45"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("93"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("138"),
    currentStepRate: NumberInt("100"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("138"),
            timestamp: ISODate("2025-04-25T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-25T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-25T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:39:52.23Z"),
    updateTime: ISODate("2025-04-25T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e98a"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-23T10:39:52.23Z"),
    date: "2025-04-23",
    heartRateData: [
        NumberInt("62"),
        NumberInt("125"),
        NumberInt("124"),
        NumberInt("138"),
        NumberInt("125"),
        NumberInt("77"),
        NumberInt("110"),
        NumberInt("73"),
        NumberInt("155"),
        NumberInt("89")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("130"),
        NumberInt("99"),
        NumberInt("123"),
        NumberInt("130"),
        NumberInt("112"),
        NumberInt("120"),
        NumberInt("128"),
        NumberInt("105"),
        NumberInt("127")
    ],
    paceData: [
        5.5,
        5.8,
        5.9,
        5.2,
        5.8,
        5.8,
        5.5,
        5.3,
        6,
        5.9
    ],
    weekData: [
        NumberInt("78"),
        NumberInt("46"),
        NumberInt("88"),
        NumberInt("84"),
        NumberInt("51"),
        NumberInt("61"),
        NumberInt("33")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("89"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("89"),
            timestamp: ISODate("2025-04-23T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-04-23T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-23T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-04-23T10:39:52.23Z"),
    updateTime: ISODate("2025-04-23T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e98b"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-22T10:39:52.23Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("142"),
        NumberInt("111"),
        NumberInt("91"),
        NumberInt("95"),
        NumberInt("97"),
        NumberInt("139"),
        NumberInt("118"),
        NumberInt("100"),
        NumberInt("118"),
        NumberInt("137")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("127"),
        NumberInt("94"),
        NumberInt("128"),
        NumberInt("130"),
        NumberInt("115"),
        NumberInt("121"),
        NumberInt("126"),
        NumberInt("124"),
        NumberInt("106")
    ],
    paceData: [
        5.7,
        5,
        5.7,
        5.3,
        6,
        5.1,
        5.3,
        5.7,
        5.9,
        5.1
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("30"),
        NumberInt("76"),
        NumberInt("52"),
        NumberInt("69"),
        NumberInt("30"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("137"),
    currentStepRate: NumberInt("106"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("137"),
            timestamp: ISODate("2025-04-22T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-04-22T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-22T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:39:52.23Z"),
    updateTime: ISODate("2025-04-22T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e98c"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-21T10:39:52.23Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("123"),
        NumberInt("90"),
        NumberInt("68"),
        NumberInt("96"),
        NumberInt("87"),
        NumberInt("158"),
        NumberInt("70"),
        NumberInt("145"),
        NumberInt("65"),
        NumberInt("101")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("119"),
        NumberInt("103"),
        NumberInt("124"),
        NumberInt("129"),
        NumberInt("104"),
        NumberInt("123"),
        NumberInt("118"),
        NumberInt("91"),
        NumberInt("102")
    ],
    paceData: [
        5.8,
        5.7,
        5.6,
        6,
        5.2,
        5.7,
        5.2,
        5.6,
        5.1,
        5.1
    ],
    weekData: [
        NumberInt("49"),
        NumberInt("84"),
        NumberInt("40"),
        NumberInt("42"),
        NumberInt("87"),
        NumberInt("46"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("101"),
    currentStepRate: NumberInt("102"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-04-21T10:39:52.23Z")
        },
        {
            type: "stepRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-04-21T10:39:52.23Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-21T10:39:52.23Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:39:52.23Z"),
    updateTime: ISODate("2025-04-21T10:39:52.23Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e98d"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-20T10:39:52.231Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("137"),
        NumberInt("106"),
        NumberInt("64"),
        NumberInt("104"),
        NumberInt("158"),
        NumberInt("105"),
        NumberInt("62"),
        NumberInt("89"),
        NumberInt("143"),
        NumberInt("91")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("118"),
        NumberInt("108"),
        NumberInt("128"),
        NumberInt("125"),
        NumberInt("113"),
        NumberInt("113"),
        NumberInt("102"),
        NumberInt("110"),
        NumberInt("117")
    ],
    paceData: [
        5.4,
        5.2,
        5.4,
        5.4,
        5.1,
        5.9,
        5.7,
        5.1,
        5.1,
        5.8
    ],
    weekData: [
        NumberInt("87"),
        NumberInt("73"),
        NumberInt("87"),
        NumberInt("64"),
        NumberInt("61"),
        NumberInt("58"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("91"),
    currentStepRate: NumberInt("117"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-20T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-20T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-20T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-20T10:39:52.231Z"),
    updateTime: ISODate("2025-05-20T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e98e"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-19T10:39:52.231Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("104"),
        NumberInt("152"),
        NumberInt("160"),
        NumberInt("75"),
        NumberInt("140"),
        NumberInt("83"),
        NumberInt("83"),
        NumberInt("144"),
        NumberInt("127"),
        NumberInt("146")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("116"),
        NumberInt("128"),
        NumberInt("103"),
        NumberInt("124"),
        NumberInt("103"),
        NumberInt("95"),
        NumberInt("94"),
        NumberInt("128"),
        NumberInt("108")
    ],
    paceData: [
        5.9,
        5.3,
        5,
        6,
        5.4,
        5.1,
        5.6,
        5.6,
        5.2,
        5
    ],
    weekData: [
        NumberInt("83"),
        NumberInt("86"),
        NumberInt("43"),
        NumberInt("47"),
        NumberInt("77"),
        NumberInt("49"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("146"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("146"),
            timestamp: ISODate("2025-05-19T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-19T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-19T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:39:52.231Z"),
    updateTime: ISODate("2025-05-19T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e98f"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-18T10:39:52.231Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("139"),
        NumberInt("141"),
        NumberInt("63"),
        NumberInt("114"),
        NumberInt("74"),
        NumberInt("79"),
        NumberInt("155"),
        NumberInt("115"),
        NumberInt("157"),
        NumberInt("118")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("101"),
        NumberInt("120"),
        NumberInt("111"),
        NumberInt("92"),
        NumberInt("91"),
        NumberInt("120"),
        NumberInt("128"),
        NumberInt("129"),
        NumberInt("107")
    ],
    paceData: [
        5.7,
        5,
        5.1,
        5,
        5.3,
        5.2,
        5.4,
        5.7,
        5.8,
        5.4
    ],
    weekData: [
        NumberInt("39"),
        NumberInt("90"),
        NumberInt("86"),
        NumberInt("76"),
        NumberInt("40"),
        NumberInt("63"),
        NumberInt("82")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("118"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-05-18T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-18T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-18T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-18T10:39:52.231Z"),
    updateTime: ISODate("2025-05-18T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e990"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-16T10:39:52.231Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("95"),
        NumberInt("103"),
        NumberInt("86"),
        NumberInt("97"),
        NumberInt("121"),
        NumberInt("134"),
        NumberInt("114"),
        NumberInt("79"),
        NumberInt("105"),
        NumberInt("74")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("126"),
        NumberInt("118"),
        NumberInt("112"),
        NumberInt("111"),
        NumberInt("123"),
        NumberInt("90"),
        NumberInt("100"),
        NumberInt("90"),
        NumberInt("126")
    ],
    paceData: [
        5.5,
        5.6,
        5.4,
        5.7,
        5.8,
        5.4,
        5.5,
        5.4,
        5.5,
        5.9
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("56"),
        NumberInt("65"),
        NumberInt("82"),
        NumberInt("63"),
        NumberInt("75"),
        NumberInt("43")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("74"),
    currentStepRate: NumberInt("126"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("74"),
            timestamp: ISODate("2025-05-16T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("126"),
            timestamp: ISODate("2025-05-16T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-16T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:39:52.231Z"),
    updateTime: ISODate("2025-05-16T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e991"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-15T10:39:52.231Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("70"),
        NumberInt("118"),
        NumberInt("140"),
        NumberInt("85"),
        NumberInt("64"),
        NumberInt("61"),
        NumberInt("71"),
        NumberInt("160"),
        NumberInt("158"),
        NumberInt("159")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("120"),
        NumberInt("116"),
        NumberInt("118"),
        NumberInt("105"),
        NumberInt("105"),
        NumberInt("115"),
        NumberInt("103"),
        NumberInt("120"),
        NumberInt("105")
    ],
    paceData: [
        5.8,
        5.9,
        5.8,
        5.8,
        5.7,
        5.2,
        5.4,
        5.5,
        5.3,
        5.5
    ],
    weekData: [
        NumberInt("49"),
        NumberInt("66"),
        NumberInt("86"),
        NumberInt("63"),
        NumberInt("46"),
        NumberInt("58"),
        NumberInt("62")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("159"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("159"),
            timestamp: ISODate("2025-05-15T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-05-15T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-15T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:39:52.231Z"),
    updateTime: ISODate("2025-05-15T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e992"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-14T10:39:52.231Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("152"),
        NumberInt("144"),
        NumberInt("111"),
        NumberInt("66"),
        NumberInt("142"),
        NumberInt("80"),
        NumberInt("156"),
        NumberInt("140"),
        NumberInt("127"),
        NumberInt("69")
    ],
    stepRateData: [
        NumberInt("118"),
        NumberInt("95"),
        NumberInt("97"),
        NumberInt("127"),
        NumberInt("112"),
        NumberInt("115"),
        NumberInt("109"),
        NumberInt("109"),
        NumberInt("123"),
        NumberInt("105")
    ],
    paceData: [
        5.4,
        5.7,
        5.8,
        5.8,
        5.7,
        5.6,
        5.4,
        5.1,
        5.5,
        5.7
    ],
    weekData: [
        NumberInt("57"),
        NumberInt("77"),
        NumberInt("75"),
        NumberInt("63"),
        NumberInt("89"),
        NumberInt("44"),
        NumberInt("83")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("69"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("69"),
            timestamp: ISODate("2025-05-14T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-05-14T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-14T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:39:52.231Z"),
    updateTime: ISODate("2025-05-14T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e993"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-13T10:39:52.231Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("75"),
        NumberInt("127"),
        NumberInt("81"),
        NumberInt("68"),
        NumberInt("84"),
        NumberInt("125"),
        NumberInt("67"),
        NumberInt("108"),
        NumberInt("67"),
        NumberInt("160")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("127"),
        NumberInt("108"),
        NumberInt("96"),
        NumberInt("104"),
        NumberInt("122"),
        NumberInt("100"),
        NumberInt("106"),
        NumberInt("93"),
        NumberInt("97")
    ],
    paceData: [
        5.3,
        6,
        5.3,
        5.9,
        5.5,
        5.3,
        5.1,
        5.4,
        5.1,
        5.5
    ],
    weekData: [
        NumberInt("64"),
        NumberInt("74"),
        NumberInt("41"),
        NumberInt("81"),
        NumberInt("80"),
        NumberInt("71"),
        NumberInt("32")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("160"),
    currentStepRate: NumberInt("97"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("160"),
            timestamp: ISODate("2025-05-13T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-13T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-13T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:39:52.231Z"),
    updateTime: ISODate("2025-05-13T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e994"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-12T10:39:52.231Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("85"),
        NumberInt("145"),
        NumberInt("102"),
        NumberInt("105"),
        NumberInt("105"),
        NumberInt("157"),
        NumberInt("155"),
        NumberInt("158"),
        NumberInt("65"),
        NumberInt("70")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("113"),
        NumberInt("95"),
        NumberInt("128"),
        NumberInt("106"),
        NumberInt("110"),
        NumberInt("112"),
        NumberInt("115"),
        NumberInt("116"),
        NumberInt("116")
    ],
    paceData: [
        5.5,
        5.3,
        5.7,
        5.1,
        5.5,
        5.3,
        5.9,
        5.2,
        5.4,
        5.9
    ],
    weekData: [
        NumberInt("73"),
        NumberInt("45"),
        NumberInt("41"),
        NumberInt("38"),
        NumberInt("62"),
        NumberInt("44"),
        NumberInt("85")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("90"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("70"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("70"),
            timestamp: ISODate("2025-05-12T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-12T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-12T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:39:52.231Z"),
    updateTime: ISODate("2025-05-12T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e995"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-11T10:39:52.231Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("123"),
        NumberInt("159"),
        NumberInt("127"),
        NumberInt("146"),
        NumberInt("134"),
        NumberInt("89"),
        NumberInt("125"),
        NumberInt("70"),
        NumberInt("113"),
        NumberInt("84")
    ],
    stepRateData: [
        NumberInt("112"),
        NumberInt("102"),
        NumberInt("114"),
        NumberInt("117"),
        NumberInt("121"),
        NumberInt("106"),
        NumberInt("111"),
        NumberInt("128"),
        NumberInt("106"),
        NumberInt("129")
    ],
    paceData: [
        5.6,
        5.3,
        5.1,
        5,
        5.7,
        5.9,
        5.9,
        5.4,
        5.1,
        5.9
    ],
    weekData: [
        NumberInt("86"),
        NumberInt("86"),
        NumberInt("70"),
        NumberInt("69"),
        NumberInt("88"),
        NumberInt("36"),
        NumberInt("34")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("10"),
    currentHeartRate: NumberInt("84"),
    currentStepRate: NumberInt("129"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("84"),
            timestamp: ISODate("2025-05-11T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-05-11T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-11T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:39:52.231Z"),
    updateTime: ISODate("2025-05-11T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e996"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-10T10:39:52.231Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("114"),
        NumberInt("117"),
        NumberInt("73"),
        NumberInt("60"),
        NumberInt("67"),
        NumberInt("67"),
        NumberInt("140"),
        NumberInt("63"),
        NumberInt("78"),
        NumberInt("133")
    ],
    stepRateData: [
        NumberInt("91"),
        NumberInt("101"),
        NumberInt("97"),
        NumberInt("126"),
        NumberInt("118"),
        NumberInt("126"),
        NumberInt("129"),
        NumberInt("130"),
        NumberInt("127"),
        NumberInt("127")
    ],
    paceData: [
        5.7,
        5.4,
        5.7,
        5.8,
        5.9,
        5.1,
        5.4,
        5.2,
        5.1,
        5.1
    ],
    weekData: [
        NumberInt("47"),
        NumberInt("40"),
        NumberInt("53"),
        NumberInt("34"),
        NumberInt("69"),
        NumberInt("56"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("133"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("133"),
            timestamp: ISODate("2025-05-10T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-10T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-10T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:39:52.231Z"),
    updateTime: ISODate("2025-05-10T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e997"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-09T10:39:52.231Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("160"),
        NumberInt("97"),
        NumberInt("64"),
        NumberInt("155"),
        NumberInt("87"),
        NumberInt("60"),
        NumberInt("154"),
        NumberInt("132"),
        NumberInt("131"),
        NumberInt("99")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("90"),
        NumberInt("110"),
        NumberInt("108"),
        NumberInt("120"),
        NumberInt("113"),
        NumberInt("127"),
        NumberInt("110"),
        NumberInt("124"),
        NumberInt("101")
    ],
    paceData: [
        6,
        6,
        5.9,
        6,
        5.8,
        5.4,
        5.6,
        5.8,
        5.9,
        5.7
    ],
    weekData: [
        NumberInt("86"),
        NumberInt("87"),
        NumberInt("85"),
        NumberInt("88"),
        NumberInt("83"),
        NumberInt("76"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("99"),
    currentStepRate: NumberInt("101"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-09T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-05-09T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-09T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:39:52.231Z"),
    updateTime: ISODate("2025-05-09T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e998"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-08T10:39:52.231Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("110"),
        NumberInt("131"),
        NumberInt("114"),
        NumberInt("85"),
        NumberInt("95"),
        NumberInt("145"),
        NumberInt("102"),
        NumberInt("148"),
        NumberInt("114"),
        NumberInt("82")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("123"),
        NumberInt("102"),
        NumberInt("130"),
        NumberInt("102"),
        NumberInt("101"),
        NumberInt("107"),
        NumberInt("115"),
        NumberInt("119"),
        NumberInt("106")
    ],
    paceData: [
        6,
        5.8,
        5.3,
        5.8,
        5.9,
        5.2,
        5,
        5.7,
        5.5,
        5.9
    ],
    weekData: [
        NumberInt("40"),
        NumberInt("54"),
        NumberInt("61"),
        NumberInt("89"),
        NumberInt("30"),
        NumberInt("32"),
        NumberInt("87")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("82"),
    currentStepRate: NumberInt("106"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("82"),
            timestamp: ISODate("2025-05-08T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-08T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-08T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:39:52.231Z"),
    updateTime: ISODate("2025-05-08T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e999"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-07T10:39:52.231Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("129"),
        NumberInt("117"),
        NumberInt("71"),
        NumberInt("73"),
        NumberInt("144"),
        NumberInt("117"),
        NumberInt("73"),
        NumberInt("121"),
        NumberInt("88"),
        NumberInt("79")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("112"),
        NumberInt("120"),
        NumberInt("104"),
        NumberInt("129"),
        NumberInt("114"),
        NumberInt("92"),
        NumberInt("119"),
        NumberInt("103"),
        NumberInt("115")
    ],
    paceData: [
        5.3,
        5.3,
        5.5,
        5.8,
        5.2,
        5.4,
        5.7,
        5.4,
        5.9,
        5.7
    ],
    weekData: [
        NumberInt("57"),
        NumberInt("88"),
        NumberInt("73"),
        NumberInt("42"),
        NumberInt("38"),
        NumberInt("45"),
        NumberInt("75")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("79"),
    currentStepRate: NumberInt("115"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("79"),
            timestamp: ISODate("2025-05-07T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-05-07T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-07T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:39:52.231Z"),
    updateTime: ISODate("2025-05-07T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e99a"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-06T10:39:52.231Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("156"),
        NumberInt("90"),
        NumberInt("134"),
        NumberInt("159"),
        NumberInt("95"),
        NumberInt("127"),
        NumberInt("143"),
        NumberInt("121"),
        NumberInt("62"),
        NumberInt("78")
    ],
    stepRateData: [
        NumberInt("107"),
        NumberInt("114"),
        NumberInt("113"),
        NumberInt("121"),
        NumberInt("120"),
        NumberInt("98"),
        NumberInt("102"),
        NumberInt("119"),
        NumberInt("100"),
        NumberInt("124")
    ],
    paceData: [
        5.7,
        5.1,
        5.1,
        6,
        5.8,
        5.2,
        5.4,
        5.5,
        5.3,
        5.7
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("81"),
        NumberInt("71"),
        NumberInt("47"),
        NumberInt("69"),
        NumberInt("63"),
        NumberInt("87")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("78"),
    currentStepRate: NumberInt("124"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("78"),
            timestamp: ISODate("2025-05-06T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-06T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-06T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:39:52.231Z"),
    updateTime: ISODate("2025-05-06T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e99b"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-04T10:39:52.231Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("77"),
        NumberInt("107"),
        NumberInt("71"),
        NumberInt("124"),
        NumberInt("140"),
        NumberInt("99"),
        NumberInt("65"),
        NumberInt("143"),
        NumberInt("152"),
        NumberInt("129")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("101"),
        NumberInt("115"),
        NumberInt("115"),
        NumberInt("94"),
        NumberInt("94"),
        NumberInt("105"),
        NumberInt("97"),
        NumberInt("125"),
        NumberInt("117")
    ],
    paceData: [
        5.3,
        5.2,
        5.5,
        5.6,
        5.6,
        5.6,
        5.7,
        5.8,
        5.6,
        6
    ],
    weekData: [
        NumberInt("78"),
        NumberInt("49"),
        NumberInt("40"),
        NumberInt("72"),
        NumberInt("59"),
        NumberInt("76"),
        NumberInt("42")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("129"),
    currentStepRate: NumberInt("117"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-05-04T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-04T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-04T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:39:52.231Z"),
    updateTime: ISODate("2025-05-04T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e99c"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-03T10:39:52.231Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("136"),
        NumberInt("114"),
        NumberInt("152"),
        NumberInt("123"),
        NumberInt("95"),
        NumberInt("135"),
        NumberInt("127"),
        NumberInt("121"),
        NumberInt("123"),
        NumberInt("79")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("90"),
        NumberInt("122"),
        NumberInt("110"),
        NumberInt("91"),
        NumberInt("106"),
        NumberInt("126"),
        NumberInt("100"),
        NumberInt("99"),
        NumberInt("94")
    ],
    paceData: [
        5.6,
        5.1,
        6,
        5.1,
        5.5,
        5.3,
        5.7,
        5.1,
        5.7,
        5.8
    ],
    weekData: [
        NumberInt("88"),
        NumberInt("75"),
        NumberInt("65"),
        NumberInt("47"),
        NumberInt("65"),
        NumberInt("70"),
        NumberInt("79")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("79"),
    currentStepRate: NumberInt("94"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("79"),
            timestamp: ISODate("2025-05-03T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-05-03T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-03T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:39:52.231Z"),
    updateTime: ISODate("2025-05-03T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e99d"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-02T10:39:52.231Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("134"),
        NumberInt("91"),
        NumberInt("120"),
        NumberInt("135"),
        NumberInt("114"),
        NumberInt("91"),
        NumberInt("107"),
        NumberInt("66"),
        NumberInt("83"),
        NumberInt("87")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("117"),
        NumberInt("122"),
        NumberInt("120"),
        NumberInt("104"),
        NumberInt("101"),
        NumberInt("119"),
        NumberInt("110"),
        NumberInt("90"),
        NumberInt("114")
    ],
    paceData: [
        5.9,
        5.1,
        5.3,
        5.5,
        5.3,
        5.7,
        5.6,
        5.6,
        5.6,
        5.5
    ],
    weekData: [
        NumberInt("34"),
        NumberInt("61"),
        NumberInt("76"),
        NumberInt("68"),
        NumberInt("70"),
        NumberInt("70"),
        NumberInt("38")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("87"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("87"),
            timestamp: ISODate("2025-05-02T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-02T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-02T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:39:52.231Z"),
    updateTime: ISODate("2025-05-02T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e99e"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-30T10:39:52.231Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("119"),
        NumberInt("106"),
        NumberInt("149"),
        NumberInt("124"),
        NumberInt("159"),
        NumberInt("145"),
        NumberInt("67"),
        NumberInt("84"),
        NumberInt("110"),
        NumberInt("99")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("112"),
        NumberInt("93"),
        NumberInt("116"),
        NumberInt("118"),
        NumberInt("94"),
        NumberInt("95"),
        NumberInt("95"),
        NumberInt("116"),
        NumberInt("130")
    ],
    paceData: [
        5.5,
        5.2,
        5.2,
        5.2,
        5,
        5.2,
        5.1,
        5.6,
        5.2,
        5.7
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("53"),
        NumberInt("68"),
        NumberInt("61"),
        NumberInt("75"),
        NumberInt("86"),
        NumberInt("81")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("99"),
    currentStepRate: NumberInt("130"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-30T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("130"),
            timestamp: ISODate("2025-04-30T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-30T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:39:52.231Z"),
    updateTime: ISODate("2025-04-30T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e99f"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-28T10:39:52.231Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("138"),
        NumberInt("100"),
        NumberInt("114"),
        NumberInt("154"),
        NumberInt("142"),
        NumberInt("119"),
        NumberInt("91"),
        NumberInt("75"),
        NumberInt("61"),
        NumberInt("62")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("125"),
        NumberInt("112"),
        NumberInt("126"),
        NumberInt("91"),
        NumberInt("123"),
        NumberInt("129"),
        NumberInt("98"),
        NumberInt("114"),
        NumberInt("94")
    ],
    paceData: [
        5.1,
        5.8,
        5.7,
        5,
        5.8,
        5.2,
        5.8,
        5.2,
        5.1,
        5.1
    ],
    weekData: [
        NumberInt("31"),
        NumberInt("33"),
        NumberInt("74"),
        NumberInt("67"),
        NumberInt("80"),
        NumberInt("85"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("81"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("62"),
    currentStepRate: NumberInt("94"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("62"),
            timestamp: ISODate("2025-04-28T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-04-28T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-28T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:39:52.231Z"),
    updateTime: ISODate("2025-04-28T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9a0"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-27T10:39:52.231Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("153"),
        NumberInt("148"),
        NumberInt("158"),
        NumberInt("138"),
        NumberInt("100"),
        NumberInt("95"),
        NumberInt("144"),
        NumberInt("121"),
        NumberInt("95"),
        NumberInt("87")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("112"),
        NumberInt("124"),
        NumberInt("114"),
        NumberInt("110"),
        NumberInt("94"),
        NumberInt("100"),
        NumberInt("114"),
        NumberInt("101"),
        NumberInt("117")
    ],
    paceData: [
        5.7,
        6,
        5.2,
        5.1,
        5.2,
        5.2,
        5.8,
        5.6,
        5.5,
        5.8
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("86"),
        NumberInt("35"),
        NumberInt("68"),
        NumberInt("38"),
        NumberInt("82"),
        NumberInt("43")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("87"),
    currentStepRate: NumberInt("117"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("87"),
            timestamp: ISODate("2025-04-27T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-04-27T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-27T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-27T10:39:52.231Z"),
    updateTime: ISODate("2025-04-27T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9a1"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-26T10:39:52.231Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("134"),
        NumberInt("85"),
        NumberInt("156"),
        NumberInt("145"),
        NumberInt("80"),
        NumberInt("129"),
        NumberInt("81"),
        NumberInt("93"),
        NumberInt("64"),
        NumberInt("72")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("126"),
        NumberInt("103"),
        NumberInt("93"),
        NumberInt("106"),
        NumberInt("111"),
        NumberInt("107"),
        NumberInt("118"),
        NumberInt("103"),
        NumberInt("105")
    ],
    paceData: [
        5.8,
        5.8,
        5.7,
        5.4,
        5,
        5.8,
        5.9,
        5.4,
        5.6,
        5.5
    ],
    weekData: [
        NumberInt("30"),
        NumberInt("41"),
        NumberInt("79"),
        NumberInt("61"),
        NumberInt("40"),
        NumberInt("68"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("86"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("72"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("72"),
            timestamp: ISODate("2025-04-26T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-04-26T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-26T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:39:52.231Z"),
    updateTime: ISODate("2025-04-26T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9a2"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-25T10:39:52.231Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("66"),
        NumberInt("74"),
        NumberInt("141"),
        NumberInt("63"),
        NumberInt("132"),
        NumberInt("140"),
        NumberInt("95"),
        NumberInt("93"),
        NumberInt("154"),
        NumberInt("68")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("121"),
        NumberInt("106"),
        NumberInt("130"),
        NumberInt("99"),
        NumberInt("101"),
        NumberInt("90"),
        NumberInt("126"),
        NumberInt("99"),
        NumberInt("99")
    ],
    paceData: [
        5.2,
        5.5,
        5.6,
        5.4,
        5.4,
        5.4,
        5.5,
        5.9,
        5.5,
        5.9
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("32"),
        NumberInt("63"),
        NumberInt("86"),
        NumberInt("30"),
        NumberInt("77"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("68"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("68"),
            timestamp: ISODate("2025-04-25T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-25T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-25T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:39:52.231Z"),
    updateTime: ISODate("2025-04-25T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9a3"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-24T10:39:52.231Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("98"),
        NumberInt("92"),
        NumberInt("63"),
        NumberInt("64"),
        NumberInt("127"),
        NumberInt("146"),
        NumberInt("129"),
        NumberInt("115"),
        NumberInt("80"),
        NumberInt("111")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("115"),
        NumberInt("96"),
        NumberInt("98"),
        NumberInt("122"),
        NumberInt("90"),
        NumberInt("91"),
        NumberInt("116"),
        NumberInt("127"),
        NumberInt("91")
    ],
    paceData: [
        5.2,
        5.5,
        5.8,
        5.4,
        5.4,
        5.4,
        5.8,
        6,
        5.4,
        5.7
    ],
    weekData: [
        NumberInt("51"),
        NumberInt("34"),
        NumberInt("61"),
        NumberInt("46"),
        NumberInt("53"),
        NumberInt("82"),
        NumberInt("46")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("111"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("111"),
            timestamp: ISODate("2025-04-24T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-04-24T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-24T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:39:52.231Z"),
    updateTime: ISODate("2025-04-24T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9a4"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-22T10:39:52.231Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("150"),
        NumberInt("101"),
        NumberInt("110"),
        NumberInt("100"),
        NumberInt("134"),
        NumberInt("63"),
        NumberInt("133"),
        NumberInt("145"),
        NumberInt("99"),
        NumberInt("127")
    ],
    stepRateData: [
        NumberInt("125"),
        NumberInt("127"),
        NumberInt("106"),
        NumberInt("94"),
        NumberInt("93"),
        NumberInt("102"),
        NumberInt("113"),
        NumberInt("117"),
        NumberInt("103"),
        NumberInt("109")
    ],
    paceData: [
        5.7,
        6,
        5.6,
        5.6,
        5.1,
        5.8,
        5.8,
        5.4,
        6,
        5.7
    ],
    weekData: [
        NumberInt("39"),
        NumberInt("70"),
        NumberInt("30"),
        NumberInt("74"),
        NumberInt("47"),
        NumberInt("71"),
        NumberInt("75")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("63"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("127"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-04-22T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-04-22T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-22T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:39:52.231Z"),
    updateTime: ISODate("2025-04-22T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9a5"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-20T10:39:52.231Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("108"),
        NumberInt("67"),
        NumberInt("105"),
        NumberInt("148"),
        NumberInt("73"),
        NumberInt("91"),
        NumberInt("68"),
        NumberInt("137"),
        NumberInt("80"),
        NumberInt("111")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("113"),
        NumberInt("127"),
        NumberInt("104"),
        NumberInt("116"),
        NumberInt("129"),
        NumberInt("97"),
        NumberInt("128"),
        NumberInt("112"),
        NumberInt("125")
    ],
    paceData: [
        5.4,
        5.8,
        5.3,
        5.1,
        5.9,
        5,
        5.7,
        5,
        5.4,
        5.5
    ],
    weekData: [
        NumberInt("43"),
        NumberInt("61"),
        NumberInt("80"),
        NumberInt("33"),
        NumberInt("47"),
        NumberInt("72"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("111"),
    currentStepRate: NumberInt("125"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("111"),
            timestamp: ISODate("2025-05-20T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-05-20T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-20T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-20T10:39:52.231Z"),
    updateTime: ISODate("2025-05-20T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9a6"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-19T10:39:52.231Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("130"),
        NumberInt("104"),
        NumberInt("129"),
        NumberInt("125"),
        NumberInt("101"),
        NumberInt("138"),
        NumberInt("98"),
        NumberInt("135"),
        NumberInt("94"),
        NumberInt("145")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("111"),
        NumberInt("90"),
        NumberInt("126"),
        NumberInt("101"),
        NumberInt("92"),
        NumberInt("110"),
        NumberInt("112"),
        NumberInt("102"),
        NumberInt("91")
    ],
    paceData: [
        5.7,
        5.8,
        5.5,
        5.4,
        5.1,
        6,
        5.6,
        5.7,
        5,
        5.6
    ],
    weekData: [
        NumberInt("55"),
        NumberInt("78"),
        NumberInt("68"),
        NumberInt("75"),
        NumberInt("88"),
        NumberInt("77"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("65"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("145"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("145"),
            timestamp: ISODate("2025-05-19T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-19T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-19T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:39:52.231Z"),
    updateTime: ISODate("2025-05-19T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9a7"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-18T10:39:52.231Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("123"),
        NumberInt("123"),
        NumberInt("154"),
        NumberInt("104"),
        NumberInt("84"),
        NumberInt("98"),
        NumberInt("120"),
        NumberInt("142"),
        NumberInt("150"),
        NumberInt("115")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("92"),
        NumberInt("102"),
        NumberInt("99"),
        NumberInt("116"),
        NumberInt("126"),
        NumberInt("122"),
        NumberInt("90"),
        NumberInt("90"),
        NumberInt("126")
    ],
    paceData: [
        5.4,
        5.5,
        6,
        5.4,
        5.7,
        5.4,
        5.7,
        5.6,
        5.9,
        5.8
    ],
    weekData: [
        NumberInt("88"),
        NumberInt("78"),
        NumberInt("55"),
        NumberInt("30"),
        NumberInt("75"),
        NumberInt("30"),
        NumberInt("38")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("72"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("115"),
    currentStepRate: NumberInt("126"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-05-18T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("126"),
            timestamp: ISODate("2025-05-18T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-18T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-18T10:39:52.231Z"),
    updateTime: ISODate("2025-05-18T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9a8"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-16T10:39:52.231Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("81"),
        NumberInt("143"),
        NumberInt("82"),
        NumberInt("78"),
        NumberInt("114"),
        NumberInt("121"),
        NumberInt("101"),
        NumberInt("148"),
        NumberInt("95"),
        NumberInt("93")
    ],
    stepRateData: [
        NumberInt("108"),
        NumberInt("92"),
        NumberInt("90"),
        NumberInt("117"),
        NumberInt("96"),
        NumberInt("100"),
        NumberInt("125"),
        NumberInt("99"),
        NumberInt("110"),
        NumberInt("125")
    ],
    paceData: [
        5.1,
        5.7,
        5.1,
        5.7,
        5.7,
        6,
        5.2,
        5.2,
        5.7,
        5.4
    ],
    weekData: [
        NumberInt("74"),
        NumberInt("79"),
        NumberInt("53"),
        NumberInt("74"),
        NumberInt("53"),
        NumberInt("68"),
        NumberInt("54")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("93"),
    currentStepRate: NumberInt("125"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-16T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-05-16T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-16T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:39:52.231Z"),
    updateTime: ISODate("2025-05-16T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9a9"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-15T10:39:52.231Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("65"),
        NumberInt("155"),
        NumberInt("97"),
        NumberInt("72"),
        NumberInt("93"),
        NumberInt("153"),
        NumberInt("82"),
        NumberInt("158"),
        NumberInt("159"),
        NumberInt("100")
    ],
    stepRateData: [
        NumberInt("112"),
        NumberInt("124"),
        NumberInt("108"),
        NumberInt("121"),
        NumberInt("94"),
        NumberInt("99"),
        NumberInt("118"),
        NumberInt("118"),
        NumberInt("129"),
        NumberInt("93")
    ],
    paceData: [
        5.4,
        5.2,
        5.1,
        5.5,
        5.3,
        5.6,
        5.5,
        5,
        5.1,
        5.8
    ],
    weekData: [
        NumberInt("81"),
        NumberInt("32"),
        NumberInt("77"),
        NumberInt("35"),
        NumberInt("87"),
        NumberInt("46"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("92"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("100"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-15T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-15T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-15T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:39:52.231Z"),
    updateTime: ISODate("2025-05-15T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9aa"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-14T10:39:52.231Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("84"),
        NumberInt("79"),
        NumberInt("138"),
        NumberInt("90"),
        NumberInt("156"),
        NumberInt("96"),
        NumberInt("88"),
        NumberInt("117"),
        NumberInt("150"),
        NumberInt("109")
    ],
    stepRateData: [
        NumberInt("105"),
        NumberInt("99"),
        NumberInt("115"),
        NumberInt("109"),
        NumberInt("106"),
        NumberInt("114"),
        NumberInt("118"),
        NumberInt("122"),
        NumberInt("111"),
        NumberInt("121")
    ],
    paceData: [
        5.8,
        5.7,
        5.5,
        5.9,
        5.7,
        5.9,
        5.3,
        5.8,
        6,
        5.2
    ],
    weekData: [
        NumberInt("39"),
        NumberInt("89"),
        NumberInt("90"),
        NumberInt("39"),
        NumberInt("51"),
        NumberInt("37"),
        NumberInt("35")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("109"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-14T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-14T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-14T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:39:52.231Z"),
    updateTime: ISODate("2025-05-14T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9ab"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-13T10:39:52.231Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("135"),
        NumberInt("97"),
        NumberInt("148"),
        NumberInt("95"),
        NumberInt("159"),
        NumberInt("114"),
        NumberInt("72"),
        NumberInt("66"),
        NumberInt("140"),
        NumberInt("132")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("91"),
        NumberInt("123"),
        NumberInt("121"),
        NumberInt("98"),
        NumberInt("118"),
        NumberInt("112"),
        NumberInt("108"),
        NumberInt("125"),
        NumberInt("116")
    ],
    paceData: [
        5.5,
        5.5,
        5.8,
        5.5,
        5.4,
        5.9,
        5.4,
        5.2,
        5.4,
        5.6
    ],
    weekData: [
        NumberInt("66"),
        NumberInt("30"),
        NumberInt("55"),
        NumberInt("34"),
        NumberInt("50"),
        NumberInt("51"),
        NumberInt("49")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("92"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("132"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("132"),
            timestamp: ISODate("2025-05-13T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-13T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-13T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:39:52.231Z"),
    updateTime: ISODate("2025-05-13T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9ac"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-12T10:39:52.231Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("153"),
        NumberInt("138"),
        NumberInt("76"),
        NumberInt("136"),
        NumberInt("126"),
        NumberInt("77"),
        NumberInt("145"),
        NumberInt("117"),
        NumberInt("115"),
        NumberInt("141")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("110"),
        NumberInt("92"),
        NumberInt("98"),
        NumberInt("100"),
        NumberInt("127"),
        NumberInt("129"),
        NumberInt("130"),
        NumberInt("112"),
        NumberInt("124")
    ],
    paceData: [
        5.4,
        5.9,
        5.8,
        5.4,
        5,
        5.3,
        5,
        5.9,
        5.6,
        6
    ],
    weekData: [
        NumberInt("89"),
        NumberInt("49"),
        NumberInt("49"),
        NumberInt("55"),
        NumberInt("63"),
        NumberInt("48"),
        NumberInt("81")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("141"),
    currentStepRate: NumberInt("124"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("141"),
            timestamp: ISODate("2025-05-12T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-12T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-12T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:39:52.231Z"),
    updateTime: ISODate("2025-05-12T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9ad"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-11T10:39:52.231Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("76"),
        NumberInt("132"),
        NumberInt("84"),
        NumberInt("115"),
        NumberInt("123"),
        NumberInt("97"),
        NumberInt("94"),
        NumberInt("73"),
        NumberInt("87"),
        NumberInt("64")
    ],
    stepRateData: [
        NumberInt("125"),
        NumberInt("106"),
        NumberInt("90"),
        NumberInt("90"),
        NumberInt("95"),
        NumberInt("109"),
        NumberInt("108"),
        NumberInt("116"),
        NumberInt("94"),
        NumberInt("123")
    ],
    paceData: [
        5.8,
        5.9,
        5.1,
        5.6,
        5.5,
        5.2,
        5.7,
        5.3,
        5.4,
        5.8
    ],
    weekData: [
        NumberInt("63"),
        NumberInt("36"),
        NumberInt("32"),
        NumberInt("51"),
        NumberInt("48"),
        NumberInt("42"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("86"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("64"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("64"),
            timestamp: ISODate("2025-05-11T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-11T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-11T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:39:52.231Z"),
    updateTime: ISODate("2025-05-11T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9ae"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-10T10:39:52.231Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("134"),
        NumberInt("151"),
        NumberInt("130"),
        NumberInt("79"),
        NumberInt("117"),
        NumberInt("110"),
        NumberInt("124"),
        NumberInt("130"),
        NumberInt("147"),
        NumberInt("112")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("100"),
        NumberInt("111"),
        NumberInt("111"),
        NumberInt("91"),
        NumberInt("91"),
        NumberInt("106"),
        NumberInt("118"),
        NumberInt("126"),
        NumberInt("114")
    ],
    paceData: [
        5.1,
        5.5,
        5.6,
        6,
        5.8,
        5.3,
        5.1,
        5,
        5.2,
        5.8
    ],
    weekData: [
        NumberInt("45"),
        NumberInt("36"),
        NumberInt("32"),
        NumberInt("78"),
        NumberInt("49"),
        NumberInt("39"),
        NumberInt("34")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("112"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-10T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-10T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-10T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:39:52.231Z"),
    updateTime: ISODate("2025-05-10T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9af"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-09T10:39:52.231Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("70"),
        NumberInt("75"),
        NumberInt("105"),
        NumberInt("80"),
        NumberInt("127"),
        NumberInt("144"),
        NumberInt("105"),
        NumberInt("64"),
        NumberInt("140"),
        NumberInt("71")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("102"),
        NumberInt("90"),
        NumberInt("121"),
        NumberInt("120"),
        NumberInt("121"),
        NumberInt("118"),
        NumberInt("112"),
        NumberInt("103"),
        NumberInt("123")
    ],
    paceData: [
        5.6,
        6,
        5,
        5.8,
        5.9,
        5.6,
        5.5,
        5.2,
        5.7,
        5.1
    ],
    weekData: [
        NumberInt("46"),
        NumberInt("30"),
        NumberInt("72"),
        NumberInt("68"),
        NumberInt("47"),
        NumberInt("64"),
        NumberInt("65")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("71"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("71"),
            timestamp: ISODate("2025-05-09T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-09T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-09T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:39:52.231Z"),
    updateTime: ISODate("2025-05-09T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9b0"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-08T10:39:52.231Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("81"),
        NumberInt("157"),
        NumberInt("157"),
        NumberInt("159"),
        NumberInt("108"),
        NumberInt("81"),
        NumberInt("95"),
        NumberInt("126"),
        NumberInt("109"),
        NumberInt("136")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("116"),
        NumberInt("107"),
        NumberInt("113"),
        NumberInt("102"),
        NumberInt("122"),
        NumberInt("99"),
        NumberInt("116"),
        NumberInt("114"),
        NumberInt("95")
    ],
    paceData: [
        5.5,
        5.8,
        5.8,
        5.7,
        5.1,
        5.2,
        5.1,
        5.3,
        5.5,
        5.8
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("66"),
        NumberInt("30"),
        NumberInt("44"),
        NumberInt("42"),
        NumberInt("54"),
        NumberInt("35")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("136"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("136"),
            timestamp: ISODate("2025-05-08T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-08T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-08T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:39:52.231Z"),
    updateTime: ISODate("2025-05-08T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9b1"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-07T10:39:52.231Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("101"),
        NumberInt("74"),
        NumberInt("132"),
        NumberInt("80"),
        NumberInt("117"),
        NumberInt("147"),
        NumberInt("151"),
        NumberInt("135"),
        NumberInt("108"),
        NumberInt("106")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("126"),
        NumberInt("98"),
        NumberInt("121"),
        NumberInt("92"),
        NumberInt("93"),
        NumberInt("108"),
        NumberInt("91"),
        NumberInt("93"),
        NumberInt("108")
    ],
    paceData: [
        5.2,
        5.7,
        5.7,
        5.3,
        5.1,
        5.3,
        5.7,
        5.3,
        5.4,
        5.6
    ],
    weekData: [
        NumberInt("49"),
        NumberInt("38"),
        NumberInt("67"),
        NumberInt("39"),
        NumberInt("38"),
        NumberInt("87"),
        NumberInt("55")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("106"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-07T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-07T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-07T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:39:52.231Z"),
    updateTime: ISODate("2025-05-07T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9b2"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-06T10:39:52.231Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("129"),
        NumberInt("88"),
        NumberInt("146"),
        NumberInt("91"),
        NumberInt("61"),
        NumberInt("62"),
        NumberInt("153"),
        NumberInt("145"),
        NumberInt("124"),
        NumberInt("139")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("130"),
        NumberInt("96"),
        NumberInt("92"),
        NumberInt("113"),
        NumberInt("126"),
        NumberInt("106"),
        NumberInt("110"),
        NumberInt("93"),
        NumberInt("123")
    ],
    paceData: [
        5.1,
        5.8,
        5.7,
        5.2,
        5.7,
        5,
        5.5,
        5.2,
        5.2,
        5.4
    ],
    weekData: [
        NumberInt("86"),
        NumberInt("78"),
        NumberInt("66"),
        NumberInt("69"),
        NumberInt("89"),
        NumberInt("43"),
        NumberInt("77")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("81"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("139"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("139"),
            timestamp: ISODate("2025-05-06T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-06T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-06T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:39:52.231Z"),
    updateTime: ISODate("2025-05-06T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9b3"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-05T10:39:52.231Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("97"),
        NumberInt("103"),
        NumberInt("95"),
        NumberInt("113"),
        NumberInt("119"),
        NumberInt("109"),
        NumberInt("144"),
        NumberInt("146"),
        NumberInt("127"),
        NumberInt("96")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("106"),
        NumberInt("119"),
        NumberInt("121"),
        NumberInt("106"),
        NumberInt("98"),
        NumberInt("107"),
        NumberInt("102"),
        NumberInt("114"),
        NumberInt("113")
    ],
    paceData: [
        5.3,
        5.9,
        5.1,
        5,
        5.4,
        5.6,
        5.1,
        5.5,
        5.2,
        5.8
    ],
    weekData: [
        NumberInt("68"),
        NumberInt("66"),
        NumberInt("38"),
        NumberInt("64"),
        NumberInt("35"),
        NumberInt("44"),
        NumberInt("65")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("61"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("96"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-05T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-05T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-05T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:39:52.231Z"),
    updateTime: ISODate("2025-05-05T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9b4"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-04T10:39:52.231Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("132"),
        NumberInt("121"),
        NumberInt("122"),
        NumberInt("89"),
        NumberInt("78"),
        NumberInt("106"),
        NumberInt("143"),
        NumberInt("137"),
        NumberInt("109"),
        NumberInt("156")
    ],
    stepRateData: [
        NumberInt("118"),
        NumberInt("124"),
        NumberInt("90"),
        NumberInt("99"),
        NumberInt("127"),
        NumberInt("127"),
        NumberInt("101"),
        NumberInt("111"),
        NumberInt("130"),
        NumberInt("118")
    ],
    paceData: [
        6,
        5.4,
        5.6,
        5.7,
        5,
        5.9,
        5.5,
        5.1,
        5.2,
        5.9
    ],
    weekData: [
        NumberInt("31"),
        NumberInt("76"),
        NumberInt("67"),
        NumberInt("51"),
        NumberInt("61"),
        NumberInt("72"),
        NumberInt("32")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("156"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("156"),
            timestamp: ISODate("2025-05-04T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-05-04T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-04T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:39:52.231Z"),
    updateTime: ISODate("2025-05-04T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9b5"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-03T10:39:52.231Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("73"),
        NumberInt("127"),
        NumberInt("87"),
        NumberInt("90"),
        NumberInt("73"),
        NumberInt("107"),
        NumberInt("105"),
        NumberInt("77"),
        NumberInt("95"),
        NumberInt("99")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("115"),
        NumberInt("125"),
        NumberInt("100"),
        NumberInt("97"),
        NumberInt("123"),
        NumberInt("95"),
        NumberInt("98"),
        NumberInt("127"),
        NumberInt("99")
    ],
    paceData: [
        5.7,
        5.4,
        5.5,
        5.9,
        5.8,
        5,
        5.9,
        5.5,
        5.3,
        5.6
    ],
    weekData: [
        NumberInt("85"),
        NumberInt("70"),
        NumberInt("35"),
        NumberInt("75"),
        NumberInt("39"),
        NumberInt("53"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("99"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-03T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-03T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-03T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:39:52.231Z"),
    updateTime: ISODate("2025-05-03T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9b6"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-02T10:39:52.231Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("150"),
        NumberInt("117"),
        NumberInt("132"),
        NumberInt("129"),
        NumberInt("111"),
        NumberInt("110"),
        NumberInt("125"),
        NumberInt("133"),
        NumberInt("85"),
        NumberInt("106")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("128"),
        NumberInt("130"),
        NumberInt("125"),
        NumberInt("129"),
        NumberInt("109"),
        NumberInt("105"),
        NumberInt("102"),
        NumberInt("130"),
        NumberInt("123")
    ],
    paceData: [
        5.7,
        5.7,
        5.1,
        5.9,
        5.8,
        5.4,
        5.9,
        5.1,
        5.3,
        5.2
    ],
    weekData: [
        NumberInt("65"),
        NumberInt("32"),
        NumberInt("70"),
        NumberInt("71"),
        NumberInt("48"),
        NumberInt("33"),
        NumberInt("80")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("106"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-02T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-02T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-02T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:39:52.231Z"),
    updateTime: ISODate("2025-05-02T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9b7"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-01T10:39:52.231Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("130"),
        NumberInt("80"),
        NumberInt("64"),
        NumberInt("93"),
        NumberInt("87"),
        NumberInt("86"),
        NumberInt("125"),
        NumberInt("90"),
        NumberInt("60"),
        NumberInt("117")
    ],
    stepRateData: [
        NumberInt("117"),
        NumberInt("122"),
        NumberInt("125"),
        NumberInt("116"),
        NumberInt("117"),
        NumberInt("104"),
        NumberInt("116"),
        NumberInt("98"),
        NumberInt("105"),
        NumberInt("128")
    ],
    paceData: [
        5.6,
        5.9,
        5.6,
        5.7,
        5.4,
        5.7,
        5.8,
        5.1,
        5.2,
        5.6
    ],
    weekData: [
        NumberInt("52"),
        NumberInt("70"),
        NumberInt("38"),
        NumberInt("81"),
        NumberInt("72"),
        NumberInt("59"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("93"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("117"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-01T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-01T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-01T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:39:52.231Z"),
    updateTime: ISODate("2025-05-01T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9b8"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-30T10:39:52.231Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("120"),
        NumberInt("146"),
        NumberInt("71"),
        NumberInt("72"),
        NumberInt("115"),
        NumberInt("82"),
        NumberInt("124"),
        NumberInt("157"),
        NumberInt("68"),
        NumberInt("114")
    ],
    stepRateData: [
        NumberInt("103"),
        NumberInt("115"),
        NumberInt("123"),
        NumberInt("113"),
        NumberInt("92"),
        NumberInt("98"),
        NumberInt("112"),
        NumberInt("116"),
        NumberInt("109"),
        NumberInt("119")
    ],
    paceData: [
        5.8,
        5.5,
        5.6,
        5.8,
        5.8,
        5.3,
        5.9,
        5.3,
        5.9,
        5.6
    ],
    weekData: [
        NumberInt("72"),
        NumberInt("47"),
        NumberInt("68"),
        NumberInt("52"),
        NumberInt("60"),
        NumberInt("62"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("114"),
    currentStepRate: NumberInt("119"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-04-30T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-04-30T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-30T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:39:52.231Z"),
    updateTime: ISODate("2025-04-30T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9b9"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-29T10:39:52.231Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("157"),
        NumberInt("156"),
        NumberInt("81"),
        NumberInt("112"),
        NumberInt("147"),
        NumberInt("91"),
        NumberInt("102"),
        NumberInt("76"),
        NumberInt("141"),
        NumberInt("100")
    ],
    stepRateData: [
        NumberInt("122"),
        NumberInt("94"),
        NumberInt("124"),
        NumberInt("125"),
        NumberInt("106"),
        NumberInt("110"),
        NumberInt("92"),
        NumberInt("117"),
        NumberInt("119"),
        NumberInt("97")
    ],
    paceData: [
        5.4,
        5.1,
        5.2,
        5.7,
        5.1,
        5.1,
        5.1,
        5.3,
        5.7,
        5.4
    ],
    weekData: [
        NumberInt("32"),
        NumberInt("56"),
        NumberInt("40"),
        NumberInt("87"),
        NumberInt("47"),
        NumberInt("81"),
        NumberInt("75")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("100"),
    currentStepRate: NumberInt("97"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-29T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-29T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-29T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:39:52.231Z"),
    updateTime: ISODate("2025-04-29T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9ba"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-28T10:39:52.231Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("82"),
        NumberInt("106"),
        NumberInt("155"),
        NumberInt("125"),
        NumberInt("66"),
        NumberInt("109"),
        NumberInt("119"),
        NumberInt("70"),
        NumberInt("146"),
        NumberInt("123")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("99"),
        NumberInt("106"),
        NumberInt("107"),
        NumberInt("128"),
        NumberInt("121"),
        NumberInt("96"),
        NumberInt("115"),
        NumberInt("91"),
        NumberInt("92")
    ],
    paceData: [
        5.3,
        5.9,
        5.4,
        5.1,
        5.4,
        5.3,
        5.3,
        5.8,
        5.5,
        5.6
    ],
    weekData: [
        NumberInt("36"),
        NumberInt("82"),
        NumberInt("40"),
        NumberInt("49"),
        NumberInt("65"),
        NumberInt("62"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("123"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-04-28T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-04-28T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-28T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:39:52.231Z"),
    updateTime: ISODate("2025-04-28T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9bb"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-27T10:39:52.231Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("98"),
        NumberInt("125"),
        NumberInt("69"),
        NumberInt("127"),
        NumberInt("104"),
        NumberInt("95"),
        NumberInt("137"),
        NumberInt("70"),
        NumberInt("123"),
        NumberInt("122")
    ],
    stepRateData: [
        NumberInt("111"),
        NumberInt("126"),
        NumberInt("93"),
        NumberInt("105"),
        NumberInt("94"),
        NumberInt("115"),
        NumberInt("106"),
        NumberInt("112"),
        NumberInt("93"),
        NumberInt("126")
    ],
    paceData: [
        5.9,
        5.8,
        5.4,
        5.2,
        5.4,
        5.9,
        5.1,
        5.2,
        5.3,
        5.6
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("68"),
        NumberInt("73"),
        NumberInt("74"),
        NumberInt("57"),
        NumberInt("45"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("122"),
    currentStepRate: NumberInt("126"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-04-27T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("126"),
            timestamp: ISODate("2025-04-27T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-27T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-27T10:39:52.231Z"),
    updateTime: ISODate("2025-04-27T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9bc"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-26T10:39:52.231Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("92"),
        NumberInt("66"),
        NumberInt("96"),
        NumberInt("137"),
        NumberInt("61"),
        NumberInt("139"),
        NumberInt("108"),
        NumberInt("70"),
        NumberInt("92"),
        NumberInt("158")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("97"),
        NumberInt("119"),
        NumberInt("126"),
        NumberInt("125"),
        NumberInt("109"),
        NumberInt("113"),
        NumberInt("111"),
        NumberInt("122"),
        NumberInt("96")
    ],
    paceData: [
        5.5,
        5.3,
        5.8,
        5.4,
        5.3,
        5.3,
        5.3,
        5.3,
        5.8,
        5.5
    ],
    weekData: [
        NumberInt("32"),
        NumberInt("68"),
        NumberInt("48"),
        NumberInt("46"),
        NumberInt("34"),
        NumberInt("75"),
        NumberInt("60")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("158"),
    currentStepRate: NumberInt("96"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("158"),
            timestamp: ISODate("2025-04-26T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-26T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-26T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:39:52.231Z"),
    updateTime: ISODate("2025-04-26T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9bd"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-25T10:39:52.231Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("69"),
        NumberInt("69"),
        NumberInt("111"),
        NumberInt("99"),
        NumberInt("81"),
        NumberInt("67"),
        NumberInt("154"),
        NumberInt("63"),
        NumberInt("69"),
        NumberInt("76")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("128"),
        NumberInt("127"),
        NumberInt("96"),
        NumberInt("115"),
        NumberInt("117"),
        NumberInt("90"),
        NumberInt("104"),
        NumberInt("106"),
        NumberInt("98")
    ],
    paceData: [
        5.8,
        5.3,
        5.6,
        5.1,
        5.7,
        5.4,
        5.6,
        5.6,
        5.5,
        5.6
    ],
    weekData: [
        NumberInt("85"),
        NumberInt("50"),
        NumberInt("72"),
        NumberInt("45"),
        NumberInt("65"),
        NumberInt("57"),
        NumberInt("52")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("76"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("76"),
            timestamp: ISODate("2025-04-25T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-25T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-25T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:39:52.231Z"),
    updateTime: ISODate("2025-04-25T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9be"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-24T10:39:52.231Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("78"),
        NumberInt("113"),
        NumberInt("63"),
        NumberInt("141"),
        NumberInt("89"),
        NumberInt("142"),
        NumberInt("71"),
        NumberInt("95"),
        NumberInt("131"),
        NumberInt("84")
    ],
    stepRateData: [
        NumberInt("122"),
        NumberInt("130"),
        NumberInt("90"),
        NumberInt("123"),
        NumberInt("94"),
        NumberInt("126"),
        NumberInt("95"),
        NumberInt("112"),
        NumberInt("113"),
        NumberInt("123")
    ],
    paceData: [
        5.9,
        5,
        5.9,
        5.1,
        5.5,
        5,
        5.4,
        5.5,
        5.2,
        6
    ],
    weekData: [
        NumberInt("79"),
        NumberInt("42"),
        NumberInt("82"),
        NumberInt("67"),
        NumberInt("74"),
        NumberInt("70"),
        NumberInt("46")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("84"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("84"),
            timestamp: ISODate("2025-04-24T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-04-24T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-24T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:39:52.231Z"),
    updateTime: ISODate("2025-04-24T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682beb784be777e5afe7e9bf"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-22T10:39:52.231Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("154"),
        NumberInt("75"),
        NumberInt("136"),
        NumberInt("62"),
        NumberInt("127"),
        NumberInt("135"),
        NumberInt("113"),
        NumberInt("115"),
        NumberInt("127"),
        NumberInt("142")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("94"),
        NumberInt("113"),
        NumberInt("111"),
        NumberInt("114"),
        NumberInt("106"),
        NumberInt("111"),
        NumberInt("94"),
        NumberInt("93"),
        NumberInt("129")
    ],
    paceData: [
        5.8,
        5.6,
        5.1,
        5.3,
        5.5,
        5.6,
        6,
        5.8,
        5.4,
        5.9
    ],
    weekData: [
        NumberInt("62"),
        NumberInt("86"),
        NumberInt("86"),
        NumberInt("76"),
        NumberInt("31"),
        NumberInt("58"),
        NumberInt("64")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("142"),
    currentStepRate: NumberInt("129"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("142"),
            timestamp: ISODate("2025-04-22T10:39:52.231Z")
        },
        {
            type: "stepRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-04-22T10:39:52.231Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-22T10:39:52.231Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:39:52.231Z"),
    updateTime: ISODate("2025-04-22T10:39:52.231Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5b4"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-19T10:46:54.452Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("60"),
        NumberInt("126"),
        NumberInt("78"),
        NumberInt("118"),
        NumberInt("86"),
        NumberInt("100"),
        NumberInt("104"),
        NumberInt("86"),
        NumberInt("116"),
        NumberInt("60")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("99"),
        NumberInt("107"),
        NumberInt("115"),
        NumberInt("104"),
        NumberInt("91"),
        NumberInt("95"),
        NumberInt("113"),
        NumberInt("113"),
        NumberInt("115")
    ],
    paceData: [
        5.1,
        5.4,
        5,
        5.4,
        5.6,
        6,
        6,
        5.4,
        5.4,
        5.5
    ],
    weekData: [
        NumberInt("59"),
        NumberInt("54"),
        NumberInt("82"),
        NumberInt("70"),
        NumberInt("43"),
        NumberInt("50"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("60"),
    currentStepRate: NumberInt("115"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("60"),
            timestamp: ISODate("2025-05-19T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-05-19T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-19T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:46:54.452Z"),
    updateTime: ISODate("2025-05-19T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5b5"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-18T10:46:54.452Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("100"),
        NumberInt("84"),
        NumberInt("142"),
        NumberInt("87"),
        NumberInt("150"),
        NumberInt("120"),
        NumberInt("82"),
        NumberInt("84"),
        NumberInt("154"),
        NumberInt("116")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("129"),
        NumberInt("110"),
        NumberInt("92"),
        NumberInt("115"),
        NumberInt("107"),
        NumberInt("118"),
        NumberInt("109"),
        NumberInt("95"),
        NumberInt("121")
    ],
    paceData: [
        5.6,
        6,
        5.5,
        5.7,
        5.5,
        5.1,
        5.1,
        5.6,
        5,
        5.2
    ],
    weekData: [
        NumberInt("45"),
        NumberInt("68"),
        NumberInt("85"),
        NumberInt("34"),
        NumberInt("62"),
        NumberInt("36"),
        NumberInt("64")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("116"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-18T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-18T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-18T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-18T10:46:54.452Z"),
    updateTime: ISODate("2025-05-18T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5b6"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-16T10:46:54.452Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("146"),
        NumberInt("126"),
        NumberInt("67"),
        NumberInt("142"),
        NumberInt("74"),
        NumberInt("137"),
        NumberInt("150"),
        NumberInt("100"),
        NumberInt("140"),
        NumberInt("102")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("120"),
        NumberInt("130"),
        NumberInt("124"),
        NumberInt("107"),
        NumberInt("117"),
        NumberInt("101"),
        NumberInt("112"),
        NumberInt("112"),
        NumberInt("109")
    ],
    paceData: [
        5.6,
        5.9,
        5.3,
        5.7,
        5.6,
        5.8,
        5.6,
        5.8,
        5.9,
        5.6
    ],
    weekData: [
        NumberInt("54"),
        NumberInt("60"),
        NumberInt("70"),
        NumberInt("53"),
        NumberInt("86"),
        NumberInt("54"),
        NumberInt("82")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("102"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-05-16T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-16T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-16T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:46:54.452Z"),
    updateTime: ISODate("2025-05-16T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5b7"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-15T10:46:54.452Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("127"),
        NumberInt("77"),
        NumberInt("134"),
        NumberInt("104"),
        NumberInt("104"),
        NumberInt("67"),
        NumberInt("85"),
        NumberInt("158"),
        NumberInt("119"),
        NumberInt("109")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("122"),
        NumberInt("106"),
        NumberInt("104"),
        NumberInt("122"),
        NumberInt("113"),
        NumberInt("127"),
        NumberInt("120"),
        NumberInt("98"),
        NumberInt("116")
    ],
    paceData: [
        5.5,
        5.5,
        5.2,
        5.5,
        5.3,
        5.8,
        5.1,
        5.1,
        5.7,
        5.7
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("89"),
        NumberInt("67"),
        NumberInt("43"),
        NumberInt("88"),
        NumberInt("78"),
        NumberInt("71")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("23"),
    currentHeartRate: NumberInt("109"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-15T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-15T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-15T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:46:54.452Z"),
    updateTime: ISODate("2025-05-15T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5b8"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-14T10:46:54.452Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("156"),
        NumberInt("149"),
        NumberInt("62"),
        NumberInt("98"),
        NumberInt("146"),
        NumberInt("129"),
        NumberInt("99"),
        NumberInt("82"),
        NumberInt("119"),
        NumberInt("113")
    ],
    stepRateData: [
        NumberInt("97"),
        NumberInt("108"),
        NumberInt("98"),
        NumberInt("119"),
        NumberInt("93"),
        NumberInt("116"),
        NumberInt("106"),
        NumberInt("129"),
        NumberInt("114"),
        NumberInt("113")
    ],
    paceData: [
        5.4,
        5.1,
        5.2,
        5.5,
        5.6,
        5.4,
        5.3,
        5.8,
        5,
        5.7
    ],
    weekData: [
        NumberInt("68"),
        NumberInt("55"),
        NumberInt("76"),
        NumberInt("78"),
        NumberInt("54"),
        NumberInt("90"),
        NumberInt("58")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("113"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-14T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-14T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-14T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:46:54.452Z"),
    updateTime: ISODate("2025-05-14T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5b9"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-13T10:46:54.452Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("131"),
        NumberInt("113"),
        NumberInt("140"),
        NumberInt("122"),
        NumberInt("111"),
        NumberInt("64"),
        NumberInt("127"),
        NumberInt("123"),
        NumberInt("154"),
        NumberInt("110")
    ],
    stepRateData: [
        NumberInt("117"),
        NumberInt("122"),
        NumberInt("102"),
        NumberInt("100"),
        NumberInt("111"),
        NumberInt("113"),
        NumberInt("98"),
        NumberInt("114"),
        NumberInt("94"),
        NumberInt("123")
    ],
    paceData: [
        5.6,
        5.5,
        5.7,
        5.6,
        6,
        5.1,
        5.1,
        5.5,
        5.8,
        5.3
    ],
    weekData: [
        NumberInt("60"),
        NumberInt("89"),
        NumberInt("32"),
        NumberInt("45"),
        NumberInt("53"),
        NumberInt("66"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("110"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-05-13T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-13T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-13T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:46:54.452Z"),
    updateTime: ISODate("2025-05-13T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5ba"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-12T10:46:54.452Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("64"),
        NumberInt("62"),
        NumberInt("155"),
        NumberInt("142"),
        NumberInt("123"),
        NumberInt("63"),
        NumberInt("125"),
        NumberInt("123"),
        NumberInt("92"),
        NumberInt("158")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("117"),
        NumberInt("109"),
        NumberInt("90"),
        NumberInt("106"),
        NumberInt("90"),
        NumberInt("101"),
        NumberInt("121"),
        NumberInt("121"),
        NumberInt("106")
    ],
    paceData: [
        5.2,
        5.5,
        5.6,
        6,
        5.2,
        5.6,
        5.1,
        5.5,
        5.9,
        5.5
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("32"),
        NumberInt("42"),
        NumberInt("76"),
        NumberInt("37"),
        NumberInt("84"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("27"),
    currentHeartRate: NumberInt("158"),
    currentStepRate: NumberInt("106"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("158"),
            timestamp: ISODate("2025-05-12T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-12T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-12T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:46:54.452Z"),
    updateTime: ISODate("2025-05-12T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5bb"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-11T10:46:54.452Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("126"),
        NumberInt("88"),
        NumberInt("111"),
        NumberInt("120"),
        NumberInt("147"),
        NumberInt("159"),
        NumberInt("148"),
        NumberInt("121"),
        NumberInt("65"),
        NumberInt("107")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("105"),
        NumberInt("107"),
        NumberInt("106"),
        NumberInt("128"),
        NumberInt("98"),
        NumberInt("103"),
        NumberInt("101"),
        NumberInt("90"),
        NumberInt("130")
    ],
    paceData: [
        5.1,
        5.6,
        5.2,
        5.6,
        5.3,
        5.6,
        5.1,
        5.7,
        5.7,
        5
    ],
    weekData: [
        NumberInt("47"),
        NumberInt("47"),
        NumberInt("50"),
        NumberInt("89"),
        NumberInt("70"),
        NumberInt("62"),
        NumberInt("34")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("107"),
    currentStepRate: NumberInt("130"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-11T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("130"),
            timestamp: ISODate("2025-05-11T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-11T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:46:54.452Z"),
    updateTime: ISODate("2025-05-11T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5bc"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-08T10:46:54.452Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("133"),
        NumberInt("76"),
        NumberInt("63"),
        NumberInt("67"),
        NumberInt("139"),
        NumberInt("130"),
        NumberInt("99"),
        NumberInt("87"),
        NumberInt("127"),
        NumberInt("68")
    ],
    stepRateData: [
        NumberInt("108"),
        NumberInt("119"),
        NumberInt("123"),
        NumberInt("119"),
        NumberInt("99"),
        NumberInt("93"),
        NumberInt("125"),
        NumberInt("91"),
        NumberInt("120"),
        NumberInt("118")
    ],
    paceData: [
        5.3,
        5.8,
        5.5,
        5.4,
        5.5,
        5.6,
        5.4,
        5.6,
        5.1,
        5.9
    ],
    weekData: [
        NumberInt("90"),
        NumberInt("88"),
        NumberInt("56"),
        NumberInt("45"),
        NumberInt("73"),
        NumberInt("55"),
        NumberInt("31")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("61"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("68"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("68"),
            timestamp: ISODate("2025-05-08T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-05-08T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-08T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:46:54.452Z"),
    updateTime: ISODate("2025-05-08T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5bd"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-07T10:46:54.452Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("97"),
        NumberInt("95"),
        NumberInt("159"),
        NumberInt("91"),
        NumberInt("80"),
        NumberInt("88"),
        NumberInt("71"),
        NumberInt("137"),
        NumberInt("130"),
        NumberInt("139")
    ],
    stepRateData: [
        NumberInt("108"),
        NumberInt("117"),
        NumberInt("95"),
        NumberInt("101"),
        NumberInt("128"),
        NumberInt("94"),
        NumberInt("124"),
        NumberInt("101"),
        NumberInt("129"),
        NumberInt("114")
    ],
    paceData: [
        5.5,
        5.6,
        5.3,
        5.8,
        5.8,
        5.6,
        5.9,
        5.1,
        5.4,
        5.4
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("55"),
        NumberInt("38"),
        NumberInt("89"),
        NumberInt("32"),
        NumberInt("59"),
        NumberInt("42")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("139"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("139"),
            timestamp: ISODate("2025-05-07T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-07T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-07T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:46:54.452Z"),
    updateTime: ISODate("2025-05-07T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5be"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-06T10:46:54.452Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("117"),
        NumberInt("92"),
        NumberInt("147"),
        NumberInt("127"),
        NumberInt("69"),
        NumberInt("62"),
        NumberInt("91"),
        NumberInt("97"),
        NumberInt("108"),
        NumberInt("82")
    ],
    stepRateData: [
        NumberInt("128"),
        NumberInt("125"),
        NumberInt("99"),
        NumberInt("124"),
        NumberInt("116"),
        NumberInt("99"),
        NumberInt("103"),
        NumberInt("124"),
        NumberInt("107"),
        NumberInt("123")
    ],
    paceData: [
        5.6,
        5.4,
        5,
        5.2,
        5.2,
        5.7,
        5.5,
        5.7,
        6,
        5.8
    ],
    weekData: [
        NumberInt("57"),
        NumberInt("64"),
        NumberInt("54"),
        NumberInt("74"),
        NumberInt("59"),
        NumberInt("46"),
        NumberInt("89")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("92"),
    stressIndex: NumberInt("23"),
    currentHeartRate: NumberInt("82"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("82"),
            timestamp: ISODate("2025-05-06T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-06T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-06T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:46:54.452Z"),
    updateTime: ISODate("2025-05-06T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5bf"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-05T10:46:54.452Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("84"),
        NumberInt("158"),
        NumberInt("142"),
        NumberInt("117"),
        NumberInt("122"),
        NumberInt("123"),
        NumberInt("116"),
        NumberInt("149"),
        NumberInt("132"),
        NumberInt("72")
    ],
    stepRateData: [
        NumberInt("127"),
        NumberInt("109"),
        NumberInt("121"),
        NumberInt("130"),
        NumberInt("129"),
        NumberInt("128"),
        NumberInt("106"),
        NumberInt("120"),
        NumberInt("108"),
        NumberInt("109")
    ],
    paceData: [
        5.6,
        5.9,
        5.5,
        5.5,
        5.6,
        5.6,
        5.5,
        5.7,
        5.8,
        5.5
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("31"),
        NumberInt("82"),
        NumberInt("45"),
        NumberInt("52"),
        NumberInt("74"),
        NumberInt("37")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("72"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("72"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("72"),
            timestamp: ISODate("2025-05-05T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-05T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-05T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:46:54.452Z"),
    updateTime: ISODate("2025-05-05T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5c0"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-04T10:46:54.452Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("118"),
        NumberInt("74"),
        NumberInt("102"),
        NumberInt("104"),
        NumberInt("138"),
        NumberInt("126"),
        NumberInt("121"),
        NumberInt("133"),
        NumberInt("79"),
        NumberInt("145")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("97"),
        NumberInt("90"),
        NumberInt("102"),
        NumberInt("129"),
        NumberInt("107"),
        NumberInt("90"),
        NumberInt("110"),
        NumberInt("115"),
        NumberInt("100")
    ],
    paceData: [
        5,
        5.8,
        5.3,
        5.6,
        5.3,
        5.7,
        5.1,
        5.3,
        5.9,
        5
    ],
    weekData: [
        NumberInt("65"),
        NumberInt("74"),
        NumberInt("80"),
        NumberInt("67"),
        NumberInt("34"),
        NumberInt("67"),
        NumberInt("83")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("145"),
    currentStepRate: NumberInt("100"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("145"),
            timestamp: ISODate("2025-05-04T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-04T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-04T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:46:54.452Z"),
    updateTime: ISODate("2025-05-04T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5c1"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-03T10:46:54.452Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("72"),
        NumberInt("90"),
        NumberInt("65"),
        NumberInt("64"),
        NumberInt("151"),
        NumberInt("72"),
        NumberInt("132"),
        NumberInt("147"),
        NumberInt("89"),
        NumberInt("73")
    ],
    stepRateData: [
        NumberInt("98"),
        NumberInt("98"),
        NumberInt("117"),
        NumberInt("128"),
        NumberInt("119"),
        NumberInt("100"),
        NumberInt("112"),
        NumberInt("124"),
        NumberInt("123"),
        NumberInt("109")
    ],
    paceData: [
        5,
        5.5,
        5.3,
        5.8,
        5.2,
        5.6,
        5.2,
        5.2,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("59"),
        NumberInt("45"),
        NumberInt("90"),
        NumberInt("59"),
        NumberInt("36"),
        NumberInt("58"),
        NumberInt("51")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("73"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("73"),
            timestamp: ISODate("2025-05-03T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-03T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-03T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:46:54.452Z"),
    updateTime: ISODate("2025-05-03T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5c2"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-02T10:46:54.452Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("118"),
        NumberInt("97"),
        NumberInt("133"),
        NumberInt("60"),
        NumberInt("134"),
        NumberInt("135"),
        NumberInt("76"),
        NumberInt("70"),
        NumberInt("99"),
        NumberInt("74")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("102"),
        NumberInt("90"),
        NumberInt("107"),
        NumberInt("95"),
        NumberInt("123"),
        NumberInt("104"),
        NumberInt("116"),
        NumberInt("96"),
        NumberInt("94")
    ],
    paceData: [
        5.6,
        5.4,
        5.4,
        5.2,
        5.3,
        5.4,
        6,
        5.7,
        5,
        5.2
    ],
    weekData: [
        NumberInt("47"),
        NumberInt("55"),
        NumberInt("41"),
        NumberInt("41"),
        NumberInt("56"),
        NumberInt("32"),
        NumberInt("35")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("74"),
    currentStepRate: NumberInt("94"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("74"),
            timestamp: ISODate("2025-05-02T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-05-02T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-02T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:46:54.452Z"),
    updateTime: ISODate("2025-05-02T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5c3"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-01T10:46:54.452Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("134"),
        NumberInt("90"),
        NumberInt("123"),
        NumberInt("113"),
        NumberInt("66"),
        NumberInt("124"),
        NumberInt("91"),
        NumberInt("143"),
        NumberInt("70"),
        NumberInt("120")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("116"),
        NumberInt("97"),
        NumberInt("128"),
        NumberInt("100"),
        NumberInt("118"),
        NumberInt("122"),
        NumberInt("112"),
        NumberInt("116"),
        NumberInt("90")
    ],
    paceData: [
        5.5,
        5.2,
        5.8,
        5.3,
        5.2,
        5.2,
        5.5,
        5.3,
        5.5,
        5.9
    ],
    weekData: [
        NumberInt("80"),
        NumberInt("30"),
        NumberInt("66"),
        NumberInt("55"),
        NumberInt("37"),
        NumberInt("77"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("120"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-05-01T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-01T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-01T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:46:54.452Z"),
    updateTime: ISODate("2025-05-01T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5c4"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-30T10:46:54.452Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("104"),
        NumberInt("133"),
        NumberInt("146"),
        NumberInt("69"),
        NumberInt("112"),
        NumberInt("145"),
        NumberInt("64"),
        NumberInt("73"),
        NumberInt("69"),
        NumberInt("121")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("102"),
        NumberInt("94"),
        NumberInt("115"),
        NumberInt("123"),
        NumberInt("121"),
        NumberInt("116"),
        NumberInt("112"),
        NumberInt("105"),
        NumberInt("125")
    ],
    paceData: [
        5.3,
        6,
        5.2,
        5.4,
        5.1,
        5,
        5.1,
        5.5,
        5.7,
        5.2
    ],
    weekData: [
        NumberInt("74"),
        NumberInt("64"),
        NumberInt("48"),
        NumberInt("65"),
        NumberInt("43"),
        NumberInt("32"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("121"),
    currentStepRate: NumberInt("125"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-04-30T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-04-30T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-30T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:46:54.452Z"),
    updateTime: ISODate("2025-04-30T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5c5"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-29T10:46:54.452Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("153"),
        NumberInt("67"),
        NumberInt("73"),
        NumberInt("94"),
        NumberInt("109"),
        NumberInt("113"),
        NumberInt("123"),
        NumberInt("127"),
        NumberInt("84"),
        NumberInt("85")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("102"),
        NumberInt("98"),
        NumberInt("124"),
        NumberInt("108"),
        NumberInt("130"),
        NumberInt("117"),
        NumberInt("130"),
        NumberInt("127"),
        NumberInt("113")
    ],
    paceData: [
        5.6,
        5.2,
        5.2,
        5.1,
        5.1,
        5,
        5.7,
        5.2,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("87"),
        NumberInt("74"),
        NumberInt("55"),
        NumberInt("86"),
        NumberInt("40"),
        NumberInt("39"),
        NumberInt("79")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("72"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("85"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("85"),
            timestamp: ISODate("2025-04-29T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-04-29T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-29T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:46:54.452Z"),
    updateTime: ISODate("2025-04-29T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5c6"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-28T10:46:54.452Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("159"),
        NumberInt("139"),
        NumberInt("150"),
        NumberInt("112"),
        NumberInt("81"),
        NumberInt("63"),
        NumberInt("132"),
        NumberInt("98"),
        NumberInt("113"),
        NumberInt("104")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("120"),
        NumberInt("122"),
        NumberInt("95"),
        NumberInt("118"),
        NumberInt("116"),
        NumberInt("98"),
        NumberInt("105"),
        NumberInt("104"),
        NumberInt("118")
    ],
    paceData: [
        6,
        5,
        5.5,
        5.5,
        5.3,
        5.7,
        5.6,
        5.7,
        5.6,
        5.3
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("42"),
        NumberInt("59"),
        NumberInt("34"),
        NumberInt("82"),
        NumberInt("85"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("104"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-04-28T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-04-28T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-28T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:46:54.452Z"),
    updateTime: ISODate("2025-04-28T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5c7"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-27T10:46:54.452Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("91"),
        NumberInt("124"),
        NumberInt("103"),
        NumberInt("69"),
        NumberInt("63"),
        NumberInt("85"),
        NumberInt("130"),
        NumberInt("119"),
        NumberInt("138"),
        NumberInt("117")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("102"),
        NumberInt("123"),
        NumberInt("98"),
        NumberInt("100"),
        NumberInt("110"),
        NumberInt("130"),
        NumberInt("122"),
        NumberInt("114"),
        NumberInt("118")
    ],
    paceData: [
        5.6,
        5.1,
        5.8,
        5.9,
        6,
        5.5,
        5.1,
        5.8,
        5.1,
        5
    ],
    weekData: [
        NumberInt("61"),
        NumberInt("89"),
        NumberInt("32"),
        NumberInt("87"),
        NumberInt("44"),
        NumberInt("43"),
        NumberInt("66")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("117"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-04-27T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-04-27T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-27T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-04-27T10:46:54.452Z"),
    updateTime: ISODate("2025-04-27T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5c8"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-26T10:46:54.452Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("127"),
        NumberInt("138"),
        NumberInt("135"),
        NumberInt("123"),
        NumberInt("84"),
        NumberInt("159"),
        NumberInt("146"),
        NumberInt("83"),
        NumberInt("89"),
        NumberInt("120")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("125"),
        NumberInt("110"),
        NumberInt("120"),
        NumberInt("114"),
        NumberInt("97"),
        NumberInt("101"),
        NumberInt("129"),
        NumberInt("100"),
        NumberInt("91")
    ],
    paceData: [
        5.3,
        5.8,
        5.9,
        5.4,
        5.6,
        5.8,
        5.5,
        5.5,
        5.2,
        5.5
    ],
    weekData: [
        NumberInt("83"),
        NumberInt("59"),
        NumberInt("59"),
        NumberInt("64"),
        NumberInt("68"),
        NumberInt("58"),
        NumberInt("48")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("67"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("120"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-04-26T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-04-26T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-26T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:46:54.452Z"),
    updateTime: ISODate("2025-04-26T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5c9"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-25T10:46:54.452Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("87"),
        NumberInt("117"),
        NumberInt("147"),
        NumberInt("159"),
        NumberInt("126"),
        NumberInt("117"),
        NumberInt("126"),
        NumberInt("70"),
        NumberInt("85"),
        NumberInt("136")
    ],
    stepRateData: [
        NumberInt("106"),
        NumberInt("104"),
        NumberInt("117"),
        NumberInt("122"),
        NumberInt("98"),
        NumberInt("90"),
        NumberInt("121"),
        NumberInt("103"),
        NumberInt("114"),
        NumberInt("101")
    ],
    paceData: [
        5.2,
        5.9,
        5.7,
        5.7,
        6,
        5.9,
        5.2,
        5.9,
        5.8,
        5.1
    ],
    weekData: [
        NumberInt("48"),
        NumberInt("71"),
        NumberInt("31"),
        NumberInt("68"),
        NumberInt("31"),
        NumberInt("38"),
        NumberInt("79")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("90"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("136"),
    currentStepRate: NumberInt("101"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("136"),
            timestamp: ISODate("2025-04-25T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-04-25T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-25T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:46:54.452Z"),
    updateTime: ISODate("2025-04-25T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5ca"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-24T10:46:54.452Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("102"),
        NumberInt("158"),
        NumberInt("120"),
        NumberInt("63"),
        NumberInt("72"),
        NumberInt("99"),
        NumberInt("136"),
        NumberInt("66"),
        NumberInt("100"),
        NumberInt("65")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("91"),
        NumberInt("116"),
        NumberInt("94"),
        NumberInt("126"),
        NumberInt("127"),
        NumberInt("120"),
        NumberInt("124"),
        NumberInt("119"),
        NumberInt("129")
    ],
    paceData: [
        5.5,
        6,
        5.9,
        5.1,
        5.5,
        5.6,
        5.8,
        5.9,
        5.6,
        5.8
    ],
    weekData: [
        NumberInt("63"),
        NumberInt("79"),
        NumberInt("59"),
        NumberInt("65"),
        NumberInt("76"),
        NumberInt("53"),
        NumberInt("82")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("27"),
    currentHeartRate: NumberInt("65"),
    currentStepRate: NumberInt("129"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("65"),
            timestamp: ISODate("2025-04-24T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-04-24T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-24T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:46:54.452Z"),
    updateTime: ISODate("2025-04-24T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5cb"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-23T10:46:54.452Z"),
    date: "2025-04-23",
    heartRateData: [
        NumberInt("98"),
        NumberInt("136"),
        NumberInt("140"),
        NumberInt("118"),
        NumberInt("96"),
        NumberInt("118"),
        NumberInt("102"),
        NumberInt("130"),
        NumberInt("159"),
        NumberInt("134")
    ],
    stepRateData: [
        NumberInt("117"),
        NumberInt("100"),
        NumberInt("111"),
        NumberInt("102"),
        NumberInt("121"),
        NumberInt("127"),
        NumberInt("119"),
        NumberInt("116"),
        NumberInt("106"),
        NumberInt("127")
    ],
    paceData: [
        5.5,
        6,
        5.4,
        5.3,
        5.8,
        5.4,
        5.7,
        5.2,
        5.4,
        5.7
    ],
    weekData: [
        NumberInt("39"),
        NumberInt("60"),
        NumberInt("75"),
        NumberInt("74"),
        NumberInt("32"),
        NumberInt("62"),
        NumberInt("81")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("134"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("134"),
            timestamp: ISODate("2025-04-23T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-04-23T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-23T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-04-23T10:46:54.452Z"),
    updateTime: ISODate("2025-04-23T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5cc"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-22T10:46:54.452Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("152"),
        NumberInt("124"),
        NumberInt("82"),
        NumberInt("63"),
        NumberInt("144"),
        NumberInt("80"),
        NumberInt("66"),
        NumberInt("133"),
        NumberInt("160"),
        NumberInt("83")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("106"),
        NumberInt("115"),
        NumberInt("122"),
        NumberInt("107"),
        NumberInt("102"),
        NumberInt("128"),
        NumberInt("129"),
        NumberInt("118"),
        NumberInt("113")
    ],
    paceData: [
        6,
        5.7,
        5.9,
        5.4,
        5.4,
        5.5,
        5.7,
        5.3,
        5.7,
        5.9
    ],
    weekData: [
        NumberInt("89"),
        NumberInt("64"),
        NumberInt("38"),
        NumberInt("67"),
        NumberInt("41"),
        NumberInt("60"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("83"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("83"),
            timestamp: ISODate("2025-04-22T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-04-22T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-22T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:46:54.452Z"),
    updateTime: ISODate("2025-04-22T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5cd"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-21T10:46:54.452Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("143"),
        NumberInt("101"),
        NumberInt("101"),
        NumberInt("90"),
        NumberInt("93"),
        NumberInt("136"),
        NumberInt("137"),
        NumberInt("82"),
        NumberInt("103"),
        NumberInt("94")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("98"),
        NumberInt("110"),
        NumberInt("113"),
        NumberInt("107"),
        NumberInt("127"),
        NumberInt("97"),
        NumberInt("125"),
        NumberInt("101"),
        NumberInt("107")
    ],
    paceData: [
        5.9,
        5.8,
        5,
        5.2,
        5,
        5.2,
        5.6,
        5.3,
        5.3,
        5.6
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("34"),
        NumberInt("77"),
        NumberInt("56"),
        NumberInt("72"),
        NumberInt("52"),
        NumberInt("35")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("92"),
    stressIndex: NumberInt("27"),
    currentHeartRate: NumberInt("94"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-04-21T10:46:54.452Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-21T10:46:54.452Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-21T10:46:54.452Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:46:54.452Z"),
    updateTime: ISODate("2025-04-21T10:46:54.452Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5ce"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-20T10:46:54.455Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("106"),
        NumberInt("86"),
        NumberInt("135"),
        NumberInt("114"),
        NumberInt("129"),
        NumberInt("99"),
        NumberInt("120"),
        NumberInt("83"),
        NumberInt("127"),
        NumberInt("86")
    ],
    stepRateData: [
        NumberInt("98"),
        NumberInt("121"),
        NumberInt("114"),
        NumberInt("124"),
        NumberInt("125"),
        NumberInt("117"),
        NumberInt("121"),
        NumberInt("116"),
        NumberInt("109"),
        NumberInt("91")
    ],
    paceData: [
        5.7,
        5.3,
        5.5,
        5.9,
        5.7,
        5.5,
        5.8,
        5.4,
        5.5,
        5.7
    ],
    weekData: [
        NumberInt("36"),
        NumberInt("37"),
        NumberInt("80"),
        NumberInt("76"),
        NumberInt("86"),
        NumberInt("46"),
        NumberInt("87")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("86"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("86"),
            timestamp: ISODate("2025-05-20T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-20T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-20T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-20T10:46:54.455Z"),
    updateTime: ISODate("2025-05-20T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5cf"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-19T10:46:54.455Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("158"),
        NumberInt("106"),
        NumberInt("81"),
        NumberInt("147"),
        NumberInt("62"),
        NumberInt("119"),
        NumberInt("93"),
        NumberInt("122"),
        NumberInt("109"),
        NumberInt("147")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("96"),
        NumberInt("93"),
        NumberInt("91"),
        NumberInt("120"),
        NumberInt("102"),
        NumberInt("116"),
        NumberInt("125"),
        NumberInt("105"),
        NumberInt("127")
    ],
    paceData: [
        5.7,
        5.1,
        5.4,
        5.2,
        5.2,
        5.7,
        5.9,
        5.5,
        5.4,
        5.8
    ],
    weekData: [
        NumberInt("35"),
        NumberInt("79"),
        NumberInt("68"),
        NumberInt("60"),
        NumberInt("63"),
        NumberInt("64"),
        NumberInt("43")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("23"),
    currentHeartRate: NumberInt("147"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("147"),
            timestamp: ISODate("2025-05-19T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-19T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-19T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:46:54.455Z"),
    updateTime: ISODate("2025-05-19T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5d0"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-18T10:46:54.455Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("79"),
        NumberInt("158"),
        NumberInt("97"),
        NumberInt("113"),
        NumberInt("117"),
        NumberInt("76"),
        NumberInt("77"),
        NumberInt("127"),
        NumberInt("60"),
        NumberInt("108")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("115"),
        NumberInt("121"),
        NumberInt("109"),
        NumberInt("122"),
        NumberInt("128"),
        NumberInt("121"),
        NumberInt("95"),
        NumberInt("105"),
        NumberInt("125")
    ],
    paceData: [
        5.2,
        5.4,
        5.3,
        5,
        5.9,
        5.4,
        5.4,
        5.3,
        5.2,
        5.2
    ],
    weekData: [
        NumberInt("72"),
        NumberInt("34"),
        NumberInt("72"),
        NumberInt("89"),
        NumberInt("57"),
        NumberInt("56"),
        NumberInt("55")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("63"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("108"),
    currentStepRate: NumberInt("125"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-18T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-05-18T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-18T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-18T10:46:54.455Z"),
    updateTime: ISODate("2025-05-18T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5d1"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-17T10:46:54.455Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("88"),
        NumberInt("96"),
        NumberInt("111"),
        NumberInt("158"),
        NumberInt("77"),
        NumberInt("85"),
        NumberInt("66"),
        NumberInt("137"),
        NumberInt("69"),
        NumberInt("79")
    ],
    stepRateData: [
        NumberInt("130"),
        NumberInt("125"),
        NumberInt("123"),
        NumberInt("126"),
        NumberInt("113"),
        NumberInt("124"),
        NumberInt("114"),
        NumberInt("99"),
        NumberInt("93"),
        NumberInt("90")
    ],
    paceData: [
        5.6,
        5.5,
        5.3,
        5.4,
        5.7,
        5.1,
        5.4,
        5.1,
        6,
        5.2
    ],
    weekData: [
        NumberInt("49"),
        NumberInt("55"),
        NumberInt("71"),
        NumberInt("67"),
        NumberInt("48"),
        NumberInt("59"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("67"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("79"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("79"),
            timestamp: ISODate("2025-05-17T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-17T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-17T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-17T10:46:54.455Z"),
    updateTime: ISODate("2025-05-17T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5d2"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-16T10:46:54.455Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("150"),
        NumberInt("141"),
        NumberInt("107"),
        NumberInt("104"),
        NumberInt("107"),
        NumberInt("80"),
        NumberInt("123"),
        NumberInt("90"),
        NumberInt("86"),
        NumberInt("116")
    ],
    stepRateData: [
        NumberInt("111"),
        NumberInt("109"),
        NumberInt("98"),
        NumberInt("130"),
        NumberInt("123"),
        NumberInt("116"),
        NumberInt("116"),
        NumberInt("125"),
        NumberInt("120"),
        NumberInt("92")
    ],
    paceData: [
        5.2,
        5.5,
        5.5,
        5.2,
        5.5,
        5.2,
        5.1,
        5.8,
        5.1,
        5
    ],
    weekData: [
        NumberInt("74"),
        NumberInt("59"),
        NumberInt("63"),
        NumberInt("85"),
        NumberInt("47"),
        NumberInt("33"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("61"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("116"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-16T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-05-16T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-16T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:46:54.455Z"),
    updateTime: ISODate("2025-05-16T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5d3"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-15T10:46:54.455Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("68"),
        NumberInt("118"),
        NumberInt("94"),
        NumberInt("90"),
        NumberInt("91"),
        NumberInt("144"),
        NumberInt("87"),
        NumberInt("128"),
        NumberInt("136"),
        NumberInt("107")
    ],
    stepRateData: [
        NumberInt("105"),
        NumberInt("97"),
        NumberInt("117"),
        NumberInt("102"),
        NumberInt("121"),
        NumberInt("91"),
        NumberInt("92"),
        NumberInt("104"),
        NumberInt("98"),
        NumberInt("97")
    ],
    paceData: [
        5.3,
        5.9,
        5,
        5.2,
        5.5,
        5.6,
        5.6,
        5,
        5.8,
        5.6
    ],
    weekData: [
        NumberInt("88"),
        NumberInt("88"),
        NumberInt("30"),
        NumberInt("44"),
        NumberInt("34"),
        NumberInt("33"),
        NumberInt("36")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("107"),
    currentStepRate: NumberInt("97"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-15T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-15T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-15T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:46:54.455Z"),
    updateTime: ISODate("2025-05-15T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5d4"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-14T10:46:54.455Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("111"),
        NumberInt("70"),
        NumberInt("152"),
        NumberInt("95"),
        NumberInt("62"),
        NumberInt("97"),
        NumberInt("128"),
        NumberInt("82"),
        NumberInt("135"),
        NumberInt("150")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("103"),
        NumberInt("111"),
        NumberInt("114"),
        NumberInt("97"),
        NumberInt("124"),
        NumberInt("113"),
        NumberInt("106"),
        NumberInt("90"),
        NumberInt("118")
    ],
    paceData: [
        5.4,
        5.7,
        5.8,
        5,
        5.4,
        5.6,
        5.7,
        5.1,
        5.2,
        5.6
    ],
    weekData: [
        NumberInt("71"),
        NumberInt("74"),
        NumberInt("67"),
        NumberInt("47"),
        NumberInt("57"),
        NumberInt("41"),
        NumberInt("69")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("63"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("150"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("150"),
            timestamp: ISODate("2025-05-14T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-05-14T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-14T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:46:54.455Z"),
    updateTime: ISODate("2025-05-14T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5d5"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-13T10:46:54.455Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("117"),
        NumberInt("159"),
        NumberInt("64"),
        NumberInt("73"),
        NumberInt("60"),
        NumberInt("119"),
        NumberInt("141"),
        NumberInt("97"),
        NumberInt("130"),
        NumberInt("104")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("90"),
        NumberInt("105"),
        NumberInt("126"),
        NumberInt("107"),
        NumberInt("94"),
        NumberInt("117"),
        NumberInt("114"),
        NumberInt("126"),
        NumberInt("101")
    ],
    paceData: [
        5.8,
        5.6,
        5.9,
        5.5,
        5.1,
        5.6,
        5.2,
        5.6,
        5.4,
        6
    ],
    weekData: [
        NumberInt("55"),
        NumberInt("46"),
        NumberInt("64"),
        NumberInt("70"),
        NumberInt("63"),
        NumberInt("65"),
        NumberInt("36")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("104"),
    currentStepRate: NumberInt("101"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-05-13T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-05-13T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-13T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:46:54.455Z"),
    updateTime: ISODate("2025-05-13T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5d6"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-11T10:46:54.455Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("71"),
        NumberInt("130"),
        NumberInt("154"),
        NumberInt("130"),
        NumberInt("117"),
        NumberInt("79"),
        NumberInt("102"),
        NumberInt("141"),
        NumberInt("67"),
        NumberInt("147")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("126"),
        NumberInt("94"),
        NumberInt("98"),
        NumberInt("111"),
        NumberInt("94"),
        NumberInt("112"),
        NumberInt("121"),
        NumberInt("114"),
        NumberInt("103")
    ],
    paceData: [
        5.7,
        5.6,
        5.4,
        5.5,
        5.1,
        5,
        5.9,
        5.1,
        5.7,
        5.3
    ],
    weekData: [
        NumberInt("50"),
        NumberInt("85"),
        NumberInt("73"),
        NumberInt("33"),
        NumberInt("32"),
        NumberInt("68"),
        NumberInt("71")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("147"),
    currentStepRate: NumberInt("103"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("147"),
            timestamp: ISODate("2025-05-11T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-05-11T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-11T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:46:54.455Z"),
    updateTime: ISODate("2025-05-11T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5d7"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-10T10:46:54.455Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("116"),
        NumberInt("142"),
        NumberInt("75"),
        NumberInt("130"),
        NumberInt("110"),
        NumberInt("121"),
        NumberInt("125"),
        NumberInt("146"),
        NumberInt("93"),
        NumberInt("81")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("125"),
        NumberInt("130"),
        NumberInt("104"),
        NumberInt("105"),
        NumberInt("96"),
        NumberInt("99"),
        NumberInt("130"),
        NumberInt("129"),
        NumberInt("98")
    ],
    paceData: [
        5.6,
        5.1,
        5.4,
        5.8,
        5.5,
        5.7,
        5.9,
        5.3,
        5.6,
        5.6
    ],
    weekData: [
        NumberInt("73"),
        NumberInt("46"),
        NumberInt("66"),
        NumberInt("68"),
        NumberInt("66"),
        NumberInt("89"),
        NumberInt("37")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("81"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("81"),
            timestamp: ISODate("2025-05-10T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-10T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-10T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:46:54.455Z"),
    updateTime: ISODate("2025-05-10T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5d8"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-09T10:46:54.455Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("96"),
        NumberInt("87"),
        NumberInt("141"),
        NumberInt("152"),
        NumberInt("132"),
        NumberInt("155"),
        NumberInt("86"),
        NumberInt("80"),
        NumberInt("125"),
        NumberInt("131")
    ],
    stepRateData: [
        NumberInt("106"),
        NumberInt("106"),
        NumberInt("102"),
        NumberInt("114"),
        NumberInt("115"),
        NumberInt("105"),
        NumberInt("128"),
        NumberInt("110"),
        NumberInt("102"),
        NumberInt("117")
    ],
    paceData: [
        5.4,
        5.5,
        5.2,
        5.2,
        5.2,
        5.9,
        5.1,
        5.6,
        5.8,
        5.8
    ],
    weekData: [
        NumberInt("66"),
        NumberInt("88"),
        NumberInt("66"),
        NumberInt("90"),
        NumberInt("70"),
        NumberInt("79"),
        NumberInt("47")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("131"),
    currentStepRate: NumberInt("117"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("131"),
            timestamp: ISODate("2025-05-09T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-09T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-09T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:46:54.455Z"),
    updateTime: ISODate("2025-05-09T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5d9"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-08T10:46:54.455Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("101"),
        NumberInt("140"),
        NumberInt("76"),
        NumberInt("143"),
        NumberInt("130"),
        NumberInt("147"),
        NumberInt("133"),
        NumberInt("121"),
        NumberInt("108"),
        NumberInt("69")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("113"),
        NumberInt("122"),
        NumberInt("115"),
        NumberInt("114"),
        NumberInt("108"),
        NumberInt("98"),
        NumberInt("99"),
        NumberInt("99"),
        NumberInt("128")
    ],
    paceData: [
        5.9,
        5.2,
        5.6,
        5.6,
        5.7,
        5.2,
        5.8,
        5.8,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("79"),
        NumberInt("60"),
        NumberInt("63"),
        NumberInt("87"),
        NumberInt("32"),
        NumberInt("39"),
        NumberInt("33")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("69"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("69"),
            timestamp: ISODate("2025-05-08T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-08T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-08T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:46:54.455Z"),
    updateTime: ISODate("2025-05-08T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5da"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-07T10:46:54.455Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("145"),
        NumberInt("116"),
        NumberInt("137"),
        NumberInt("127"),
        NumberInt("64"),
        NumberInt("113"),
        NumberInt("114"),
        NumberInt("77"),
        NumberInt("155"),
        NumberInt("152")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("117"),
        NumberInt("111"),
        NumberInt("93"),
        NumberInt("93"),
        NumberInt("105"),
        NumberInt("120"),
        NumberInt("106"),
        NumberInt("102"),
        NumberInt("108")
    ],
    paceData: [
        5.8,
        5.7,
        6,
        5.5,
        5.4,
        5.8,
        5.2,
        5.4,
        5.9,
        5.5
    ],
    weekData: [
        NumberInt("60"),
        NumberInt("37"),
        NumberInt("47"),
        NumberInt("62"),
        NumberInt("51"),
        NumberInt("35"),
        NumberInt("38")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("152"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("152"),
            timestamp: ISODate("2025-05-07T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-07T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-07T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:46:54.455Z"),
    updateTime: ISODate("2025-05-07T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5db"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-06T10:46:54.455Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("114"),
        NumberInt("110"),
        NumberInt("68"),
        NumberInt("113"),
        NumberInt("134"),
        NumberInt("63"),
        NumberInt("158"),
        NumberInt("118"),
        NumberInt("138"),
        NumberInt("126")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("108"),
        NumberInt("109"),
        NumberInt("95"),
        NumberInt("114"),
        NumberInt("121"),
        NumberInt("106"),
        NumberInt("95"),
        NumberInt("123"),
        NumberInt("113")
    ],
    paceData: [
        5.2,
        5.3,
        5.6,
        5.5,
        5.3,
        5.6,
        5.6,
        5.5,
        5.9,
        5.6
    ],
    weekData: [
        NumberInt("69"),
        NumberInt("50"),
        NumberInt("74"),
        NumberInt("62"),
        NumberInt("39"),
        NumberInt("84"),
        NumberInt("76")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("61"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("126"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("126"),
            timestamp: ISODate("2025-05-06T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-06T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-06T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:46:54.455Z"),
    updateTime: ISODate("2025-05-06T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5dc"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-05T10:46:54.455Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("81"),
        NumberInt("145"),
        NumberInt("123"),
        NumberInt("86"),
        NumberInt("87"),
        NumberInt("105"),
        NumberInt("146"),
        NumberInt("96"),
        NumberInt("128"),
        NumberInt("124")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("100"),
        NumberInt("105"),
        NumberInt("104"),
        NumberInt("110"),
        NumberInt("113"),
        NumberInt("116"),
        NumberInt("113"),
        NumberInt("124"),
        NumberInt("104")
    ],
    paceData: [
        5.4,
        5.9,
        5.7,
        5.1,
        5.8,
        6,
        5.6,
        5.2,
        5.6,
        5.6
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("90"),
        NumberInt("68"),
        NumberInt("48"),
        NumberInt("43"),
        NumberInt("70"),
        NumberInt("60")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("124"),
    currentStepRate: NumberInt("104"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-05T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-05-05T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-05T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:46:54.455Z"),
    updateTime: ISODate("2025-05-05T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5dd"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-04T10:46:54.455Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("88"),
        NumberInt("90"),
        NumberInt("153"),
        NumberInt("141"),
        NumberInt("73"),
        NumberInt("113"),
        NumberInt("148"),
        NumberInt("95"),
        NumberInt("148"),
        NumberInt("91")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("130"),
        NumberInt("117"),
        NumberInt("95"),
        NumberInt("115"),
        NumberInt("98"),
        NumberInt("99"),
        NumberInt("118"),
        NumberInt("125"),
        NumberInt("118")
    ],
    paceData: [
        5.4,
        5.7,
        5,
        5.3,
        5.3,
        5.6,
        5.3,
        5.4,
        5.3,
        5.4
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("38"),
        NumberInt("81"),
        NumberInt("51"),
        NumberInt("73"),
        NumberInt("44"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("91"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-04T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-05-04T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-04T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:46:54.455Z"),
    updateTime: ISODate("2025-05-04T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5de"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-02T10:46:54.455Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("68"),
        NumberInt("90"),
        NumberInt("91"),
        NumberInt("130"),
        NumberInt("147"),
        NumberInt("152"),
        NumberInt("159"),
        NumberInt("152"),
        NumberInt("110"),
        NumberInt("119")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("97"),
        NumberInt("93"),
        NumberInt("124"),
        NumberInt("125"),
        NumberInt("121"),
        NumberInt("126"),
        NumberInt("92"),
        NumberInt("116"),
        NumberInt("98")
    ],
    paceData: [
        5.4,
        5.2,
        6,
        5.9,
        5.8,
        5.1,
        5.2,
        5.9,
        5.7,
        6
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("71"),
        NumberInt("72"),
        NumberInt("85"),
        NumberInt("63"),
        NumberInt("61"),
        NumberInt("73")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("63"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("119"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-02T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-02T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-02T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:46:54.455Z"),
    updateTime: ISODate("2025-05-02T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5df"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-01T10:46:54.455Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("96"),
        NumberInt("153"),
        NumberInt("156"),
        NumberInt("102"),
        NumberInt("142"),
        NumberInt("78"),
        NumberInt("121"),
        NumberInt("130"),
        NumberInt("157"),
        NumberInt("95")
    ],
    stepRateData: [
        NumberInt("118"),
        NumberInt("118"),
        NumberInt("123"),
        NumberInt("106"),
        NumberInt("113"),
        NumberInt("122"),
        NumberInt("106"),
        NumberInt("95"),
        NumberInt("97"),
        NumberInt("126")
    ],
    paceData: [
        5.2,
        5.7,
        5.2,
        5.9,
        5.3,
        5.1,
        5.7,
        5.9,
        5.8,
        5.7
    ],
    weekData: [
        NumberInt("63"),
        NumberInt("63"),
        NumberInt("72"),
        NumberInt("89"),
        NumberInt("43"),
        NumberInt("64"),
        NumberInt("43")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("95"),
    currentStepRate: NumberInt("126"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-01T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("126"),
            timestamp: ISODate("2025-05-01T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-01T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:46:54.455Z"),
    updateTime: ISODate("2025-05-01T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5e0"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-30T10:46:54.455Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("106"),
        NumberInt("87"),
        NumberInt("143"),
        NumberInt("106"),
        NumberInt("86"),
        NumberInt("129"),
        NumberInt("147"),
        NumberInt("125"),
        NumberInt("79"),
        NumberInt("151")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("97"),
        NumberInt("124"),
        NumberInt("126"),
        NumberInt("104"),
        NumberInt("124"),
        NumberInt("112"),
        NumberInt("99"),
        NumberInt("95"),
        NumberInt("105")
    ],
    paceData: [
        5.3,
        6,
        5.8,
        5.6,
        5.9,
        5.2,
        5.1,
        5.5,
        5.7,
        5
    ],
    weekData: [
        NumberInt("33"),
        NumberInt("33"),
        NumberInt("52"),
        NumberInt("83"),
        NumberInt("71"),
        NumberInt("31"),
        NumberInt("51")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("151"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("151"),
            timestamp: ISODate("2025-04-30T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-04-30T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-30T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:46:54.455Z"),
    updateTime: ISODate("2025-04-30T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5e1"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-29T10:46:54.455Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("114"),
        NumberInt("95"),
        NumberInt("95"),
        NumberInt("148"),
        NumberInt("125"),
        NumberInt("129"),
        NumberInt("101"),
        NumberInt("97"),
        NumberInt("116"),
        NumberInt("106")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("111"),
        NumberInt("103"),
        NumberInt("100"),
        NumberInt("116"),
        NumberInt("109"),
        NumberInt("114"),
        NumberInt("100"),
        NumberInt("124"),
        NumberInt("90")
    ],
    paceData: [
        5.8,
        5.7,
        5.2,
        5.8,
        5.6,
        5.5,
        6,
        5.9,
        6,
        5.1
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("87"),
        NumberInt("64"),
        NumberInt("57"),
        NumberInt("70"),
        NumberInt("43"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("106"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-04-29T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-04-29T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-29T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:46:54.455Z"),
    updateTime: ISODate("2025-04-29T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5e2"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-28T10:46:54.455Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("74"),
        NumberInt("78"),
        NumberInt("148"),
        NumberInt("108"),
        NumberInt("140"),
        NumberInt("160"),
        NumberInt("82"),
        NumberInt("123"),
        NumberInt("112"),
        NumberInt("94")
    ],
    stepRateData: [
        NumberInt("98"),
        NumberInt("113"),
        NumberInt("101"),
        NumberInt("119"),
        NumberInt("104"),
        NumberInt("107"),
        NumberInt("126"),
        NumberInt("111"),
        NumberInt("118"),
        NumberInt("98")
    ],
    paceData: [
        5.7,
        5.2,
        5.8,
        5.5,
        5.8,
        5.6,
        5.1,
        5.4,
        5.6,
        5
    ],
    weekData: [
        NumberInt("40"),
        NumberInt("38"),
        NumberInt("62"),
        NumberInt("65"),
        NumberInt("37"),
        NumberInt("67"),
        NumberInt("35")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("94"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-04-28T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-28T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-28T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:46:54.455Z"),
    updateTime: ISODate("2025-04-28T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5e3"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-27T10:46:54.455Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("103"),
        NumberInt("111"),
        NumberInt("157"),
        NumberInt("91"),
        NumberInt("111"),
        NumberInt("119"),
        NumberInt("64"),
        NumberInt("150"),
        NumberInt("75"),
        NumberInt("107")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("90"),
        NumberInt("109"),
        NumberInt("99"),
        NumberInt("91"),
        NumberInt("110"),
        NumberInt("96"),
        NumberInt("114"),
        NumberInt("94"),
        NumberInt("93")
    ],
    paceData: [
        5.1,
        5.1,
        5.8,
        5.6,
        5.8,
        6,
        5.7,
        5.3,
        5.3,
        5.7
    ],
    weekData: [
        NumberInt("75"),
        NumberInt("86"),
        NumberInt("32"),
        NumberInt("30"),
        NumberInt("38"),
        NumberInt("59"),
        NumberInt("63")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("107"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-27T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-04-27T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-27T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-27T10:46:54.455Z"),
    updateTime: ISODate("2025-04-27T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5e4"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-25T10:46:54.455Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("158"),
        NumberInt("121"),
        NumberInt("105"),
        NumberInt("86"),
        NumberInt("71"),
        NumberInt("116"),
        NumberInt("121"),
        NumberInt("77"),
        NumberInt("65"),
        NumberInt("111")
    ],
    stepRateData: [
        NumberInt("99"),
        NumberInt("96"),
        NumberInt("128"),
        NumberInt("121"),
        NumberInt("109"),
        NumberInt("118"),
        NumberInt("115"),
        NumberInt("110"),
        NumberInt("111"),
        NumberInt("98")
    ],
    paceData: [
        5,
        5.6,
        5.1,
        5.8,
        5.4,
        5.1,
        5.7,
        5.7,
        5.5,
        5.8
    ],
    weekData: [
        NumberInt("34"),
        NumberInt("84"),
        NumberInt("48"),
        NumberInt("43"),
        NumberInt("46"),
        NumberInt("48"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("111"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("111"),
            timestamp: ISODate("2025-04-25T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-25T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-25T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:46:54.455Z"),
    updateTime: ISODate("2025-04-25T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5e5"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-24T10:46:54.455Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("63"),
        NumberInt("134"),
        NumberInt("101"),
        NumberInt("63"),
        NumberInt("118"),
        NumberInt("94"),
        NumberInt("111"),
        NumberInt("100"),
        NumberInt("96"),
        NumberInt("143")
    ],
    stepRateData: [
        NumberInt("127"),
        NumberInt("107"),
        NumberInt("97"),
        NumberInt("93"),
        NumberInt("123"),
        NumberInt("112"),
        NumberInt("118"),
        NumberInt("91"),
        NumberInt("109"),
        NumberInt("105")
    ],
    paceData: [
        5.4,
        5.5,
        5.3,
        5.3,
        5.1,
        5.9,
        5,
        5.6,
        5.9,
        5.9
    ],
    weekData: [
        NumberInt("35"),
        NumberInt("90"),
        NumberInt("36"),
        NumberInt("31"),
        NumberInt("43"),
        NumberInt("46"),
        NumberInt("87")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("143"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("143"),
            timestamp: ISODate("2025-04-24T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-04-24T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-24T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:46:54.455Z"),
    updateTime: ISODate("2025-04-24T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5e6"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-23T10:46:54.455Z"),
    date: "2025-04-23",
    heartRateData: [
        NumberInt("90"),
        NumberInt("144"),
        NumberInt("132"),
        NumberInt("113"),
        NumberInt("66"),
        NumberInt("93"),
        NumberInt("105"),
        NumberInt("123"),
        NumberInt("141"),
        NumberInt("125")
    ],
    stepRateData: [
        NumberInt("114"),
        NumberInt("127"),
        NumberInt("130"),
        NumberInt("98"),
        NumberInt("96"),
        NumberInt("105"),
        NumberInt("96"),
        NumberInt("124"),
        NumberInt("109"),
        NumberInt("111")
    ],
    paceData: [
        5.1,
        5.6,
        5.6,
        5.2,
        5.4,
        5.2,
        5.9,
        5,
        5.2,
        5.5
    ],
    weekData: [
        NumberInt("57"),
        NumberInt("81"),
        NumberInt("40"),
        NumberInt("42"),
        NumberInt("87"),
        NumberInt("69"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("125"),
    currentStepRate: NumberInt("111"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-04-23T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("111"),
            timestamp: ISODate("2025-04-23T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-23T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-23T10:46:54.455Z"),
    updateTime: ISODate("2025-04-23T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5e7"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-21T10:46:54.455Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("73"),
        NumberInt("123"),
        NumberInt("124"),
        NumberInt("83"),
        NumberInt("98"),
        NumberInt("102"),
        NumberInt("76"),
        NumberInt("60"),
        NumberInt("115"),
        NumberInt("136")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("101"),
        NumberInt("119"),
        NumberInt("123"),
        NumberInt("104"),
        NumberInt("130"),
        NumberInt("112"),
        NumberInt("95"),
        NumberInt("94"),
        NumberInt("113")
    ],
    paceData: [
        5.6,
        6,
        5.1,
        5.3,
        6,
        5.1,
        5.8,
        5.2,
        5.5,
        6
    ],
    weekData: [
        NumberInt("38"),
        NumberInt("43"),
        NumberInt("85"),
        NumberInt("62"),
        NumberInt("84"),
        NumberInt("60"),
        NumberInt("57")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("136"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("136"),
            timestamp: ISODate("2025-04-21T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-04-21T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-21T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:46:54.455Z"),
    updateTime: ISODate("2025-04-21T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5e8"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-20T10:46:54.455Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("85"),
        NumberInt("90"),
        NumberInt("149"),
        NumberInt("126"),
        NumberInt("92"),
        NumberInt("115"),
        NumberInt("160"),
        NumberInt("108"),
        NumberInt("126"),
        NumberInt("79")
    ],
    stepRateData: [
        NumberInt("128"),
        NumberInt("102"),
        NumberInt("99"),
        NumberInt("110"),
        NumberInt("124"),
        NumberInt("106"),
        NumberInt("123"),
        NumberInt("101"),
        NumberInt("95"),
        NumberInt("108")
    ],
    paceData: [
        5.3,
        5.5,
        5.1,
        5.3,
        5.4,
        5.6,
        5.2,
        5.9,
        5.7,
        5.3
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("67"),
        NumberInt("77"),
        NumberInt("67"),
        NumberInt("80"),
        NumberInt("42"),
        NumberInt("73")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("79"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("79"),
            timestamp: ISODate("2025-05-20T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-20T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-20T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-20T10:46:54.455Z"),
    updateTime: ISODate("2025-05-20T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5e9"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-19T10:46:54.455Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("123"),
        NumberInt("97"),
        NumberInt("132"),
        NumberInt("147"),
        NumberInt("138"),
        NumberInt("79"),
        NumberInt("107"),
        NumberInt("121"),
        NumberInt("119"),
        NumberInt("112")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("113"),
        NumberInt("124"),
        NumberInt("121"),
        NumberInt("114"),
        NumberInt("92"),
        NumberInt("102"),
        NumberInt("122"),
        NumberInt("100"),
        NumberInt("120")
    ],
    paceData: [
        5.3,
        5.8,
        5.4,
        5.9,
        5.7,
        5.2,
        5.7,
        5.3,
        5.9,
        5.6
    ],
    weekData: [
        NumberInt("33"),
        NumberInt("55"),
        NumberInt("59"),
        NumberInt("60"),
        NumberInt("46"),
        NumberInt("69"),
        NumberInt("41")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("90"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("112"),
    currentStepRate: NumberInt("120"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-19T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-05-19T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-19T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:46:54.455Z"),
    updateTime: ISODate("2025-05-19T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5ea"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-16T10:46:54.455Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("96"),
        NumberInt("111"),
        NumberInt("80"),
        NumberInt("114"),
        NumberInt("131"),
        NumberInt("77"),
        NumberInt("151"),
        NumberInt("69"),
        NumberInt("158"),
        NumberInt("66")
    ],
    stepRateData: [
        NumberInt("114"),
        NumberInt("115"),
        NumberInt("109"),
        NumberInt("96"),
        NumberInt("102"),
        NumberInt("110"),
        NumberInt("105"),
        NumberInt("92"),
        NumberInt("94"),
        NumberInt("125")
    ],
    paceData: [
        5.8,
        5.2,
        5.4,
        5.2,
        5.8,
        5.6,
        5.2,
        5.9,
        5,
        5.9
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("54"),
        NumberInt("43"),
        NumberInt("40"),
        NumberInt("83"),
        NumberInt("80"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("90"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("66"),
    currentStepRate: NumberInt("125"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("66"),
            timestamp: ISODate("2025-05-16T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-05-16T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-16T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:46:54.455Z"),
    updateTime: ISODate("2025-05-16T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5eb"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-15T10:46:54.455Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("149"),
        NumberInt("144"),
        NumberInt("83"),
        NumberInt("99"),
        NumberInt("90"),
        NumberInt("142"),
        NumberInt("64"),
        NumberInt("90"),
        NumberInt("160"),
        NumberInt("160")
    ],
    stepRateData: [
        NumberInt("116"),
        NumberInt("97"),
        NumberInt("90"),
        NumberInt("103"),
        NumberInt("116"),
        NumberInt("107"),
        NumberInt("111"),
        NumberInt("121"),
        NumberInt("108"),
        NumberInt("123")
    ],
    paceData: [
        5.4,
        5.4,
        5.8,
        5.2,
        5.6,
        5.6,
        5.3,
        5.8,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("86"),
        NumberInt("58"),
        NumberInt("60"),
        NumberInt("67"),
        NumberInt("79"),
        NumberInt("56"),
        NumberInt("83")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("93"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("160"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("160"),
            timestamp: ISODate("2025-05-15T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-15T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-15T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:46:54.455Z"),
    updateTime: ISODate("2025-05-15T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5ec"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-14T10:46:54.455Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("116"),
        NumberInt("139"),
        NumberInt("119"),
        NumberInt("120"),
        NumberInt("137"),
        NumberInt("160"),
        NumberInt("116"),
        NumberInt("86"),
        NumberInt("92"),
        NumberInt("117")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("106"),
        NumberInt("96"),
        NumberInt("102"),
        NumberInt("99"),
        NumberInt("106"),
        NumberInt("124"),
        NumberInt("101"),
        NumberInt("99"),
        NumberInt("118")
    ],
    paceData: [
        5.9,
        5.2,
        5.1,
        5.9,
        5.7,
        5.3,
        5.6,
        5.9,
        5.1,
        5.3
    ],
    weekData: [
        NumberInt("46"),
        NumberInt("83"),
        NumberInt("33"),
        NumberInt("72"),
        NumberInt("79"),
        NumberInt("64"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("93"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("117"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-14T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-05-14T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-14T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:46:54.455Z"),
    updateTime: ISODate("2025-05-14T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5ed"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-12T10:46:54.455Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("110"),
        NumberInt("106"),
        NumberInt("124"),
        NumberInt("74"),
        NumberInt("118"),
        NumberInt("98"),
        NumberInt("104"),
        NumberInt("90"),
        NumberInt("122"),
        NumberInt("139")
    ],
    stepRateData: [
        NumberInt("122"),
        NumberInt("119"),
        NumberInt("124"),
        NumberInt("94"),
        NumberInt("104"),
        NumberInt("128"),
        NumberInt("103"),
        NumberInt("120"),
        NumberInt("108"),
        NumberInt("93")
    ],
    paceData: [
        5.5,
        5.3,
        5.2,
        5.4,
        5.9,
        5.9,
        5.3,
        5.1,
        5.8,
        5.6
    ],
    weekData: [
        NumberInt("46"),
        NumberInt("86"),
        NumberInt("55"),
        NumberInt("74"),
        NumberInt("78"),
        NumberInt("52"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("139"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("139"),
            timestamp: ISODate("2025-05-12T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-12T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-12T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:46:54.455Z"),
    updateTime: ISODate("2025-05-12T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5ee"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-11T10:46:54.455Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("147"),
        NumberInt("113"),
        NumberInt("157"),
        NumberInt("151"),
        NumberInt("97"),
        NumberInt("137"),
        NumberInt("101"),
        NumberInt("128"),
        NumberInt("89"),
        NumberInt("119")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("126"),
        NumberInt("109"),
        NumberInt("111"),
        NumberInt("103"),
        NumberInt("105"),
        NumberInt("95"),
        NumberInt("101"),
        NumberInt("90"),
        NumberInt("91")
    ],
    paceData: [
        5.5,
        5.7,
        5.9,
        5.2,
        5.9,
        5.2,
        5.5,
        5.1,
        5.2,
        5.2
    ],
    weekData: [
        NumberInt("75"),
        NumberInt("32"),
        NumberInt("49"),
        NumberInt("51"),
        NumberInt("54"),
        NumberInt("65"),
        NumberInt("34")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("119"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-11T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-11T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-11T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:46:54.455Z"),
    updateTime: ISODate("2025-05-11T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5ef"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-10T10:46:54.455Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("72"),
        NumberInt("139"),
        NumberInt("153"),
        NumberInt("123"),
        NumberInt("61"),
        NumberInt("65"),
        NumberInt("118"),
        NumberInt("148"),
        NumberInt("110"),
        NumberInt("84")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("98"),
        NumberInt("121"),
        NumberInt("100"),
        NumberInt("101"),
        NumberInt("107"),
        NumberInt("128"),
        NumberInt("96"),
        NumberInt("118"),
        NumberInt("97")
    ],
    paceData: [
        5.1,
        5.5,
        5.3,
        5.8,
        5.4,
        5.9,
        5.4,
        5.4,
        5.7,
        5.1
    ],
    weekData: [
        NumberInt("88"),
        NumberInt("56"),
        NumberInt("52"),
        NumberInt("51"),
        NumberInt("32"),
        NumberInt("43"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("84"),
    currentStepRate: NumberInt("97"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("84"),
            timestamp: ISODate("2025-05-10T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-10T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-10T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:46:54.455Z"),
    updateTime: ISODate("2025-05-10T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5f0"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-09T10:46:54.455Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("75"),
        NumberInt("104"),
        NumberInt("125"),
        NumberInt("142"),
        NumberInt("78"),
        NumberInt("142"),
        NumberInt("97"),
        NumberInt("123"),
        NumberInt("141"),
        NumberInt("91")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("103"),
        NumberInt("119"),
        NumberInt("93"),
        NumberInt("94"),
        NumberInt("98"),
        NumberInt("91"),
        NumberInt("113"),
        NumberInt("90"),
        NumberInt("121")
    ],
    paceData: [
        5.2,
        5.2,
        5.5,
        5.5,
        5.3,
        5.2,
        5,
        5.2,
        5.2,
        6
    ],
    weekData: [
        NumberInt("73"),
        NumberInt("70"),
        NumberInt("40"),
        NumberInt("37"),
        NumberInt("58"),
        NumberInt("36"),
        NumberInt("70")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("91"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-09T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-09T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-09T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:46:54.455Z"),
    updateTime: ISODate("2025-05-09T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5f1"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-07T10:46:54.455Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("109"),
        NumberInt("66"),
        NumberInt("64"),
        NumberInt("105"),
        NumberInt("131"),
        NumberInt("133"),
        NumberInt("87"),
        NumberInt("139"),
        NumberInt("139"),
        NumberInt("141")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("126"),
        NumberInt("94"),
        NumberInt("120"),
        NumberInt("117"),
        NumberInt("125"),
        NumberInt("90"),
        NumberInt("107"),
        NumberInt("128"),
        NumberInt("130")
    ],
    paceData: [
        5.2,
        5,
        5.3,
        5.5,
        5.3,
        5.4,
        5.7,
        5.2,
        5.4,
        5.9
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("39"),
        NumberInt("52"),
        NumberInt("77"),
        NumberInt("68"),
        NumberInt("34"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("141"),
    currentStepRate: NumberInt("130"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("141"),
            timestamp: ISODate("2025-05-07T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("130"),
            timestamp: ISODate("2025-05-07T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-07T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:46:54.455Z"),
    updateTime: ISODate("2025-05-07T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5f2"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-06T10:46:54.455Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("138"),
        NumberInt("100"),
        NumberInt("130"),
        NumberInt("137"),
        NumberInt("95"),
        NumberInt("138"),
        NumberInt("83"),
        NumberInt("157"),
        NumberInt("76"),
        NumberInt("144")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("94"),
        NumberInt("124"),
        NumberInt("110"),
        NumberInt("114"),
        NumberInt("93"),
        NumberInt("129"),
        NumberInt("106"),
        NumberInt("106"),
        NumberInt("98")
    ],
    paceData: [
        5.5,
        5.9,
        5.9,
        5.6,
        5.7,
        5.7,
        5.2,
        5.4,
        5.3,
        5.4
    ],
    weekData: [
        NumberInt("48"),
        NumberInt("78"),
        NumberInt("50"),
        NumberInt("35"),
        NumberInt("77"),
        NumberInt("50"),
        NumberInt("79")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("144"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("144"),
            timestamp: ISODate("2025-05-06T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-06T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-06T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:46:54.455Z"),
    updateTime: ISODate("2025-05-06T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5f3"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-05T10:46:54.455Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("134"),
        NumberInt("79"),
        NumberInt("153"),
        NumberInt("66"),
        NumberInt("72"),
        NumberInt("143"),
        NumberInt("84"),
        NumberInt("78"),
        NumberInt("93"),
        NumberInt("75")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("99"),
        NumberInt("114"),
        NumberInt("106"),
        NumberInt("124"),
        NumberInt("103"),
        NumberInt("106"),
        NumberInt("101"),
        NumberInt("99"),
        NumberInt("98")
    ],
    paceData: [
        5.2,
        5.8,
        5.9,
        5.4,
        5.4,
        5.5,
        5.4,
        5.7,
        5.6,
        5.2
    ],
    weekData: [
        NumberInt("73"),
        NumberInt("35"),
        NumberInt("35"),
        NumberInt("69"),
        NumberInt("39"),
        NumberInt("87"),
        NumberInt("79")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("75"),
    currentStepRate: NumberInt("98"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("75"),
            timestamp: ISODate("2025-05-05T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-05T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-05T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-05T10:46:54.455Z"),
    updateTime: ISODate("2025-05-05T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5f4"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-04T10:46:54.455Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("157"),
        NumberInt("143"),
        NumberInt("139"),
        NumberInt("60"),
        NumberInt("61"),
        NumberInt("115"),
        NumberInt("90"),
        NumberInt("126"),
        NumberInt("133"),
        NumberInt("135")
    ],
    stepRateData: [
        NumberInt("98"),
        NumberInt("116"),
        NumberInt("115"),
        NumberInt("96"),
        NumberInt("121"),
        NumberInt("110"),
        NumberInt("101"),
        NumberInt("118"),
        NumberInt("126"),
        NumberInt("91")
    ],
    paceData: [
        5.4,
        5.4,
        5.9,
        5,
        5.8,
        5.5,
        5.9,
        5.2,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("47"),
        NumberInt("87"),
        NumberInt("53"),
        NumberInt("81"),
        NumberInt("60"),
        NumberInt("66"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("135"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("135"),
            timestamp: ISODate("2025-05-04T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-04T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-04T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:46:54.455Z"),
    updateTime: ISODate("2025-05-04T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5f5"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-03T10:46:54.455Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("112"),
        NumberInt("124"),
        NumberInt("110"),
        NumberInt("146"),
        NumberInt("66"),
        NumberInt("98"),
        NumberInt("157"),
        NumberInt("66"),
        NumberInt("69"),
        NumberInt("147")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("128"),
        NumberInt("98"),
        NumberInt("92"),
        NumberInt("120"),
        NumberInt("108"),
        NumberInt("94"),
        NumberInt("95"),
        NumberInt("104"),
        NumberInt("104")
    ],
    paceData: [
        5.5,
        5.2,
        5.9,
        5,
        5.3,
        5.5,
        5.7,
        5.9,
        5.1,
        5.8
    ],
    weekData: [
        NumberInt("88"),
        NumberInt("81"),
        NumberInt("32"),
        NumberInt("41"),
        NumberInt("89"),
        NumberInt("54"),
        NumberInt("42")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("65"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("147"),
    currentStepRate: NumberInt("104"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("147"),
            timestamp: ISODate("2025-05-03T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-05-03T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-03T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:46:54.455Z"),
    updateTime: ISODate("2025-05-03T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5f6"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-02T10:46:54.455Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("96"),
        NumberInt("146"),
        NumberInt("105"),
        NumberInt("86"),
        NumberInt("99"),
        NumberInt("122"),
        NumberInt("109"),
        NumberInt("134"),
        NumberInt("79"),
        NumberInt("127")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("129"),
        NumberInt("124"),
        NumberInt("119"),
        NumberInt("92"),
        NumberInt("91"),
        NumberInt("128"),
        NumberInt("109"),
        NumberInt("127"),
        NumberInt("92")
    ],
    paceData: [
        5.6,
        5.9,
        5,
        5.8,
        6,
        5.1,
        5,
        6,
        5.9,
        5.1
    ],
    weekData: [
        NumberInt("67"),
        NumberInt("83"),
        NumberInt("65"),
        NumberInt("77"),
        NumberInt("88"),
        NumberInt("88"),
        NumberInt("83")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("127"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-02T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-05-02T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-02T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:46:54.455Z"),
    updateTime: ISODate("2025-05-02T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5f7"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-01T10:46:54.455Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("143"),
        NumberInt("82"),
        NumberInt("99"),
        NumberInt("89"),
        NumberInt("90"),
        NumberInt("82"),
        NumberInt("95"),
        NumberInt("89"),
        NumberInt("87"),
        NumberInt("69")
    ],
    stepRateData: [
        NumberInt("116"),
        NumberInt("123"),
        NumberInt("119"),
        NumberInt("95"),
        NumberInt("101"),
        NumberInt("102"),
        NumberInt("111"),
        NumberInt("109"),
        NumberInt("115"),
        NumberInt("107")
    ],
    paceData: [
        5.2,
        5.3,
        5.8,
        5.4,
        5.4,
        5.4,
        6,
        5.6,
        5,
        5.6
    ],
    weekData: [
        NumberInt("72"),
        NumberInt("35"),
        NumberInt("42"),
        NumberInt("69"),
        NumberInt("65"),
        NumberInt("76"),
        NumberInt("35")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("65"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("69"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("69"),
            timestamp: ISODate("2025-05-01T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-01T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-01T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:46:54.455Z"),
    updateTime: ISODate("2025-05-01T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5f8"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-30T10:46:54.455Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("75"),
        NumberInt("63"),
        NumberInt("112"),
        NumberInt("103"),
        NumberInt("134"),
        NumberInt("86"),
        NumberInt("78"),
        NumberInt("137"),
        NumberInt("134"),
        NumberInt("121")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("113"),
        NumberInt("91"),
        NumberInt("116"),
        NumberInt("119"),
        NumberInt("118"),
        NumberInt("96"),
        NumberInt("112"),
        NumberInt("125"),
        NumberInt("123")
    ],
    paceData: [
        5.4,
        5.8,
        5.9,
        5.2,
        5.2,
        5.1,
        5,
        5.9,
        5.9,
        5.3
    ],
    weekData: [
        NumberInt("55"),
        NumberInt("87"),
        NumberInt("41"),
        NumberInt("47"),
        NumberInt("83"),
        NumberInt("52"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("121"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-04-30T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-04-30T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-30T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:46:54.455Z"),
    updateTime: ISODate("2025-04-30T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5f9"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-29T10:46:54.455Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("72"),
        NumberInt("106"),
        NumberInt("69"),
        NumberInt("121"),
        NumberInt("80"),
        NumberInt("70"),
        NumberInt("99"),
        NumberInt("88"),
        NumberInt("142"),
        NumberInt("104")
    ],
    stepRateData: [
        NumberInt("103"),
        NumberInt("100"),
        NumberInt("98"),
        NumberInt("123"),
        NumberInt("120"),
        NumberInt("93"),
        NumberInt("103"),
        NumberInt("129"),
        NumberInt("100"),
        NumberInt("130")
    ],
    paceData: [
        5.2,
        5.6,
        5,
        5.5,
        5.8,
        5.4,
        5.6,
        5.6,
        5.8,
        5.9
    ],
    weekData: [
        NumberInt("88"),
        NumberInt("66"),
        NumberInt("74"),
        NumberInt("32"),
        NumberInt("30"),
        NumberInt("48"),
        NumberInt("31")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("104"),
    currentStepRate: NumberInt("130"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-04-29T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("130"),
            timestamp: ISODate("2025-04-29T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-29T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:46:54.455Z"),
    updateTime: ISODate("2025-04-29T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5fa"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-28T10:46:54.455Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("113"),
        NumberInt("97"),
        NumberInt("125"),
        NumberInt("85"),
        NumberInt("101"),
        NumberInt("91"),
        NumberInt("70"),
        NumberInt("110"),
        NumberInt("150"),
        NumberInt("75")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("96"),
        NumberInt("124"),
        NumberInt("126"),
        NumberInt("121"),
        NumberInt("95"),
        NumberInt("124"),
        NumberInt("105"),
        NumberInt("92"),
        NumberInt("110")
    ],
    paceData: [
        5.7,
        5.6,
        5.2,
        5,
        5.2,
        5.7,
        5.7,
        5.2,
        5.3,
        5.7
    ],
    weekData: [
        NumberInt("89"),
        NumberInt("67"),
        NumberInt("81"),
        NumberInt("40"),
        NumberInt("53"),
        NumberInt("80"),
        NumberInt("44")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("75"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("75"),
            timestamp: ISODate("2025-04-28T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-04-28T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-28T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:46:54.455Z"),
    updateTime: ISODate("2025-04-28T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5fb"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-26T10:46:54.455Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("115"),
        NumberInt("117"),
        NumberInt("129"),
        NumberInt("154"),
        NumberInt("147"),
        NumberInt("132"),
        NumberInt("64"),
        NumberInt("88"),
        NumberInt("74"),
        NumberInt("84")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("99"),
        NumberInt("110"),
        NumberInt("111"),
        NumberInt("128"),
        NumberInt("93"),
        NumberInt("116"),
        NumberInt("120"),
        NumberInt("130"),
        NumberInt("110")
    ],
    paceData: [
        5.4,
        5,
        5.5,
        5.8,
        5.6,
        5.2,
        5.5,
        5.8,
        5.3,
        5.6
    ],
    weekData: [
        NumberInt("76"),
        NumberInt("75"),
        NumberInt("77"),
        NumberInt("73"),
        NumberInt("71"),
        NumberInt("52"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("84"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("84"),
            timestamp: ISODate("2025-04-26T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-04-26T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-26T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:46:54.455Z"),
    updateTime: ISODate("2025-04-26T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5fc"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-25T10:46:54.455Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("69"),
        NumberInt("133"),
        NumberInt("62"),
        NumberInt("129"),
        NumberInt("81"),
        NumberInt("90"),
        NumberInt("132"),
        NumberInt("67"),
        NumberInt("78"),
        NumberInt("62")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("126"),
        NumberInt("129"),
        NumberInt("98"),
        NumberInt("103"),
        NumberInt("105"),
        NumberInt("108"),
        NumberInt("103"),
        NumberInt("94"),
        NumberInt("107")
    ],
    paceData: [
        6,
        5.8,
        5.5,
        5.9,
        5.6,
        5,
        6,
        5.2,
        5.1,
        5.5
    ],
    weekData: [
        NumberInt("64"),
        NumberInt("89"),
        NumberInt("85"),
        NumberInt("48"),
        NumberInt("50"),
        NumberInt("82"),
        NumberInt("56")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("62"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("62"),
            timestamp: ISODate("2025-04-25T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-25T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-25T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:46:54.455Z"),
    updateTime: ISODate("2025-04-25T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5fd"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-24T10:46:54.455Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("154"),
        NumberInt("160"),
        NumberInt("133"),
        NumberInt("106"),
        NumberInt("110"),
        NumberInt("100"),
        NumberInt("69"),
        NumberInt("155"),
        NumberInt("63"),
        NumberInt("90")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("103"),
        NumberInt("117"),
        NumberInt("93"),
        NumberInt("98"),
        NumberInt("121"),
        NumberInt("99"),
        NumberInt("96"),
        NumberInt("91"),
        NumberInt("108")
    ],
    paceData: [
        5.5,
        5.5,
        5.7,
        5.3,
        5.9,
        5.6,
        5.9,
        5.3,
        5.9,
        5.8
    ],
    weekData: [
        NumberInt("66"),
        NumberInt("86"),
        NumberInt("47"),
        NumberInt("62"),
        NumberInt("47"),
        NumberInt("76"),
        NumberInt("37")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("92"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("90"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-04-24T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-04-24T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-24T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:46:54.455Z"),
    updateTime: ISODate("2025-04-24T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5fe"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-23T10:46:54.455Z"),
    date: "2025-04-23",
    heartRateData: [
        NumberInt("155"),
        NumberInt("90"),
        NumberInt("117"),
        NumberInt("64"),
        NumberInt("61"),
        NumberInt("137"),
        NumberInt("125"),
        NumberInt("107"),
        NumberInt("111"),
        NumberInt("112")
    ],
    stepRateData: [
        NumberInt("122"),
        NumberInt("118"),
        NumberInt("109"),
        NumberInt("123"),
        NumberInt("103"),
        NumberInt("97"),
        NumberInt("107"),
        NumberInt("111"),
        NumberInt("103"),
        NumberInt("115")
    ],
    paceData: [
        5.3,
        5.2,
        5.8,
        5.6,
        5.2,
        5.2,
        5.4,
        5.3,
        5.5,
        5.6
    ],
    weekData: [
        NumberInt("83"),
        NumberInt("40"),
        NumberInt("55"),
        NumberInt("55"),
        NumberInt("77"),
        NumberInt("71"),
        NumberInt("48")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("61"),
    stressIndex: NumberInt("10"),
    currentHeartRate: NumberInt("112"),
    currentStepRate: NumberInt("115"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-04-23T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-04-23T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-23T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-23T10:46:54.455Z"),
    updateTime: ISODate("2025-04-23T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d5ff"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-22T10:46:54.455Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("122"),
        NumberInt("88"),
        NumberInt("94"),
        NumberInt("129"),
        NumberInt("76"),
        NumberInt("83"),
        NumberInt("138"),
        NumberInt("70"),
        NumberInt("113"),
        NumberInt("66")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("123"),
        NumberInt("90"),
        NumberInt("128"),
        NumberInt("109"),
        NumberInt("117"),
        NumberInt("91"),
        NumberInt("103"),
        NumberInt("90"),
        NumberInt("128")
    ],
    paceData: [
        5.4,
        5.5,
        5.4,
        5.9,
        5.6,
        5,
        5.3,
        5.7,
        5.2,
        5.4
    ],
    weekData: [
        NumberInt("81"),
        NumberInt("41"),
        NumberInt("88"),
        NumberInt("86"),
        NumberInt("48"),
        NumberInt("61"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("66"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("66"),
            timestamp: ISODate("2025-04-22T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-04-22T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-22T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:46:54.455Z"),
    updateTime: ISODate("2025-04-22T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d600"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-21T10:46:54.455Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("78"),
        NumberInt("78"),
        NumberInt("109"),
        NumberInt("85"),
        NumberInt("130"),
        NumberInt("75"),
        NumberInt("154"),
        NumberInt("65"),
        NumberInt("100"),
        NumberInt("101")
    ],
    stepRateData: [
        NumberInt("130"),
        NumberInt("114"),
        NumberInt("122"),
        NumberInt("126"),
        NumberInt("90"),
        NumberInt("109"),
        NumberInt("95"),
        NumberInt("111"),
        NumberInt("119"),
        NumberInt("127")
    ],
    paceData: [
        5.7,
        5.6,
        5,
        5,
        5.3,
        5.9,
        5.7,
        5.2,
        5.7,
        5.9
    ],
    weekData: [
        NumberInt("69"),
        NumberInt("59"),
        NumberInt("58"),
        NumberInt("86"),
        NumberInt("49"),
        NumberInt("73"),
        NumberInt("58")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("101"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-04-21T10:46:54.455Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-04-21T10:46:54.455Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-21T10:46:54.455Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:46:54.455Z"),
    updateTime: ISODate("2025-04-21T10:46:54.455Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d601"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-20T10:46:54.456Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("135"),
        NumberInt("91"),
        NumberInt("83"),
        NumberInt("122"),
        NumberInt("108"),
        NumberInt("97"),
        NumberInt("129"),
        NumberInt("91"),
        NumberInt("92"),
        NumberInt("140")
    ],
    stepRateData: [
        NumberInt("106"),
        NumberInt("127"),
        NumberInt("97"),
        NumberInt("130"),
        NumberInt("129"),
        NumberInt("119"),
        NumberInt("117"),
        NumberInt("91"),
        NumberInt("125"),
        NumberInt("90")
    ],
    paceData: [
        5.5,
        5.2,
        5.5,
        5.2,
        5.8,
        5.5,
        5.2,
        5.2,
        5.2,
        6
    ],
    weekData: [
        NumberInt("43"),
        NumberInt("87"),
        NumberInt("59"),
        NumberInt("65"),
        NumberInt("80"),
        NumberInt("79"),
        NumberInt("51")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("140"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("140"),
            timestamp: ISODate("2025-05-20T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-20T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-20T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-20T10:46:54.456Z"),
    updateTime: ISODate("2025-05-20T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d602"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-19T10:46:54.456Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("96"),
        NumberInt("67"),
        NumberInt("145"),
        NumberInt("103"),
        NumberInt("153"),
        NumberInt("70"),
        NumberInt("99"),
        NumberInt("158"),
        NumberInt("89"),
        NumberInt("119")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("93"),
        NumberInt("99"),
        NumberInt("96"),
        NumberInt("125"),
        NumberInt("98"),
        NumberInt("96"),
        NumberInt("108"),
        NumberInt("121"),
        NumberInt("90")
    ],
    paceData: [
        5.8,
        5.4,
        5.8,
        5.2,
        5.6,
        5,
        5.8,
        5.8,
        5,
        5.4
    ],
    weekData: [
        NumberInt("71"),
        NumberInt("78"),
        NumberInt("31"),
        NumberInt("57"),
        NumberInt("38"),
        NumberInt("46"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("83"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("119"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-19T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-19T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-19T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:46:54.456Z"),
    updateTime: ISODate("2025-05-19T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d603"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-18T10:46:54.456Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("68"),
        NumberInt("101"),
        NumberInt("126"),
        NumberInt("148"),
        NumberInt("120"),
        NumberInt("78"),
        NumberInt("67"),
        NumberInt("96"),
        NumberInt("62"),
        NumberInt("112")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("117"),
        NumberInt("125"),
        NumberInt("101"),
        NumberInt("124"),
        NumberInt("124"),
        NumberInt("113"),
        NumberInt("104"),
        NumberInt("119"),
        NumberInt("128")
    ],
    paceData: [
        5.5,
        5.9,
        5.7,
        5.9,
        6,
        5.8,
        5.7,
        5.8,
        5.2,
        5.8
    ],
    weekData: [
        NumberInt("79"),
        NumberInt("58"),
        NumberInt("83"),
        NumberInt("85"),
        NumberInt("65"),
        NumberInt("56"),
        NumberInt("67")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("86"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("112"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-18T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-18T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-18T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-18T10:46:54.456Z"),
    updateTime: ISODate("2025-05-18T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d604"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-17T10:46:54.456Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("78"),
        NumberInt("111"),
        NumberInt("119"),
        NumberInt("122"),
        NumberInt("142"),
        NumberInt("135"),
        NumberInt("114"),
        NumberInt("88"),
        NumberInt("130"),
        NumberInt("90")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("107"),
        NumberInt("100"),
        NumberInt("93"),
        NumberInt("100"),
        NumberInt("98"),
        NumberInt("103"),
        NumberInt("101"),
        NumberInt("90"),
        NumberInt("95")
    ],
    paceData: [
        5.4,
        5.2,
        6,
        5.6,
        5.3,
        5.4,
        5.2,
        5.6,
        5.6,
        6
    ],
    weekData: [
        NumberInt("52"),
        NumberInt("71"),
        NumberInt("44"),
        NumberInt("71"),
        NumberInt("43"),
        NumberInt("34"),
        NumberInt("79")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("83"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("90"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-17T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-17T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-17T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-17T10:46:54.456Z"),
    updateTime: ISODate("2025-05-17T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d605"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-16T10:46:54.456Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("89"),
        NumberInt("67"),
        NumberInt("151"),
        NumberInt("85"),
        NumberInt("135"),
        NumberInt("119"),
        NumberInt("86"),
        NumberInt("134"),
        NumberInt("78"),
        NumberInt("138")
    ],
    stepRateData: [
        NumberInt("99"),
        NumberInt("92"),
        NumberInt("91"),
        NumberInt("101"),
        NumberInt("93"),
        NumberInt("108"),
        NumberInt("113"),
        NumberInt("102"),
        NumberInt("94"),
        NumberInt("91")
    ],
    paceData: [
        5.2,
        5.5,
        5.3,
        5.4,
        5.7,
        6,
        5.6,
        5.5,
        5.2,
        5.5
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("30"),
        NumberInt("73"),
        NumberInt("90"),
        NumberInt("39"),
        NumberInt("50"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("83"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("138"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("138"),
            timestamp: ISODate("2025-05-16T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-16T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-16T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:46:54.456Z"),
    updateTime: ISODate("2025-05-16T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d606"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-15T10:46:54.456Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("153"),
        NumberInt("69"),
        NumberInt("107"),
        NumberInt("122"),
        NumberInt("67"),
        NumberInt("74"),
        NumberInt("79"),
        NumberInt("143"),
        NumberInt("155"),
        NumberInt("125")
    ],
    stepRateData: [
        NumberInt("98"),
        NumberInt("95"),
        NumberInt("126"),
        NumberInt("96"),
        NumberInt("113"),
        NumberInt("105"),
        NumberInt("102"),
        NumberInt("90"),
        NumberInt("130"),
        NumberInt("96")
    ],
    paceData: [
        5.8,
        5.9,
        5.8,
        5.1,
        5.4,
        5.7,
        5.3,
        5.9,
        5.8,
        5
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("73"),
        NumberInt("63"),
        NumberInt("30"),
        NumberInt("50"),
        NumberInt("52"),
        NumberInt("81")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("125"),
    currentStepRate: NumberInt("96"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-05-15T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-15T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-15T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-15T10:46:54.456Z"),
    updateTime: ISODate("2025-05-15T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d607"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-14T10:46:54.456Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("139"),
        NumberInt("147"),
        NumberInt("93"),
        NumberInt("141"),
        NumberInt("108"),
        NumberInt("145"),
        NumberInt("93"),
        NumberInt("63"),
        NumberInt("147"),
        NumberInt("113")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("95"),
        NumberInt("113"),
        NumberInt("97"),
        NumberInt("112"),
        NumberInt("113"),
        NumberInt("94"),
        NumberInt("118"),
        NumberInt("128"),
        NumberInt("113")
    ],
    paceData: [
        5.9,
        5.1,
        5.3,
        5.1,
        5.3,
        5,
        5.5,
        5,
        5.3,
        5.4
    ],
    weekData: [
        NumberInt("80"),
        NumberInt("73"),
        NumberInt("81"),
        NumberInt("66"),
        NumberInt("74"),
        NumberInt("63"),
        NumberInt("67")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("113"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-14T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-14T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-14T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:46:54.456Z"),
    updateTime: ISODate("2025-05-14T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d608"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-13T10:46:54.456Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("128"),
        NumberInt("88"),
        NumberInt("63"),
        NumberInt("144"),
        NumberInt("127"),
        NumberInt("156"),
        NumberInt("124"),
        NumberInt("63"),
        NumberInt("159"),
        NumberInt("128")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("100"),
        NumberInt("93"),
        NumberInt("121"),
        NumberInt("107"),
        NumberInt("129"),
        NumberInt("102"),
        NumberInt("110"),
        NumberInt("101"),
        NumberInt("91")
    ],
    paceData: [
        5.4,
        5.6,
        5.8,
        5.4,
        5.9,
        5.9,
        5.1,
        5.6,
        5.6,
        5
    ],
    weekData: [
        NumberInt("63"),
        NumberInt("31"),
        NumberInt("48"),
        NumberInt("77"),
        NumberInt("50"),
        NumberInt("48"),
        NumberInt("49")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("128"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-13T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-13T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-13T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-13T10:46:54.456Z"),
    updateTime: ISODate("2025-05-13T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d609"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-12T10:46:54.456Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("77"),
        NumberInt("120"),
        NumberInt("81"),
        NumberInt("152"),
        NumberInt("100"),
        NumberInt("91"),
        NumberInt("159"),
        NumberInt("87"),
        NumberInt("119"),
        NumberInt("93")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("129"),
        NumberInt("111"),
        NumberInt("130"),
        NumberInt("107"),
        NumberInt("109"),
        NumberInt("95"),
        NumberInt("120"),
        NumberInt("120"),
        NumberInt("90")
    ],
    paceData: [
        5.2,
        5.9,
        5.2,
        5.6,
        5.1,
        5.5,
        5.6,
        5.6,
        5.4,
        5.9
    ],
    weekData: [
        NumberInt("61"),
        NumberInt("64"),
        NumberInt("33"),
        NumberInt("51"),
        NumberInt("84"),
        NumberInt("32"),
        NumberInt("89")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("93"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-12T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-12T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-12T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:46:54.456Z"),
    updateTime: ISODate("2025-05-12T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d60a"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-11T10:46:54.456Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("110"),
        NumberInt("121"),
        NumberInt("118"),
        NumberInt("120"),
        NumberInt("102"),
        NumberInt("67"),
        NumberInt("160"),
        NumberInt("133"),
        NumberInt("69"),
        NumberInt("132")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("103"),
        NumberInt("101"),
        NumberInt("99"),
        NumberInt("130"),
        NumberInt("92"),
        NumberInt("119"),
        NumberInt("121"),
        NumberInt("106"),
        NumberInt("113")
    ],
    paceData: [
        5.3,
        6,
        5.9,
        5.4,
        5.6,
        5.7,
        6,
        5.4,
        5,
        5.9
    ],
    weekData: [
        NumberInt("45"),
        NumberInt("42"),
        NumberInt("58"),
        NumberInt("83"),
        NumberInt("48"),
        NumberInt("36"),
        NumberInt("60")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("132"),
    currentStepRate: NumberInt("113"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("132"),
            timestamp: ISODate("2025-05-11T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-11T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-11T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-11T10:46:54.456Z"),
    updateTime: ISODate("2025-05-11T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d60b"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-09T10:46:54.456Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("135"),
        NumberInt("71"),
        NumberInt("125"),
        NumberInt("144"),
        NumberInt("60"),
        NumberInt("136"),
        NumberInt("149"),
        NumberInt("129"),
        NumberInt("63"),
        NumberInt("142")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("119"),
        NumberInt("128"),
        NumberInt("126"),
        NumberInt("95"),
        NumberInt("91"),
        NumberInt("106"),
        NumberInt("115"),
        NumberInt("107"),
        NumberInt("130")
    ],
    paceData: [
        5.1,
        5.6,
        5.2,
        5.4,
        5.9,
        5.8,
        5.2,
        5.3,
        5.3,
        5
    ],
    weekData: [
        NumberInt("75"),
        NumberInt("73"),
        NumberInt("89"),
        NumberInt("84"),
        NumberInt("47"),
        NumberInt("58"),
        NumberInt("61")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("83"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("142"),
    currentStepRate: NumberInt("130"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("142"),
            timestamp: ISODate("2025-05-09T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("130"),
            timestamp: ISODate("2025-05-09T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-09T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:46:54.456Z"),
    updateTime: ISODate("2025-05-09T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d60c"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-08T10:46:54.456Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("61"),
        NumberInt("89"),
        NumberInt("110"),
        NumberInt("150"),
        NumberInt("110"),
        NumberInt("140"),
        NumberInt("154"),
        NumberInt("68"),
        NumberInt("68"),
        NumberInt("106")
    ],
    stepRateData: [
        NumberInt("124"),
        NumberInt("112"),
        NumberInt("120"),
        NumberInt("123"),
        NumberInt("120"),
        NumberInt("116"),
        NumberInt("129"),
        NumberInt("113"),
        NumberInt("111"),
        NumberInt("130")
    ],
    paceData: [
        5.7,
        5.7,
        5.7,
        5.8,
        5.6,
        5.2,
        5.1,
        5.8,
        5,
        5.7
    ],
    weekData: [
        NumberInt("65"),
        NumberInt("89"),
        NumberInt("86"),
        NumberInt("76"),
        NumberInt("83"),
        NumberInt("68"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("106"),
    currentStepRate: NumberInt("130"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-08T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("130"),
            timestamp: ISODate("2025-05-08T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-08T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:46:54.456Z"),
    updateTime: ISODate("2025-05-08T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d60d"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-07T10:46:54.456Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("65"),
        NumberInt("138"),
        NumberInt("93"),
        NumberInt("71"),
        NumberInt("98"),
        NumberInt("114"),
        NumberInt("104"),
        NumberInt("79"),
        NumberInt("140"),
        NumberInt("99")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("129"),
        NumberInt("117"),
        NumberInt("92"),
        NumberInt("93"),
        NumberInt("111"),
        NumberInt("91"),
        NumberInt("90"),
        NumberInt("120"),
        NumberInt("97")
    ],
    paceData: [
        5.3,
        5.5,
        5.6,
        5.2,
        5.6,
        5.2,
        5.7,
        5.1,
        5.6,
        5.7
    ],
    weekData: [
        NumberInt("76"),
        NumberInt("58"),
        NumberInt("42"),
        NumberInt("79"),
        NumberInt("58"),
        NumberInt("89"),
        NumberInt("82")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("64"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("99"),
    currentStepRate: NumberInt("97"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-07T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-07T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-07T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:46:54.456Z"),
    updateTime: ISODate("2025-05-07T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d60e"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-06T10:46:54.456Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("64"),
        NumberInt("119"),
        NumberInt("157"),
        NumberInt("159"),
        NumberInt("159"),
        NumberInt("80"),
        NumberInt("143"),
        NumberInt("153"),
        NumberInt("147"),
        NumberInt("151")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("127"),
        NumberInt("127"),
        NumberInt("101"),
        NumberInt("107"),
        NumberInt("101"),
        NumberInt("95"),
        NumberInt("126"),
        NumberInt("113"),
        NumberInt("120")
    ],
    paceData: [
        5.8,
        5.3,
        5.7,
        5.9,
        5.3,
        5.7,
        5.5,
        5,
        5.4,
        5.1
    ],
    weekData: [
        NumberInt("73"),
        NumberInt("40"),
        NumberInt("44"),
        NumberInt("70"),
        NumberInt("75"),
        NumberInt("48"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("151"),
    currentStepRate: NumberInt("120"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("151"),
            timestamp: ISODate("2025-05-06T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-05-06T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-06T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:46:54.456Z"),
    updateTime: ISODate("2025-05-06T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d60f"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-04T10:46:54.456Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("127"),
        NumberInt("79"),
        NumberInt("105"),
        NumberInt("104"),
        NumberInt("155"),
        NumberInt("129"),
        NumberInt("84"),
        NumberInt("150"),
        NumberInt("154"),
        NumberInt("154")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("119"),
        NumberInt("114"),
        NumberInt("115"),
        NumberInt("110"),
        NumberInt("114"),
        NumberInt("90"),
        NumberInt("96"),
        NumberInt("112"),
        NumberInt("99")
    ],
    paceData: [
        5.3,
        5.4,
        5.9,
        5.4,
        5.5,
        5.2,
        5.3,
        5.4,
        5.9,
        5.8
    ],
    weekData: [
        NumberInt("58"),
        NumberInt("41"),
        NumberInt("55"),
        NumberInt("33"),
        NumberInt("56"),
        NumberInt("75"),
        NumberInt("69")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("23"),
    currentHeartRate: NumberInt("154"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("154"),
            timestamp: ISODate("2025-05-04T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-04T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-04T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-04T10:46:54.456Z"),
    updateTime: ISODate("2025-05-04T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d610"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-03T10:46:54.456Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("66"),
        NumberInt("143"),
        NumberInt("137"),
        NumberInt("66"),
        NumberInt("63"),
        NumberInt("105"),
        NumberInt("118"),
        NumberInt("120"),
        NumberInt("139"),
        NumberInt("82")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("93"),
        NumberInt("114"),
        NumberInt("123"),
        NumberInt("96"),
        NumberInt("119"),
        NumberInt("105"),
        NumberInt("124"),
        NumberInt("121"),
        NumberInt("100")
    ],
    paceData: [
        5.6,
        5.4,
        5.3,
        5.6,
        5.7,
        5.7,
        5.9,
        5.7,
        5.7,
        5.2
    ],
    weekData: [
        NumberInt("66"),
        NumberInt("83"),
        NumberInt("44"),
        NumberInt("59"),
        NumberInt("49"),
        NumberInt("44"),
        NumberInt("66")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("82"),
    currentStepRate: NumberInt("100"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("82"),
            timestamp: ISODate("2025-05-03T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-03T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-03T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:46:54.456Z"),
    updateTime: ISODate("2025-05-03T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d611"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-01T10:46:54.456Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("70"),
        NumberInt("123"),
        NumberInt("103"),
        NumberInt("158"),
        NumberInt("142"),
        NumberInt("154"),
        NumberInt("118"),
        NumberInt("135"),
        NumberInt("97"),
        NumberInt("79")
    ],
    stepRateData: [
        NumberInt("116"),
        NumberInt("94"),
        NumberInt("98"),
        NumberInt("102"),
        NumberInt("118"),
        NumberInt("126"),
        NumberInt("100"),
        NumberInt("97"),
        NumberInt("97"),
        NumberInt("108")
    ],
    paceData: [
        5.3,
        5.7,
        5.1,
        5.4,
        5,
        5.5,
        5.2,
        5.9,
        5.5,
        5.5
    ],
    weekData: [
        NumberInt("48"),
        NumberInt("41"),
        NumberInt("39"),
        NumberInt("53"),
        NumberInt("53"),
        NumberInt("88"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("79"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("79"),
            timestamp: ISODate("2025-05-01T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-01T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-01T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:46:54.456Z"),
    updateTime: ISODate("2025-05-01T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d612"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-30T10:46:54.456Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("116"),
        NumberInt("110"),
        NumberInt("126"),
        NumberInt("154"),
        NumberInt("141"),
        NumberInt("95"),
        NumberInt("118"),
        NumberInt("92"),
        NumberInt("132"),
        NumberInt("121")
    ],
    stepRateData: [
        NumberInt("91"),
        NumberInt("90"),
        NumberInt("114"),
        NumberInt("99"),
        NumberInt("127"),
        NumberInt("97"),
        NumberInt("99"),
        NumberInt("93"),
        NumberInt("130"),
        NumberInt("110")
    ],
    paceData: [
        5.5,
        5.8,
        6,
        5.1,
        5.5,
        5.1,
        5.8,
        5.5,
        5.8,
        5.2
    ],
    weekData: [
        NumberInt("88"),
        NumberInt("78"),
        NumberInt("43"),
        NumberInt("85"),
        NumberInt("74"),
        NumberInt("74"),
        NumberInt("60")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("121"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-04-30T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-04-30T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-30T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:46:54.456Z"),
    updateTime: ISODate("2025-04-30T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d613"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-29T10:46:54.456Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("81"),
        NumberInt("74"),
        NumberInt("151"),
        NumberInt("108"),
        NumberInt("90"),
        NumberInt("110"),
        NumberInt("111"),
        NumberInt("92"),
        NumberInt("95"),
        NumberInt("157")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("121"),
        NumberInt("108"),
        NumberInt("105"),
        NumberInt("95"),
        NumberInt("120"),
        NumberInt("108"),
        NumberInt("92"),
        NumberInt("90"),
        NumberInt("101")
    ],
    paceData: [
        5.2,
        5.5,
        5.4,
        5.7,
        5.3,
        5.4,
        5.5,
        5.7,
        5.7,
        5.1
    ],
    weekData: [
        NumberInt("88"),
        NumberInt("54"),
        NumberInt("71"),
        NumberInt("71"),
        NumberInt("79"),
        NumberInt("58"),
        NumberInt("58")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("90"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("157"),
    currentStepRate: NumberInt("101"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("157"),
            timestamp: ISODate("2025-04-29T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-04-29T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-29T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:46:54.456Z"),
    updateTime: ISODate("2025-04-29T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d614"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-28T10:46:54.456Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("146"),
        NumberInt("151"),
        NumberInt("134"),
        NumberInt("142"),
        NumberInt("72"),
        NumberInt("128"),
        NumberInt("101"),
        NumberInt("97"),
        NumberInt("147"),
        NumberInt("103")
    ],
    stepRateData: [
        NumberInt("105"),
        NumberInt("115"),
        NumberInt("123"),
        NumberInt("103"),
        NumberInt("124"),
        NumberInt("118"),
        NumberInt("113"),
        NumberInt("90"),
        NumberInt("106"),
        NumberInt("114")
    ],
    paceData: [
        5.8,
        5.7,
        5.7,
        5.5,
        5.5,
        5.2,
        5.6,
        5.5,
        5.3,
        5.6
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("56"),
        NumberInt("69"),
        NumberInt("73"),
        NumberInt("32"),
        NumberInt("55"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("103"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-04-28T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-04-28T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-28T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-04-28T10:46:54.456Z"),
    updateTime: ISODate("2025-04-28T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d615"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-27T10:46:54.456Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("160"),
        NumberInt("154"),
        NumberInt("147"),
        NumberInt("107"),
        NumberInt("86"),
        NumberInt("121"),
        NumberInt("128"),
        NumberInt("82"),
        NumberInt("141"),
        NumberInt("155")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("90"),
        NumberInt("130"),
        NumberInt("121"),
        NumberInt("119"),
        NumberInt("90"),
        NumberInt("99"),
        NumberInt("108"),
        NumberInt("96"),
        NumberInt("93")
    ],
    paceData: [
        5.2,
        5.6,
        5.7,
        5.2,
        5.7,
        6,
        5.1,
        5.9,
        5.7,
        5.5
    ],
    weekData: [
        NumberInt("75"),
        NumberInt("72"),
        NumberInt("69"),
        NumberInt("59"),
        NumberInt("86"),
        NumberInt("75"),
        NumberInt("55")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("155"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("155"),
            timestamp: ISODate("2025-04-27T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-04-27T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-27T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-04-27T10:46:54.456Z"),
    updateTime: ISODate("2025-04-27T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d616"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-26T10:46:54.456Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("107"),
        NumberInt("139"),
        NumberInt("82"),
        NumberInt("85"),
        NumberInt("64"),
        NumberInt("115"),
        NumberInt("63"),
        NumberInt("82"),
        NumberInt("92"),
        NumberInt("133")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("103"),
        NumberInt("97"),
        NumberInt("92"),
        NumberInt("130"),
        NumberInt("129"),
        NumberInt("110"),
        NumberInt("94"),
        NumberInt("109"),
        NumberInt("92")
    ],
    paceData: [
        5.9,
        5.6,
        5.3,
        5.4,
        5.7,
        5.4,
        5.7,
        5.9,
        5.2,
        5.2
    ],
    weekData: [
        NumberInt("89"),
        NumberInt("42"),
        NumberInt("57"),
        NumberInt("69"),
        NumberInt("55"),
        NumberInt("69"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("133"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("133"),
            timestamp: ISODate("2025-04-26T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-04-26T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-26T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:46:54.456Z"),
    updateTime: ISODate("2025-04-26T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d617"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-25T10:46:54.456Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("75"),
        NumberInt("132"),
        NumberInt("158"),
        NumberInt("131"),
        NumberInt("81"),
        NumberInt("106"),
        NumberInt("140"),
        NumberInt("160"),
        NumberInt("101"),
        NumberInt("97")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("118"),
        NumberInt("94"),
        NumberInt("118"),
        NumberInt("96"),
        NumberInt("102"),
        NumberInt("120"),
        NumberInt("109"),
        NumberInt("94"),
        NumberInt("114")
    ],
    paceData: [
        6,
        5.1,
        5.6,
        5.6,
        5.7,
        5.9,
        5.6,
        5.9,
        5.2,
        5.6
    ],
    weekData: [
        NumberInt("50"),
        NumberInt("69"),
        NumberInt("89"),
        NumberInt("71"),
        NumberInt("52"),
        NumberInt("59"),
        NumberInt("37")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("97"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-25T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-04-25T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-25T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-04-25T10:46:54.456Z"),
    updateTime: ISODate("2025-04-25T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d618"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-24T10:46:54.456Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("138"),
        NumberInt("83"),
        NumberInt("117"),
        NumberInt("126"),
        NumberInt("71"),
        NumberInt("81"),
        NumberInt("140"),
        NumberInt("88"),
        NumberInt("118"),
        NumberInt("65")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("105"),
        NumberInt("99"),
        NumberInt("114"),
        NumberInt("114"),
        NumberInt("94"),
        NumberInt("100"),
        NumberInt("107"),
        NumberInt("118"),
        NumberInt("97")
    ],
    paceData: [
        5.2,
        5.2,
        5.9,
        5.4,
        5.5,
        5.7,
        5.3,
        5.7,
        6,
        5.1
    ],
    weekData: [
        NumberInt("66"),
        NumberInt("84"),
        NumberInt("37"),
        NumberInt("30"),
        NumberInt("43"),
        NumberInt("80"),
        NumberInt("77")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("65"),
    currentStepRate: NumberInt("97"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("65"),
            timestamp: ISODate("2025-04-24T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-24T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-24T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:46:54.456Z"),
    updateTime: ISODate("2025-04-24T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d619"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-23T10:46:54.456Z"),
    date: "2025-04-23",
    heartRateData: [
        NumberInt("122"),
        NumberInt("131"),
        NumberInt("74"),
        NumberInt("137"),
        NumberInt("66"),
        NumberInt("83"),
        NumberInt("88"),
        NumberInt("135"),
        NumberInt("135"),
        NumberInt("77")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("124"),
        NumberInt("110"),
        NumberInt("128"),
        NumberInt("121"),
        NumberInt("113"),
        NumberInt("126"),
        NumberInt("123"),
        NumberInt("110"),
        NumberInt("121")
    ],
    paceData: [
        5.8,
        6,
        5.8,
        5.4,
        5.5,
        6,
        5.1,
        6,
        5.2,
        6
    ],
    weekData: [
        NumberInt("35"),
        NumberInt("67"),
        NumberInt("85"),
        NumberInt("44"),
        NumberInt("32"),
        NumberInt("41"),
        NumberInt("31")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("77"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("77"),
            timestamp: ISODate("2025-04-23T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-04-23T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-23T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-04-23T10:46:54.456Z"),
    updateTime: ISODate("2025-04-23T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d61a"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-21T10:46:54.456Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("95"),
        NumberInt("133"),
        NumberInt("109"),
        NumberInt("92"),
        NumberInt("107"),
        NumberInt("81"),
        NumberInt("138"),
        NumberInt("147"),
        NumberInt("144"),
        NumberInt("91")
    ],
    stepRateData: [
        NumberInt("98"),
        NumberInt("112"),
        NumberInt("120"),
        NumberInt("93"),
        NumberInt("108"),
        NumberInt("127"),
        NumberInt("127"),
        NumberInt("90"),
        NumberInt("125"),
        NumberInt("122")
    ],
    paceData: [
        5,
        5.6,
        5.5,
        5.9,
        5.1,
        5.5,
        5.4,
        5.6,
        5.1,
        5.6
    ],
    weekData: [
        NumberInt("66"),
        NumberInt("32"),
        NumberInt("50"),
        NumberInt("37"),
        NumberInt("34"),
        NumberInt("38"),
        NumberInt("87")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("64"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("91"),
    currentStepRate: NumberInt("122"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-04-21T10:46:54.456Z")
        },
        {
            type: "stepRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-04-21T10:46:54.456Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-21T10:46:54.456Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:46:54.456Z"),
    updateTime: ISODate("2025-04-21T10:46:54.456Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d61b"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-19T10:46:54.457Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("91"),
        NumberInt("84"),
        NumberInt("80"),
        NumberInt("69"),
        NumberInt("139"),
        NumberInt("71"),
        NumberInt("97"),
        NumberInt("129"),
        NumberInt("61"),
        NumberInt("117")
    ],
    stepRateData: [
        NumberInt("106"),
        NumberInt("115"),
        NumberInt("94"),
        NumberInt("112"),
        NumberInt("113"),
        NumberInt("123"),
        NumberInt("123"),
        NumberInt("112"),
        NumberInt("101"),
        NumberInt("94")
    ],
    paceData: [
        5.8,
        5.3,
        5.8,
        5.9,
        5.8,
        5.7,
        5.7,
        5.3,
        5.1,
        5.9
    ],
    weekData: [
        NumberInt("82"),
        NumberInt("59"),
        NumberInt("70"),
        NumberInt("67"),
        NumberInt("72"),
        NumberInt("34"),
        NumberInt("82")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("27"),
    currentHeartRate: NumberInt("117"),
    currentStepRate: NumberInt("94"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-19T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-05-19T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-19T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-19T10:46:54.457Z"),
    updateTime: ISODate("2025-05-19T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d61c"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-17T10:46:54.457Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("151"),
        NumberInt("75"),
        NumberInt("67"),
        NumberInt("87"),
        NumberInt("136"),
        NumberInt("148"),
        NumberInt("131"),
        NumberInt("126"),
        NumberInt("104"),
        NumberInt("106")
    ],
    stepRateData: [
        NumberInt("124"),
        NumberInt("93"),
        NumberInt("121"),
        NumberInt("125"),
        NumberInt("110"),
        NumberInt("104"),
        NumberInt("109"),
        NumberInt("118"),
        NumberInt("100"),
        NumberInt("130")
    ],
    paceData: [
        5.6,
        5.4,
        5.3,
        6,
        5.1,
        5.3,
        5.2,
        6,
        5.6,
        5.3
    ],
    weekData: [
        NumberInt("42"),
        NumberInt("78"),
        NumberInt("36"),
        NumberInt("62"),
        NumberInt("86"),
        NumberInt("68"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("106"),
    currentStepRate: NumberInt("130"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-17T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("130"),
            timestamp: ISODate("2025-05-17T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-17T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-17T10:46:54.457Z"),
    updateTime: ISODate("2025-05-17T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d61d"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-16T10:46:54.457Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("97"),
        NumberInt("160"),
        NumberInt("90"),
        NumberInt("91"),
        NumberInt("84"),
        NumberInt("103"),
        NumberInt("116"),
        NumberInt("130"),
        NumberInt("71"),
        NumberInt("85")
    ],
    stepRateData: [
        NumberInt("106"),
        NumberInt("118"),
        NumberInt("122"),
        NumberInt("111"),
        NumberInt("115"),
        NumberInt("118"),
        NumberInt("103"),
        NumberInt("115"),
        NumberInt("113"),
        NumberInt("94")
    ],
    paceData: [
        5.4,
        5.3,
        5,
        6,
        5.1,
        5.9,
        5.8,
        5.5,
        5.6,
        5.1
    ],
    weekData: [
        NumberInt("87"),
        NumberInt("43"),
        NumberInt("42"),
        NumberInt("81"),
        NumberInt("32"),
        NumberInt("77"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("85"),
    currentStepRate: NumberInt("94"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("85"),
            timestamp: ISODate("2025-05-16T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-05-16T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-16T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-16T10:46:54.457Z"),
    updateTime: ISODate("2025-05-16T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d61e"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-14T10:46:54.457Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("123"),
        NumberInt("107"),
        NumberInt("100"),
        NumberInt("117"),
        NumberInt("117"),
        NumberInt("157"),
        NumberInt("150"),
        NumberInt("160"),
        NumberInt("143"),
        NumberInt("158")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("111"),
        NumberInt("125"),
        NumberInt("102"),
        NumberInt("120"),
        NumberInt("99"),
        NumberInt("97"),
        NumberInt("121"),
        NumberInt("102"),
        NumberInt("90")
    ],
    paceData: [
        5.4,
        5.7,
        5.9,
        5.6,
        5,
        5.1,
        5.6,
        5.1,
        5,
        5
    ],
    weekData: [
        NumberInt("70"),
        NumberInt("70"),
        NumberInt("46"),
        NumberInt("69"),
        NumberInt("85"),
        NumberInt("33"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("158"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("158"),
            timestamp: ISODate("2025-05-14T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-14T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-14T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-14T10:46:54.457Z"),
    updateTime: ISODate("2025-05-14T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d61f"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-12T10:46:54.457Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("133"),
        NumberInt("97"),
        NumberInt("124"),
        NumberInt("96"),
        NumberInt("109"),
        NumberInt("66"),
        NumberInt("138"),
        NumberInt("70"),
        NumberInt("122"),
        NumberInt("101")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("101"),
        NumberInt("95"),
        NumberInt("130"),
        NumberInt("93"),
        NumberInt("98"),
        NumberInt("118"),
        NumberInt("101"),
        NumberInt("129"),
        NumberInt("123")
    ],
    paceData: [
        5.1,
        5.6,
        5.2,
        5.2,
        5.3,
        5.4,
        5.2,
        5.8,
        5,
        5.8
    ],
    weekData: [
        NumberInt("41"),
        NumberInt("36"),
        NumberInt("36"),
        NumberInt("45"),
        NumberInt("81"),
        NumberInt("53"),
        NumberInt("86")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("101"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-05-12T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-12T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-12T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-12T10:46:54.457Z"),
    updateTime: ISODate("2025-05-12T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d620"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-10T10:46:54.457Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("160"),
        NumberInt("93"),
        NumberInt("89"),
        NumberInt("143"),
        NumberInt("128"),
        NumberInt("103"),
        NumberInt("87"),
        NumberInt("124"),
        NumberInt("122"),
        NumberInt("82")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("114"),
        NumberInt("118"),
        NumberInt("126"),
        NumberInt("119"),
        NumberInt("104"),
        NumberInt("92"),
        NumberInt("118"),
        NumberInt("95"),
        NumberInt("116")
    ],
    paceData: [
        5.8,
        5.9,
        6,
        5.2,
        5.8,
        5.5,
        5.4,
        5.2,
        6,
        5.3
    ],
    weekData: [
        NumberInt("73"),
        NumberInt("51"),
        NumberInt("49"),
        NumberInt("56"),
        NumberInt("86"),
        NumberInt("35"),
        NumberInt("83")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("82"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("82"),
            timestamp: ISODate("2025-05-10T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-10T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-10T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-10T10:46:54.457Z"),
    updateTime: ISODate("2025-05-10T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d621"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-09T10:46:54.457Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("158"),
        NumberInt("117"),
        NumberInt("105"),
        NumberInt("90"),
        NumberInt("85"),
        NumberInt("96"),
        NumberInt("100"),
        NumberInt("131"),
        NumberInt("110"),
        NumberInt("99")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("102"),
        NumberInt("125"),
        NumberInt("92"),
        NumberInt("99"),
        NumberInt("108"),
        NumberInt("95"),
        NumberInt("94"),
        NumberInt("97"),
        NumberInt("123")
    ],
    paceData: [
        5.6,
        5.5,
        5.5,
        5,
        5.8,
        5.7,
        6,
        6,
        5.8,
        5.1
    ],
    weekData: [
        NumberInt("48"),
        NumberInt("66"),
        NumberInt("46"),
        NumberInt("56"),
        NumberInt("77"),
        NumberInt("69"),
        NumberInt("39")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("99"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-09T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-09T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-09T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-09T10:46:54.457Z"),
    updateTime: ISODate("2025-05-09T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d622"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-08T10:46:54.457Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("142"),
        NumberInt("143"),
        NumberInt("126"),
        NumberInt("118"),
        NumberInt("134"),
        NumberInt("133"),
        NumberInt("130"),
        NumberInt("107"),
        NumberInt("90"),
        NumberInt("67")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("93"),
        NumberInt("98"),
        NumberInt("113"),
        NumberInt("121"),
        NumberInt("116"),
        NumberInt("102"),
        NumberInt("112"),
        NumberInt("90"),
        NumberInt("91")
    ],
    paceData: [
        5.3,
        5,
        5.5,
        5.5,
        6,
        5.8,
        5.7,
        5.2,
        5.9,
        5.7
    ],
    weekData: [
        NumberInt("52"),
        NumberInt("54"),
        NumberInt("88"),
        NumberInt("61"),
        NumberInt("77"),
        NumberInt("72"),
        NumberInt("44")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("67"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("67"),
            timestamp: ISODate("2025-05-08T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-08T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-08T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-08T10:46:54.457Z"),
    updateTime: ISODate("2025-05-08T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d623"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-07T10:46:54.457Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("101"),
        NumberInt("85"),
        NumberInt("102"),
        NumberInt("116"),
        NumberInt("73"),
        NumberInt("154"),
        NumberInt("70"),
        NumberInt("72"),
        NumberInt("75"),
        NumberInt("79")
    ],
    stepRateData: [
        NumberInt("117"),
        NumberInt("122"),
        NumberInt("105"),
        NumberInt("91"),
        NumberInt("113"),
        NumberInt("92"),
        NumberInt("122"),
        NumberInt("102"),
        NumberInt("107"),
        NumberInt("91")
    ],
    paceData: [
        5,
        5.9,
        5.3,
        5.3,
        5.2,
        5.8,
        5.9,
        5.8,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("50"),
        NumberInt("37"),
        NumberInt("30"),
        NumberInt("87"),
        NumberInt("34"),
        NumberInt("41")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("79"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("79"),
            timestamp: ISODate("2025-05-07T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-07T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-07T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-07T10:46:54.457Z"),
    updateTime: ISODate("2025-05-07T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d624"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-06T10:46:54.457Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("89"),
        NumberInt("146"),
        NumberInt("138"),
        NumberInt("149"),
        NumberInt("60"),
        NumberInt("148"),
        NumberInt("133"),
        NumberInt("89"),
        NumberInt("103"),
        NumberInt("73")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("122"),
        NumberInt("118"),
        NumberInt("127"),
        NumberInt("106"),
        NumberInt("106"),
        NumberInt("100"),
        NumberInt("113"),
        NumberInt("112"),
        NumberInt("123")
    ],
    paceData: [
        5.2,
        5.6,
        5.6,
        6,
        6,
        5,
        5.3,
        5.8,
        5.9,
        5.1
    ],
    weekData: [
        NumberInt("36"),
        NumberInt("86"),
        NumberInt("87"),
        NumberInt("31"),
        NumberInt("34"),
        NumberInt("62"),
        NumberInt("50")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("73"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("73"),
            timestamp: ISODate("2025-05-06T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-06T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-06T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-06T10:46:54.457Z"),
    updateTime: ISODate("2025-05-06T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d625"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-03T10:46:54.457Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("71"),
        NumberInt("108"),
        NumberInt("62"),
        NumberInt("123"),
        NumberInt("102"),
        NumberInt("67"),
        NumberInt("149"),
        NumberInt("156"),
        NumberInt("109"),
        NumberInt("82")
    ],
    stepRateData: [
        NumberInt("130"),
        NumberInt("104"),
        NumberInt("105"),
        NumberInt("101"),
        NumberInt("129"),
        NumberInt("117"),
        NumberInt("102"),
        NumberInt("116"),
        NumberInt("120"),
        NumberInt("105")
    ],
    paceData: [
        5.6,
        5.6,
        5.9,
        5.4,
        5.3,
        5.4,
        5.2,
        5.4,
        5.5,
        5.5
    ],
    weekData: [
        NumberInt("89"),
        NumberInt("83"),
        NumberInt("42"),
        NumberInt("83"),
        NumberInt("52"),
        NumberInt("60"),
        NumberInt("44")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("82"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("82"),
            timestamp: ISODate("2025-05-03T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-05-03T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-03T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-03T10:46:54.457Z"),
    updateTime: ISODate("2025-05-03T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d626"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-02T10:46:54.457Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("85"),
        NumberInt("124"),
        NumberInt("89"),
        NumberInt("123"),
        NumberInt("60"),
        NumberInt("109"),
        NumberInt("114"),
        NumberInt("108"),
        NumberInt("68"),
        NumberInt("103")
    ],
    stepRateData: [
        NumberInt("118"),
        NumberInt("121"),
        NumberInt("116"),
        NumberInt("125"),
        NumberInt("115"),
        NumberInt("92"),
        NumberInt("101"),
        NumberInt("99"),
        NumberInt("118"),
        NumberInt("127")
    ],
    paceData: [
        5.9,
        5.4,
        5.1,
        5.2,
        5.6,
        6,
        5.4,
        5.4,
        5.5,
        5.5
    ],
    weekData: [
        NumberInt("82"),
        NumberInt("40"),
        NumberInt("43"),
        NumberInt("64"),
        NumberInt("40"),
        NumberInt("43"),
        NumberInt("35")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("103"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-05-02T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-02T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-02T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-02T10:46:54.457Z"),
    updateTime: ISODate("2025-05-02T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d627"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-01T10:46:54.457Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("137"),
        NumberInt("134"),
        NumberInt("83"),
        NumberInt("99"),
        NumberInt("73"),
        NumberInt("134"),
        NumberInt("109"),
        NumberInt("142"),
        NumberInt("141"),
        NumberInt("130")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("117"),
        NumberInt("112"),
        NumberInt("127"),
        NumberInt("90"),
        NumberInt("105"),
        NumberInt("97"),
        NumberInt("92"),
        NumberInt("128"),
        NumberInt("121")
    ],
    paceData: [
        5.4,
        5.2,
        6,
        5.9,
        5.6,
        5,
        5.1,
        5.3,
        5.6,
        5.5
    ],
    weekData: [
        NumberInt("43"),
        NumberInt("69"),
        NumberInt("56"),
        NumberInt("79"),
        NumberInt("40"),
        NumberInt("84"),
        NumberInt("69")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("130"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("130"),
            timestamp: ISODate("2025-05-01T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-01T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-01T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-05-01T10:46:54.457Z"),
    updateTime: ISODate("2025-05-01T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d628"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-30T10:46:54.457Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("103"),
        NumberInt("73"),
        NumberInt("145"),
        NumberInt("123"),
        NumberInt("115"),
        NumberInt("148"),
        NumberInt("139"),
        NumberInt("65"),
        NumberInt("108"),
        NumberInt("98")
    ],
    stepRateData: [
        NumberInt("124"),
        NumberInt("107"),
        NumberInt("95"),
        NumberInt("129"),
        NumberInt("113"),
        NumberInt("109"),
        NumberInt("122"),
        NumberInt("90"),
        NumberInt("123"),
        NumberInt("129")
    ],
    paceData: [
        5.1,
        5.5,
        5.7,
        5.8,
        5,
        5.3,
        5.1,
        5.9,
        5.3,
        5.2
    ],
    weekData: [
        NumberInt("83"),
        NumberInt("33"),
        NumberInt("35"),
        NumberInt("53"),
        NumberInt("85"),
        NumberInt("34"),
        NumberInt("77")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("98"),
    currentStepRate: NumberInt("129"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-30T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-04-30T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-30T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-04-30T10:46:54.457Z"),
    updateTime: ISODate("2025-04-30T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d629"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-29T10:46:54.457Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("104"),
        NumberInt("145"),
        NumberInt("123"),
        NumberInt("73"),
        NumberInt("159"),
        NumberInt("72"),
        NumberInt("160"),
        NumberInt("101"),
        NumberInt("133"),
        NumberInt("128")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("99"),
        NumberInt("92"),
        NumberInt("94"),
        NumberInt("102"),
        NumberInt("130"),
        NumberInt("100"),
        NumberInt("120"),
        NumberInt("123"),
        NumberInt("116")
    ],
    paceData: [
        5.3,
        5.9,
        5.4,
        5.8,
        5.9,
        5.6,
        5.8,
        5.3,
        5.4,
        5
    ],
    weekData: [
        NumberInt("58"),
        NumberInt("56"),
        NumberInt("78"),
        NumberInt("42"),
        NumberInt("63"),
        NumberInt("88"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("128"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-04-29T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-04-29T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-29T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-04-29T10:46:54.457Z"),
    updateTime: ISODate("2025-04-29T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d62a"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-27T10:46:54.457Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("100"),
        NumberInt("77"),
        NumberInt("96"),
        NumberInt("62"),
        NumberInt("106"),
        NumberInt("138"),
        NumberInt("65"),
        NumberInt("110"),
        NumberInt("138"),
        NumberInt("114")
    ],
    stepRateData: [
        NumberInt("91"),
        NumberInt("121"),
        NumberInt("102"),
        NumberInt("124"),
        NumberInt("122"),
        NumberInt("121"),
        NumberInt("130"),
        NumberInt("128"),
        NumberInt("97"),
        NumberInt("128")
    ],
    paceData: [
        5.1,
        5.4,
        5.1,
        6,
        5.4,
        5.7,
        5.6,
        5,
        5.7,
        5.5
    ],
    weekData: [
        NumberInt("49"),
        NumberInt("35"),
        NumberInt("53"),
        NumberInt("43"),
        NumberInt("48"),
        NumberInt("84"),
        NumberInt("87")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("64"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("114"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-04-27T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-04-27T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-27T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-04-27T10:46:54.457Z"),
    updateTime: ISODate("2025-04-27T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d62b"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-26T10:46:54.457Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("102"),
        NumberInt("159"),
        NumberInt("128"),
        NumberInt("103"),
        NumberInt("137"),
        NumberInt("121"),
        NumberInt("79"),
        NumberInt("66"),
        NumberInt("63"),
        NumberInt("103")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("99"),
        NumberInt("111"),
        NumberInt("113"),
        NumberInt("122"),
        NumberInt("108"),
        NumberInt("110"),
        NumberInt("92"),
        NumberInt("112"),
        NumberInt("120")
    ],
    paceData: [
        5.2,
        5.2,
        5.6,
        5.7,
        5.5,
        5.1,
        5,
        5.3,
        5.4,
        5.5
    ],
    weekData: [
        NumberInt("66"),
        NumberInt("85"),
        NumberInt("40"),
        NumberInt("58"),
        NumberInt("78"),
        NumberInt("87"),
        NumberInt("87")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("103"),
    currentStepRate: NumberInt("120"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-04-26T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-04-26T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-26T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-04-26T10:46:54.457Z"),
    updateTime: ISODate("2025-04-26T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d62c"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-24T10:46:54.457Z"),
    date: "2025-04-24",
    heartRateData: [
        NumberInt("151"),
        NumberInt("117"),
        NumberInt("95"),
        NumberInt("88"),
        NumberInt("77"),
        NumberInt("77"),
        NumberInt("134"),
        NumberInt("126"),
        NumberInt("104"),
        NumberInt("144")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("114"),
        NumberInt("111"),
        NumberInt("94"),
        NumberInt("125"),
        NumberInt("115"),
        NumberInt("92"),
        NumberInt("94"),
        NumberInt("112"),
        NumberInt("123")
    ],
    paceData: [
        5.3,
        5.2,
        5.3,
        5.4,
        5.4,
        5.2,
        5.3,
        5.7,
        5.9,
        5.9
    ],
    weekData: [
        NumberInt("36"),
        NumberInt("65"),
        NumberInt("72"),
        NumberInt("31"),
        NumberInt("82"),
        NumberInt("51"),
        NumberInt("75")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("144"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("144"),
            timestamp: ISODate("2025-04-24T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-04-24T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-24T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-04-24T10:46:54.457Z"),
    updateTime: ISODate("2025-04-24T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d62d"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-22T10:46:54.457Z"),
    date: "2025-04-22",
    heartRateData: [
        NumberInt("94"),
        NumberInt("127"),
        NumberInt("88"),
        NumberInt("115"),
        NumberInt("96"),
        NumberInt("105"),
        NumberInt("130"),
        NumberInt("110"),
        NumberInt("60"),
        NumberInt("137")
    ],
    stepRateData: [
        NumberInt("118"),
        NumberInt("117"),
        NumberInt("105"),
        NumberInt("130"),
        NumberInt("121"),
        NumberInt("119"),
        NumberInt("111"),
        NumberInt("108"),
        NumberInt("102"),
        NumberInt("91")
    ],
    paceData: [
        5.3,
        5.3,
        5,
        5.8,
        5.1,
        5.8,
        5.9,
        5.1,
        5.6,
        5.9
    ],
    weekData: [
        NumberInt("31"),
        NumberInt("66"),
        NumberInt("52"),
        NumberInt("47"),
        NumberInt("44"),
        NumberInt("43"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("137"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("137"),
            timestamp: ISODate("2025-04-22T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-04-22T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-22T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-04-22T10:46:54.457Z"),
    updateTime: ISODate("2025-04-22T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("682bed1e1de353d7ac31d62e"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-21T10:46:54.457Z"),
    date: "2025-04-21",
    heartRateData: [
        NumberInt("90"),
        NumberInt("126"),
        NumberInt("120"),
        NumberInt("160"),
        NumberInt("119"),
        NumberInt("67"),
        NumberInt("113"),
        NumberInt("70"),
        NumberInt("89"),
        NumberInt("81")
    ],
    stepRateData: [
        NumberInt("125"),
        NumberInt("113"),
        NumberInt("90"),
        NumberInt("109"),
        NumberInt("105"),
        NumberInt("102"),
        NumberInt("99"),
        NumberInt("97"),
        NumberInt("130"),
        NumberInt("102")
    ],
    paceData: [
        5.1,
        5.3,
        5.1,
        5.6,
        5.5,
        5.5,
        5,
        5.6,
        5.5,
        5.2
    ],
    weekData: [
        NumberInt("62"),
        NumberInt("77"),
        NumberInt("75"),
        NumberInt("79"),
        NumberInt("74"),
        NumberInt("76"),
        NumberInt("42")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("81"),
    currentStepRate: NumberInt("102"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("81"),
            timestamp: ISODate("2025-04-21T10:46:54.457Z")
        },
        {
            type: "stepRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-04-21T10:46:54.457Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-21T10:46:54.457Z")
        }
    ],
    createTime: ISODate("2025-04-21T10:46:54.457Z"),
    updateTime: ISODate("2025-04-21T10:46:54.457Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afd7"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-24T22:04:19.155Z"),
    date: "2025-05-24",
    heartRateData: [
        NumberInt("81"),
        NumberInt("154"),
        NumberInt("137"),
        NumberInt("119"),
        NumberInt("160"),
        NumberInt("147"),
        NumberInt("92"),
        NumberInt("103"),
        NumberInt("138"),
        NumberInt("100")
    ],
    stepRateData: [
        NumberInt("99"),
        NumberInt("90"),
        NumberInt("121"),
        NumberInt("91"),
        NumberInt("96"),
        NumberInt("117"),
        NumberInt("106"),
        NumberInt("100"),
        NumberInt("106"),
        NumberInt("97")
    ],
    paceData: [
        5.8,
        5.6,
        5.2,
        5.3,
        5.5,
        5.6,
        5.1,
        5.4,
        5.1,
        5.5
    ],
    weekData: [
        NumberInt("80"),
        NumberInt("56"),
        NumberInt("45"),
        NumberInt("84"),
        NumberInt("86"),
        NumberInt("48"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("27"),
    currentHeartRate: NumberInt("100"),
    currentStepRate: NumberInt("97"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-24T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-24T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-24T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-24T22:04:19.155Z"),
    updateTime: ISODate("2025-05-24T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afd8"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-23T22:04:19.155Z"),
    date: "2025-05-23",
    heartRateData: [
        NumberInt("84"),
        NumberInt("122"),
        NumberInt("116"),
        NumberInt("75"),
        NumberInt("84"),
        NumberInt("77"),
        NumberInt("138"),
        NumberInt("134"),
        NumberInt("152"),
        NumberInt("114")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("94"),
        NumberInt("118"),
        NumberInt("128"),
        NumberInt("117"),
        NumberInt("113"),
        NumberInt("116"),
        NumberInt("106"),
        NumberInt("94"),
        NumberInt("116")
    ],
    paceData: [
        5.3,
        5.2,
        5.9,
        5.7,
        5.9,
        5.8,
        5.1,
        5.7,
        5,
        5.5
    ],
    weekData: [
        NumberInt("34"),
        NumberInt("35"),
        NumberInt("71"),
        NumberInt("69"),
        NumberInt("86"),
        NumberInt("72"),
        NumberInt("70")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("10"),
    currentHeartRate: NumberInt("114"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-23T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-23T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-23T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-23T22:04:19.155Z"),
    updateTime: ISODate("2025-05-23T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afd9"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-22T22:04:19.155Z"),
    date: "2025-05-22",
    heartRateData: [
        NumberInt("69"),
        NumberInt("126"),
        NumberInt("154"),
        NumberInt("104"),
        NumberInt("123"),
        NumberInt("73"),
        NumberInt("99"),
        NumberInt("74"),
        NumberInt("158"),
        NumberInt("74")
    ],
    stepRateData: [
        NumberInt("114"),
        NumberInt("102"),
        NumberInt("106"),
        NumberInt("108"),
        NumberInt("98"),
        NumberInt("118"),
        NumberInt("91"),
        NumberInt("113"),
        NumberInt("95"),
        NumberInt("97")
    ],
    paceData: [
        5.1,
        5.4,
        5.6,
        5.6,
        5.9,
        5.1,
        5.9,
        5.5,
        5.2,
        5.1
    ],
    weekData: [
        NumberInt("32"),
        NumberInt("77"),
        NumberInt("32"),
        NumberInt("50"),
        NumberInt("83"),
        NumberInt("50"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("74"),
    currentStepRate: NumberInt("97"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("74"),
            timestamp: ISODate("2025-05-22T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-22T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-22T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-22T22:04:19.155Z"),
    updateTime: ISODate("2025-05-22T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afda"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-19T22:04:19.155Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("136"),
        NumberInt("114"),
        NumberInt("151"),
        NumberInt("95"),
        NumberInt("115"),
        NumberInt("102"),
        NumberInt("137"),
        NumberInt("130"),
        NumberInt("84"),
        NumberInt("83")
    ],
    stepRateData: [
        NumberInt("127"),
        NumberInt("128"),
        NumberInt("96"),
        NumberInt("113"),
        NumberInt("90"),
        NumberInt("90"),
        NumberInt("112"),
        NumberInt("96"),
        NumberInt("92"),
        NumberInt("96")
    ],
    paceData: [
        5.7,
        5.2,
        5.6,
        5.8,
        5.1,
        5.4,
        6,
        5.3,
        5.1,
        5.8
    ],
    weekData: [
        NumberInt("43"),
        NumberInt("59"),
        NumberInt("34"),
        NumberInt("84"),
        NumberInt("89"),
        NumberInt("75"),
        NumberInt("73")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("83"),
    currentStepRate: NumberInt("96"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("83"),
            timestamp: ISODate("2025-05-19T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-19T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-19T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-19T22:04:19.155Z"),
    updateTime: ISODate("2025-05-19T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afdb"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-18T22:04:19.155Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("135"),
        NumberInt("130"),
        NumberInt("151"),
        NumberInt("118"),
        NumberInt("141"),
        NumberInt("126"),
        NumberInt("122"),
        NumberInt("120"),
        NumberInt("88"),
        NumberInt("63")
    ],
    stepRateData: [
        NumberInt("130"),
        NumberInt("124"),
        NumberInt("97"),
        NumberInt("118"),
        NumberInt("115"),
        NumberInt("90"),
        NumberInt("111"),
        NumberInt("124"),
        NumberInt("106"),
        NumberInt("100")
    ],
    paceData: [
        5.7,
        5.9,
        5.2,
        6,
        5.6,
        5.7,
        5.5,
        5.8,
        5.2,
        5.6
    ],
    weekData: [
        NumberInt("50"),
        NumberInt("52"),
        NumberInt("81"),
        NumberInt("81"),
        NumberInt("40"),
        NumberInt("41"),
        NumberInt("79")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("63"),
    currentStepRate: NumberInt("100"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("63"),
            timestamp: ISODate("2025-05-18T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-18T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-18T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-18T22:04:19.155Z"),
    updateTime: ISODate("2025-05-18T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afdc"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-17T22:04:19.155Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("137"),
        NumberInt("100"),
        NumberInt("105"),
        NumberInt("143"),
        NumberInt("62"),
        NumberInt("119"),
        NumberInt("132"),
        NumberInt("113"),
        NumberInt("144"),
        NumberInt("91")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("107"),
        NumberInt("116"),
        NumberInt("126"),
        NumberInt("104"),
        NumberInt("119"),
        NumberInt("104"),
        NumberInt("121"),
        NumberInt("122"),
        NumberInt("121")
    ],
    paceData: [
        5.6,
        5.6,
        5.4,
        5.1,
        5.4,
        5.7,
        5.8,
        5.8,
        5.8,
        5.6
    ],
    weekData: [
        NumberInt("30"),
        NumberInt("40"),
        NumberInt("68"),
        NumberInt("41"),
        NumberInt("49"),
        NumberInt("78"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("91"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-17T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-17T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-17T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-17T22:04:19.155Z"),
    updateTime: ISODate("2025-05-17T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afdd"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-16T22:04:19.155Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("142"),
        NumberInt("81"),
        NumberInt("81"),
        NumberInt("60"),
        NumberInt("160"),
        NumberInt("108"),
        NumberInt("148"),
        NumberInt("159"),
        NumberInt("61"),
        NumberInt("143")
    ],
    stepRateData: [
        NumberInt("105"),
        NumberInt("96"),
        NumberInt("113"),
        NumberInt("104"),
        NumberInt("95"),
        NumberInt("115"),
        NumberInt("122"),
        NumberInt("120"),
        NumberInt("97"),
        NumberInt("121")
    ],
    paceData: [
        5,
        5.6,
        5.6,
        5.8,
        5.5,
        5.3,
        5.6,
        5.9,
        5.5,
        5.2
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("45"),
        NumberInt("84"),
        NumberInt("70"),
        NumberInt("32"),
        NumberInt("78"),
        NumberInt("83")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("143"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("143"),
            timestamp: ISODate("2025-05-16T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-16T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-16T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-16T22:04:19.155Z"),
    updateTime: ISODate("2025-05-16T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afde"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-15T22:04:19.155Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("93"),
        NumberInt("100"),
        NumberInt("82"),
        NumberInt("85"),
        NumberInt("98"),
        NumberInt("126"),
        NumberInt("151"),
        NumberInt("92"),
        NumberInt("82"),
        NumberInt("144")
    ],
    stepRateData: [
        NumberInt("103"),
        NumberInt("122"),
        NumberInt("114"),
        NumberInt("127"),
        NumberInt("100"),
        NumberInt("110"),
        NumberInt("125"),
        NumberInt("107"),
        NumberInt("99"),
        NumberInt("97")
    ],
    paceData: [
        5.5,
        5.5,
        5.7,
        5.5,
        5.2,
        5.7,
        5.8,
        5.4,
        5.4,
        5.2
    ],
    weekData: [
        NumberInt("34"),
        NumberInt("83"),
        NumberInt("36"),
        NumberInt("83"),
        NumberInt("39"),
        NumberInt("54"),
        NumberInt("71")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("144"),
    currentStepRate: NumberInt("97"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("144"),
            timestamp: ISODate("2025-05-15T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-15T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-15T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-15T22:04:19.155Z"),
    updateTime: ISODate("2025-05-15T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afdf"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-14T22:04:19.155Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("124"),
        NumberInt("72"),
        NumberInt("66"),
        NumberInt("155"),
        NumberInt("70"),
        NumberInt("73"),
        NumberInt("76"),
        NumberInt("149"),
        NumberInt("109"),
        NumberInt("148")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("114"),
        NumberInt("105"),
        NumberInt("113"),
        NumberInt("102"),
        NumberInt("104"),
        NumberInt("104"),
        NumberInt("112"),
        NumberInt("98"),
        NumberInt("130")
    ],
    paceData: [
        5.6,
        5.6,
        5.3,
        5.8,
        5.3,
        5.1,
        5.6,
        5.4,
        5.4,
        5.6
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("64"),
        NumberInt("63"),
        NumberInt("39"),
        NumberInt("89"),
        NumberInt("37"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("93"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("148"),
    currentStepRate: NumberInt("130"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("148"),
            timestamp: ISODate("2025-05-14T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("130"),
            timestamp: ISODate("2025-05-14T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-14T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-14T22:04:19.155Z"),
    updateTime: ISODate("2025-05-14T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afe0"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-13T22:04:19.155Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("113"),
        NumberInt("131"),
        NumberInt("71"),
        NumberInt("131"),
        NumberInt("93"),
        NumberInt("123"),
        NumberInt("143"),
        NumberInt("149"),
        NumberInt("108"),
        NumberInt("91")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("121"),
        NumberInt("100"),
        NumberInt("91"),
        NumberInt("102"),
        NumberInt("100"),
        NumberInt("128"),
        NumberInt("91"),
        NumberInt("91"),
        NumberInt("105")
    ],
    paceData: [
        5.5,
        5.3,
        5.6,
        5.9,
        5.4,
        5.4,
        5.3,
        5.6,
        5.5,
        5.3
    ],
    weekData: [
        NumberInt("80"),
        NumberInt("61"),
        NumberInt("59"),
        NumberInt("59"),
        NumberInt("87"),
        NumberInt("84"),
        NumberInt("34")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("91"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-13T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-05-13T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-13T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-13T22:04:19.155Z"),
    updateTime: ISODate("2025-05-13T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afe1"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-12T22:04:19.155Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("115"),
        NumberInt("103"),
        NumberInt("65"),
        NumberInt("95"),
        NumberInt("152"),
        NumberInt("130"),
        NumberInt("118"),
        NumberInt("155"),
        NumberInt("108"),
        NumberInt("86")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("98"),
        NumberInt("117"),
        NumberInt("124"),
        NumberInt("109"),
        NumberInt("96"),
        NumberInt("124"),
        NumberInt("113"),
        NumberInt("118"),
        NumberInt("99")
    ],
    paceData: [
        5.7,
        5.4,
        5.7,
        5.5,
        5.8,
        5.6,
        5.2,
        5.7,
        6,
        5.2
    ],
    weekData: [
        NumberInt("65"),
        NumberInt("30"),
        NumberInt("75"),
        NumberInt("53"),
        NumberInt("88"),
        NumberInt("60"),
        NumberInt("45")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("72"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("86"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("86"),
            timestamp: ISODate("2025-05-12T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-12T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-12T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-12T22:04:19.155Z"),
    updateTime: ISODate("2025-05-12T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afe2"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-11T22:04:19.155Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("105"),
        NumberInt("84"),
        NumberInt("156"),
        NumberInt("101"),
        NumberInt("96"),
        NumberInt("102"),
        NumberInt("141"),
        NumberInt("101"),
        NumberInt("98"),
        NumberInt("142")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("96"),
        NumberInt("106"),
        NumberInt("95"),
        NumberInt("125"),
        NumberInt("126"),
        NumberInt("97"),
        NumberInt("102"),
        NumberInt("127"),
        NumberInt("114")
    ],
    paceData: [
        5.4,
        5.6,
        5.8,
        5,
        5.4,
        5.7,
        5.9,
        5.2,
        5.8,
        6
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("73"),
        NumberInt("81"),
        NumberInt("88"),
        NumberInt("44"),
        NumberInt("68"),
        NumberInt("86")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("27"),
    currentHeartRate: NumberInt("142"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("142"),
            timestamp: ISODate("2025-05-11T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-11T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-11T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-11T22:04:19.155Z"),
    updateTime: ISODate("2025-05-11T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afe3"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-10T22:04:19.155Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("64"),
        NumberInt("135"),
        NumberInt("97"),
        NumberInt("76"),
        NumberInt("147"),
        NumberInt("74"),
        NumberInt("83"),
        NumberInt("123"),
        NumberInt("125"),
        NumberInt("156")
    ],
    stepRateData: [
        NumberInt("117"),
        NumberInt("93"),
        NumberInt("121"),
        NumberInt("126"),
        NumberInt("120"),
        NumberInt("99"),
        NumberInt("98"),
        NumberInt("111"),
        NumberInt("93"),
        NumberInt("91")
    ],
    paceData: [
        5.1,
        5.6,
        5.6,
        5.3,
        5.7,
        5.2,
        5.8,
        5.3,
        5.8,
        5
    ],
    weekData: [
        NumberInt("87"),
        NumberInt("64"),
        NumberInt("61"),
        NumberInt("90"),
        NumberInt("49"),
        NumberInt("47"),
        NumberInt("63")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("156"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("156"),
            timestamp: ISODate("2025-05-10T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-10T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-10T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-10T22:04:19.155Z"),
    updateTime: ISODate("2025-05-10T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afe4"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-09T22:04:19.155Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("147"),
        NumberInt("158"),
        NumberInt("113"),
        NumberInt("76"),
        NumberInt("145"),
        NumberInt("101"),
        NumberInt("112"),
        NumberInt("115"),
        NumberInt("117"),
        NumberInt("64")
    ],
    stepRateData: [
        NumberInt("127"),
        NumberInt("101"),
        NumberInt("90"),
        NumberInt("99"),
        NumberInt("96"),
        NumberInt("112"),
        NumberInt("91"),
        NumberInt("124"),
        NumberInt("127"),
        NumberInt("90")
    ],
    paceData: [
        5.3,
        5.9,
        5.7,
        5.1,
        5.9,
        5.2,
        5.7,
        5.8,
        5.6,
        6
    ],
    weekData: [
        NumberInt("33"),
        NumberInt("53"),
        NumberInt("88"),
        NumberInt("35"),
        NumberInt("71"),
        NumberInt("66"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("90"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("64"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("64"),
            timestamp: ISODate("2025-05-09T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-09T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-09T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-09T22:04:19.155Z"),
    updateTime: ISODate("2025-05-09T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afe5"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-08T22:04:19.155Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("62"),
        NumberInt("107"),
        NumberInt("131"),
        NumberInt("113"),
        NumberInt("144"),
        NumberInt("157"),
        NumberInt("67"),
        NumberInt("89"),
        NumberInt("77"),
        NumberInt("139")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("112"),
        NumberInt("106"),
        NumberInt("119"),
        NumberInt("102"),
        NumberInt("115"),
        NumberInt("127"),
        NumberInt("115"),
        NumberInt("106"),
        NumberInt("116")
    ],
    paceData: [
        5.5,
        5.4,
        5.1,
        5.6,
        5.1,
        5.7,
        5.4,
        5.8,
        5.8,
        5.3
    ],
    weekData: [
        NumberInt("59"),
        NumberInt("65"),
        NumberInt("60"),
        NumberInt("86"),
        NumberInt("47"),
        NumberInt("41"),
        NumberInt("36")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("86"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("139"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("139"),
            timestamp: ISODate("2025-05-08T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-08T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-08T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-08T22:04:19.155Z"),
    updateTime: ISODate("2025-05-08T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afe6"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-07T22:04:19.155Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("74"),
        NumberInt("159"),
        NumberInt("93"),
        NumberInt("96"),
        NumberInt("117"),
        NumberInt("149"),
        NumberInt("139"),
        NumberInt("135"),
        NumberInt("119"),
        NumberInt("63")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("110"),
        NumberInt("90"),
        NumberInt("113"),
        NumberInt("111"),
        NumberInt("91"),
        NumberInt("114"),
        NumberInt("125"),
        NumberInt("98"),
        NumberInt("127")
    ],
    paceData: [
        5,
        5.7,
        5.4,
        5.6,
        5.9,
        5.3,
        5.1,
        5.3,
        5.8,
        5.9
    ],
    weekData: [
        NumberInt("72"),
        NumberInt("52"),
        NumberInt("75"),
        NumberInt("75"),
        NumberInt("61"),
        NumberInt("43"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("93"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("63"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("63"),
            timestamp: ISODate("2025-05-07T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-07T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-07T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-07T22:04:19.155Z"),
    updateTime: ISODate("2025-05-07T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afe7"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-06T22:04:19.155Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("160"),
        NumberInt("68"),
        NumberInt("138"),
        NumberInt("112"),
        NumberInt("80"),
        NumberInt("68"),
        NumberInt("122"),
        NumberInt("145"),
        NumberInt("64"),
        NumberInt("93")
    ],
    stepRateData: [
        NumberInt("103"),
        NumberInt("95"),
        NumberInt("98"),
        NumberInt("92"),
        NumberInt("102"),
        NumberInt("112"),
        NumberInt("112"),
        NumberInt("111"),
        NumberInt("123"),
        NumberInt("95")
    ],
    paceData: [
        5.5,
        5.1,
        5.5,
        5,
        6,
        6,
        5.8,
        5.5,
        5.3,
        5.8
    ],
    weekData: [
        NumberInt("46"),
        NumberInt("61"),
        NumberInt("35"),
        NumberInt("66"),
        NumberInt("38"),
        NumberInt("67"),
        NumberInt("82")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("93"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-06T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-06T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-06T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-06T22:04:19.155Z"),
    updateTime: ISODate("2025-05-06T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afe8"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-05T22:04:19.155Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("158"),
        NumberInt("70"),
        NumberInt("119"),
        NumberInt("132"),
        NumberInt("111"),
        NumberInt("144"),
        NumberInt("136"),
        NumberInt("85"),
        NumberInt("82"),
        NumberInt("83")
    ],
    stepRateData: [
        NumberInt("108"),
        NumberInt("114"),
        NumberInt("102"),
        NumberInt("92"),
        NumberInt("101"),
        NumberInt("98"),
        NumberInt("126"),
        NumberInt("105"),
        NumberInt("125"),
        NumberInt("116")
    ],
    paceData: [
        5.2,
        6,
        5.4,
        5.7,
        5.8,
        5.1,
        5.9,
        5.6,
        5.4,
        5.7
    ],
    weekData: [
        NumberInt("30"),
        NumberInt("53"),
        NumberInt("84"),
        NumberInt("67"),
        NumberInt("39"),
        NumberInt("76"),
        NumberInt("81")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("23"),
    currentHeartRate: NumberInt("83"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("83"),
            timestamp: ISODate("2025-05-05T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-05T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-05T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-05T22:04:19.155Z"),
    updateTime: ISODate("2025-05-05T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afe9"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-04T22:04:19.155Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("86"),
        NumberInt("130"),
        NumberInt("149"),
        NumberInt("140"),
        NumberInt("129"),
        NumberInt("87"),
        NumberInt("146"),
        NumberInt("100"),
        NumberInt("122"),
        NumberInt("123")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("126"),
        NumberInt("100"),
        NumberInt("90"),
        NumberInt("119"),
        NumberInt("127"),
        NumberInt("97"),
        NumberInt("128"),
        NumberInt("97"),
        NumberInt("115")
    ],
    paceData: [
        5.5,
        6,
        5.8,
        5.4,
        5.5,
        5.2,
        5.7,
        5.1,
        6,
        5.5
    ],
    weekData: [
        NumberInt("74"),
        NumberInt("75"),
        NumberInt("49"),
        NumberInt("80"),
        NumberInt("67"),
        NumberInt("34"),
        NumberInt("66")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("123"),
    currentStepRate: NumberInt("115"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-04T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-05-04T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-04T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-04T22:04:19.155Z"),
    updateTime: ISODate("2025-05-04T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afea"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-03T22:04:19.155Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("91"),
        NumberInt("74"),
        NumberInt("60"),
        NumberInt("107"),
        NumberInt("72"),
        NumberInt("123"),
        NumberInt("77"),
        NumberInt("139"),
        NumberInt("121"),
        NumberInt("114")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("98"),
        NumberInt("110"),
        NumberInt("103"),
        NumberInt("113"),
        NumberInt("123"),
        NumberInt("126"),
        NumberInt("95"),
        NumberInt("98"),
        NumberInt("91")
    ],
    paceData: [
        5.3,
        5.4,
        5.9,
        5.1,
        5.5,
        5.6,
        5.2,
        5.3,
        5.3,
        5.4
    ],
    weekData: [
        NumberInt("47"),
        NumberInt("31"),
        NumberInt("34"),
        NumberInt("31"),
        NumberInt("56"),
        NumberInt("37"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("90"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("114"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-03T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-03T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-03T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-03T22:04:19.155Z"),
    updateTime: ISODate("2025-05-03T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afeb"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-02T22:04:19.155Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("111"),
        NumberInt("141"),
        NumberInt("124"),
        NumberInt("101"),
        NumberInt("129"),
        NumberInt("158"),
        NumberInt("104"),
        NumberInt("153"),
        NumberInt("64"),
        NumberInt("129")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("110"),
        NumberInt("123"),
        NumberInt("128"),
        NumberInt("97"),
        NumberInt("119"),
        NumberInt("103"),
        NumberInt("93"),
        NumberInt("94"),
        NumberInt("99")
    ],
    paceData: [
        5.6,
        5.2,
        5,
        5,
        5.9,
        5.2,
        5.5,
        5.9,
        5.3,
        5.6
    ],
    weekData: [
        NumberInt("46"),
        NumberInt("86"),
        NumberInt("82"),
        NumberInt("80"),
        NumberInt("61"),
        NumberInt("47"),
        NumberInt("65")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("90"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("129"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-05-02T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-02T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-02T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-02T22:04:19.155Z"),
    updateTime: ISODate("2025-05-02T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afec"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-05-01T22:04:19.155Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("77"),
        NumberInt("113"),
        NumberInt("75"),
        NumberInt("63"),
        NumberInt("119"),
        NumberInt("111"),
        NumberInt("137"),
        NumberInt("92"),
        NumberInt("148"),
        NumberInt("73")
    ],
    stepRateData: [
        NumberInt("122"),
        NumberInt("119"),
        NumberInt("101"),
        NumberInt("119"),
        NumberInt("101"),
        NumberInt("104"),
        NumberInt("113"),
        NumberInt("119"),
        NumberInt("95"),
        NumberInt("118")
    ],
    paceData: [
        5.5,
        5.2,
        5.4,
        5.7,
        5.9,
        5.6,
        5.9,
        5.1,
        5.7,
        5.5
    ],
    weekData: [
        NumberInt("61"),
        NumberInt("35"),
        NumberInt("82"),
        NumberInt("61"),
        NumberInt("65"),
        NumberInt("42"),
        NumberInt("72")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("73"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("73"),
            timestamp: ISODate("2025-05-01T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-05-01T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-01T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-05-01T22:04:19.155Z"),
    updateTime: ISODate("2025-05-01T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afed"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-30T22:04:19.155Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("146"),
        NumberInt("79"),
        NumberInt("93"),
        NumberInt("77"),
        NumberInt("155"),
        NumberInt("92"),
        NumberInt("75"),
        NumberInt("73"),
        NumberInt("60"),
        NumberInt("159")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("97"),
        NumberInt("130"),
        NumberInt("94"),
        NumberInt("114"),
        NumberInt("92"),
        NumberInt("118"),
        NumberInt("99"),
        NumberInt("126"),
        NumberInt("95")
    ],
    paceData: [
        5.1,
        5.1,
        5.1,
        5.9,
        5.3,
        5.4,
        5.5,
        5.1,
        5.8,
        5.8
    ],
    weekData: [
        NumberInt("85"),
        NumberInt("89"),
        NumberInt("37"),
        NumberInt("41"),
        NumberInt("81"),
        NumberInt("73"),
        NumberInt("62")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("159"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("159"),
            timestamp: ISODate("2025-04-30T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-30T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-30T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-04-30T22:04:19.155Z"),
    updateTime: ISODate("2025-04-30T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afee"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-29T22:04:19.155Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("73"),
        NumberInt("113"),
        NumberInt("75"),
        NumberInt("70"),
        NumberInt("138"),
        NumberInt("142"),
        NumberInt("101"),
        NumberInt("63"),
        NumberInt("87"),
        NumberInt("77")
    ],
    stepRateData: [
        NumberInt("127"),
        NumberInt("123"),
        NumberInt("95"),
        NumberInt("116"),
        NumberInt("106"),
        NumberInt("127"),
        NumberInt("98"),
        NumberInt("95"),
        NumberInt("95"),
        NumberInt("95")
    ],
    paceData: [
        5.8,
        5.5,
        5.8,
        5.7,
        5.9,
        5.9,
        5.4,
        5.4,
        5.1,
        5.8
    ],
    weekData: [
        NumberInt("73"),
        NumberInt("67"),
        NumberInt("76"),
        NumberInt("77"),
        NumberInt("69"),
        NumberInt("38"),
        NumberInt("39")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("77"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("77"),
            timestamp: ISODate("2025-04-29T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-29T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-04-29T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-04-29T22:04:19.155Z"),
    updateTime: ISODate("2025-04-29T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afef"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-27T22:04:19.155Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("137"),
        NumberInt("90"),
        NumberInt("145"),
        NumberInt("96"),
        NumberInt("100"),
        NumberInt("79"),
        NumberInt("141"),
        NumberInt("95"),
        NumberInt("146"),
        NumberInt("105")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("97"),
        NumberInt("127"),
        NumberInt("107"),
        NumberInt("120"),
        NumberInt("127"),
        NumberInt("90"),
        NumberInt("123"),
        NumberInt("99"),
        NumberInt("116")
    ],
    paceData: [
        5.9,
        5.4,
        5.1,
        5.5,
        5.9,
        5.8,
        5.3,
        5.3,
        5.3,
        5.5
    ],
    weekData: [
        NumberInt("38"),
        NumberInt("75"),
        NumberInt("43"),
        NumberInt("53"),
        NumberInt("73"),
        NumberInt("80"),
        NumberInt("43")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("105"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-04-27T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-04-27T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-27T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-04-27T22:04:19.155Z"),
    updateTime: ISODate("2025-04-27T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34aff0"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-26T22:04:19.155Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("124"),
        NumberInt("77"),
        NumberInt("145"),
        NumberInt("94"),
        NumberInt("65"),
        NumberInt("118"),
        NumberInt("158"),
        NumberInt("101"),
        NumberInt("70"),
        NumberInt("116")
    ],
    stepRateData: [
        NumberInt("118"),
        NumberInt("95"),
        NumberInt("99"),
        NumberInt("91"),
        NumberInt("123"),
        NumberInt("102"),
        NumberInt("128"),
        NumberInt("110"),
        NumberInt("104"),
        NumberInt("105")
    ],
    paceData: [
        5.8,
        5.5,
        5.1,
        5.3,
        5.2,
        5.6,
        6,
        5,
        5.2,
        5.8
    ],
    weekData: [
        NumberInt("80"),
        NumberInt("65"),
        NumberInt("79"),
        NumberInt("85"),
        NumberInt("38"),
        NumberInt("81"),
        NumberInt("80")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("116"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-04-26T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-04-26T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-26T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-04-26T22:04:19.155Z"),
    updateTime: ISODate("2025-04-26T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34aff1"),
    userId: ObjectId("682beb515253db543d72043d"),
    timestamp: ISODate("2025-04-25T22:04:19.155Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("106"),
        NumberInt("116"),
        NumberInt("67"),
        NumberInt("113"),
        NumberInt("63"),
        NumberInt("119"),
        NumberInt("70"),
        NumberInt("98"),
        NumberInt("119"),
        NumberInt("90")
    ],
    stepRateData: [
        NumberInt("124"),
        NumberInt("97"),
        NumberInt("104"),
        NumberInt("129"),
        NumberInt("114"),
        NumberInt("103"),
        NumberInt("102"),
        NumberInt("121"),
        NumberInt("109"),
        NumberInt("102")
    ],
    paceData: [
        5.5,
        5.5,
        5.5,
        5.1,
        5.9,
        5.4,
        5.1,
        5,
        5.2,
        5.2
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("87"),
        NumberInt("57"),
        NumberInt("89"),
        NumberInt("79"),
        NumberInt("42"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("90"),
    currentStepRate: NumberInt("102"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-04-25T22:04:19.155Z")
        },
        {
            type: "stepRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-04-25T22:04:19.155Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-25T22:04:19.155Z")
        }
    ],
    createTime: ISODate("2025-04-25T22:04:19.155Z"),
    updateTime: ISODate("2025-04-25T22:04:19.155Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34aff2"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-24T22:04:19.169Z"),
    date: "2025-05-24",
    heartRateData: [
        NumberInt("140"),
        NumberInt("138"),
        NumberInt("137"),
        NumberInt("91"),
        NumberInt("158"),
        NumberInt("113"),
        NumberInt("118"),
        NumberInt("86"),
        NumberInt("117"),
        NumberInt("97")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("113"),
        NumberInt("120"),
        NumberInt("128"),
        NumberInt("124"),
        NumberInt("111"),
        NumberInt("112"),
        NumberInt("122"),
        NumberInt("128"),
        NumberInt("111")
    ],
    paceData: [
        5.3,
        5.9,
        5.8,
        5.2,
        5.1,
        5.2,
        5,
        5.6,
        5.2,
        5.8
    ],
    weekData: [
        NumberInt("58"),
        NumberInt("71"),
        NumberInt("81"),
        NumberInt("37"),
        NumberInt("55"),
        NumberInt("45"),
        NumberInt("70")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("97"),
    currentStepRate: NumberInt("111"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-24T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("111"),
            timestamp: ISODate("2025-05-24T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-24T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-24T22:04:19.169Z"),
    updateTime: ISODate("2025-05-24T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34aff3"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-23T22:04:19.169Z"),
    date: "2025-05-23",
    heartRateData: [
        NumberInt("76"),
        NumberInt("142"),
        NumberInt("61"),
        NumberInt("160"),
        NumberInt("111"),
        NumberInt("152"),
        NumberInt("139"),
        NumberInt("126"),
        NumberInt("135"),
        NumberInt("80")
    ],
    stepRateData: [
        NumberInt("91"),
        NumberInt("114"),
        NumberInt("118"),
        NumberInt("102"),
        NumberInt("117"),
        NumberInt("96"),
        NumberInt("115"),
        NumberInt("125"),
        NumberInt("126"),
        NumberInt("116")
    ],
    paceData: [
        5.5,
        5.3,
        6,
        6,
        5.6,
        5.7,
        5,
        5.8,
        6,
        5.6
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("53"),
        NumberInt("48"),
        NumberInt("75"),
        NumberInt("70"),
        NumberInt("38"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("80"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("80"),
            timestamp: ISODate("2025-05-23T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-23T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-23T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-23T22:04:19.169Z"),
    updateTime: ISODate("2025-05-23T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34aff4"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-22T22:04:19.169Z"),
    date: "2025-05-22",
    heartRateData: [
        NumberInt("96"),
        NumberInt("154"),
        NumberInt("82"),
        NumberInt("88"),
        NumberInt("97"),
        NumberInt("92"),
        NumberInt("93"),
        NumberInt("110"),
        NumberInt("148"),
        NumberInt("105")
    ],
    stepRateData: [
        NumberInt("105"),
        NumberInt("130"),
        NumberInt("99"),
        NumberInt("124"),
        NumberInt("118"),
        NumberInt("127"),
        NumberInt("125"),
        NumberInt("96"),
        NumberInt("127"),
        NumberInt("107")
    ],
    paceData: [
        5.9,
        5.3,
        5.3,
        6,
        5.1,
        5.1,
        5.2,
        5.4,
        5.1,
        5.4
    ],
    weekData: [
        NumberInt("30"),
        NumberInt("88"),
        NumberInt("69"),
        NumberInt("53"),
        NumberInt("78"),
        NumberInt("75"),
        NumberInt("46")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("72"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("105"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-05-22T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-22T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-22T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-22T22:04:19.169Z"),
    updateTime: ISODate("2025-05-22T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34aff5"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-21T22:04:19.169Z"),
    date: "2025-05-21",
    heartRateData: [
        NumberInt("65"),
        NumberInt("148"),
        NumberInt("154"),
        NumberInt("98"),
        NumberInt("150"),
        NumberInt("151"),
        NumberInt("78"),
        NumberInt("79"),
        NumberInt("133"),
        NumberInt("74")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("95"),
        NumberInt("107"),
        NumberInt("101"),
        NumberInt("106"),
        NumberInt("91"),
        NumberInt("112"),
        NumberInt("93"),
        NumberInt("108"),
        NumberInt("104")
    ],
    paceData: [
        5,
        5.4,
        5.7,
        5.2,
        5.5,
        5.7,
        5.3,
        5.1,
        5.1,
        5.9
    ],
    weekData: [
        NumberInt("32"),
        NumberInt("34"),
        NumberInt("77"),
        NumberInt("81"),
        NumberInt("89"),
        NumberInt("44"),
        NumberInt("82")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("74"),
    currentStepRate: NumberInt("104"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("74"),
            timestamp: ISODate("2025-05-21T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-05-21T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-21T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-21T22:04:19.169Z"),
    updateTime: ISODate("2025-05-21T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34aff6"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-20T22:04:19.169Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("114"),
        NumberInt("97"),
        NumberInt("92"),
        NumberInt("156"),
        NumberInt("159"),
        NumberInt("134"),
        NumberInt("109"),
        NumberInt("141"),
        NumberInt("96"),
        NumberInt("135")
    ],
    stepRateData: [
        NumberInt("125"),
        NumberInt("116"),
        NumberInt("128"),
        NumberInt("91"),
        NumberInt("121"),
        NumberInt("117"),
        NumberInt("99"),
        NumberInt("127"),
        NumberInt("100"),
        NumberInt("112")
    ],
    paceData: [
        5.9,
        5.5,
        5.3,
        5.1,
        5.8,
        5.9,
        5.1,
        5.2,
        5.9,
        5.5
    ],
    weekData: [
        NumberInt("71"),
        NumberInt("42"),
        NumberInt("47"),
        NumberInt("36"),
        NumberInt("54"),
        NumberInt("84"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("135"),
    currentStepRate: NumberInt("112"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("135"),
            timestamp: ISODate("2025-05-20T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-20T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-20T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-20T22:04:19.169Z"),
    updateTime: ISODate("2025-05-20T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34aff7"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-19T22:04:19.169Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("124"),
        NumberInt("130"),
        NumberInt("138"),
        NumberInt("100"),
        NumberInt("136"),
        NumberInt("136"),
        NumberInt("99"),
        NumberInt("141"),
        NumberInt("98"),
        NumberInt("106")
    ],
    stepRateData: [
        NumberInt("112"),
        NumberInt("94"),
        NumberInt("98"),
        NumberInt("106"),
        NumberInt("128"),
        NumberInt("122"),
        NumberInt("129"),
        NumberInt("124"),
        NumberInt("111"),
        NumberInt("112")
    ],
    paceData: [
        5.6,
        5.9,
        5.9,
        5.4,
        5.8,
        5.5,
        5.2,
        5.3,
        6,
        5.1
    ],
    weekData: [
        NumberInt("90"),
        NumberInt("45"),
        NumberInt("35"),
        NumberInt("45"),
        NumberInt("40"),
        NumberInt("72"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("106"),
    currentStepRate: NumberInt("112"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-19T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-19T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-19T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-19T22:04:19.169Z"),
    updateTime: ISODate("2025-05-19T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34aff8"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-18T22:04:19.169Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("138"),
        NumberInt("116"),
        NumberInt("120"),
        NumberInt("126"),
        NumberInt("88"),
        NumberInt("65"),
        NumberInt("64"),
        NumberInt("72"),
        NumberInt("116"),
        NumberInt("133")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("93"),
        NumberInt("100"),
        NumberInt("92"),
        NumberInt("118"),
        NumberInt("117"),
        NumberInt("116"),
        NumberInt("116"),
        NumberInt("111"),
        NumberInt("112")
    ],
    paceData: [
        6,
        5.4,
        5.3,
        5.9,
        5.5,
        5.2,
        5.1,
        5.4,
        5.4,
        5.7
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("76"),
        NumberInt("52"),
        NumberInt("39"),
        NumberInt("83"),
        NumberInt("69"),
        NumberInt("67")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("133"),
    currentStepRate: NumberInt("112"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("133"),
            timestamp: ISODate("2025-05-18T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-18T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-18T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-18T22:04:19.169Z"),
    updateTime: ISODate("2025-05-18T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34aff9"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-17T22:04:19.169Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("128"),
        NumberInt("131"),
        NumberInt("66"),
        NumberInt("118"),
        NumberInt("143"),
        NumberInt("135"),
        NumberInt("64"),
        NumberInt("104"),
        NumberInt("134"),
        NumberInt("96")
    ],
    stepRateData: [
        NumberInt("91"),
        NumberInt("100"),
        NumberInt("115"),
        NumberInt("105"),
        NumberInt("98"),
        NumberInt("107"),
        NumberInt("90"),
        NumberInt("113"),
        NumberInt("104"),
        NumberInt("114")
    ],
    paceData: [
        5.7,
        5.4,
        5.1,
        5.8,
        5.8,
        5.6,
        5.8,
        5.5,
        5.5,
        5.6
    ],
    weekData: [
        NumberInt("39"),
        NumberInt("45"),
        NumberInt("56"),
        NumberInt("43"),
        NumberInt("50"),
        NumberInt("71"),
        NumberInt("54")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("96"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-17T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-17T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-17T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-17T22:04:19.169Z"),
    updateTime: ISODate("2025-05-17T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34affa"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-16T22:04:19.169Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("129"),
        NumberInt("145"),
        NumberInt("74"),
        NumberInt("101"),
        NumberInt("154"),
        NumberInt("68"),
        NumberInt("132"),
        NumberInt("138"),
        NumberInt("75"),
        NumberInt("76")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("92"),
        NumberInt("113"),
        NumberInt("104"),
        NumberInt("119"),
        NumberInt("123"),
        NumberInt("106"),
        NumberInt("124"),
        NumberInt("122"),
        NumberInt("108")
    ],
    paceData: [
        5.7,
        5.1,
        5.2,
        5.8,
        5.2,
        5.8,
        5.4,
        5.8,
        5.4,
        5.9
    ],
    weekData: [
        NumberInt("63"),
        NumberInt("30"),
        NumberInt("48"),
        NumberInt("63"),
        NumberInt("43"),
        NumberInt("69"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("76"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("76"),
            timestamp: ISODate("2025-05-16T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-16T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-16T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-16T22:04:19.169Z"),
    updateTime: ISODate("2025-05-16T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34affb"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-15T22:04:19.169Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("110"),
        NumberInt("100"),
        NumberInt("104"),
        NumberInt("66"),
        NumberInt("68"),
        NumberInt("136"),
        NumberInt("136"),
        NumberInt("159"),
        NumberInt("136"),
        NumberInt("88")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("95"),
        NumberInt("127"),
        NumberInt("111"),
        NumberInt("130"),
        NumberInt("103"),
        NumberInt("90"),
        NumberInt("130"),
        NumberInt("113"),
        NumberInt("122")
    ],
    paceData: [
        5.1,
        5.2,
        5.6,
        5.5,
        5.4,
        5.4,
        5.7,
        5.4,
        5.5,
        5.5
    ],
    weekData: [
        NumberInt("77"),
        NumberInt("45"),
        NumberInt("80"),
        NumberInt("83"),
        NumberInt("66"),
        NumberInt("36"),
        NumberInt("57")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("31"),
    currentHeartRate: NumberInt("88"),
    currentStepRate: NumberInt("122"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("88"),
            timestamp: ISODate("2025-05-15T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("122"),
            timestamp: ISODate("2025-05-15T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-15T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-15T22:04:19.169Z"),
    updateTime: ISODate("2025-05-15T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34affc"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-14T22:04:19.169Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("132"),
        NumberInt("70"),
        NumberInt("130"),
        NumberInt("157"),
        NumberInt("71"),
        NumberInt("127"),
        NumberInt("68"),
        NumberInt("116"),
        NumberInt("71"),
        NumberInt("99")
    ],
    stepRateData: [
        NumberInt("128"),
        NumberInt("108"),
        NumberInt("111"),
        NumberInt("110"),
        NumberInt("122"),
        NumberInt("105"),
        NumberInt("99"),
        NumberInt("118"),
        NumberInt("95"),
        NumberInt("109")
    ],
    paceData: [
        5.3,
        5.3,
        5.4,
        5.9,
        5.4,
        5.7,
        5,
        5.8,
        5.5,
        5.4
    ],
    weekData: [
        NumberInt("81"),
        NumberInt("55"),
        NumberInt("33"),
        NumberInt("39"),
        NumberInt("85"),
        NumberInt("80"),
        NumberInt("62")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("99"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-14T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-14T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-14T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-14T22:04:19.169Z"),
    updateTime: ISODate("2025-05-14T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34affd"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-13T22:04:19.169Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("89"),
        NumberInt("70"),
        NumberInt("94"),
        NumberInt("83"),
        NumberInt("152"),
        NumberInt("120"),
        NumberInt("144"),
        NumberInt("67"),
        NumberInt("132"),
        NumberInt("120")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("104"),
        NumberInt("104"),
        NumberInt("91"),
        NumberInt("128"),
        NumberInt("93"),
        NumberInt("92"),
        NumberInt("94"),
        NumberInt("99"),
        NumberInt("115")
    ],
    paceData: [
        5,
        5.8,
        5.6,
        5.5,
        5.6,
        5.5,
        6,
        5.3,
        5,
        5.6
    ],
    weekData: [
        NumberInt("39"),
        NumberInt("83"),
        NumberInt("81"),
        NumberInt("85"),
        NumberInt("80"),
        NumberInt("47"),
        NumberInt("67")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("64"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("120"),
    currentStepRate: NumberInt("115"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-05-13T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-05-13T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-13T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-13T22:04:19.169Z"),
    updateTime: ISODate("2025-05-13T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34affe"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-12T22:04:19.169Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("89"),
        NumberInt("108"),
        NumberInt("103"),
        NumberInt("62"),
        NumberInt("69"),
        NumberInt("82"),
        NumberInt("84"),
        NumberInt("122"),
        NumberInt("152"),
        NumberInt("146")
    ],
    stepRateData: [
        NumberInt("111"),
        NumberInt("99"),
        NumberInt("123"),
        NumberInt("98"),
        NumberInt("109"),
        NumberInt("92"),
        NumberInt("116"),
        NumberInt("123"),
        NumberInt("95"),
        NumberInt("121")
    ],
    paceData: [
        6,
        5.3,
        5.7,
        5.4,
        5.6,
        5.1,
        5.9,
        5.5,
        5.7,
        5.3
    ],
    weekData: [
        NumberInt("78"),
        NumberInt("41"),
        NumberInt("49"),
        NumberInt("55"),
        NumberInt("69"),
        NumberInt("35"),
        NumberInt("37")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("146"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("146"),
            timestamp: ISODate("2025-05-12T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-12T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-12T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-12T22:04:19.169Z"),
    updateTime: ISODate("2025-05-12T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34afff"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-11T22:04:19.169Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("86"),
        NumberInt("96"),
        NumberInt("90"),
        NumberInt("83"),
        NumberInt("136"),
        NumberInt("83"),
        NumberInt("93"),
        NumberInt("122"),
        NumberInt("118"),
        NumberInt("80")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("93"),
        NumberInt("100"),
        NumberInt("92"),
        NumberInt("90"),
        NumberInt("96"),
        NumberInt("115"),
        NumberInt("95"),
        NumberInt("120"),
        NumberInt("124")
    ],
    paceData: [
        5.4,
        5.2,
        5.8,
        5.7,
        5.4,
        5.2,
        5.9,
        5.1,
        5.8,
        5.2
    ],
    weekData: [
        NumberInt("48"),
        NumberInt("31"),
        NumberInt("76"),
        NumberInt("38"),
        NumberInt("85"),
        NumberInt("42"),
        NumberInt("81")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("80"),
    currentStepRate: NumberInt("124"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("80"),
            timestamp: ISODate("2025-05-11T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-11T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-11T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-11T22:04:19.169Z"),
    updateTime: ISODate("2025-05-11T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b000"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-07T22:04:19.169Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("71"),
        NumberInt("136"),
        NumberInt("109"),
        NumberInt("98"),
        NumberInt("122"),
        NumberInt("159"),
        NumberInt("77"),
        NumberInt("81"),
        NumberInt("68"),
        NumberInt("107")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("91"),
        NumberInt("100"),
        NumberInt("125"),
        NumberInt("91"),
        NumberInt("115"),
        NumberInt("110"),
        NumberInt("100"),
        NumberInt("110"),
        NumberInt("95")
    ],
    paceData: [
        5.4,
        5.8,
        5.9,
        5.3,
        5.4,
        6,
        5.7,
        5.8,
        5.3,
        5.1
    ],
    weekData: [
        NumberInt("75"),
        NumberInt("86"),
        NumberInt("49"),
        NumberInt("30"),
        NumberInt("75"),
        NumberInt("68"),
        NumberInt("86")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("107"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-07T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-07T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-07T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-07T22:04:19.169Z"),
    updateTime: ISODate("2025-05-07T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b001"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-06T22:04:19.169Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("110"),
        NumberInt("108"),
        NumberInt("88"),
        NumberInt("145"),
        NumberInt("123"),
        NumberInt("78"),
        NumberInt("96"),
        NumberInt("107"),
        NumberInt("150"),
        NumberInt("156")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("116"),
        NumberInt("102"),
        NumberInt("102"),
        NumberInt("91"),
        NumberInt("115"),
        NumberInt("113"),
        NumberInt("106"),
        NumberInt("126"),
        NumberInt("96")
    ],
    paceData: [
        5.8,
        5.7,
        5.4,
        6,
        5.1,
        5,
        5.3,
        5.9,
        5.3,
        5.5
    ],
    weekData: [
        NumberInt("37"),
        NumberInt("56"),
        NumberInt("36"),
        NumberInt("49"),
        NumberInt("75"),
        NumberInt("41"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("156"),
    currentStepRate: NumberInt("96"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("156"),
            timestamp: ISODate("2025-05-06T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-06T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-06T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-06T22:04:19.169Z"),
    updateTime: ISODate("2025-05-06T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b002"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-05T22:04:19.169Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("140"),
        NumberInt("151"),
        NumberInt("89"),
        NumberInt("123"),
        NumberInt("147"),
        NumberInt("132"),
        NumberInt("83"),
        NumberInt("106"),
        NumberInt("94"),
        NumberInt("72")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("91"),
        NumberInt("103"),
        NumberInt("115"),
        NumberInt("93"),
        NumberInt("102"),
        NumberInt("98"),
        NumberInt("110"),
        NumberInt("107"),
        NumberInt("105")
    ],
    paceData: [
        5.3,
        5.3,
        5.4,
        6,
        5.6,
        5.7,
        5.6,
        5.5,
        5.8,
        5.3
    ],
    weekData: [
        NumberInt("81"),
        NumberInt("68"),
        NumberInt("32"),
        NumberInt("54"),
        NumberInt("38"),
        NumberInt("39"),
        NumberInt("66")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("92"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("72"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("72"),
            timestamp: ISODate("2025-05-05T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-05-05T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-05T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-05T22:04:19.169Z"),
    updateTime: ISODate("2025-05-05T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b003"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-04T22:04:19.169Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("119"),
        NumberInt("118"),
        NumberInt("159"),
        NumberInt("130"),
        NumberInt("125"),
        NumberInt("84"),
        NumberInt("127"),
        NumberInt("106"),
        NumberInt("101"),
        NumberInt("60")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("97"),
        NumberInt("123"),
        NumberInt("94"),
        NumberInt("96"),
        NumberInt("105"),
        NumberInt("93"),
        NumberInt("130"),
        NumberInt("119"),
        NumberInt("129")
    ],
    paceData: [
        5.6,
        5.1,
        5.6,
        5.1,
        5.1,
        5.2,
        5.3,
        5.9,
        5.3,
        5.3
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("88"),
        NumberInt("85"),
        NumberInt("84"),
        NumberInt("89"),
        NumberInt("40"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("60"),
    currentStepRate: NumberInt("129"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("60"),
            timestamp: ISODate("2025-05-04T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-05-04T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-04T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-04T22:04:19.169Z"),
    updateTime: ISODate("2025-05-04T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b004"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-03T22:04:19.169Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("134"),
        NumberInt("141"),
        NumberInt("68"),
        NumberInt("60"),
        NumberInt("120"),
        NumberInt("81"),
        NumberInt("156"),
        NumberInt("68"),
        NumberInt("155"),
        NumberInt("152")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("126"),
        NumberInt("121"),
        NumberInt("122"),
        NumberInt("105"),
        NumberInt("126"),
        NumberInt("101"),
        NumberInt("90"),
        NumberInt("121"),
        NumberInt("109")
    ],
    paceData: [
        5.9,
        5.1,
        5.9,
        5.6,
        5.3,
        5.9,
        5.8,
        5.7,
        5.8,
        5.4
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("89"),
        NumberInt("67"),
        NumberInt("32"),
        NumberInt("64"),
        NumberInt("88"),
        NumberInt("46")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("67"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("152"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("152"),
            timestamp: ISODate("2025-05-03T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-03T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-03T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-03T22:04:19.169Z"),
    updateTime: ISODate("2025-05-03T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b005"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-02T22:04:19.169Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("99"),
        NumberInt("80"),
        NumberInt("75"),
        NumberInt("148"),
        NumberInt("103"),
        NumberInt("84"),
        NumberInt("142"),
        NumberInt("152"),
        NumberInt("151"),
        NumberInt("151")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("95"),
        NumberInt("103"),
        NumberInt("107"),
        NumberInt("102"),
        NumberInt("95"),
        NumberInt("91"),
        NumberInt("129"),
        NumberInt("122"),
        NumberInt("96")
    ],
    paceData: [
        5.3,
        5.4,
        5.1,
        5.4,
        5.3,
        5.1,
        5.4,
        5.1,
        5.3,
        5
    ],
    weekData: [
        NumberInt("46"),
        NumberInt("31"),
        NumberInt("65"),
        NumberInt("63"),
        NumberInt("49"),
        NumberInt("36"),
        NumberInt("65")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("151"),
    currentStepRate: NumberInt("96"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("151"),
            timestamp: ISODate("2025-05-02T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-02T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-02T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-02T22:04:19.169Z"),
    updateTime: ISODate("2025-05-02T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b006"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-05-01T22:04:19.169Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("94"),
        NumberInt("153"),
        NumberInt("96"),
        NumberInt("101"),
        NumberInt("133"),
        NumberInt("66"),
        NumberInt("118"),
        NumberInt("64"),
        NumberInt("93"),
        NumberInt("160")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("124"),
        NumberInt("93"),
        NumberInt("109"),
        NumberInt("128"),
        NumberInt("114"),
        NumberInt("109"),
        NumberInt("102"),
        NumberInt("108"),
        NumberInt("115")
    ],
    paceData: [
        5.5,
        5.2,
        5.5,
        5.1,
        5.2,
        5.8,
        5.3,
        5.4,
        5.6,
        5.7
    ],
    weekData: [
        NumberInt("42"),
        NumberInt("70"),
        NumberInt("73"),
        NumberInt("62"),
        NumberInt("33"),
        NumberInt("55"),
        NumberInt("62")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("160"),
    currentStepRate: NumberInt("115"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("160"),
            timestamp: ISODate("2025-05-01T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-05-01T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-01T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-05-01T22:04:19.169Z"),
    updateTime: ISODate("2025-05-01T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b007"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-30T22:04:19.169Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("75"),
        NumberInt("113"),
        NumberInt("87"),
        NumberInt("115"),
        NumberInt("92"),
        NumberInt("60"),
        NumberInt("137"),
        NumberInt("138"),
        NumberInt("159"),
        NumberInt("109")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("127"),
        NumberInt("98"),
        NumberInt("92"),
        NumberInt("130"),
        NumberInt("125"),
        NumberInt("99"),
        NumberInt("113"),
        NumberInt("96"),
        NumberInt("121")
    ],
    paceData: [
        5.8,
        5.4,
        5.4,
        5.1,
        5.2,
        5.8,
        5.8,
        5.9,
        5.9,
        5.5
    ],
    weekData: [
        NumberInt("51"),
        NumberInt("75"),
        NumberInt("82"),
        NumberInt("79"),
        NumberInt("50"),
        NumberInt("74"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("64"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("109"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-04-30T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-04-30T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-30T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-04-30T22:04:19.169Z"),
    updateTime: ISODate("2025-04-30T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b008"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-29T22:04:19.169Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("126"),
        NumberInt("99"),
        NumberInt("82"),
        NumberInt("102"),
        NumberInt("120"),
        NumberInt("131"),
        NumberInt("82"),
        NumberInt("119"),
        NumberInt("116"),
        NumberInt("84")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("114"),
        NumberInt("117"),
        NumberInt("129"),
        NumberInt("92"),
        NumberInt("128"),
        NumberInt("98"),
        NumberInt("119"),
        NumberInt("124"),
        NumberInt("126")
    ],
    paceData: [
        5.2,
        5.9,
        5,
        5.1,
        5.5,
        5.8,
        6,
        5.2,
        5.2,
        5.5
    ],
    weekData: [
        NumberInt("80"),
        NumberInt("55"),
        NumberInt("76"),
        NumberInt("70"),
        NumberInt("66"),
        NumberInt("30"),
        NumberInt("50")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("86"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("84"),
    currentStepRate: NumberInt("126"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("84"),
            timestamp: ISODate("2025-04-29T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("126"),
            timestamp: ISODate("2025-04-29T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-29T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-04-29T22:04:19.169Z"),
    updateTime: ISODate("2025-04-29T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b009"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-28T22:04:19.169Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("141"),
        NumberInt("73"),
        NumberInt("94"),
        NumberInt("155"),
        NumberInt("115"),
        NumberInt("136"),
        NumberInt("111"),
        NumberInt("151"),
        NumberInt("69"),
        NumberInt("62")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("121"),
        NumberInt("126"),
        NumberInt("96"),
        NumberInt("111"),
        NumberInt("106"),
        NumberInt("107"),
        NumberInt("122"),
        NumberInt("106"),
        NumberInt("109")
    ],
    paceData: [
        5.6,
        6,
        5.7,
        5.6,
        5.1,
        5.6,
        5.1,
        6,
        5.9,
        5.3
    ],
    weekData: [
        NumberInt("71"),
        NumberInt("42"),
        NumberInt("74"),
        NumberInt("58"),
        NumberInt("75"),
        NumberInt("81"),
        NumberInt("38")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("62"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("62"),
            timestamp: ISODate("2025-04-28T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-04-28T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-28T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-04-28T22:04:19.169Z"),
    updateTime: ISODate("2025-04-28T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b00a"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-27T22:04:19.169Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("63"),
        NumberInt("82"),
        NumberInt("119"),
        NumberInt("83"),
        NumberInt("102"),
        NumberInt("103"),
        NumberInt("99"),
        NumberInt("63"),
        NumberInt("108"),
        NumberInt("148")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("101"),
        NumberInt("100"),
        NumberInt("111"),
        NumberInt("118"),
        NumberInt("96"),
        NumberInt("117"),
        NumberInt("105"),
        NumberInt("98"),
        NumberInt("112")
    ],
    paceData: [
        5.9,
        5.8,
        5.6,
        5.4,
        5.2,
        5.3,
        5.9,
        5.2,
        5.3,
        5.9
    ],
    weekData: [
        NumberInt("38"),
        NumberInt("32"),
        NumberInt("65"),
        NumberInt("81"),
        NumberInt("42"),
        NumberInt("76"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("82"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("148"),
    currentStepRate: NumberInt("112"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("148"),
            timestamp: ISODate("2025-04-27T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-04-27T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-27T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-04-27T22:04:19.169Z"),
    updateTime: ISODate("2025-04-27T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b00b"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-26T22:04:19.169Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("140"),
        NumberInt("109"),
        NumberInt("106"),
        NumberInt("95"),
        NumberInt("153"),
        NumberInt("140"),
        NumberInt("131"),
        NumberInt("149"),
        NumberInt("142"),
        NumberInt("61")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("95"),
        NumberInt("115"),
        NumberInt("102"),
        NumberInt("103"),
        NumberInt("124"),
        NumberInt("91"),
        NumberInt("111"),
        NumberInt("96"),
        NumberInt("120")
    ],
    paceData: [
        5.9,
        5.8,
        5.7,
        5.2,
        5.7,
        5.6,
        5.3,
        5.2,
        5.6,
        5.4
    ],
    weekData: [
        NumberInt("76"),
        NumberInt("46"),
        NumberInt("56"),
        NumberInt("71"),
        NumberInt("42"),
        NumberInt("39"),
        NumberInt("74")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("61"),
    currentStepRate: NumberInt("120"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("61"),
            timestamp: ISODate("2025-04-26T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-04-26T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-26T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-04-26T22:04:19.169Z"),
    updateTime: ISODate("2025-04-26T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b00c"),
    userId: ObjectId("682beb515253db543d72043e"),
    timestamp: ISODate("2025-04-25T22:04:19.169Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("146"),
        NumberInt("106"),
        NumberInt("131"),
        NumberInt("94"),
        NumberInt("87"),
        NumberInt("136"),
        NumberInt("128"),
        NumberInt("90"),
        NumberInt("70"),
        NumberInt("135")
    ],
    stepRateData: [
        NumberInt("97"),
        NumberInt("105"),
        NumberInt("116"),
        NumberInt("97"),
        NumberInt("98"),
        NumberInt("104"),
        NumberInt("108"),
        NumberInt("120"),
        NumberInt("101"),
        NumberInt("124")
    ],
    paceData: [
        5.8,
        5.1,
        5.4,
        5.4,
        5,
        5.2,
        5.6,
        5.1,
        6,
        5.1
    ],
    weekData: [
        NumberInt("46"),
        NumberInt("75"),
        NumberInt("78"),
        NumberInt("37"),
        NumberInt("74"),
        NumberInt("52"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("135"),
    currentStepRate: NumberInt("124"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("135"),
            timestamp: ISODate("2025-04-25T22:04:19.169Z")
        },
        {
            type: "stepRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-04-25T22:04:19.169Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-25T22:04:19.169Z")
        }
    ],
    createTime: ISODate("2025-04-25T22:04:19.169Z"),
    updateTime: ISODate("2025-04-25T22:04:19.169Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b00d"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-22T22:04:19.17Z"),
    date: "2025-05-22",
    heartRateData: [
        NumberInt("124"),
        NumberInt("146"),
        NumberInt("110"),
        NumberInt("75"),
        NumberInt("110"),
        NumberInt("134"),
        NumberInt("66"),
        NumberInt("87"),
        NumberInt("160"),
        NumberInt("132")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("98"),
        NumberInt("121"),
        NumberInt("100"),
        NumberInt("113"),
        NumberInt("130"),
        NumberInt("125"),
        NumberInt("129"),
        NumberInt("128"),
        NumberInt("124")
    ],
    paceData: [
        5,
        5.1,
        5.9,
        6,
        5.3,
        5,
        5.9,
        6,
        5.9,
        6
    ],
    weekData: [
        NumberInt("88"),
        NumberInt("53"),
        NumberInt("55"),
        NumberInt("46"),
        NumberInt("79"),
        NumberInt("48"),
        NumberInt("41")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("72"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("132"),
    currentStepRate: NumberInt("124"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("132"),
            timestamp: ISODate("2025-05-22T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-22T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-22T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-22T22:04:19.17Z"),
    updateTime: ISODate("2025-05-22T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b00e"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-20T22:04:19.17Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("137"),
        NumberInt("88"),
        NumberInt("154"),
        NumberInt("134"),
        NumberInt("83"),
        NumberInt("135"),
        NumberInt("64"),
        NumberInt("88"),
        NumberInt("119"),
        NumberInt("126")
    ],
    stepRateData: [
        NumberInt("107"),
        NumberInt("109"),
        NumberInt("99"),
        NumberInt("127"),
        NumberInt("130"),
        NumberInt("95"),
        NumberInt("95"),
        NumberInt("117"),
        NumberInt("95"),
        NumberInt("109")
    ],
    paceData: [
        6,
        5.8,
        5.7,
        5.6,
        5.1,
        5,
        5.4,
        6,
        5.5,
        5.4
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("46"),
        NumberInt("73"),
        NumberInt("54"),
        NumberInt("90"),
        NumberInt("77"),
        NumberInt("39")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("34"),
    currentHeartRate: NumberInt("126"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("126"),
            timestamp: ISODate("2025-05-20T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-20T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-20T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-20T22:04:19.17Z"),
    updateTime: ISODate("2025-05-20T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b00f"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-18T22:04:19.17Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("98"),
        NumberInt("61"),
        NumberInt("127"),
        NumberInt("80"),
        NumberInt("86"),
        NumberInt("62"),
        NumberInt("160"),
        NumberInt("130"),
        NumberInt("121"),
        NumberInt("98")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("106"),
        NumberInt("97"),
        NumberInt("128"),
        NumberInt("92"),
        NumberInt("96"),
        NumberInt("100"),
        NumberInt("129"),
        NumberInt("95"),
        NumberInt("125")
    ],
    paceData: [
        5.4,
        5.5,
        5.3,
        5.7,
        5.9,
        5.1,
        5.6,
        5.2,
        5.2,
        6
    ],
    weekData: [
        NumberInt("61"),
        NumberInt("86"),
        NumberInt("49"),
        NumberInt("84"),
        NumberInt("87"),
        NumberInt("77"),
        NumberInt("60")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("27"),
    currentHeartRate: NumberInt("98"),
    currentStepRate: NumberInt("125"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-18T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-05-18T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-18T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-18T22:04:19.17Z"),
    updateTime: ISODate("2025-05-18T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b010"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-15T22:04:19.17Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("72"),
        NumberInt("142"),
        NumberInt("66"),
        NumberInt("160"),
        NumberInt("82"),
        NumberInt("60"),
        NumberInt("60"),
        NumberInt("107"),
        NumberInt("120"),
        NumberInt("77")
    ],
    stepRateData: [
        NumberInt("117"),
        NumberInt("108"),
        NumberInt("120"),
        NumberInt("127"),
        NumberInt("123"),
        NumberInt("102"),
        NumberInt("99"),
        NumberInt("108"),
        NumberInt("108"),
        NumberInt("95")
    ],
    paceData: [
        5.4,
        5,
        5.8,
        5.1,
        5.3,
        5.8,
        5.3,
        6,
        5.5,
        5.4
    ],
    weekData: [
        NumberInt("54"),
        NumberInt("73"),
        NumberInt("34"),
        NumberInt("69"),
        NumberInt("60"),
        NumberInt("89"),
        NumberInt("43")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("77"),
    currentStepRate: NumberInt("95"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("77"),
            timestamp: ISODate("2025-05-15T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-15T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-15T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-15T22:04:19.17Z"),
    updateTime: ISODate("2025-05-15T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b011"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-14T22:04:19.17Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("151"),
        NumberInt("101"),
        NumberInt("128"),
        NumberInt("80"),
        NumberInt("147"),
        NumberInt("152"),
        NumberInt("98"),
        NumberInt("131"),
        NumberInt("117"),
        NumberInt("153")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("122"),
        NumberInt("99"),
        NumberInt("102"),
        NumberInt("117"),
        NumberInt("124"),
        NumberInt("101"),
        NumberInt("103"),
        NumberInt("93"),
        NumberInt("114")
    ],
    paceData: [
        5.4,
        5.3,
        5.2,
        5.2,
        5.3,
        5.3,
        6,
        6,
        5.3,
        5.7
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("34"),
        NumberInt("63"),
        NumberInt("77"),
        NumberInt("52"),
        NumberInt("32"),
        NumberInt("76")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("93"),
    stressIndex: NumberInt("29"),
    currentHeartRate: NumberInt("153"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("153"),
            timestamp: ISODate("2025-05-14T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-14T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-14T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-14T22:04:19.17Z"),
    updateTime: ISODate("2025-05-14T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b012"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-13T22:04:19.17Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("71"),
        NumberInt("133"),
        NumberInt("151"),
        NumberInt("105"),
        NumberInt("100"),
        NumberInt("156"),
        NumberInt("94"),
        NumberInt("103"),
        NumberInt("64"),
        NumberInt("79")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("106"),
        NumberInt("125"),
        NumberInt("129"),
        NumberInt("118"),
        NumberInt("130"),
        NumberInt("118"),
        NumberInt("110"),
        NumberInt("93"),
        NumberInt("117")
    ],
    paceData: [
        5.6,
        5.8,
        5.8,
        5.5,
        5.2,
        5.3,
        5.6,
        5.9,
        5.8,
        5.3
    ],
    weekData: [
        NumberInt("62"),
        NumberInt("32"),
        NumberInt("66"),
        NumberInt("76"),
        NumberInt("68"),
        NumberInt("67"),
        NumberInt("66")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("79"),
    currentStepRate: NumberInt("117"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("79"),
            timestamp: ISODate("2025-05-13T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-13T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-13T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-13T22:04:19.17Z"),
    updateTime: ISODate("2025-05-13T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b013"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-12T22:04:19.17Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("143"),
        NumberInt("152"),
        NumberInt("133"),
        NumberInt("66"),
        NumberInt("62"),
        NumberInt("72"),
        NumberInt("137"),
        NumberInt("80"),
        NumberInt("92"),
        NumberInt("109")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("109"),
        NumberInt("127"),
        NumberInt("130"),
        NumberInt("101"),
        NumberInt("96"),
        NumberInt("90"),
        NumberInt("111"),
        NumberInt("109"),
        NumberInt("105")
    ],
    paceData: [
        5.3,
        5.1,
        5.6,
        5.1,
        5.2,
        5.5,
        5.9,
        5.5,
        5.8,
        5.9
    ],
    weekData: [
        NumberInt("74"),
        NumberInt("54"),
        NumberInt("50"),
        NumberInt("74"),
        NumberInt("55"),
        NumberInt("70"),
        NumberInt("63")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("90"),
    stressIndex: NumberInt("10"),
    currentHeartRate: NumberInt("109"),
    currentStepRate: NumberInt("105"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-12T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("105"),
            timestamp: ISODate("2025-05-12T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-12T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-12T22:04:19.17Z"),
    updateTime: ISODate("2025-05-12T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b014"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-11T22:04:19.17Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("70"),
        NumberInt("148"),
        NumberInt("124"),
        NumberInt("70"),
        NumberInt("61"),
        NumberInt("117"),
        NumberInt("131"),
        NumberInt("128"),
        NumberInt("77"),
        NumberInt("128")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("106"),
        NumberInt("106"),
        NumberInt("98"),
        NumberInt("129"),
        NumberInt("119"),
        NumberInt("104"),
        NumberInt("119"),
        NumberInt("97"),
        NumberInt("116")
    ],
    paceData: [
        5.4,
        5.3,
        5.5,
        5.1,
        5.6,
        5.2,
        5.5,
        5.8,
        5.3,
        5.3
    ],
    weekData: [
        NumberInt("69"),
        NumberInt("54"),
        NumberInt("69"),
        NumberInt("86"),
        NumberInt("78"),
        NumberInt("64"),
        NumberInt("85")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("72"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("128"),
    currentStepRate: NumberInt("116"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-11T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("116"),
            timestamp: ISODate("2025-05-11T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-11T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-11T22:04:19.17Z"),
    updateTime: ISODate("2025-05-11T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b015"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-10T22:04:19.17Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("75"),
        NumberInt("71"),
        NumberInt("81"),
        NumberInt("107"),
        NumberInt("74"),
        NumberInt("94"),
        NumberInt("122"),
        NumberInt("151"),
        NumberInt("156"),
        NumberInt("77")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("105"),
        NumberInt("124"),
        NumberInt("106"),
        NumberInt("110"),
        NumberInt("118"),
        NumberInt("98"),
        NumberInt("100"),
        NumberInt("90"),
        NumberInt("123")
    ],
    paceData: [
        6,
        5.9,
        5.9,
        5.1,
        6,
        5.5,
        5.4,
        5.8,
        5.4,
        5
    ],
    weekData: [
        NumberInt("73"),
        NumberInt("60"),
        NumberInt("66"),
        NumberInt("56"),
        NumberInt("76"),
        NumberInt("39"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("90"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("77"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("77"),
            timestamp: ISODate("2025-05-10T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-10T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-10T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-10T22:04:19.17Z"),
    updateTime: ISODate("2025-05-10T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b016"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-08T22:04:19.17Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("82"),
        NumberInt("74"),
        NumberInt("70"),
        NumberInt("152"),
        NumberInt("122"),
        NumberInt("95"),
        NumberInt("108"),
        NumberInt("150"),
        NumberInt("135"),
        NumberInt("132")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("126"),
        NumberInt("104"),
        NumberInt("115"),
        NumberInt("108"),
        NumberInt("111"),
        NumberInt("109"),
        NumberInt("96"),
        NumberInt("90"),
        NumberInt("92")
    ],
    paceData: [
        5.3,
        5.1,
        5.8,
        5.9,
        5.6,
        5.3,
        5.7,
        5.4,
        5.6,
        5.8
    ],
    weekData: [
        NumberInt("48"),
        NumberInt("56"),
        NumberInt("55"),
        NumberInt("81"),
        NumberInt("44"),
        NumberInt("78"),
        NumberInt("47")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("132"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("132"),
            timestamp: ISODate("2025-05-08T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-05-08T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-08T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-08T22:04:19.17Z"),
    updateTime: ISODate("2025-05-08T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b017"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-07T22:04:19.17Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("155"),
        NumberInt("148"),
        NumberInt("154"),
        NumberInt("64"),
        NumberInt("138"),
        NumberInt("106"),
        NumberInt("159"),
        NumberInt("156"),
        NumberInt("103"),
        NumberInt("107")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("112"),
        NumberInt("111"),
        NumberInt("120"),
        NumberInt("112"),
        NumberInt("91"),
        NumberInt("90"),
        NumberInt("112"),
        NumberInt("126"),
        NumberInt("93")
    ],
    paceData: [
        5.3,
        5.4,
        5.1,
        5.9,
        5.7,
        5.1,
        5.2,
        5.7,
        5.2,
        5
    ],
    weekData: [
        NumberInt("32"),
        NumberInt("86"),
        NumberInt("58"),
        NumberInt("64"),
        NumberInt("83"),
        NumberInt("42"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("107"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-07T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-07T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-07T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-07T22:04:19.17Z"),
    updateTime: ISODate("2025-05-07T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b018"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-05T22:04:19.17Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("62"),
        NumberInt("152"),
        NumberInt("80"),
        NumberInt("80"),
        NumberInt("94"),
        NumberInt("113"),
        NumberInt("77"),
        NumberInt("101"),
        NumberInt("99"),
        NumberInt("140")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("93"),
        NumberInt("128"),
        NumberInt("126"),
        NumberInt("129"),
        NumberInt("104"),
        NumberInt("117"),
        NumberInt("129"),
        NumberInt("130"),
        NumberInt("128")
    ],
    paceData: [
        5.9,
        5.6,
        5.7,
        5.9,
        5.9,
        5.3,
        5.5,
        5.1,
        5.8,
        5.7
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("77"),
        NumberInt("32"),
        NumberInt("44"),
        NumberInt("75"),
        NumberInt("67"),
        NumberInt("66")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("140"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("140"),
            timestamp: ISODate("2025-05-05T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-05T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-05T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-05T22:04:19.17Z"),
    updateTime: ISODate("2025-05-05T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b019"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-04T22:04:19.17Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("156"),
        NumberInt("87"),
        NumberInt("136"),
        NumberInt("104"),
        NumberInt("112"),
        NumberInt("141"),
        NumberInt("125"),
        NumberInt("147"),
        NumberInt("104"),
        NumberInt("102")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("95"),
        NumberInt("127"),
        NumberInt("107"),
        NumberInt("92"),
        NumberInt("97"),
        NumberInt("126"),
        NumberInt("93"),
        NumberInt("91"),
        NumberInt("127")
    ],
    paceData: [
        6,
        5.9,
        5.7,
        5.7,
        5.1,
        5.1,
        5,
        5.1,
        5.5,
        5.3
    ],
    weekData: [
        NumberInt("55"),
        NumberInt("36"),
        NumberInt("61"),
        NumberInt("76"),
        NumberInt("32"),
        NumberInt("69"),
        NumberInt("54")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("102"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-05-04T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-04T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-04T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-04T22:04:19.17Z"),
    updateTime: ISODate("2025-05-04T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b01a"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-03T22:04:19.17Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("118"),
        NumberInt("74"),
        NumberInt("120"),
        NumberInt("106"),
        NumberInt("157"),
        NumberInt("87"),
        NumberInt("76"),
        NumberInt("99"),
        NumberInt("71"),
        NumberInt("86")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("116"),
        NumberInt("125"),
        NumberInt("101"),
        NumberInt("115"),
        NumberInt("118"),
        NumberInt("113"),
        NumberInt("97"),
        NumberInt("96"),
        NumberInt("114")
    ],
    paceData: [
        5.8,
        5.9,
        5.5,
        5.3,
        5.8,
        5.5,
        5.2,
        5.8,
        6,
        5
    ],
    weekData: [
        NumberInt("52"),
        NumberInt("64"),
        NumberInt("71"),
        NumberInt("65"),
        NumberInt("73"),
        NumberInt("42"),
        NumberInt("75")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("40"),
    currentHeartRate: NumberInt("86"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("86"),
            timestamp: ISODate("2025-05-03T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-03T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-03T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-03T22:04:19.17Z"),
    updateTime: ISODate("2025-05-03T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b01b"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-02T22:04:19.17Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("153"),
        NumberInt("149"),
        NumberInt("137"),
        NumberInt("127"),
        NumberInt("140"),
        NumberInt("78"),
        NumberInt("115"),
        NumberInt("118"),
        NumberInt("123"),
        NumberInt("100")
    ],
    stepRateData: [
        NumberInt("105"),
        NumberInt("93"),
        NumberInt("112"),
        NumberInt("112"),
        NumberInt("117"),
        NumberInt("125"),
        NumberInt("126"),
        NumberInt("92"),
        NumberInt("109"),
        NumberInt("103")
    ],
    paceData: [
        5.5,
        5.8,
        5.5,
        5.6,
        5.4,
        5.6,
        5.1,
        5.4,
        5.3,
        5.2
    ],
    weekData: [
        NumberInt("56"),
        NumberInt("89"),
        NumberInt("55"),
        NumberInt("58"),
        NumberInt("58"),
        NumberInt("49"),
        NumberInt("69")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("36"),
    currentHeartRate: NumberInt("100"),
    currentStepRate: NumberInt("103"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-02T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-05-02T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-02T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-02T22:04:19.17Z"),
    updateTime: ISODate("2025-05-02T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b01c"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-05-01T22:04:19.17Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("139"),
        NumberInt("120"),
        NumberInt("129"),
        NumberInt("109"),
        NumberInt("153"),
        NumberInt("102"),
        NumberInt("152"),
        NumberInt("79"),
        NumberInt("112"),
        NumberInt("106")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("107"),
        NumberInt("121"),
        NumberInt("110"),
        NumberInt("93"),
        NumberInt("107"),
        NumberInt("96"),
        NumberInt("116"),
        NumberInt("100"),
        NumberInt("101")
    ],
    paceData: [
        5.2,
        5.4,
        5.1,
        5,
        5.2,
        5.9,
        5.3,
        5.5,
        5.6,
        5
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("88"),
        NumberInt("84"),
        NumberInt("31"),
        NumberInt("77"),
        NumberInt("45"),
        NumberInt("84")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("17"),
    currentHeartRate: NumberInt("106"),
    currentStepRate: NumberInt("101"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-01T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("101"),
            timestamp: ISODate("2025-05-01T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-01T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-05-01T22:04:19.17Z"),
    updateTime: ISODate("2025-05-01T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b01d"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-29T22:04:19.17Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("157"),
        NumberInt("143"),
        NumberInt("102"),
        NumberInt("83"),
        NumberInt("92"),
        NumberInt("72"),
        NumberInt("132"),
        NumberInt("126"),
        NumberInt("160"),
        NumberInt("64")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("95"),
        NumberInt("125"),
        NumberInt("125"),
        NumberInt("107"),
        NumberInt("126"),
        NumberInt("123"),
        NumberInt("121"),
        NumberInt("100"),
        NumberInt("108")
    ],
    paceData: [
        5.1,
        5.8,
        5.7,
        5,
        5.1,
        5.8,
        5.8,
        6,
        5.2,
        5.2
    ],
    weekData: [
        NumberInt("38"),
        NumberInt("81"),
        NumberInt("33"),
        NumberInt("30"),
        NumberInt("59"),
        NumberInt("38"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("69"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("64"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("64"),
            timestamp: ISODate("2025-04-29T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-04-29T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-29T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-04-29T22:04:19.17Z"),
    updateTime: ISODate("2025-04-29T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b01e"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-28T22:04:19.17Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("160"),
        NumberInt("152"),
        NumberInt("147"),
        NumberInt("115"),
        NumberInt("60"),
        NumberInt("153"),
        NumberInt("114"),
        NumberInt("80"),
        NumberInt("120"),
        NumberInt("93")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("96"),
        NumberInt("113"),
        NumberInt("90"),
        NumberInt("103"),
        NumberInt("109"),
        NumberInt("126"),
        NumberInt("123"),
        NumberInt("129"),
        NumberInt("127")
    ],
    paceData: [
        5.3,
        5.2,
        5.5,
        6,
        5.1,
        5.3,
        5.6,
        5.2,
        5.7,
        5.2
    ],
    weekData: [
        NumberInt("58"),
        NumberInt("50"),
        NumberInt("50"),
        NumberInt("88"),
        NumberInt("62"),
        NumberInt("31"),
        NumberInt("66")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("92"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("93"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-04-28T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-04-28T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-28T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-04-28T22:04:19.17Z"),
    updateTime: ISODate("2025-04-28T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b01f"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-27T22:04:19.17Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("92"),
        NumberInt("103"),
        NumberInt("120"),
        NumberInt("88"),
        NumberInt("82"),
        NumberInt("159"),
        NumberInt("144"),
        NumberInt("123"),
        NumberInt("149"),
        NumberInt("75")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("112"),
        NumberInt("100"),
        NumberInt("125"),
        NumberInt("125"),
        NumberInt("100"),
        NumberInt("104"),
        NumberInt("105"),
        NumberInt("113"),
        NumberInt("103")
    ],
    paceData: [
        5.6,
        5.3,
        5.3,
        5.5,
        5.3,
        5.9,
        5.9,
        5.5,
        5.3,
        6
    ],
    weekData: [
        NumberInt("62"),
        NumberInt("31"),
        NumberInt("89"),
        NumberInt("42"),
        NumberInt("49"),
        NumberInt("46"),
        NumberInt("54")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("75"),
    currentStepRate: NumberInt("103"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("75"),
            timestamp: ISODate("2025-04-27T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-04-27T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-27T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-04-27T22:04:19.17Z"),
    updateTime: ISODate("2025-04-27T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b020"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-26T22:04:19.17Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("93"),
        NumberInt("87"),
        NumberInt("83"),
        NumberInt("95"),
        NumberInt("154"),
        NumberInt("133"),
        NumberInt("91"),
        NumberInt("154"),
        NumberInt("126"),
        NumberInt("151")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("91"),
        NumberInt("114"),
        NumberInt("125"),
        NumberInt("95"),
        NumberInt("127"),
        NumberInt("127"),
        NumberInt("91"),
        NumberInt("112"),
        NumberInt("111")
    ],
    paceData: [
        5.8,
        5.8,
        5.1,
        5.9,
        5.4,
        5.1,
        5.3,
        5,
        5.1,
        5.1
    ],
    weekData: [
        NumberInt("69"),
        NumberInt("81"),
        NumberInt("84"),
        NumberInt("70"),
        NumberInt("38"),
        NumberInt("47"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("151"),
    currentStepRate: NumberInt("111"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("151"),
            timestamp: ISODate("2025-04-26T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("111"),
            timestamp: ISODate("2025-04-26T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-26T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-04-26T22:04:19.17Z"),
    updateTime: ISODate("2025-04-26T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b021"),
    userId: ObjectId("682beb515253db543d72043f"),
    timestamp: ISODate("2025-04-25T22:04:19.17Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("73"),
        NumberInt("74"),
        NumberInt("115"),
        NumberInt("79"),
        NumberInt("96"),
        NumberInt("101"),
        NumberInt("145"),
        NumberInt("114"),
        NumberInt("103"),
        NumberInt("143")
    ],
    stepRateData: [
        NumberInt("97"),
        NumberInt("113"),
        NumberInt("99"),
        NumberInt("130"),
        NumberInt("95"),
        NumberInt("95"),
        NumberInt("91"),
        NumberInt("117"),
        NumberInt("113"),
        NumberInt("115")
    ],
    paceData: [
        5.8,
        5.8,
        6,
        5.2,
        5.6,
        5.6,
        5.4,
        5.3,
        5.1,
        5.2
    ],
    weekData: [
        NumberInt("84"),
        NumberInt("85"),
        NumberInt("69"),
        NumberInt("55"),
        NumberInt("68"),
        NumberInt("65"),
        NumberInt("45")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("23"),
    currentHeartRate: NumberInt("143"),
    currentStepRate: NumberInt("115"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("143"),
            timestamp: ISODate("2025-04-25T22:04:19.17Z")
        },
        {
            type: "stepRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-04-25T22:04:19.17Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-25T22:04:19.17Z")
        }
    ],
    createTime: ISODate("2025-04-25T22:04:19.17Z"),
    updateTime: ISODate("2025-04-25T22:04:19.17Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b022"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-24T22:04:19.171Z"),
    date: "2025-05-24",
    heartRateData: [
        NumberInt("120"),
        NumberInt("116"),
        NumberInt("105"),
        NumberInt("118"),
        NumberInt("75"),
        NumberInt("139"),
        NumberInt("154"),
        NumberInt("143"),
        NumberInt("132"),
        NumberInt("88")
    ],
    stepRateData: [
        NumberInt("106"),
        NumberInt("130"),
        NumberInt("93"),
        NumberInt("111"),
        NumberInt("127"),
        NumberInt("111"),
        NumberInt("121"),
        NumberInt("94"),
        NumberInt("111"),
        NumberInt("93")
    ],
    paceData: [
        6,
        5.2,
        5.6,
        5.9,
        5.9,
        6,
        5.8,
        5.8,
        5.5,
        5.3
    ],
    weekData: [
        NumberInt("31"),
        NumberInt("66"),
        NumberInt("60"),
        NumberInt("51"),
        NumberInt("69"),
        NumberInt("46"),
        NumberInt("33")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("85"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("88"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("88"),
            timestamp: ISODate("2025-05-24T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-24T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-24T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-24T22:04:19.171Z"),
    updateTime: ISODate("2025-05-24T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b023"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-23T22:04:19.171Z"),
    date: "2025-05-23",
    heartRateData: [
        NumberInt("157"),
        NumberInt("97"),
        NumberInt("74"),
        NumberInt("85"),
        NumberInt("116"),
        NumberInt("90"),
        NumberInt("138"),
        NumberInt("115"),
        NumberInt("89"),
        NumberInt("76")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("115"),
        NumberInt("106"),
        NumberInt("108"),
        NumberInt("114"),
        NumberInt("114"),
        NumberInt("117"),
        NumberInt("128"),
        NumberInt("128"),
        NumberInt("127")
    ],
    paceData: [
        5.7,
        5.3,
        6,
        5.5,
        6,
        5.6,
        5.4,
        5,
        5.5,
        5.7
    ],
    weekData: [
        NumberInt("85"),
        NumberInt("39"),
        NumberInt("71"),
        NumberInt("86"),
        NumberInt("58"),
        NumberInt("86"),
        NumberInt("62")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("76"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("76"),
            timestamp: ISODate("2025-05-23T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-23T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-23T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-23T22:04:19.171Z"),
    updateTime: ISODate("2025-05-23T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b024"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-22T22:04:19.171Z"),
    date: "2025-05-22",
    heartRateData: [
        NumberInt("95"),
        NumberInt("158"),
        NumberInt("133"),
        NumberInt("76"),
        NumberInt("147"),
        NumberInt("87"),
        NumberInt("151"),
        NumberInt("100"),
        NumberInt("120"),
        NumberInt("113")
    ],
    stepRateData: [
        NumberInt("100"),
        NumberInt("94"),
        NumberInt("100"),
        NumberInt("97"),
        NumberInt("125"),
        NumberInt("118"),
        NumberInt("120"),
        NumberInt("107"),
        NumberInt("125"),
        NumberInt("114")
    ],
    paceData: [
        5.3,
        5.1,
        5,
        5.8,
        5.6,
        5.6,
        5.3,
        5.6,
        5.3,
        5.5
    ],
    weekData: [
        NumberInt("48"),
        NumberInt("48"),
        NumberInt("39"),
        NumberInt("52"),
        NumberInt("40"),
        NumberInt("80"),
        NumberInt("49")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("24"),
    currentHeartRate: NumberInt("113"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("113"),
            timestamp: ISODate("2025-05-22T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-22T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-22T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-22T22:04:19.171Z"),
    updateTime: ISODate("2025-05-22T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b025"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-21T22:04:19.171Z"),
    date: "2025-05-21",
    heartRateData: [
        NumberInt("94"),
        NumberInt("144"),
        NumberInt("149"),
        NumberInt("83"),
        NumberInt("153"),
        NumberInt("155"),
        NumberInt("121"),
        NumberInt("139"),
        NumberInt("108"),
        NumberInt("82")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("129"),
        NumberInt("130"),
        NumberInt("105"),
        NumberInt("93"),
        NumberInt("123"),
        NumberInt("92"),
        NumberInt("112"),
        NumberInt("91"),
        NumberInt("102")
    ],
    paceData: [
        5.6,
        5.4,
        5.3,
        6,
        5.5,
        5.8,
        5.2,
        5.2,
        5.7,
        5.4
    ],
    weekData: [
        NumberInt("60"),
        NumberInt("64"),
        NumberInt("65"),
        NumberInt("66"),
        NumberInt("59"),
        NumberInt("75"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("64"),
    stressIndex: NumberInt("23"),
    currentHeartRate: NumberInt("82"),
    currentStepRate: NumberInt("102"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("82"),
            timestamp: ISODate("2025-05-21T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-05-21T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-21T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-21T22:04:19.171Z"),
    updateTime: ISODate("2025-05-21T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b026"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-20T22:04:19.171Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("112"),
        NumberInt("71"),
        NumberInt("140"),
        NumberInt("118"),
        NumberInt("114"),
        NumberInt("69"),
        NumberInt("85"),
        NumberInt("83"),
        NumberInt("98"),
        NumberInt("141")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("117"),
        NumberInt("97"),
        NumberInt("116"),
        NumberInt("118"),
        NumberInt("108"),
        NumberInt("129"),
        NumberInt("123"),
        NumberInt("90"),
        NumberInt("93")
    ],
    paceData: [
        5.6,
        5.5,
        5.7,
        5.4,
        5.6,
        5.3,
        5.6,
        5,
        5.4,
        5.1
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("87"),
        NumberInt("51"),
        NumberInt("70"),
        NumberInt("78"),
        NumberInt("79"),
        NumberInt("55")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("141"),
    currentStepRate: NumberInt("93"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("141"),
            timestamp: ISODate("2025-05-20T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("93"),
            timestamp: ISODate("2025-05-20T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-20T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-20T22:04:19.171Z"),
    updateTime: ISODate("2025-05-20T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b027"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-19T22:04:19.171Z"),
    date: "2025-05-19",
    heartRateData: [
        NumberInt("117"),
        NumberInt("73"),
        NumberInt("87"),
        NumberInt("85"),
        NumberInt("96"),
        NumberInt("130"),
        NumberInt("130"),
        NumberInt("67"),
        NumberInt("92"),
        NumberInt("66")
    ],
    stepRateData: [
        NumberInt("90"),
        NumberInt("101"),
        NumberInt("93"),
        NumberInt("109"),
        NumberInt("124"),
        NumberInt("124"),
        NumberInt("112"),
        NumberInt("95"),
        NumberInt("96"),
        NumberInt("94")
    ],
    paceData: [
        5.4,
        5.2,
        5.8,
        5.6,
        5.8,
        5.1,
        5.2,
        5.8,
        5.6,
        6
    ],
    weekData: [
        NumberInt("66"),
        NumberInt("86"),
        NumberInt("58"),
        NumberInt("87"),
        NumberInt("82"),
        NumberInt("66"),
        NumberInt("85")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("66"),
    currentStepRate: NumberInt("94"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("66"),
            timestamp: ISODate("2025-05-19T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("94"),
            timestamp: ISODate("2025-05-19T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-19T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-19T22:04:19.171Z"),
    updateTime: ISODate("2025-05-19T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b028"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-18T22:04:19.171Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("101"),
        NumberInt("146"),
        NumberInt("94"),
        NumberInt("73"),
        NumberInt("131"),
        NumberInt("129"),
        NumberInt("159"),
        NumberInt("100"),
        NumberInt("118"),
        NumberInt("102")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("115"),
        NumberInt("100"),
        NumberInt("106"),
        NumberInt("91"),
        NumberInt("121"),
        NumberInt("115"),
        NumberInt("110"),
        NumberInt("130"),
        NumberInt("127")
    ],
    paceData: [
        5.1,
        5.8,
        5.5,
        5.3,
        5.8,
        5.9,
        5.3,
        5.8,
        5.9,
        5.5
    ],
    weekData: [
        NumberInt("86"),
        NumberInt("34"),
        NumberInt("62"),
        NumberInt("68"),
        NumberInt("41"),
        NumberInt("82"),
        NumberInt("38")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("60"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("102"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-05-18T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-18T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-18T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-18T22:04:19.171Z"),
    updateTime: ISODate("2025-05-18T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b029"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-17T22:04:19.171Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("63"),
        NumberInt("112"),
        NumberInt("159"),
        NumberInt("115"),
        NumberInt("101"),
        NumberInt("145"),
        NumberInt("82"),
        NumberInt("70"),
        NumberInt("75"),
        NumberInt("86")
    ],
    stepRateData: [
        NumberInt("116"),
        NumberInt("111"),
        NumberInt("126"),
        NumberInt("121"),
        NumberInt("106"),
        NumberInt("112"),
        NumberInt("127"),
        NumberInt("114"),
        NumberInt("101"),
        NumberInt("107")
    ],
    paceData: [
        5.3,
        5,
        5.3,
        5.6,
        5.7,
        5,
        5.8,
        6,
        5.1,
        6
    ],
    weekData: [
        NumberInt("64"),
        NumberInt("46"),
        NumberInt("33"),
        NumberInt("73"),
        NumberInt("85"),
        NumberInt("78"),
        NumberInt("49")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("86"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("86"),
            timestamp: ISODate("2025-05-17T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-17T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-17T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-17T22:04:19.171Z"),
    updateTime: ISODate("2025-05-17T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b02a"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-16T22:04:19.171Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("69"),
        NumberInt("115"),
        NumberInt("119"),
        NumberInt("67"),
        NumberInt("144"),
        NumberInt("110"),
        NumberInt("157"),
        NumberInt("63"),
        NumberInt("114"),
        NumberInt("81")
    ],
    stepRateData: [
        NumberInt("92"),
        NumberInt("113"),
        NumberInt("126"),
        NumberInt("95"),
        NumberInt("104"),
        NumberInt("127"),
        NumberInt("95"),
        NumberInt("100"),
        NumberInt("98"),
        NumberInt("110")
    ],
    paceData: [
        5.5,
        5.1,
        5.7,
        5.7,
        5.6,
        5.2,
        5.5,
        5.6,
        5.4,
        5.8
    ],
    weekData: [
        NumberInt("68"),
        NumberInt("76"),
        NumberInt("70"),
        NumberInt("87"),
        NumberInt("31"),
        NumberInt("89"),
        NumberInt("39")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("81"),
    currentStepRate: NumberInt("110"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("81"),
            timestamp: ISODate("2025-05-16T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("110"),
            timestamp: ISODate("2025-05-16T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-16T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-16T22:04:19.171Z"),
    updateTime: ISODate("2025-05-16T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b02b"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-15T22:04:19.171Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("124"),
        NumberInt("75"),
        NumberInt("125"),
        NumberInt("134"),
        NumberInt("65"),
        NumberInt("132"),
        NumberInt("86"),
        NumberInt("141"),
        NumberInt("145"),
        NumberInt("67")
    ],
    stepRateData: [
        NumberInt("117"),
        NumberInt("104"),
        NumberInt("121"),
        NumberInt("96"),
        NumberInt("129"),
        NumberInt("106"),
        NumberInt("129"),
        NumberInt("96"),
        NumberInt("98"),
        NumberInt("91")
    ],
    paceData: [
        5.3,
        5.1,
        5.2,
        5.7,
        5.7,
        5.9,
        5.6,
        5.3,
        5.7,
        5
    ],
    weekData: [
        NumberInt("38"),
        NumberInt("38"),
        NumberInt("77"),
        NumberInt("32"),
        NumberInt("81"),
        NumberInt("54"),
        NumberInt("52")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("67"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("67"),
            timestamp: ISODate("2025-05-15T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-05-15T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-15T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-15T22:04:19.171Z"),
    updateTime: ISODate("2025-05-15T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b02c"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-14T22:04:19.171Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("61"),
        NumberInt("90"),
        NumberInt("80"),
        NumberInt("154"),
        NumberInt("148"),
        NumberInt("69"),
        NumberInt("86"),
        NumberInt("113"),
        NumberInt("74"),
        NumberInt("121")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("93"),
        NumberInt("100"),
        NumberInt("112"),
        NumberInt("119"),
        NumberInt("115"),
        NumberInt("102"),
        NumberInt("93"),
        NumberInt("128"),
        NumberInt("100")
    ],
    paceData: [
        5.4,
        5.7,
        5.5,
        5.3,
        5.6,
        5.9,
        5,
        5.8,
        5.2,
        5.2
    ],
    weekData: [
        NumberInt("52"),
        NumberInt("88"),
        NumberInt("76"),
        NumberInt("31"),
        NumberInt("64"),
        NumberInt("71"),
        NumberInt("67")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("121"),
    currentStepRate: NumberInt("100"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-14T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-14T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-14T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-14T22:04:19.171Z"),
    updateTime: ISODate("2025-05-14T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b02d"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-12T22:04:19.171Z"),
    date: "2025-05-12",
    heartRateData: [
        NumberInt("119"),
        NumberInt("145"),
        NumberInt("159"),
        NumberInt("152"),
        NumberInt("84"),
        NumberInt("92"),
        NumberInt("101"),
        NumberInt("137"),
        NumberInt("60"),
        NumberInt("90")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("115"),
        NumberInt("97"),
        NumberInt("96"),
        NumberInt("106"),
        NumberInt("106"),
        NumberInt("110"),
        NumberInt("99"),
        NumberInt("116"),
        NumberInt("111")
    ],
    paceData: [
        5.7,
        5.5,
        5.2,
        5.6,
        5.8,
        5.2,
        5.5,
        5.2,
        5.6,
        5.5
    ],
    weekData: [
        NumberInt("76"),
        NumberInt("38"),
        NumberInt("72"),
        NumberInt("75"),
        NumberInt("64"),
        NumberInt("34"),
        NumberInt("64")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("79"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("90"),
    currentStepRate: NumberInt("111"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-05-12T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("111"),
            timestamp: ISODate("2025-05-12T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-12T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-12T22:04:19.171Z"),
    updateTime: ISODate("2025-05-12T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b02e"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-11T22:04:19.171Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("93"),
        NumberInt("153"),
        NumberInt("112"),
        NumberInt("89"),
        NumberInt("71"),
        NumberInt("66"),
        NumberInt("142"),
        NumberInt("129"),
        NumberInt("108"),
        NumberInt("80")
    ],
    stepRateData: [
        NumberInt("119"),
        NumberInt("127"),
        NumberInt("102"),
        NumberInt("106"),
        NumberInt("110"),
        NumberInt("113"),
        NumberInt("117"),
        NumberInt("100"),
        NumberInt("130"),
        NumberInt("114")
    ],
    paceData: [
        5.6,
        5.6,
        5.7,
        5,
        5.2,
        5.6,
        5.6,
        5.5,
        5.8,
        5.1
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("66"),
        NumberInt("62"),
        NumberInt("38"),
        NumberInt("89"),
        NumberInt("59"),
        NumberInt("73")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("62"),
    stressIndex: NumberInt("28"),
    currentHeartRate: NumberInt("80"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("80"),
            timestamp: ISODate("2025-05-11T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-11T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-11T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-11T22:04:19.171Z"),
    updateTime: ISODate("2025-05-11T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b02f"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-10T22:04:19.171Z"),
    date: "2025-05-10",
    heartRateData: [
        NumberInt("127"),
        NumberInt("70"),
        NumberInt("104"),
        NumberInt("65"),
        NumberInt("90"),
        NumberInt("108"),
        NumberInt("98"),
        NumberInt("64"),
        NumberInt("134"),
        NumberInt("117")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("123"),
        NumberInt("130"),
        NumberInt("101"),
        NumberInt("113"),
        NumberInt("121"),
        NumberInt("92"),
        NumberInt("117"),
        NumberInt("128"),
        NumberInt("124")
    ],
    paceData: [
        5.3,
        5.6,
        5.2,
        6,
        5.8,
        5.2,
        5.9,
        5.9,
        5.1,
        5.3
    ],
    weekData: [
        NumberInt("30"),
        NumberInt("75"),
        NumberInt("56"),
        NumberInt("72"),
        NumberInt("63"),
        NumberInt("45"),
        NumberInt("65")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("15"),
    currentHeartRate: NumberInt("117"),
    currentStepRate: NumberInt("124"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-10T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-10T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-10T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-10T22:04:19.171Z"),
    updateTime: ISODate("2025-05-10T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b030"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-09T22:04:19.171Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("76"),
        NumberInt("107"),
        NumberInt("144"),
        NumberInt("88"),
        NumberInt("115"),
        NumberInt("99"),
        NumberInt("127"),
        NumberInt("155"),
        NumberInt("73"),
        NumberInt("142")
    ],
    stepRateData: [
        NumberInt("116"),
        NumberInt("102"),
        NumberInt("106"),
        NumberInt("107"),
        NumberInt("103"),
        NumberInt("91"),
        NumberInt("112"),
        NumberInt("130"),
        NumberInt("111"),
        NumberInt("123")
    ],
    paceData: [
        5.8,
        5.4,
        5.7,
        5.6,
        5.8,
        5.3,
        5.4,
        5.6,
        5.6,
        5.2
    ],
    weekData: [
        NumberInt("73"),
        NumberInt("30"),
        NumberInt("34"),
        NumberInt("77"),
        NumberInt("53"),
        NumberInt("55"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("64"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("142"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("142"),
            timestamp: ISODate("2025-05-09T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-09T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-09T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-09T22:04:19.171Z"),
    updateTime: ISODate("2025-05-09T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b031"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-08T22:04:19.171Z"),
    date: "2025-05-08",
    heartRateData: [
        NumberInt("134"),
        NumberInt("145"),
        NumberInt("97"),
        NumberInt("103"),
        NumberInt("103"),
        NumberInt("110"),
        NumberInt("72"),
        NumberInt("122"),
        NumberInt("64"),
        NumberInt("137")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("114"),
        NumberInt("114"),
        NumberInt("117"),
        NumberInt("99"),
        NumberInt("98"),
        NumberInt("122"),
        NumberInt("128"),
        NumberInt("118"),
        NumberInt("129")
    ],
    paceData: [
        5.9,
        5.1,
        5.2,
        5.1,
        5.2,
        5.2,
        5.7,
        5.3,
        5.3,
        5.7
    ],
    weekData: [
        NumberInt("80"),
        NumberInt("79"),
        NumberInt("36"),
        NumberInt("35"),
        NumberInt("32"),
        NumberInt("31"),
        NumberInt("76")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("137"),
    currentStepRate: NumberInt("129"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("137"),
            timestamp: ISODate("2025-05-08T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("129"),
            timestamp: ISODate("2025-05-08T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-08T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-08T22:04:19.171Z"),
    updateTime: ISODate("2025-05-08T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b032"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-06T22:04:19.171Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("86"),
        NumberInt("116"),
        NumberInt("149"),
        NumberInt("106"),
        NumberInt("146"),
        NumberInt("154"),
        NumberInt("122"),
        NumberInt("92"),
        NumberInt("155"),
        NumberInt("88")
    ],
    stepRateData: [
        NumberInt("124"),
        NumberInt("93"),
        NumberInt("111"),
        NumberInt("100"),
        NumberInt("91"),
        NumberInt("119"),
        NumberInt("93"),
        NumberInt("92"),
        NumberInt("98"),
        NumberInt("99")
    ],
    paceData: [
        5.9,
        5.8,
        5.4,
        5.9,
        5.5,
        5.3,
        5.7,
        5.1,
        5.8,
        5.4
    ],
    weekData: [
        NumberInt("75"),
        NumberInt("59"),
        NumberInt("84"),
        NumberInt("84"),
        NumberInt("38"),
        NumberInt("56"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("88"),
    currentStepRate: NumberInt("99"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("88"),
            timestamp: ISODate("2025-05-06T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-06T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-06T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-06T22:04:19.171Z"),
    updateTime: ISODate("2025-05-06T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b033"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-05T22:04:19.171Z"),
    date: "2025-05-05",
    heartRateData: [
        NumberInt("151"),
        NumberInt("129"),
        NumberInt("130"),
        NumberInt("138"),
        NumberInt("146"),
        NumberInt("72"),
        NumberInt("69"),
        NumberInt("111"),
        NumberInt("105"),
        NumberInt("154")
    ],
    stepRateData: [
        NumberInt("127"),
        NumberInt("119"),
        NumberInt("115"),
        NumberInt("91"),
        NumberInt("97"),
        NumberInt("122"),
        NumberInt("90"),
        NumberInt("97"),
        NumberInt("91"),
        NumberInt("123")
    ],
    paceData: [
        5.9,
        5.3,
        5.5,
        6,
        5,
        6,
        5.7,
        5.4,
        5.2,
        5.5
    ],
    weekData: [
        NumberInt("80"),
        NumberInt("82"),
        NumberInt("66"),
        NumberInt("81"),
        NumberInt("48"),
        NumberInt("37"),
        NumberInt("53")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("67"),
    stressIndex: NumberInt("20"),
    currentHeartRate: NumberInt("154"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("154"),
            timestamp: ISODate("2025-05-05T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-05T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-05T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-05T22:04:19.171Z"),
    updateTime: ISODate("2025-05-05T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b034"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-04T22:04:19.171Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("151"),
        NumberInt("103"),
        NumberInt("127"),
        NumberInt("116"),
        NumberInt("153"),
        NumberInt("78"),
        NumberInt("95"),
        NumberInt("79"),
        NumberInt("68"),
        NumberInt("156")
    ],
    stepRateData: [
        NumberInt("121"),
        NumberInt("92"),
        NumberInt("100"),
        NumberInt("104"),
        NumberInt("122"),
        NumberInt("91"),
        NumberInt("117"),
        NumberInt("93"),
        NumberInt("121"),
        NumberInt("103")
    ],
    paceData: [
        5.9,
        5,
        5.9,
        5.6,
        5.4,
        5.3,
        5.6,
        5.7,
        5.6,
        5.2
    ],
    weekData: [
        NumberInt("62"),
        NumberInt("79"),
        NumberInt("54"),
        NumberInt("75"),
        NumberInt("90"),
        NumberInt("90"),
        NumberInt("40")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("65"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("156"),
    currentStepRate: NumberInt("103"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("156"),
            timestamp: ISODate("2025-05-04T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("103"),
            timestamp: ISODate("2025-05-04T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-04T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-04T22:04:19.171Z"),
    updateTime: ISODate("2025-05-04T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b035"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-03T22:04:19.171Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("81"),
        NumberInt("67"),
        NumberInt("145"),
        NumberInt("111"),
        NumberInt("132"),
        NumberInt("130"),
        NumberInt("145"),
        NumberInt("65"),
        NumberInt("87"),
        NumberInt("106")
    ],
    stepRateData: [
        NumberInt("110"),
        NumberInt("98"),
        NumberInt("94"),
        NumberInt("105"),
        NumberInt("109"),
        NumberInt("93"),
        NumberInt("91"),
        NumberInt("106"),
        NumberInt("90"),
        NumberInt("92")
    ],
    paceData: [
        5.6,
        5,
        5.6,
        6,
        5.8,
        5.7,
        5.5,
        5.9,
        5.2,
        5.1
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("83"),
        NumberInt("30"),
        NumberInt("32"),
        NumberInt("51"),
        NumberInt("61"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("77"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("106"),
    currentStepRate: NumberInt("92"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("106"),
            timestamp: ISODate("2025-05-03T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-05-03T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-03T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-03T22:04:19.171Z"),
    updateTime: ISODate("2025-05-03T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b036"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-02T22:04:19.171Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("143"),
        NumberInt("99"),
        NumberInt("159"),
        NumberInt("104"),
        NumberInt("76"),
        NumberInt("76"),
        NumberInt("98"),
        NumberInt("86"),
        NumberInt("131"),
        NumberInt("95")
    ],
    stepRateData: [
        NumberInt("113"),
        NumberInt("112"),
        NumberInt("102"),
        NumberInt("106"),
        NumberInt("94"),
        NumberInt("96"),
        NumberInt("121"),
        NumberInt("97"),
        NumberInt("108"),
        NumberInt("109")
    ],
    paceData: [
        5.1,
        5.8,
        5.7,
        5.9,
        5.4,
        5.2,
        5.2,
        5.7,
        5.6,
        5.1
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("60"),
        NumberInt("41"),
        NumberInt("75"),
        NumberInt("64"),
        NumberInt("68"),
        NumberInt("32")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("95"),
    currentStepRate: NumberInt("109"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-02T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("109"),
            timestamp: ISODate("2025-05-02T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-02T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-02T22:04:19.171Z"),
    updateTime: ISODate("2025-05-02T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b037"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-05-01T22:04:19.171Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("159"),
        NumberInt("151"),
        NumberInt("126"),
        NumberInt("144"),
        NumberInt("152"),
        NumberInt("150"),
        NumberInt("134"),
        NumberInt("83"),
        NumberInt("120"),
        NumberInt("111")
    ],
    stepRateData: [
        NumberInt("118"),
        NumberInt("111"),
        NumberInt("117"),
        NumberInt("120"),
        NumberInt("116"),
        NumberInt("105"),
        NumberInt("91"),
        NumberInt("90"),
        NumberInt("95"),
        NumberInt("123")
    ],
    paceData: [
        6,
        5.4,
        6,
        5.3,
        5.7,
        5.1,
        5,
        5.5,
        5.2,
        5.9
    ],
    weekData: [
        NumberInt("40"),
        NumberInt("83"),
        NumberInt("56"),
        NumberInt("37"),
        NumberInt("50"),
        NumberInt("56"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("76"),
    stressIndex: NumberInt("25"),
    currentHeartRate: NumberInt("111"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("111"),
            timestamp: ISODate("2025-05-01T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-01T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-01T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-05-01T22:04:19.171Z"),
    updateTime: ISODate("2025-05-01T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b038"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-29T22:04:19.171Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("145"),
        NumberInt("104"),
        NumberInt("140"),
        NumberInt("90"),
        NumberInt("61"),
        NumberInt("147"),
        NumberInt("72"),
        NumberInt("125"),
        NumberInt("117"),
        NumberInt("85")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("91"),
        NumberInt("120"),
        NumberInt("108"),
        NumberInt("99"),
        NumberInt("96"),
        NumberInt("118"),
        NumberInt("92"),
        NumberInt("97"),
        NumberInt("90")
    ],
    paceData: [
        5.1,
        5.5,
        5.8,
        5.6,
        5.8,
        5.7,
        5,
        5.1,
        5.3,
        5.2
    ],
    weekData: [
        NumberInt("59"),
        NumberInt("72"),
        NumberInt("40"),
        NumberInt("87"),
        NumberInt("59"),
        NumberInt("64"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("32"),
    currentHeartRate: NumberInt("85"),
    currentStepRate: NumberInt("90"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("85"),
            timestamp: ISODate("2025-04-29T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("90"),
            timestamp: ISODate("2025-04-29T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-29T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-04-29T22:04:19.171Z"),
    updateTime: ISODate("2025-04-29T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b039"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-28T22:04:19.171Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("77"),
        NumberInt("146"),
        NumberInt("108"),
        NumberInt("84"),
        NumberInt("136"),
        NumberInt("143"),
        NumberInt("110"),
        NumberInt("147"),
        NumberInt("128"),
        NumberInt("137")
    ],
    stepRateData: [
        NumberInt("95"),
        NumberInt("111"),
        NumberInt("109"),
        NumberInt("113"),
        NumberInt("91"),
        NumberInt("123"),
        NumberInt("104"),
        NumberInt("111"),
        NumberInt("120"),
        NumberInt("118")
    ],
    paceData: [
        5.5,
        5.5,
        5.7,
        5.3,
        5.1,
        5.5,
        5.1,
        5.7,
        5.7,
        5.3
    ],
    weekData: [
        NumberInt("51"),
        NumberInt("75"),
        NumberInt("40"),
        NumberInt("46"),
        NumberInt("53"),
        NumberInt("38"),
        NumberInt("68")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("66"),
    stressIndex: NumberInt("11"),
    currentHeartRate: NumberInt("137"),
    currentStepRate: NumberInt("118"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("137"),
            timestamp: ISODate("2025-04-28T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("118"),
            timestamp: ISODate("2025-04-28T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-28T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-04-28T22:04:19.171Z"),
    updateTime: ISODate("2025-04-28T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b03a"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-26T22:04:19.171Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("98"),
        NumberInt("64"),
        NumberInt("128"),
        NumberInt("100"),
        NumberInt("136"),
        NumberInt("93"),
        NumberInt("84"),
        NumberInt("136"),
        NumberInt("126"),
        NumberInt("155")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("92"),
        NumberInt("106"),
        NumberInt("102"),
        NumberInt("122"),
        NumberInt("99"),
        NumberInt("113"),
        NumberInt("91"),
        NumberInt("101"),
        NumberInt("128")
    ],
    paceData: [
        5.4,
        5.9,
        5.5,
        5.3,
        5.2,
        5.9,
        5.1,
        5.3,
        5.7,
        5.3
    ],
    weekData: [
        NumberInt("53"),
        NumberInt("49"),
        NumberInt("90"),
        NumberInt("60"),
        NumberInt("41"),
        NumberInt("56"),
        NumberInt("75")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("81"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("155"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("155"),
            timestamp: ISODate("2025-04-26T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-04-26T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-26T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-04-26T22:04:19.171Z"),
    updateTime: ISODate("2025-04-26T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b03b"),
    userId: ObjectId("682beb515253db543d720440"),
    timestamp: ISODate("2025-04-25T22:04:19.171Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("139"),
        NumberInt("137"),
        NumberInt("108"),
        NumberInt("133"),
        NumberInt("119"),
        NumberInt("88"),
        NumberInt("101"),
        NumberInt("83"),
        NumberInt("128"),
        NumberInt("86")
    ],
    stepRateData: [
        NumberInt("112"),
        NumberInt("116"),
        NumberInt("110"),
        NumberInt("100"),
        NumberInt("123"),
        NumberInt("93"),
        NumberInt("110"),
        NumberInt("115"),
        NumberInt("106"),
        NumberInt("115")
    ],
    paceData: [
        5.8,
        5.2,
        5.3,
        5.5,
        5.3,
        5.1,
        5.6,
        5.8,
        5.2,
        5.2
    ],
    weekData: [
        NumberInt("46"),
        NumberInt("87"),
        NumberInt("60"),
        NumberInt("70"),
        NumberInt("40"),
        NumberInt("47"),
        NumberInt("78")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("75"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("86"),
    currentStepRate: NumberInt("115"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("86"),
            timestamp: ISODate("2025-04-25T22:04:19.171Z")
        },
        {
            type: "stepRate",
            value: NumberInt("115"),
            timestamp: ISODate("2025-04-25T22:04:19.171Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-25T22:04:19.171Z")
        }
    ],
    createTime: ISODate("2025-04-25T22:04:19.171Z"),
    updateTime: ISODate("2025-04-25T22:04:19.171Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b03c"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-24T22:04:19.172Z"),
    date: "2025-05-24",
    heartRateData: [
        NumberInt("151"),
        NumberInt("111"),
        NumberInt("104"),
        NumberInt("118"),
        NumberInt("119"),
        NumberInt("139"),
        NumberInt("115"),
        NumberInt("132"),
        NumberInt("114"),
        NumberInt("92")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("125"),
        NumberInt("98"),
        NumberInt("130"),
        NumberInt("125"),
        NumberInt("125"),
        NumberInt("90"),
        NumberInt("111"),
        NumberInt("96"),
        NumberInt("121")
    ],
    paceData: [
        5.7,
        5,
        5.9,
        5,
        5.7,
        5.8,
        5.8,
        5.2,
        5.6,
        5.7
    ],
    weekData: [
        NumberInt("45"),
        NumberInt("59"),
        NumberInt("70"),
        NumberInt("67"),
        NumberInt("40"),
        NumberInt("49"),
        NumberInt("46")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("92"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("92"),
            timestamp: ISODate("2025-05-24T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-24T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-24T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-24T22:04:19.172Z"),
    updateTime: ISODate("2025-05-24T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b03d"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-23T22:04:19.172Z"),
    date: "2025-05-23",
    heartRateData: [
        NumberInt("129"),
        NumberInt("159"),
        NumberInt("77"),
        NumberInt("121"),
        NumberInt("102"),
        NumberInt("109"),
        NumberInt("115"),
        NumberInt("102"),
        NumberInt("82"),
        NumberInt("114")
    ],
    stepRateData: [
        NumberInt("107"),
        NumberInt("115"),
        NumberInt("114"),
        NumberInt("109"),
        NumberInt("113"),
        NumberInt("99"),
        NumberInt("121"),
        NumberInt("116"),
        NumberInt("118"),
        NumberInt("114")
    ],
    paceData: [
        5.8,
        5.6,
        5.6,
        5.7,
        5.4,
        5.6,
        5.7,
        5.1,
        6,
        5.6
    ],
    weekData: [
        NumberInt("68"),
        NumberInt("62"),
        NumberInt("78"),
        NumberInt("85"),
        NumberInt("83"),
        NumberInt("43"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("80"),
    stressIndex: NumberInt("37"),
    currentHeartRate: NumberInt("114"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-23T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-05-23T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-23T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-23T22:04:19.172Z"),
    updateTime: ISODate("2025-05-23T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b03e"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-22T22:04:19.172Z"),
    date: "2025-05-22",
    heartRateData: [
        NumberInt("117"),
        NumberInt("116"),
        NumberInt("134"),
        NumberInt("149"),
        NumberInt("98"),
        NumberInt("103"),
        NumberInt("131"),
        NumberInt("115"),
        NumberInt("156"),
        NumberInt("151")
    ],
    stepRateData: [
        NumberInt("109"),
        NumberInt("113"),
        NumberInt("103"),
        NumberInt("103"),
        NumberInt("90"),
        NumberInt("119"),
        NumberInt("126"),
        NumberInt("126"),
        NumberInt("93"),
        NumberInt("100")
    ],
    paceData: [
        5.8,
        5.8,
        6,
        5.3,
        5.8,
        5.5,
        5.9,
        5,
        5.9,
        5.6
    ],
    weekData: [
        NumberInt("52"),
        NumberInt("34"),
        NumberInt("85"),
        NumberInt("83"),
        NumberInt("51"),
        NumberInt("52"),
        NumberInt("38")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("65"),
    stressIndex: NumberInt("39"),
    currentHeartRate: NumberInt("151"),
    currentStepRate: NumberInt("100"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("151"),
            timestamp: ISODate("2025-05-22T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-22T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-22T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-22T22:04:19.172Z"),
    updateTime: ISODate("2025-05-22T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b03f"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-20T22:04:19.172Z"),
    date: "2025-05-20",
    heartRateData: [
        NumberInt("112"),
        NumberInt("145"),
        NumberInt("105"),
        NumberInt("156"),
        NumberInt("117"),
        NumberInt("158"),
        NumberInt("150"),
        NumberInt("110"),
        NumberInt("94"),
        NumberInt("150")
    ],
    stepRateData: [
        NumberInt("93"),
        NumberInt("102"),
        NumberInt("123"),
        NumberInt("101"),
        NumberInt("119"),
        NumberInt("123"),
        NumberInt("120"),
        NumberInt("109"),
        NumberInt("118"),
        NumberInt("107")
    ],
    paceData: [
        5.8,
        5.9,
        5.5,
        5.9,
        5.4,
        5.5,
        5.2,
        5.7,
        5.3,
        5.2
    ],
    weekData: [
        NumberInt("75"),
        NumberInt("80"),
        NumberInt("56"),
        NumberInt("69"),
        NumberInt("30"),
        NumberInt("67"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("83"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("150"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("150"),
            timestamp: ISODate("2025-05-20T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-05-20T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-20T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-20T22:04:19.172Z"),
    updateTime: ISODate("2025-05-20T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b040"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-18T22:04:19.172Z"),
    date: "2025-05-18",
    heartRateData: [
        NumberInt("81"),
        NumberInt("106"),
        NumberInt("154"),
        NumberInt("84"),
        NumberInt("117"),
        NumberInt("72"),
        NumberInt("125"),
        NumberInt("95"),
        NumberInt("101"),
        NumberInt("87")
    ],
    stepRateData: [
        NumberInt("97"),
        NumberInt("127"),
        NumberInt("105"),
        NumberInt("121"),
        NumberInt("94"),
        NumberInt("104"),
        NumberInt("102"),
        NumberInt("102"),
        NumberInt("90"),
        NumberInt("100")
    ],
    paceData: [
        5.7,
        5.7,
        5,
        5.3,
        5.7,
        5.8,
        5.7,
        5.8,
        5,
        5.1
    ],
    weekData: [
        NumberInt("43"),
        NumberInt("68"),
        NumberInt("67"),
        NumberInt("86"),
        NumberInt("80"),
        NumberInt("84"),
        NumberInt("39")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("21"),
    currentHeartRate: NumberInt("87"),
    currentStepRate: NumberInt("100"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("87"),
            timestamp: ISODate("2025-05-18T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-18T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-18T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-18T22:04:19.172Z"),
    updateTime: ISODate("2025-05-18T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b041"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-17T22:04:19.172Z"),
    date: "2025-05-17",
    heartRateData: [
        NumberInt("76"),
        NumberInt("62"),
        NumberInt("149"),
        NumberInt("101"),
        NumberInt("159"),
        NumberInt("102"),
        NumberInt("153"),
        NumberInt("158"),
        NumberInt("107"),
        NumberInt("154")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("111"),
        NumberInt("102"),
        NumberInt("119"),
        NumberInt("130"),
        NumberInt("129"),
        NumberInt("115"),
        NumberInt("130"),
        NumberInt("115"),
        NumberInt("123")
    ],
    paceData: [
        5.4,
        6,
        5.6,
        5.9,
        5.3,
        5.7,
        5.5,
        5.1,
        5.2,
        5.4
    ],
    weekData: [
        NumberInt("79"),
        NumberInt("67"),
        NumberInt("38"),
        NumberInt("32"),
        NumberInt("72"),
        NumberInt("88"),
        NumberInt("51")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("87"),
    stressIndex: NumberInt("16"),
    currentHeartRate: NumberInt("154"),
    currentStepRate: NumberInt("123"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("154"),
            timestamp: ISODate("2025-05-17T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-17T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-17T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-17T22:04:19.172Z"),
    updateTime: ISODate("2025-05-17T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b042"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-16T22:04:19.172Z"),
    date: "2025-05-16",
    heartRateData: [
        NumberInt("115"),
        NumberInt("131"),
        NumberInt("149"),
        NumberInt("97"),
        NumberInt("103"),
        NumberInt("150"),
        NumberInt("135"),
        NumberInt("108"),
        NumberInt("126"),
        NumberInt("66")
    ],
    stepRateData: [
        NumberInt("104"),
        NumberInt("99"),
        NumberInt("117"),
        NumberInt("111"),
        NumberInt("105"),
        NumberInt("130"),
        NumberInt("90"),
        NumberInt("94"),
        NumberInt("91"),
        NumberInt("108")
    ],
    paceData: [
        5.9,
        5.6,
        5.9,
        5.7,
        5.4,
        5.3,
        5.5,
        5.5,
        5.7,
        5.1
    ],
    weekData: [
        NumberInt("63"),
        NumberInt("46"),
        NumberInt("77"),
        NumberInt("70"),
        NumberInt("44"),
        NumberInt("52"),
        NumberInt("52")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("94"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("66"),
    currentStepRate: NumberInt("108"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("66"),
            timestamp: ISODate("2025-05-16T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("108"),
            timestamp: ISODate("2025-05-16T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-16T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-16T22:04:19.172Z"),
    updateTime: ISODate("2025-05-16T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b043"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-15T22:04:19.172Z"),
    date: "2025-05-15",
    heartRateData: [
        NumberInt("113"),
        NumberInt("120"),
        NumberInt("108"),
        NumberInt("112"),
        NumberInt("84"),
        NumberInt("76"),
        NumberInt("76"),
        NumberInt("100"),
        NumberInt("137"),
        NumberInt("124")
    ],
    stepRateData: [
        NumberInt("120"),
        NumberInt("127"),
        NumberInt("107"),
        NumberInt("108"),
        NumberInt("93"),
        NumberInt("91"),
        NumberInt("126"),
        NumberInt("121"),
        NumberInt("112"),
        NumberInt("125")
    ],
    paceData: [
        5.1,
        5.7,
        5.9,
        5.6,
        5.1,
        5.3,
        5.1,
        5.1,
        5.2,
        5.5
    ],
    weekData: [
        NumberInt("60"),
        NumberInt("55"),
        NumberInt("40"),
        NumberInt("86"),
        NumberInt("80"),
        NumberInt("70"),
        NumberInt("88")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("93"),
    stressIndex: NumberInt("13"),
    currentHeartRate: NumberInt("124"),
    currentStepRate: NumberInt("125"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("124"),
            timestamp: ISODate("2025-05-15T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("125"),
            timestamp: ISODate("2025-05-15T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-15T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-15T22:04:19.172Z"),
    updateTime: ISODate("2025-05-15T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b044"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-14T22:04:19.172Z"),
    date: "2025-05-14",
    heartRateData: [
        NumberInt("76"),
        NumberInt("140"),
        NumberInt("101"),
        NumberInt("67"),
        NumberInt("103"),
        NumberInt("158"),
        NumberInt("113"),
        NumberInt("61"),
        NumberInt("143"),
        NumberInt("143")
    ],
    stepRateData: [
        NumberInt("96"),
        NumberInt("99"),
        NumberInt("90"),
        NumberInt("113"),
        NumberInt("94"),
        NumberInt("92"),
        NumberInt("120"),
        NumberInt("128"),
        NumberInt("98"),
        NumberInt("130")
    ],
    paceData: [
        5.1,
        5.3,
        5.5,
        5,
        5.7,
        5,
        5.5,
        5.5,
        5.9,
        5.3
    ],
    weekData: [
        NumberInt("43"),
        NumberInt("54"),
        NumberInt("47"),
        NumberInt("41"),
        NumberInt("62"),
        NumberInt("59"),
        NumberInt("63")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("71"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("143"),
    currentStepRate: NumberInt("130"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("143"),
            timestamp: ISODate("2025-05-14T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("130"),
            timestamp: ISODate("2025-05-14T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-14T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-14T22:04:19.172Z"),
    updateTime: ISODate("2025-05-14T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b045"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-13T22:04:19.172Z"),
    date: "2025-05-13",
    heartRateData: [
        NumberInt("152"),
        NumberInt("64"),
        NumberInt("136"),
        NumberInt("117"),
        NumberInt("61"),
        NumberInt("91"),
        NumberInt("62"),
        NumberInt("89"),
        NumberInt("62"),
        NumberInt("123")
    ],
    stepRateData: [
        NumberInt("125"),
        NumberInt("90"),
        NumberInt("129"),
        NumberInt("110"),
        NumberInt("95"),
        NumberInt("116"),
        NumberInt("130"),
        NumberInt("127"),
        NumberInt("129"),
        NumberInt("126")
    ],
    paceData: [
        5.1,
        6,
        5.1,
        5.1,
        5,
        5.2,
        5.2,
        5.6,
        5.6,
        5.9
    ],
    weekData: [
        NumberInt("40"),
        NumberInt("48"),
        NumberInt("58"),
        NumberInt("51"),
        NumberInt("64"),
        NumberInt("66"),
        NumberInt("58")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("91"),
    stressIndex: NumberInt("35"),
    currentHeartRate: NumberInt("123"),
    currentStepRate: NumberInt("126"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("123"),
            timestamp: ISODate("2025-05-13T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("126"),
            timestamp: ISODate("2025-05-13T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-13T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-13T22:04:19.172Z"),
    updateTime: ISODate("2025-05-13T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b046"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-11T22:04:19.172Z"),
    date: "2025-05-11",
    heartRateData: [
        NumberInt("144"),
        NumberInt("93"),
        NumberInt("78"),
        NumberInt("138"),
        NumberInt("69"),
        NumberInt("160"),
        NumberInt("82"),
        NumberInt("117"),
        NumberInt("160"),
        NumberInt("147")
    ],
    stepRateData: [
        NumberInt("114"),
        NumberInt("95"),
        NumberInt("110"),
        NumberInt("105"),
        NumberInt("94"),
        NumberInt("105"),
        NumberInt("109"),
        NumberInt("129"),
        NumberInt("126"),
        NumberInt("112")
    ],
    paceData: [
        5,
        5.6,
        5.2,
        5.6,
        5.6,
        5.9,
        5.6,
        5.3,
        5.3,
        5.2
    ],
    weekData: [
        NumberInt("59"),
        NumberInt("65"),
        NumberInt("54"),
        NumberInt("37"),
        NumberInt("64"),
        NumberInt("70"),
        NumberInt("30")
    ],
    bloodOxygen: NumberInt("95"),
    healthIndex: NumberInt("70"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("147"),
    currentStepRate: NumberInt("112"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("147"),
            timestamp: ISODate("2025-05-11T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-11T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("95"),
            timestamp: ISODate("2025-05-11T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-11T22:04:19.172Z"),
    updateTime: ISODate("2025-05-11T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b047"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-09T22:04:19.172Z"),
    date: "2025-05-09",
    heartRateData: [
        NumberInt("109"),
        NumberInt("74"),
        NumberInt("138"),
        NumberInt("130"),
        NumberInt("160"),
        NumberInt("148"),
        NumberInt("80"),
        NumberInt("119"),
        NumberInt("77"),
        NumberInt("127")
    ],
    stepRateData: [
        NumberInt("126"),
        NumberInt("121"),
        NumberInt("102"),
        NumberInt("101"),
        NumberInt("123"),
        NumberInt("103"),
        NumberInt("121"),
        NumberInt("128"),
        NumberInt("95"),
        NumberInt("127")
    ],
    paceData: [
        5.6,
        5.3,
        5.1,
        5.7,
        5.8,
        5.9,
        5.8,
        5.7,
        5,
        5.7
    ],
    weekData: [
        NumberInt("80"),
        NumberInt("90"),
        NumberInt("54"),
        NumberInt("82"),
        NumberInt("63"),
        NumberInt("49"),
        NumberInt("62")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("88"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("127"),
    currentStepRate: NumberInt("127"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-09T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("127"),
            timestamp: ISODate("2025-05-09T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-05-09T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-09T22:04:19.172Z"),
    updateTime: ISODate("2025-05-09T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b048"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-07T22:04:19.172Z"),
    date: "2025-05-07",
    heartRateData: [
        NumberInt("118"),
        NumberInt("154"),
        NumberInt("143"),
        NumberInt("80"),
        NumberInt("110"),
        NumberInt("109"),
        NumberInt("137"),
        NumberInt("157"),
        NumberInt("145"),
        NumberInt("71")
    ],
    stepRateData: [
        NumberInt("123"),
        NumberInt("127"),
        NumberInt("117"),
        NumberInt("107"),
        NumberInt("117"),
        NumberInt("103"),
        NumberInt("110"),
        NumberInt("126"),
        NumberInt("116"),
        NumberInt("128")
    ],
    paceData: [
        5.7,
        5.6,
        5.6,
        5.2,
        5.5,
        5.8,
        5.8,
        5.2,
        5.5,
        5.8
    ],
    weekData: [
        NumberInt("87"),
        NumberInt("78"),
        NumberInt("78"),
        NumberInt("36"),
        NumberInt("56"),
        NumberInt("88"),
        NumberInt("86")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("12"),
    currentHeartRate: NumberInt("71"),
    currentStepRate: NumberInt("128"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("71"),
            timestamp: ISODate("2025-05-07T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("128"),
            timestamp: ISODate("2025-05-07T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-07T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-07T22:04:19.172Z"),
    updateTime: ISODate("2025-05-07T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b049"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-06T22:04:19.172Z"),
    date: "2025-05-06",
    heartRateData: [
        NumberInt("89"),
        NumberInt("116"),
        NumberInt("101"),
        NumberInt("112"),
        NumberInt("87"),
        NumberInt("104"),
        NumberInt("150"),
        NumberInt("89"),
        NumberInt("67"),
        NumberInt("119")
    ],
    stepRateData: [
        NumberInt("94"),
        NumberInt("106"),
        NumberInt("114"),
        NumberInt("123"),
        NumberInt("95"),
        NumberInt("123"),
        NumberInt("100"),
        NumberInt("112"),
        NumberInt("91"),
        NumberInt("112")
    ],
    paceData: [
        6,
        5.4,
        5,
        5,
        5.5,
        5.2,
        5.1,
        5.9,
        5.9,
        5.4
    ],
    weekData: [
        NumberInt("44"),
        NumberInt("43"),
        NumberInt("68"),
        NumberInt("48"),
        NumberInt("57"),
        NumberInt("61"),
        NumberInt("34")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("73"),
    stressIndex: NumberInt("14"),
    currentHeartRate: NumberInt("119"),
    currentStepRate: NumberInt("112"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("119"),
            timestamp: ISODate("2025-05-06T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-06T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-05-06T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-06T22:04:19.172Z"),
    updateTime: ISODate("2025-05-06T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b04a"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-04T22:04:19.172Z"),
    date: "2025-05-04",
    heartRateData: [
        NumberInt("83"),
        NumberInt("142"),
        NumberInt("102"),
        NumberInt("92"),
        NumberInt("80"),
        NumberInt("66"),
        NumberInt("114"),
        NumberInt("100"),
        NumberInt("139"),
        NumberInt("141")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("100"),
        NumberInt("119"),
        NumberInt("127"),
        NumberInt("113"),
        NumberInt("129"),
        NumberInt("124"),
        NumberInt("127"),
        NumberInt("101"),
        NumberInt("120")
    ],
    paceData: [
        5.3,
        5.9,
        5.2,
        5,
        5.6,
        5.8,
        5.7,
        5.1,
        5.2,
        5.7
    ],
    weekData: [
        NumberInt("86"),
        NumberInt("59"),
        NumberInt("59"),
        NumberInt("45"),
        NumberInt("60"),
        NumberInt("85"),
        NumberInt("55")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("64"),
    stressIndex: NumberInt("30"),
    currentHeartRate: NumberInt("141"),
    currentStepRate: NumberInt("120"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("141"),
            timestamp: ISODate("2025-05-04T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("120"),
            timestamp: ISODate("2025-05-04T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-04T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-04T22:04:19.172Z"),
    updateTime: ISODate("2025-05-04T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b04b"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-03T22:04:19.172Z"),
    date: "2025-05-03",
    heartRateData: [
        NumberInt("142"),
        NumberInt("85"),
        NumberInt("139"),
        NumberInt("129"),
        NumberInt("96"),
        NumberInt("87"),
        NumberInt("137"),
        NumberInt("114"),
        NumberInt("83"),
        NumberInt("152")
    ],
    stepRateData: [
        NumberInt("112"),
        NumberInt("127"),
        NumberInt("126"),
        NumberInt("106"),
        NumberInt("106"),
        NumberInt("128"),
        NumberInt("97"),
        NumberInt("122"),
        NumberInt("99"),
        NumberInt("117")
    ],
    paceData: [
        5.9,
        5.4,
        5.1,
        5.5,
        5.8,
        5.5,
        5.6,
        5.3,
        5.5,
        5
    ],
    weekData: [
        NumberInt("77"),
        NumberInt("38"),
        NumberInt("35"),
        NumberInt("86"),
        NumberInt("60"),
        NumberInt("54"),
        NumberInt("59")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("67"),
    stressIndex: NumberInt("18"),
    currentHeartRate: NumberInt("152"),
    currentStepRate: NumberInt("117"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("152"),
            timestamp: ISODate("2025-05-03T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("117"),
            timestamp: ISODate("2025-05-03T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-05-03T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-03T22:04:19.172Z"),
    updateTime: ISODate("2025-05-03T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b04c"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-02T22:04:19.172Z"),
    date: "2025-05-02",
    heartRateData: [
        NumberInt("108"),
        NumberInt("91"),
        NumberInt("115"),
        NumberInt("69"),
        NumberInt("121"),
        NumberInt("103"),
        NumberInt("118"),
        NumberInt("60"),
        NumberInt("63"),
        NumberInt("80")
    ],
    stepRateData: [
        NumberInt("122"),
        NumberInt("122"),
        NumberInt("107"),
        NumberInt("93"),
        NumberInt("130"),
        NumberInt("104"),
        NumberInt("115"),
        NumberInt("96"),
        NumberInt("91"),
        NumberInt("102")
    ],
    paceData: [
        6,
        5.4,
        5.4,
        5.7,
        5.4,
        5.6,
        5.8,
        5.2,
        5.2,
        5.6
    ],
    weekData: [
        NumberInt("64"),
        NumberInt("78"),
        NumberInt("42"),
        NumberInt("48"),
        NumberInt("68"),
        NumberInt("56"),
        NumberInt("56")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("80"),
    currentStepRate: NumberInt("102"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("80"),
            timestamp: ISODate("2025-05-02T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("102"),
            timestamp: ISODate("2025-05-02T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-05-02T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-02T22:04:19.172Z"),
    updateTime: ISODate("2025-05-02T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b04d"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-05-01T22:04:19.172Z"),
    date: "2025-05-01",
    heartRateData: [
        NumberInt("142"),
        NumberInt("137"),
        NumberInt("72"),
        NumberInt("108"),
        NumberInt("128"),
        NumberInt("157"),
        NumberInt("141"),
        NumberInt("140"),
        NumberInt("71"),
        NumberInt("112")
    ],
    stepRateData: [
        NumberInt("115"),
        NumberInt("114"),
        NumberInt("111"),
        NumberInt("108"),
        NumberInt("120"),
        NumberInt("98"),
        NumberInt("94"),
        NumberInt("129"),
        NumberInt("130"),
        NumberInt("121")
    ],
    paceData: [
        5.6,
        5.9,
        5.2,
        5.1,
        5.8,
        5.1,
        5.3,
        5.8,
        5.3,
        5.5
    ],
    weekData: [
        NumberInt("60"),
        NumberInt("63"),
        NumberInt("46"),
        NumberInt("47"),
        NumberInt("45"),
        NumberInt("70"),
        NumberInt("45")
    ],
    bloodOxygen: NumberInt("100"),
    healthIndex: NumberInt("89"),
    stressIndex: NumberInt("38"),
    currentHeartRate: NumberInt("112"),
    currentStepRate: NumberInt("121"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("112"),
            timestamp: ISODate("2025-05-01T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("121"),
            timestamp: ISODate("2025-05-01T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("100"),
            timestamp: ISODate("2025-05-01T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-05-01T22:04:19.172Z"),
    updateTime: ISODate("2025-05-01T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b04e"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-30T22:04:19.172Z"),
    date: "2025-04-30",
    heartRateData: [
        NumberInt("119"),
        NumberInt("153"),
        NumberInt("81"),
        NumberInt("147"),
        NumberInt("122"),
        NumberInt("92"),
        NumberInt("89"),
        NumberInt("120"),
        NumberInt("157"),
        NumberInt("151")
    ],
    stepRateData: [
        NumberInt("102"),
        NumberInt("99"),
        NumberInt("98"),
        NumberInt("127"),
        NumberInt("101"),
        NumberInt("128"),
        NumberInt("124"),
        NumberInt("117"),
        NumberInt("105"),
        NumberInt("100")
    ],
    paceData: [
        5.6,
        5.1,
        5.1,
        5.2,
        5,
        5.6,
        5.6,
        5.1,
        5.4,
        5.5
    ],
    weekData: [
        NumberInt("59"),
        NumberInt("81"),
        NumberInt("60"),
        NumberInt("74"),
        NumberInt("68"),
        NumberInt("76"),
        NumberInt("57")
    ],
    bloodOxygen: NumberInt("98"),
    healthIndex: NumberInt("78"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("151"),
    currentStepRate: NumberInt("100"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("151"),
            timestamp: ISODate("2025-04-30T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-30T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("98"),
            timestamp: ISODate("2025-04-30T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-04-30T22:04:19.172Z"),
    updateTime: ISODate("2025-04-30T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b04f"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-29T22:04:19.172Z"),
    date: "2025-04-29",
    heartRateData: [
        NumberInt("71"),
        NumberInt("69"),
        NumberInt("114"),
        NumberInt("95"),
        NumberInt("93"),
        NumberInt("61"),
        NumberInt("125"),
        NumberInt("104"),
        NumberInt("88"),
        NumberInt("139")
    ],
    stepRateData: [
        NumberInt("124"),
        NumberInt("116"),
        NumberInt("104"),
        NumberInt("108"),
        NumberInt("108"),
        NumberInt("130"),
        NumberInt("100"),
        NumberInt("130"),
        NumberInt("90"),
        NumberInt("114")
    ],
    paceData: [
        5.3,
        5.3,
        5.2,
        5.9,
        5.2,
        5.6,
        5.5,
        5.2,
        5.1,
        5.7
    ],
    weekData: [
        NumberInt("49"),
        NumberInt("88"),
        NumberInt("76"),
        NumberInt("48"),
        NumberInt("36"),
        NumberInt("62"),
        NumberInt("90")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("95"),
    stressIndex: NumberInt("22"),
    currentHeartRate: NumberInt("139"),
    currentStepRate: NumberInt("114"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("139"),
            timestamp: ISODate("2025-04-29T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("114"),
            timestamp: ISODate("2025-04-29T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-29T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-04-29T22:04:19.172Z"),
    updateTime: ISODate("2025-04-29T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b050"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-28T22:04:19.172Z"),
    date: "2025-04-28",
    heartRateData: [
        NumberInt("106"),
        NumberInt("152"),
        NumberInt("107"),
        NumberInt("106"),
        NumberInt("91"),
        NumberInt("157"),
        NumberInt("151"),
        NumberInt("81"),
        NumberInt("145"),
        NumberInt("74")
    ],
    stepRateData: [
        NumberInt("118"),
        NumberInt("121"),
        NumberInt("104"),
        NumberInt("93"),
        NumberInt("126"),
        NumberInt("126"),
        NumberInt("113"),
        NumberInt("126"),
        NumberInt("124"),
        NumberInt("107")
    ],
    paceData: [
        5.9,
        5.5,
        5.9,
        5.1,
        5.2,
        5.2,
        5.7,
        5.3,
        5.5,
        5.9
    ],
    weekData: [
        NumberInt("82"),
        NumberInt("40"),
        NumberInt("89"),
        NumberInt("63"),
        NumberInt("77"),
        NumberInt("41"),
        NumberInt("46")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("84"),
    stressIndex: NumberInt("33"),
    currentHeartRate: NumberInt("74"),
    currentStepRate: NumberInt("107"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("74"),
            timestamp: ISODate("2025-04-28T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("107"),
            timestamp: ISODate("2025-04-28T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-28T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-04-28T22:04:19.172Z"),
    updateTime: ISODate("2025-04-28T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b051"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-27T22:04:19.172Z"),
    date: "2025-04-27",
    heartRateData: [
        NumberInt("74"),
        NumberInt("128"),
        NumberInt("124"),
        NumberInt("124"),
        NumberInt("160"),
        NumberInt("90"),
        NumberInt("82"),
        NumberInt("75"),
        NumberInt("106"),
        NumberInt("60")
    ],
    stepRateData: [
        NumberInt("101"),
        NumberInt("111"),
        NumberInt("117"),
        NumberInt("106"),
        NumberInt("107"),
        NumberInt("104"),
        NumberInt("109"),
        NumberInt("123"),
        NumberInt("105"),
        NumberInt("100")
    ],
    paceData: [
        5.8,
        5.5,
        5.5,
        5.9,
        5.9,
        5.5,
        5.2,
        5.6,
        5.9,
        5.2
    ],
    weekData: [
        NumberInt("36"),
        NumberInt("53"),
        NumberInt("38"),
        NumberInt("73"),
        NumberInt("44"),
        NumberInt("32"),
        NumberInt("54")
    ],
    bloodOxygen: NumberInt("97"),
    healthIndex: NumberInt("68"),
    stressIndex: NumberInt("23"),
    currentHeartRate: NumberInt("60"),
    currentStepRate: NumberInt("100"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("60"),
            timestamp: ISODate("2025-04-27T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("100"),
            timestamp: ISODate("2025-04-27T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("97"),
            timestamp: ISODate("2025-04-27T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-04-27T22:04:19.172Z"),
    updateTime: ISODate("2025-04-27T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b052"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-26T22:04:19.172Z"),
    date: "2025-04-26",
    heartRateData: [
        NumberInt("101"),
        NumberInt("130"),
        NumberInt("67"),
        NumberInt("89"),
        NumberInt("129"),
        NumberInt("150"),
        NumberInt("153"),
        NumberInt("151"),
        NumberInt("96"),
        NumberInt("73")
    ],
    stepRateData: [
        NumberInt("129"),
        NumberInt("113"),
        NumberInt("93"),
        NumberInt("97"),
        NumberInt("124"),
        NumberInt("124"),
        NumberInt("111"),
        NumberInt("99"),
        NumberInt("112"),
        NumberInt("91")
    ],
    paceData: [
        5.9,
        5.6,
        5.5,
        5.9,
        5.9,
        5.6,
        5.6,
        5.1,
        5,
        5.4
    ],
    weekData: [
        NumberInt("82"),
        NumberInt("32"),
        NumberInt("47"),
        NumberInt("64"),
        NumberInt("67"),
        NumberInt("79"),
        NumberInt("69")
    ],
    bloodOxygen: NumberInt("96"),
    healthIndex: NumberInt("86"),
    stressIndex: NumberInt("26"),
    currentHeartRate: NumberInt("73"),
    currentStepRate: NumberInt("91"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("73"),
            timestamp: ISODate("2025-04-26T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("91"),
            timestamp: ISODate("2025-04-26T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("96"),
            timestamp: ISODate("2025-04-26T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-04-26T22:04:19.172Z"),
    updateTime: ISODate("2025-04-26T22:04:19.172Z")
} ]);
db.getCollection("user_health_data").insert([ {
    _id: ObjectId("6831d1e35dd856a3ca34b053"),
    userId: ObjectId("682beb515253db543d720441"),
    timestamp: ISODate("2025-04-25T22:04:19.172Z"),
    date: "2025-04-25",
    heartRateData: [
        NumberInt("126"),
        NumberInt("129"),
        NumberInt("125"),
        NumberInt("122"),
        NumberInt("78"),
        NumberInt("122"),
        NumberInt("61"),
        NumberInt("152"),
        NumberInt("79"),
        NumberInt("131")
    ],
    stepRateData: [
        NumberInt("108"),
        NumberInt("90"),
        NumberInt("104"),
        NumberInt("114"),
        NumberInt("112"),
        NumberInt("129"),
        NumberInt("100"),
        NumberInt("95"),
        NumberInt("128"),
        NumberInt("104")
    ],
    paceData: [
        5.2,
        5.4,
        5.1,
        5.7,
        5.4,
        5.7,
        5.3,
        5.7,
        5.4,
        5.8
    ],
    weekData: [
        NumberInt("69"),
        NumberInt("46"),
        NumberInt("82"),
        NumberInt("60"),
        NumberInt("33"),
        NumberInt("74"),
        NumberInt("52")
    ],
    bloodOxygen: NumberInt("99"),
    healthIndex: NumberInt("74"),
    stressIndex: NumberInt("19"),
    currentHeartRate: NumberInt("131"),
    currentStepRate: NumberInt("104"),
    metrics: [
        {
            type: "heartRate",
            value: NumberInt("131"),
            timestamp: ISODate("2025-04-25T22:04:19.172Z")
        },
        {
            type: "stepRate",
            value: NumberInt("104"),
            timestamp: ISODate("2025-04-25T22:04:19.172Z")
        },
        {
            type: "bloodOxygen",
            value: NumberInt("99"),
            timestamp: ISODate("2025-04-25T22:04:19.172Z")
        }
    ],
    createTime: ISODate("2025-04-25T22:04:19.172Z"),
    updateTime: ISODate("2025-04-25T22:04:19.172Z")
} ]);
