export function validateNic(): RegExp {
  return /^[0-9]{9}[vVxX]$/;
}

export function validateTel(): RegExp {
  return /^[0-9]{10}$/;
}
