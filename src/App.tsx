import React from "react";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts";

const DATA: any[] = [
  {
    id: "R001",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "unlikely",
    wtp: "2-3",
    exp: "varies",
    problems: ["pollution", "pt_inefficient"],
    barriers: ["pt_coverage", "pt_schedule", "pt_slow"],
    factors: ["speed", "cost", "comfort", "flexibility", "sustainability"],
    reasons: ["work", "leisure", "sports"],
    features: [],
  },
  {
    id: "R002",
    age: "18-24",
    occ: "student_uni",
    res: "roquetas",
    veh: "car_gas",
    intent: "likely",
    wtp: "<2",
    exp: "stressful",
    problems: ["pt_inefficient", "parking"],
    barriers: ["pt_coverage", "pt_schedule", "habit"],
    factors: ["flexibility", "cost", "comfort", "speed", "sustainability"],
    reasons: ["study"],
    features: ["autonomy", "availability", "ease"],
  },
  {
    id: "R003",
    age: "25-34",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "unlikely",
    wtp: "<2",
    exp: "varies",
    problems: ["pt_inefficient", "connections"],
    barriers: ["pt_coverage"],
    factors: ["speed", "comfort", "flexibility", "cost", "sustainability"],
    reasons: ["sports"],
    features: [],
  },
  {
    id: "R004",
    age: "25-34",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_electric",
    intent: "likely",
    wtp: "<2",
    exp: "neutral",
    problems: ["pt_inefficient", "car_dependency"],
    barriers: ["pt_schedule", "pt_slow", "autonomy"],
    factors: ["speed", "flexibility", "comfort", "cost", "sustainability"],
    reasons: ["work"],
    features: ["autonomy", "price", "charging"],
  },
  {
    id: "R005",
    age: "18-24",
    occ: "student_uni",
    res: "almeria",
    veh: "car_gas",
    intent: "possible",
    wtp: "4-5",
    exp: "neutral",
    problems: ["pt_inefficient", "connections"],
    barriers: ["pt_coverage", "pt_schedule", "pt_slow"],
    factors: ["speed", "comfort", "flexibility", "cost", "sustainability"],
    reasons: ["work", "study", "family", "sports"],
    features: ["availability", "price", "charging"],
  },
  {
    id: "R006",
    age: "18-24",
    occ: "student_hs",
    res: "roquetas",
    veh: "car_gas",
    intent: "unlikely",
    wtp: "2-3",
    exp: "pleasant",
    problems: ["pt_inefficient", "parking"],
    barriers: ["pt_coverage", "pt_schedule"],
    factors: ["comfort", "speed", "flexibility", "sustainability", "cost"],
    reasons: ["study"],
    features: [],
  },
  {
    id: "R007",
    age: "18-24",
    occ: "student_uni",
    res: "vicar",
    veh: "scooter",
    intent: "likely",
    wtp: "4-5",
    exp: "pleasant",
    problems: ["pt_inefficient", "parking"],
    barriers: [],
    factors: ["comfort", "speed", "cost", "flexibility", "sustainability"],
    reasons: ["study", "leisure"],
    features: ["no_license", "autonomy", "service"],
  },
  {
    id: "R008",
    age: "18-24",
    occ: "student_hs",
    res: "roquetas",
    veh: "scooter",
    intent: "likely",
    wtp: "4-5",
    exp: "pleasant",
    problems: ["pt_inefficient", "parking"],
    barriers: [],
    factors: ["speed", "cost", "flexibility", "comfort", "sustainability"],
    reasons: ["study"],
    features: ["no_license", "autonomy", "service"],
  },
  {
    id: "R009",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "moto_gas",
    intent: "possible",
    wtp: "2-3",
    exp: "neutral",
    problems: ["pt_inefficient", "no_innovation"],
    barriers: [],
    factors: ["speed", "cost", "flexibility", "comfort", "sustainability"],
    reasons: ["leisure", "work", "other"],
    features: ["safety", "no_license", "service"],
  },
  {
    id: "R010",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "possible",
    wtp: "<2",
    exp: "neutral",
    problems: ["traffic", "pt_inefficient"],
    barriers: ["pt_coverage", "pt_schedule", "autonomy"],
    factors: ["speed", "cost", "flexibility", "sustainability", "comfort"],
    reasons: ["work", "study", "leisure", "sports", "social"],
    features: ["ease", "price", "sustainability"],
  },
  {
    id: "R011",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "very_likely",
    wtp: "<2",
    exp: "boring",
    problems: ["pt_inefficient", "connections"],
    barriers: ["pt_coverage", "pt_schedule"],
    factors: ["speed", "flexibility", "comfort", "cost", "sustainability"],
    reasons: ["work"],
    features: ["service", "charging"],
  },
  {
    id: "R012",
    age: "18-24",
    occ: "student_uni",
    res: "roquetas",
    veh: "car_gas",
    intent: "possible",
    wtp: "2-3",
    exp: "neutral",
    problems: ["traffic", "parking"],
    barriers: ["pt_schedule", "autonomy", "habit"],
    factors: ["comfort", "flexibility", "speed", "cost", "sustainability"],
    reasons: ["study", "leisure", "sports"],
    features: ["availability", "price", "safety"],
  },
  {
    id: "R013",
    age: "25-34",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "very_unlikely",
    wtp: "<2",
    exp: "stressful",
    problems: ["traffic", "pt_inefficient"],
    barriers: ["pt_coverage", "pt_slow", "autonomy"],
    factors: ["speed", "comfort", "flexibility", "cost", "sustainability"],
    reasons: ["work"],
    features: [],
  },
  {
    id: "R014",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "unlikely",
    wtp: "3-4",
    exp: "neutral",
    problems: ["pt_inefficient", "parking"],
    barriers: ["pt_coverage", "pt_schedule", "habit"],
    factors: ["speed", "comfort", "cost", "flexibility", "sustainability"],
    reasons: ["leisure", "social", "shopping"],
    features: [],
  },
  {
    id: "R015",
    age: "18-24",
    occ: "adult_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "unlikely",
    wtp: "<2",
    exp: "varies",
    problems: ["connections", "pt_inefficient"],
    barriers: ["pt_schedule", "autonomy", "pt_coverage"],
    factors: ["speed", "flexibility", "comfort", "cost", "sustainability"],
    reasons: ["leisure", "work", "medical"],
    features: [],
  },
  {
    id: "R016",
    age: "18-24",
    occ: "student_uni",
    res: "roquetas",
    veh: "car_gas",
    intent: "likely",
    wtp: "<2",
    exp: "neutral",
    problems: ["parking", "car_dependency"],
    barriers: ["pt_coverage", "pt_schedule", "no_bike_lanes"],
    factors: ["flexibility", "cost", "speed", "sustainability", "comfort"],
    reasons: ["study", "leisure", "sports", "social"],
    features: ["price", "availability", "charging"],
  },
  {
    id: "R017",
    age: "18-24",
    occ: "student_uni",
    res: "roquetas",
    veh: "car_gas",
    intent: "likely",
    wtp: "2-3",
    exp: "varies",
    problems: ["traffic", "pt_inefficient"],
    barriers: ["pt_coverage", "pt_schedule", "autonomy"],
    factors: ["speed", "comfort", "flexibility", "sustainability", "cost"],
    reasons: ["study", "work", "leisure", "shopping"],
    features: ["price", "autonomy", "availability"],
  },
  {
    id: "R018",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "possible",
    wtp: "2-3",
    exp: "stressful",
    problems: ["car_dependency", "traffic"],
    barriers: ["autonomy", "pt_slow", "pt_coverage"],
    factors: ["speed", "flexibility", "cost", "comfort", "sustainability"],
    reasons: ["work", "family", "shopping", "leisure"],
    features: ["availability", "price", "charging"],
  },
  {
    id: "R019",
    age: "18-24",
    occ: "student_uni",
    res: "roquetas",
    veh: "car_gas",
    intent: "unlikely",
    wtp: "2-3",
    exp: "stressful",
    problems: ["parking", "traffic"],
    barriers: ["habit"],
    factors: ["comfort", "flexibility", "speed", "cost", "sustainability"],
    reasons: ["work", "family", "shopping", "leisure"],
    features: [],
  },
  {
    id: "R020",
    age: "25-34",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "likely",
    wtp: "<2",
    exp: "boring",
    problems: ["pt_inefficient", "no_innovation"],
    barriers: ["pt_coverage", "pt_schedule", "autonomy"],
    factors: ["speed", "comfort", "flexibility", "cost", "sustainability"],
    reasons: ["shopping", "leisure", "sports"],
    features: ["ease", "availability", "price"],
  },
  {
    id: "R021",
    age: "65+",
    occ: "adult_prof",
    res: "other",
    veh: "bike",
    intent: "likely",
    wtp: "2-3",
    exp: "neutral",
    problems: ["pt_inefficient", "connections"],
    barriers: [],
    factors: ["cost", "speed", "flexibility", "sustainability", "comfort"],
    reasons: ["study", "sports", "social"],
    features: ["availability", "autonomy", "ease"],
  },
  {
    id: "R022",
    age: "18-24",
    occ: "adult_prof",
    res: "vicar",
    veh: "none",
    intent: "possible",
    wtp: ">5",
    exp: "neutral",
    problems: ["traffic", "pollution"],
    barriers: [],
    factors: ["speed", "comfort", "flexibility", "cost", "sustainability"],
    reasons: ["work", "family", "shopping", "leisure", "social", "medical"],
    features: ["availability", "safety", "service"],
  },
  {
    id: "R023",
    age: "65+",
    occ: "other",
    res: "other",
    veh: "none",
    intent: "very_unlikely",
    wtp: "none",
    exp: "varies",
    problems: ["climate", "no_innovation"],
    barriers: [],
    factors: ["sustainability", "flexibility", "comfort", "cost", "speed"],
    reasons: ["medical"],
    features: [],
  },
  {
    id: "R024",
    age: "18-24",
    occ: "student_uni",
    res: "roquetas",
    veh: "car_gas",
    intent: "possible",
    wtp: "<2",
    exp: "varies",
    problems: ["pt_inefficient", "connections"],
    barriers: ["pt_coverage", "pt_schedule", "pt_slow"],
    factors: ["flexibility", "speed", "cost", "comfort", "sustainability"],
    reasons: ["work"],
    features: ["service", "autonomy", "price"],
  },
  {
    id: "R025",
    age: "65+",
    occ: "unemployed",
    res: "other",
    veh: "none",
    intent: "likely",
    wtp: "2-3",
    exp: "neutral",
    problems: ["pt_inefficient", "car_dependency"],
    barriers: [],
    factors: ["sustainability", "comfort", "flexibility", "cost", "speed"],
    reasons: ["other"],
    features: ["availability", "price", "ease"],
  },
  {
    id: "R026",
    age: "65+",
    occ: "student_hs",
    res: "other",
    veh: "car_gas",
    intent: "likely",
    wtp: "2-3",
    exp: "neutral",
    problems: ["pt_inefficient", "connections"],
    barriers: ["pt_schedule", "pt_coverage", "pt_slow"],
    factors: ["cost", "flexibility", "speed", "sustainability", "comfort"],
    reasons: ["shopping", "leisure"],
    features: ["availability", "autonomy", "price"],
  },
  {
    id: "R027",
    age: "18-24",
    occ: "self_employed",
    res: "roquetas",
    veh: "car_gas",
    intent: "possible",
    wtp: "4-5",
    exp: "neutral",
    problems: ["pt_inefficient", "car_dependency"],
    barriers: ["pt_coverage", "pt_schedule", "autonomy"],
    factors: ["speed", "flexibility", "comfort", "sustainability", "cost"],
    reasons: ["leisure"],
    features: ["availability", "ease", "price"],
  },
  {
    id: "R028",
    age: "18-24",
    occ: "student_uni",
    res: "roquetas",
    veh: "car_gas",
    intent: "possible",
    wtp: "3-4",
    exp: "uncomfortable",
    problems: ["pt_inefficient", "parking"],
    barriers: ["pt_coverage", "pt_schedule", "pt_slow"],
    factors: ["comfort", "cost", "speed", "flexibility", "sustainability"],
    reasons: ["leisure", "study"],
    features: ["availability", "ease", "price"],
  },
  {
    id: "R029",
    age: "18-24",
    occ: "student_hs",
    res: "roquetas",
    veh: "none",
    intent: "very_likely",
    wtp: "2-3",
    exp: "stressful",
    problems: ["connections", "bike_infra"],
    barriers: [],
    factors: ["cost", "speed", "flexibility", "comfort", "sustainability"],
    reasons: ["sports", "leisure", "shopping", "family", "work", "study"],
    features: ["service"],
  },
  {
    id: "R030",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "possible",
    wtp: "<2",
    exp: "pleasant",
    problems: ["traffic", "pollution"],
    barriers: ["pt_schedule", "pt_slow", "pt_coverage"],
    factors: ["cost", "sustainability", "speed", "comfort", "flexibility"],
    reasons: ["leisure"],
    features: ["price", "autonomy", "safety"],
  },
  {
    id: "R031",
    age: "25-34",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "possible",
    wtp: "<2",
    exp: "neutral",
    problems: ["parking", "pollution"],
    barriers: ["pt_coverage", "passengers", "pt_schedule"],
    factors: ["speed", "comfort", "flexibility", "cost", "sustainability"],
    reasons: ["work", "shopping", "leisure", "sports"],
    features: ["price", "availability", "ease"],
  },
  {
    id: "R032",
    age: "18-24",
    occ: "student_uni",
    res: "roquetas",
    veh: "car_gas",
    intent: "possible",
    wtp: "<2",
    exp: "stressful",
    problems: ["pt_inefficient", "traffic"],
    barriers: ["pt_schedule", "pt_slow", "pt_coverage"],
    factors: ["speed", "flexibility", "comfort", "cost", "sustainability"],
    reasons: ["study", "leisure", "sports", "medical"],
    features: ["availability", "autonomy", "no_license"],
  },
  {
    id: "R033",
    age: "18-24",
    occ: "other",
    res: "roquetas",
    veh: "none",
    intent: "very_likely",
    wtp: "3-4",
    exp: "varies",
    problems: ["pt_inefficient", "car_dependency"],
    barriers: [],
    factors: ["cost", "flexibility", "speed", "sustainability", "comfort"],
    reasons: ["work", "shopping", "leisure", "medical"],
    features: ["price", "availability", "no_license"],
  },
  {
    id: "R034",
    age: "18-24",
    occ: "student_uni",
    res: "other",
    veh: "car_electric",
    intent: "possible",
    wtp: "<2",
    exp: "stressful",
    problems: ["pt_inefficient", "bike_infra"],
    barriers: ["pt_slow", "pt_schedule", "heavy_items"],
    factors: ["flexibility", "speed", "cost", "comfort", "sustainability"],
    reasons: [
      "study",
      "work",
      "family",
      "shopping",
      "leisure",
      "sports",
      "medical",
    ],
    features: ["service", "availability", "price"],
  },
  {
    id: "R035",
    age: "18-24",
    occ: "other",
    res: "roquetas",
    veh: "car_gas",
    intent: "likely",
    wtp: "2-3",
    exp: "neutral",
    problems: ["pt_inefficient", "car_dependency"],
    barriers: ["pt_coverage", "pt_schedule", "autonomy"],
    factors: ["flexibility", "cost", "comfort", "sustainability", "speed"],
    reasons: ["study", "shopping", "leisure", "sports", "social"],
    features: ["ease", "availability", "price"],
  },
  {
    id: "R036",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "very_likely",
    wtp: "<2",
    exp: "stressful",
    problems: ["traffic", "pt_inefficient"],
    barriers: ["pt_schedule", "pt_coverage"],
    factors: ["flexibility", "speed", "cost", "comfort", "sustainability"],
    reasons: ["leisure"],
    features: ["availability", "safety", "price"],
  },
  {
    id: "R037",
    age: "18-24",
    occ: "student_hs",
    res: "roquetas",
    veh: "bike",
    intent: "possible",
    wtp: "2-3",
    exp: "uncomfortable",
    problems: ["car_dependency", "climate"],
    barriers: [],
    factors: ["comfort", "speed", "cost", "flexibility", "sustainability"],
    reasons: ["sports"],
    features: ["autonomy", "no_license", "safety"],
  },
  {
    id: "R038",
    age: "18-24",
    occ: "student_uni",
    res: "roquetas",
    veh: "car_gas",
    intent: "likely",
    wtp: "2-3",
    exp: "neutral",
    problems: ["traffic", "pt_inefficient"],
    barriers: ["pt_coverage", "habit", "autonomy"],
    factors: ["speed", "comfort", "flexibility", "cost", "sustainability"],
    reasons: ["study", "leisure"],
    features: ["availability", "price", "helmets"],
  },
  {
    id: "R039",
    age: "18-24",
    occ: "student_uni",
    res: "nijar",
    veh: "car_gas",
    intent: "likely",
    wtp: "<2",
    exp: "neutral",
    problems: ["traffic", "pt_inefficient"],
    barriers: ["no_bike_lanes", "climate", "heavy_items"],
    factors: ["cost", "speed", "comfort", "flexibility", "sustainability"],
    reasons: ["study"],
    features: ["ease"],
  },
  {
    id: "R040",
    age: "65+",
    occ: "other",
    res: "other",
    veh: "car_gas",
    intent: "likely",
    wtp: "2-3",
    exp: "neutral",
    problems: ["pt_inefficient", "connections"],
    barriers: ["pt_schedule", "pt_slow", "no_bike_lanes"],
    factors: ["cost", "comfort", "flexibility", "sustainability", "speed"],
    reasons: ["work", "family", "leisure", "sports"],
    features: ["availability", "no_license", "ease"],
  },
  {
    id: "R041",
    age: "18-24",
    occ: "student_hs",
    res: "roquetas",
    veh: "none",
    intent: "very_likely",
    wtp: "2-3",
    exp: "boring",
    problems: ["pt_inefficient", "bike_infra"],
    barriers: [],
    factors: ["cost", "sustainability", "flexibility", "speed", "comfort"],
    reasons: [
      "study",
      "shopping",
      "leisure",
      "sports",
      "social",
      "medical",
      "family",
    ],
    features: ["ease", "price", "availability"],
  },
  {
    id: "R042",
    age: "18-24",
    occ: "young_prof",
    res: "other",
    veh: "car_electric",
    intent: "very_likely",
    wtp: "<2",
    exp: "varies",
    problems: ["pt_inefficient", "car_dependency"],
    barriers: ["pt_coverage", "passengers", "autonomy"],
    factors: ["sustainability", "flexibility", "comfort", "cost", "speed"],
    reasons: ["sports", "leisure", "shopping", "family"],
    features: ["availability", "price", "charging"],
  },
  {
    id: "R043",
    age: "18-24",
    occ: "self_employed",
    res: "roquetas",
    veh: "car_gas",
    intent: "unlikely",
    wtp: "2-3",
    exp: "pleasant",
    problems: ["pt_inefficient", "connections"],
    barriers: ["autonomy", "habit"],
    factors: ["comfort", "speed", "flexibility", "cost", "sustainability"],
    reasons: ["leisure", "sports", "social"],
    features: [],
  },
  {
    id: "R044",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "unlikely",
    wtp: "<2",
    exp: "neutral",
    problems: ["pt_inefficient", "parking"],
    barriers: ["pt_coverage", "pt_schedule", "autonomy"],
    factors: ["speed", "flexibility", "cost", "comfort", "sustainability"],
    reasons: ["work", "shopping", "leisure", "sports"],
    features: [],
  },
  {
    id: "R045",
    age: "18-24",
    occ: "student_uni",
    res: "roquetas",
    veh: "ebike",
    intent: "likely",
    wtp: "2-3",
    exp: "neutral",
    problems: ["traffic", "no_innovation"],
    barriers: [],
    factors: ["speed", "cost", "flexibility", "sustainability", "comfort"],
    reasons: ["shopping", "leisure", "sports", "social", "study"],
    features: ["availability", "ease", "no_license"],
  },
  {
    id: "R046",
    age: "18-24",
    occ: "unemployed",
    res: "other",
    veh: "none",
    intent: "possible",
    wtp: "3-4",
    exp: "varies",
    problems: ["pt_inefficient", "traffic"],
    barriers: [],
    factors: ["speed", "cost", "flexibility", "comfort", "sustainability"],
    reasons: ["work"],
    features: ["price", "autonomy", "service"],
  },
  {
    id: "R047",
    age: "18-24",
    occ: "student_uni",
    res: "almeria",
    veh: "car_electric",
    intent: "very_likely",
    wtp: "<2",
    exp: "neutral",
    problems: ["traffic", "pt_inefficient"],
    barriers: ["pt_coverage", "pt_schedule", "autonomy"],
    factors: ["speed", "flexibility", "comfort", "cost", "sustainability"],
    reasons: ["study", "work", "leisure"],
    features: ["charging", "service", "sustainability"],
  },
  {
    id: "R048",
    age: "18-24",
    occ: "unemployed",
    res: "other",
    veh: "none",
    intent: "very_likely",
    wtp: "4-5",
    exp: "boring",
    problems: ["connections", "car_dependency"],
    barriers: [],
    factors: ["flexibility", "sustainability", "speed", "comfort", "cost"],
    reasons: [
      "work",
      "shopping",
      "study",
      "sports",
      "leisure",
      "medical",
      "family",
    ],
    features: ["no_license", "availability", "autonomy"],
  },
  {
    id: "R049",
    age: "35-44",
    occ: "adult_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "unlikely",
    wtp: "none",
    exp: "stressful",
    problems: ["pt_inefficient", "parking"],
    barriers: ["pt_coverage", "pt_schedule", "pt_slow"],
    factors: ["flexibility", "speed", "cost", "comfort", "sustainability"],
    reasons: ["work", "shopping", "leisure", "medical"],
    features: [],
  },
  {
    id: "R050",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_electric",
    intent: "possible",
    wtp: "<2",
    exp: "neutral",
    problems: ["no_innovation", "bike_infra"],
    barriers: ["pt_schedule"],
    factors: ["speed", "flexibility", "comfort", "cost", "sustainability"],
    reasons: ["work", "leisure"],
    features: ["sustainability", "service", "helmets"],
  },
  {
    id: "R051",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "possible",
    wtp: "4-5",
    exp: "neutral",
    problems: ["pt_inefficient", "parking"],
    barriers: ["pt_coverage", "pt_schedule", "climate"],
    factors: ["speed", "comfort", "cost", "flexibility", "sustainability"],
    reasons: ["work", "shopping", "leisure", "sports"],
    features: ["price", "availability", "charging"],
  },
  {
    id: "R052",
    age: "45-54",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "likely",
    wtp: "<2",
    exp: "varies",
    problems: ["parking", "pt_inefficient"],
    barriers: ["pt_coverage", "pt_schedule"],
    factors: ["cost", "comfort", "speed", "sustainability", "flexibility"],
    reasons: ["work"],
    features: ["price"],
  },
  {
    id: "R053",
    age: "18-24",
    occ: "student_uni",
    res: "roquetas",
    veh: "car_gas",
    intent: "unlikely",
    wtp: "<2",
    exp: "neutral",
    problems: ["traffic", "pt_inefficient"],
    barriers: ["pt_coverage", "autonomy", "pt_slow"],
    factors: ["comfort", "flexibility", "speed", "cost", "sustainability"],
    reasons: ["study", "leisure", "sports", "social", "shopping", "medical"],
    features: [],
  },
  {
    id: "R054",
    age: "65+",
    occ: "other",
    res: "other",
    veh: "car_gas",
    intent: "likely",
    wtp: "2-3",
    exp: "neutral",
    problems: ["pt_inefficient", "parking"],
    barriers: ["pt_schedule", "pt_slow", "pt_coverage"],
    factors: ["cost", "flexibility", "speed", "sustainability", "comfort"],
    reasons: ["medical", "social", "sports"],
    features: ["availability", "autonomy", "charging"],
  },
  {
    id: "R055",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "car_gas",
    intent: "unlikely",
    wtp: "4-5",
    exp: "pleasant",
    problems: ["traffic", "pt_inefficient"],
    barriers: ["pt_schedule"],
    factors: ["speed", "comfort", "flexibility", "cost", "sustainability"],
    reasons: ["work"],
    features: [],
  },
  {
    id: "R056",
    age: "18-24",
    occ: "young_prof",
    res: "roquetas",
    veh: "bike",
    intent: "possible",
    wtp: "<2",
    exp: "neutral",
    problems: ["pt_inefficient", "car_dependency"],
    barriers: [],
    factors: ["cost", "sustainability", "comfort", "flexibility", "speed"],
    reasons: ["work", "family", "leisure", "shopping"],
    features: ["availability", "ease", "service"],
  },
  {
    id: "R057",
    age: "18-24",
    occ: "student_uni",
    res: "almeria",
    veh: "car_gas",
    intent: "very_likely",
    wtp: "<2",
    exp: "neutral",
    problems: ["parking", "car_dependency"],
    barriers: ["pt_schedule"],
    factors: ["flexibility", "speed", "sustainability", "cost", "comfort"],
    reasons: ["study"],
    features: ["autonomy", "helmets", "safety"],
  },
];

