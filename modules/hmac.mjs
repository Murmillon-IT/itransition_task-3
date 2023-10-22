'use strict'

import { randomBytes, createHmac as _createHmac } from 'crypto';

// Generation of a 256-bit cryptographically strong key
const getRandomKey = () => randomBytes(32).toString('hex').toUpperCase()
// Creating HMAC using SHA-256
const createHmac = (key, moveComputer) => _createHmac('sha256', key).update(moveComputer).digest('hex').toUpperCase()

export { getRandomKey, createHmac }