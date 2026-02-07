export interface Employee {
  id: string;
  name: string;
  role: 'cook' | 'manager' | 'admin';
  joinDate: string;
  isActive: boolean;
}

export type Shift = 'AM' | 'PM' | 'Night';

export interface ProductionItem {
  itemId: string;
  name: string;
  quantity: number;
  confidence: number;
}

export interface ProductionEntry {
  id: string;
  employeeId: string;
  employeeName: string;
  shift: Shift;
  items: ProductionItem[];
  timestamp: string;
  imageData?: string;
  totalConfidence: number;
}

export interface WasteItem {
  itemId: string;
  name: string;
  quantity: number;
  cookedByEmployeeId: string;
  cookedByEmployeeName: string;
  confidence: number;
}

export interface WasteEntry {
  id: string;
  items: WasteItem[];
  timestamp: string;
  imageData?: string;
  totalConfidence: number;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: InventoryCategory;
  parLevel: number;
  lastUpdated: string;
}

export type InventoryCategory =
  | 'Breakfast'
  | 'Roller/Hot Case'
  | 'Deli'
  | 'Bakery'
  | 'Branded Pizza'
  | 'Sides'
  | 'Wraps/Specialty'
  | 'Dairy'
  | 'Produce'
  | 'Condiments'
  | 'Beverages'
  | 'Frozen Desserts'
  | 'Bread/Buns';

export interface PerformanceMetrics {
  employeeId: string;
  employeeName: string;
  productionScore: number;
  sellThroughRate: number;
  categoryCoverage: number;
  status: 'good' | 'undercooking' | 'overcooking';
  issues: string[];
}

export interface WeeklySalesData {
  week: string;
  itemId: string;
  itemName: string;
  sold: number;
  cooked: number;
  wasted: number;
}

export interface OrderSuggestion {
  itemId: string;
  itemName: string;
  category: InventoryCategory;
  currentParLevel: number;
  suggestedParLevel: number;
  trend: 'hot' | 'cold' | 'stable';
  percentageChange: number;
  wasteRate?: number;
  priority: 'high' | 'medium' | 'low';
  reason: string;
}

export interface OCRResult {
  items: Array<{
    name: string;
    quantity: number;
    confidence: number;
    alternatives?: string[];
  }>
  rawText: string;
  preprocessedImage?: string;
}

export interface FuzzyMatchResult {
  original: string;
  matched: string;
  similarity: number;
  alternatives: Array<{
    name: string;
    similarity: number;
  }>
}