const LB = {
  age: {
    "18-24": "18–24",
    "25-34": "25–34",
    "35-44": "35–44",
    "45-54": "45–54",
    "65+": "65+",
  },
  occ: {
    student_uni: "Uni Student",
    student_hs: "Secondary/FP",
    young_prof: "Young Prof.",
    adult_prof: "Adult Prof.",
    self_employed: "Self-Employed",
    unemployed: "Unemployed",
    other: "Other",
  },
  res: {
    roquetas: "Roquetas de Mar",
    almeria: "Almería",
    vicar: "Vícar",
    nijar: "Níjar",
    other: "Other",
  },
  veh: {
    car_gas: "Car (Petrol)",
    car_electric: "Car (Electric)",
    none: "No Vehicle",
    bike: "Bicycle",
    scooter: "E-Scooter",
    moto_gas: "Motorcycle",
    ebike: "E-Bike",
  },
  intent: {
    very_likely: "Very Likely",
    likely: "Likely",
    possible: "Possible",
    unlikely: "Unlikely",
    very_unlikely: "Very Unlikely",
  },
  wtp: {
    "<2": "< €2",
    "2-3": "€2–3",
    "3-4": "€3–4",
    "4-5": "€4–5",
    ">5": "> €5",
    none: "Unwilling",
  },
  exp: {
    neutral: "Neutral",
    stressful: "Stressful",
    varies: "Variable",
    pleasant: "Pleasant",
    boring: "Boring",
    uncomfortable: "Uncomfortable",
  },
  problems: {
    pt_inefficient: "Inefficient PT",
    traffic: "Traffic",
    parking: "Parking",
    car_dependency: "Car Dependency",
    connections: "Poor Connections",
    no_innovation: "No Innovation",
    pollution: "Pollution",
    bike_infra: "Cycling Infra.",
    climate: "Climate",
  },
  barriers: {
    pt_schedule: "PT Schedules",
    pt_coverage: "PT Coverage",
    autonomy: "Need Autonomy",
    pt_slow: "PT Too Slow",
    habit: "Habit",
    no_bike_lanes: "No Bike Lanes",
    passengers: "Passengers",
    heavy_items: "Heavy Items",
    climate: "Climate",
  },
  factors: {
    speed: "Speed",
    cost: "Cost",
    comfort: "Comfort",
    flexibility: "Flexibility",
    sustainability: "Sustainability",
  },
  features: {
    availability: "Availability",
    price: "Price",
    autonomy: "Coverage",
    ease: "App Ease",
    service: "Safety",
    charging: "Charging",
    no_license: "No License",
    safety: "Road Safety",
    sustainability: "Eco-Friendly",
    helmets: "Helmets",
  },
  reasons: {
    leisure: "Leisure",
    work: "Work",
    sports: "Sports",
    study: "Study",
    shopping: "Shopping",
    family: "Family",
    social: "Social",
    medical: "Medical",
    other: "Other",
  },
};

