function TotalStr() { // Testing order
    var Str = player.Str;
    Str = Str * Blessings(); // Add precent buffs to player raw stats 
    // Maybe negative?
    // Maybe precent negative?
    Str += EquipMent(); // Add raw buffs e.g. +3 str weapon work for negative values to.
}