const INTENT_COLORS = {
  very_likely: "#047857",
  likely: "#10b981",
  possible: "#eab308",
  unlikely: "#ef4444",
  very_unlikely: "#991b1b",
};
const PALETTE = [
  "#0c2d48",
  "#145374",
  "#2e86ab",
  "#5da9c6",
  "#a3d5e0",
  "#7b2d8e",
  "#27ae60",
  "#e67e22",
  "#e74c3c",
  "#1abc9c",
];
const FONT = "'Georgia',serif";

function countSingle(data: any[], field: string) {
  const c: Record<string, number> = {};
  data.forEach((r) => {
    const v = r[field];
    if (v) c[v] = (c[v] || 0) + 1;
  });
  return Object.entries(c)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => ({
      name: (LB[field] || {})[k] || k,
      value: v,
      pct: +((v / data.length) * 100).toFixed(1),
      key: k,
    }));
}

function countMulti(data: any[], field: string) {
  const c: Record<string, number> = {};
  data.forEach((r) => {
    const a = r[field];
    if (Array.isArray(a))
      a.forEach((x) => {
        c[x] = (c[x] || 0) + 1;
      });
  });
  return Object.entries(c)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => ({
      name: (LB[field] || {})[k] || k,
      value: v,
      pct: +((v / data.length) * 100).toFixed(1),
      key: k,
    }));
}

function meanRank(data: any[], criterion: string) {
  const ps = data
    .filter((r: any) => r.factors && r.factors.length === 5)
    .map((r: any) => r.factors.indexOf(criterion) + 1)
    .filter((p: number) => p > 0);
  return ps.length
    ? ps.reduce((a: number, b: number) => a + b, 0) / ps.length
    : 3;
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "4px 11px",
        fontSize: 11,
        borderRadius: 14,
        border: active ? "1.5px solid #145374" : "1px solid #d1d5db",
        background: active ? "#145374" : "#fff",
        color: active ? "#fff" : "#6b7280",
        cursor: "pointer",
        fontFamily: "inherit",
        fontWeight: active ? 600 : 400,
      }}
    >
      {label}
    </button>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
  labels,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  labels: any;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        flexWrap: "wrap",
        marginBottom: 5,
      }}
    >
      <span
        style={{
          fontSize: 11,
          color: "#9ca3af",
          fontWeight: 600,
          width: 58,
          textAlign: "right",
        }}
      >
        {label}
      </span>
      <FilterChip
        label="All"
        active={value === "all"}
        onClick={() => onChange("all")}
      />
      {options.map((o) => (
        <FilterChip
          key={o}
          label={(labels || {})[o] || o}
          active={value === o}
          onClick={() => onChange(o)}
        />
      ))}
    </div>
  );
}

function StatBox({
  value,
  label,
  color,
}: {
  value: any;
  label: string;
  color?: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 10,
        padding: "14px 10px",
        textAlign: "center",
        borderTop: "3px solid " + (color || "#145374"),
      }}
    >
      <div style={{ fontSize: 26, fontWeight: 800, color: "#0c2d48" }}>
        {value}
      </div>
      <div
        style={{
          fontSize: 9.5,
          color: "#9ca3af",
          marginTop: 2,
          letterSpacing: 0.7,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function Section({
  title,
  note,
  children,
}: {
  title?: string;
  note?: string;
  children: any;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: "16px 20px",
        marginBottom: 14,
        boxShadow: "0 1px 3px rgba(0,0,0,.04)",
      }}
    >
      {title && (
        <h3
          style={{
            fontSize: 13.5,
            fontWeight: 700,
            color: "#0c2d48",
            margin: "0 0 2px",
          }}
        >
          {title}
        </h3>
      )}
      {note && (
        <p
          style={{
            fontSize: 10,
            color: "#9ca3af",
            margin: "0 0 10px",
            fontStyle: "italic",
          }}
        >
          {note}
        </p>
      )}
      {children}
    </div>
  );
}

function HorizontalBars({ data, color }: { data: any[]; color?: string }) {
  const c = color || "#145374";
  const mx = Math.max(...data.map((d) => d.pct), 1);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {data.map((d: any, i: number) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 125,
              fontSize: 11,
              color: "#374151",
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            {d.name}
          </div>
          <div
            style={{
              flex: 1,
              background: "#f3f4f6",
              borderRadius: 5,
              height: 21,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: (d.pct / mx) * 100 + "%",
                background: c,
                borderRadius: 5,
                height: "100%",
                minWidth: d.pct > 0 ? 3 : 0,
              }}
            />
            <span
              style={{
                position: "absolute",
                right: 5,
                top: 3,
                fontSize: 10,
                color: d.pct > mx * 0.5 ? "#fff" : "#6b7280",
                fontWeight: 600,
              }}
            >
              {d.pct}% (n={d.value})
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const TABS = [
  "Overview",
  "Demographics",
  "Mobility",
  "Criteria",
  "Adoption",
  "Segments",
];

export default function Dashboard() {
  const [tab, setTab] = useState("Overview");
  const [fAge, setFAge] = useState("all");
  const [fOcc, setFOcc] = useState("all");
  const [fVeh, setFVeh] = useState("all");
  const [fRes, setFRes] = useState("all");

  const hasFilters =
    fAge !== "all" || fOcc !== "all" || fVeh !== "all" || fRes !== "all";
  const resetAll = () => {
    setFAge("all");
    setFOcc("all");
    setFVeh("all");
    setFRes("all");
  };

  const filtered = DATA.filter((r) => {
    if (fAge !== "all" && r.age !== fAge) return false;
    if (fOcc !== "all" && r.occ !== fOcc) return false;
    if (fVeh === "has_car" && !["car_gas", "car_electric"].includes(r.veh))
      return false;
    if (fVeh === "no_vehicle" && r.veh !== "none") return false;
    if (
      fVeh !== "all" &&
      fVeh !== "has_car" &&
      fVeh !== "no_vehicle" &&
      r.veh !== fVeh
    )
      return false;
    if (fRes !== "all" && r.res !== fRes) return false;
    return true;
  });

  const n = filtered.length;
  const young = filtered.filter((r) => r.age === "18-24" || r.age === "25-34");
  const students = young.filter(
    (r) => r.occ === "student_uni" || r.occ === "student_hs"
  );
  const yProf = young.filter((r) => r.occ === "young_prof");
  const posRate = n
    ? +(
        (filtered.filter(
          (r) => r.intent === "likely" || r.intent === "very_likely"
        ).length /
          n) *
        100
      ).toFixed(1)
    : 0;
  const wtpRate = n
    ? +(
        (filtered.filter((r) => r.wtp === "<2" || r.wtp === "2-3").length / n) *
        100
      ).toFixed(1)
    : 0;

  const intentOrder = [
    "very_likely",
    "likely",
    "possible",
    "unlikely",
    "very_unlikely",
  ];
  const intentData = intentOrder.map((k) => {
    const v = filtered.filter((r) => r.intent === k).length;
    return {
      name: (LB.intent as any)[k],
      value: v,
      pct: n ? +((v / n) * 100).toFixed(1) : 0,
      key: k,
    };
  });

  const criteria = [
    "speed",
    "cost",
    "comfort",
    "flexibility",
    "sustainability",
  ];
  const factorsData = criteria
    .map((c) => ({
      criterion: (LB.factors as any)[c],
      mean: +meanRank(filtered, c).toFixed(2),
    }))
    .sort((a, b) => a.mean - b.mean);

  const radarData = criteria.map((c) => ({
    criterion: (LB.factors as any)[c],
    Students: +(6 - meanRank(students, c)).toFixed(2),
    "Young Prof.": +(6 - meanRank(yProf, c)).toFixed(2),
  }));

  function segPct(seg: any[], fn: (r: any) => boolean) {
    return seg.length
      ? +((seg.filter(fn).length / seg.length) * 100).toFixed(1)
      : "—";
  }

  const segIntentData = intentOrder.map((k) => ({
    name: (LB.intent as any)[k],
    Students: students.length
      ? +(
          (students.filter((r) => r.intent === k).length / students.length) *
          100
        ).toFixed(1)
      : 0,
    "Young Prof.": yProf.length
      ? +(
          (yProf.filter((r) => r.intent === k).length / yProf.length) *
          100
        ).toFixed(1)
      : 0,
  }));

  return (
    <div
      style={{
        fontFamily: FONT,
        background: "#f8f9fa",
        minHeight: "100vh",
        color: "#1f2937",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background:
            "linear-gradient(140deg,#061325 0%,#0c2d48 45%,#145374 100%)",
          padding: "28px 24px 20px",
          borderBottom: "3px solid #2e86ab",
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 9,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#5da9c6",
            }}
          >
            Appendix B · Interactive Survey Results
          </div>
          <h1
            style={{
              fontSize: 21,
              fontWeight: 800,
              color: "#fff",
              margin: "4px 0 0",
            }}
          >
            Urban Mobility Survey — Almería Province
          </h1>
          <p style={{ fontSize: 11.5, color: "#a3d5e0", margin: "3px 0 0" }}>
            n = 57 valid responses · January 2025 · FH Aachen University of
            Applied Sciences
          </p>
        </div>
      </div>

      {/* TABS */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "0 1px 4px rgba(0,0,0,.05)",
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            display: "flex",
            overflowX: "auto",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "11px 18px",
                fontSize: 12,
                fontFamily: FONT,
                fontWeight: tab === t ? 700 : 400,
                color: tab === t ? "#0c2d48" : "#9ca3af",
                background: tab === t ? "#f0f7ff" : "transparent",
                border: "none",
                borderBottom:
                  tab === t ? "2.5px solid #2e86ab" : "2.5px solid transparent",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "14px 12px" }}>
        {/* FILTERS */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: "12px 16px",
            marginBottom: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 11.5, fontWeight: 700, color: "#0c2d48" }}>
              FILTERS{hasFilters && " — " + n + " of 57"}
            </span>
            {hasFilters && (
              <button
                onClick={resetAll}
                style={{
                  fontSize: 10.5,
                  color: "#ef4444",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Reset ✕
              </button>
            )}
          </div>
          <FilterRow
            label="Age"
            options={["18-24", "25-34", "35-44", "45-54", "65+"]}
            value={fAge}
            onChange={setFAge}
            labels={LB.age}
          />
          <FilterRow
            label="Segment"
            options={[
              "student_uni",
              "student_hs",
              "young_prof",
              "adult_prof",
              "unemployed",
              "self_employed",
            ]}
            value={fOcc}
            onChange={setFOcc}
            labels={LB.occ}
          />
          <FilterRow
            label="Vehicle"
            options={[
              "has_car",
              "no_vehicle",
              "bike",
              "scooter",
              "moto_gas",
              "ebike",
            ]}
            value={fVeh}
            onChange={setFVeh}
            labels={{
              has_car: "Car Owner",
              no_vehicle: "No Vehicle",
              ...LB.veh,
            }}
          />
          <FilterRow
            label="Location"
            options={["roquetas", "almeria", "vicar", "nijar", "other"]}
            value={fRes}
            onChange={setFRes}
            labels={LB.res}
          />
        </div>

        {n === 0 && (
          <Section>
            <p style={{ textAlign: "center", color: "#9ca3af", padding: 30 }}>
              No respondents match current filters.
            </p>
          </Section>
        )}

        {/* OVERVIEW */}
        {n > 0 && tab === "Overview" && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(135px,1fr))",
                gap: 10,
                marginBottom: 14,
              }}
            >
              <StatBox value={n} label="Respondents" color="#0c2d48" />
              <StatBox
                value={young.length}
                label="Target 18–34"
                color="#145374"
              />
              <StatBox
                value={students.length}
                label="Students"
                color="#2e86ab"
              />
              <StatBox
                value={yProf.length}
                label="Young Prof."
                color="#27ae60"
              />
              <StatBox
                value={posRate + "%"}
                label="Positive Adoption"
                color="#10b981"
              />
              <StatBox value={wtpRate + "%"} label="WTP ≤ €3" color="#7b2d8e" />
            </div>
            <Section
              title="Adoption Intention Distribution"
              note="5-point Likert scale — intention to use shared electric mobility services."
            >
              <ResponsiveContainer width="100%" height={185}>
                <BarChart
                  data={intentData}
                  layout="vertical"
                  margin={{ left: 82, right: 22 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis
                    type="number"
                    tickFormatter={(v) => v + "%"}
                    style={{ fontSize: 10 }}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={78}
                    style={{ fontSize: 11, fontFamily: FONT }}
                  />
                  <Tooltip />
                  <Bar dataKey="pct" radius={[0, 5, 5, 0]}>
                    {intentData.map((d, i) => (
                      <Cell key={i} fill={(INTENT_COLORS as any)[d.key]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Section>
            <Section
              title="Perceived Mobility Problems"
              note={"Multiple response (n=" + n + ")."}
            >
              <HorizontalBars
                data={countMulti(filtered, "problems")}
                color="#0c2d48"
              />
            </Section>
          </div>
        )}

        {/* DEMOGRAPHICS */}
        {n > 0 && tab === "Demographics" && (
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <Section title="Age Distribution">
              <ResponsiveContainer width="100%" height={195}>
                <PieChart>
                  <Pie
                    data={countSingle(filtered, "age")}
                    cx="50%"
                    cy="50%"
                    outerRadius={72}
                    dataKey="value"
                    label={(e) => e.name + ": " + e.pct + "%"}
                    style={{ fontSize: 10 }}
                  >
                    {countSingle(filtered, "age").map((_, i) => (
                      <Cell key={i} fill={PALETTE[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Section>
            <Section title="Occupation">
              <HorizontalBars
                data={countSingle(filtered, "occ")}
                color="#2e86ab"
              />
            </Section>
            <Section title="Residence">
              <HorizontalBars
                data={countSingle(filtered, "res")}
                color="#27ae60"
              />
            </Section>
            <Section title="Vehicle Ownership">
              <HorizontalBars
                data={countSingle(filtered, "veh")}
                color="#7b2d8e"
              />
            </Section>
          </div>
        )}

        {/* MOBILITY */}
        {n > 0 && tab === "Mobility" && (
          <div>
            <Section title="Travel Purposes" note="Multiple response.">
              <HorizontalBars
                data={countMulti(filtered, "reasons")}
                color="#2e86ab"
              />
            </Section>
            <Section title="Travel Experience">
              <ResponsiveContainer width="100%" height={195}>
                <BarChart
                  data={countSingle(filtered, "exp")}
                  margin={{ left: 5, right: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis
                    dataKey="name"
                    style={{ fontSize: 10, fontFamily: FONT }}
                  />
                  <YAxis
                    tickFormatter={(v) => v + "%"}
                    style={{ fontSize: 10 }}
                  />
                  <Tooltip />
                  <Bar dataKey="pct" fill="#5da9c6" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Section>
            <Section
              title="Barriers to Modal Shift"
              note="Car owners. Multiple response."
            >
              <HorizontalBars
                data={countMulti(filtered, "barriers")}
                color="#e67e22"
              />
            </Section>
          </div>
        )}

        {/* CRITERIA */}
        {n > 0 && tab === "Criteria" && (
          <div>
            <Section
              title="Decision Factor Rankings"
              note="Mean position (1 = most important). Lower = higher priority."
            >
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={factorsData}
                  layout="vertical"
                  margin={{ left: 82, right: 22 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis
                    type="number"
                    domain={[1, 5]}
                    style={{ fontSize: 10 }}
                  />
                  <YAxis
                    type="category"
                    dataKey="criterion"
                    width={78}
                    style={{ fontSize: 11, fontFamily: FONT }}
                  />
                  <Tooltip formatter={(v) => ["Mean: " + v]} />
                  <Bar dataKey="mean" fill="#0c2d48" radius={[0, 5, 5, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Section>
            {students.length >= 2 && yProf.length >= 2 && (
              <Section
                title="Criteria Radar — Students vs Young Professionals"
                note="Higher = greater priority (6 minus mean rank)."
              >
                <ResponsiveContainer width="100%" height={270}>
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    data={radarData}
                  >
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis
                      dataKey="criterion"
                      style={{ fontSize: 10, fontFamily: FONT }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 5]}
                      style={{ fontSize: 9 }}
                    />
                    <Radar
                      name="Students"
                      dataKey="Students"
                      stroke="#2e86ab"
                      fill="#2e86ab"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Young Prof."
                      dataKey="Young Prof."
                      stroke="#27ae60"
                      fill="#27ae60"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                    <Legend wrapperStyle={{ fontSize: 11, fontFamily: FONT }} />
                  </RadarChart>
                </ResponsiveContainer>
              </Section>
            )}
          </div>
        )}

        {/* ADOPTION */}
        {n > 0 && tab === "Adoption" && (
          <div>
            <Section title="Willingness to Pay per 20-min Trip">
              <ResponsiveContainer width="100%" height={195}>
                <BarChart
                  data={countSingle(filtered, "wtp")}
                  margin={{ left: 5, right: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis
                    dataKey="name"
                    style={{ fontSize: 10, fontFamily: FONT }}
                  />
                  <YAxis
                    tickFormatter={(v) => v + "%"}
                    style={{ fontSize: 10 }}
                  />
                  <Tooltip />
                  <Bar dataKey="pct" fill="#7b2d8e" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Section>
            <Section
              title="Most Valued Service Features"
              note="Multiple response."
            >
              <HorizontalBars
                data={countMulti(filtered, "features")}
                color="#27ae60"
              />
            </Section>
          </div>
        )}

        {/* SEGMENTS */}
        {n > 0 && tab === "Segments" && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginBottom: 12,
              }}
            >
              <Section title={"Students (n=" + students.length + ")"}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 6,
                  }}
                >
                  <StatBox
                    value={
                      segPct(students, (r) =>
                        ["car_gas", "car_electric"].includes(r.veh)
                      ) + "%"
                    }
                    label="Car Owner"
                    color="#2e86ab"
                  />
                  <StatBox
                    value={segPct(students, (r) => r.veh === "none") + "%"}
                    label="No Vehicle"
                    color="#2e86ab"
                  />
                  <StatBox
                    value={
                      segPct(
                        students,
                        (r) =>
                          r.intent === "likely" || r.intent === "very_likely"
                      ) + "%"
                    }
                    label="Positive Intent"
                    color="#2e86ab"
                  />
                  <StatBox
                    value={
                      segPct(
                        students,
                        (r) => r.wtp === "<2" || r.wtp === "2-3"
                      ) + "%"
                    }
                    label="WTP ≤ €3"
                    color="#2e86ab"
                  />
                </div>
              </Section>
              <Section title={"Young Professionals (n=" + yProf.length + ")"}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 6,
                  }}
                >
                  <StatBox
                    value={
                      segPct(yProf, (r) =>
                        ["car_gas", "car_electric"].includes(r.veh)
                      ) + "%"
                    }
                    label="Car Owner"
                    color="#27ae60"
                  />
                  <StatBox
                    value={segPct(yProf, (r) => r.veh === "none") + "%"}
                    label="No Vehicle"
                    color="#27ae60"
                  />
                  <StatBox
                    value={
                      segPct(
                        yProf,
                        (r) =>
                          r.intent === "likely" || r.intent === "very_likely"
                      ) + "%"
                    }
                    label="Positive Intent"
                    color="#27ae60"
                  />
                  <StatBox
                    value={
                      segPct(yProf, (r) => r.wtp === "<2" || r.wtp === "2-3") +
                      "%"
                    }
                    label="WTP ≤ €3"
                    color="#27ae60"
                  />
                </div>
              </Section>
            </div>
            {students.length > 0 && yProf.length > 0 && (
              <Section title="Adoption Intention by Segment">
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={segIntentData} margin={{ left: 5, right: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis
                      dataKey="name"
                      style={{ fontSize: 10, fontFamily: FONT }}
                    />
                    <YAxis
                      tickFormatter={(v) => v + "%"}
                      style={{ fontSize: 10 }}
                    />
                    <Tooltip formatter={(v) => v + "%"} />
                    <Bar
                      dataKey="Students"
                      fill="#2e86ab"
                      radius={[5, 5, 0, 0]}
                    />
                    <Bar
                      dataKey="Young Prof."
                      fill="#27ae60"
                      radius={[5, 5, 0, 0]}
                    />
                    <Legend wrapperStyle={{ fontSize: 11, fontFamily: FONT }} />
                  </BarChart>
                </ResponsiveContainer>
              </Section>
            )}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          padding: "12px 24px",
          textAlign: "center",
          color: "#9ca3af",
          fontSize: 10,
          background: "#fff",
        }}
      >
        Source: Primary survey data, January 2025 · n = 57 valid responses · PWA
        survey · Bachelor Thesis — S. Essoubai Chikh, FH Aachen
      </div>
    </div>
  );
}
