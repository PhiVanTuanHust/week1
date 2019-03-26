/* @preserve
 * vue-3d-model 1.0.2, 3D models viewer with vue.js
 * Copyright (c) 2018 Jiulong Hu <me@hujiulong.com>
 */
!function ( t, e ) {
    'object' == typeof exports && 'undefined' != typeof module ? e( exports, require( 'vue' ) ) : 'function' == typeof define && define.amd ? define( ['exports', 'vue'], e ) : e( t['vue-3d-model'] = {}, t.Vue )
}( this, function ( t, e ) {
    'use strict';

    function i() {
    }

    e = e && e.hasOwnProperty( 'default' ) ? e.default : e, void 0 === Number.EPSILON && ( Number.EPSILON = Math.pow( 2, -52 ) ), void 0 === Number.isInteger && ( Number.isInteger = function ( t ) {
        return 'number' == typeof t && isFinite( t ) && Math.floor( t ) === t
    } ), void 0 === Math.sign && ( Math.sign = function ( t ) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    } ), 'name' in Function.prototype == !1 && Object.defineProperty( Function.prototype, 'name', {
        get: function () {
            return this.toString().match( /^\s*function\s*([^\(\s]*)/ )[1]
        }
    } ), void 0 === Object.assign && ( Object.assign = function ( t ) {
        if (void 0 === t || null === t) throw new TypeError( 'Cannot convert undefined or null to object' );
        for (var e = Object( t ), i = 1; i < arguments.length; i++) {
            var n = arguments[i];
            if (void 0 !== n && null !== n) for (var r in n) Object.prototype.hasOwnProperty.call( n, r ) && ( e[r] = n[r] )
        }
        return e
    } ), Object.assign( i.prototype, {
        addEventListener: function ( t, e ) {
            void 0 === this._listeners && ( this._listeners = {} );
            var i = this._listeners;
            void 0 === i[t] && ( i[t] = [] ), -1 === i[t].indexOf( e ) && i[t].push( e )
        }, hasEventListener: function ( t, e ) {
            if (void 0 === this._listeners) return !1;
            var i = this._listeners;
            return void 0 !== i[t] && -1 !== i[t].indexOf( e )
        }, removeEventListener: function ( t, e ) {
            if (void 0 !== this._listeners) {
                var i = this._listeners[t];
                if (void 0 !== i) {
                    var n = i.indexOf( e );
                    -1 !== n && i.splice( n, 1 )
                }
            }
        }, dispatchEvent: function ( t ) {
            if (void 0 !== this._listeners) {
                var e = this._listeners[t.type];
                if (void 0 !== e) {
                    t.target = this;
                    for (var i = e.slice( 0 ), n = 0, r = i.length; n < r; n++) i[n].call( this, t )
                }
            }
        }
    } );
    var n, r, a, o, s, c, h, l, u, p, d, f, m = '88', v = 0, g = 1, y = 2, x = 0, b = 1, w = 2, _ = 0, M = 1, E = 2,
        T = 0, S = 1, A = 2, L = 0, R = 1, P = 2, C = 0, N = 1, I = 2, O = 3, U = 4, D = 5, F = 100, z = 101, B = 102,
        k = 103, G = 104, j = 200, H = 201, V = 202, W = 203, X = 204, q = 205, Y = 206, Z = 207, J = 208, K = 209,
        Q = 210, $ = 0, tt = 1, et = 2, it = 3, nt = 4, rt = 5, at = 6, ot = 7, st = 0, ct = 1, ht = 2, lt = 0, ut = 1,
        pt = 2, dt = 3, ft = 4, mt = 301, vt = 302, gt = 303, yt = 304, xt = 305, bt = 306, wt = 307, _t = 1e3,
        Mt = 1001, Et = 1002, Tt = 1003, St = 1004, At = 1005, Lt = 1006, Rt = 1007, Pt = 1008, Ct = 1009, Nt = 1010,
        It = 1011, Ot = 1012, Ut = 1013, Dt = 1014, Ft = 1015, zt = 1016, Bt = 1017, kt = 1018, Gt = 1019, jt = 1020,
        Ht = 1021, Vt = 1022, Wt = 1023, Xt = 1024, qt = 1025, Yt = 1026, Zt = 1027, Jt = 2001, Kt = 2002, Qt = 2003,
        $t = 2004, te = 2100, ee = 2101, ie = 2102, ne = 2103, re = 2151, ae = 2201, oe = 2400, se = 0, ce = 1, he = 2,
        le = 3e3, ue = 3001, pe = 3007, de = 3002, fe = 3004, me = 3005, ve = 3006, ge = 3200, ye = 3201, xe = {
            DEG2RAD: Math.PI / 180,
            RAD2DEG: 180 / Math.PI,
            generateUUID: ( r = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split( '' ), a = 0, function () {
                for (var t = '', e = 0; e < 36; e++) 8 === e || 13 === e || 18 === e || 23 === e ? t += '-' : 14 === e ? t += '4' : ( a <= 2 && ( a = 33554432 + 16777216 * Math.random() | 0 ), n = 15 & a, a >>= 4, t += r[19 === e ? 3 & n | 8 : n] );
                return t
            } ),
            clamp: function ( t, e, i ) {
                return Math.max( e, Math.min( i, t ) )
            },
            euclideanModulo: function ( t, e ) {
                return ( t % e + e ) % e
            },
            mapLinear: function ( t, e, i, n, r ) {
                return n + ( t - e ) * ( r - n ) / ( i - e )
            },
            lerp: function ( t, e, i ) {
                return ( 1 - i ) * t + i * e
            },
            smoothstep: function ( t, e, i ) {
                return t <= e ? 0 : t >= i ? 1 : ( t = ( t - e ) / ( i - e ) ) * t * ( 3 - 2 * t )
            },
            smootherstep: function ( t, e, i ) {
                return t <= e ? 0 : t >= i ? 1 : ( t = ( t - e ) / ( i - e ) ) * t * t * ( t * ( 6 * t - 15 ) + 10 )
            },
            randInt: function ( t, e ) {
                return t + Math.floor( Math.random() * ( e - t + 1 ) )
            },
            randFloat: function ( t, e ) {
                return t + Math.random() * ( e - t )
            },
            randFloatSpread: function ( t ) {
                return t * ( .5 - Math.random() )
            },
            degToRad: function ( t ) {
                return t * xe.DEG2RAD
            },
            radToDeg: function ( t ) {
                return t * xe.RAD2DEG
            },
            isPowerOfTwo: function ( t ) {
                return 0 == ( t & t - 1 ) && 0 !== t
            },
            ceilPowerOfTwo: function ( t ) {
                return Math.pow( 2, Math.ceil( Math.log( t ) / Math.LN2 ) )
            },
            floorPowerOfTwo: function ( t ) {
                return Math.pow( 2, Math.floor( Math.log( t ) / Math.LN2 ) )
            }
        };

    function be( t, e ) {
        this.x = t || 0, this.y = e || 0
    }

    function we() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error( 'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.' )
    }

    function _e( t, e, i, n ) {
        this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
    }

    function Me( t, e, i ) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0
    }

    function Ee() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error( 'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.' )
    }

    Object.defineProperties( be.prototype, {
        width: {
            get: function () {
                return this.x
            }, set: function ( t ) {
                this.x = t
            }
        }, height: {
            get: function () {
                return this.y
            }, set: function ( t ) {
                this.y = t
            }
        }
    } ), Object.assign( be.prototype, {
        isVector2: !0, set: function ( t, e ) {
            return this.x = t, this.y = e, this
        }, setScalar: function ( t ) {
            return this.x = t, this.y = t, this
        }, setX: function ( t ) {
            return this.x = t, this
        }, setY: function ( t ) {
            return this.y = t, this
        }, setComponent: function ( t, e ) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error( 'index is out of range: ' + t )
            }
            return this
        }, getComponent: function ( t ) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error( 'index is out of range: ' + t )
            }
        }, clone: function () {
            return new this.constructor( this.x, this.y )
        }, copy: function ( t ) {
            return this.x = t.x, this.y = t.y, this
        }, add: function ( t, e ) {
            return void 0 !== e ? ( console.warn( 'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' ), this.addVectors( t, e ) ) : ( this.x += t.x, this.y += t.y, this )
        }, addScalar: function ( t ) {
            return this.x += t, this.y += t, this
        }, addVectors: function ( t, e ) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        }, addScaledVector: function ( t, e ) {
            return this.x += t.x * e, this.y += t.y * e, this
        }, sub: function ( t, e ) {
            return void 0 !== e ? ( console.warn( 'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' ), this.subVectors( t, e ) ) : ( this.x -= t.x, this.y -= t.y, this )
        }, subScalar: function ( t ) {
            return this.x -= t, this.y -= t, this
        }, subVectors: function ( t, e ) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        }, multiply: function ( t ) {
            return this.x *= t.x, this.y *= t.y, this
        }, multiplyScalar: function ( t ) {
            return this.x *= t, this.y *= t, this
        }, divide: function ( t ) {
            return this.x /= t.x, this.y /= t.y, this
        }, divideScalar: function ( t ) {
            return this.multiplyScalar( 1 / t )
        }, applyMatrix3: function ( t ) {
            var e = this.x, i = this.y, n = t.elements;
            return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
        }, min: function ( t ) {
            return this.x = Math.min( this.x, t.x ), this.y = Math.min( this.y, t.y ), this
        }, max: function ( t ) {
            return this.x = Math.max( this.x, t.x ), this.y = Math.max( this.y, t.y ), this
        }, clamp: function ( t, e ) {
            return this.x = Math.max( t.x, Math.min( e.x, this.x ) ), this.y = Math.max( t.y, Math.min( e.y, this.y ) ), this
        }, clampScalar: ( o = new be, s = new be, function ( t, e ) {
            return o.set( t, t ), s.set( e, e ), this.clamp( o, s )
        } ), clampLength: function ( t, e ) {
            var i = this.length();
            return this.divideScalar( i || 1 ).multiplyScalar( Math.max( t, Math.min( e, i ) ) )
        }, floor: function () {
            return this.x = Math.floor( this.x ), this.y = Math.floor( this.y ), this
        }, ceil: function () {
            return this.x = Math.ceil( this.x ), this.y = Math.ceil( this.y ), this
        }, round: function () {
            return this.x = Math.round( this.x ), this.y = Math.round( this.y ), this
        }, roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil( this.x ) : Math.floor( this.x ), this.y = this.y < 0 ? Math.ceil( this.y ) : Math.floor( this.y ), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this
        }, dot: function ( t ) {
            return this.x * t.x + this.y * t.y
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y
        }, length: function () {
            return Math.sqrt( this.x * this.x + this.y * this.y )
        }, manhattanLength: function () {
            return Math.abs( this.x ) + Math.abs( this.y )
        }, normalize: function () {
            return this.divideScalar( this.length() || 1 )
        }, angle: function () {
            var t = Math.atan2( this.y, this.x );
            return t < 0 && ( t += 2 * Math.PI ), t
        }, distanceTo: function ( t ) {
            return Math.sqrt( this.distanceToSquared( t ) )
        }, distanceToSquared: function ( t ) {
            var e = this.x - t.x, i = this.y - t.y;
            return e * e + i * i
        }, manhattanDistanceTo: function ( t ) {
            return Math.abs( this.x - t.x ) + Math.abs( this.y - t.y )
        }, setLength: function ( t ) {
            return this.normalize().multiplyScalar( t )
        }, lerp: function ( t, e ) {
            return this.x += ( t.x - this.x ) * e, this.y += ( t.y - this.y ) * e, this
        }, lerpVectors: function ( t, e, i ) {
            return this.subVectors( e, t ).multiplyScalar( i ).add( t )
        }, equals: function ( t ) {
            return t.x === this.x && t.y === this.y
        }, fromArray: function ( t, e ) {
            return void 0 === e && ( e = 0 ), this.x = t[e], this.y = t[e + 1], this
        }, toArray: function ( t, e ) {
            return void 0 === t && ( t = [] ), void 0 === e && ( e = 0 ), t[e] = this.x, t[e + 1] = this.y, t
        }, fromBufferAttribute: function ( t, e, i ) {
            return void 0 !== i && console.warn( 'THREE.Vector2: offset has been removed from .fromBufferAttribute().' ), this.x = t.getX( e ), this.y = t.getY( e ), this
        }, rotateAround: function ( t, e ) {
            var i = Math.cos( e ), n = Math.sin( e ), r = this.x - t.x, a = this.y - t.y;
            return this.x = r * i - a * n + t.x, this.y = r * n + a * i + t.y, this
        }
    } ), Object.assign( we.prototype, {
        isMatrix4: !0, set: function ( t, e, i, n, r, a, o, s, c, h, l, u, p, d, f, m ) {
            var v = this.elements;
            return v[0] = t, v[4] = e, v[8] = i, v[12] = n, v[1] = r, v[5] = a, v[9] = o, v[13] = s, v[2] = c, v[6] = h, v[10] = l, v[14] = u, v[3] = p, v[7] = d, v[11] = f, v[15] = m, this
        }, identity: function () {
            return this.set( 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ), this
        }, clone: function () {
            return ( new we ).fromArray( this.elements )
        }, copy: function ( t ) {
            var e = this.elements, i = t.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
        }, copyPosition: function ( t ) {
            var e = this.elements, i = t.elements;
            return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
        }, extractBasis: function ( t, e, i ) {
            return t.setFromMatrixColumn( this, 0 ), e.setFromMatrixColumn( this, 1 ), i.setFromMatrixColumn( this, 2 ), this
        }, makeBasis: function ( t, e, i ) {
            return this.set( t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1 ), this
        }, extractRotation: ( d = new Me, function ( t ) {
            var e = this.elements, i = t.elements, n = 1 / d.setFromMatrixColumn( t, 0 ).length(),
                r = 1 / d.setFromMatrixColumn( t, 1 ).length(), a = 1 / d.setFromMatrixColumn( t, 2 ).length();
            return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[8] = i[8] * a, e[9] = i[9] * a, e[10] = i[10] * a, this
        } ), makeRotationFromEuler: function ( t ) {
            t && t.isEuler || console.error( 'THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.' );
            var e = this.elements, i = t.x, n = t.y, r = t.z, a = Math.cos( i ), o = Math.sin( i ), s = Math.cos( n ),
                c = Math.sin( n ), h = Math.cos( r ), l = Math.sin( r );
            if ('XYZ' === t.order) {
                var u = a * h, p = a * l, d = o * h, f = o * l;
                e[0] = s * h, e[4] = -s * l, e[8] = c, e[1] = p + d * c, e[5] = u - f * c, e[9] = -o * s, e[2] = f - u * c, e[6] = d + p * c, e[10] = a * s
            } else if ('YXZ' === t.order) {
                var m = s * h, v = s * l, g = c * h, y = c * l;
                e[0] = m + y * o, e[4] = g * o - v, e[8] = a * c, e[1] = a * l, e[5] = a * h, e[9] = -o, e[2] = v * o - g, e[6] = y + m * o, e[10] = a * s
            } else if ('ZXY' === t.order) {
                m = s * h, v = s * l, g = c * h, y = c * l;
                e[0] = m - y * o, e[4] = -a * l, e[8] = g + v * o, e[1] = v + g * o, e[5] = a * h, e[9] = y - m * o, e[2] = -a * c, e[6] = o, e[10] = a * s
            } else if ('ZYX' === t.order) {
                u = a * h, p = a * l, d = o * h, f = o * l;
                e[0] = s * h, e[4] = d * c - p, e[8] = u * c + f, e[1] = s * l, e[5] = f * c + u, e[9] = p * c - d, e[2] = -c, e[6] = o * s, e[10] = a * s
            } else if ('YZX' === t.order) {
                var x = a * s, b = a * c, w = o * s, _ = o * c;
                e[0] = s * h, e[4] = _ - x * l, e[8] = w * l + b, e[1] = l, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = b * l + w, e[10] = x - _ * l
            } else if ('XZY' === t.order) {
                x = a * s, b = a * c, w = o * s, _ = o * c;
                e[0] = s * h, e[4] = -l, e[8] = c * h, e[1] = x * l + _, e[5] = a * h, e[9] = b * l - w, e[2] = w * l - b, e[6] = o * h, e[10] = _ * l + x
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        }, makeRotationFromQuaternion: function ( t ) {
            var e = this.elements, i = t._x, n = t._y, r = t._z, a = t._w, o = i + i, s = n + n, c = r + r, h = i * o,
                l = i * s, u = i * c, p = n * s, d = n * c, f = r * c, m = a * o, v = a * s, g = a * c;
            return e[0] = 1 - ( p + f ), e[4] = l - g, e[8] = u + v, e[1] = l + g, e[5] = 1 - ( h + f ), e[9] = d - m, e[2] = u - v, e[6] = d + m, e[10] = 1 - ( h + p ), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        }, lookAt: ( l = new Me, u = new Me, p = new Me, function ( t, e, i ) {
            var n = this.elements;
            return p.subVectors( t, e ), 0 === p.lengthSq() && ( p.z = 1 ), p.normalize(), l.crossVectors( i, p ), 0 === l.lengthSq() && ( 1 === Math.abs( i.z ) ? p.x += 1e-4 : p.z += 1e-4, p.normalize(), l.crossVectors( i, p ) ), l.normalize(), u.crossVectors( p, l ), n[0] = l.x, n[4] = u.x, n[8] = p.x, n[1] = l.y, n[5] = u.y, n[9] = p.y, n[2] = l.z, n[6] = u.z, n[10] = p.z, this
        } ), multiply: function ( t, e ) {
            return void 0 !== e ? ( console.warn( 'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.' ), this.multiplyMatrices( t, e ) ) : this.multiplyMatrices( this, t )
        }, premultiply: function ( t ) {
            return this.multiplyMatrices( t, this )
        }, multiplyMatrices: function ( t, e ) {
            var i = t.elements, n = e.elements, r = this.elements, a = i[0], o = i[4], s = i[8], c = i[12], h = i[1],
                l = i[5], u = i[9], p = i[13], d = i[2], f = i[6], m = i[10], v = i[14], g = i[3], y = i[7], x = i[11],
                b = i[15], w = n[0], _ = n[4], M = n[8], E = n[12], T = n[1], S = n[5], A = n[9], L = n[13], R = n[2],
                P = n[6], C = n[10], N = n[14], I = n[3], O = n[7], U = n[11], D = n[15];
            return r[0] = a * w + o * T + s * R + c * I, r[4] = a * _ + o * S + s * P + c * O, r[8] = a * M + o * A + s * C + c * U, r[12] = a * E + o * L + s * N + c * D, r[1] = h * w + l * T + u * R + p * I, r[5] = h * _ + l * S + u * P + p * O, r[9] = h * M + l * A + u * C + p * U, r[13] = h * E + l * L + u * N + p * D, r[2] = d * w + f * T + m * R + v * I, r[6] = d * _ + f * S + m * P + v * O, r[10] = d * M + f * A + m * C + v * U, r[14] = d * E + f * L + m * N + v * D, r[3] = g * w + y * T + x * R + b * I, r[7] = g * _ + y * S + x * P + b * O, r[11] = g * M + y * A + x * C + b * U, r[15] = g * E + y * L + x * N + b * D, this
        }, multiplyScalar: function ( t ) {
            var e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        }, applyToBufferAttribute: function () {
            var t = new Me;
            return function ( e ) {
                for (var i = 0, n = e.count; i < n; i++) t.x = e.getX( i ), t.y = e.getY( i ), t.z = e.getZ( i ), t.applyMatrix4( this ), e.setXYZ( i, t.x, t.y, t.z );
                return e
            }
        }(), determinant: function () {
            var t = this.elements, e = t[0], i = t[4], n = t[8], r = t[12], a = t[1], o = t[5], s = t[9], c = t[13],
                h = t[2], l = t[6], u = t[10], p = t[14];
            return t[3] * ( +r * s * l - n * c * l - r * o * u + i * c * u + n * o * p - i * s * p ) + t[7] * ( +e * s * p - e * c * u + r * a * u - n * a * p + n * c * h - r * s * h ) + t[11] * ( +e * c * l - e * o * p - r * a * l + i * a * p + r * o * h - i * c * h ) + t[15] * ( -n * o * h - e * s * l + e * o * u + n * a * l - i * a * u + i * s * h )
        }, transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        }, setPosition: function ( t ) {
            var e = this.elements;
            return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
        }, getInverse: function ( t, e ) {
            var i = this.elements, n = t.elements, r = n[0], a = n[1], o = n[2], s = n[3], c = n[4], h = n[5], l = n[6],
                u = n[7], p = n[8], d = n[9], f = n[10], m = n[11], v = n[12], g = n[13], y = n[14], x = n[15],
                b = d * y * u - g * f * u + g * l * m - h * y * m - d * l * x + h * f * x,
                w = v * f * u - p * y * u - v * l * m + c * y * m + p * l * x - c * f * x,
                _ = p * g * u - v * d * u + v * h * m - c * g * m - p * h * x + c * d * x,
                M = v * d * l - p * g * l - v * h * f + c * g * f + p * h * y - c * d * y,
                E = r * b + a * w + o * _ + s * M;
            if (0 === E) {
                var T = 'THREE.Matrix4: .getInverse() can\'t invert matrix, determinant is 0';
                if (!0 === e) throw new Error( T );
                return console.warn( T ), this.identity()
            }
            var S = 1 / E;
            return i[0] = b * S, i[1] = ( g * f * s - d * y * s - g * o * m + a * y * m + d * o * x - a * f * x ) * S, i[2] = ( h * y * s - g * l * s + g * o * u - a * y * u - h * o * x + a * l * x ) * S, i[3] = ( d * l * s - h * f * s - d * o * u + a * f * u + h * o * m - a * l * m ) * S, i[4] = w * S, i[5] = ( p * y * s - v * f * s + v * o * m - r * y * m - p * o * x + r * f * x ) * S, i[6] = ( v * l * s - c * y * s - v * o * u + r * y * u + c * o * x - r * l * x ) * S, i[7] = ( c * f * s - p * l * s + p * o * u - r * f * u - c * o * m + r * l * m ) * S, i[8] = _ * S, i[9] = ( v * d * s - p * g * s - v * a * m + r * g * m + p * a * x - r * d * x ) * S, i[10] = ( c * g * s - v * h * s + v * a * u - r * g * u - c * a * x + r * h * x ) * S, i[11] = ( p * h * s - c * d * s - p * a * u + r * d * u + c * a * m - r * h * m ) * S, i[12] = M * S, i[13] = ( p * g * o - v * d * o + v * a * f - r * g * f - p * a * y + r * d * y ) * S, i[14] = ( v * h * o - c * g * o - v * a * l + r * g * l + c * a * y - r * h * y ) * S, i[15] = ( c * d * o - p * h * o + p * a * l - r * d * l - c * a * f + r * h * f ) * S, this
        }, scale: function ( t ) {
            var e = this.elements, i = t.x, n = t.y, r = t.z;
            return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this
        }, getMaxScaleOnAxis: function () {
            var t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt( Math.max( e, i, n ) )
        }, makeTranslation: function ( t, e, i ) {
            return this.set( 1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1 ), this
        }, makeRotationX: function ( t ) {
            var e = Math.cos( t ), i = Math.sin( t );
            return this.set( 1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1 ), this
        }, makeRotationY: function ( t ) {
            var e = Math.cos( t ), i = Math.sin( t );
            return this.set( e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1 ), this
        }, makeRotationZ: function ( t ) {
            var e = Math.cos( t ), i = Math.sin( t );
            return this.set( e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ), this
        }, makeRotationAxis: function ( t, e ) {
            var i = Math.cos( e ), n = Math.sin( e ), r = 1 - i, a = t.x, o = t.y, s = t.z, c = r * a, h = r * o;
            return this.set( c * a + i, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + i, h * s - n * a, 0, c * s - n * o, h * s + n * a, r * s * s + i, 0, 0, 0, 0, 1 ), this
        }, makeScale: function ( t, e, i ) {
            return this.set( t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1 ), this
        }, makeShear: function ( t, e, i ) {
            return this.set( 1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1 ), this
        }, compose: function ( t, e, i ) {
            return this.makeRotationFromQuaternion( e ), this.scale( i ), this.setPosition( t ), this
        }, decompose: ( c = new Me, h = new we, function ( t, e, i ) {
            var n = this.elements, r = c.set( n[0], n[1], n[2] ).length(), a = c.set( n[4], n[5], n[6] ).length(),
                o = c.set( n[8], n[9], n[10] ).length();
            this.determinant() < 0 && ( r = -r ), t.x = n[12], t.y = n[13], t.z = n[14], h.copy( this );
            var s = 1 / r, l = 1 / a, u = 1 / o;
            return h.elements[0] *= s, h.elements[1] *= s, h.elements[2] *= s, h.elements[4] *= l, h.elements[5] *= l, h.elements[6] *= l, h.elements[8] *= u, h.elements[9] *= u, h.elements[10] *= u, e.setFromRotationMatrix( h ), i.x = r, i.y = a, i.z = o, this
        } ), makePerspective: function ( t, e, i, n, r, a ) {
            void 0 === a && console.warn( 'THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.' );
            var o = this.elements, s = 2 * r / ( e - t ), c = 2 * r / ( i - n ), h = ( e + t ) / ( e - t ),
                l = ( i + n ) / ( i - n ), u = -( a + r ) / ( a - r ), p = -2 * a * r / ( a - r );
            return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
        }, makeOrthographic: function ( t, e, i, n, r, a ) {
            var o = this.elements, s = 1 / ( e - t ), c = 1 / ( i - n ), h = 1 / ( a - r ), l = ( e + t ) * s,
                u = ( i + n ) * c, p = ( a + r ) * h;
            return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
        }, equals: function ( t ) {
            for (var e = this.elements, i = t.elements, n = 0; n < 16; n++) if (e[n] !== i[n]) return !1;
            return !0
        }, fromArray: function ( t, e ) {
            void 0 === e && ( e = 0 );
            for (var i = 0; i < 16; i++) this.elements[i] = t[i + e];
            return this
        }, toArray: function ( t, e ) {
            void 0 === t && ( t = [] ), void 0 === e && ( e = 0 );
            var i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
        }
    } ), Object.assign( _e, {
        slerp: function ( t, e, i, n ) {
            return i.copy( t ).slerp( e, n )
        }, slerpFlat: function ( t, e, i, n, r, a, o ) {
            var s = i[n + 0], c = i[n + 1], h = i[n + 2], l = i[n + 3], u = r[a + 0], p = r[a + 1], d = r[a + 2],
                f = r[a + 3];
            if (l !== f || s !== u || c !== p || h !== d) {
                var m = 1 - o, v = s * u + c * p + h * d + l * f, g = v >= 0 ? 1 : -1, y = 1 - v * v;
                if (y > Number.EPSILON) {
                    var x = Math.sqrt( y ), b = Math.atan2( x, v * g );
                    m = Math.sin( m * b ) / x, o = Math.sin( o * b ) / x
                }
                var w = o * g;
                if (s = s * m + u * w, c = c * m + p * w, h = h * m + d * w, l = l * m + f * w, m === 1 - o) {
                    var _ = 1 / Math.sqrt( s * s + c * c + h * h + l * l );
                    s *= _, c *= _, h *= _, l *= _
                }
            }
            t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = l
        }
    } ), Object.defineProperties( _e.prototype, {
        x: {
            get: function () {
                return this._x
            }, set: function ( t ) {
                this._x = t, this.onChangeCallback()
            }
        }, y: {
            get: function () {
                return this._y
            }, set: function ( t ) {
                this._y = t, this.onChangeCallback()
            }
        }, z: {
            get: function () {
                return this._z
            }, set: function ( t ) {
                this._z = t, this.onChangeCallback()
            }
        }, w: {
            get: function () {
                return this._w
            }, set: function ( t ) {
                this._w = t, this.onChangeCallback()
            }
        }
    } ), Object.assign( _e.prototype, {
        set: function ( t, e, i, n ) {
            return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this
        }, clone: function () {
            return new this.constructor( this._x, this._y, this._z, this._w )
        }, copy: function ( t ) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
        }, setFromEuler: function ( t, e ) {
            if (!t || !t.isEuler) throw new Error( 'THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.' );
            var i = t._x, n = t._y, r = t._z, a = t.order, o = Math.cos, s = Math.sin, c = o( i / 2 ), h = o( n / 2 ),
                l = o( r / 2 ), u = s( i / 2 ), p = s( n / 2 ), d = s( r / 2 );
            return 'XYZ' === a ? ( this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d ) : 'YXZ' === a ? ( this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d ) : 'ZXY' === a ? ( this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d ) : 'ZYX' === a ? ( this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d ) : 'YZX' === a ? ( this._x = u * h * l + c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l - u * p * d ) : 'XZY' === a && ( this._x = u * h * l - c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l + u * p * d ), !1 !== e && this.onChangeCallback(), this
        }, setFromAxisAngle: function ( t, e ) {
            var i = e / 2, n = Math.sin( i );
            return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos( i ), this.onChangeCallback(), this
        }, setFromRotationMatrix: function ( t ) {
            var e, i = t.elements, n = i[0], r = i[4], a = i[8], o = i[1], s = i[5], c = i[9], h = i[2], l = i[6],
                u = i[10], p = n + s + u;
            return p > 0 ? ( e = .5 / Math.sqrt( p + 1 ), this._w = .25 / e, this._x = ( l - c ) * e, this._y = ( a - h ) * e, this._z = ( o - r ) * e ) : n > s && n > u ? ( e = 2 * Math.sqrt( 1 + n - s - u ), this._w = ( l - c ) / e, this._x = .25 * e, this._y = ( r + o ) / e, this._z = ( a + h ) / e ) : s > u ? ( e = 2 * Math.sqrt( 1 + s - n - u ), this._w = ( a - h ) / e, this._x = ( r + o ) / e, this._y = .25 * e, this._z = ( c + l ) / e ) : ( e = 2 * Math.sqrt( 1 + u - n - s ), this._w = ( o - r ) / e, this._x = ( a + h ) / e, this._y = ( c + l ) / e, this._z = .25 * e ), this.onChangeCallback(), this
        }, setFromUnitVectors: function () {
            var t, e = new Me;
            return function ( i, n ) {
                return void 0 === e && ( e = new Me ), ( t = i.dot( n ) + 1 ) < 1e-6 ? ( t = 0, Math.abs( i.x ) > Math.abs( i.z ) ? e.set( -i.y, i.x, 0 ) : e.set( 0, -i.z, i.y ) ) : e.crossVectors( i, n ), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
            }
        }(), inverse: function () {
            return this.conjugate().normalize()
        }, conjugate: function () {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        }, dot: function ( t ) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        }, lengthSq: function () {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        }, length: function () {
            return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w )
        }, normalize: function () {
            var t = this.length();
            return 0 === t ? ( this._x = 0, this._y = 0, this._z = 0, this._w = 1 ) : ( t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t ), this.onChangeCallback(), this
        }, multiply: function ( t, e ) {
            return void 0 !== e ? ( console.warn( 'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.' ), this.multiplyQuaternions( t, e ) ) : this.multiplyQuaternions( this, t )
        }, premultiply: function ( t ) {
            return this.multiplyQuaternions( t, this )
        }, multiplyQuaternions: function ( t, e ) {
            var i = t._x, n = t._y, r = t._z, a = t._w, o = e._x, s = e._y, c = e._z, h = e._w;
            return this._x = i * h + a * o + n * c - r * s, this._y = n * h + a * s + r * o - i * c, this._z = r * h + a * c + i * s - n * o, this._w = a * h - i * o - n * s - r * c, this.onChangeCallback(), this
        }, slerp: function ( t, e ) {
            if (0 === e) return this;
            if (1 === e) return this.copy( t );
            var i = this._x, n = this._y, r = this._z, a = this._w, o = a * t._w + i * t._x + n * t._y + r * t._z;
            if (o < 0 ? ( this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o ) : this.copy( t ), o >= 1) return this._w = a, this._x = i, this._y = n, this._z = r, this;
            var s = Math.sqrt( 1 - o * o );
            if (Math.abs( s ) < .001) return this._w = .5 * ( a + this._w ), this._x = .5 * ( i + this._x ), this._y = .5 * ( n + this._y ), this._z = .5 * ( r + this._z ), this;
            var c = Math.atan2( s, o ), h = Math.sin( ( 1 - e ) * c ) / s, l = Math.sin( e * c ) / s;
            return this._w = a * h + this._w * l, this._x = i * h + this._x * l, this._y = n * h + this._y * l, this._z = r * h + this._z * l, this.onChangeCallback(), this
        }, equals: function ( t ) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        }, fromArray: function ( t, e ) {
            return void 0 === e && ( e = 0 ), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
        }, toArray: function ( t, e ) {
            return void 0 === t && ( t = [] ), void 0 === e && ( e = 0 ), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
        }, onChange: function ( t ) {
            return this.onChangeCallback = t, this
        }, onChangeCallback: function () {
        }
    } ), Object.assign( Me.prototype, {
        isVector3: !0, set: function ( t, e, i ) {
            return this.x = t, this.y = e, this.z = i, this
        }, setScalar: function ( t ) {
            return this.x = t, this.y = t, this.z = t, this
        }, setX: function ( t ) {
            return this.x = t, this
        }, setY: function ( t ) {
            return this.y = t, this
        }, setZ: function ( t ) {
            return this.z = t, this
        }, setComponent: function ( t, e ) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error( 'index is out of range: ' + t )
            }
            return this
        }, getComponent: function ( t ) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error( 'index is out of range: ' + t )
            }
        }, clone: function () {
            return new this.constructor( this.x, this.y, this.z )
        }, copy: function ( t ) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        }, add: function ( t, e ) {
            return void 0 !== e ? ( console.warn( 'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' ), this.addVectors( t, e ) ) : ( this.x += t.x, this.y += t.y, this.z += t.z, this )
        }, addScalar: function ( t ) {
            return this.x += t, this.y += t, this.z += t, this
        }, addVectors: function ( t, e ) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
        }, addScaledVector: function ( t, e ) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
        }, sub: function ( t, e ) {
            return void 0 !== e ? ( console.warn( 'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' ), this.subVectors( t, e ) ) : ( this.x -= t.x, this.y -= t.y, this.z -= t.z, this )
        }, subScalar: function ( t ) {
            return this.x -= t, this.y -= t, this.z -= t, this
        }, subVectors: function ( t, e ) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
        }, multiply: function ( t, e ) {
            return void 0 !== e ? ( console.warn( 'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.' ), this.multiplyVectors( t, e ) ) : ( this.x *= t.x, this.y *= t.y, this.z *= t.z, this )
        }, multiplyScalar: function ( t ) {
            return this.x *= t, this.y *= t, this.z *= t, this
        }, multiplyVectors: function ( t, e ) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
        }, applyEuler: ( f = new _e, function ( t ) {
            return t && t.isEuler || console.error( 'THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.' ), this.applyQuaternion( f.setFromEuler( t ) )
        } ), applyAxisAngle: function () {
            var t = new _e;
            return function ( e, i ) {
                return this.applyQuaternion( t.setFromAxisAngle( e, i ) )
            }
        }(), applyMatrix3: function ( t ) {
            var e = this.x, i = this.y, n = this.z, r = t.elements;
            return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
        }, applyMatrix4: function ( t ) {
            var e = this.x, i = this.y, n = this.z, r = t.elements, a = 1 / ( r[3] * e + r[7] * i + r[11] * n + r[15] );
            return this.x = ( r[0] * e + r[4] * i + r[8] * n + r[12] ) * a, this.y = ( r[1] * e + r[5] * i + r[9] * n + r[13] ) * a, this.z = ( r[2] * e + r[6] * i + r[10] * n + r[14] ) * a, this
        }, applyQuaternion: function ( t ) {
            var e = this.x, i = this.y, n = this.z, r = t.x, a = t.y, o = t.z, s = t.w, c = s * e + a * n - o * i,
                h = s * i + o * e - r * n, l = s * n + r * i - a * e, u = -r * e - a * i - o * n;
            return this.x = c * s + u * -r + h * -o - l * -a, this.y = h * s + u * -a + l * -r - c * -o, this.z = l * s + u * -o + c * -a - h * -r, this
        }, project: function () {
            var t = new we;
            return function ( e ) {
                return t.multiplyMatrices( e.projectionMatrix, t.getInverse( e.matrixWorld ) ), this.applyMatrix4( t )
            }
        }(), unproject: function () {
            var t = new we;
            return function ( e ) {
                return t.multiplyMatrices( e.matrixWorld, t.getInverse( e.projectionMatrix ) ), this.applyMatrix4( t )
            }
        }(), transformDirection: function ( t ) {
            var e = this.x, i = this.y, n = this.z, r = t.elements;
            return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
        }, divide: function ( t ) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
        }, divideScalar: function ( t ) {
            return this.multiplyScalar( 1 / t )
        }, min: function ( t ) {
            return this.x = Math.min( this.x, t.x ), this.y = Math.min( this.y, t.y ), this.z = Math.min( this.z, t.z ), this
        }, max: function ( t ) {
            return this.x = Math.max( this.x, t.x ), this.y = Math.max( this.y, t.y ), this.z = Math.max( this.z, t.z ), this
        }, clamp: function ( t, e ) {
            return this.x = Math.max( t.x, Math.min( e.x, this.x ) ), this.y = Math.max( t.y, Math.min( e.y, this.y ) ), this.z = Math.max( t.z, Math.min( e.z, this.z ) ), this
        }, clampScalar: function () {
            var t = new Me, e = new Me;
            return function ( i, n ) {
                return t.set( i, i, i ), e.set( n, n, n ), this.clamp( t, e )
            }
        }(), clampLength: function ( t, e ) {
            var i = this.length();
            return this.divideScalar( i || 1 ).multiplyScalar( Math.max( t, Math.min( e, i ) ) )
        }, floor: function () {
            return this.x = Math.floor( this.x ), this.y = Math.floor( this.y ), this.z = Math.floor( this.z ), this
        }, ceil: function () {
            return this.x = Math.ceil( this.x ), this.y = Math.ceil( this.y ), this.z = Math.ceil( this.z ), this
        }, round: function () {
            return this.x = Math.round( this.x ), this.y = Math.round( this.y ), this.z = Math.round( this.z ), this
        }, roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil( this.x ) : Math.floor( this.x ), this.y = this.y < 0 ? Math.ceil( this.y ) : Math.floor( this.y ), this.z = this.z < 0 ? Math.ceil( this.z ) : Math.floor( this.z ), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }, dot: function ( t ) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }, length: function () {
            return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z )
        }, manhattanLength: function () {
            return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z )
        }, normalize: function () {
            return this.divideScalar( this.length() || 1 )
        }, setLength: function ( t ) {
            return this.normalize().multiplyScalar( t )
        }, lerp: function ( t, e ) {
            return this.x += ( t.x - this.x ) * e, this.y += ( t.y - this.y ) * e, this.z += ( t.z - this.z ) * e, this
        }, lerpVectors: function ( t, e, i ) {
            return this.subVectors( e, t ).multiplyScalar( i ).add( t )
        }, cross: function ( t, e ) {
            return void 0 !== e ? ( console.warn( 'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.' ), this.crossVectors( t, e ) ) : this.crossVectors( this, t )
        }, crossVectors: function ( t, e ) {
            var i = t.x, n = t.y, r = t.z, a = e.x, o = e.y, s = e.z;
            return this.x = n * s - r * o, this.y = r * a - i * s, this.z = i * o - n * a, this
        }, projectOnVector: function ( t ) {
            var e = t.dot( this ) / t.lengthSq();
            return this.copy( t ).multiplyScalar( e )
        }, projectOnPlane: function () {
            var t = new Me;
            return function ( e ) {
                return t.copy( this ).projectOnVector( e ), this.sub( t )
            }
        }(), reflect: function () {
            var t = new Me;
            return function ( e ) {
                return this.sub( t.copy( e ).multiplyScalar( 2 * this.dot( e ) ) )
            }
        }(), angleTo: function ( t ) {
            var e = this.dot( t ) / Math.sqrt( this.lengthSq() * t.lengthSq() );
            return Math.acos( xe.clamp( e, -1, 1 ) )
        }, distanceTo: function ( t ) {
            return Math.sqrt( this.distanceToSquared( t ) )
        }, distanceToSquared: function ( t ) {
            var e = this.x - t.x, i = this.y - t.y, n = this.z - t.z;
            return e * e + i * i + n * n
        }, manhattanDistanceTo: function ( t ) {
            return Math.abs( this.x - t.x ) + Math.abs( this.y - t.y ) + Math.abs( this.z - t.z )
        }, setFromSpherical: function ( t ) {
            var e = Math.sin( t.phi ) * t.radius;
            return this.x = e * Math.sin( t.theta ), this.y = Math.cos( t.phi ) * t.radius, this.z = e * Math.cos( t.theta ), this
        }, setFromCylindrical: function ( t ) {
            return this.x = t.radius * Math.sin( t.theta ), this.y = t.y, this.z = t.radius * Math.cos( t.theta ), this
        }, setFromMatrixPosition: function ( t ) {
            var e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this
        }, setFromMatrixScale: function ( t ) {
            var e = this.setFromMatrixColumn( t, 0 ).length(), i = this.setFromMatrixColumn( t, 1 ).length(),
                n = this.setFromMatrixColumn( t, 2 ).length();
            return this.x = e, this.y = i, this.z = n, this
        }, setFromMatrixColumn: function ( t, e ) {
            return this.fromArray( t.elements, 4 * e )
        }, equals: function ( t ) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        }, fromArray: function ( t, e ) {
            return void 0 === e && ( e = 0 ), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
        }, toArray: function ( t, e ) {
            return void 0 === t && ( t = [] ), void 0 === e && ( e = 0 ), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
        }, fromBufferAttribute: function ( t, e, i ) {
            return void 0 !== i && console.warn( 'THREE.Vector3: offset has been removed from .fromBufferAttribute().' ), this.x = t.getX( e ), this.y = t.getY( e ), this.z = t.getZ( e ), this
        }
    } ), Object.assign( Ee.prototype, {
        isMatrix3: !0, set: function ( t, e, i, n, r, a, o, s, c ) {
            var h = this.elements;
            return h[0] = t, h[1] = n, h[2] = o, h[3] = e, h[4] = r, h[5] = s, h[6] = i, h[7] = a, h[8] = c, this
        }, identity: function () {
            return this.set( 1, 0, 0, 0, 1, 0, 0, 0, 1 ), this
        }, clone: function () {
            return ( new this.constructor ).fromArray( this.elements )
        }, copy: function ( t ) {
            var e = this.elements, i = t.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
        }, setFromMatrix4: function ( t ) {
            var e = t.elements;
            return this.set( e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10] ), this
        }, applyToBufferAttribute: function () {
            var t = new Me;
            return function ( e ) {
                for (var i = 0, n = e.count; i < n; i++) t.x = e.getX( i ), t.y = e.getY( i ), t.z = e.getZ( i ), t.applyMatrix3( this ), e.setXYZ( i, t.x, t.y, t.z );
                return e
            }
        }(), multiply: function ( t ) {
            return this.multiplyMatrices( this, t )
        }, premultiply: function ( t ) {
            return this.multiplyMatrices( t, this )
        }, multiplyMatrices: function ( t, e ) {
            var i = t.elements, n = e.elements, r = this.elements, a = i[0], o = i[3], s = i[6], c = i[1], h = i[4],
                l = i[7], u = i[2], p = i[5], d = i[8], f = n[0], m = n[3], v = n[6], g = n[1], y = n[4], x = n[7],
                b = n[2], w = n[5], _ = n[8];
            return r[0] = a * f + o * g + s * b, r[3] = a * m + o * y + s * w, r[6] = a * v + o * x + s * _, r[1] = c * f + h * g + l * b, r[4] = c * m + h * y + l * w, r[7] = c * v + h * x + l * _, r[2] = u * f + p * g + d * b, r[5] = u * m + p * y + d * w, r[8] = u * v + p * x + d * _, this
        }, multiplyScalar: function ( t ) {
            var e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        }, determinant: function () {
            var t = this.elements, e = t[0], i = t[1], n = t[2], r = t[3], a = t[4], o = t[5], s = t[6], c = t[7],
                h = t[8];
            return e * a * h - e * o * c - i * r * h + i * o * s + n * r * c - n * a * s
        }, getInverse: function ( t, e ) {
            t && t.isMatrix4 && console.error( 'THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.' );
            var i = t.elements, n = this.elements, r = i[0], a = i[1], o = i[2], s = i[3], c = i[4], h = i[5], l = i[6],
                u = i[7], p = i[8], d = p * c - h * u, f = h * l - p * s, m = u * s - c * l, v = r * d + a * f + o * m;
            if (0 === v) {
                var g = 'THREE.Matrix3: .getInverse() can\'t invert matrix, determinant is 0';
                if (!0 === e) throw new Error( g );
                return console.warn( g ), this.identity()
            }
            var y = 1 / v;
            return n[0] = d * y, n[1] = ( o * u - p * a ) * y, n[2] = ( h * a - o * c ) * y, n[3] = f * y, n[4] = ( p * r - o * l ) * y, n[5] = ( o * s - h * r ) * y, n[6] = m * y, n[7] = ( a * l - u * r ) * y, n[8] = ( c * r - a * s ) * y, this
        }, transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
        }, getNormalMatrix: function ( t ) {
            return this.setFromMatrix4( t ).getInverse( this ).transpose()
        }, transposeIntoArray: function ( t ) {
            var e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
        }, setUvTransform: function ( t, e, i, n, r, a, o ) {
            var s = Math.cos( r ), c = Math.sin( r );
            this.set( i * s, i * c, -i * ( s * a + c * o ) + a + t, -n * c, n * s, -n * ( -c * a + s * o ) + o + e, 0, 0, 1 )
        }, scale: function ( t, e ) {
            var i = this.elements;
            return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
        }, rotate: function ( t ) {
            var e = Math.cos( t ), i = Math.sin( t ), n = this.elements, r = n[0], a = n[3], o = n[6], s = n[1],
                c = n[4], h = n[7];
            return n[0] = e * r + i * s, n[3] = e * a + i * c, n[6] = e * o + i * h, n[1] = -i * r + e * s, n[4] = -i * a + e * c, n[7] = -i * o + e * h, this
        }, translate: function ( t, e ) {
            var i = this.elements;
            return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
        }, equals: function ( t ) {
            for (var e = this.elements, i = t.elements, n = 0; n < 9; n++) if (e[n] !== i[n]) return !1;
            return !0
        }, fromArray: function ( t, e ) {
            void 0 === e && ( e = 0 );
            for (var i = 0; i < 9; i++) this.elements[i] = t[i + e];
            return this
        }, toArray: function ( t, e ) {
            void 0 === t && ( t = [] ), void 0 === e && ( e = 0 );
            var i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
        }
    } );
    var Te = 0;

    function Se( t, e, i, n, r, a, o, s, c, h ) {
        Object.defineProperty( this, 'id', { value: Te++ } ), this.uuid = xe.generateUUID(), this.name = '', this.image = void 0 !== t ? t : Se.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : Se.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : Mt, this.wrapT = void 0 !== n ? n : Mt, this.magFilter = void 0 !== r ? r : Lt, this.minFilter = void 0 !== a ? a : Pt, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : Wt, this.type = void 0 !== s ? s : Ct, this.offset = new be( 0, 0 ), this.repeat = new be( 1, 1 ), this.center = new be( 0, 0 ), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ee, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : le, this.version = 0, this.onUpdate = null
    }

    function Ae( t, e, i, n ) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
    }

    function Le( t, e, i ) {
        this.uuid = xe.generateUUID(), this.width = t, this.height = e, this.scissor = new Ae( 0, 0, t, e ), this.scissorTest = !1, this.viewport = new Ae( 0, 0, t, e ), void 0 === ( i = i || {} ).minFilter && ( i.minFilter = Lt ), this.texture = new Se( void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding ), this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
    }

    function Re( t, e, i ) {
        Le.call( this, t, e, i ), this.activeCubeFace = 0, this.activeMipMapLevel = 0
    }

    function Pe( t, e, i, n, r, a, o, s, c, h, l, u ) {
        Se.call( this, null, a, o, s, c, h, n, r, l, u ), this.image = {
            data: t,
            width: e,
            height: i
        }, this.magFilter = void 0 !== c ? c : Tt, this.minFilter = void 0 !== h ? h : Tt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }

    function Ce( t, e, i, n, r, a, o, s, c, h ) {
        t = void 0 !== t ? t : [], e = void 0 !== e ? e : mt, Se.call( this, t, e, i, n, r, a, o, s, c, h ), this.flipY = !1
    }

    Se.DEFAULT_IMAGE = void 0, Se.DEFAULT_MAPPING = 300, Object.defineProperty( Se.prototype, 'needsUpdate', {
        set: function ( t ) {
            !0 === t && this.version++
        }
    } ), Object.assign( Se.prototype, i.prototype, {
        constructor: Se, isTexture: !0, clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice( 0 ), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy( t.offset ), this.repeat.copy( t.repeat ), this.center.copy( t.center ), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy( t.matrix ), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
        }, toJSON: function ( t ) {
            var e = void 0 === t || 'string' == typeof t;
            if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            var i = {
                metadata: { version: 4.5, type: 'Texture', generator: 'Texture.toJSON' },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var n = this.image;
                void 0 === n.uuid && ( n.uuid = xe.generateUUID() ), e || void 0 !== t.images[n.uuid] || ( t.images[n.uuid] = {
                    uuid: n.uuid,
                    url: function ( t ) {
                        var e;
                        if (t instanceof HTMLCanvasElement) {
                            e = t;
                        } else {
                            ( e = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' ) ).width = t.width, e.height = t.height;
                            var i = e.getContext( '2d' );
                            t instanceof ImageData ? i.putImageData( t, 0, 0 ) : i.drawImage( t, 0, 0, t.width, t.height )
                        }
                        return e.width > 2048 || e.height > 2048 ? e.toDataURL( 'image/jpeg', .6 ) : e.toDataURL( 'image/png' )
                    }( n )
                } ), i.image = n.uuid
            }
            return e || ( t.textures[this.uuid] = i ), i
        }, dispose: function () {
            this.dispatchEvent( { type: 'dispose' } )
        }, transformUv: function ( t ) {
            if (300 === this.mapping) {
                if (t.applyMatrix3( this.matrix ), t.x < 0 || t.x > 1) {
                    switch (this.wrapS) {
                        case _t:
                            t.x = t.x - Math.floor( t.x );
                            break;
                        case Mt:
                            t.x = t.x < 0 ? 0 : 1;
                            break;
                        case Et:
                            1 === Math.abs( Math.floor( t.x ) % 2 ) ? t.x = Math.ceil( t.x ) - t.x : t.x = t.x - Math.floor( t.x )
                    }
                }
                if (t.y < 0 || t.y > 1) {
                    switch (this.wrapT) {
                        case _t:
                            t.y = t.y - Math.floor( t.y );
                            break;
                        case Mt:
                            t.y = t.y < 0 ? 0 : 1;
                            break;
                        case Et:
                            1 === Math.abs( Math.floor( t.y ) % 2 ) ? t.y = Math.ceil( t.y ) - t.y : t.y = t.y - Math.floor( t.y )
                    }
                }
                this.flipY && ( t.y = 1 - t.y )
            }
        }
    } ), Object.assign( Ae.prototype, {
        isVector4: !0, set: function ( t, e, i, n ) {
            return this.x = t, this.y = e, this.z = i, this.w = n, this
        }, setScalar: function ( t ) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this
        }, setX: function ( t ) {
            return this.x = t, this
        }, setY: function ( t ) {
            return this.y = t, this
        }, setZ: function ( t ) {
            return this.z = t, this
        }, setW: function ( t ) {
            return this.w = t, this
        }, setComponent: function ( t, e ) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error( 'index is out of range: ' + t )
            }
            return this
        }, getComponent: function ( t ) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error( 'index is out of range: ' + t )
            }
        }, clone: function () {
            return new this.constructor( this.x, this.y, this.z, this.w )
        }, copy: function ( t ) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
        }, add: function ( t, e ) {
            return void 0 !== e ? ( console.warn( 'THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' ), this.addVectors( t, e ) ) : ( this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this )
        }, addScalar: function ( t ) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this
        }, addVectors: function ( t, e ) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
        }, addScaledVector: function ( t, e ) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
        }, sub: function ( t, e ) {
            return void 0 !== e ? ( console.warn( 'THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' ), this.subVectors( t, e ) ) : ( this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this )
        }, subScalar: function ( t ) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
        }, subVectors: function ( t, e ) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
        }, multiplyScalar: function ( t ) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
        }, applyMatrix4: function ( t ) {
            var e = this.x, i = this.y, n = this.z, r = this.w, a = t.elements;
            return this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * e + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * e + a[7] * i + a[11] * n + a[15] * r, this
        }, divideScalar: function ( t ) {
            return this.multiplyScalar( 1 / t )
        }, setAxisAngleFromQuaternion: function ( t ) {
            this.w = 2 * Math.acos( t.w );
            var e = Math.sqrt( 1 - t.w * t.w );
            return e < 1e-4 ? ( this.x = 1, this.y = 0, this.z = 0 ) : ( this.x = t.x / e, this.y = t.y / e, this.z = t.z / e ), this
        }, setAxisAngleFromRotationMatrix: function ( t ) {
            var e, i, n, r, a = t.elements, o = a[0], s = a[4], c = a[8], h = a[1], l = a[5], u = a[9], p = a[2],
                d = a[6], f = a[10];
            if (Math.abs( s - h ) < .01 && Math.abs( c - p ) < .01 && Math.abs( u - d ) < .01) {
                if (Math.abs( s + h ) < .1 && Math.abs( c + p ) < .1 && Math.abs( u + d ) < .1 && Math.abs( o + l + f - 3 ) < .1) return this.set( 1, 0, 0, 0 ), this;
                e = Math.PI;
                var m = ( o + 1 ) / 2, v = ( l + 1 ) / 2, g = ( f + 1 ) / 2, y = ( s + h ) / 4, x = ( c + p ) / 4,
                    b = ( u + d ) / 4;
                return m > v && m > g ? m < .01 ? ( i = 0, n = .707106781, r = .707106781 ) : ( n = y / ( i = Math.sqrt( m ) ), r = x / i ) : v > g ? v < .01 ? ( i = .707106781, n = 0, r = .707106781 ) : ( i = y / ( n = Math.sqrt( v ) ), r = b / n ) : g < .01 ? ( i = .707106781, n = .707106781, r = 0 ) : ( i = x / ( r = Math.sqrt( g ) ), n = b / r ), this.set( i, n, r, e ), this
            }
            var w = Math.sqrt( ( d - u ) * ( d - u ) + ( c - p ) * ( c - p ) + ( h - s ) * ( h - s ) );
            return Math.abs( w ) < .001 && ( w = 1 ), this.x = ( d - u ) / w, this.y = ( c - p ) / w, this.z = ( h - s ) / w, this.w = Math.acos( ( o + l + f - 1 ) / 2 ), this
        }, min: function ( t ) {
            return this.x = Math.min( this.x, t.x ), this.y = Math.min( this.y, t.y ), this.z = Math.min( this.z, t.z ), this.w = Math.min( this.w, t.w ), this
        }, max: function ( t ) {
            return this.x = Math.max( this.x, t.x ), this.y = Math.max( this.y, t.y ), this.z = Math.max( this.z, t.z ), this.w = Math.max( this.w, t.w ), this
        }, clamp: function ( t, e ) {
            return this.x = Math.max( t.x, Math.min( e.x, this.x ) ), this.y = Math.max( t.y, Math.min( e.y, this.y ) ), this.z = Math.max( t.z, Math.min( e.z, this.z ) ), this.w = Math.max( t.w, Math.min( e.w, this.w ) ), this
        }, clampScalar: function () {
            var t, e;
            return function ( i, n ) {
                return void 0 === t && ( t = new Ae, e = new Ae ), t.set( i, i, i, i ), e.set( n, n, n, n ), this.clamp( t, e )
            }
        }(), clampLength: function ( t, e ) {
            var i = this.length();
            return this.divideScalar( i || 1 ).multiplyScalar( Math.max( t, Math.min( e, i ) ) )
        }, floor: function () {
            return this.x = Math.floor( this.x ), this.y = Math.floor( this.y ), this.z = Math.floor( this.z ), this.w = Math.floor( this.w ), this
        }, ceil: function () {
            return this.x = Math.ceil( this.x ), this.y = Math.ceil( this.y ), this.z = Math.ceil( this.z ), this.w = Math.ceil( this.w ), this
        }, round: function () {
            return this.x = Math.round( this.x ), this.y = Math.round( this.y ), this.z = Math.round( this.z ), this.w = Math.round( this.w ), this
        }, roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil( this.x ) : Math.floor( this.x ), this.y = this.y < 0 ? Math.ceil( this.y ) : Math.floor( this.y ), this.z = this.z < 0 ? Math.ceil( this.z ) : Math.floor( this.z ), this.w = this.w < 0 ? Math.ceil( this.w ) : Math.floor( this.w ), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        }, dot: function ( t ) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }, length: function () {
            return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w )
        }, manhattanLength: function () {
            return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z ) + Math.abs( this.w )
        }, normalize: function () {
            return this.divideScalar( this.length() || 1 )
        }, setLength: function ( t ) {
            return this.normalize().multiplyScalar( t )
        }, lerp: function ( t, e ) {
            return this.x += ( t.x - this.x ) * e, this.y += ( t.y - this.y ) * e, this.z += ( t.z - this.z ) * e, this.w += ( t.w - this.w ) * e, this
        }, lerpVectors: function ( t, e, i ) {
            return this.subVectors( e, t ).multiplyScalar( i ).add( t )
        }, equals: function ( t ) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        }, fromArray: function ( t, e ) {
            return void 0 === e && ( e = 0 ), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
        }, toArray: function ( t, e ) {
            return void 0 === t && ( t = [] ), void 0 === e && ( e = 0 ), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
        }, fromBufferAttribute: function ( t, e, i ) {
            return void 0 !== i && console.warn( 'THREE.Vector4: offset has been removed from .fromBufferAttribute().' ), this.x = t.getX( e ), this.y = t.getY( e ), this.z = t.getZ( e ), this.w = t.getW( e ), this
        }
    } ), Object.assign( Le.prototype, i.prototype, {
        isWebGLRenderTarget: !0, setSize: function ( t, e ) {
            this.width === t && this.height === e || ( this.width = t, this.height = e, this.dispose() ), this.viewport.set( 0, 0, t, e ), this.scissor.set( 0, 0, t, e )
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.width = t.width, this.height = t.height, this.viewport.copy( t.viewport ), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
        }, dispose: function () {
            this.dispatchEvent( { type: 'dispose' } )
        }
    } ), Re.prototype = Object.create( Le.prototype ), Re.prototype.constructor = Re, Re.prototype.isWebGLRenderTargetCube = !0, Pe.prototype = Object.create( Se.prototype ), Pe.prototype.constructor = Pe, Pe.prototype.isDataTexture = !0, Ce.prototype = Object.create( Se.prototype ), Ce.prototype.constructor = Ce, Ce.prototype.isCubeTexture = !0, Object.defineProperty( Ce.prototype, 'images', {
        get: function () {
            return this.image
        }, set: function ( t ) {
            this.image = t
        }
    } );
    var Ne = new Se, Ie = new Ce;

    function Oe() {
        this.seq = [], this.map = {}
    }

    var Ue = [], De = [], Fe = new Float32Array( 16 ), ze = new Float32Array( 9 );

    function Be( t, e, i ) {
        var n = t[0];
        if (n <= 0 || n > 0) return t;
        var r = e * i, a = Ue[r];
        if (void 0 === a && ( a = new Float32Array( r ), Ue[r] = a ), 0 !== e) {
            n.toArray( a, 0 );
            for (var o = 1, s = 0; o !== e; ++o) s += i, t[o].toArray( a, s )
        }
        return a
    }

    function ke( t, e ) {
        var i = De[e];
        void 0 === i && ( i = new Int32Array( e ), De[e] = i );
        for (var n = 0; n !== e; ++n) i[n] = t.allocTextureUnit();
        return i
    }

    function Ge( t, e ) {
        t.uniform1f( this.addr, e )
    }

    function je( t, e ) {
        t.uniform1i( this.addr, e )
    }

    function He( t, e ) {
        void 0 === e.x ? t.uniform2fv( this.addr, e ) : t.uniform2f( this.addr, e.x, e.y )
    }

    function Ve( t, e ) {
        void 0 !== e.x ? t.uniform3f( this.addr, e.x, e.y, e.z ) : void 0 !== e.r ? t.uniform3f( this.addr, e.r, e.g, e.b ) : t.uniform3fv( this.addr, e )
    }

    function We( t, e ) {
        void 0 === e.x ? t.uniform4fv( this.addr, e ) : t.uniform4f( this.addr, e.x, e.y, e.z, e.w )
    }

    function Xe( t, e ) {
        t.uniformMatrix2fv( this.addr, !1, e.elements || e )
    }

    function qe( t, e ) {
        void 0 === e.elements ? t.uniformMatrix3fv( this.addr, !1, e ) : ( ze.set( e.elements ), t.uniformMatrix3fv( this.addr, !1, ze ) )
    }

    function Ye( t, e ) {
        void 0 === e.elements ? t.uniformMatrix4fv( this.addr, !1, e ) : ( Fe.set( e.elements ), t.uniformMatrix4fv( this.addr, !1, Fe ) )
    }

    function Ze( t, e, i ) {
        var n = i.allocTextureUnit();
        t.uniform1i( this.addr, n ), i.setTexture2D( e || Ne, n )
    }

    function Je( t, e, i ) {
        var n = i.allocTextureUnit();
        t.uniform1i( this.addr, n ), i.setTextureCube( e || Ie, n )
    }

    function Ke( t, e ) {
        t.uniform2iv( this.addr, e )
    }

    function Qe( t, e ) {
        t.uniform3iv( this.addr, e )
    }

    function $e( t, e ) {
        t.uniform4iv( this.addr, e )
    }

    function ti( t, e ) {
        t.uniform1fv( this.addr, e )
    }

    function ei( t, e ) {
        t.uniform1iv( this.addr, e )
    }

    function ii( t, e ) {
        t.uniform2fv( this.addr, Be( e, this.size, 2 ) )
    }

    function ni( t, e ) {
        t.uniform3fv( this.addr, Be( e, this.size, 3 ) )
    }

    function ri( t, e ) {
        t.uniform4fv( this.addr, Be( e, this.size, 4 ) )
    }

    function ai( t, e ) {
        t.uniformMatrix2fv( this.addr, !1, Be( e, this.size, 4 ) )
    }

    function oi( t, e ) {
        t.uniformMatrix3fv( this.addr, !1, Be( e, this.size, 9 ) )
    }

    function si( t, e ) {
        t.uniformMatrix4fv( this.addr, !1, Be( e, this.size, 16 ) )
    }

    function ci( t, e, i ) {
        var n = e.length, r = ke( i, n );
        t.uniform1iv( this.addr, r );
        for (var a = 0; a !== n; ++a) i.setTexture2D( e[a] || Ne, r[a] )
    }

    function hi( t, e, i ) {
        var n = e.length, r = ke( i, n );
        t.uniform1iv( this.addr, r );
        for (var a = 0; a !== n; ++a) i.setTextureCube( e[a] || Ie, r[a] )
    }

    function li( t, e, i ) {
        this.id = t, this.addr = i, this.setValue = function ( t ) {
            switch (t) {
                case 5126:
                    return Ge;
                case 35664:
                    return He;
                case 35665:
                    return Ve;
                case 35666:
                    return We;
                case 35674:
                    return Xe;
                case 35675:
                    return qe;
                case 35676:
                    return Ye;
                case 35678:
                case 36198:
                    return Ze;
                case 35680:
                    return Je;
                case 5124:
                case 35670:
                    return je;
                case 35667:
                case 35671:
                    return Ke;
                case 35668:
                case 35672:
                    return Qe;
                case 35669:
                case 35673:
                    return $e
            }
        }( e.type )
    }

    function ui( t, e, i ) {
        this.id = t, this.addr = i, this.size = e.size, this.setValue = function ( t ) {
            switch (t) {
                case 5126:
                    return ti;
                case 35664:
                    return ii;
                case 35665:
                    return ni;
                case 35666:
                    return ri;
                case 35674:
                    return ai;
                case 35675:
                    return oi;
                case 35676:
                    return si;
                case 35678:
                    return ci;
                case 35680:
                    return hi;
                case 5124:
                case 35670:
                    return ei;
                case 35667:
                case 35671:
                    return Ke;
                case 35668:
                case 35672:
                    return Qe;
                case 35669:
                case 35673:
                    return $e
            }
        }( e.type )
    }

    function pi( t ) {
        this.id = t, Oe.call( this )
    }

    pi.prototype.setValue = function ( t, e ) {
        for (var i = this.seq, n = 0, r = i.length; n !== r; ++n) {
            var a = i[n];
            a.setValue( t, e[a.id] )
        }
    };
    var di = /([\w\d_]+)(\])?(\[|\.)?/g;

    function fi( t, e ) {
        t.seq.push( e ), t.map[e.id] = e
    }

    function mi( t, e, i ) {
        var n = t.name, r = n.length;
        for (di.lastIndex = 0; ;) {
            var a = di.exec( n ), o = di.lastIndex, s = a[1], c = ']' === a[2], h = a[3];
            if (c && ( s |= 0 ), void 0 === h || '[' === h && o + 2 === r) {
                fi( i, void 0 === h ? new li( s, t, e ) : new ui( s, t, e ) );
                break
            }
            var l = i.map[s];
            void 0 === l && fi( i, l = new pi( s ) ), i = l
        }
    }

    function vi( t, e, i ) {
        Oe.call( this ), this.renderer = i;
        for (var n = t.getProgramParameter( e, t.ACTIVE_UNIFORMS ), r = 0; r < n; ++r) {
            var a = t.getActiveUniform( e, r ), o = a.name;
            mi( a, t.getUniformLocation( e, o ), this )
        }
    }

    vi.prototype.setValue = function ( t, e, i ) {
        var n = this.map[e];
        void 0 !== n && n.setValue( t, i, this.renderer )
    }, vi.prototype.setOptional = function ( t, e, i ) {
        var n = e[i];
        void 0 !== n && this.setValue( t, i, n )
    }, vi.upload = function ( t, e, i, n ) {
        for (var r = 0, a = e.length; r !== a; ++r) {
            var o = e[r], s = i[o.id];
            !1 !== s.needsUpdate && o.setValue( t, s.value, n )
        }
    }, vi.seqWithValue = function ( t, e ) {
        for (var i = [], n = 0, r = t.length; n !== r; ++n) {
            var a = t[n];
            a.id in e && i.push( a )
        }
        return i
    };
    var gi = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };

    function yi( t, e, i ) {
        return void 0 === e && void 0 === i ? this.set( t ) : this.setRGB( t, e, i )
    }

    Object.assign( yi.prototype, {
        isColor: !0, r: 1, g: 1, b: 1, set: function ( t ) {
            return t && t.isColor ? this.copy( t ) : 'number' == typeof t ? this.setHex( t ) : 'string' == typeof t && this.setStyle( t ), this
        }, setScalar: function ( t ) {
            return this.r = t, this.g = t, this.b = t, this
        }, setHex: function ( t ) {
            return t = Math.floor( t ), this.r = ( t >> 16 & 255 ) / 255, this.g = ( t >> 8 & 255 ) / 255, this.b = ( 255 & t ) / 255, this
        }, setRGB: function ( t, e, i ) {
            return this.r = t, this.g = e, this.b = i, this
        }, setHSL: function () {
            function t( t, e, i ) {
                return i < 0 && ( i += 1 ), i > 1 && ( i -= 1 ), i < 1 / 6 ? t + 6 * ( e - t ) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * ( e - t ) * ( 2 / 3 - i ) : t
            }

            return function ( e, i, n ) {
                if (e = xe.euclideanModulo( e, 1 ), i = xe.clamp( i, 0, 1 ), n = xe.clamp( n, 0, 1 ), 0 === i) {
                    this.r = this.g = this.b = n;
                } else {
                    var r = n <= .5 ? n * ( 1 + i ) : n + i - n * i, a = 2 * n - r;
                    this.r = t( a, r, e + 1 / 3 ), this.g = t( a, r, e ), this.b = t( a, r, e - 1 / 3 )
                }
                return this
            }
        }(), setStyle: function ( t ) {
            function e( e ) {
                void 0 !== e && parseFloat( e ) < 1 && console.warn( 'THREE.Color: Alpha component of ' + t + ' will be ignored.' )
            }

            var i;
            if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec( t )) {
                var n, r = i[1], a = i[2];
                switch (r) {
                    case'rgb':
                    case'rgba':
                        if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec( a )) return this.r = Math.min( 255, parseInt( n[1], 10 ) ) / 255, this.g = Math.min( 255, parseInt( n[2], 10 ) ) / 255, this.b = Math.min( 255, parseInt( n[3], 10 ) ) / 255, e( n[5] ), this;
                        if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec( a )) return this.r = Math.min( 100, parseInt( n[1], 10 ) ) / 100, this.g = Math.min( 100, parseInt( n[2], 10 ) ) / 100, this.b = Math.min( 100, parseInt( n[3], 10 ) ) / 100, e( n[5] ), this;
                        break;
                    case'hsl':
                    case'hsla':
                        if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec( a )) {
                            var o = parseFloat( n[1] ) / 360, s = parseInt( n[2], 10 ) / 100,
                                c = parseInt( n[3], 10 ) / 100;
                            return e( n[5] ), this.setHSL( o, s, c )
                        }
                }
            } else if (i = /^\#([A-Fa-f0-9]+)$/.exec( t )) {
                var h, l = ( h = i[1] ).length;
                if (3 === l) return this.r = parseInt( h.charAt( 0 ) + h.charAt( 0 ), 16 ) / 255, this.g = parseInt( h.charAt( 1 ) + h.charAt( 1 ), 16 ) / 255, this.b = parseInt( h.charAt( 2 ) + h.charAt( 2 ), 16 ) / 255, this;
                if (6 === l) return this.r = parseInt( h.charAt( 0 ) + h.charAt( 1 ), 16 ) / 255, this.g = parseInt( h.charAt( 2 ) + h.charAt( 3 ), 16 ) / 255, this.b = parseInt( h.charAt( 4 ) + h.charAt( 5 ), 16 ) / 255, this
            }
            t && t.length > 0 && ( void 0 !== ( h = gi[t] ) ? this.setHex( h ) : console.warn( 'THREE.Color: Unknown color ' + t ) );
            return this
        }, clone: function () {
            return new this.constructor( this.r, this.g, this.b )
        }, copy: function ( t ) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this
        }, copyGammaToLinear: function ( t, e ) {
            return void 0 === e && ( e = 2 ), this.r = Math.pow( t.r, e ), this.g = Math.pow( t.g, e ), this.b = Math.pow( t.b, e ), this
        }, copyLinearToGamma: function ( t, e ) {
            void 0 === e && ( e = 2 );
            var i = e > 0 ? 1 / e : 1;
            return this.r = Math.pow( t.r, i ), this.g = Math.pow( t.g, i ), this.b = Math.pow( t.b, i ), this
        }, convertGammaToLinear: function () {
            var t = this.r, e = this.g, i = this.b;
            return this.r = t * t, this.g = e * e, this.b = i * i, this
        }, convertLinearToGamma: function () {
            return this.r = Math.sqrt( this.r ), this.g = Math.sqrt( this.g ), this.b = Math.sqrt( this.b ), this
        }, getHex: function () {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        }, getHexString: function () {
            return ( '000000' + this.getHex().toString( 16 ) ).slice( -6 )
        }, getHSL: function ( t ) {
            var e, i, n = t || { h: 0, s: 0, l: 0 }, r = this.r, a = this.g, o = this.b, s = Math.max( r, a, o ),
                c = Math.min( r, a, o ), h = ( c + s ) / 2;
            if (c === s) {
                e = 0, i = 0;
            } else {
                var l = s - c;
                switch (i = h <= .5 ? l / ( s + c ) : l / ( 2 - s - c ), s) {
                    case r:
                        e = ( a - o ) / l + ( a < o ? 6 : 0 );
                        break;
                    case a:
                        e = ( o - r ) / l + 2;
                        break;
                    case o:
                        e = ( r - a ) / l + 4
                }
                e /= 6
            }
            return n.h = e, n.s = i, n.l = h, n
        }, getStyle: function () {
            return 'rgb(' + ( 255 * this.r | 0 ) + ',' + ( 255 * this.g | 0 ) + ',' + ( 255 * this.b | 0 ) + ')'
        }, offsetHSL: function ( t, e, i ) {
            var n = this.getHSL();
            return n.h += t, n.s += e, n.l += i, this.setHSL( n.h, n.s, n.l ), this
        }, add: function ( t ) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this
        }, addColors: function ( t, e ) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
        }, addScalar: function ( t ) {
            return this.r += t, this.g += t, this.b += t, this
        }, sub: function ( t ) {
            return this.r = Math.max( 0, this.r - t.r ), this.g = Math.max( 0, this.g - t.g ), this.b = Math.max( 0, this.b - t.b ), this
        }, multiply: function ( t ) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
        }, multiplyScalar: function ( t ) {
            return this.r *= t, this.g *= t, this.b *= t, this
        }, lerp: function ( t, e ) {
            return this.r += ( t.r - this.r ) * e, this.g += ( t.g - this.g ) * e, this.b += ( t.b - this.b ) * e, this
        }, equals: function ( t ) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        }, fromArray: function ( t, e ) {
            return void 0 === e && ( e = 0 ), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
        }, toArray: function ( t, e ) {
            return void 0 === t && ( t = [] ), void 0 === e && ( e = 0 ), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
        }, toJSON: function () {
            return this.getHex()
        }
    } );
    var xi = {
        common: {
            diffuse: { value: new yi( 15658734 ) },
            opacity: { value: 1 },
            map: { value: null },
            uvTransform: { value: new Ee },
            alphaMap: { value: null }
        },
        specularmap: { specularMap: { value: null } },
        envmap: {
            envMap: { value: null },
            flipEnvMap: { value: -1 },
            reflectivity: { value: 1 },
            refractionRatio: { value: .98 }
        },
        aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
        lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
        emissivemap: { emissiveMap: { value: null } },
        bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
        normalmap: { normalMap: { value: null }, normalScale: { value: new be( 1, 1 ) } },
        displacementmap: {
            displacementMap: { value: null },
            displacementScale: { value: 1 },
            displacementBias: { value: 0 }
        },
        roughnessmap: { roughnessMap: { value: null } },
        metalnessmap: { metalnessMap: { value: null } },
        gradientmap: { gradientMap: { value: null } },
        fog: {
            fogDensity: { value: 25e-5 },
            fogNear: { value: 1 },
            fogFar: { value: 2e3 },
            fogColor: { value: new yi( 16777215 ) }
        },
        lights: {
            ambientLightColor: { value: [] },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: { value: [] },
            directionalShadowMatrix: { value: [] },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: { value: [] },
            spotShadowMatrix: { value: [] },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: { value: [] },
            pointShadowMatrix: { value: [] },
            hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
            rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }
        },
        points: {
            diffuse: { value: new yi( 15658734 ) },
            opacity: { value: 1 },
            size: { value: 1 },
            scale: { value: 1 },
            map: { value: null },
            uvTransform: { value: new Ee }
        }
    }, bi = {
        merge: function ( t ) {
            for (var e = {}, i = 0; i < t.length; i++) {
                var n = this.clone( t[i] );
                for (var r in n) e[r] = n[r]
            }
            return e
        }, clone: function ( t ) {
            var e = {};
            for (var i in t) {
                for (var n in e[i] = {}, t[i]) {
                    var r = t[i][n];
                    r && ( r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture ) ? e[i][n] = r.clone() : Array.isArray( r ) ? e[i][n] = r.slice() : e[i][n] = r
                }
            }
            return e
        }
    }, wi = {
        alphamap_fragment: '#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n',
        alphamap_pars_fragment: '#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n',
        alphatest_fragment: '#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n',
        aomap_fragment: '#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n',
        aomap_pars_fragment: '#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif',
        begin_vertex: '\nvec3 transformed = vec3( position );\n',
        beginnormal_vertex: '\nvec3 objectNormal = vec3( normal );\n',
        bsdfs: 'float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n',
        bumpmap_pars_fragment: '#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n',
        clipping_planes_fragment: '#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n',
        clipping_planes_pars_fragment: '#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n',
        clipping_planes_pars_vertex: '#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n',
        clipping_planes_vertex: '#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n',
        color_fragment: '#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif',
        color_pars_fragment: '#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n',
        color_pars_vertex: '#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif',
        color_vertex: '#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif',
        common: '#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n',
        cube_uv_reflection_fragment: '#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n',
        defaultnormal_vertex: 'vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n',
        displacementmap_pars_vertex: '#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n',
        displacementmap_vertex: '#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n',
        emissivemap_fragment: '#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n',
        emissivemap_pars_fragment: '#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n',
        encodings_fragment: '  gl_FragColor = linearToOutputTexel( gl_FragColor );\n',
        encodings_pars_fragment: '\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n',
        envmap_fragment: '#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n',
        envmap_pars_fragment: '#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n',
        envmap_pars_vertex: '#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n',
        envmap_vertex: '#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n',
        fog_vertex: '\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif',
        fog_pars_vertex: '#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n',
        fog_fragment: '#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n',
        fog_pars_fragment: '#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n',
        gradientmap_pars_fragment: '#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n',
        lightmap_fragment: '#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n',
        lightmap_pars_fragment: '#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif',
        lights_lambert_vertex: 'vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n',
        lights_pars: 'uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n',
        lights_phong_fragment: 'BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n',
        lights_phong_pars_fragment: 'varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n',
        lights_physical_fragment: 'PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n',
        lights_physical_pars_fragment: 'struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n',
        lights_template: '\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n',
        logdepthbuf_fragment: '#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif',
        logdepthbuf_pars_fragment: '#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n',
        logdepthbuf_pars_vertex: '#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif',
        logdepthbuf_vertex: '#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n',
        map_fragment: '#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n',
        map_pars_fragment: '#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n',
        map_particle_fragment: '#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n',
        map_particle_pars_fragment: '#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n',
        metalnessmap_fragment: 'float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n',
        metalnessmap_pars_fragment: '#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif',
        morphnormal_vertex: '#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n',
        morphtarget_pars_vertex: '#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif',
        morphtarget_vertex: '#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n',
        normal_fragment: '#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n',
        normalmap_pars_fragment: '#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n',
        packing: 'vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n',
        premultiplied_alpha_fragment: '#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n',
        project_vertex: 'vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n',
        dithering_fragment: '#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n',
        dithering_pars_fragment: '#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n',
        roughnessmap_fragment: 'float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n',
        roughnessmap_pars_fragment: '#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif',
        shadowmap_pars_fragment: '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n',
        shadowmap_pars_vertex: '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n',
        shadowmap_vertex: '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n',
        shadowmask_pars_fragment: 'float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n',
        skinbase_vertex: '#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif',
        skinning_pars_vertex: '#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n',
        skinning_vertex: '#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n',
        skinnormal_vertex: '#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n',
        specularmap_fragment: 'float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif',
        specularmap_pars_fragment: '#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif',
        tonemapping_fragment: '#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n',
        tonemapping_pars_fragment: '#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n',
        uv_pars_fragment: '#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif',
        uv_pars_vertex: '#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n',
        uv_vertex: '#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif',
        uv2_pars_fragment: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif',
        uv2_pars_vertex: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif',
        uv2_vertex: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif',
        worldpos_vertex: '#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n',
        cube_frag: 'uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n',
        cube_vert: 'varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n',
        depth_frag: '#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n',
        depth_vert: '#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n',
        distanceRGBA_frag: '#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n',
        distanceRGBA_vert: '#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n',
        equirect_frag: 'uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n',
        equirect_vert: 'varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n',
        linedashed_frag: 'uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n',
        linedashed_vert: 'uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n',
        meshbasic_frag: 'uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n',
        meshbasic_vert: '#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n',
        meshlambert_frag: 'uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n',
        meshlambert_vert: '#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n',
        meshphong_frag: '#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n',
        meshphong_vert: '#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n',
        meshphysical_frag: '#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n',
        meshphysical_vert: '#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n',
        normal_frag: '#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n',
        normal_vert: '#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n',
        points_frag: 'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n',
        points_vert: 'uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n',
        shadow_frag: 'uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n',
        shadow_vert: '#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n'
    }, _i = {
        basic: {
            uniforms: bi.merge( [xi.common, xi.specularmap, xi.envmap, xi.aomap, xi.lightmap, xi.fog] ),
            vertexShader: wi.meshbasic_vert,
            fragmentShader: wi.meshbasic_frag
        },
        lambert: {
            uniforms: bi.merge( [xi.common, xi.specularmap, xi.envmap, xi.aomap, xi.lightmap, xi.emissivemap, xi.fog, xi.lights, { emissive: { value: new yi( 0 ) } }] ),
            vertexShader: wi.meshlambert_vert,
            fragmentShader: wi.meshlambert_frag
        },
        phong: {
            uniforms: bi.merge( [xi.common, xi.specularmap, xi.envmap, xi.aomap, xi.lightmap, xi.emissivemap, xi.bumpmap, xi.normalmap, xi.displacementmap, xi.gradientmap, xi.fog, xi.lights, {
                emissive: { value: new yi( 0 ) },
                specular: { value: new yi( 1118481 ) },
                shininess: { value: 30 }
            }] ), vertexShader: wi.meshphong_vert, fragmentShader: wi.meshphong_frag
        },
        standard: {
            uniforms: bi.merge( [xi.common, xi.envmap, xi.aomap, xi.lightmap, xi.emissivemap, xi.bumpmap, xi.normalmap, xi.displacementmap, xi.roughnessmap, xi.metalnessmap, xi.fog, xi.lights, {
                emissive: { value: new yi( 0 ) },
                roughness: { value: .5 },
                metalness: { value: .5 },
                envMapIntensity: { value: 1 }
            }] ), vertexShader: wi.meshphysical_vert, fragmentShader: wi.meshphysical_frag
        },
        points: {
            uniforms: bi.merge( [xi.points, xi.fog] ),
            vertexShader: wi.points_vert,
            fragmentShader: wi.points_frag
        },
        dashed: {
            uniforms: bi.merge( [xi.common, xi.fog, {
                scale: { value: 1 },
                dashSize: { value: 1 },
                totalSize: { value: 2 }
            }] ), vertexShader: wi.linedashed_vert, fragmentShader: wi.linedashed_frag
        },
        depth: {
            uniforms: bi.merge( [xi.common, xi.displacementmap] ),
            vertexShader: wi.depth_vert,
            fragmentShader: wi.depth_frag
        },
        normal: {
            uniforms: bi.merge( [xi.common, xi.bumpmap, xi.normalmap, xi.displacementmap, { opacity: { value: 1 } }] ),
            vertexShader: wi.normal_vert,
            fragmentShader: wi.normal_frag
        },
        cube: {
            uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } },
            vertexShader: wi.cube_vert,
            fragmentShader: wi.cube_frag
        },
        equirect: {
            uniforms: { tEquirect: { value: null } },
            vertexShader: wi.equirect_vert,
            fragmentShader: wi.equirect_frag
        },
        distanceRGBA: {
            uniforms: bi.merge( [xi.common, xi.displacementmap, {
                referencePosition: { value: new Me },
                nearDistance: { value: 1 },
                farDistance: { value: 1e3 }
            }] ), vertexShader: wi.distanceRGBA_vert, fragmentShader: wi.distanceRGBA_frag
        },
        shadow: {
            uniforms: bi.merge( [xi.lights, xi.fog, { color: { value: new yi( 0 ) }, opacity: { value: 1 } }] ),
            vertexShader: wi.shadow_vert,
            fragmentShader: wi.shadow_frag
        }
    };

    function Mi( t, e ) {
        this.min = void 0 !== t ? t : new be( 1 / 0, 1 / 0 ), this.max = void 0 !== e ? e : new be( -1 / 0, -1 / 0 )
    }

    function Ei( t, e, i, n, r ) {
        var a, o, s, c, h, l, u, p;

        function d() {
            var t = new Float32Array( [-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1] ),
                n = new Uint16Array( [0, 1, 2, 0, 2, 3] );
            a = e.createBuffer(), o = e.createBuffer(), e.bindBuffer( e.ARRAY_BUFFER, a ), e.bufferData( e.ARRAY_BUFFER, t, e.STATIC_DRAW ), e.bindBuffer( e.ELEMENT_ARRAY_BUFFER, o ), e.bufferData( e.ELEMENT_ARRAY_BUFFER, n, e.STATIC_DRAW ), u = e.createTexture(), p = e.createTexture(), i.bindTexture( e.TEXTURE_2D, u ), e.texImage2D( e.TEXTURE_2D, 0, e.RGB, 16, 16, 0, e.RGB, e.UNSIGNED_BYTE, null ), e.texParameteri( e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE ), e.texParameteri( e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE ), e.texParameteri( e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST ), e.texParameteri( e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST ), i.bindTexture( e.TEXTURE_2D, p ), e.texImage2D( e.TEXTURE_2D, 0, e.RGBA, 16, 16, 0, e.RGBA, e.UNSIGNED_BYTE, null ), e.texParameteri( e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE ), e.texParameteri( e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE ), e.texParameteri( e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST ), e.texParameteri( e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST ), s = {
                vertexShader: ['uniform lowp int renderType;', 'uniform vec3 screenPosition;', 'uniform vec2 scale;', 'uniform float rotation;', 'uniform sampler2D occlusionMap;', 'attribute vec2 position;', 'attribute vec2 uv;', 'varying vec2 vUV;', 'varying float vVisibility;', 'void main() {', '\tvUV = uv;', '\tvec2 pos = position;', '\tif ( renderType == 2 ) {', '\t\tvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );', '\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );', '\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );', '\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );', '\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );', '\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );', '\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );', '\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );', '\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );', '\t\tvVisibility =        visibility.r / 9.0;', '\t\tvVisibility *= 1.0 - visibility.g / 9.0;', '\t\tvVisibility *=       visibility.b / 9.0;', '\t\tvVisibility *= 1.0 - visibility.a / 9.0;', '\t\tpos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;', '\t\tpos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;', '\t}', '\tgl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );', '}'].join( '\n' ),
                fragmentShader: ['uniform lowp int renderType;', 'uniform sampler2D map;', 'uniform float opacity;', 'uniform vec3 color;', 'varying vec2 vUV;', 'varying float vVisibility;', 'void main() {', '\tif ( renderType == 0 ) {', '\t\tgl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );', '\t} else if ( renderType == 1 ) {', '\t\tgl_FragColor = texture2D( map, vUV );', '\t} else {', '\t\tvec4 texture = texture2D( map, vUV );', '\t\ttexture.a *= opacity * vVisibility;', '\t\tgl_FragColor = texture;', '\t\tgl_FragColor.rgb *= color;', '\t}', '}'].join( '\n' )
            }, c = function ( t ) {
                var i = e.createProgram(), n = e.createShader( e.FRAGMENT_SHADER ),
                    a = e.createShader( e.VERTEX_SHADER ), o = 'precision ' + r.precision + ' float;\n';
                return e.shaderSource( n, o + t.fragmentShader ), e.shaderSource( a, o + t.vertexShader ), e.compileShader( n ), e.compileShader( a ), e.attachShader( i, n ), e.attachShader( i, a ), e.linkProgram( i ), i
            }( s ), h = {
                vertex: e.getAttribLocation( c, 'position' ),
                uv: e.getAttribLocation( c, 'uv' )
            }, l = {
                renderType: e.getUniformLocation( c, 'renderType' ),
                map: e.getUniformLocation( c, 'map' ),
                occlusionMap: e.getUniformLocation( c, 'occlusionMap' ),
                opacity: e.getUniformLocation( c, 'opacity' ),
                color: e.getUniformLocation( c, 'color' ),
                scale: e.getUniformLocation( c, 'scale' ),
                rotation: e.getUniformLocation( c, 'rotation' ),
                screenPosition: e.getUniformLocation( c, 'screenPosition' )
            }
        }

        this.render = function ( t, r, s, f ) {
            if (0 !== t.length) {
                var m = new Me, v = f.w / f.z, g = .5 * f.z, y = .5 * f.w, x = 16 / f.w, b = new be( x * v, x ),
                    w = new Me( 1, 1, 0 ), _ = new be( 1, 1 ), M = new Mi;
                M.min.set( f.x, f.y ), M.max.set( f.x + ( f.z - 16 ), f.y + ( f.w - 16 ) ), void 0 === c && d(), i.useProgram( c ), i.initAttributes(), i.enableAttribute( h.vertex ), i.enableAttribute( h.uv ), i.disableUnusedAttributes(), e.uniform1i( l.occlusionMap, 0 ), e.uniform1i( l.map, 1 ), e.bindBuffer( e.ARRAY_BUFFER, a ), e.vertexAttribPointer( h.vertex, 2, e.FLOAT, !1, 16, 0 ), e.vertexAttribPointer( h.uv, 2, e.FLOAT, !1, 16, 8 ), e.bindBuffer( e.ELEMENT_ARRAY_BUFFER, o ), i.disable( e.CULL_FACE ), i.buffers.depth.setMask( !1 );
                for (var E = 0, T = t.length; E < T; E++) {
                    x = 16 / f.w, b.set( x * v, x );
                    var S = t[E];
                    if (m.set( S.matrixWorld.elements[12], S.matrixWorld.elements[13], S.matrixWorld.elements[14] ), m.applyMatrix4( s.matrixWorldInverse ), m.applyMatrix4( s.projectionMatrix ), w.copy( m ), _.x = f.x + w.x * g + g - 8, _.y = f.y + w.y * y + y - 8, !0 === M.containsPoint( _ )) {
                        i.activeTexture( e.TEXTURE0 ), i.bindTexture( e.TEXTURE_2D, null ), i.activeTexture( e.TEXTURE1 ), i.bindTexture( e.TEXTURE_2D, u ), e.copyTexImage2D( e.TEXTURE_2D, 0, e.RGB, _.x, _.y, 16, 16, 0 ), e.uniform1i( l.renderType, 0 ), e.uniform2f( l.scale, b.x, b.y ), e.uniform3f( l.screenPosition, w.x, w.y, w.z ), i.disable( e.BLEND ), i.enable( e.DEPTH_TEST ), e.drawElements( e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0 ), i.activeTexture( e.TEXTURE0 ), i.bindTexture( e.TEXTURE_2D, p ), e.copyTexImage2D( e.TEXTURE_2D, 0, e.RGBA, _.x, _.y, 16, 16, 0 ), e.uniform1i( l.renderType, 1 ), i.disable( e.DEPTH_TEST ), i.activeTexture( e.TEXTURE1 ), i.bindTexture( e.TEXTURE_2D, u ), e.drawElements( e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0 ), S.positionScreen.copy( w ), S.customUpdateCallback ? S.customUpdateCallback( S ) : S.updateLensFlares(), e.uniform1i( l.renderType, 2 ), i.enable( e.BLEND );
                        for (var A = 0, L = S.lensFlares.length; A < L; A++) {
                            var R = S.lensFlares[A];
                            R.opacity > .001 && R.scale > .001 && ( w.x = R.x, w.y = R.y, w.z = R.z, x = R.size * R.scale / f.w, b.x = x * v, b.y = x, e.uniform3f( l.screenPosition, w.x, w.y, w.z ), e.uniform2f( l.scale, b.x, b.y ), e.uniform1f( l.rotation, R.rotation ), e.uniform1f( l.opacity, R.opacity ), e.uniform3f( l.color, R.color.r, R.color.g, R.color.b ), i.setBlending( R.blending, R.blendEquation, R.blendSrc, R.blendDst ), n.setTexture2D( R.texture, 1 ), e.drawElements( e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0 ) )
                        }
                    }
                }
                i.enable( e.CULL_FACE ), i.enable( e.DEPTH_TEST ), i.buffers.depth.setMask( !0 ), i.reset()
            }
        }
    }

    function Ti( t, e, i, n, r, a, o, s, c ) {
        Se.call( this, t, e, i, n, r, a, o, s, c ), this.needsUpdate = !0
    }

    function Si( t, e, i, n, r ) {
        var a, o, s, c, h, l, u = new Me, p = new _e, d = new Me;

        function f() {
            var t = new Float32Array( [-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1] ),
                i = new Uint16Array( [0, 1, 2, 0, 2, 3] );
            a = e.createBuffer(), o = e.createBuffer(), e.bindBuffer( e.ARRAY_BUFFER, a ), e.bufferData( e.ARRAY_BUFFER, t, e.STATIC_DRAW ), e.bindBuffer( e.ELEMENT_ARRAY_BUFFER, o ), e.bufferData( e.ELEMENT_ARRAY_BUFFER, i, e.STATIC_DRAW ), s = function () {
                var t = e.createProgram(), i = e.createShader( e.VERTEX_SHADER ),
                    n = e.createShader( e.FRAGMENT_SHADER );
                return e.shaderSource( i, ['precision ' + r.precision + ' float;', '#define SHADER_NAME SpriteMaterial', 'uniform mat4 modelViewMatrix;', 'uniform mat4 projectionMatrix;', 'uniform float rotation;', 'uniform vec2 scale;', 'uniform vec2 uvOffset;', 'uniform vec2 uvScale;', 'attribute vec2 position;', 'attribute vec2 uv;', 'varying vec2 vUV;', 'varying float fogDepth;', 'void main() {', '\tvUV = uvOffset + uv * uvScale;', '\tvec2 alignedPosition = position * scale;', '\tvec2 rotatedPosition;', '\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;', '\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;', '\tvec4 mvPosition;', '\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );', '\tmvPosition.xy += rotatedPosition;', '\tgl_Position = projectionMatrix * mvPosition;', '\tfogDepth = - mvPosition.z;', '}'].join( '\n' ) ), e.shaderSource( n, ['precision ' + r.precision + ' float;', '#define SHADER_NAME SpriteMaterial', 'uniform vec3 color;', 'uniform sampler2D map;', 'uniform float opacity;', 'uniform int fogType;', 'uniform vec3 fogColor;', 'uniform float fogDensity;', 'uniform float fogNear;', 'uniform float fogFar;', 'uniform float alphaTest;', 'varying vec2 vUV;', 'varying float fogDepth;', 'void main() {', '\tvec4 texture = texture2D( map, vUV );', '\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );', '\tif ( gl_FragColor.a < alphaTest ) discard;', '\tif ( fogType > 0 ) {', '\t\tfloat fogFactor = 0.0;', '\t\tif ( fogType == 1 ) {', '\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );', '\t\t} else {', '\t\t\tconst float LOG2 = 1.442695;', '\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );', '\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );', '\t\t}', '\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );', '\t}', '}'].join( '\n' ) ), e.compileShader( i ), e.compileShader( n ), e.attachShader( t, i ), e.attachShader( t, n ), e.linkProgram( t ), t
            }(), c = {
                position: e.getAttribLocation( s, 'position' ),
                uv: e.getAttribLocation( s, 'uv' )
            }, h = {
                uvOffset: e.getUniformLocation( s, 'uvOffset' ),
                uvScale: e.getUniformLocation( s, 'uvScale' ),
                rotation: e.getUniformLocation( s, 'rotation' ),
                scale: e.getUniformLocation( s, 'scale' ),
                color: e.getUniformLocation( s, 'color' ),
                map: e.getUniformLocation( s, 'map' ),
                opacity: e.getUniformLocation( s, 'opacity' ),
                modelViewMatrix: e.getUniformLocation( s, 'modelViewMatrix' ),
                projectionMatrix: e.getUniformLocation( s, 'projectionMatrix' ),
                fogType: e.getUniformLocation( s, 'fogType' ),
                fogDensity: e.getUniformLocation( s, 'fogDensity' ),
                fogNear: e.getUniformLocation( s, 'fogNear' ),
                fogFar: e.getUniformLocation( s, 'fogFar' ),
                fogColor: e.getUniformLocation( s, 'fogColor' ),
                fogDepth: e.getUniformLocation( s, 'fogDepth' ),
                alphaTest: e.getUniformLocation( s, 'alphaTest' )
            };
            var n = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
            n.width = 8, n.height = 8;
            var u = n.getContext( '2d' );
            u.fillStyle = 'white', u.fillRect( 0, 0, 8, 8 ), l = new Ti( n )
        }

        function m( t, e ) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
        }

        this.render = function ( r, v, g ) {
            if (0 !== r.length) {
                void 0 === s && f(), i.useProgram( s ), i.initAttributes(), i.enableAttribute( c.position ), i.enableAttribute( c.uv ), i.disableUnusedAttributes(), i.disable( e.CULL_FACE ), i.enable( e.BLEND ), e.bindBuffer( e.ARRAY_BUFFER, a ), e.vertexAttribPointer( c.position, 2, e.FLOAT, !1, 16, 0 ), e.vertexAttribPointer( c.uv, 2, e.FLOAT, !1, 16, 8 ), e.bindBuffer( e.ELEMENT_ARRAY_BUFFER, o ), e.uniformMatrix4fv( h.projectionMatrix, !1, g.projectionMatrix.elements ), i.activeTexture( e.TEXTURE0 ), e.uniform1i( h.map, 0 );
                var y = 0, x = 0, b = v.fog;
                b ? ( e.uniform3f( h.fogColor, b.color.r, b.color.g, b.color.b ), b.isFog ? ( e.uniform1f( h.fogNear, b.near ), e.uniform1f( h.fogFar, b.far ), e.uniform1i( h.fogType, 1 ), y = 1, x = 1 ) : b.isFogExp2 && ( e.uniform1f( h.fogDensity, b.density ), e.uniform1i( h.fogType, 2 ), y = 2, x = 2 ) ) : ( e.uniform1i( h.fogType, 0 ), y = 0, x = 0 );
                for (var w = 0, _ = r.length; w < _; w++) {
                    ( E = r[w] ).modelViewMatrix.multiplyMatrices( g.matrixWorldInverse, E.matrixWorld ), E.z = -E.modelViewMatrix.elements[14]
                }
                r.sort( m );
                var M = [];
                for (w = 0, _ = r.length; w < _; w++) {
                    var E, T = ( E = r[w] ).material;
                    if (!1 !== T.visible) {
                        E.onBeforeRender( t, v, g, void 0, T, void 0 ), e.uniform1f( h.alphaTest, T.alphaTest ), e.uniformMatrix4fv( h.modelViewMatrix, !1, E.modelViewMatrix.elements ), E.matrixWorld.decompose( u, p, d ), M[0] = d.x, M[1] = d.y;
                        var S = 0;
                        v.fog && T.fog && ( S = x ), y !== S && ( e.uniform1i( h.fogType, S ), y = S ), null !== T.map ? ( e.uniform2f( h.uvOffset, T.map.offset.x, T.map.offset.y ), e.uniform2f( h.uvScale, T.map.repeat.x, T.map.repeat.y ) ) : ( e.uniform2f( h.uvOffset, 0, 0 ), e.uniform2f( h.uvScale, 1, 1 ) ), e.uniform1f( h.opacity, T.opacity ), e.uniform3f( h.color, T.color.r, T.color.g, T.color.b ), e.uniform1f( h.rotation, T.rotation ), e.uniform2fv( h.scale, M ), i.setBlending( T.blending, T.blendEquation, T.blendSrc, T.blendDst, T.blendEquationAlpha, T.blendSrcAlpha, T.blendDstAlpha, T.premultipliedAlpha ), i.buffers.depth.setTest( T.depthTest ), i.buffers.depth.setMask( T.depthWrite ), i.buffers.color.setMask( T.colorWrite ), n.setTexture2D( T.map || l, 0 ), e.drawElements( e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0 ), E.onAfterRender( t, v, g, void 0, T, void 0 )
                    }
                }
                i.enable( e.CULL_FACE ), i.reset()
            }
        }
    }

    _i.physical = {
        uniforms: bi.merge( [_i.standard.uniforms, {
            clearCoat: { value: 0 },
            clearCoatRoughness: { value: 0 }
        }] ), vertexShader: wi.meshphysical_vert, fragmentShader: wi.meshphysical_frag
    }, Object.assign( Mi.prototype, {
        set: function ( t, e ) {
            return this.min.copy( t ), this.max.copy( e ), this
        }, setFromPoints: function ( t ) {
            this.makeEmpty();
            for (var e = 0, i = t.length; e < i; e++) this.expandByPoint( t[e] );
            return this
        }, setFromCenterAndSize: function () {
            var t = new be;
            return function ( e, i ) {
                var n = t.copy( i ).multiplyScalar( .5 );
                return this.min.copy( e ).sub( n ), this.max.copy( e ).add( n ), this
            }
        }(), clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.min.copy( t.min ), this.max.copy( t.max ), this
        }, makeEmpty: function () {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
        }, isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y
        }, getCenter: function ( t ) {
            var e = t || new be;
            return this.isEmpty() ? e.set( 0, 0 ) : e.addVectors( this.min, this.max ).multiplyScalar( .5 )
        }, getSize: function ( t ) {
            var e = t || new be;
            return this.isEmpty() ? e.set( 0, 0 ) : e.subVectors( this.max, this.min )
        }, expandByPoint: function ( t ) {
            return this.min.min( t ), this.max.max( t ), this
        }, expandByVector: function ( t ) {
            return this.min.sub( t ), this.max.add( t ), this
        }, expandByScalar: function ( t ) {
            return this.min.addScalar( -t ), this.max.addScalar( t ), this
        }, containsPoint: function ( t ) {
            return !( t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y )
        }, containsBox: function ( t ) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        }, getParameter: function ( t, e ) {
            return ( e || new be ).set( ( t.x - this.min.x ) / ( this.max.x - this.min.x ), ( t.y - this.min.y ) / ( this.max.y - this.min.y ) )
        }, intersectsBox: function ( t ) {
            return !( t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y )
        }, clampPoint: function ( t, e ) {
            return ( e || new be ).copy( t ).clamp( this.min, this.max )
        }, distanceToPoint: function () {
            var t = new be;
            return function ( e ) {
                return t.copy( e ).clamp( this.min, this.max ).sub( e ).length()
            }
        }(), intersect: function ( t ) {
            return this.min.max( t.min ), this.max.min( t.max ), this
        }, union: function ( t ) {
            return this.min.min( t.min ), this.max.max( t.max ), this
        }, translate: function ( t ) {
            return this.min.add( t ), this.max.add( t ), this
        }, equals: function ( t ) {
            return t.min.equals( this.min ) && t.max.equals( this.max )
        }
    } ), Ti.prototype = Object.create( Se.prototype ), Ti.prototype.constructor = Ti;
    var Ai, Li, Ri, Pi, Ci, Ni, Ii = 0;

    function Oi() {
        Object.defineProperty( this, 'id', { value: Ii++ } ), this.uuid = xe.generateUUID(), this.name = '', this.type = 'Material', this.fog = !0, this.lights = !0, this.blending = N, this.side = T, this.flatShading = !1, this.vertexColors = L, this.opacity = 1, this.transparent = !1, this.blendSrc = X, this.blendDst = q, this.blendEquation = F, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = it, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0
    }

    function Ui( t ) {
        Oi.call( this ), this.type = 'MeshDepthMaterial', this.depthPacking = ge, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues( t )
    }

    function Di( t ) {
        Oi.call( this ), this.type = 'MeshDistanceMaterial', this.referencePosition = new Me, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues( t )
    }

    function Fi( t, e ) {
        this.min = void 0 !== t ? t : new Me( 1 / 0, 1 / 0, 1 / 0 ), this.max = void 0 !== e ? e : new Me( -1 / 0, -1 / 0, -1 / 0 )
    }

    function zi( t, e ) {
        this.center = void 0 !== t ? t : new Me, this.radius = void 0 !== e ? e : 0
    }

    function Bi( t, e ) {
        this.normal = void 0 !== t ? t : new Me( 1, 0, 0 ), this.constant = void 0 !== e ? e : 0
    }

    function ki( t, e, i, n, r, a ) {
        this.planes = [void 0 !== t ? t : new Bi, void 0 !== e ? e : new Bi, void 0 !== i ? i : new Bi, void 0 !== n ? n : new Bi, void 0 !== r ? r : new Bi, void 0 !== a ? a : new Bi]
    }

    function Gi( t, e, i ) {
        for (var n = new ki, r = new we, a = new be, o = new be( i, i ), s = new Me, c = new Me, h = 1, l = 2, u = 1 + ( h | l ), p = new Array( u ), d = new Array( u ), f = {}, m = [new Me( 1, 0, 0 ), new Me( -1, 0, 0 ), new Me( 0, 0, 1 ), new Me( 0, 0, -1 ), new Me( 0, 1, 0 ), new Me( 0, -1, 0 )], v = [new Me( 0, 1, 0 ), new Me( 0, 1, 0 ), new Me( 0, 1, 0 ), new Me( 0, 1, 0 ), new Me( 0, 0, 1 ), new Me( 0, 0, -1 )], g = [new Ae, new Ae, new Ae, new Ae, new Ae, new Ae], y = 0; y !== u; ++y) {
            var x = 0 != ( y & h ), b = 0 != ( y & l ),
                w = new Ui( { depthPacking: ye, morphTargets: x, skinning: b } );
            p[y] = w;
            var _ = new Di( { morphTargets: x, skinning: b } );
            d[y] = _
        }
        var E = this;

        function L( e, i, n, r, a, o ) {
            var s = e.geometry, c = null, u = p, m = e.customDepthMaterial;
            if (n && ( u = d, m = e.customDistanceMaterial ), m) {
                c = m;
            } else {
                var v = !1;
                i.morphTargets && ( s && s.isBufferGeometry ? v = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && ( v = s.morphTargets && s.morphTargets.length > 0 ) ), e.isSkinnedMesh && !1 === i.skinning && console.warn( 'THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:', e );
                var g = e.isSkinnedMesh && i.skinning, y = 0;
                v && ( y |= h ), g && ( y |= l ), c = u[y]
            }
            if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
                var x = c.uuid, b = i.uuid, w = f[x];
                void 0 === w && ( w = {}, f[x] = w );
                var _ = w[b];
                void 0 === _ && ( _ = c.clone(), w[b] = _ ), c = _
            }
            c.visible = i.visible, c.wireframe = i.wireframe;
            var M = i.side;
            return E.renderSingleSided && M == A && ( M = T ), E.renderReverseSided && ( M === T ? M = S : M === S && ( M = T ) ), c.side = M, c.clipShadows = i.clipShadows, c.clippingPlanes = i.clippingPlanes, c.clipIntersection = i.clipIntersection, c.wireframeLinewidth = i.wireframeLinewidth, c.linewidth = i.linewidth, n && c.isMeshDistanceMaterial && ( c.referencePosition.copy( r ), c.nearDistance = a, c.farDistance = o ), c
        }

        function R( i, r, a, o ) {
            if (!1 !== i.visible) {
                if (i.layers.test( r.layers ) && ( i.isMesh || i.isLine || i.isPoints ) && i.castShadow && ( !i.frustumCulled || n.intersectsObject( i ) )) {
                    i.modelViewMatrix.multiplyMatrices( a.matrixWorldInverse, i.matrixWorld );
                    var s = e.update( i ), h = i.material;
                    if (Array.isArray( h )) {
                        for (var l = s.groups, u = 0, p = l.length; u < p; u++) {
                            var d = l[u], f = h[d.materialIndex];
                            if (f && f.visible) {
                                var m = L( i, f, o, c, a.near, a.far );
                                t.renderBufferDirect( a, null, s, m, i, d )
                            }
                        }
                    } else if (h.visible) {
                        m = L( i, h, o, c, a.near, a.far );
                        t.renderBufferDirect( a, null, s, m, i, null )
                    }
                }
                for (var v = i.children, g = 0, y = v.length; g < y; g++) R( v[g], r, a, o )
            }
        }

        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = M, this.renderReverseSided = !0, this.renderSingleSided = !0, this.render = function ( e, i, h ) {
            if (!1 !== E.enabled && ( !1 !== E.autoUpdate || !1 !== E.needsUpdate ) && 0 !== e.length) {
                var l, u = t.context, p = t.state;
                p.disable( u.BLEND ), p.buffers.color.setClear( 1, 1, 1, 1 ), p.buffers.depth.setTest( !0 ), p.setScissorTest( !1 );
                for (var d = 0, f = e.length; d < f; d++) {
                    var y = e[d], x = y.shadow, b = y && y.isPointLight;
                    if (void 0 !== x) {
                        var w = x.camera;
                        if (a.copy( x.mapSize ), a.min( o ), b) {
                            var _ = a.x, M = a.y;
                            g[0].set( 2 * _, M, _, M ), g[1].set( 0, M, _, M ), g[2].set( 3 * _, M, _, M ), g[3].set( _, M, _, M ), g[4].set( 3 * _, 0, _, M ), g[5].set( _, 0, _, M ), a.x *= 4, a.y *= 2
                        }
                        if (null === x.map) {
                            var T = { minFilter: Tt, magFilter: Tt, format: Wt };
                            x.map = new Le( a.x, a.y, T ), x.map.texture.name = y.name + '.shadowMap', w.updateProjectionMatrix()
                        }
                        x.isSpotLightShadow && x.update( y );
                        var S = x.map, A = x.matrix;
                        c.setFromMatrixPosition( y.matrixWorld ), w.position.copy( c ), b ? ( l = 6, A.makeTranslation( -c.x, -c.y, -c.z ) ) : ( l = 1, s.setFromMatrixPosition( y.target.matrixWorld ), w.lookAt( s ), w.updateMatrixWorld(), A.set( .5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1 ), A.multiply( w.projectionMatrix ), A.multiply( w.matrixWorldInverse ) ), t.setRenderTarget( S ), t.clear();
                        for (var L = 0; L < l; L++) {
                            if (b) {
                                s.copy( w.position ), s.add( m[L] ), w.up.copy( v[L] ), w.lookAt( s ), w.updateMatrixWorld();
                                var P = g[L];
                                p.viewport( P )
                            }
                            r.multiplyMatrices( w.projectionMatrix, w.matrixWorldInverse ), n.setFromMatrix( r ), R( i, h, w, b )
                        }
                    } else {
                        console.warn( 'THREE.WebGLShadowMap:', y, 'has no shadow.' )
                    }
                }
                E.needsUpdate = !1
            }
        }
    }

    function ji( t ) {
        var e = {};
        return {
            get: function ( t ) {
                return t.isInterleavedBufferAttribute && ( t = t.data ), e[t.uuid]
            }, remove: function ( i ) {
                i.isInterleavedBufferAttribute && ( i = i.data );
                var n = e[i.uuid];
                n && ( t.deleteBuffer( n.buffer ), delete e[i.uuid] )
            }, update: function ( i, n ) {
                i.isInterleavedBufferAttribute && ( i = i.data );
                var r = e[i.uuid];
                void 0 === r ? e[i.uuid] = function ( e, i ) {
                    var n = e.array, r = e.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW, a = t.createBuffer();
                    t.bindBuffer( i, a ), t.bufferData( i, n, r ), e.onUploadCallback();
                    var o = t.FLOAT;
                    return n instanceof Float32Array ? o = t.FLOAT : n instanceof Float64Array ? console.warn( 'THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.' ) : n instanceof Uint16Array ? o = t.UNSIGNED_SHORT : n instanceof Int16Array ? o = t.SHORT : n instanceof Uint32Array ? o = t.UNSIGNED_INT : n instanceof Int32Array ? o = t.INT : n instanceof Int8Array ? o = t.BYTE : n instanceof Uint8Array && ( o = t.UNSIGNED_BYTE ), {
                        buffer: a,
                        type: o,
                        bytesPerElement: n.BYTES_PER_ELEMENT,
                        version: e.version
                    }
                }( i, n ) : r.version < i.version && ( function ( e, i, n ) {
                    var r = i.array, a = i.updateRange;
                    t.bindBuffer( n, e ), !1 === i.dynamic ? t.bufferData( n, r, t.STATIC_DRAW ) : -1 === a.count ? t.bufferSubData( n, 0, r ) : 0 === a.count ? console.error( 'THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.' ) : ( t.bufferSubData( n, a.offset * r.BYTES_PER_ELEMENT, r.subarray( a.offset, a.offset + a.count ) ), a.count = -1 )
                }( r.buffer, i, n ), r.version = i.version )
            }
        }
    }

    function Hi( t, e, i, n ) {
        this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || Hi.DefaultOrder
    }

    function Vi() {
        this.mask = 1
    }

    Object.assign( Oi.prototype, i.prototype, {
        isMaterial: !0, onBeforeCompile: function () {
        }, setValues: function ( t ) {
            if (void 0 !== t) {
                for (var e in t) {
                    var i = t[e];
                    if (void 0 !== i) {
                        if ('shading' !== e) {
                            var n = this[e];
                            void 0 !== n ? n && n.isColor ? n.set( i ) : n && n.isVector3 && i && i.isVector3 ? n.copy( i ) : this[e] = 'overdraw' === e ? Number( i ) : i : console.warn( 'THREE.' + this.type + ': \'' + e + '\' is not a property of this material.' )
                        } else {
                            console.warn( 'THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.' ), this.flatShading = 1 === i;
                        }
                    } else {
                        console.warn( 'THREE.Material: \'' + e + '\' parameter is undefined.' )
                    }
                }
            }
        }, toJSON: function ( t ) {
            var e = void 0 === t || 'string' == typeof t;
            e && ( t = { textures: {}, images: {} } );
            var i = { metadata: { version: 4.5, type: 'Material', generator: 'Material.toJSON' } };

            function n( t ) {
                var e = [];
                for (var i in t) {
                    var n = t[i];
                    delete n.metadata, e.push( n )
                }
                return e
            }

            if (i.uuid = this.uuid, i.type = this.type, '' !== this.name && ( i.name = this.name ), this.color && this.color.isColor && ( i.color = this.color.getHex() ), void 0 !== this.roughness && ( i.roughness = this.roughness ), void 0 !== this.metalness && ( i.metalness = this.metalness ), this.emissive && this.emissive.isColor && ( i.emissive = this.emissive.getHex() ), 1 !== this.emissiveIntensity && ( i.emissiveIntensity = this.emissiveIntensity ), this.specular && this.specular.isColor && ( i.specular = this.specular.getHex() ), void 0 !== this.shininess && ( i.shininess = this.shininess ), void 0 !== this.clearCoat && ( i.clearCoat = this.clearCoat ), void 0 !== this.clearCoatRoughness && ( i.clearCoatRoughness = this.clearCoatRoughness ), this.map && this.map.isTexture && ( i.map = this.map.toJSON( t ).uuid ), this.alphaMap && this.alphaMap.isTexture && ( i.alphaMap = this.alphaMap.toJSON( t ).uuid ), this.lightMap && this.lightMap.isTexture && ( i.lightMap = this.lightMap.toJSON( t ).uuid ), this.bumpMap && this.bumpMap.isTexture && ( i.bumpMap = this.bumpMap.toJSON( t ).uuid, i.bumpScale = this.bumpScale ), this.normalMap && this.normalMap.isTexture && ( i.normalMap = this.normalMap.toJSON( t ).uuid, i.normalScale = this.normalScale.toArray() ), this.displacementMap && this.displacementMap.isTexture && ( i.displacementMap = this.displacementMap.toJSON( t ).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias ), this.roughnessMap && this.roughnessMap.isTexture && ( i.roughnessMap = this.roughnessMap.toJSON( t ).uuid ), this.metalnessMap && this.metalnessMap.isTexture && ( i.metalnessMap = this.metalnessMap.toJSON( t ).uuid ), this.emissiveMap && this.emissiveMap.isTexture && ( i.emissiveMap = this.emissiveMap.toJSON( t ).uuid ), this.specularMap && this.specularMap.isTexture && ( i.specularMap = this.specularMap.toJSON( t ).uuid ), this.envMap && this.envMap.isTexture && ( i.envMap = this.envMap.toJSON( t ).uuid, i.reflectivity = this.reflectivity ), this.gradientMap && this.gradientMap.isTexture && ( i.gradientMap = this.gradientMap.toJSON( t ).uuid ), void 0 !== this.size && ( i.size = this.size ), void 0 !== this.sizeAttenuation && ( i.sizeAttenuation = this.sizeAttenuation ), this.blending !== N && ( i.blending = this.blending ), !0 === this.flatShading && ( i.flatShading = this.flatShading ), this.side !== T && ( i.side = this.side ), this.vertexColors !== L && ( i.vertexColors = this.vertexColors ), this.opacity < 1 && ( i.opacity = this.opacity ), !0 === this.transparent && ( i.transparent = this.transparent ), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, 0 !== this.rotation && ( i.rotation = this.rotation ), 1 !== this.linewidth && ( i.linewidth = this.linewidth ), void 0 !== this.dashSize && ( i.dashSize = this.dashSize ), void 0 !== this.gapSize && ( i.gapSize = this.gapSize ), void 0 !== this.scale && ( i.scale = this.scale ), !0 === this.dithering && ( i.dithering = !0 ), this.alphaTest > 0 && ( i.alphaTest = this.alphaTest ), !0 === this.premultipliedAlpha && ( i.premultipliedAlpha = this.premultipliedAlpha ), !0 === this.wireframe && ( i.wireframe = this.wireframe ), this.wireframeLinewidth > 1 && ( i.wireframeLinewidth = this.wireframeLinewidth ), 'round' !== this.wireframeLinecap && ( i.wireframeLinecap = this.wireframeLinecap ), 'round' !== this.wireframeLinejoin && ( i.wireframeLinejoin = this.wireframeLinejoin ), !0 === this.morphTargets && ( i.morphTargets = !0 ), !0 === this.skinning && ( i.skinning = !0 ), !1 === this.visible && ( i.visible = !1 ), '{}' !== JSON.stringify( this.userData ) && ( i.userData = this.userData ), e) {
                var r = n( t.textures ), a = n( t.images );
                r.length > 0 && ( i.textures = r ), a.length > 0 && ( i.images = a )
            }
            return i
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse( JSON.stringify( t.userData ) ), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
            var e = t.clippingPlanes, i = null;
            if (null !== e) {
                var n = e.length;
                i = new Array( n );
                for (var r = 0; r !== n; ++r) i[r] = e[r].clone()
            }
            return this.clippingPlanes = i, this
        }, dispose: function () {
            this.dispatchEvent( { type: 'dispose' } )
        }
    } ), Ui.prototype = Object.create( Oi.prototype ), Ui.prototype.constructor = Ui, Ui.prototype.isMeshDepthMaterial = !0, Ui.prototype.copy = function ( t ) {
        return Oi.prototype.copy.call( this, t ), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    }, Di.prototype = Object.create( Oi.prototype ), Di.prototype.constructor = Di, Di.prototype.isMeshDistanceMaterial = !0, Di.prototype.copy = function ( t ) {
        return Oi.prototype.copy.call( this, t ), this.referencePosition.copy( t.referencePosition ), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
    }, Object.assign( Fi.prototype, {
        isBox3: !0, set: function ( t, e ) {
            return this.min.copy( t ), this.max.copy( e ), this
        }, setFromArray: function ( t ) {
            for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
                var h = t[s], l = t[s + 1], u = t[s + 2];
                h < e && ( e = h ), l < i && ( i = l ), u < n && ( n = u ), h > r && ( r = h ), l > a && ( a = l ), u > o && ( o = u )
            }
            return this.min.set( e, i, n ), this.max.set( r, a, o ), this
        }, setFromBufferAttribute: function ( t ) {
            for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
                var h = t.getX( s ), l = t.getY( s ), u = t.getZ( s );
                h < e && ( e = h ), l < i && ( i = l ), u < n && ( n = u ), h > r && ( r = h ), l > a && ( a = l ), u > o && ( o = u )
            }
            return this.min.set( e, i, n ), this.max.set( r, a, o ), this
        }, setFromPoints: function ( t ) {
            this.makeEmpty();
            for (var e = 0, i = t.length; e < i; e++) this.expandByPoint( t[e] );
            return this
        }, setFromCenterAndSize: function () {
            var t = new Me;
            return function ( e, i ) {
                var n = t.copy( i ).multiplyScalar( .5 );
                return this.min.copy( e ).sub( n ), this.max.copy( e ).add( n ), this
            }
        }(), setFromObject: function ( t ) {
            return this.makeEmpty(), this.expandByObject( t )
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.min.copy( t.min ), this.max.copy( t.max ), this
        }, makeEmpty: function () {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
        }, isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }, getCenter: function ( t ) {
            var e = t || new Me;
            return this.isEmpty() ? e.set( 0, 0, 0 ) : e.addVectors( this.min, this.max ).multiplyScalar( .5 )
        }, getSize: function ( t ) {
            var e = t || new Me;
            return this.isEmpty() ? e.set( 0, 0, 0 ) : e.subVectors( this.max, this.min )
        }, expandByPoint: function ( t ) {
            return this.min.min( t ), this.max.max( t ), this
        }, expandByVector: function ( t ) {
            return this.min.sub( t ), this.max.add( t ), this
        }, expandByScalar: function ( t ) {
            return this.min.addScalar( -t ), this.max.addScalar( t ), this
        }, expandByObject: function () {
            var t, e, i, n = new Me;

            function r( r ) {
                var a = r.geometry;
                if (void 0 !== a) {
                    if (a.isGeometry) {
                        var o = a.vertices;
                        for (e = 0, i = o.length; e < i; e++) n.copy( o[e] ), n.applyMatrix4( r.matrixWorld ), t.expandByPoint( n )
                    } else if (a.isBufferGeometry) {
                        var s = a.attributes.position;
                        if (void 0 !== s) for (e = 0, i = s.count; e < i; e++) n.fromBufferAttribute( s, e ).applyMatrix4( r.matrixWorld ), t.expandByPoint( n )
                    }
                }
            }

            return function ( e ) {
                return t = this, e.updateMatrixWorld( !0 ), e.traverse( r ), this
            }
        }(), containsPoint: function ( t ) {
            return !( t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z )
        }, containsBox: function ( t ) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        }, getParameter: function ( t, e ) {
            return ( e || new Me ).set( ( t.x - this.min.x ) / ( this.max.x - this.min.x ), ( t.y - this.min.y ) / ( this.max.y - this.min.y ), ( t.z - this.min.z ) / ( this.max.z - this.min.z ) )
        }, intersectsBox: function ( t ) {
            return !( t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z )
        }, intersectsSphere: ( Li = new Me, function ( t ) {
            return this.clampPoint( t.center, Li ), Li.distanceToSquared( t.center ) <= t.radius * t.radius
        } ), intersectsPlane: function ( t ) {
            var e, i;
            return t.normal.x > 0 ? ( e = t.normal.x * this.min.x, i = t.normal.x * this.max.x ) : ( e = t.normal.x * this.max.x, i = t.normal.x * this.min.x ), t.normal.y > 0 ? ( e += t.normal.y * this.min.y, i += t.normal.y * this.max.y ) : ( e += t.normal.y * this.max.y, i += t.normal.y * this.min.y ), t.normal.z > 0 ? ( e += t.normal.z * this.min.z, i += t.normal.z * this.max.z ) : ( e += t.normal.z * this.max.z, i += t.normal.z * this.min.z ), e <= t.constant && i >= t.constant
        }, clampPoint: function ( t, e ) {
            return ( e || new Me ).copy( t ).clamp( this.min, this.max )
        }, distanceToPoint: function () {
            var t = new Me;
            return function ( e ) {
                return t.copy( e ).clamp( this.min, this.max ).sub( e ).length()
            }
        }(), getBoundingSphere: function () {
            var t = new Me;
            return function ( e ) {
                var i = e || new zi;
                return this.getCenter( i.center ), i.radius = .5 * this.getSize( t ).length(), i
            }
        }(), intersect: function ( t ) {
            return this.min.max( t.min ), this.max.min( t.max ), this.isEmpty() && this.makeEmpty(), this
        }, union: function ( t ) {
            return this.min.min( t.min ), this.max.max( t.max ), this
        }, applyMatrix4: ( Ai = [new Me, new Me, new Me, new Me, new Me, new Me, new Me, new Me], function ( t ) {
            return this.isEmpty() ? this : ( Ai[0].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( t ), Ai[1].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( t ), Ai[2].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( t ), Ai[3].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( t ), Ai[4].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( t ), Ai[5].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( t ), Ai[6].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( t ), Ai[7].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( t ), this.setFromPoints( Ai ), this )
        } ), translate: function ( t ) {
            return this.min.add( t ), this.max.add( t ), this
        }, equals: function ( t ) {
            return t.min.equals( this.min ) && t.max.equals( this.max )
        }
    } ), Object.assign( zi.prototype, {
        set: function ( t, e ) {
            return this.center.copy( t ), this.radius = e, this
        }, setFromPoints: function () {
            var t = new Fi;
            return function ( e, i ) {
                var n = this.center;
                void 0 !== i ? n.copy( i ) : t.setFromPoints( e ).getCenter( n );
                for (var r = 0, a = 0, o = e.length; a < o; a++) r = Math.max( r, n.distanceToSquared( e[a] ) );
                return this.radius = Math.sqrt( r ), this
            }
        }(), clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.center.copy( t.center ), this.radius = t.radius, this
        }, empty: function () {
            return this.radius <= 0
        }, containsPoint: function ( t ) {
            return t.distanceToSquared( this.center ) <= this.radius * this.radius
        }, distanceToPoint: function ( t ) {
            return t.distanceTo( this.center ) - this.radius
        }, intersectsSphere: function ( t ) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared( this.center ) <= e * e
        }, intersectsBox: function ( t ) {
            return t.intersectsSphere( this )
        }, intersectsPlane: function ( t ) {
            return Math.abs( t.distanceToPoint( this.center ) ) <= this.radius
        }, clampPoint: function ( t, e ) {
            var i = this.center.distanceToSquared( t ), n = e || new Me;
            return n.copy( t ), i > this.radius * this.radius && ( n.sub( this.center ).normalize(), n.multiplyScalar( this.radius ).add( this.center ) ), n
        }, getBoundingBox: function ( t ) {
            var e = t || new Fi;
            return e.set( this.center, this.center ), e.expandByScalar( this.radius ), e
        }, applyMatrix4: function ( t ) {
            return this.center.applyMatrix4( t ), this.radius = this.radius * t.getMaxScaleOnAxis(), this
        }, translate: function ( t ) {
            return this.center.add( t ), this
        }, equals: function ( t ) {
            return t.center.equals( this.center ) && t.radius === this.radius
        }
    } ), Object.assign( Bi.prototype, {
        set: function ( t, e ) {
            return this.normal.copy( t ), this.constant = e, this
        }, setComponents: function ( t, e, i, n ) {
            return this.normal.set( t, e, i ), this.constant = n, this
        }, setFromNormalAndCoplanarPoint: function ( t, e ) {
            return this.normal.copy( t ), this.constant = -e.dot( this.normal ), this
        }, setFromCoplanarPoints: function () {
            var t = new Me, e = new Me;
            return function ( i, n, r ) {
                var a = t.subVectors( r, n ).cross( e.subVectors( i, n ) ).normalize();
                return this.setFromNormalAndCoplanarPoint( a, i ), this
            }
        }(), clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.normal.copy( t.normal ), this.constant = t.constant, this
        }, normalize: function () {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar( t ), this.constant *= t, this
        }, negate: function () {
            return this.constant *= -1, this.normal.negate(), this
        }, distanceToPoint: function ( t ) {
            return this.normal.dot( t ) + this.constant
        }, distanceToSphere: function ( t ) {
            return this.distanceToPoint( t.center ) - t.radius
        }, projectPoint: function ( t, e ) {
            return ( e || new Me ).copy( this.normal ).multiplyScalar( -this.distanceToPoint( t ) ).add( t )
        }, intersectLine: function () {
            var t = new Me;
            return function ( e, i ) {
                var n = i || new Me, r = e.delta( t ), a = this.normal.dot( r );
                if (0 === a) return 0 === this.distanceToPoint( e.start ) ? n.copy( e.start ) : void 0;
                var o = -( e.start.dot( this.normal ) + this.constant ) / a;
                return o < 0 || o > 1 ? void 0 : n.copy( r ).multiplyScalar( o ).add( e.start )
            }
        }(), intersectsLine: function ( t ) {
            var e = this.distanceToPoint( t.start ), i = this.distanceToPoint( t.end );
            return e < 0 && i > 0 || i < 0 && e > 0
        }, intersectsBox: function ( t ) {
            return t.intersectsPlane( this )
        }, intersectsSphere: function ( t ) {
            return t.intersectsPlane( this )
        }, coplanarPoint: function ( t ) {
            return ( t || new Me ).copy( this.normal ).multiplyScalar( -this.constant )
        }, applyMatrix4: function () {
            var t = new Me, e = new Ee;
            return function ( i, n ) {
                var r = n || e.getNormalMatrix( i ), a = this.coplanarPoint( t ).applyMatrix4( i ),
                    o = this.normal.applyMatrix3( r ).normalize();
                return this.constant = -a.dot( o ), this
            }
        }(), translate: function ( t ) {
            return this.constant -= t.dot( this.normal ), this
        }, equals: function ( t ) {
            return t.normal.equals( this.normal ) && t.constant === this.constant
        }
    } ), Object.assign( ki.prototype, {
        set: function ( t, e, i, n, r, a ) {
            var o = this.planes;
            return o[0].copy( t ), o[1].copy( e ), o[2].copy( i ), o[3].copy( n ), o[4].copy( r ), o[5].copy( a ), this
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            for (var e = this.planes, i = 0; i < 6; i++) e[i].copy( t.planes[i] );
            return this
        }, setFromMatrix: function ( t ) {
            var e = this.planes, i = t.elements, n = i[0], r = i[1], a = i[2], o = i[3], s = i[4], c = i[5], h = i[6],
                l = i[7], u = i[8], p = i[9], d = i[10], f = i[11], m = i[12], v = i[13], g = i[14], y = i[15];
            return e[0].setComponents( o - n, l - s, f - u, y - m ).normalize(), e[1].setComponents( o + n, l + s, f + u, y + m ).normalize(), e[2].setComponents( o + r, l + c, f + p, y + v ).normalize(), e[3].setComponents( o - r, l - c, f - p, y - v ).normalize(), e[4].setComponents( o - a, l - h, f - d, y - g ).normalize(), e[5].setComponents( o + a, l + h, f + d, y + g ).normalize(), this
        }, intersectsObject: ( Ci = new zi, function ( t ) {
            var e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(), Ci.copy( e.boundingSphere ).applyMatrix4( t.matrixWorld ), this.intersectsSphere( Ci )
        } ), intersectsSprite: function () {
            var t = new zi;
            return function ( e ) {
                return t.center.set( 0, 0, 0 ), t.radius = .7071067811865476, t.applyMatrix4( e.matrixWorld ), this.intersectsSphere( t )
            }
        }(), intersectsSphere: function ( t ) {
            for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) {
                if (e[r].distanceToPoint( i ) < n) return !1
            }
            return !0
        }, intersectsBox: ( Ri = new Me, Pi = new Me, function ( t ) {
            for (var e = this.planes, i = 0; i < 6; i++) {
                var n = e[i];
                Ri.x = n.normal.x > 0 ? t.min.x : t.max.x, Pi.x = n.normal.x > 0 ? t.max.x : t.min.x, Ri.y = n.normal.y > 0 ? t.min.y : t.max.y, Pi.y = n.normal.y > 0 ? t.max.y : t.min.y, Ri.z = n.normal.z > 0 ? t.min.z : t.max.z, Pi.z = n.normal.z > 0 ? t.max.z : t.min.z;
                var r = n.distanceToPoint( Ri ), a = n.distanceToPoint( Pi );
                if (r < 0 && a < 0) return !1
            }
            return !0
        } ), containsPoint: function ( t ) {
            for (var e = this.planes, i = 0; i < 6; i++) if (e[i].distanceToPoint( t ) < 0) return !1;
            return !0
        }
    } ), Hi.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'], Hi.DefaultOrder = 'XYZ', Object.defineProperties( Hi.prototype, {
        x: {
            get: function () {
                return this._x
            }, set: function ( t ) {
                this._x = t, this.onChangeCallback()
            }
        }, y: {
            get: function () {
                return this._y
            }, set: function ( t ) {
                this._y = t, this.onChangeCallback()
            }
        }, z: {
            get: function () {
                return this._z
            }, set: function ( t ) {
                this._z = t, this.onChangeCallback()
            }
        }, order: {
            get: function () {
                return this._order
            }, set: function ( t ) {
                this._order = t, this.onChangeCallback()
            }
        }
    } ), Object.assign( Hi.prototype, {
        isEuler: !0, set: function ( t, e, i, n ) {
            return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this
        }, clone: function () {
            return new this.constructor( this._x, this._y, this._z, this._order )
        }, copy: function ( t ) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
        }, setFromRotationMatrix: function ( t, e, i ) {
            var n = xe.clamp, r = t.elements, a = r[0], o = r[4], s = r[8], c = r[1], h = r[5], l = r[9], u = r[2],
                p = r[6], d = r[10];
            return 'XYZ' === ( e = e || this._order ) ? ( this._y = Math.asin( n( s, -1, 1 ) ), Math.abs( s ) < .99999 ? ( this._x = Math.atan2( -l, d ), this._z = Math.atan2( -o, a ) ) : ( this._x = Math.atan2( p, h ), this._z = 0 ) ) : 'YXZ' === e ? ( this._x = Math.asin( -n( l, -1, 1 ) ), Math.abs( l ) < .99999 ? ( this._y = Math.atan2( s, d ), this._z = Math.atan2( c, h ) ) : ( this._y = Math.atan2( -u, a ), this._z = 0 ) ) : 'ZXY' === e ? ( this._x = Math.asin( n( p, -1, 1 ) ), Math.abs( p ) < .99999 ? ( this._y = Math.atan2( -u, d ), this._z = Math.atan2( -o, h ) ) : ( this._y = 0, this._z = Math.atan2( c, a ) ) ) : 'ZYX' === e ? ( this._y = Math.asin( -n( u, -1, 1 ) ), Math.abs( u ) < .99999 ? ( this._x = Math.atan2( p, d ), this._z = Math.atan2( c, a ) ) : ( this._x = 0, this._z = Math.atan2( -o, h ) ) ) : 'YZX' === e ? ( this._z = Math.asin( n( c, -1, 1 ) ), Math.abs( c ) < .99999 ? ( this._x = Math.atan2( -l, h ), this._y = Math.atan2( -u, a ) ) : ( this._x = 0, this._y = Math.atan2( s, d ) ) ) : 'XZY' === e ? ( this._z = Math.asin( -n( o, -1, 1 ) ), Math.abs( o ) < .99999 ? ( this._x = Math.atan2( p, h ), this._y = Math.atan2( s, a ) ) : ( this._x = Math.atan2( -l, d ), this._y = 0 ) ) : console.warn( 'THREE.Euler: .setFromRotationMatrix() given unsupported order: ' + e ), this._order = e, !1 !== i && this.onChangeCallback(), this
        }, setFromQuaternion: function () {
            var t = new we;
            return function ( e, i, n ) {
                return t.makeRotationFromQuaternion( e ), this.setFromRotationMatrix( t, i, n )
            }
        }(), setFromVector3: function ( t, e ) {
            return this.set( t.x, t.y, t.z, e || this._order )
        }, reorder: ( Ni = new _e, function ( t ) {
            return Ni.setFromEuler( this ), this.setFromQuaternion( Ni, t )
        } ), equals: function ( t ) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        }, fromArray: function ( t ) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && ( this._order = t[3] ), this.onChangeCallback(), this
        }, toArray: function ( t, e ) {
            return void 0 === t && ( t = [] ), void 0 === e && ( e = 0 ), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
        }, toVector3: function ( t ) {
            return t ? t.set( this._x, this._y, this._z ) : new Me( this._x, this._y, this._z )
        }, onChange: function ( t ) {
            return this.onChangeCallback = t, this
        }, onChangeCallback: function () {
        }
    } ), Object.assign( Vi.prototype, {
        set: function ( t ) {
            this.mask = 1 << t | 0
        }, enable: function ( t ) {
            this.mask |= 1 << t | 0
        }, toggle: function ( t ) {
            this.mask ^= 1 << t | 0
        }, disable: function ( t ) {
            this.mask &= ~( 1 << t | 0 )
        }, test: function ( t ) {
            return 0 != ( this.mask & t.mask )
        }
    } );
    var Wi, Xi, qi, Yi, Zi = 0;

    function Ji() {
        Object.defineProperty( this, 'id', { value: Zi++ } ), this.uuid = xe.generateUUID(), this.name = '', this.type = 'Object3D', this.parent = null, this.children = [], this.up = Ji.DefaultUp.clone();
        var t = new Me, e = new Hi, i = new _e, n = new Me( 1, 1, 1 );
        e.onChange( function () {
            i.setFromEuler( e, !1 )
        } ), i.onChange( function () {
            e.setFromQuaternion( i, void 0, !1 )
        } ), Object.defineProperties( this, {
            position: { enumerable: !0, value: t },
            rotation: { enumerable: !0, value: e },
            quaternion: { enumerable: !0, value: i },
            scale: { enumerable: !0, value: n },
            modelViewMatrix: { value: new we },
            normalMatrix: { value: new Ee }
        } ), this.matrix = new we, this.matrixWorld = new we, this.matrixAutoUpdate = Ji.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Vi, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }

    function Ki() {
        Ji.call( this ), this.type = 'Camera', this.matrixWorldInverse = new we, this.projectionMatrix = new we
    }

    function Qi( t, e, i, n, r, a ) {
        Ki.call( this ), this.type = 'OrthographicCamera', this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
    }

    function $i( t, e, i, n, r, a ) {
        this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new Me, this.vertexNormals = Array.isArray( n ) ? n : [], this.color = r && r.isColor ? r : new yi, this.vertexColors = Array.isArray( r ) ? r : [], this.materialIndex = void 0 !== a ? a : 0
    }

    Ji.DefaultUp = new Me( 0, 1, 0 ), Ji.DefaultMatrixAutoUpdate = !0, Object.assign( Ji.prototype, i.prototype, {
        isObject3D: !0, onBeforeRender: function () {
        }, onAfterRender: function () {
        }, applyMatrix: function ( t ) {
            this.matrix.multiplyMatrices( t, this.matrix ), this.matrix.decompose( this.position, this.quaternion, this.scale )
        }, applyQuaternion: function ( t ) {
            return this.quaternion.premultiply( t ), this
        }, setRotationFromAxisAngle: function ( t, e ) {
            this.quaternion.setFromAxisAngle( t, e )
        }, setRotationFromEuler: function ( t ) {
            this.quaternion.setFromEuler( t, !0 )
        }, setRotationFromMatrix: function ( t ) {
            this.quaternion.setFromRotationMatrix( t )
        }, setRotationFromQuaternion: function ( t ) {
            this.quaternion.copy( t )
        }, rotateOnAxis: ( Yi = new _e, function ( t, e ) {
            return Yi.setFromAxisAngle( t, e ), this.quaternion.multiply( Yi ), this
        } ), rotateOnWorldAxis: function () {
            var t = new _e;
            return function ( e, i ) {
                return t.setFromAxisAngle( e, i ), this.quaternion.premultiply( t ), this
            }
        }(), rotateX: function () {
            var t = new Me( 1, 0, 0 );
            return function ( e ) {
                return this.rotateOnAxis( t, e )
            }
        }(), rotateY: function () {
            var t = new Me( 0, 1, 0 );
            return function ( e ) {
                return this.rotateOnAxis( t, e )
            }
        }(), rotateZ: function () {
            var t = new Me( 0, 0, 1 );
            return function ( e ) {
                return this.rotateOnAxis( t, e )
            }
        }(), translateOnAxis: function () {
            var t = new Me;
            return function ( e, i ) {
                return t.copy( e ).applyQuaternion( this.quaternion ), this.position.add( t.multiplyScalar( i ) ), this
            }
        }(), translateX: function () {
            var t = new Me( 1, 0, 0 );
            return function ( e ) {
                return this.translateOnAxis( t, e )
            }
        }(), translateY: function () {
            var t = new Me( 0, 1, 0 );
            return function ( e ) {
                return this.translateOnAxis( t, e )
            }
        }(), translateZ: function () {
            var t = new Me( 0, 0, 1 );
            return function ( e ) {
                return this.translateOnAxis( t, e )
            }
        }(), localToWorld: function ( t ) {
            return t.applyMatrix4( this.matrixWorld )
        }, worldToLocal: ( qi = new we, function ( t ) {
            return t.applyMatrix4( qi.getInverse( this.matrixWorld ) )
        } ), lookAt: function () {
            var t = new we, e = new Me;
            return function ( i, n, r ) {
                i.isVector3 ? e.copy( i ) : e.set( i, n, r ), this.isCamera ? t.lookAt( this.position, e, this.up ) : t.lookAt( e, this.position, this.up ), this.quaternion.setFromRotationMatrix( t )
            }
        }(), add: function ( t ) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.add( arguments[e] );
                return this
            }
            return t === this ? ( console.error( 'THREE.Object3D.add: object can\'t be added as a child of itself.', t ), this ) : ( t && t.isObject3D ? ( null !== t.parent && t.parent.remove( t ), t.parent = this, t.dispatchEvent( { type: 'added' } ), this.children.push( t ) ) : console.error( 'THREE.Object3D.add: object not an instance of THREE.Object3D.', t ), this )
        }, remove: function ( t ) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.remove( arguments[e] );
                return this
            }
            var i = this.children.indexOf( t );
            return -1 !== i && ( t.parent = null, t.dispatchEvent( { type: 'removed' } ), this.children.splice( i, 1 ) ), this
        }, getObjectById: function ( t ) {
            return this.getObjectByProperty( 'id', t )
        }, getObjectByName: function ( t ) {
            return this.getObjectByProperty( 'name', t )
        }, getObjectByProperty: function ( t, e ) {
            if (this[t] === e) return this;
            for (var i = 0, n = this.children.length; i < n; i++) {
                var r = this.children[i].getObjectByProperty( t, e );
                if (void 0 !== r) return r
            }
        }, getWorldPosition: function ( t ) {
            var e = t || new Me;
            return this.updateMatrixWorld( !0 ), e.setFromMatrixPosition( this.matrixWorld )
        }, getWorldQuaternion: ( Wi = new Me, Xi = new Me, function ( t ) {
            var e = t || new _e;
            return this.updateMatrixWorld( !0 ), this.matrixWorld.decompose( Wi, e, Xi ), e
        } ), getWorldRotation: function () {
            var t = new _e;
            return function ( e ) {
                var i = e || new Hi;
                return this.getWorldQuaternion( t ), i.setFromQuaternion( t, this.rotation.order, !1 )
            }
        }(), getWorldScale: function () {
            var t = new Me, e = new _e;
            return function ( i ) {
                var n = i || new Me;
                return this.updateMatrixWorld( !0 ), this.matrixWorld.decompose( t, e, n ), n
            }
        }(), getWorldDirection: function () {
            var t = new _e;
            return function ( e ) {
                var i = e || new Me;
                return this.getWorldQuaternion( t ), i.set( 0, 0, 1 ).applyQuaternion( t )
            }
        }(), raycast: function () {
        }, traverse: function ( t ) {
            t( this );
            for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse( t )
        }, traverseVisible: function ( t ) {
            if (!1 !== this.visible) {
                t( this );
                for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible( t )
            }
        }, traverseAncestors: function ( t ) {
            var e = this.parent;
            null !== e && ( t( e ), e.traverseAncestors( t ) )
        }, updateMatrix: function () {
            this.matrix.compose( this.position, this.quaternion, this.scale ), this.matrixWorldNeedsUpdate = !0
        }, updateMatrixWorld: function ( t ) {
            this.matrixAutoUpdate && this.updateMatrix(), ( this.matrixWorldNeedsUpdate || t ) && ( null === this.parent ? this.matrixWorld.copy( this.matrix ) : this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix ), this.matrixWorldNeedsUpdate = !1, t = !0 );
            for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld( t )
        }, toJSON: function ( t ) {
            var e = void 0 === t || 'string' == typeof t, i = {};
            e && ( t = { geometries: {}, materials: {}, textures: {}, images: {} }, i.metadata = {
                version: 4.5,
                type: 'Object',
                generator: 'Object3D.toJSON'
            } );
            var n = {};

            function r( e, i ) {
                return void 0 === e[i.uuid] && ( e[i.uuid] = i.toJSON( t ) ), i.uuid
            }

            if (n.uuid = this.uuid, n.type = this.type, '' !== this.name && ( n.name = this.name ), !0 === this.castShadow && ( n.castShadow = !0 ), !0 === this.receiveShadow && ( n.receiveShadow = !0 ), !1 === this.visible && ( n.visible = !1 ), '{}' !== JSON.stringify( this.userData ) && ( n.userData = this.userData ), n.matrix = this.matrix.toArray(), void 0 !== this.geometry && ( n.geometry = r( t.geometries, this.geometry ) ), void 0 !== this.material) {
                if (Array.isArray( this.material )) {
                    for (var a = [], o = 0, s = this.material.length; o < s; o++) a.push( r( t.materials, this.material[o] ) );
                    n.material = a
                } else {
                    n.material = r( t.materials, this.material );
                }
            }
            if (this.children.length > 0) {
                n.children = [];
                for (o = 0; o < this.children.length; o++) n.children.push( this.children[o].toJSON( t ).object )
            }
            if (e) {
                var c = p( t.geometries ), h = p( t.materials ), l = p( t.textures ), u = p( t.images );
                c.length > 0 && ( i.geometries = c ), h.length > 0 && ( i.materials = h ), l.length > 0 && ( i.textures = l ), u.length > 0 && ( i.images = u )
            }
            return i.object = n, i;

            function p( t ) {
                var e = [];
                for (var i in t) {
                    var n = t[i];
                    delete n.metadata, e.push( n )
                }
                return e
            }
        }, clone: function ( t ) {
            return ( new this.constructor ).copy( this, t )
        }, copy: function ( t, e ) {
            if (void 0 === e && ( e = !0 ), this.name = t.name, this.up.copy( t.up ), this.position.copy( t.position ), this.quaternion.copy( t.quaternion ), this.scale.copy( t.scale ), this.matrix.copy( t.matrix ), this.matrixWorld.copy( t.matrixWorld ), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse( JSON.stringify( t.userData ) ), !0 === e) {
                for (var i = 0; i < t.children.length; i++) {
                    var n = t.children[i];
                    this.add( n.clone() )
                }
            }
            return this
        }
    } ), Ki.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: Ki,
        isCamera: !0,
        copy: function ( t, e ) {
            return Ji.prototype.copy.call( this, t, e ), this.matrixWorldInverse.copy( t.matrixWorldInverse ), this.projectionMatrix.copy( t.projectionMatrix ), this
        },
        getWorldDirection: function () {
            var t = new _e;
            return function ( e ) {
                var i = e || new Me;
                return this.getWorldQuaternion( t ), i.set( 0, 0, -1 ).applyQuaternion( t )
            }
        }(),
        updateMatrixWorld: function ( t ) {
            Ji.prototype.updateMatrixWorld.call( this, t ), this.matrixWorldInverse.getInverse( this.matrixWorld )
        },
        clone: function () {
            return ( new this.constructor ).copy( this )
        }
    } ), Qi.prototype = Object.assign( Object.create( Ki.prototype ), {
        constructor: Qi, isOrthographicCamera: !0, copy: function ( t, e ) {
            return Ki.prototype.copy.call( this, t, e ), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign( {}, t.view ), this
        }, setViewOffset: function ( t, e, i, n, r, a ) {
            null === this.view && ( this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            } ), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
        }, clearViewOffset: function () {
            null !== this.view && ( this.view.enabled = !1 ), this.updateProjectionMatrix()
        }, updateProjectionMatrix: function () {
            var t = ( this.right - this.left ) / ( 2 * this.zoom ), e = ( this.top - this.bottom ) / ( 2 * this.zoom ),
                i = ( this.right + this.left ) / 2, n = ( this.top + this.bottom ) / 2, r = i - t, a = i + t, o = n + e,
                s = n - e;
            if (null !== this.view && this.view.enabled) {
                var c = this.zoom / ( this.view.width / this.view.fullWidth ),
                    h = this.zoom / ( this.view.height / this.view.fullHeight ),
                    l = ( this.right - this.left ) / this.view.width, u = ( this.top - this.bottom ) / this.view.height;
                a = ( r += l * ( this.view.offsetX / c ) ) + l * ( this.view.width / c ), s = ( o -= u * ( this.view.offsetY / h ) ) - u * ( this.view.height / h )
            }
            this.projectionMatrix.makeOrthographic( r, a, o, s, this.near, this.far )
        }, toJSON: function ( t ) {
            var e = Ji.prototype.toJSON.call( this, t );
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && ( e.object.view = Object.assign( {}, this.view ) ), e
        }
    } ), Object.assign( $i.prototype, {
        clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy( t.normal ), this.color.copy( t.color ), this.materialIndex = t.materialIndex;
            for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    } );
    var tn, en = 0;

    function nn() {
        Object.defineProperty( this, 'id', { value: en += 2 } ), this.uuid = xe.generateUUID(), this.name = '', this.type = 'Geometry', this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function rn( t, e, i ) {
        if (Array.isArray( t )) throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );
        this.uuid = xe.generateUUID(), this.name = '', this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function () {
        }, this.version = 0
    }

    function an( t, e, i ) {
        rn.call( this, new Int8Array( t ), e, i )
    }

    function on( t, e, i ) {
        rn.call( this, new Uint8Array( t ), e, i )
    }

    function sn( t, e, i ) {
        rn.call( this, new Uint8ClampedArray( t ), e, i )
    }

    function cn( t, e, i ) {
        rn.call( this, new Int16Array( t ), e, i )
    }

    function hn( t, e, i ) {
        rn.call( this, new Uint16Array( t ), e, i )
    }

    function ln( t, e, i ) {
        rn.call( this, new Int32Array( t ), e, i )
    }

    function un( t, e, i ) {
        rn.call( this, new Uint32Array( t ), e, i )
    }

    function pn( t, e, i ) {
        rn.call( this, new Float32Array( t ), e, i )
    }

    function dn( t, e, i ) {
        rn.call( this, new Float64Array( t ), e, i )
    }

    function fn() {
        this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function mn( t ) {
        if (0 === t.length) return -1 / 0;
        for (var e = t[0], i = 1, n = t.length; i < n; ++i) t[i] > e && ( e = t[i] );
        return e
    }

    Object.assign( nn.prototype, i.prototype, {
        isGeometry: !0, applyMatrix: function ( t ) {
            for (var e = ( new Ee ).getNormalMatrix( t ), i = 0, n = this.vertices.length; i < n; i++) {
                this.vertices[i].applyMatrix4( t )
            }
            for (i = 0, n = this.faces.length; i < n; i++) {
                var r = this.faces[i];
                r.normal.applyMatrix3( e ).normalize();
                for (var a = 0, o = r.vertexNormals.length; a < o; a++) r.vertexNormals[a].applyMatrix3( e ).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
        }, rotateX: function () {
            var t = new we;
            return function ( e ) {
                return t.makeRotationX( e ), this.applyMatrix( t ), this
            }
        }(), rotateY: function () {
            var t = new we;
            return function ( e ) {
                return t.makeRotationY( e ), this.applyMatrix( t ), this
            }
        }(), rotateZ: function () {
            var t = new we;
            return function ( e ) {
                return t.makeRotationZ( e ), this.applyMatrix( t ), this
            }
        }(), translate: function () {
            var t = new we;
            return function ( e, i, n ) {
                return t.makeTranslation( e, i, n ), this.applyMatrix( t ), this
            }
        }(), scale: function () {
            var t = new we;
            return function ( e, i, n ) {
                return t.makeScale( e, i, n ), this.applyMatrix( t ), this
            }
        }(), lookAt: ( tn = new Ji, function ( t ) {
            tn.lookAt( t ), tn.updateMatrix(), this.applyMatrix( tn.matrix )
        } ), fromBufferGeometry: function ( t ) {
            var e = this, i = null !== t.index ? t.index.array : void 0, n = t.attributes, r = n.position.array,
                a = void 0 !== n.normal ? n.normal.array : void 0, o = void 0 !== n.color ? n.color.array : void 0,
                s = void 0 !== n.uv ? n.uv.array : void 0, c = void 0 !== n.uv2 ? n.uv2.array : void 0;
            void 0 !== c && ( this.faceVertexUvs[1] = [] );
            for (var h = [], l = [], u = [], p = 0, d = 0; p < r.length; p += 3, d += 2) e.vertices.push( new Me( r[p], r[p + 1], r[p + 2] ) ), void 0 !== a && h.push( new Me( a[p], a[p + 1], a[p + 2] ) ), void 0 !== o && e.colors.push( new yi( o[p], o[p + 1], o[p + 2] ) ), void 0 !== s && l.push( new be( s[d], s[d + 1] ) ), void 0 !== c && u.push( new be( c[d], c[d + 1] ) );

            function f( t, i, n, r ) {
                var p = new $i( t, i, n, void 0 !== a ? [h[t].clone(), h[i].clone(), h[n].clone()] : [], void 0 !== o ? [e.colors[t].clone(), e.colors[i].clone(), e.colors[n].clone()] : [], r );
                e.faces.push( p ), void 0 !== s && e.faceVertexUvs[0].push( [l[t].clone(), l[i].clone(), l[n].clone()] ), void 0 !== c && e.faceVertexUvs[1].push( [u[t].clone(), u[i].clone(), u[n].clone()] )
            }

            var m = t.groups;
            if (m.length > 0) for (p = 0; p < m.length; p++) for (var v = m[p], g = v.start, y = ( d = g, g + v.count ); d < y; d += 3) void 0 !== i ? f( i[d], i[d + 1], i[d + 2], v.materialIndex ) : f( d, d + 1, d + 2, v.materialIndex ); else if (void 0 !== i) for (p = 0; p < i.length; p += 3) f( i[p], i[p + 1], i[p + 2] ); else for (p = 0; p < r.length / 3; p += 3) f( p, p + 1, p + 2 );
            return this.computeFaceNormals(), null !== t.boundingBox && ( this.boundingBox = t.boundingBox.clone() ), null !== t.boundingSphere && ( this.boundingSphere = t.boundingSphere.clone() ), this
        }, center: function () {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate( t.x, t.y, t.z ), t
        }, normalize: function () {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center, e = this.boundingSphere.radius, i = 0 === e ? 1 : 1 / e, n = new we;
            return n.set( i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1 ), this.applyMatrix( n ), this
        }, computeFaceNormals: function () {
            for (var t = new Me, e = new Me, i = 0, n = this.faces.length; i < n; i++) {
                var r = this.faces[i], a = this.vertices[r.a], o = this.vertices[r.b], s = this.vertices[r.c];
                t.subVectors( s, o ), e.subVectors( a, o ), t.cross( e ), t.normalize(), r.normal.copy( t )
            }
        }, computeVertexNormals: function ( t ) {
            var e, i, n, r, a, o;
            for (void 0 === t && ( t = !0 ), o = new Array( this.vertices.length ), e = 0, i = this.vertices.length; e < i; e++) o[e] = new Me;
            if (t) {
                var s, c, h, l = new Me, u = new Me;
                for (n = 0, r = this.faces.length; n < r; n++) a = this.faces[n], s = this.vertices[a.a], c = this.vertices[a.b], h = this.vertices[a.c], l.subVectors( h, c ), u.subVectors( s, c ), l.cross( u ), o[a.a].add( l ), o[a.b].add( l ), o[a.c].add( l )
            } else {
                for (this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) o[( a = this.faces[n] ).a].add( a.normal ), o[a.b].add( a.normal ), o[a.c].add( a.normal );
            }
            for (e = 0, i = this.vertices.length; e < i; e++) o[e].normalize();
            for (n = 0, r = this.faces.length; n < r; n++) {
                var p = ( a = this.faces[n] ).vertexNormals;
                3 === p.length ? ( p[0].copy( o[a.a] ), p[1].copy( o[a.b] ), p[2].copy( o[a.c] ) ) : ( p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone() )
            }
            this.faces.length > 0 && ( this.normalsNeedUpdate = !0 )
        }, computeFlatVertexNormals: function () {
            var t, e, i;
            for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
                var n = ( i = this.faces[t] ).vertexNormals;
                3 === n.length ? ( n[0].copy( i.normal ), n[1].copy( i.normal ), n[2].copy( i.normal ) ) : ( n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone() )
            }
            this.faces.length > 0 && ( this.normalsNeedUpdate = !0 )
        }, computeMorphNormals: function () {
            var t, e, i, n, r;
            for (i = 0, n = this.faces.length; i < n; i++) for (( r = this.faces[i] ).__originalFaceNormal ? r.__originalFaceNormal.copy( r.normal ) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || ( r.__originalVertexNormals = [] ), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy( r.vertexNormals[t] ) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
            var a = new nn;
            for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                    var o = this.morphNormals[t].faceNormals, s = this.morphNormals[t].vertexNormals;
                    for (i = 0, n = this.faces.length; i < n; i++) {
                        c = new Me, h = {
                            a: new Me,
                            b: new Me,
                            c: new Me
                        }, o.push( c ), s.push( h )
                    }
                }
                var c, h, l = this.morphNormals[t];
                for (a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals(), i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], c = l.faceNormals[i], h = l.vertexNormals[i], c.copy( r.normal ), h.a.copy( r.vertexNormals[0] ), h.b.copy( r.vertexNormals[1] ), h.c.copy( r.vertexNormals[2] )
            }
            for (i = 0, n = this.faces.length; i < n; i++) ( r = this.faces[i] ).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
        }, computeLineDistances: function () {
            for (var t = 0, e = this.vertices, i = 0, n = e.length; i < n; i++) i > 0 && ( t += e[i].distanceTo( e[i - 1] ) ), this.lineDistances[i] = t
        }, computeBoundingBox: function () {
            null === this.boundingBox && ( this.boundingBox = new Fi ), this.boundingBox.setFromPoints( this.vertices )
        }, computeBoundingSphere: function () {
            null === this.boundingSphere && ( this.boundingSphere = new zi ), this.boundingSphere.setFromPoints( this.vertices )
        }, merge: function ( t, e, i ) {
            if (t && t.isGeometry) {
                var n, r = this.vertices.length, a = this.vertices, o = t.vertices, s = this.faces, c = t.faces,
                    h = this.faceVertexUvs[0], l = t.faceVertexUvs[0], u = this.colors, p = t.colors;
                void 0 === i && ( i = 0 ), void 0 !== e && ( n = ( new Ee ).getNormalMatrix( e ) );
                for (var d = 0, f = o.length; d < f; d++) {
                    var m = o[d].clone();
                    void 0 !== e && m.applyMatrix4( e ), a.push( m )
                }
                for (d = 0, f = p.length; d < f; d++) u.push( p[d].clone() );
                for (d = 0, f = c.length; d < f; d++) {
                    var v, g, y, x = c[d], b = x.vertexNormals, w = x.vertexColors;
                    ( v = new $i( x.a + r, x.b + r, x.c + r ) ).normal.copy( x.normal ), void 0 !== n && v.normal.applyMatrix3( n ).normalize();
                    for (var _ = 0, M = b.length; _ < M; _++) g = b[_].clone(), void 0 !== n && g.applyMatrix3( n ).normalize(), v.vertexNormals.push( g );
                    v.color.copy( x.color );
                    for (_ = 0, M = w.length; _ < M; _++) y = w[_], v.vertexColors.push( y.clone() );
                    v.materialIndex = x.materialIndex + i, s.push( v )
                }
                for (d = 0, f = l.length; d < f; d++) {
                    var E = l[d], T = [];
                    if (void 0 !== E) {
                        for (_ = 0, M = E.length; _ < M; _++) T.push( E[_].clone() );
                        h.push( T )
                    }
                }
            } else {
                console.error( 'THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.', t )
            }
        }, mergeMesh: function ( t ) {
            t && t.isMesh ? ( t.matrixAutoUpdate && t.updateMatrix(), this.merge( t.geometry, t.matrix ) ) : console.error( 'THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.', t )
        }, mergeVertices: function () {
            var t, e, i, n, r, a, o, s, c = {}, h = [], l = [], u = Math.pow( 10, 4 );
            for (i = 0, n = this.vertices.length; i < n; i++) t = this.vertices[i], void 0 === c[e = Math.round( t.x * u ) + '_' + Math.round( t.y * u ) + '_' + Math.round( t.z * u )] ? ( c[e] = i, h.push( this.vertices[i] ), l[i] = h.length - 1 ) : l[i] = l[c[e]];
            var p = [];
            for (i = 0, n = this.faces.length; i < n; i++) {
                ( r = this.faces[i] ).a = l[r.a], r.b = l[r.b], r.c = l[r.c], a = [r.a, r.b, r.c];
                for (var d = 0; d < 3; d++) {
                    if (a[d] === a[( d + 1 ) % 3]) {
                        p.push( i );
                        break
                    }
                }
            }
            for (i = p.length - 1; i >= 0; i--) {
                var f = p[i];
                for (this.faces.splice( f, 1 ), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice( f, 1 )
            }
            var m = this.vertices.length - h.length;
            return this.vertices = h, m
        }, setFromPoints: function ( t ) {
            this.vertices = [];
            for (var e = 0, i = t.length; e < i; e++) {
                var n = t[e];
                this.vertices.push( new Me( n.x, n.y, n.z || 0 ) )
            }
            return this
        }, sortFacesByMaterialIndex: function () {
            for (var t = this.faces, e = t.length, i = 0; i < e; i++) t[i]._id = i;
            t.sort( function ( t, e ) {
                return t.materialIndex - e.materialIndex
            } );
            var n, r, a = this.faceVertexUvs[0], o = this.faceVertexUvs[1];
            a && a.length === e && ( n = [] ), o && o.length === e && ( r = [] );
            for (i = 0; i < e; i++) {
                var s = t[i]._id;
                n && n.push( a[s] ), r && r.push( o[s] )
            }
            n && ( this.faceVertexUvs[0] = n ), r && ( this.faceVertexUvs[1] = r )
        }, toJSON: function () {
            var t = { metadata: { version: 4.5, type: 'Geometry', generator: 'Geometry.toJSON' } };
            if (t.uuid = this.uuid, t.type = this.type, '' !== this.name && ( t.name = this.name ), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var i in e) void 0 !== e[i] && ( t[i] = e[i] );
                return t
            }
            for (var n = [], r = 0; r < this.vertices.length; r++) {
                var a = this.vertices[r];
                n.push( a.x, a.y, a.z )
            }
            var o = [], s = [], c = {}, h = [], l = {}, u = [], p = {};
            for (r = 0; r < this.faces.length; r++) {
                var d = this.faces[r], f = void 0 !== this.faceVertexUvs[0][r], m = d.normal.length() > 0,
                    v = d.vertexNormals.length > 0, g = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
                    y = d.vertexColors.length > 0, x = 0;
                if (x = M( x = M( x = M( x = M( x = M( x = M( x = M( x = M( x, 0, 0 ), 1, !0 ), 2, !1 ), 3, f ), 4, m ), 5, v ), 6, g ), 7, y ), o.push( x ), o.push( d.a, d.b, d.c ), o.push( d.materialIndex ), f) {
                    var b = this.faceVertexUvs[0][r];
                    o.push( S( b[0] ), S( b[1] ), S( b[2] ) )
                }
                if (m && o.push( E( d.normal ) ), v) {
                    var w = d.vertexNormals;
                    o.push( E( w[0] ), E( w[1] ), E( w[2] ) )
                }
                if (g && o.push( T( d.color ) ), y) {
                    var _ = d.vertexColors;
                    o.push( T( _[0] ), T( _[1] ), T( _[2] ) )
                }
            }

            function M( t, e, i ) {
                return i ? t | 1 << e : t & ~( 1 << e )
            }

            function E( t ) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== c[e] ? c[e] : ( c[e] = s.length / 3, s.push( t.x, t.y, t.z ), c[e] )
            }

            function T( t ) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== l[e] ? l[e] : ( l[e] = h.length, h.push( t.getHex() ), l[e] )
            }

            function S( t ) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== p[e] ? p[e] : ( p[e] = u.length / 2, u.push( t.x, t.y ), p[e] )
            }

            return t.data = {}, t.data.vertices = n, t.data.normals = s, h.length > 0 && ( t.data.colors = h ), u.length > 0 && ( t.data.uvs = [u] ), t.data.faces = o, t
        }, clone: function () {
            return ( new nn ).copy( this )
        }, copy: function ( t ) {
            var e, i, n, r, a, o;
            this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var s = t.vertices;
            for (e = 0, i = s.length; e < i; e++) this.vertices.push( s[e].clone() );
            var c = t.colors;
            for (e = 0, i = c.length; e < i; e++) this.colors.push( c[e].clone() );
            var h = t.faces;
            for (e = 0, i = h.length; e < i; e++) this.faces.push( h[e].clone() );
            for (e = 0, i = t.faceVertexUvs.length; e < i; e++) {
                var l = t.faceVertexUvs[e];
                for (void 0 === this.faceVertexUvs[e] && ( this.faceVertexUvs[e] = [] ), n = 0, r = l.length; n < r; n++) {
                    var u = l[n], p = [];
                    for (a = 0, o = u.length; a < o; a++) {
                        var d = u[a];
                        p.push( d.clone() )
                    }
                    this.faceVertexUvs[e].push( p )
                }
            }
            var f = t.morphTargets;
            for (e = 0, i = f.length; e < i; e++) {
                var m = {};
                if (m.name = f[e].name, void 0 !== f[e].vertices) for (m.vertices = [], n = 0, r = f[e].vertices.length; n < r; n++) m.vertices.push( f[e].vertices[n].clone() );
                if (void 0 !== f[e].normals) for (m.normals = [], n = 0, r = f[e].normals.length; n < r; n++) m.normals.push( f[e].normals[n].clone() );
                this.morphTargets.push( m )
            }
            var v = t.morphNormals;
            for (e = 0, i = v.length; e < i; e++) {
                var g = {};
                if (void 0 !== v[e].vertexNormals) {
                    for (g.vertexNormals = [], n = 0, r = v[e].vertexNormals.length; n < r; n++) {
                        var y = v[e].vertexNormals[n], x = {};
                        x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), g.vertexNormals.push( x )
                    }
                }
                if (void 0 !== v[e].faceNormals) for (g.faceNormals = [], n = 0, r = v[e].faceNormals.length; n < r; n++) g.faceNormals.push( v[e].faceNormals[n].clone() );
                this.morphNormals.push( g )
            }
            var b = t.skinWeights;
            for (e = 0, i = b.length; e < i; e++) this.skinWeights.push( b[e].clone() );
            var w = t.skinIndices;
            for (e = 0, i = w.length; e < i; e++) this.skinIndices.push( w[e].clone() );
            var _ = t.lineDistances;
            for (e = 0, i = _.length; e < i; e++) this.lineDistances.push( _[e] );
            var M = t.boundingBox;
            null !== M && ( this.boundingBox = M.clone() );
            var E = t.boundingSphere;
            return null !== E && ( this.boundingSphere = E.clone() ), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        }, dispose: function () {
            this.dispatchEvent( { type: 'dispose' } )
        }
    } ), Object.defineProperty( rn.prototype, 'needsUpdate', {
        set: function ( t ) {
            !0 === t && this.version++
        }
    } ), Object.assign( rn.prototype, {
        isBufferAttribute: !0, setArray: function ( t ) {
            if (Array.isArray( t )) throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );
            this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t
        }, setDynamic: function ( t ) {
            return this.dynamic = t, this
        }, copy: function ( t ) {
            return this.array = new t.array.constructor( t.array ), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
        }, copyAt: function ( t, e, i ) {
            t *= this.itemSize, i *= e.itemSize;
            for (var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
            return this
        }, copyArray: function ( t ) {
            return this.array.set( t ), this
        }, copyColorsArray: function ( t ) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && ( console.warn( 'THREE.BufferAttribute.copyColorsArray(): color is undefined', n ), a = new yi ), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b
            }
            return this
        }, copyIndicesArray: function ( t ) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                e[i++] = a.a, e[i++] = a.b, e[i++] = a.c
            }
            return this
        }, copyVector2sArray: function ( t ) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && ( console.warn( 'THREE.BufferAttribute.copyVector2sArray(): vector is undefined', n ), a = new be ), e[i++] = a.x, e[i++] = a.y
            }
            return this
        }, copyVector3sArray: function ( t ) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && ( console.warn( 'THREE.BufferAttribute.copyVector3sArray(): vector is undefined', n ), a = new Me ), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z
            }
            return this
        }, copyVector4sArray: function ( t ) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && ( console.warn( 'THREE.BufferAttribute.copyVector4sArray(): vector is undefined', n ), a = new Ae ), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z, e[i++] = a.w
            }
            return this
        }, set: function ( t, e ) {
            return void 0 === e && ( e = 0 ), this.array.set( t, e ), this
        }, getX: function ( t ) {
            return this.array[t * this.itemSize]
        }, setX: function ( t, e ) {
            return this.array[t * this.itemSize] = e, this
        }, getY: function ( t ) {
            return this.array[t * this.itemSize + 1]
        }, setY: function ( t, e ) {
            return this.array[t * this.itemSize + 1] = e, this
        }, getZ: function ( t ) {
            return this.array[t * this.itemSize + 2]
        }, setZ: function ( t, e ) {
            return this.array[t * this.itemSize + 2] = e, this
        }, getW: function ( t ) {
            return this.array[t * this.itemSize + 3]
        }, setW: function ( t, e ) {
            return this.array[t * this.itemSize + 3] = e, this
        }, setXY: function ( t, e, i ) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
        }, setXYZ: function ( t, e, i, n ) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
        }, setXYZW: function ( t, e, i, n, r ) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
        }, onUpload: function ( t ) {
            return this.onUploadCallback = t, this
        }, clone: function () {
            return new this.constructor( this.array, this.itemSize ).copy( this )
        }
    } ), an.prototype = Object.create( rn.prototype ), an.prototype.constructor = an, on.prototype = Object.create( rn.prototype ), on.prototype.constructor = on, sn.prototype = Object.create( rn.prototype ), sn.prototype.constructor = sn, cn.prototype = Object.create( rn.prototype ), cn.prototype.constructor = cn, hn.prototype = Object.create( rn.prototype ), hn.prototype.constructor = hn, ln.prototype = Object.create( rn.prototype ), ln.prototype.constructor = ln, un.prototype = Object.create( rn.prototype ), un.prototype.constructor = un, pn.prototype = Object.create( rn.prototype ), pn.prototype.constructor = pn, dn.prototype = Object.create( rn.prototype ), dn.prototype.constructor = dn, Object.assign( fn.prototype, {
        computeGroups: function ( t ) {
            for (var e, i = [], n = void 0, r = t.faces, a = 0; a < r.length; a++) {
                var o = r[a];
                o.materialIndex !== n && ( n = o.materialIndex, void 0 !== e && ( e.count = 3 * a - e.start, i.push( e ) ), e = {
                    start: 3 * a,
                    materialIndex: n
                } )
            }
            void 0 !== e && ( e.count = 3 * a - e.start, i.push( e ) ), this.groups = i
        }, fromGeometry: function ( t ) {
            var e, i = t.faces, n = t.vertices, r = t.faceVertexUvs, a = r[0] && r[0].length > 0,
                o = r[1] && r[1].length > 0, s = t.morphTargets, c = s.length;
            if (c > 0) {
                e = [];
                for (var h = 0; h < c; h++) e[h] = [];
                this.morphTargets.position = e
            }
            var l, u = t.morphNormals, p = u.length;
            if (p > 0) {
                l = [];
                for (h = 0; h < p; h++) l[h] = [];
                this.morphTargets.normal = l
            }
            var d = t.skinIndices, f = t.skinWeights, m = d.length === n.length, v = f.length === n.length;
            for (h = 0; h < i.length; h++) {
                var g = i[h];
                this.vertices.push( n[g.a], n[g.b], n[g.c] );
                var y = g.vertexNormals;
                if (3 === y.length) {
                    this.normals.push( y[0], y[1], y[2] );
                } else {
                    var x = g.normal;
                    this.normals.push( x, x, x )
                }
                var b, w = g.vertexColors;
                if (3 === w.length) {
                    this.colors.push( w[0], w[1], w[2] );
                } else {
                    var _ = g.color;
                    this.colors.push( _, _, _ )
                }
                if (!0 === a) void 0 !== ( b = r[0][h] ) ? this.uvs.push( b[0], b[1], b[2] ) : ( console.warn( 'THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ', h ), this.uvs.push( new be, new be, new be ) );
                if (!0 === o) void 0 !== ( b = r[1][h] ) ? this.uvs2.push( b[0], b[1], b[2] ) : ( console.warn( 'THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ', h ), this.uvs2.push( new be, new be, new be ) );
                for (var M = 0; M < c; M++) {
                    var E = s[M].vertices;
                    e[M].push( E[g.a], E[g.b], E[g.c] )
                }
                for (M = 0; M < p; M++) {
                    var T = u[M].vertexNormals[h];
                    l[M].push( T.a, T.b, T.c )
                }
                m && this.skinIndices.push( d[g.a], d[g.b], d[g.c] ), v && this.skinWeights.push( f[g.a], f[g.b], f[g.c] )
            }
            return this.computeGroups( t ), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        }
    } );
    var vn, gn, yn, xn, bn, wn, _n, Mn = 1;

    function En() {
        Object.defineProperty( this, 'id', { value: Mn += 2 } ), this.uuid = xe.generateUUID(), this.name = '', this.type = 'BufferGeometry', this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }
    }

    function Tn( t, e, i, n, r, a ) {
        nn.call( this ), this.type = 'BoxGeometry', this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        }, this.fromBufferGeometry( new Sn( t, e, i, n, r, a ) ), this.mergeVertices()
    }

    function Sn( t, e, i, n, r, a ) {
        En.call( this ), this.type = 'BoxBufferGeometry', this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        };
        var o = this;
        t = t || 1, e = e || 1, i = i || 1, n = Math.floor( n ) || 1, r = Math.floor( r ) || 1;
        var s = [], c = [], h = [], l = [], u = 0, p = 0;

        function d( t, e, i, n, r, a, d, f, m, v, g ) {
            var y, x, b = a / m, w = d / v, _ = a / 2, M = d / 2, E = f / 2, T = m + 1, S = v + 1, A = 0, L = 0,
                R = new Me;
            for (x = 0; x < S; x++) {
                var P = x * w - M;
                for (y = 0; y < T; y++) {
                    var C = y * b - _;
                    R[t] = C * n, R[e] = P * r, R[i] = E, c.push( R.x, R.y, R.z ), R[t] = 0, R[e] = 0, R[i] = f > 0 ? 1 : -1, h.push( R.x, R.y, R.z ), l.push( y / m ), l.push( 1 - x / v ), A += 1
                }
            }
            for (x = 0; x < v; x++) {
                for (y = 0; y < m; y++) {
                    var N = u + y + T * x, I = u + y + T * ( x + 1 ), O = u + ( y + 1 ) + T * ( x + 1 ),
                        U = u + ( y + 1 ) + T * x;
                    s.push( N, I, U ), s.push( I, O, U ), L += 6
                }
            }
            o.addGroup( p, L, g ), p += L, u += A
        }

        d( 'z', 'y', 'x', -1, -1, i, e, t, a = Math.floor( a ) || 1, r, 0 ), d( 'z', 'y', 'x', 1, -1, i, e, -t, a, r, 1 ), d( 'x', 'z', 'y', 1, 1, t, i, e, n, a, 2 ), d( 'x', 'z', 'y', 1, -1, t, i, -e, n, a, 3 ), d( 'x', 'y', 'z', 1, -1, t, e, i, n, r, 4 ), d( 'x', 'y', 'z', -1, -1, t, e, -i, n, r, 5 ), this.setIndex( s ), this.addAttribute( 'position', new pn( c, 3 ) ), this.addAttribute( 'normal', new pn( h, 3 ) ), this.addAttribute( 'uv', new pn( l, 2 ) )
    }

    function An( t, e, i, n ) {
        nn.call( this ), this.type = 'PlaneGeometry', this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n
        }, this.fromBufferGeometry( new Ln( t, e, i, n ) ), this.mergeVertices()
    }

    function Ln( t, e, i, n ) {
        En.call( this ), this.type = 'PlaneBufferGeometry', this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n
        };
        var r, a, o = ( t = t || 1 ) / 2, s = ( e = e || 1 ) / 2, c = Math.floor( i ) || 1, h = Math.floor( n ) || 1,
            l = c + 1, u = h + 1, p = t / c, d = e / h, f = [], m = [], v = [], g = [];
        for (a = 0; a < u; a++) {
            var y = a * d - s;
            for (r = 0; r < l; r++) {
                var x = r * p - o;
                m.push( x, -y, 0 ), v.push( 0, 0, 1 ), g.push( r / c ), g.push( 1 - a / h )
            }
        }
        for (a = 0; a < h; a++) {
            for (r = 0; r < c; r++) {
                var b = r + l * a, w = r + l * ( a + 1 ), _ = r + 1 + l * ( a + 1 ), M = r + 1 + l * a;
                f.push( b, w, M ), f.push( w, _, M )
            }
        }
        this.setIndex( f ), this.addAttribute( 'position', new pn( m, 3 ) ), this.addAttribute( 'normal', new pn( v, 3 ) ), this.addAttribute( 'uv', new pn( g, 2 ) )
    }

    function Rn( t ) {
        Oi.call( this ), this.type = 'MeshBasicMaterial', this.color = new yi( 16777215 ), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = st, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = 'round', this.wireframeLinejoin = 'round', this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues( t )
    }

    function Pn( t ) {
        Oi.call( this ), this.type = 'ShaderMaterial', this.defines = {}, this.uniforms = {}, this.vertexShader = 'void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}', this.fragmentShader = 'void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}', this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, void 0 !== t && ( void 0 !== t.attributes && console.error( 'THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.' ), this.setValues( t ) )
    }

    function Cn( t, e ) {
        this.origin = void 0 !== t ? t : new Me, this.direction = void 0 !== e ? e : new Me
    }

    function Nn( t, e ) {
        this.start = void 0 !== t ? t : new Me, this.end = void 0 !== e ? e : new Me
    }

    function In( t, e, i ) {
        this.a = void 0 !== t ? t : new Me, this.b = void 0 !== e ? e : new Me, this.c = void 0 !== i ? i : new Me
    }

    function On( t, e ) {
        Ji.call( this ), this.type = 'Mesh', this.geometry = void 0 !== t ? t : new En, this.material = void 0 !== e ? e : new Rn( { color: 16777215 * Math.random() } ), this.drawMode = se, this.updateMorphTargets()
    }

    function Un( t, e ) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
    }

    function Dn( t, e ) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
    }

    function Fn() {
        var t = {};
        return {
            get: function ( e, i ) {
                var n = e.id + ',' + i.id, r = t[n];
                return void 0 === r && ( r = new function () {
                    var t = [], e = 0, i = [], n = [];
                    return {
                        opaque: i, transparent: n, init: function () {
                            e = 0, i.length = 0, n.length = 0
                        }, push: function ( r, a, o, s, c ) {
                            var h = t[e];
                            void 0 === h ? ( h = {
                                id: r.id,
                                object: r,
                                geometry: a,
                                material: o,
                                program: o.program,
                                renderOrder: r.renderOrder,
                                z: s,
                                group: c
                            }, t[e] = h ) : ( h.id = r.id, h.object = r, h.geometry = a, h.material = o, h.program = o.program, h.renderOrder = r.renderOrder, h.z = s, h.group = c ), ( !0 === o.transparent ? n : i ).push( h ), e++
                        }, sort: function () {
                            i.length > 1 && i.sort( Un ), n.length > 1 && n.sort( Dn )
                        }
                    }
                }, t[n] = r ), r
            }, dispose: function () {
                t = {}
            }
        }
    }

    function zn( t, e ) {
        return Math.abs( e[1] ) - Math.abs( t[1] )
    }

    function Bn() {
        var t = new function () {
            var t = {};
            return {
                get: function ( e ) {
                    if (void 0 !== t[e.id]) return t[e.id];
                    var i;
                    switch (e.type) {
                        case'DirectionalLight':
                            i = {
                                direction: new Me,
                                color: new yi,
                                shadow: !1,
                                shadowBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new be
                            };
                            break;
                        case'SpotLight':
                            i = {
                                position: new Me,
                                direction: new Me,
                                color: new yi,
                                distance: 0,
                                coneCos: 0,
                                penumbraCos: 0,
                                decay: 0,
                                shadow: !1,
                                shadowBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new be
                            };
                            break;
                        case'PointLight':
                            i = {
                                position: new Me,
                                color: new yi,
                                distance: 0,
                                decay: 0,
                                shadow: !1,
                                shadowBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new be,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            };
                            break;
                        case'HemisphereLight':
                            i = { direction: new Me, skyColor: new yi, groundColor: new yi };
                            break;
                        case'RectAreaLight':
                            i = { color: new yi, position: new Me, halfWidth: new Me, halfHeight: new Me }
                    }
                    return t[e.id] = i, i
                }
            }
        }, e = {
            hash: '',
            ambient: [0, 0, 0],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        }, i = new Me, n = new we, r = new we;
        return {
            setup: function ( a, o, s ) {
                for (var c = 0, h = 0, l = 0, u = 0, p = 0, d = 0, f = 0, m = 0, v = s.matrixWorldInverse, g = 0, y = a.length; g < y; g++) {
                    var x = a[g], b = x.color, w = x.intensity, _ = x.distance,
                        M = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
                    if (x.isAmbientLight) {
                        c += b.r * w, h += b.g * w, l += b.b * w;
                    } else if (x.isDirectionalLight) {
                        if (( T = t.get( x ) ).color.copy( x.color ).multiplyScalar( x.intensity ), T.direction.setFromMatrixPosition( x.matrixWorld ), i.setFromMatrixPosition( x.target.matrixWorld ), T.direction.sub( i ), T.direction.transformDirection( v ), T.shadow = x.castShadow, x.castShadow) {
                            var E = x.shadow;
                            T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize
                        }
                        e.directionalShadowMap[u] = M, e.directionalShadowMatrix[u] = x.shadow.matrix, e.directional[u] = T, u++
                    } else if (x.isSpotLight) {
                        ( T = t.get( x ) ).position.setFromMatrixPosition( x.matrixWorld ), T.position.applyMatrix4( v ), T.color.copy( b ).multiplyScalar( w ), T.distance = _, T.direction.setFromMatrixPosition( x.matrixWorld ), i.setFromMatrixPosition( x.target.matrixWorld ), T.direction.sub( i ), T.direction.transformDirection( v ), T.coneCos = Math.cos( x.angle ), T.penumbraCos = Math.cos( x.angle * ( 1 - x.penumbra ) ), T.decay = 0 === x.distance ? 0 : x.decay, T.shadow = x.castShadow, x.castShadow && ( E = x.shadow, T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize ), e.spotShadowMap[d] = M, e.spotShadowMatrix[d] = x.shadow.matrix, e.spot[d] = T, d++;
                    } else if (x.isRectAreaLight) {
                        ( T = t.get( x ) ).color.copy( b ).multiplyScalar( w / ( x.width * x.height ) ), T.position.setFromMatrixPosition( x.matrixWorld ), T.position.applyMatrix4( v ), r.identity(), n.copy( x.matrixWorld ), n.premultiply( v ), r.extractRotation( n ), T.halfWidth.set( .5 * x.width, 0, 0 ), T.halfHeight.set( 0, .5 * x.height, 0 ), T.halfWidth.applyMatrix4( r ), T.halfHeight.applyMatrix4( r ), e.rectArea[f] = T, f++;
                    } else if (x.isPointLight) {
                        ( T = t.get( x ) ).position.setFromMatrixPosition( x.matrixWorld ), T.position.applyMatrix4( v ), T.color.copy( x.color ).multiplyScalar( x.intensity ), T.distance = x.distance, T.decay = 0 === x.distance ? 0 : x.decay, T.shadow = x.castShadow, x.castShadow && ( E = x.shadow, T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize, T.shadowCameraNear = E.camera.near, T.shadowCameraFar = E.camera.far ), e.pointShadowMap[p] = M, e.pointShadowMatrix[p] = x.shadow.matrix, e.point[p] = T, p++;
                    } else if (x.isHemisphereLight) {
                        var T;
                        ( T = t.get( x ) ).direction.setFromMatrixPosition( x.matrixWorld ), T.direction.transformDirection( v ), T.direction.normalize(), T.skyColor.copy( x.color ).multiplyScalar( w ), T.groundColor.copy( x.groundColor ).multiplyScalar( w ), e.hemi[m] = T, m++
                    }
                }
                e.ambient[0] = c, e.ambient[1] = h, e.ambient[2] = l, e.directional.length = u, e.spot.length = d, e.rectArea.length = f, e.point.length = p, e.hemi.length = m, e.hash = u + ',' + p + ',' + d + ',' + f + ',' + m + ',' + o.length
            }, state: e
        }
    }

    function kn( t, e, i ) {
        var n = t.createShader( e );
        return t.shaderSource( n, i ), t.compileShader( n ), !1 === t.getShaderParameter( n, t.COMPILE_STATUS ) && console.error( 'THREE.WebGLShader: Shader couldn\'t compile.' ), '' !== t.getShaderInfoLog( n ) && console.warn( 'THREE.WebGLShader: gl.getShaderInfoLog()', e === t.VERTEX_SHADER ? 'vertex' : 'fragment', t.getShaderInfoLog( n ), function ( t ) {
            for (var e = t.split( '\n' ), i = 0; i < e.length; i++) e[i] = i + 1 + ': ' + e[i];
            return e.join( '\n' )
        }( i ) ), n
    }

    Object.assign( En.prototype, i.prototype, {
        isBufferGeometry: !0, getIndex: function () {
            return this.index
        }, setIndex: function ( t ) {
            Array.isArray( t ) ? this.index = new ( mn( t ) > 65535 ? un : hn )( t, 1 ) : this.index = t
        }, addAttribute: function ( t, e ) {
            return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? 'index' === t ? ( console.warn( 'THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.' ), void this.setIndex( e ) ) : ( this.attributes[t] = e, this ) : ( console.warn( 'THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).' ), void this.addAttribute( t, new rn( arguments[1], arguments[2] ) ) )
        }, getAttribute: function ( t ) {
            return this.attributes[t]
        }, removeAttribute: function ( t ) {
            return delete this.attributes[t], this
        }, addGroup: function ( t, e, i ) {
            this.groups.push( { start: t, count: e, materialIndex: void 0 !== i ? i : 0 } )
        }, clearGroups: function () {
            this.groups = []
        }, setDrawRange: function ( t, e ) {
            this.drawRange.start = t, this.drawRange.count = e
        }, applyMatrix: function ( t ) {
            var e = this.attributes.position;
            void 0 !== e && ( t.applyToBufferAttribute( e ), e.needsUpdate = !0 );
            var i = this.attributes.normal;
            void 0 !== i && ( ( new Ee ).getNormalMatrix( t ).applyToBufferAttribute( i ), i.needsUpdate = !0 );
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        }, rotateX: function () {
            var t = new we;
            return function ( e ) {
                return t.makeRotationX( e ), this.applyMatrix( t ), this
            }
        }(), rotateY: function () {
            var t = new we;
            return function ( e ) {
                return t.makeRotationY( e ), this.applyMatrix( t ), this
            }
        }(), rotateZ: function () {
            var t = new we;
            return function ( e ) {
                return t.makeRotationZ( e ), this.applyMatrix( t ), this
            }
        }(), translate: function () {
            var t = new we;
            return function ( e, i, n ) {
                return t.makeTranslation( e, i, n ), this.applyMatrix( t ), this
            }
        }(), scale: function () {
            var t = new we;
            return function ( e, i, n ) {
                return t.makeScale( e, i, n ), this.applyMatrix( t ), this
            }
        }(), lookAt: function () {
            var t = new Ji;
            return function ( e ) {
                t.lookAt( e ), t.updateMatrix(), this.applyMatrix( t.matrix )
            }
        }(), center: function () {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate( t.x, t.y, t.z ), t
        }, setFromObject: function ( t ) {
            var e = t.geometry;
            if (t.isPoints || t.isLine) {
                var i = new pn( 3 * e.vertices.length, 3 ), n = new pn( 3 * e.colors.length, 3 );
                if (this.addAttribute( 'position', i.copyVector3sArray( e.vertices ) ), this.addAttribute( 'color', n.copyColorsArray( e.colors ) ), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                    var r = new pn( e.lineDistances.length, 1 );
                    this.addAttribute( 'lineDistance', r.copyArray( e.lineDistances ) )
                }
                null !== e.boundingSphere && ( this.boundingSphere = e.boundingSphere.clone() ), null !== e.boundingBox && ( this.boundingBox = e.boundingBox.clone() )
            } else {
                t.isMesh && e && e.isGeometry && this.fromGeometry( e );
            }
            return this
        }, setFromPoints: function ( t ) {
            for (var e = [], i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.push( r.x, r.y, r.z || 0 )
            }
            return this.addAttribute( 'position', new pn( e, 3 ) ), this
        }, updateFromObject: function ( t ) {
            var e, i = t.geometry;
            if (t.isMesh) {
                var n = i.__directGeometry;
                if (!0 === i.elementsNeedUpdate && ( n = void 0, i.elementsNeedUpdate = !1 ), void 0 === n) return this.fromGeometry( i );
                n.verticesNeedUpdate = i.verticesNeedUpdate, n.normalsNeedUpdate = i.normalsNeedUpdate, n.colorsNeedUpdate = i.colorsNeedUpdate, n.uvsNeedUpdate = i.uvsNeedUpdate, n.groupsNeedUpdate = i.groupsNeedUpdate, i.verticesNeedUpdate = !1, i.normalsNeedUpdate = !1, i.colorsNeedUpdate = !1, i.uvsNeedUpdate = !1, i.groupsNeedUpdate = !1, i = n
            }
            return !0 === i.verticesNeedUpdate && ( void 0 !== ( e = this.attributes.position ) && ( e.copyVector3sArray( i.vertices ), e.needsUpdate = !0 ), i.verticesNeedUpdate = !1 ), !0 === i.normalsNeedUpdate && ( void 0 !== ( e = this.attributes.normal ) && ( e.copyVector3sArray( i.normals ), e.needsUpdate = !0 ), i.normalsNeedUpdate = !1 ), !0 === i.colorsNeedUpdate && ( void 0 !== ( e = this.attributes.color ) && ( e.copyColorsArray( i.colors ), e.needsUpdate = !0 ), i.colorsNeedUpdate = !1 ), i.uvsNeedUpdate && ( void 0 !== ( e = this.attributes.uv ) && ( e.copyVector2sArray( i.uvs ), e.needsUpdate = !0 ), i.uvsNeedUpdate = !1 ), i.lineDistancesNeedUpdate && ( void 0 !== ( e = this.attributes.lineDistance ) && ( e.copyArray( i.lineDistances ), e.needsUpdate = !0 ), i.lineDistancesNeedUpdate = !1 ), i.groupsNeedUpdate && ( i.computeGroups( t.geometry ), this.groups = i.groups, i.groupsNeedUpdate = !1 ), this
        }, fromGeometry: function ( t ) {
            return t.__directGeometry = ( new fn ).fromGeometry( t ), this.fromDirectGeometry( t.__directGeometry )
        }, fromDirectGeometry: function ( t ) {
            var e = new Float32Array( 3 * t.vertices.length );
            if (this.addAttribute( 'position', new rn( e, 3 ).copyVector3sArray( t.vertices ) ), t.normals.length > 0) {
                var i = new Float32Array( 3 * t.normals.length );
                this.addAttribute( 'normal', new rn( i, 3 ).copyVector3sArray( t.normals ) )
            }
            if (t.colors.length > 0) {
                var n = new Float32Array( 3 * t.colors.length );
                this.addAttribute( 'color', new rn( n, 3 ).copyColorsArray( t.colors ) )
            }
            if (t.uvs.length > 0) {
                var r = new Float32Array( 2 * t.uvs.length );
                this.addAttribute( 'uv', new rn( r, 2 ).copyVector2sArray( t.uvs ) )
            }
            if (t.uvs2.length > 0) {
                var a = new Float32Array( 2 * t.uvs2.length );
                this.addAttribute( 'uv2', new rn( a, 2 ).copyVector2sArray( t.uvs2 ) )
            }
            if (t.indices.length > 0) {
                var o = new ( mn( t.indices ) > 65535 ? Uint32Array : Uint16Array )( 3 * t.indices.length );
                this.setIndex( new rn( o, 1 ).copyIndicesArray( t.indices ) )
            }
            for (var s in this.groups = t.groups, t.morphTargets) {
                for (var c = [], h = t.morphTargets[s], l = 0, u = h.length; l < u; l++) {
                    var p = h[l], d = new pn( 3 * p.length, 3 );
                    c.push( d.copyVector3sArray( p ) )
                }
                this.morphAttributes[s] = c
            }
            if (t.skinIndices.length > 0) {
                var f = new pn( 4 * t.skinIndices.length, 4 );
                this.addAttribute( 'skinIndex', f.copyVector4sArray( t.skinIndices ) )
            }
            if (t.skinWeights.length > 0) {
                var m = new pn( 4 * t.skinWeights.length, 4 );
                this.addAttribute( 'skinWeight', m.copyVector4sArray( t.skinWeights ) )
            }
            return null !== t.boundingSphere && ( this.boundingSphere = t.boundingSphere.clone() ), null !== t.boundingBox && ( this.boundingBox = t.boundingBox.clone() ), this
        }, computeBoundingBox: function () {
            null === this.boundingBox && ( this.boundingBox = new Fi );
            var t = this.attributes.position;
            void 0 !== t ? this.boundingBox.setFromBufferAttribute( t ) : this.boundingBox.makeEmpty(), ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) && console.error( 'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this )
        }, computeBoundingSphere: function () {
            var t = new Fi, e = new Me;
            return function () {
                null === this.boundingSphere && ( this.boundingSphere = new zi );
                var i = this.attributes.position;
                if (i) {
                    var n = this.boundingSphere.center;
                    t.setFromBufferAttribute( i ), t.getCenter( n );
                    for (var r = 0, a = 0, o = i.count; a < o; a++) e.x = i.getX( a ), e.y = i.getY( a ), e.z = i.getZ( a ), r = Math.max( r, n.distanceToSquared( e ) );
                    this.boundingSphere.radius = Math.sqrt( r ), isNaN( this.boundingSphere.radius ) && console.error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this )
                }
            }
        }(), computeFaceNormals: function () {
        }, computeVertexNormals: function () {
            var t = this.index, e = this.attributes, i = this.groups;
            if (e.position) {
                var n = e.position.array;
                if (void 0 === e.normal) this.addAttribute( 'normal', new rn( new Float32Array( n.length ), 3 ) ); else for (var r = e.normal.array, a = 0, o = r.length; a < o; a++) r[a] = 0;
                var s, c, h, l = e.normal.array, u = new Me, p = new Me, d = new Me, f = new Me, m = new Me;
                if (t) {
                    var v = t.array;
                    0 === i.length && this.addGroup( 0, v.length );
                    for (var g = 0, y = i.length; g < y; ++g) {
                        var x = i[g], b = x.start;
                        for (a = b, o = b + x.count; a < o; a += 3) s = 3 * v[a + 0], c = 3 * v[a + 1], h = 3 * v[a + 2], u.fromArray( n, s ), p.fromArray( n, c ), d.fromArray( n, h ), f.subVectors( d, p ), m.subVectors( u, p ), f.cross( m ), l[s] += f.x, l[s + 1] += f.y, l[s + 2] += f.z, l[c] += f.x, l[c + 1] += f.y, l[c + 2] += f.z, l[h] += f.x, l[h + 1] += f.y, l[h + 2] += f.z
                    }
                } else {
                    for (a = 0, o = n.length; a < o; a += 9) u.fromArray( n, a ), p.fromArray( n, a + 3 ), d.fromArray( n, a + 6 ), f.subVectors( d, p ), m.subVectors( u, p ), f.cross( m ), l[a] = f.x, l[a + 1] = f.y, l[a + 2] = f.z, l[a + 3] = f.x, l[a + 4] = f.y, l[a + 5] = f.z, l[a + 6] = f.x, l[a + 7] = f.y, l[a + 8] = f.z;
                }
                this.normalizeNormals(), e.normal.needsUpdate = !0
            }
        }, merge: function ( t, e ) {
            if (t && t.isBufferGeometry) {
                void 0 === e && ( e = 0 );
                var i = this.attributes;
                for (var n in i) if (void 0 !== t.attributes[n]) for (var r = i[n].array, a = t.attributes[n], o = a.array, s = 0, c = a.itemSize * e; s < o.length; s++, c++) r[c] = o[s];
                return this
            }
            console.error( 'THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.', t )
        }, normalizeNormals: function () {
            var t = new Me;
            return function () {
                for (var e = this.attributes.normal, i = 0, n = e.count; i < n; i++) t.x = e.getX( i ), t.y = e.getY( i ), t.z = e.getZ( i ), t.normalize(), e.setXYZ( i, t.x, t.y, t.z )
            }
        }(), toNonIndexed: function () {
            if (null === this.index) return console.warn( 'THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.' ), this;
            var t = new En, e = this.index.array, i = this.attributes;
            for (var n in i) {
                for (var r = i[n], a = r.array, o = r.itemSize, s = new a.constructor( e.length * o ), c = 0, h = 0, l = 0, u = e.length; l < u; l++) {
                    c = e[l] * o;
                    for (var p = 0; p < o; p++) s[h++] = a[c++]
                }
                t.addAttribute( n, new rn( s, o ) )
            }
            return t
        }, toJSON: function () {
            var t = { metadata: { version: 4.5, type: 'BufferGeometry', generator: 'BufferGeometry.toJSON' } };
            if (t.uuid = this.uuid, t.type = this.type, '' !== this.name && ( t.name = this.name ), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var i in e) void 0 !== e[i] && ( t[i] = e[i] );
                return t
            }
            t.data = { attributes: {} };
            var n = this.index;
            if (null !== n) {
                var r = Array.prototype.slice.call( n.array );
                t.data.index = { type: n.array.constructor.name, array: r }
            }
            var a = this.attributes;
            for (var i in a) {
                var o = a[i];
                r = Array.prototype.slice.call( o.array );
                t.data.attributes[i] = {
                    itemSize: o.itemSize,
                    type: o.array.constructor.name,
                    array: r,
                    normalized: o.normalized
                }
            }
            var s = this.groups;
            s.length > 0 && ( t.data.groups = JSON.parse( JSON.stringify( s ) ) );
            var c = this.boundingSphere;
            return null !== c && ( t.data.boundingSphere = { center: c.center.toArray(), radius: c.radius } ), t
        }, clone: function () {
            return ( new En ).copy( this )
        }, copy: function ( t ) {
            var e, i, n;
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var r = t.index;
            null !== r && this.setIndex( r.clone() );
            var a = t.attributes;
            for (e in a) {
                var o = a[e];
                this.addAttribute( e, o.clone() )
            }
            var s = t.morphAttributes;
            for (e in s) {
                var c = [], h = s[e];
                for (i = 0, n = h.length; i < n; i++) c.push( h[i].clone() );
                this.morphAttributes[e] = c
            }
            var l = t.groups;
            for (i = 0, n = l.length; i < n; i++) {
                var u = l[i];
                this.addGroup( u.start, u.count, u.materialIndex )
            }
            var p = t.boundingBox;
            null !== p && ( this.boundingBox = p.clone() );
            var d = t.boundingSphere;
            return null !== d && ( this.boundingSphere = d.clone() ), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this
        }, dispose: function () {
            this.dispatchEvent( { type: 'dispose' } )
        }
    } ), Tn.prototype = Object.create( nn.prototype ), Tn.prototype.constructor = Tn, Sn.prototype = Object.create( En.prototype ), Sn.prototype.constructor = Sn, An.prototype = Object.create( nn.prototype ), An.prototype.constructor = An, Ln.prototype = Object.create( En.prototype ), Ln.prototype.constructor = Ln, Rn.prototype = Object.create( Oi.prototype ), Rn.prototype.constructor = Rn, Rn.prototype.isMeshBasicMaterial = !0, Rn.prototype.copy = function ( t ) {
        return Oi.prototype.copy.call( this, t ), this.color.copy( t.color ), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
    }, Pn.prototype = Object.create( Oi.prototype ), Pn.prototype.constructor = Pn, Pn.prototype.isShaderMaterial = !0, Pn.prototype.copy = function ( t ) {
        return Oi.prototype.copy.call( this, t ), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = bi.clone( t.uniforms ), this.defines = t.defines, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
    }, Pn.prototype.toJSON = function ( t ) {
        var e = Oi.prototype.toJSON.call( this, t );
        return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
    }, Object.assign( Cn.prototype, {
        set: function ( t, e ) {
            return this.origin.copy( t ), this.direction.copy( e ), this
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.origin.copy( t.origin ), this.direction.copy( t.direction ), this
        }, at: function ( t, e ) {
            return ( e || new Me ).copy( this.direction ).multiplyScalar( t ).add( this.origin )
        }, lookAt: function ( t ) {
            return this.direction.copy( t ).sub( this.origin ).normalize(), this
        }, recast: function () {
            var t = new Me;
            return function ( e ) {
                return this.origin.copy( this.at( e, t ) ), this
            }
        }(), closestPointToPoint: function ( t, e ) {
            var i = e || new Me;
            i.subVectors( t, this.origin );
            var n = i.dot( this.direction );
            return n < 0 ? i.copy( this.origin ) : i.copy( this.direction ).multiplyScalar( n ).add( this.origin )
        }, distanceToPoint: function ( t ) {
            return Math.sqrt( this.distanceSqToPoint( t ) )
        }, distanceSqToPoint: function () {
            var t = new Me;
            return function ( e ) {
                var i = t.subVectors( e, this.origin ).dot( this.direction );
                return i < 0 ? this.origin.distanceToSquared( e ) : ( t.copy( this.direction ).multiplyScalar( i ).add( this.origin ), t.distanceToSquared( e ) )
            }
        }(), distanceSqToSegment: ( gn = new Me, yn = new Me, xn = new Me, function ( t, e, i, n ) {
            gn.copy( t ).add( e ).multiplyScalar( .5 ), yn.copy( e ).sub( t ).normalize(), xn.copy( this.origin ).sub( gn );
            var r, a, o, s, c = .5 * t.distanceTo( e ), h = -this.direction.dot( yn ), l = xn.dot( this.direction ),
                u = -xn.dot( yn ), p = xn.lengthSq(), d = Math.abs( 1 - h * h );
            if (d > 0) {
                if (a = h * l - u, s = c * d, ( r = h * u - l ) >= 0) {
                    if (a >= -s) {
                        if (a <= s) {
                            var f = 1 / d;
                            o = ( r *= f ) * ( r + h * ( a *= f ) + 2 * l ) + a * ( h * r + a + 2 * u ) + p
                        } else {
                            a = c, o = -( r = Math.max( 0, -( h * a + l ) ) ) * r + a * ( a + 2 * u ) + p;
                        }
                    } else {
                        a = -c, o = -( r = Math.max( 0, -( h * a + l ) ) ) * r + a * ( a + 2 * u ) + p;
                    }
                } else {
                    a <= -s ? o = -( r = Math.max( 0, -( -h * c + l ) ) ) * r + ( a = r > 0 ? -c : Math.min( Math.max( -c, -u ), c ) ) * ( a + 2 * u ) + p : a <= s ? ( r = 0, o = ( a = Math.min( Math.max( -c, -u ), c ) ) * ( a + 2 * u ) + p ) : o = -( r = Math.max( 0, -( h * c + l ) ) ) * r + ( a = r > 0 ? c : Math.min( Math.max( -c, -u ), c ) ) * ( a + 2 * u ) + p;
                }
            } else {
                a = h > 0 ? -c : c, o = -( r = Math.max( 0, -( h * a + l ) ) ) * r + a * ( a + 2 * u ) + p;
            }
            return i && i.copy( this.direction ).multiplyScalar( r ).add( this.origin ), n && n.copy( yn ).multiplyScalar( a ).add( gn ), o
        } ), intersectSphere: function () {
            var t = new Me;
            return function ( e, i ) {
                t.subVectors( e.center, this.origin );
                var n = t.dot( this.direction ), r = t.dot( t ) - n * n, a = e.radius * e.radius;
                if (r > a) return null;
                var o = Math.sqrt( a - r ), s = n - o, c = n + o;
                return s < 0 && c < 0 ? null : s < 0 ? this.at( c, i ) : this.at( s, i )
            }
        }(), intersectsSphere: function ( t ) {
            return this.distanceToPoint( t.center ) <= t.radius
        }, distanceToPlane: function ( t ) {
            var e = t.normal.dot( this.direction );
            if (0 === e) return 0 === t.distanceToPoint( this.origin ) ? 0 : null;
            var i = -( this.origin.dot( t.normal ) + t.constant ) / e;
            return i >= 0 ? i : null
        }, intersectPlane: function ( t, e ) {
            var i = this.distanceToPlane( t );
            return null === i ? null : this.at( i, e )
        }, intersectsPlane: function ( t ) {
            var e = t.distanceToPoint( this.origin );
            return 0 === e || t.normal.dot( this.direction ) * e < 0
        }, intersectBox: function ( t, e ) {
            var i, n, r, a, o, s, c = 1 / this.direction.x, h = 1 / this.direction.y, l = 1 / this.direction.z,
                u = this.origin;
            return c >= 0 ? ( i = ( t.min.x - u.x ) * c, n = ( t.max.x - u.x ) * c ) : ( i = ( t.max.x - u.x ) * c, n = ( t.min.x - u.x ) * c ), h >= 0 ? ( r = ( t.min.y - u.y ) * h, a = ( t.max.y - u.y ) * h ) : ( r = ( t.max.y - u.y ) * h, a = ( t.min.y - u.y ) * h ), i > a || r > n ? null : ( ( r > i || i != i ) && ( i = r ), ( a < n || n != n ) && ( n = a ), l >= 0 ? ( o = ( t.min.z - u.z ) * l, s = ( t.max.z - u.z ) * l ) : ( o = ( t.max.z - u.z ) * l, s = ( t.min.z - u.z ) * l ), i > s || o > n ? null : ( ( o > i || i != i ) && ( i = o ), ( s < n || n != n ) && ( n = s ), n < 0 ? null : this.at( i >= 0 ? i : n, e ) ) )
        }, intersectsBox: ( vn = new Me, function ( t ) {
            return null !== this.intersectBox( t, vn )
        } ), intersectTriangle: function () {
            var t = new Me, e = new Me, i = new Me, n = new Me;
            return function ( r, a, o, s, c ) {
                e.subVectors( a, r ), i.subVectors( o, r ), n.crossVectors( e, i );
                var h, l = this.direction.dot( n );
                if (l > 0) {
                    if (s) return null;
                    h = 1
                } else {
                    if (!( l < 0 )) return null;
                    h = -1, l = -l
                }
                t.subVectors( this.origin, r );
                var u = h * this.direction.dot( i.crossVectors( t, i ) );
                if (u < 0) return null;
                var p = h * this.direction.dot( e.cross( t ) );
                if (p < 0) return null;
                if (u + p > l) return null;
                var d = -h * t.dot( n );
                return d < 0 ? null : this.at( d / l, c )
            }
        }(), applyMatrix4: function ( t ) {
            return this.origin.applyMatrix4( t ), this.direction.transformDirection( t ), this
        }, equals: function ( t ) {
            return t.origin.equals( this.origin ) && t.direction.equals( this.direction )
        }
    } ), Object.assign( Nn.prototype, {
        set: function ( t, e ) {
            return this.start.copy( t ), this.end.copy( e ), this
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.start.copy( t.start ), this.end.copy( t.end ), this
        }, getCenter: function ( t ) {
            return ( t || new Me ).addVectors( this.start, this.end ).multiplyScalar( .5 )
        }, delta: function ( t ) {
            return ( t || new Me ).subVectors( this.end, this.start )
        }, distanceSq: function () {
            return this.start.distanceToSquared( this.end )
        }, distance: function () {
            return this.start.distanceTo( this.end )
        }, at: function ( t, e ) {
            var i = e || new Me;
            return this.delta( i ).multiplyScalar( t ).add( this.start )
        }, closestPointToPointParameter: ( bn = new Me, wn = new Me, function ( t, e ) {
            bn.subVectors( t, this.start ), wn.subVectors( this.end, this.start );
            var i = wn.dot( wn ), n = wn.dot( bn ) / i;
            return e && ( n = xe.clamp( n, 0, 1 ) ), n
        } ), closestPointToPoint: function ( t, e, i ) {
            var n = this.closestPointToPointParameter( t, e ), r = i || new Me;
            return this.delta( r ).multiplyScalar( n ).add( this.start )
        }, applyMatrix4: function ( t ) {
            return this.start.applyMatrix4( t ), this.end.applyMatrix4( t ), this
        }, equals: function ( t ) {
            return t.start.equals( this.start ) && t.end.equals( this.end )
        }
    } ), Object.assign( In, {
        normal: ( _n = new Me, function ( t, e, i, n ) {
            var r = n || new Me;
            r.subVectors( i, e ), _n.subVectors( t, e ), r.cross( _n );
            var a = r.lengthSq();
            return a > 0 ? r.multiplyScalar( 1 / Math.sqrt( a ) ) : r.set( 0, 0, 0 )
        } ), barycoordFromPoint: function () {
            var t = new Me, e = new Me, i = new Me;
            return function ( n, r, a, o, s ) {
                t.subVectors( o, r ), e.subVectors( a, r ), i.subVectors( n, r );
                var c = t.dot( t ), h = t.dot( e ), l = t.dot( i ), u = e.dot( e ), p = e.dot( i ), d = c * u - h * h,
                    f = s || new Me;
                if (0 === d) return f.set( -2, -1, -1 );
                var m = 1 / d, v = ( u * l - h * p ) * m, g = ( c * p - h * l ) * m;
                return f.set( 1 - v - g, g, v )
            }
        }(), containsPoint: function () {
            var t = new Me;
            return function ( e, i, n, r ) {
                var a = In.barycoordFromPoint( e, i, n, r, t );
                return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
            }
        }()
    } ), Object.assign( In.prototype, {
        set: function ( t, e, i ) {
            return this.a.copy( t ), this.b.copy( e ), this.c.copy( i ), this
        }, setFromPointsAndIndices: function ( t, e, i, n ) {
            return this.a.copy( t[e] ), this.b.copy( t[i] ), this.c.copy( t[n] ), this
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.a.copy( t.a ), this.b.copy( t.b ), this.c.copy( t.c ), this
        }, area: function () {
            var t = new Me, e = new Me;
            return function () {
                return t.subVectors( this.c, this.b ), e.subVectors( this.a, this.b ), .5 * t.cross( e ).length()
            }
        }(), midpoint: function ( t ) {
            return ( t || new Me ).addVectors( this.a, this.b ).add( this.c ).multiplyScalar( 1 / 3 )
        }, normal: function ( t ) {
            return In.normal( this.a, this.b, this.c, t )
        }, plane: function ( t ) {
            return ( t || new Bi ).setFromCoplanarPoints( this.a, this.b, this.c )
        }, barycoordFromPoint: function ( t, e ) {
            return In.barycoordFromPoint( t, this.a, this.b, this.c, e )
        }, containsPoint: function ( t ) {
            return In.containsPoint( t, this.a, this.b, this.c )
        }, closestPointToPoint: function () {
            var t = new Bi, e = [new Nn, new Nn, new Nn], i = new Me, n = new Me;
            return function ( r, a ) {
                var o = a || new Me, s = 1 / 0;
                if (t.setFromCoplanarPoints( this.a, this.b, this.c ), t.projectPoint( r, i ), !0 === this.containsPoint( i )) {
                    o.copy( i );
                } else {
                    e[0].set( this.a, this.b ), e[1].set( this.b, this.c ), e[2].set( this.c, this.a );
                    for (var c = 0; c < e.length; c++) {
                        e[c].closestPointToPoint( i, !0, n );
                        var h = i.distanceToSquared( n );
                        h < s && ( s = h, o.copy( n ) )
                    }
                }
                return o
            }
        }(), equals: function ( t ) {
            return t.a.equals( this.a ) && t.b.equals( this.b ) && t.c.equals( this.c )
        }
    } ), On.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: On, isMesh: !0, setDrawMode: function ( t ) {
            this.drawMode = t
        }, copy: function ( t ) {
            return Ji.prototype.copy.call( this, t ), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && ( this.morphTargetInfluences = t.morphTargetInfluences.slice() ), void 0 !== t.morphTargetDictionary && ( this.morphTargetDictionary = Object.assign( {}, t.morphTargetDictionary ) ), this
        }, updateMorphTargets: function () {
            var t, e, i, n = this.geometry;
            if (n.isBufferGeometry) {
                var r = n.morphAttributes, a = Object.keys( r );
                if (a.length > 0) {
                    var o = r[a[0]];
                    if (void 0 !== o) for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) i = o[t].name || String( t ), this.morphTargetInfluences.push( 0 ), this.morphTargetDictionary[i] = t
                }
            } else {
                var s = n.morphTargets;
                if (void 0 !== s && s.length > 0) for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s.length; t < e; t++) i = s[t].name || String( t ), this.morphTargetInfluences.push( 0 ), this.morphTargetDictionary[i] = t
            }
        }, raycast: function () {
            var t = new we, e = new Cn, i = new zi, n = new Me, r = new Me, a = new Me, o = new Me, s = new Me,
                c = new Me, h = new be, l = new be, u = new be, p = new Me, d = new Me, f = new Me;

            function m( t, e, i, n, r, a, o ) {
                return In.barycoordFromPoint( t, e, i, n, p ), r.multiplyScalar( p.x ), a.multiplyScalar( p.y ), o.multiplyScalar( p.z ), r.add( a ).add( o ), r.clone()
            }

            function v( t, e, i, n, r, a, o, s ) {
                if (null === ( e.side === S ? n.intersectTriangle( o, a, r, !0, s ) : n.intersectTriangle( r, a, o, e.side !== A, s ) )) return null;
                f.copy( s ), f.applyMatrix4( t.matrixWorld );
                var c = i.ray.origin.distanceTo( f );
                return c < i.near || c > i.far ? null : { distance: c, point: f.clone(), object: t }
            }

            function g( t, e, i, o, s, c, p, f ) {
                n.fromBufferAttribute( o, c ), r.fromBufferAttribute( o, p ), a.fromBufferAttribute( o, f );
                var g = v( t, t.material, e, i, n, r, a, d );
                return g && ( s && ( h.fromBufferAttribute( s, c ), l.fromBufferAttribute( s, p ), u.fromBufferAttribute( s, f ), g.uv = m( d, n, r, a, h, l, u ) ), g.face = new $i( c, p, f, In.normal( n, r, a ) ), g.faceIndex = c ), g
            }

            return function ( p, f ) {
                var y, x = this.geometry, b = this.material, w = this.matrixWorld;
                if (void 0 !== b && ( null === x.boundingSphere && x.computeBoundingSphere(), i.copy( x.boundingSphere ), i.applyMatrix4( w ), !1 !== p.ray.intersectsSphere( i ) && ( t.getInverse( w ), e.copy( p.ray ).applyMatrix4( t ), null === x.boundingBox || !1 !== e.intersectsBox( x.boundingBox ) ) )) {
                    if (x.isBufferGeometry) {
                        var _, M, E, T, S, A = x.index, L = x.attributes.position, R = x.attributes.uv;
                        if (null !== A) for (T = 0, S = A.count; T < S; T += 3) _ = A.getX( T ), M = A.getX( T + 1 ), E = A.getX( T + 2 ), ( y = g( this, p, e, L, R, _, M, E ) ) && ( y.faceIndex = Math.floor( T / 3 ), f.push( y ) ); else if (void 0 !== L) for (T = 0, S = L.count; T < S; T += 3) ( y = g( this, p, e, L, R, _ = T, M = T + 1, E = T + 2 ) ) && ( y.index = _, f.push( y ) )
                    } else if (x.isGeometry) {
                        var P, C, N, I, O = Array.isArray( b ), U = x.vertices, D = x.faces, F = x.faceVertexUvs[0];
                        F.length > 0 && ( I = F );
                        for (var z = 0, B = D.length; z < B; z++) {
                            var k = D[z], G = O ? b[k.materialIndex] : b;
                            if (void 0 !== G) {
                                if (P = U[k.a], C = U[k.b], N = U[k.c], !0 === G.morphTargets) {
                                    var j = x.morphTargets, H = this.morphTargetInfluences;
                                    n.set( 0, 0, 0 ), r.set( 0, 0, 0 ), a.set( 0, 0, 0 );
                                    for (var V = 0, W = j.length; V < W; V++) {
                                        var X = H[V];
                                        if (0 !== X) {
                                            var q = j[V].vertices;
                                            n.addScaledVector( o.subVectors( q[k.a], P ), X ), r.addScaledVector( s.subVectors( q[k.b], C ), X ), a.addScaledVector( c.subVectors( q[k.c], N ), X )
                                        }
                                    }
                                    n.add( P ), r.add( C ), a.add( N ), P = n, C = r, N = a
                                }
                                if (y = v( this, G, p, e, P, C, N, d )) {
                                    if (I && I[z]) {
                                        var Y = I[z];
                                        h.copy( Y[0] ), l.copy( Y[1] ), u.copy( Y[2] ), y.uv = m( d, P, C, N, h, l, u )
                                    }
                                    y.face = k, y.faceIndex = z, f.push( y )
                                }
                            }
                        }
                    }
                }
            }
        }(), clone: function () {
            return new this.constructor( this.geometry, this.material ).copy( this )
        }
    } );
    var Gn, jn, Hn, Vn, Wn, Xn, qn = 0;

    function Yn( t ) {
        switch (t) {
            case le:
                return ['Linear', '( value )'];
            case ue:
                return ['sRGB', '( value )'];
            case de:
                return ['RGBE', '( value )'];
            case fe:
                return ['RGBM', '( value, 7.0 )'];
            case me:
                return ['RGBM', '( value, 16.0 )'];
            case ve:
                return ['RGBD', '( value, 256.0 )'];
            case pe:
                return ['Gamma', '( value, float( GAMMA_FACTOR ) )'];
            default:
                throw new Error( 'unsupported encoding: ' + t )
        }
    }

    function Zn( t, e ) {
        var i = Yn( e );
        return 'vec4 ' + t + '( vec4 value ) { return ' + i[0] + 'ToLinear' + i[1] + '; }'
    }

    function Jn( t ) {
        return '' !== t
    }

    function Kn( t, e ) {
        return t.replace( /NUM_DIR_LIGHTS/g, e.numDirLights ).replace( /NUM_SPOT_LIGHTS/g, e.numSpotLights ).replace( /NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights ).replace( /NUM_POINT_LIGHTS/g, e.numPointLights ).replace( /NUM_HEMI_LIGHTS/g, e.numHemiLights )
    }

    function Qn( t ) {
        return t.replace( /^[ \t]*#include +<([\w\d.]+)>/gm, function ( t, e ) {
            var i = wi[e];
            if (void 0 === i) throw new Error( 'Can not resolve #include <' + e + '>' );
            return Qn( i )
        } )
    }

    function $n( t ) {
        return t.replace( /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function ( t, e, i, n ) {
            for (var r = '', a = parseInt( e ); a < parseInt( i ); a++) r += n.replace( /\[ i \]/g, '[ ' + a + ' ]' );
            return r
        } )
    }

    function tr( t, e, i, n, r, a ) {
        var o = t.context, s = n.defines, c = r.vertexShader, h = r.fragmentShader, l = 'SHADOWMAP_TYPE_BASIC';
        a.shadowMapType === M ? l = 'SHADOWMAP_TYPE_PCF' : a.shadowMapType === E && ( l = 'SHADOWMAP_TYPE_PCF_SOFT' );
        var u = 'ENVMAP_TYPE_CUBE', p = 'ENVMAP_MODE_REFLECTION', d = 'ENVMAP_BLENDING_MULTIPLY';
        if (a.envMap) {
            switch (n.envMap.mapping) {
                case mt:
                case vt:
                    u = 'ENVMAP_TYPE_CUBE';
                    break;
                case bt:
                case wt:
                    u = 'ENVMAP_TYPE_CUBE_UV';
                    break;
                case gt:
                case yt:
                    u = 'ENVMAP_TYPE_EQUIREC';
                    break;
                case xt:
                    u = 'ENVMAP_TYPE_SPHERE'
            }
            switch (n.envMap.mapping) {
                case vt:
                case yt:
                    p = 'ENVMAP_MODE_REFRACTION'
            }
            switch (n.combine) {
                case st:
                    d = 'ENVMAP_BLENDING_MULTIPLY';
                    break;
                case ct:
                    d = 'ENVMAP_BLENDING_MIX';
                    break;
                case ht:
                    d = 'ENVMAP_BLENDING_ADD'
            }
        }
        var f, m, v, g, y, x = t.gammaFactor > 0 ? t.gammaFactor : 1, b = function ( t, e, i ) {
            return [( t = t || {} ).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? '#extension GL_OES_standard_derivatives : enable' : '', ( t.fragDepth || e.logarithmicDepthBuffer ) && i.get( 'EXT_frag_depth' ) ? '#extension GL_EXT_frag_depth : enable' : '', t.drawBuffers && i.get( 'WEBGL_draw_buffers' ) ? '#extension GL_EXT_draw_buffers : require' : '', ( t.shaderTextureLOD || e.envMap ) && i.get( 'EXT_shader_texture_lod' ) ? '#extension GL_EXT_shader_texture_lod : enable' : ''].filter( Jn ).join( '\n' )
        }( n.extensions, a, e ), w = function ( t ) {
            var e = [];
            for (var i in t) {
                var n = t[i];
                !1 !== n && e.push( '#define ' + i + ' ' + n )
            }
            return e.join( '\n' )
        }( s ), _ = o.createProgram();
        n.isRawShaderMaterial ? ( ( f = [w].filter( Jn ).join( '\n' ) ).length > 0 && ( f += '\n' ), ( m = [b, w].filter( Jn ).join( '\n' ) ).length > 0 && ( m += '\n' ) ) : ( f = ['precision ' + a.precision + ' float;', 'precision ' + a.precision + ' int;', '#define SHADER_NAME ' + r.name, w, a.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '', '#define GAMMA_FACTOR ' + x, '#define MAX_BONES ' + a.maxBones, a.useFog && a.fog ? '#define USE_FOG' : '', a.useFog && a.fogExp ? '#define FOG_EXP2' : '', a.map ? '#define USE_MAP' : '', a.envMap ? '#define USE_ENVMAP' : '', a.envMap ? '#define ' + p : '', a.lightMap ? '#define USE_LIGHTMAP' : '', a.aoMap ? '#define USE_AOMAP' : '', a.emissiveMap ? '#define USE_EMISSIVEMAP' : '', a.bumpMap ? '#define USE_BUMPMAP' : '', a.normalMap ? '#define USE_NORMALMAP' : '', a.displacementMap && a.supportsVertexTextures ? '#define USE_DISPLACEMENTMAP' : '', a.specularMap ? '#define USE_SPECULARMAP' : '', a.roughnessMap ? '#define USE_ROUGHNESSMAP' : '', a.metalnessMap ? '#define USE_METALNESSMAP' : '', a.alphaMap ? '#define USE_ALPHAMAP' : '', a.vertexColors ? '#define USE_COLOR' : '', a.flatShading ? '#define FLAT_SHADED' : '', a.skinning ? '#define USE_SKINNING' : '', a.useVertexTexture ? '#define BONE_TEXTURE' : '', a.morphTargets ? '#define USE_MORPHTARGETS' : '', a.morphNormals && !1 === a.flatShading ? '#define USE_MORPHNORMALS' : '', a.doubleSided ? '#define DOUBLE_SIDED' : '', a.flipSided ? '#define FLIP_SIDED' : '', '#define NUM_CLIPPING_PLANES ' + a.numClippingPlanes, a.shadowMapEnabled ? '#define USE_SHADOWMAP' : '', a.shadowMapEnabled ? '#define ' + l : '', a.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '', a.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '', a.logarithmicDepthBuffer && e.get( 'EXT_frag_depth' ) ? '#define USE_LOGDEPTHBUF_EXT' : '', 'uniform mat4 modelMatrix;', 'uniform mat4 modelViewMatrix;', 'uniform mat4 projectionMatrix;', 'uniform mat4 viewMatrix;', 'uniform mat3 normalMatrix;', 'uniform vec3 cameraPosition;', 'attribute vec3 position;', 'attribute vec3 normal;', 'attribute vec2 uv;', '#ifdef USE_COLOR', '\tattribute vec3 color;', '#endif', '#ifdef USE_MORPHTARGETS', '\tattribute vec3 morphTarget0;', '\tattribute vec3 morphTarget1;', '\tattribute vec3 morphTarget2;', '\tattribute vec3 morphTarget3;', '\t#ifdef USE_MORPHNORMALS', '\t\tattribute vec3 morphNormal0;', '\t\tattribute vec3 morphNormal1;', '\t\tattribute vec3 morphNormal2;', '\t\tattribute vec3 morphNormal3;', '\t#else', '\t\tattribute vec3 morphTarget4;', '\t\tattribute vec3 morphTarget5;', '\t\tattribute vec3 morphTarget6;', '\t\tattribute vec3 morphTarget7;', '\t#endif', '#endif', '#ifdef USE_SKINNING', '\tattribute vec4 skinIndex;', '\tattribute vec4 skinWeight;', '#endif', '\n'].filter( Jn ).join( '\n' ), m = [b, 'precision ' + a.precision + ' float;', 'precision ' + a.precision + ' int;', '#define SHADER_NAME ' + r.name, w, a.alphaTest ? '#define ALPHATEST ' + a.alphaTest : '', '#define GAMMA_FACTOR ' + x, a.useFog && a.fog ? '#define USE_FOG' : '', a.useFog && a.fogExp ? '#define FOG_EXP2' : '', a.map ? '#define USE_MAP' : '', a.envMap ? '#define USE_ENVMAP' : '', a.envMap ? '#define ' + u : '', a.envMap ? '#define ' + p : '', a.envMap ? '#define ' + d : '', a.lightMap ? '#define USE_LIGHTMAP' : '', a.aoMap ? '#define USE_AOMAP' : '', a.emissiveMap ? '#define USE_EMISSIVEMAP' : '', a.bumpMap ? '#define USE_BUMPMAP' : '', a.normalMap ? '#define USE_NORMALMAP' : '', a.specularMap ? '#define USE_SPECULARMAP' : '', a.roughnessMap ? '#define USE_ROUGHNESSMAP' : '', a.metalnessMap ? '#define USE_METALNESSMAP' : '', a.alphaMap ? '#define USE_ALPHAMAP' : '', a.vertexColors ? '#define USE_COLOR' : '', a.gradientMap ? '#define USE_GRADIENTMAP' : '', a.flatShading ? '#define FLAT_SHADED' : '', a.doubleSided ? '#define DOUBLE_SIDED' : '', a.flipSided ? '#define FLIP_SIDED' : '', '#define NUM_CLIPPING_PLANES ' + a.numClippingPlanes, '#define UNION_CLIPPING_PLANES ' + ( a.numClippingPlanes - a.numClipIntersection ), a.shadowMapEnabled ? '#define USE_SHADOWMAP' : '', a.shadowMapEnabled ? '#define ' + l : '', a.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '', a.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '', a.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '', a.logarithmicDepthBuffer && e.get( 'EXT_frag_depth' ) ? '#define USE_LOGDEPTHBUF_EXT' : '', a.envMap && e.get( 'EXT_shader_texture_lod' ) ? '#define TEXTURE_LOD_EXT' : '', 'uniform mat4 viewMatrix;', 'uniform vec3 cameraPosition;', a.toneMapping !== lt ? '#define TONE_MAPPING' : '', a.toneMapping !== lt ? wi.tonemapping_pars_fragment : '', a.toneMapping !== lt ? function ( t, e ) {
            var i;
            switch (e) {
                case ut:
                    i = 'Linear';
                    break;
                case pt:
                    i = 'Reinhard';
                    break;
                case dt:
                    i = 'Uncharted2';
                    break;
                case ft:
                    i = 'OptimizedCineon';
                    break;
                default:
                    throw new Error( 'unsupported toneMapping: ' + e )
            }
            return 'vec3 ' + t + '( vec3 color ) { return ' + i + 'ToneMapping( color ); }'
        }( 'toneMapping', a.toneMapping ) : '', a.dithering ? '#define DITHERING' : '', a.outputEncoding || a.mapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? wi.encodings_pars_fragment : '', a.mapEncoding ? Zn( 'mapTexelToLinear', a.mapEncoding ) : '', a.envMapEncoding ? Zn( 'envMapTexelToLinear', a.envMapEncoding ) : '', a.emissiveMapEncoding ? Zn( 'emissiveMapTexelToLinear', a.emissiveMapEncoding ) : '', a.outputEncoding ? ( v = 'linearToOutputTexel', g = a.outputEncoding, y = Yn( g ), 'vec4 ' + v + '( vec4 value ) { return LinearTo' + y[0] + y[1] + '; }' ) : '', a.depthPacking ? '#define DEPTH_PACKING ' + n.depthPacking : '', '\n'].filter( Jn ).join( '\n' ) ), c = Kn( c = Qn( c ), a ), h = Kn( h = Qn( h ), a ), n.isShaderMaterial || ( c = $n( c ), h = $n( h ) );
        var T = f + c, S = m + h, A = kn( o, o.VERTEX_SHADER, T ), L = kn( o, o.FRAGMENT_SHADER, S );
        o.attachShader( _, A ), o.attachShader( _, L ), void 0 !== n.index0AttributeName ? o.bindAttribLocation( _, 0, n.index0AttributeName ) : !0 === a.morphTargets && o.bindAttribLocation( _, 0, 'position' ), o.linkProgram( _ );
        var R, P, C = o.getProgramInfoLog( _ ), N = o.getShaderInfoLog( A ), I = o.getShaderInfoLog( L ), O = !0,
            U = !0;
        return !1 === o.getProgramParameter( _, o.LINK_STATUS ) ? ( O = !1, console.error( 'THREE.WebGLProgram: shader error: ', o.getError(), 'gl.VALIDATE_STATUS', o.getProgramParameter( _, o.VALIDATE_STATUS ), 'gl.getProgramInfoLog', C, N, I ) ) : '' !== C ? console.warn( 'THREE.WebGLProgram: gl.getProgramInfoLog()', C ) : '' !== N && '' !== I || ( U = !1 ), U && ( this.diagnostics = {
            runnable: O,
            material: n,
            programLog: C,
            vertexShader: { log: N, prefix: f },
            fragmentShader: { log: I, prefix: m }
        } ), o.deleteShader( A ), o.deleteShader( L ), this.getUniforms = function () {
            return void 0 === R && ( R = new vi( o, _, t ) ), R
        }, this.getAttributes = function () {
            return void 0 === P && ( P = function ( t, e ) {
                for (var i = {}, n = t.getProgramParameter( e, t.ACTIVE_ATTRIBUTES ), r = 0; r < n; r++) {
                    var a = t.getActiveAttrib( e, r ).name;
                    i[a] = t.getAttribLocation( e, a )
                }
                return i
            }( o, _ ) ), P
        }, this.destroy = function () {
            o.deleteProgram( _ ), this.program = void 0
        }, Object.defineProperties( this, {
            uniforms: {
                get: function () {
                    return console.warn( 'THREE.WebGLProgram: .uniforms is now .getUniforms().' ), this.getUniforms()
                }
            }, attributes: {
                get: function () {
                    return console.warn( 'THREE.WebGLProgram: .attributes is now .getAttributes().' ), this.getAttributes()
                }
            }
        } ), this.id = qn++, this.code = i, this.usedTimes = 1, this.program = _, this.vertexShader = A, this.fragmentShader = L, this
    }

    function er( t, e, i ) {
        var n = [], r = {
                MeshDepthMaterial: 'depth',
                MeshDistanceMaterial: 'distanceRGBA',
                MeshNormalMaterial: 'normal',
                MeshBasicMaterial: 'basic',
                MeshLambertMaterial: 'lambert',
                MeshPhongMaterial: 'phong',
                MeshToonMaterial: 'phong',
                MeshStandardMaterial: 'physical',
                MeshPhysicalMaterial: 'physical',
                LineBasicMaterial: 'basic',
                LineDashedMaterial: 'dashed',
                PointsMaterial: 'points',
                ShadowMaterial: 'shadow'
            },
            a = ['precision', 'supportsVertexTextures', 'map', 'mapEncoding', 'envMap', 'envMapMode', 'envMapEncoding', 'lightMap', 'aoMap', 'emissiveMap', 'emissiveMapEncoding', 'bumpMap', 'normalMap', 'displacementMap', 'specularMap', 'roughnessMap', 'metalnessMap', 'gradientMap', 'alphaMap', 'combine', 'vertexColors', 'fog', 'useFog', 'fogExp', 'flatShading', 'sizeAttenuation', 'logarithmicDepthBuffer', 'skinning', 'maxBones', 'useVertexTexture', 'morphTargets', 'morphNormals', 'maxMorphTargets', 'maxMorphNormals', 'premultipliedAlpha', 'numDirLights', 'numPointLights', 'numSpotLights', 'numHemiLights', 'numRectAreaLights', 'shadowMapEnabled', 'shadowMapType', 'toneMapping', 'physicallyCorrectLights', 'alphaTest', 'doubleSided', 'flipSided', 'numClippingPlanes', 'numClipIntersection', 'depthPacking', 'dithering'];

        function o( t, e ) {
            var i;
            return t ? t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && ( console.warn( 'THREE.WebGLPrograms.getTextureEncodingFromMap: don\'t use render targets as textures. Use their .texture property instead.' ), i = t.texture.encoding ) : i = le, i === le && e && ( i = pe ), i
        }

        this.getParameters = function ( e, n, a, s, c, h, l ) {
            var u = r[e.type], p = l.isSkinnedMesh ? function ( t ) {
                var e = t.skeleton.bones;
                if (i.floatVertexTextures) return 1024;
                var n = i.maxVertexUniforms, r = Math.floor( ( n - 20 ) / 4 ), a = Math.min( r, e.length );
                return a < e.length ? ( console.warn( 'THREE.WebGLRenderer: Skeleton has ' + e.length + ' bones. This GPU supports ' + a + '.' ), 0 ) : a
            }( l ) : 0, d = i.precision;
            null !== e.precision && ( d = i.getMaxPrecision( e.precision ) ) !== e.precision && console.warn( 'THREE.WebGLProgram.getParameters:', e.precision, 'not supported, using', d, 'instead.' );
            var f = t.getRenderTarget();
            return {
                shaderID: u,
                precision: d,
                supportsVertexTextures: i.vertexTextures,
                outputEncoding: o( f ? f.texture : null, t.gammaOutput ),
                map: !!e.map,
                mapEncoding: o( e.map, t.gammaInput ),
                envMap: !!e.envMap,
                envMapMode: e.envMap && e.envMap.mapping,
                envMapEncoding: o( e.envMap, t.gammaInput ),
                envMapCubeUV: !!e.envMap && ( e.envMap.mapping === bt || e.envMap.mapping === wt ),
                lightMap: !!e.lightMap,
                aoMap: !!e.aoMap,
                emissiveMap: !!e.emissiveMap,
                emissiveMapEncoding: o( e.emissiveMap, t.gammaInput ),
                bumpMap: !!e.bumpMap,
                normalMap: !!e.normalMap,
                displacementMap: !!e.displacementMap,
                roughnessMap: !!e.roughnessMap,
                metalnessMap: !!e.metalnessMap,
                specularMap: !!e.specularMap,
                alphaMap: !!e.alphaMap,
                gradientMap: !!e.gradientMap,
                combine: e.combine,
                vertexColors: e.vertexColors,
                fog: !!s,
                useFog: e.fog,
                fogExp: s && s.isFogExp2,
                flatShading: e.flatShading,
                sizeAttenuation: e.sizeAttenuation,
                logarithmicDepthBuffer: i.logarithmicDepthBuffer,
                skinning: e.skinning && p > 0,
                maxBones: p,
                useVertexTexture: i.floatVertexTextures,
                morphTargets: e.morphTargets,
                morphNormals: e.morphNormals,
                maxMorphTargets: t.maxMorphTargets,
                maxMorphNormals: t.maxMorphNormals,
                numDirLights: n.directional.length,
                numPointLights: n.point.length,
                numSpotLights: n.spot.length,
                numRectAreaLights: n.rectArea.length,
                numHemiLights: n.hemi.length,
                numClippingPlanes: c,
                numClipIntersection: h,
                dithering: e.dithering,
                shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && a.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: t.toneMapping,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: e.premultipliedAlpha,
                alphaTest: e.alphaTest,
                doubleSided: e.side === A,
                flipSided: e.side === S,
                depthPacking: void 0 !== e.depthPacking && e.depthPacking
            }
        }, this.getProgramCode = function ( e, i ) {
            var n = [];
            if (i.shaderID ? n.push( i.shaderID ) : ( n.push( e.fragmentShader ), n.push( e.vertexShader ) ), void 0 !== e.defines) for (var r in e.defines) n.push( r ), n.push( e.defines[r] );
            for (var o = 0; o < a.length; o++) n.push( i[a[o]] );
            return n.push( e.onBeforeCompile.toString() ), n.push( t.gammaOutput ), n.join()
        }, this.acquireProgram = function ( i, r, a, o ) {
            for (var s, c = 0, h = n.length; c < h; c++) {
                var l = n[c];
                if (l.code === o) {
                    ++( s = l ).usedTimes;
                    break
                }
            }
            return void 0 === s && ( s = new tr( t, e, o, i, r, a ), n.push( s ) ), s
        }, this.releaseProgram = function ( t ) {
            if (0 == --t.usedTimes) {
                var e = n.indexOf( t );
                n[e] = n[n.length - 1], n.pop(), t.destroy()
            }
        }, this.programs = n
    }

    function ir( t, e, i, n, r, a, o ) {
        var s = 'undefined' != typeof WebGL2RenderingContext && t instanceof window.WebGL2RenderingContext;

        function c( t, e ) {
            if (t.width > e || t.height > e) {
                var i = e / Math.max( t.width, t.height ),
                    n = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
                return n.width = Math.floor( t.width * i ), n.height = Math.floor( t.height * i ), n.getContext( '2d' ).drawImage( t, 0, 0, t.width, t.height, 0, 0, n.width, n.height ), console.warn( 'THREE.WebGLRenderer: image is too big (' + t.width + 'x' + t.height + '). Resized to ' + n.width + 'x' + n.height, t ), n
            }
            return t
        }

        function h( t ) {
            return xe.isPowerOfTwo( t.width ) && xe.isPowerOfTwo( t.height )
        }

        function l( t, e ) {
            return t.generateMipmaps && e && t.minFilter !== Tt && t.minFilter !== Lt
        }

        function u( e ) {
            return e === Tt || e === St || e === At ? t.NEAREST : t.LINEAR
        }

        function p( e ) {
            var i = e.target;
            i.removeEventListener( 'dispose', p ), function ( e ) {
                var i = n.get( e );
                if (e.image && i.__image__webglTextureCube) {
                    t.deleteTexture( i.__image__webglTextureCube );
                } else {
                    if (void 0 === i.__webglInit) return;
                    t.deleteTexture( i.__webglTexture )
                }
                n.remove( e )
            }( i ), o.textures--
        }

        function d( e ) {
            var i = e.target;
            i.removeEventListener( 'dispose', d ), function ( e ) {
                var i = n.get( e ), r = n.get( e.texture );
                if (!e) return;
                void 0 !== r.__webglTexture && t.deleteTexture( r.__webglTexture );
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLRenderTargetCube) for (var a = 0; a < 6; a++) t.deleteFramebuffer( i.__webglFramebuffer[a] ), i.__webglDepthbuffer && t.deleteRenderbuffer( i.__webglDepthbuffer[a] ); else t.deleteFramebuffer( i.__webglFramebuffer ), i.__webglDepthbuffer && t.deleteRenderbuffer( i.__webglDepthbuffer );
                n.remove( e.texture ), n.remove( e )
            }( i ), o.textures--
        }

        function f( e, u ) {
            var d = n.get( e );
            if (e.version > 0 && d.__version !== e.version) {
                var f = e.image;
                if (void 0 === f) {
                    console.warn( 'THREE.WebGLRenderer: Texture marked for update but image is undefined', e );
                } else {
                    if (!1 !== f.complete) {
                        return void function ( e, n, u ) {
                            void 0 === e.__webglInit && ( e.__webglInit = !0, n.addEventListener( 'dispose', p ), e.__webglTexture = t.createTexture(), o.textures++ );
                            i.activeTexture( t.TEXTURE0 + u ), i.bindTexture( t.TEXTURE_2D, e.__webglTexture ), t.pixelStorei( t.UNPACK_FLIP_Y_WEBGL, n.flipY ), t.pixelStorei( t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha ), t.pixelStorei( t.UNPACK_ALIGNMENT, n.unpackAlignment );
                            var d = c( n.image, r.maxTextureSize );
                            ( function ( t ) {
                                return t.wrapS !== Mt || t.wrapT !== Mt || t.minFilter !== Tt && t.minFilter !== Lt
                            } )( n ) && !1 === h( d ) && ( d = function ( t ) {
                                if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap) {
                                    var e = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
                                    return e.width = xe.floorPowerOfTwo( t.width ), e.height = xe.floorPowerOfTwo( t.height ), e.getContext( '2d' ).drawImage( t, 0, 0, e.width, e.height ), console.warn( 'THREE.WebGLRenderer: image is not power of two (' + t.width + 'x' + t.height + '). Resized to ' + e.width + 'x' + e.height, t ), e
                                }
                                return t
                            }( d ) );
                            var f = h( d ), v = a.convert( n.format ), g = a.convert( n.type );
                            m( t.TEXTURE_2D, n, f );
                            var y, x = n.mipmaps;
                            if (n.isDepthTexture) {
                                var b = t.DEPTH_COMPONENT;
                                if (n.type === Ft) {
                                    if (!s) throw new Error( 'Float Depth Texture only supported in WebGL2.0' );
                                    b = t.DEPTH_COMPONENT32F
                                } else {
                                    s && ( b = t.DEPTH_COMPONENT16 );
                                }
                                n.format === Yt && b === t.DEPTH_COMPONENT && n.type !== Ot && n.type !== Dt && ( console.warn( 'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.' ), n.type = Ot, g = a.convert( n.type ) ), n.format === Zt && ( b = t.DEPTH_STENCIL, n.type !== jt && ( console.warn( 'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.' ), n.type = jt, g = a.convert( n.type ) ) ), i.texImage2D( t.TEXTURE_2D, 0, b, d.width, d.height, 0, v, g, null )
                            } else if (n.isDataTexture) {
                                if (x.length > 0 && f) {
                                    for (var w = 0, _ = x.length; w < _; w++) y = x[w], i.texImage2D( t.TEXTURE_2D, w, v, y.width, y.height, 0, v, g, y.data );
                                    n.generateMipmaps = !1
                                } else {
                                    i.texImage2D( t.TEXTURE_2D, 0, v, d.width, d.height, 0, v, g, d.data );
                                }
                            } else if (n.isCompressedTexture) {
                                for (var w = 0, _ = x.length; w < _; w++) y = x[w], n.format !== Wt && n.format !== Vt ? i.getCompressedTextureFormats().indexOf( v ) > -1 ? i.compressedTexImage2D( t.TEXTURE_2D, w, v, y.width, y.height, 0, y.data ) : console.warn( 'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()' ) : i.texImage2D( t.TEXTURE_2D, w, v, y.width, y.height, 0, v, g, y.data );
                            } else if (x.length > 0 && f) {
                                for (var w = 0, _ = x.length; w < _; w++) y = x[w], i.texImage2D( t.TEXTURE_2D, w, v, v, g, y );
                                n.generateMipmaps = !1
                            } else {
                                i.texImage2D( t.TEXTURE_2D, 0, v, v, g, d );
                            }
                            l( n, f ) && t.generateMipmap( t.TEXTURE_2D );
                            e.__version = n.version, n.onUpdate && n.onUpdate( n )
                        }( d, e, u );
                    }
                    console.warn( 'THREE.WebGLRenderer: Texture marked for update but image is incomplete', e )
                }
            }
            i.activeTexture( t.TEXTURE0 + u ), i.bindTexture( t.TEXTURE_2D, d.__webglTexture )
        }

        function m( i, o, s ) {
            var c;
            if (s ? ( t.texParameteri( i, t.TEXTURE_WRAP_S, a.convert( o.wrapS ) ), t.texParameteri( i, t.TEXTURE_WRAP_T, a.convert( o.wrapT ) ), t.texParameteri( i, t.TEXTURE_MAG_FILTER, a.convert( o.magFilter ) ), t.texParameteri( i, t.TEXTURE_MIN_FILTER, a.convert( o.minFilter ) ) ) : ( t.texParameteri( i, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE ), t.texParameteri( i, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE ), o.wrapS === Mt && o.wrapT === Mt || console.warn( 'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.', o ), t.texParameteri( i, t.TEXTURE_MAG_FILTER, u( o.magFilter ) ), t.texParameteri( i, t.TEXTURE_MIN_FILTER, u( o.minFilter ) ), o.minFilter !== Tt && o.minFilter !== Lt && console.warn( 'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.', o ) ), c = e.get( 'EXT_texture_filter_anisotropic' )) {
                if (o.type === Ft && null === e.get( 'OES_texture_float_linear' )) return;
                if (o.type === zt && null === e.get( 'OES_texture_half_float_linear' )) return;
                ( o.anisotropy > 1 || n.get( o ).__currentAnisotropy ) && ( t.texParameterf( i, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min( o.anisotropy, r.getMaxAnisotropy() ) ), n.get( o ).__currentAnisotropy = o.anisotropy )
            }
        }

        function v( e, r, o, s ) {
            var c = a.convert( r.texture.format ), h = a.convert( r.texture.type );
            i.texImage2D( s, 0, c, r.width, r.height, 0, c, h, null ), t.bindFramebuffer( t.FRAMEBUFFER, e ), t.framebufferTexture2D( t.FRAMEBUFFER, o, s, n.get( r.texture ).__webglTexture, 0 ), t.bindFramebuffer( t.FRAMEBUFFER, null )
        }

        function g( e, i ) {
            t.bindRenderbuffer( t.RENDERBUFFER, e ), i.depthBuffer && !i.stencilBuffer ? ( t.renderbufferStorage( t.RENDERBUFFER, t.DEPTH_COMPONENT16, i.width, i.height ), t.framebufferRenderbuffer( t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e ) ) : i.depthBuffer && i.stencilBuffer ? ( t.renderbufferStorage( t.RENDERBUFFER, t.DEPTH_STENCIL, i.width, i.height ), t.framebufferRenderbuffer( t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e ) ) : t.renderbufferStorage( t.RENDERBUFFER, t.RGBA4, i.width, i.height ), t.bindRenderbuffer( t.RENDERBUFFER, null )
        }

        function y( e ) {
            var i = n.get( e ), r = !0 === e.isWebGLRenderTargetCube;
            if (e.depthTexture) {
                if (r) throw new Error( 'target.depthTexture not supported in Cube render targets' );
                !function ( e, i ) {
                    if (i && i.isWebGLRenderTargetCube) throw new Error( 'Depth Texture with cube render targets is not supported' );
                    if (t.bindFramebuffer( t.FRAMEBUFFER, e ), !i.depthTexture || !i.depthTexture.isDepthTexture) throw new Error( 'renderTarget.depthTexture must be an instance of THREE.DepthTexture' );
                    n.get( i.depthTexture ).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || ( i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0 ), f( i.depthTexture, 0 );
                    var r = n.get( i.depthTexture ).__webglTexture;
                    if (i.depthTexture.format === Yt) {
                        t.framebufferTexture2D( t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, r, 0 );
                    } else {
                        if (i.depthTexture.format !== Zt) throw new Error( 'Unknown depthTexture format' );
                        t.framebufferTexture2D( t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, r, 0 )
                    }
                }( i.__webglFramebuffer, e )
            } else if (r) {
                i.__webglDepthbuffer = [];
                for (var a = 0; a < 6; a++) t.bindFramebuffer( t.FRAMEBUFFER, i.__webglFramebuffer[a] ), i.__webglDepthbuffer[a] = t.createRenderbuffer(), g( i.__webglDepthbuffer[a], e )
            } else {
                t.bindFramebuffer( t.FRAMEBUFFER, i.__webglFramebuffer ), i.__webglDepthbuffer = t.createRenderbuffer(), g( i.__webglDepthbuffer, e );
            }
            t.bindFramebuffer( t.FRAMEBUFFER, null )
        }

        this.setTexture2D = f, this.setTextureCube = function ( e, s ) {
            var u = n.get( e );
            if (6 === e.image.length) {
                if (e.version > 0 && u.__version !== e.version) {
                    u.__image__webglTextureCube || ( e.addEventListener( 'dispose', p ), u.__image__webglTextureCube = t.createTexture(), o.textures++ ), i.activeTexture( t.TEXTURE0 + s ), i.bindTexture( t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube ), t.pixelStorei( t.UNPACK_FLIP_Y_WEBGL, e.flipY );
                    for (var d = e && e.isCompressedTexture, f = e.image[0] && e.image[0].isDataTexture, v = [], g = 0; g < 6; g++) v[g] = d || f ? f ? e.image[g].image : e.image[g] : c( e.image[g], r.maxCubemapSize );
                    var y = h( v[0] ), x = a.convert( e.format ), b = a.convert( e.type );
                    for (m( t.TEXTURE_CUBE_MAP, e, y ), g = 0; g < 6; g++) if (d) for (var w, _ = v[g].mipmaps, M = 0, E = _.length; M < E; M++) w = _[M], e.format !== Wt && e.format !== Vt ? i.getCompressedTextureFormats().indexOf( x ) > -1 ? i.compressedTexImage2D( t.TEXTURE_CUBE_MAP_POSITIVE_X + g, M, x, w.width, w.height, 0, w.data ) : console.warn( 'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()' ) : i.texImage2D( t.TEXTURE_CUBE_MAP_POSITIVE_X + g, M, x, w.width, w.height, 0, x, b, w.data ); else f ? i.texImage2D( t.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, x, v[g].width, v[g].height, 0, x, b, v[g].data ) : i.texImage2D( t.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, x, x, b, v[g] );
                    l( e, y ) && t.generateMipmap( t.TEXTURE_CUBE_MAP ), u.__version = e.version, e.onUpdate && e.onUpdate( e )
                } else {
                    i.activeTexture( t.TEXTURE0 + s ), i.bindTexture( t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube )
                }
            }
        }, this.setTextureCubeDynamic = function ( e, r ) {
            i.activeTexture( t.TEXTURE0 + r ), i.bindTexture( t.TEXTURE_CUBE_MAP, n.get( e ).__webglTexture )
        }, this.setupRenderTarget = function ( e ) {
            var r = n.get( e ), a = n.get( e.texture );
            e.addEventListener( 'dispose', d ), a.__webglTexture = t.createTexture(), o.textures++;
            var s = !0 === e.isWebGLRenderTargetCube, c = h( e );
            if (s) {
                r.__webglFramebuffer = [];
                for (var u = 0; u < 6; u++) r.__webglFramebuffer[u] = t.createFramebuffer()
            } else {
                r.__webglFramebuffer = t.createFramebuffer();
            }
            if (s) {
                for (i.bindTexture( t.TEXTURE_CUBE_MAP, a.__webglTexture ), m( t.TEXTURE_CUBE_MAP, e.texture, c ), u = 0; u < 6; u++) v( r.__webglFramebuffer[u], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + u );
                l( e.texture, c ) && t.generateMipmap( t.TEXTURE_CUBE_MAP ), i.bindTexture( t.TEXTURE_CUBE_MAP, null )
            } else {
                i.bindTexture( t.TEXTURE_2D, a.__webglTexture ), m( t.TEXTURE_2D, e.texture, c ), v( r.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D ), l( e.texture, c ) && t.generateMipmap( t.TEXTURE_2D ), i.bindTexture( t.TEXTURE_2D, null );
            }
            e.depthBuffer && y( e )
        }, this.updateRenderTargetMipmap = function ( e ) {
            var r = e.texture;
            if (l( r, h( e ) )) {
                var a = e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D, o = n.get( r ).__webglTexture;
                i.bindTexture( a, o ), t.generateMipmap( a ), i.bindTexture( a, null )
            }
        }
    }

    function nr( t, e, i, n ) {
        Ki.call( this ), this.type = 'PerspectiveCamera', this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    function rr( t ) {
        nr.call( this ), this.cameras = t || []
    }

    function ar( t ) {
        console.log( 'THREE.WebGLRenderer', m );
        var e = void 0 !== ( t = t || {} ).canvas ? t.canvas : document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' ),
            i = void 0 !== t.context ? t.context : null, n = void 0 !== t.alpha && t.alpha,
            r = void 0 === t.depth || t.depth, a = void 0 === t.stencil || t.stencil,
            o = void 0 !== t.antialias && t.antialias, s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
            c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer, h = [], l = [], u = null, p = [], d = [];
        this.domElement = e, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = ut, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var f, v, g, y, M, E, T, R, P, st, ct, ht, lt, pt, dt, ft, mt, vt, gt, yt = this, xt = !1, bt = null, wt = null,
            ae = -1, oe = '', le = null, ue = null, pe = new Ae, de = new Ae, fe = null, me = 0, ve = e.width,
            ge = e.height, ye = 1, be = new Ae( 0, 0, ve, ge ), _e = new Ae( 0, 0, ve, ge ), Te = !1, Se = new ki,
            Le = new function () {
                var t = this, e = null, i = 0, n = !1, r = !1, a = new Bi, o = new Ee,
                    s = { value: null, needsUpdate: !1 };

                function c() {
                    s.value !== e && ( s.value = e, s.needsUpdate = i > 0 ), t.numPlanes = i, t.numIntersection = 0
                }

                function h( e, i, n, r ) {
                    var c = null !== e ? e.length : 0, h = null;
                    if (0 !== c) {
                        if (h = s.value, !0 !== r || null === h) {
                            var l = n + 4 * c, u = i.matrixWorldInverse;
                            o.getNormalMatrix( u ), ( null === h || h.length < l ) && ( h = new Float32Array( l ) );
                            for (var p = 0, d = n; p !== c; ++p, d += 4) a.copy( e[p] ).applyMatrix4( u, o ), a.normal.toArray( h, d ), h[d + 3] = a.constant
                        }
                        s.value = h, s.needsUpdate = !0
                    }
                    return t.numPlanes = c, h
                }

                this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function ( t, r, a ) {
                    var o = 0 !== t.length || r || 0 !== i || n;
                    return n = r, e = h( t, a, 0 ), i = t.length, o
                }, this.beginShadows = function () {
                    r = !0, h( null )
                }, this.endShadows = function () {
                    r = !1, c()
                }, this.setState = function ( t, a, o, l, u, p ) {
                    if (!n || null === t || 0 === t.length || r && !o) {
                        r ? h( null ) : c();
                    } else {
                        var d = r ? 0 : i, f = 4 * d, m = u.clippingState || null;
                        s.value = m, m = h( t, l, f, p );
                        for (var v = 0; v !== f; ++v) m[v] = e[v];
                        u.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += d
                    }
                }
            }, Re = !1, Ce = !1, Ne = new we, Ie = new Me, Oe = { geometries: 0, textures: 0 },
            Ue = { frame: 0, calls: 0, vertices: 0, faces: 0, points: 0 };

        function De() {
            return null === bt ? ye : 1
        }

        this.info = { render: Ue, memory: Oe, programs: null };
        try {
            var Fe = { alpha: n, depth: r, stencil: a, antialias: o, premultipliedAlpha: s, preserveDrawingBuffer: c };
            if (null === ( f = i || e.getContext( 'webgl', Fe ) || e.getContext( 'experimental-webgl', Fe ) )) throw null !== e.getContext( 'webgl' ) ? 'Error creating WebGL context with your selected attributes.' : 'Error creating WebGL context.';
            void 0 === f.getShaderPrecisionFormat && ( f.getShaderPrecisionFormat = function () {
                return { rangeMin: 1, rangeMax: 1, precision: 1 }
            } ), e.addEventListener( 'webglcontextlost', Ge, !1 ), e.addEventListener( 'webglcontextrestored', je, !1 )
        } catch (t) {
            console.error( 'THREE.WebGLRenderer: ' + t )
        }

        function ze() {
            ( v = new function ( t ) {
                var e = {};
                return {
                    get: function ( i ) {
                        if (void 0 !== e[i]) return e[i];
                        var n;
                        switch (i) {
                            case'WEBGL_depth_texture':
                                n = t.getExtension( 'WEBGL_depth_texture' ) || t.getExtension( 'MOZ_WEBGL_depth_texture' ) || t.getExtension( 'WEBKIT_WEBGL_depth_texture' );
                                break;
                            case'EXT_texture_filter_anisotropic':
                                n = t.getExtension( 'EXT_texture_filter_anisotropic' ) || t.getExtension( 'MOZ_EXT_texture_filter_anisotropic' ) || t.getExtension( 'WEBKIT_EXT_texture_filter_anisotropic' );
                                break;
                            case'WEBGL_compressed_texture_s3tc':
                                n = t.getExtension( 'WEBGL_compressed_texture_s3tc' ) || t.getExtension( 'MOZ_WEBGL_compressed_texture_s3tc' ) || t.getExtension( 'WEBKIT_WEBGL_compressed_texture_s3tc' );
                                break;
                            case'WEBGL_compressed_texture_pvrtc':
                                n = t.getExtension( 'WEBGL_compressed_texture_pvrtc' ) || t.getExtension( 'WEBKIT_WEBGL_compressed_texture_pvrtc' );
                                break;
                            case'WEBGL_compressed_texture_etc1':
                                n = t.getExtension( 'WEBGL_compressed_texture_etc1' );
                                break;
                            default:
                                n = t.getExtension( i )
                        }
                        return null === n && console.warn( 'THREE.WebGLRenderer: ' + i + ' extension not supported.' ), e[i] = n, n
                    }
                }
            }( f ) ).get( 'WEBGL_depth_texture' ), v.get( 'OES_texture_float' ), v.get( 'OES_texture_float_linear' ), v.get( 'OES_texture_half_float' ), v.get( 'OES_texture_half_float_linear' ), v.get( 'OES_standard_derivatives' ), v.get( 'OES_element_index_uint' ), v.get( 'ANGLE_instanced_arrays' ), gt = new function ( t, e ) {
                return {
                    convert: function ( i ) {
                        var n;
                        if (i === _t) return t.REPEAT;
                        if (i === Mt) return t.CLAMP_TO_EDGE;
                        if (i === Et) return t.MIRRORED_REPEAT;
                        if (i === Tt) return t.NEAREST;
                        if (i === St) return t.NEAREST_MIPMAP_NEAREST;
                        if (i === At) return t.NEAREST_MIPMAP_LINEAR;
                        if (i === Lt) return t.LINEAR;
                        if (i === Rt) return t.LINEAR_MIPMAP_NEAREST;
                        if (i === Pt) return t.LINEAR_MIPMAP_LINEAR;
                        if (i === Ct) return t.UNSIGNED_BYTE;
                        if (i === Bt) return t.UNSIGNED_SHORT_4_4_4_4;
                        if (i === kt) return t.UNSIGNED_SHORT_5_5_5_1;
                        if (i === Gt) return t.UNSIGNED_SHORT_5_6_5;
                        if (i === Nt) return t.BYTE;
                        if (i === It) return t.SHORT;
                        if (i === Ot) return t.UNSIGNED_SHORT;
                        if (i === Ut) return t.INT;
                        if (i === Dt) return t.UNSIGNED_INT;
                        if (i === Ft) return t.FLOAT;
                        if (i === zt && null !== ( n = e.get( 'OES_texture_half_float' ) )) return n.HALF_FLOAT_OES;
                        if (i === Ht) return t.ALPHA;
                        if (i === Vt) return t.RGB;
                        if (i === Wt) return t.RGBA;
                        if (i === Xt) return t.LUMINANCE;
                        if (i === qt) return t.LUMINANCE_ALPHA;
                        if (i === Yt) return t.DEPTH_COMPONENT;
                        if (i === Zt) return t.DEPTH_STENCIL;
                        if (i === F) return t.FUNC_ADD;
                        if (i === z) return t.FUNC_SUBTRACT;
                        if (i === B) return t.FUNC_REVERSE_SUBTRACT;
                        if (i === j) return t.ZERO;
                        if (i === H) return t.ONE;
                        if (i === V) return t.SRC_COLOR;
                        if (i === W) return t.ONE_MINUS_SRC_COLOR;
                        if (i === X) return t.SRC_ALPHA;
                        if (i === q) return t.ONE_MINUS_SRC_ALPHA;
                        if (i === Y) return t.DST_ALPHA;
                        if (i === Z) return t.ONE_MINUS_DST_ALPHA;
                        if (i === J) return t.DST_COLOR;
                        if (i === K) return t.ONE_MINUS_DST_COLOR;
                        if (i === Q) return t.SRC_ALPHA_SATURATE;
                        if (( i === Jt || i === Kt || i === Qt || i === $t ) && null !== ( n = e.get( 'WEBGL_compressed_texture_s3tc' ) )) {
                            if (i === Jt) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                            if (i === Kt) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                            if (i === Qt) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                            if (i === $t) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
                        }
                        if (( i === te || i === ee || i === ie || i === ne ) && null !== ( n = e.get( 'WEBGL_compressed_texture_pvrtc' ) )) {
                            if (i === te) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                            if (i === ee) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                            if (i === ie) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                            if (i === ne) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                        }
                        if (i === re && null !== ( n = e.get( 'WEBGL_compressed_texture_etc1' ) )) return n.COMPRESSED_RGB_ETC1_WEBGL;
                        if (( i === k || i === G ) && null !== ( n = e.get( 'EXT_blend_minmax' ) )) {
                            if (i === k) return n.MIN_EXT;
                            if (i === G) return n.MAX_EXT
                        }
                        return i === jt && null !== ( n = e.get( 'WEBGL_depth_texture' ) ) ? n.UNSIGNED_INT_24_8_WEBGL : 0
                    }
                }
            }( f, v ), g = new function ( t, e, i ) {
                var n;

                function r( e ) {
                    if ('highp' === e) {
                        if (t.getShaderPrecisionFormat( t.VERTEX_SHADER, t.HIGH_FLOAT ).precision > 0 && t.getShaderPrecisionFormat( t.FRAGMENT_SHADER, t.HIGH_FLOAT ).precision > 0) return 'highp';
                        e = 'mediump'
                    }
                    return 'mediump' === e && t.getShaderPrecisionFormat( t.VERTEX_SHADER, t.MEDIUM_FLOAT ).precision > 0 && t.getShaderPrecisionFormat( t.FRAGMENT_SHADER, t.MEDIUM_FLOAT ).precision > 0 ? 'mediump' : 'lowp'
                }

                var a = void 0 !== i.precision ? i.precision : 'highp', o = r( a );
                o !== a && ( console.warn( 'THREE.WebGLRenderer:', a, 'not supported, using', o, 'instead.' ), a = o );
                var s = !0 === i.logarithmicDepthBuffer, c = t.getParameter( t.MAX_TEXTURE_IMAGE_UNITS ),
                    h = t.getParameter( t.MAX_VERTEX_TEXTURE_IMAGE_UNITS ), l = t.getParameter( t.MAX_TEXTURE_SIZE ),
                    u = t.getParameter( t.MAX_CUBE_MAP_TEXTURE_SIZE ), p = t.getParameter( t.MAX_VERTEX_ATTRIBS ),
                    d = t.getParameter( t.MAX_VERTEX_UNIFORM_VECTORS ), f = t.getParameter( t.MAX_VARYING_VECTORS ),
                    m = t.getParameter( t.MAX_FRAGMENT_UNIFORM_VECTORS ), v = h > 0, g = !!e.get( 'OES_texture_float' );
                return {
                    getMaxAnisotropy: function () {
                        if (void 0 !== n) return n;
                        var i = e.get( 'EXT_texture_filter_anisotropic' );
                        return n = null !== i ? t.getParameter( i.MAX_TEXTURE_MAX_ANISOTROPY_EXT ) : 0
                    },
                    getMaxPrecision: r,
                    precision: a,
                    logarithmicDepthBuffer: s,
                    maxTextures: c,
                    maxVertexTextures: h,
                    maxTextureSize: l,
                    maxCubemapSize: u,
                    maxAttributes: p,
                    maxVertexUniforms: d,
                    maxVaryings: f,
                    maxFragmentUniforms: m,
                    vertexTextures: v,
                    floatFragmentTextures: g,
                    floatVertexTextures: v && g
                }
            }( f, v, t ), ( y = new function ( t, e, i ) {
                var n = new function () {
                        var e = !1, i = new Ae, n = null, r = new Ae( 0, 0, 0, 0 );
                        return {
                            setMask: function ( i ) {
                                n === i || e || ( t.colorMask( i, i, i, i ), n = i )
                            }, setLocked: function ( t ) {
                                e = t
                            }, setClear: function ( e, n, a, o, s ) {
                                !0 === s && ( e *= o, n *= o, a *= o ), i.set( e, n, a, o ), !1 === r.equals( i ) && ( t.clearColor( e, n, a, o ), r.copy( i ) )
                            }, reset: function () {
                                e = !1, n = null, r.set( -1, 0, 0, 0 )
                            }
                        }
                    }, r = new function () {
                        var e = !1, i = null, n = null, r = null;
                        return {
                            setTest: function ( e ) {
                                e ? X( t.DEPTH_TEST ) : q( t.DEPTH_TEST )
                            }, setMask: function ( n ) {
                                i === n || e || ( t.depthMask( n ), i = n )
                            }, setFunc: function ( e ) {
                                if (n !== e) {
                                    if (e) {
                                        switch (e) {
                                            case $:
                                                t.depthFunc( t.NEVER );
                                                break;
                                            case tt:
                                                t.depthFunc( t.ALWAYS );
                                                break;
                                            case et:
                                                t.depthFunc( t.LESS );
                                                break;
                                            case it:
                                                t.depthFunc( t.LEQUAL );
                                                break;
                                            case nt:
                                                t.depthFunc( t.EQUAL );
                                                break;
                                            case rt:
                                                t.depthFunc( t.GEQUAL );
                                                break;
                                            case at:
                                                t.depthFunc( t.GREATER );
                                                break;
                                            case ot:
                                                t.depthFunc( t.NOTEQUAL );
                                                break;
                                            default:
                                                t.depthFunc( t.LEQUAL )
                                        }
                                    } else {
                                        t.depthFunc( t.LEQUAL );
                                    }
                                    n = e
                                }
                            }, setLocked: function ( t ) {
                                e = t
                            }, setClear: function ( e ) {
                                r !== e && ( t.clearDepth( e ), r = e )
                            }, reset: function () {
                                e = !1, i = null, n = null, r = null
                            }
                        }
                    }, a = new function () {
                        var e = !1, i = null, n = null, r = null, a = null, o = null, s = null, c = null, h = null;
                        return {
                            setTest: function ( e ) {
                                e ? X( t.STENCIL_TEST ) : q( t.STENCIL_TEST )
                            }, setMask: function ( n ) {
                                i === n || e || ( t.stencilMask( n ), i = n )
                            }, setFunc: function ( e, i, o ) {
                                n === e && r === i && a === o || ( t.stencilFunc( e, i, o ), n = e, r = i, a = o )
                            }, setOp: function ( e, i, n ) {
                                o === e && s === i && c === n || ( t.stencilOp( e, i, n ), o = e, s = i, c = n )
                            }, setLocked: function ( t ) {
                                e = t
                            }, setClear: function ( e ) {
                                h !== e && ( t.clearStencil( e ), h = e )
                            }, reset: function () {
                                e = !1, i = null, n = null, r = null, a = null, o = null, s = null, c = null, h = null
                            }
                        }
                    }, o = t.getParameter( t.MAX_VERTEX_ATTRIBS ), s = new Uint8Array( o ), c = new Uint8Array( o ),
                    h = new Uint8Array( o ), l = {}, u = null, p = null, d = null, f = null, m = null, v = null,
                    g = null, y = null, _ = null, M = !1, E = null, T = null, L = null, R = null, P = null,
                    F = t.getParameter( t.MAX_COMBINED_TEXTURE_IMAGE_UNITS ),
                    z = parseFloat( /^WebGL\ ([0-9])/.exec( t.getParameter( t.VERSION ) )[1] ),
                    B = parseFloat( z ) >= 1, k = null, G = {}, j = new Ae, H = new Ae;

                function V( e, i, n ) {
                    var r = new Uint8Array( 4 ), a = t.createTexture();
                    t.bindTexture( e, a ), t.texParameteri( e, t.TEXTURE_MIN_FILTER, t.NEAREST ), t.texParameteri( e, t.TEXTURE_MAG_FILTER, t.NEAREST );
                    for (var o = 0; o < n; o++) t.texImage2D( i + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r );
                    return a
                }

                var W = {};

                function X( e ) {
                    !0 !== l[e] && ( t.enable( e ), l[e] = !0 )
                }

                function q( e ) {
                    !1 !== l[e] && ( t.disable( e ), l[e] = !1 )
                }

                function Y( e, n, r, a, o, s, c, h ) {
                    if (e !== C ? X( t.BLEND ) : q( t.BLEND ), e !== D) {
                        if (e !== d || h !== M) {
                            switch (e) {
                                case I:
                                    h ? ( t.blendEquationSeparate( t.FUNC_ADD, t.FUNC_ADD ), t.blendFuncSeparate( t.ONE, t.ONE, t.ONE, t.ONE ) ) : ( t.blendEquation( t.FUNC_ADD ), t.blendFunc( t.SRC_ALPHA, t.ONE ) );
                                    break;
                                case O:
                                    h ? ( t.blendEquationSeparate( t.FUNC_ADD, t.FUNC_ADD ), t.blendFuncSeparate( t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA ) ) : ( t.blendEquation( t.FUNC_ADD ), t.blendFunc( t.ZERO, t.ONE_MINUS_SRC_COLOR ) );
                                    break;
                                case U:
                                    h ? ( t.blendEquationSeparate( t.FUNC_ADD, t.FUNC_ADD ), t.blendFuncSeparate( t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA ) ) : ( t.blendEquation( t.FUNC_ADD ), t.blendFunc( t.ZERO, t.SRC_COLOR ) );
                                    break;
                                default:
                                    h ? ( t.blendEquationSeparate( t.FUNC_ADD, t.FUNC_ADD ), t.blendFuncSeparate( t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA ) ) : ( t.blendEquationSeparate( t.FUNC_ADD, t.FUNC_ADD ), t.blendFuncSeparate( t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA ) )
                            }
                        }
                        f = null, m = null, v = null, g = null, y = null, _ = null
                    } else {
                        o = o || n, s = s || r, c = c || a, n === f && o === g || ( t.blendEquationSeparate( i.convert( n ), i.convert( o ) ), f = n, g = o ), r === m && a === v && s === y && c === _ || ( t.blendFuncSeparate( i.convert( r ), i.convert( a ), i.convert( s ), i.convert( c ) ), m = r, v = a, y = s, _ = c );
                    }
                    d = e, M = h
                }

                function Z( e ) {
                    E !== e && ( e ? t.frontFace( t.CW ) : t.frontFace( t.CCW ), E = e )
                }

                function J( e ) {
                    e !== x ? ( X( t.CULL_FACE ), e !== T && ( e === b ? t.cullFace( t.BACK ) : e === w ? t.cullFace( t.FRONT ) : t.cullFace( t.FRONT_AND_BACK ) ) ) : q( t.CULL_FACE ), T = e
                }

                function K( e, i, n ) {
                    e ? ( X( t.POLYGON_OFFSET_FILL ), R === i && P === n || ( t.polygonOffset( i, n ), R = i, P = n ) ) : q( t.POLYGON_OFFSET_FILL )
                }

                function Q( e ) {
                    void 0 === e && ( e = t.TEXTURE0 + F - 1 ), k !== e && ( t.activeTexture( e ), k = e )
                }

                return W[t.TEXTURE_2D] = V( t.TEXTURE_2D, t.TEXTURE_2D, 1 ), W[t.TEXTURE_CUBE_MAP] = V( t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6 ), n.setClear( 0, 0, 0, 1 ), r.setClear( 1 ), a.setClear( 0 ), X( t.DEPTH_TEST ), r.setFunc( it ), Z( !1 ), J( b ), X( t.CULL_FACE ), X( t.BLEND ), Y( N ), {
                    buffers: { color: n, depth: r, stencil: a }, initAttributes: function () {
                        for (var t = 0, e = s.length; t < e; t++) s[t] = 0
                    }, enableAttribute: function ( i ) {
                        s[i] = 1, 0 === c[i] && ( t.enableVertexAttribArray( i ), c[i] = 1 ), 0 !== h[i] && ( e.get( 'ANGLE_instanced_arrays' ).vertexAttribDivisorANGLE( i, 0 ), h[i] = 0 )
                    }, enableAttributeAndDivisor: function ( i, n ) {
                        s[i] = 1, 0 === c[i] && ( t.enableVertexAttribArray( i ), c[i] = 1 ), h[i] !== n && ( e.get( 'ANGLE_instanced_arrays' ).vertexAttribDivisorANGLE( i, n ), h[i] = n )
                    }, disableUnusedAttributes: function () {
                        for (var e = 0, i = c.length; e !== i; ++e) c[e] !== s[e] && ( t.disableVertexAttribArray( e ), c[e] = 0 )
                    }, enable: X, disable: q, getCompressedTextureFormats: function () {
                        if (null === u && ( u = [], e.get( 'WEBGL_compressed_texture_pvrtc' ) || e.get( 'WEBGL_compressed_texture_s3tc' ) || e.get( 'WEBGL_compressed_texture_etc1' ) )) for (var i = t.getParameter( t.COMPRESSED_TEXTURE_FORMATS ), n = 0; n < i.length; n++) u.push( i[n] );
                        return u
                    }, useProgram: function ( e ) {
                        return p !== e && ( t.useProgram( e ), p = e, !0 )
                    }, setBlending: Y, setMaterial: function ( e ) {
                        e.side === A ? q( t.CULL_FACE ) : X( t.CULL_FACE ), Z( e.side === S ), !0 === e.transparent ? Y( e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha ) : Y( C ), r.setFunc( e.depthFunc ), r.setTest( e.depthTest ), r.setMask( e.depthWrite ), n.setMask( e.colorWrite ), K( e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits )
                    }, setFlipSided: Z, setCullFace: J, setLineWidth: function ( e ) {
                        e !== L && ( B && t.lineWidth( e ), L = e )
                    }, setPolygonOffset: K, setScissorTest: function ( e ) {
                        e ? X( t.SCISSOR_TEST ) : q( t.SCISSOR_TEST )
                    }, activeTexture: Q, bindTexture: function ( e, i ) {
                        null === k && Q();
                        var n = G[k];
                        void 0 === n && ( n = {
                            type: void 0,
                            texture: void 0
                        }, G[k] = n ), n.type === e && n.texture === i || ( t.bindTexture( e, i || W[e] ), n.type = e, n.texture = i )
                    }, compressedTexImage2D: function () {
                        try {
                            t.compressedTexImage2D.apply( t, arguments )
                        } catch (t) {
                            console.error( 'THREE.WebGLState:', t )
                        }
                    }, texImage2D: function () {
                        try {
                            t.texImage2D.apply( t, arguments )
                        } catch (t) {
                            console.error( 'THREE.WebGLState:', t )
                        }
                    }, scissor: function ( e ) {
                        !1 === j.equals( e ) && ( t.scissor( e.x, e.y, e.z, e.w ), j.copy( e ) )
                    }, viewport: function ( e ) {
                        !1 === H.equals( e ) && ( t.viewport( e.x, e.y, e.z, e.w ), H.copy( e ) )
                    }, reset: function () {
                        for (var e = 0; e < c.length; e++) 1 === c[e] && ( t.disableVertexAttribArray( e ), c[e] = 0 );
                        l = {}, u = null, k = null, G = {}, p = null, d = null, E = null, T = null, n.reset(), r.reset(), a.reset()
                    }
                }
            }( f, v, gt ) ).scissor( de.copy( _e ).multiplyScalar( ye ) ), y.viewport( pe.copy( be ).multiplyScalar( ye ) ), M = new function () {
                var t = {};
                return {
                    get: function ( e ) {
                        var i = e.uuid, n = t[i];
                        return void 0 === n && ( n = {}, t[i] = n ), n
                    }, remove: function ( e ) {
                        delete t[e.uuid]
                    }, clear: function () {
                        t = {}
                    }
                }
            }, E = new ir( f, v, y, M, g, gt, Oe ), T = new ji( f ), R = new function ( t, e, i ) {
                var n = {}, r = {};

                function a( t ) {
                    var o = t.target, s = n[o.id];
                    for (var c in null !== s.index && e.remove( s.index ), s.attributes) e.remove( s.attributes[c] );
                    o.removeEventListener( 'dispose', a ), delete n[o.id];
                    var h = r[o.id];
                    h && ( e.remove( h ), delete r[o.id] ), ( h = r[s.id] ) && ( e.remove( h ), delete r[s.id] ), i.geometries--
                }

                return {
                    get: function ( t, e ) {
                        var r = n[e.id];
                        return r || ( e.addEventListener( 'dispose', a ), e.isBufferGeometry ? r = e : e.isGeometry && ( void 0 === e._bufferGeometry && ( e._bufferGeometry = ( new En ).setFromObject( t ) ), r = e._bufferGeometry ), n[e.id] = r, i.geometries++, r )
                    }, update: function ( i ) {
                        var n = i.index, r = i.attributes;
                        for (var a in null !== n && e.update( n, t.ELEMENT_ARRAY_BUFFER ), r) e.update( r[a], t.ARRAY_BUFFER );
                        var o = i.morphAttributes;
                        for (var a in o) for (var s = o[a], c = 0, h = s.length; c < h; c++) e.update( s[c], t.ARRAY_BUFFER )
                    }, getWireframeAttribute: function ( i ) {
                        var n = r[i.id];
                        if (n) return n;
                        var a, o = [], s = i.index, c = i.attributes;
                        if (null !== s) {
                            for (var h = 0, l = ( a = s.array ).length; h < l; h += 3) {
                                var u = a[h + 0], p = a[h + 1], d = a[h + 2];
                                o.push( u, p, p, d, d, u )
                            }
                        } else {
                            for (h = 0, l = ( a = c.position.array ).length / 3 - 1; h < l; h += 3) u = h + 0, p = h + 1, d = h + 2, o.push( u, p, p, d, d, u );
                        }
                        return n = new ( mn( o ) > 65535 ? un : hn )( o, 1 ), e.update( n, t.ELEMENT_ARRAY_BUFFER ), r[i.id] = n, n
                    }
                }
            }( f, T, Oe ), P = new function ( t, e ) {
                var i = {};
                return {
                    update: function ( n ) {
                        var r = e.frame, a = n.geometry, o = t.get( n, a );
                        return i[o.id] !== r && ( a.isGeometry && o.updateFromObject( n ), t.update( o ), i[o.id] = r ), o
                    }, clear: function () {
                        i = {}
                    }
                }
            }( R, Ue ), pt = new function ( t ) {
                var e = {}, i = new Float32Array( 8 );
                return {
                    update: function ( n, r, a, o ) {
                        var s = n.morphTargetInfluences, c = s.length, h = e[r.id];
                        if (void 0 === h) {
                            h = [];
                            for (var l = 0; l < c; l++) h[l] = [l, 0];
                            e[r.id] = h
                        }
                        var u = a.morphTargets && r.morphAttributes.position,
                            p = a.morphNormals && r.morphAttributes.normal;
                        for (l = 0; l < c; l++) 0 !== ( d = h[l] )[1] && ( u && r.removeAttribute( 'morphTarget' + l ), p && r.removeAttribute( 'morphNormal' + l ) );
                        for (l = 0; l < c; l++) ( d = h[l] )[0] = l, d[1] = s[l];
                        for (h.sort( zn ), l = 0; l < 8; l++) {
                            var d;
                            if (d = h[l]) {
                                var f = d[0], m = d[1];
                                if (m) {
                                    u && r.addAttribute( 'morphTarget' + l, u[f] ), p && r.addAttribute( 'morphNormal' + l, p[f] ), i[l] = m;
                                    continue
                                }
                            }
                            i[l] = 0
                        }
                        o.getUniforms().setValue( t, 'morphTargetInfluences', i )
                    }
                }
            }( f ), ct = new er( yt, v, g ), st = new Bn, ht = new Fn, lt = new function ( t, e, i, n ) {
                var r, a, o, s = new yi( 0 ), c = 0;

                function h( t, i ) {
                    e.buffers.color.setClear( t.r, t.g, t.b, i, n )
                }

                return {
                    getClearColor: function () {
                        return s
                    }, setClearColor: function ( t, e ) {
                        s.set( t ), h( s, c = void 0 !== e ? e : 1 )
                    }, getClearAlpha: function () {
                        return c
                    }, setClearAlpha: function ( t ) {
                        h( s, c = t )
                    }, render: function ( e, n, l, u ) {
                        var p = n.background;
                        null === p ? h( s, c ) : p && p.isColor && ( h( p, 1 ), u = !0 ), ( t.autoClear || u ) && t.clear( t.autoClearColor, t.autoClearDepth, t.autoClearStencil ), p && p.isCubeTexture ? ( void 0 === o && ( ( o = new On( new Sn( 1, 1, 1 ), new Pn( {
                            uniforms: _i.cube.uniforms,
                            vertexShader: _i.cube.vertexShader,
                            fragmentShader: _i.cube.fragmentShader,
                            side: S,
                            depthTest: !0,
                            depthWrite: !1,
                            fog: !1
                        } ) ) ).geometry.removeAttribute( 'normal' ), o.geometry.removeAttribute( 'uv' ), o.onBeforeRender = function ( t, e, i ) {
                            this.matrixWorld.copyPosition( i.matrixWorld )
                        }, i.update( o.geometry ) ), o.material.uniforms.tCube.value = p, e.push( o, o.geometry, o.material, 0, null ) ) : p && p.isTexture && ( void 0 === r && ( r = new Qi( -1, 1, 1, -1, 0, 1 ), a = new On( new Ln( 2, 2 ), new Rn( {
                            depthTest: !1,
                            depthWrite: !1,
                            fog: !1
                        } ) ), i.update( a.geometry ) ), a.material.map = p, t.renderBufferDirect( r, null, a.geometry, a.material, a, null ) )
                    }
                }
            }( yt, y, R, s ), dt = new function ( t, e, i ) {
                var n;
                this.setMode = function ( t ) {
                    n = t
                }, this.render = function ( e, r ) {
                    t.drawArrays( n, e, r ), i.calls++, i.vertices += r, n === t.TRIANGLES ? i.faces += r / 3 : n === t.POINTS && ( i.points += r )
                }, this.renderInstances = function ( r, a, o ) {
                    var s = e.get( 'ANGLE_instanced_arrays' );
                    if (null !== s) {
                        var c = r.attributes.position;
                        c.isInterleavedBufferAttribute ? ( o = c.data.count, s.drawArraysInstancedANGLE( n, 0, o, r.maxInstancedCount ) ) : s.drawArraysInstancedANGLE( n, a, o, r.maxInstancedCount ), i.calls++, i.vertices += o * r.maxInstancedCount, n === t.TRIANGLES ? i.faces += r.maxInstancedCount * o / 3 : n === t.POINTS && ( i.points += r.maxInstancedCount * o )
                    } else {
                        console.error( 'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' )
                    }
                }
            }( f, v, Ue ), ft = new function ( t, e, i ) {
                var n, r, a;
                this.setMode = function ( t ) {
                    n = t
                }, this.setIndex = function ( t ) {
                    r = t.type, a = t.bytesPerElement
                }, this.render = function ( e, o ) {
                    t.drawElements( n, o, r, e * a ), i.calls++, i.vertices += o, n === t.TRIANGLES ? i.faces += o / 3 : n === t.POINTS && ( i.points += o )
                }, this.renderInstances = function ( o, s, c ) {
                    var h = e.get( 'ANGLE_instanced_arrays' );
                    null !== h ? ( h.drawElementsInstancedANGLE( n, c, r, s * a, o.maxInstancedCount ), i.calls++, i.vertices += c * o.maxInstancedCount, n === t.TRIANGLES ? i.faces += o.maxInstancedCount * c / 3 : n === t.POINTS && ( i.points += o.maxInstancedCount * c ) ) : console.error( 'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' )
                }
            }( f, v, Ue ), mt = new Ei( yt, f, y, E, g ), vt = new Si( yt, f, y, E, g ), yt.info.programs = ct.programs, yt.context = f, yt.capabilities = g, yt.extensions = v, yt.properties = M, yt.renderLists = ht, yt.state = y
        }

        ze();
        var Be = new function ( t ) {
            var e = this, i = null, n = null;
            'undefined' != typeof window && 'VRFrameData' in window && ( n = new window.VRFrameData );
            var r = new we, a = new we, o = new we, s = new nr;
            s.bounds = new Ae( 0, 0, .5, 1 ), s.layers.enable( 1 );
            var c = new nr;
            c.bounds = new Ae( .5, 0, .5, 1 ), c.layers.enable( 2 );
            var h, l, u = new rr( [s, c] );

            function p() {
                if (null !== i && i.isPresenting) {
                    var n = i.getEyeParameters( 'left' ), r = n.renderWidth, a = n.renderHeight;
                    l = t.getPixelRatio(), h = t.getSize(), t.setDrawingBufferSize( 2 * r, a, 1 )
                } else {
                    e.enabled && t.setDrawingBufferSize( h.width, h.height, l )
                }
            }

            u.layers.enable( 1 ), u.layers.enable( 2 ), 'undefined' != typeof window && window.addEventListener( 'vrdisplaypresentchange', p, !1 ), this.enabled = !1, this.standing = !1, this.getDevice = function () {
                return i
            }, this.setDevice = function ( t ) {
                void 0 !== t && ( i = t )
            }, this.getCamera = function ( t ) {
                if (null === i) return t;
                i.depthNear = t.near, i.depthFar = t.far, i.getFrameData( n );
                var e = n.pose;
                null !== e.position ? t.position.fromArray( e.position ) : t.position.set( 0, 0, 0 ), null !== e.orientation && t.quaternion.fromArray( e.orientation ), t.updateMatrixWorld();
                var h = i.stageParameters;
                if (this.standing && h && ( a.fromArray( h.sittingToStandingTransform ), o.getInverse( a ), t.matrixWorld.multiply( a ), t.matrixWorldInverse.multiply( o ) ), !1 === i.isPresenting) return t;
                s.near = t.near, c.near = t.near, s.far = t.far, c.far = t.far, u.matrixWorld.copy( t.matrixWorld ), u.matrixWorldInverse.copy( t.matrixWorldInverse ), s.matrixWorldInverse.fromArray( n.leftViewMatrix ), c.matrixWorldInverse.fromArray( n.rightViewMatrix ), this.standing && h && ( s.matrixWorldInverse.multiply( o ), c.matrixWorldInverse.multiply( o ) );
                var l = t.parent;
                null !== l && ( r.getInverse( l.matrixWorld ), s.matrixWorldInverse.multiply( r ), c.matrixWorldInverse.multiply( r ) ), s.matrixWorld.getInverse( s.matrixWorldInverse ), c.matrixWorld.getInverse( c.matrixWorldInverse ), s.projectionMatrix.fromArray( n.leftProjectionMatrix ), c.projectionMatrix.fromArray( n.rightProjectionMatrix ), u.projectionMatrix.copy( s.projectionMatrix );
                var p = i.getLayers();
                if (p.length) {
                    var d = p[0];
                    null !== d.leftBounds && 4 === d.leftBounds.length && s.bounds.fromArray( d.leftBounds ), null !== d.rightBounds && 4 === d.rightBounds.length && c.bounds.fromArray( d.rightBounds )
                }
                return u
            }, this.getStandingMatrix = function () {
                return a
            }, this.submitFrame = function () {
                i && i.isPresenting && i.submitFrame()
            }, this.dispose = function () {
                'undefined' != typeof window && window.removeEventListener( 'vrdisplaypresentchange', p )
            }
        }( yt );
        this.vr = Be;
        var ke = new Gi( yt, P, g.maxTextureSize );

        function Ge( t ) {
            t.preventDefault(), console.log( 'THREE.WebGLRenderer: Context Lost.' ), xt = !0
        }

        function je() {
            console.log( 'THREE.WebGLRenderer: Context Restored.' ), xt = !1, ze()
        }

        function He( t ) {
            var e = t.target;
            e.removeEventListener( 'dispose', He ), function ( t ) {
                Ve( t ), M.remove( t )
            }( e )
        }

        function Ve( t ) {
            var e = M.get( t ).program;
            t.program = void 0, void 0 !== e && ct.releaseProgram( e )
        }

        this.shadowMap = ke, this.getContext = function () {
            return f
        }, this.getContextAttributes = function () {
            return f.getContextAttributes()
        }, this.forceContextLoss = function () {
            var t = v.get( 'WEBGL_lose_context' );
            t && t.loseContext()
        }, this.forceContextRestore = function () {
            var t = v.get( 'WEBGL_lose_context' );
            t && t.restoreContext()
        }, this.getPixelRatio = function () {
            return ye
        }, this.setPixelRatio = function ( t ) {
            void 0 !== t && ( ye = t, this.setSize( ve, ge, !1 ) )
        }, this.getSize = function () {
            return { width: ve, height: ge }
        }, this.setSize = function ( t, i, n ) {
            var r = Be.getDevice();
            r && r.isPresenting ? console.warn( 'THREE.WebGLRenderer: Can\'t change size while VR device is presenting.' ) : ( ve = t, ge = i, e.width = t * ye, e.height = i * ye, !1 !== n && ( e.style.width = t + 'px', e.style.height = i + 'px' ), this.setViewport( 0, 0, t, i ) )
        }, this.getDrawingBufferSize = function () {
            return { width: ve * ye, height: ge * ye }
        }, this.setDrawingBufferSize = function ( t, i, n ) {
            ve = t, ge = i, ye = n, e.width = t * n, e.height = i * n, this.setViewport( 0, 0, t, i )
        }, this.setViewport = function ( t, e, i, n ) {
            be.set( t, ge - e - n, i, n ), y.viewport( pe.copy( be ).multiplyScalar( ye ) )
        }, this.setScissor = function ( t, e, i, n ) {
            _e.set( t, ge - e - n, i, n ), y.scissor( de.copy( _e ).multiplyScalar( ye ) )
        }, this.setScissorTest = function ( t ) {
            y.setScissorTest( Te = t )
        }, this.getClearColor = function () {
            return lt.getClearColor()
        }, this.setClearColor = function () {
            lt.setClearColor.apply( lt, arguments )
        }, this.getClearAlpha = function () {
            return lt.getClearAlpha()
        }, this.setClearAlpha = function () {
            lt.setClearAlpha.apply( lt, arguments )
        }, this.clear = function ( t, e, i ) {
            var n = 0;
            ( void 0 === t || t ) && ( n |= f.COLOR_BUFFER_BIT ), ( void 0 === e || e ) && ( n |= f.DEPTH_BUFFER_BIT ), ( void 0 === i || i ) && ( n |= f.STENCIL_BUFFER_BIT ), f.clear( n )
        }, this.clearColor = function () {
            this.clear( !0, !1, !1 )
        }, this.clearDepth = function () {
            this.clear( !1, !0, !1 )
        }, this.clearStencil = function () {
            this.clear( !1, !1, !0 )
        }, this.clearTarget = function ( t, e, i, n ) {
            this.setRenderTarget( t ), this.clear( e, i, n )
        }, this.dispose = function () {
            e.removeEventListener( 'webglcontextlost', Ge, !1 ), e.removeEventListener( 'webglcontextrestored', je, !1 ), ht.dispose(), Be.dispose()
        }, this.renderBufferImmediate = function ( t, e, i ) {
            y.initAttributes();
            var n = M.get( t );
            t.hasPositions && !n.position && ( n.position = f.createBuffer() ), t.hasNormals && !n.normal && ( n.normal = f.createBuffer() ), t.hasUvs && !n.uv && ( n.uv = f.createBuffer() ), t.hasColors && !n.color && ( n.color = f.createBuffer() );
            var r = e.getAttributes();
            if (t.hasPositions && ( f.bindBuffer( f.ARRAY_BUFFER, n.position ), f.bufferData( f.ARRAY_BUFFER, t.positionArray, f.DYNAMIC_DRAW ), y.enableAttribute( r.position ), f.vertexAttribPointer( r.position, 3, f.FLOAT, !1, 0, 0 ) ), t.hasNormals) {
                if (f.bindBuffer( f.ARRAY_BUFFER, n.normal ), !i.isMeshPhongMaterial && !i.isMeshStandardMaterial && !i.isMeshNormalMaterial && !0 === i.flatShading) {
                    for (var a = 0, o = 3 * t.count; a < o; a += 9) {
                        var s = t.normalArray, c = ( s[a + 0] + s[a + 3] + s[a + 6] ) / 3,
                            h = ( s[a + 1] + s[a + 4] + s[a + 7] ) / 3, l = ( s[a + 2] + s[a + 5] + s[a + 8] ) / 3;
                        s[a + 0] = c, s[a + 1] = h, s[a + 2] = l, s[a + 3] = c, s[a + 4] = h, s[a + 5] = l, s[a + 6] = c, s[a + 7] = h, s[a + 8] = l
                    }
                }
                f.bufferData( f.ARRAY_BUFFER, t.normalArray, f.DYNAMIC_DRAW ), y.enableAttribute( r.normal ), f.vertexAttribPointer( r.normal, 3, f.FLOAT, !1, 0, 0 )
            }
            t.hasUvs && i.map && ( f.bindBuffer( f.ARRAY_BUFFER, n.uv ), f.bufferData( f.ARRAY_BUFFER, t.uvArray, f.DYNAMIC_DRAW ), y.enableAttribute( r.uv ), f.vertexAttribPointer( r.uv, 2, f.FLOAT, !1, 0, 0 ) ), t.hasColors && i.vertexColors !== L && ( f.bindBuffer( f.ARRAY_BUFFER, n.color ), f.bufferData( f.ARRAY_BUFFER, t.colorArray, f.DYNAMIC_DRAW ), y.enableAttribute( r.color ), f.vertexAttribPointer( r.color, 3, f.FLOAT, !1, 0, 0 ) ), y.disableUnusedAttributes(), f.drawArrays( f.TRIANGLES, 0, t.count ), t.count = 0
        }, this.renderBufferDirect = function ( t, e, i, n, r, a ) {
            y.setMaterial( n );
            var o = Qe( t, e, n, r ), s = i.id + '_' + o.id + '_' + ( !0 === n.wireframe ), c = !1;
            s !== oe && ( oe = s, c = !0 ), r.morphTargetInfluences && ( pt.update( r, i, n, o ), c = !0 );
            var h, l = i.index, u = i.attributes.position, p = 1;
            !0 === n.wireframe && ( l = R.getWireframeAttribute( i ), p = 2 );
            var d = dt;
            null !== l && ( h = T.get( l ), ( d = ft ).setIndex( h ) ), c && ( !function ( t, e, i, n ) {
                if (i && i.isInstancedBufferGeometry && null === v.get( 'ANGLE_instanced_arrays' )) return void console.error( 'THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' );
                void 0 === n && ( n = 0 );
                y.initAttributes();
                var r = i.attributes, a = e.getAttributes(), o = t.defaultAttributeValues;
                for (var s in a) {
                    var c = a[s];
                    if (c >= 0) {
                        var h = r[s];
                        if (void 0 !== h) {
                            var l = h.normalized, u = h.itemSize, p = T.get( h );
                            if (void 0 === p) continue;
                            var d = p.buffer, m = p.type, g = p.bytesPerElement;
                            if (h.isInterleavedBufferAttribute) {
                                var x = h.data, b = x.stride, w = h.offset;
                                x && x.isInstancedInterleavedBuffer ? ( y.enableAttributeAndDivisor( c, x.meshPerAttribute ), void 0 === i.maxInstancedCount && ( i.maxInstancedCount = x.meshPerAttribute * x.count ) ) : y.enableAttribute( c ), f.bindBuffer( f.ARRAY_BUFFER, d ), f.vertexAttribPointer( c, u, m, l, b * g, ( n * b + w ) * g )
                            } else {
                                h.isInstancedBufferAttribute ? ( y.enableAttributeAndDivisor( c, h.meshPerAttribute ), void 0 === i.maxInstancedCount && ( i.maxInstancedCount = h.meshPerAttribute * h.count ) ) : y.enableAttribute( c ), f.bindBuffer( f.ARRAY_BUFFER, d ), f.vertexAttribPointer( c, u, m, l, 0, n * u * g )
                            }
                        } else if (void 0 !== o) {
                            var _ = o[s];
                            if (void 0 !== _) {
                                switch (_.length) {
                                    case 2:
                                        f.vertexAttrib2fv( c, _ );
                                        break;
                                    case 3:
                                        f.vertexAttrib3fv( c, _ );
                                        break;
                                    case 4:
                                        f.vertexAttrib4fv( c, _ );
                                        break;
                                    default:
                                        f.vertexAttrib1fv( c, _ )
                                }
                            }
                        }
                    }
                }
                y.disableUnusedAttributes()
            }( n, o, i ), null !== l && f.bindBuffer( f.ELEMENT_ARRAY_BUFFER, h.buffer ) );
            var m = 0;
            null !== l ? m = l.count : void 0 !== u && ( m = u.count );
            var g = i.drawRange.start * p, x = i.drawRange.count * p, b = null !== a ? a.start * p : 0,
                w = null !== a ? a.count * p : 1 / 0, _ = Math.max( g, b ), M = Math.min( m, g + x, b + w ) - 1,
                E = Math.max( 0, M - _ + 1 );
            if (0 !== E) {
                if (r.isMesh) {
                    if (!0 === n.wireframe) {
                        y.setLineWidth( n.wireframeLinewidth * De() ), d.setMode( f.LINES );
                    } else {
                        switch (r.drawMode) {
                            case se:
                                d.setMode( f.TRIANGLES );
                                break;
                            case ce:
                                d.setMode( f.TRIANGLE_STRIP );
                                break;
                            case he:
                                d.setMode( f.TRIANGLE_FAN )
                        }
                    }
                } else if (r.isLine) {
                    var S = n.linewidth;
                    void 0 === S && ( S = 1 ), y.setLineWidth( S * De() ), r.isLineSegments ? d.setMode( f.LINES ) : r.isLineLoop ? d.setMode( f.LINE_LOOP ) : d.setMode( f.LINE_STRIP )
                } else {
                    r.isPoints && d.setMode( f.POINTS );
                }
                i && i.isInstancedBufferGeometry ? i.maxInstancedCount > 0 && d.renderInstances( i, _, E ) : d.render( _, E )
            }
        }, this.compile = function ( t, e ) {
            h.length = 0, l.length = 0, t.traverse( function ( t ) {
                t.isLight && ( h.push( t ), t.castShadow && l.push( t ) )
            } ), st.setup( h, l, e ), t.traverse( function ( e ) {
                if (e.material) if (Array.isArray( e.material )) for (var i = 0; i < e.material.length; i++) Ke( e.material[i], t.fog, e ); else Ke( e.material, t.fog, e )
            } )
        };
        var We, Xe = !1, qe = null;

        function Ye( t ) {
            null !== qe && qe( t );
            var e = Be.getDevice();
            e && e.isPresenting ? e.requestAnimationFrame( Ye ) : window.requestAnimationFrame( Ye )
        }

        function Ze( t, e, i, n ) {
            for (var r = 0, a = t.length; r < a; r++) {
                var o = t[r], s = o.object, c = o.geometry, h = void 0 === n ? o.material : n, l = o.group;
                if (i.isArrayCamera) {
                    ue = i;
                    for (var u = i.cameras, p = 0, d = u.length; p < d; p++) {
                        var f = u[p];
                        if (s.layers.test( f.layers )) {
                            var m = f.bounds, v = m.x * ve, g = m.y * ge, x = m.z * ve, b = m.w * ge;
                            y.viewport( pe.set( v, g, x, b ).multiplyScalar( ye ) ), Je( s, e, f, c, h, l )
                        }
                    }
                } else {
                    ue = null, Je( s, e, i, c, h, l )
                }
            }
        }

        function Je( t, e, i, n, r, a ) {
            if (t.onBeforeRender( yt, e, i, n, r, a ), t.modelViewMatrix.multiplyMatrices( i.matrixWorldInverse, t.matrixWorld ), t.normalMatrix.getNormalMatrix( t.modelViewMatrix ), t.isImmediateRenderObject) {
                y.setMaterial( r );
                var o = Qe( i, e.fog, r, t );
                oe = '', function ( t, e, i ) {
                    t.render( function ( t ) {
                        yt.renderBufferImmediate( t, e, i )
                    } )
                }( t, o, r )
            } else {
                yt.renderBufferDirect( i, e.fog, n, r, t, a );
            }
            t.onAfterRender( yt, e, i, n, r, a )
        }

        function Ke( t, e, i ) {
            var n = M.get( t ), r = ct.getParameters( t, st.state, l, e, Le.numPlanes, Le.numIntersection, i ),
                a = ct.getProgramCode( t, r ), o = n.program, s = !0;
            if (void 0 === o) {
                t.addEventListener( 'dispose', He );
            } else if (o.code !== a) {
                Ve( t );
            } else {
                if (void 0 !== r.shaderID) return;
                s = !1
            }
            if (s) {
                if (r.shaderID) {
                    var c = _i[r.shaderID];
                    n.shader = {
                        name: t.type,
                        uniforms: bi.clone( c.uniforms ),
                        vertexShader: c.vertexShader,
                        fragmentShader: c.fragmentShader
                    }
                } else {
                    n.shader = {
                        name: t.type,
                        uniforms: t.uniforms,
                        vertexShader: t.vertexShader,
                        fragmentShader: t.fragmentShader
                    };
                }
                t.onBeforeCompile( n.shader ), o = ct.acquireProgram( t, n.shader, r, a ), n.program = o, t.program = o
            }
            var h = o.getAttributes();
            if (t.morphTargets) {
                t.numSupportedMorphTargets = 0;
                for (var u = 0; u < yt.maxMorphTargets; u++) h['morphTarget' + u] >= 0 && t.numSupportedMorphTargets++
            }
            if (t.morphNormals) {
                t.numSupportedMorphNormals = 0;
                for (u = 0; u < yt.maxMorphNormals; u++) h['morphNormal' + u] >= 0 && t.numSupportedMorphNormals++
            }
            var p = n.shader.uniforms;
            ( t.isShaderMaterial || t.isRawShaderMaterial ) && !0 !== t.clipping || ( n.numClippingPlanes = Le.numPlanes, n.numIntersection = Le.numIntersection, p.clippingPlanes = Le.uniform ), n.fog = e, n.lightsHash = st.state.hash, t.lights && ( p.ambientLightColor.value = st.state.ambient, p.directionalLights.value = st.state.directional, p.spotLights.value = st.state.spot, p.rectAreaLights.value = st.state.rectArea, p.pointLights.value = st.state.point, p.hemisphereLights.value = st.state.hemi, p.directionalShadowMap.value = st.state.directionalShadowMap, p.directionalShadowMatrix.value = st.state.directionalShadowMatrix, p.spotShadowMap.value = st.state.spotShadowMap, p.spotShadowMatrix.value = st.state.spotShadowMatrix, p.pointShadowMap.value = st.state.pointShadowMap, p.pointShadowMatrix.value = st.state.pointShadowMatrix );
            var d = n.program.getUniforms(), f = vi.seqWithValue( d.seq, p );
            n.uniformsList = f
        }

        function Qe( t, e, i, n ) {
            me = 0;
            var r = M.get( i );
            if (Re && ( Ce || t !== le )) {
                var a = t === le && i.id === ae;
                Le.setState( i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, a )
            }
            !1 === i.needsUpdate && ( void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== e ? i.needsUpdate = !0 : i.lights && r.lightsHash !== st.state.hash ? i.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === Le.numPlanes && r.numIntersection === Le.numIntersection || ( i.needsUpdate = !0 ) ), i.needsUpdate && ( Ke( i, e, n ), i.needsUpdate = !1 );
            var o, s, c = !1, h = !1, l = !1, u = r.program, p = u.getUniforms(), d = r.shader.uniforms;
            if (y.useProgram( u.program ) && ( c = !0, h = !0, l = !0 ), i.id !== ae && ( ae = i.id, h = !0 ), c || t !== le) {
                if (p.setValue( f, 'projectionMatrix', t.projectionMatrix ), g.logarithmicDepthBuffer && p.setValue( f, 'logDepthBufFC', 2 / ( Math.log( t.far + 1 ) / Math.LN2 ) ), le !== ( ue || t ) && ( le = ue || t, h = !0, l = !0 ), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) {
                    var m = p.map.cameraPosition;
                    void 0 !== m && m.setValue( f, Ie.setFromMatrixPosition( t.matrixWorld ) )
                }
                ( i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning ) && p.setValue( f, 'viewMatrix', t.matrixWorldInverse )
            }
            if (i.skinning) {
                p.setOptional( f, n, 'bindMatrix' ), p.setOptional( f, n, 'bindMatrixInverse' );
                var v = n.skeleton;
                if (v) {
                    var x = v.bones;
                    if (g.floatVertexTextures) {
                        if (void 0 === v.boneTexture) {
                            var b = Math.sqrt( 4 * x.length );
                            b = xe.ceilPowerOfTwo( b ), b = Math.max( b, 4 );
                            var w = new Float32Array( b * b * 4 );
                            w.set( v.boneMatrices );
                            var _ = new Pe( w, b, b, Wt, Ft );
                            v.boneMatrices = w, v.boneTexture = _, v.boneTextureSize = b
                        }
                        p.setValue( f, 'boneTexture', v.boneTexture ), p.setValue( f, 'boneTextureSize', v.boneTextureSize )
                    } else {
                        p.setOptional( f, v, 'boneMatrices' )
                    }
                }
            }
            return h && ( p.setValue( f, 'toneMappingExposure', yt.toneMappingExposure ), p.setValue( f, 'toneMappingWhitePoint', yt.toneMappingWhitePoint ), i.lights && ( s = l, ( o = d ).ambientLightColor.needsUpdate = s, o.directionalLights.needsUpdate = s, o.pointLights.needsUpdate = s, o.spotLights.needsUpdate = s, o.rectAreaLights.needsUpdate = s, o.hemisphereLights.needsUpdate = s ), e && i.fog && function ( t, e ) {
                t.fogColor.value = e.color, e.isFog ? ( t.fogNear.value = e.near, t.fogFar.value = e.far ) : e.isFogExp2 && ( t.fogDensity.value = e.density )
            }( d, e ), i.isMeshBasicMaterial ? $e( d, i ) : i.isMeshLambertMaterial ? ( $e( d, i ), function ( t, e ) {
                e.emissiveMap && ( t.emissiveMap.value = e.emissiveMap )
            }( d, i ) ) : i.isMeshPhongMaterial ? ( $e( d, i ), i.isMeshToonMaterial ? function ( t, e ) {
                ti( t, e ), e.gradientMap && ( t.gradientMap.value = e.gradientMap )
            }( d, i ) : ti( d, i ) ) : i.isMeshStandardMaterial ? ( $e( d, i ), i.isMeshPhysicalMaterial ? function ( t, e ) {
                t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness, ei( t, e )
            }( d, i ) : ei( d, i ) ) : i.isMeshDepthMaterial ? ( $e( d, i ), function ( t, e ) {
                e.displacementMap && ( t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias )
            }( d, i ) ) : i.isMeshDistanceMaterial ? ( $e( d, i ), function ( t, e ) {
                e.displacementMap && ( t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias );
                t.referencePosition.value.copy( e.referencePosition ), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
            }( d, i ) ) : i.isMeshNormalMaterial ? ( $e( d, i ), function ( t, e ) {
                e.bumpMap && ( t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale );
                e.normalMap && ( t.normalMap.value = e.normalMap, t.normalScale.value.copy( e.normalScale ) );
                e.displacementMap && ( t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias )
            }( d, i ) ) : i.isLineBasicMaterial ? ( function ( t, e ) {
                t.diffuse.value = e.color, t.opacity.value = e.opacity
            }( d, i ), i.isLineDashedMaterial && function ( t, e ) {
                t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
            }( d, i ) ) : i.isPointsMaterial ? function ( t, e ) {
                if (t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * ye, t.scale.value = .5 * ge, t.map.value = e.map, null !== e.map) {
                    if (!0 === e.map.matrixAutoUpdate) {
                        var i = e.map.offset, n = e.map.repeat, r = e.map.rotation, a = e.map.center;
                        e.map.matrix.setUvTransform( i.x, i.y, n.x, n.y, r, a.x, a.y )
                    }
                    t.uvTransform.value.copy( e.map.matrix )
                }
            }( d, i ) : i.isShadowMaterial && ( d.color.value = i.color, d.opacity.value = i.opacity ), void 0 !== d.ltcMat && ( d.ltcMat.value = xi.LTC_MAT_TEXTURE ), void 0 !== d.ltcMag && ( d.ltcMag.value = xi.LTC_MAG_TEXTURE ), vi.upload( f, r.uniformsList, d, yt ) ), p.setValue( f, 'modelViewMatrix', n.modelViewMatrix ), p.setValue( f, 'normalMatrix', n.normalMatrix ), p.setValue( f, 'modelMatrix', n.matrixWorld ), u
        }

        function $e( t, e ) {
            var i;
            if (t.opacity.value = e.opacity, e.color && ( t.diffuse.value = e.color ), e.emissive && t.emissive.value.copy( e.emissive ).multiplyScalar( e.emissiveIntensity ), e.map && ( t.map.value = e.map ), e.alphaMap && ( t.alphaMap.value = e.alphaMap ), e.specularMap && ( t.specularMap.value = e.specularMap ), e.envMap && ( t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio ), e.lightMap && ( t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity ), e.aoMap && ( t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity ), e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && ( i = e.emissiveMap ), void 0 !== i) {
                if (i.isWebGLRenderTarget && ( i = i.texture ), !0 === i.matrixAutoUpdate) {
                    var n = i.offset, r = i.repeat, a = i.rotation, o = i.center;
                    i.matrix.setUvTransform( n.x, n.y, r.x, r.y, a, o.x, o.y )
                }
                t.uvTransform.value.copy( i.matrix )
            }
        }

        function ti( t, e ) {
            t.specular.value = e.specular, t.shininess.value = Math.max( e.shininess, 1e-4 ), e.emissiveMap && ( t.emissiveMap.value = e.emissiveMap ), e.bumpMap && ( t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale ), e.normalMap && ( t.normalMap.value = e.normalMap, t.normalScale.value.copy( e.normalScale ) ), e.displacementMap && ( t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias )
        }

        function ei( t, e ) {
            t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && ( t.roughnessMap.value = e.roughnessMap ), e.metalnessMap && ( t.metalnessMap.value = e.metalnessMap ), e.emissiveMap && ( t.emissiveMap.value = e.emissiveMap ), e.bumpMap && ( t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale ), e.normalMap && ( t.normalMap.value = e.normalMap, t.normalScale.value.copy( e.normalScale ) ), e.displacementMap && ( t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias ), e.envMap && ( t.envMapIntensity.value = e.envMapIntensity )
        }

        this.animate = function ( t ) {
            qe = t, function () {
                if (!Xe) {
                    var t = Be.getDevice();
                    t && t.isPresenting ? t.requestAnimationFrame( Ye ) : window.requestAnimationFrame( Ye ), Xe = !0
                }
            }()
        }, this.render = function ( t, e, i, n ) {
            if (e && e.isCamera) {
                if (!xt) {
                    oe = '', ae = -1, le = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), Be.enabled && ( e = Be.getCamera( e ) ), Ne.multiplyMatrices( e.projectionMatrix, e.matrixWorldInverse ), Se.setFromMatrix( Ne ), h.length = 0, l.length = 0, p.length = 0, d.length = 0, Ce = this.localClippingEnabled, Re = Le.init( this.clippingPlanes, Ce, e ), ( u = ht.get( t, e ) ).init(), function t( e, i, n ) {
                        if (!1 === e.visible) return;
                        var r = e.layers.test( i.layers );
                        if (r) {
                            if (e.isLight) {
                                h.push( e ), e.castShadow && l.push( e );
                            } else if (e.isSprite) {
                                e.frustumCulled && !Se.intersectsSprite( e ) || p.push( e );
                            } else if (e.isLensFlare) {
                                d.push( e );
                            } else if (e.isImmediateRenderObject) {
                                n && Ie.setFromMatrixPosition( e.matrixWorld ).applyMatrix4( Ne ), u.push( e, null, e.material, Ie.z, null );
                            } else if (( e.isMesh || e.isLine || e.isPoints ) && ( e.isSkinnedMesh && e.skeleton.update(), !e.frustumCulled || Se.intersectsObject( e ) )) {
                                n && Ie.setFromMatrixPosition( e.matrixWorld ).applyMatrix4( Ne );
                                var a = P.update( e ), o = e.material;
                                if (Array.isArray( o )) {
                                    for (var s = a.groups, c = 0, f = s.length; c < f; c++) {
                                        var m = s[c], v = o[m.materialIndex];
                                        v && v.visible && u.push( e, a, v, Ie.z, m )
                                    }
                                } else {
                                    o.visible && u.push( e, a, o, Ie.z, null )
                                }
                            }
                        }
                        var g = e.children;
                        for (var c = 0, f = g.length; c < f; c++) t( g[c], i, n )
                    }( t, e, yt.sortObjects ), !0 === yt.sortObjects && u.sort(), Re && Le.beginShadows(), ke.render( l, t, e ), st.setup( h, l, e ), Re && Le.endShadows(), Ue.frame++, Ue.calls = 0, Ue.vertices = 0, Ue.faces = 0, Ue.points = 0, void 0 === i && ( i = null ), this.setRenderTarget( i ), lt.render( u, t, e, n );
                    var r = u.opaque, a = u.transparent;
                    if (t.overrideMaterial) {
                        var o = t.overrideMaterial;
                        r.length && Ze( r, t, e, o ), a.length && Ze( a, t, e, o )
                    } else {
                        r.length && Ze( r, t, e ), a.length && Ze( a, t, e );
                    }
                    vt.render( p, t, e ), mt.render( d, t, e, pe ), i && E.updateRenderTargetMipmap( i ), y.buffers.depth.setTest( !0 ), y.buffers.depth.setMask( !0 ), y.buffers.color.setMask( !0 ), y.setPolygonOffset( !1 ), Be.enabled && Be.submitFrame()
                }
            } else {
                console.error( 'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.' )
            }
        }, this.setFaceCulling = function ( t, e ) {
            y.setCullFace( t ), y.setFlipSided( e === _ )
        }, this.allocTextureUnit = function () {
            var t = me;
            return t >= g.maxTextures && console.warn( 'THREE.WebGLRenderer: Trying to use ' + t + ' texture units while this GPU supports only ' + g.maxTextures ), me += 1, t
        }, this.setTexture2D = ( We = !1, function ( t, e ) {
            t && t.isWebGLRenderTarget && ( We || ( console.warn( 'THREE.WebGLRenderer.setTexture2D: don\'t use render targets as textures. Use their .texture property instead.' ), We = !0 ), t = t.texture ), E.setTexture2D( t, e )
        } ), this.setTexture = function () {
            var t = !1;
            return function ( e, i ) {
                t || ( console.warn( 'THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead.' ), t = !0 ), E.setTexture2D( e, i )
            }
        }(), this.setTextureCube = function () {
            var t = !1;
            return function ( e, i ) {
                e && e.isWebGLRenderTargetCube && ( t || ( console.warn( 'THREE.WebGLRenderer.setTextureCube: don\'t use cube render targets as textures. Use their .texture property instead.' ), t = !0 ), e = e.texture ), e && e.isCubeTexture || Array.isArray( e.image ) && 6 === e.image.length ? E.setTextureCube( e, i ) : E.setTextureCubeDynamic( e, i )
            }
        }(), this.getRenderTarget = function () {
            return bt
        }, this.setRenderTarget = function ( t ) {
            bt = t, t && void 0 === M.get( t ).__webglFramebuffer && E.setupRenderTarget( t );
            var e = null, i = !1;
            if (t) {
                var n = M.get( t ).__webglFramebuffer;
                t.isWebGLRenderTargetCube ? ( e = n[t.activeCubeFace], i = !0 ) : e = n, pe.copy( t.viewport ), de.copy( t.scissor ), fe = t.scissorTest
            } else {
                pe.copy( be ).multiplyScalar( ye ), de.copy( _e ).multiplyScalar( ye ), fe = Te;
            }
            if (wt !== e && ( f.bindFramebuffer( f.FRAMEBUFFER, e ), wt = e ), y.viewport( pe ), y.scissor( de ), y.setScissorTest( fe ), i) {
                var r = M.get( t.texture );
                f.framebufferTexture2D( f.FRAMEBUFFER, f.COLOR_ATTACHMENT0, f.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel )
            }
        }, this.readRenderTargetPixels = function ( t, e, i, n, r, a ) {
            if (t && t.isWebGLRenderTarget) {
                var o = M.get( t ).__webglFramebuffer;
                if (o) {
                    var s = !1;
                    o !== wt && ( f.bindFramebuffer( f.FRAMEBUFFER, o ), s = !0 );
                    try {
                        var c = t.texture, h = c.format, l = c.type;
                        if (h !== Wt && gt.convert( h ) !== f.getParameter( f.IMPLEMENTATION_COLOR_READ_FORMAT )) return void console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.' );
                        if (!( l === Ct || gt.convert( l ) === f.getParameter( f.IMPLEMENTATION_COLOR_READ_TYPE ) || l === Ft && ( v.get( 'OES_texture_float' ) || v.get( 'WEBGL_color_buffer_float' ) ) || l === zt && v.get( 'EXT_color_buffer_half_float' ) )) return void console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.' );
                        f.checkFramebufferStatus( f.FRAMEBUFFER ) === f.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && f.readPixels( e, i, n, r, gt.convert( h ), gt.convert( l ), a ) : console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.' )
                    } finally {
                        s && f.bindFramebuffer( f.FRAMEBUFFER, wt )
                    }
                }
            } else {
                console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.' )
            }
        }
    }

    function or( t, e ) {
        this.name = '', this.color = new yi( t ), this.density = void 0 !== e ? e : 25e-5
    }

    function sr( t, e, i ) {
        this.name = '', this.color = new yi( t ), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
    }

    function cr() {
        Ji.call( this ), this.type = 'Scene', this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
    }

    function hr( t, e, i, n, r ) {
        Ji.call( this ), this.lensFlares = [], this.positionScreen = new Me, this.customUpdateCallback = void 0, void 0 !== t && this.add( t, e, i, n, r )
    }

    function lr( t ) {
        Oi.call( this ), this.type = 'SpriteMaterial', this.color = new yi( 16777215 ), this.map = null, this.rotation = 0, this.fog = !1, this.lights = !1, this.setValues( t )
    }

    function ur( t ) {
        Ji.call( this ), this.type = 'Sprite', this.material = void 0 !== t ? t : new lr
    }

    function pr() {
        Ji.call( this ), this.type = 'LOD', Object.defineProperties( this, { levels: { enumerable: !0, value: [] } } )
    }

    function dr( t, e ) {
        if (t = t || [], this.bones = t.slice( 0 ), this.boneMatrices = new Float32Array( 16 * this.bones.length ), void 0 === e) {
            this.calculateInverses();
        } else if (this.bones.length === e.length) {
            this.boneInverses = e.slice( 0 );
        } else {
            console.warn( 'THREE.Skeleton boneInverses is the wrong length.' ), this.boneInverses = [];
            for (var i = 0, n = this.bones.length; i < n; i++) this.boneInverses.push( new we )
        }
    }

    function fr() {
        Ji.call( this ), this.type = 'Bone'
    }

    function mr( t, e ) {
        On.call( this, t, e ), this.type = 'SkinnedMesh', this.bindMode = 'attached', this.bindMatrix = new we, this.bindMatrixInverse = new we;
        var i = new dr( this.initBones() );
        this.bind( i, this.matrixWorld ), this.normalizeSkinWeights()
    }

    function vr( t ) {
        Oi.call( this ), this.type = 'LineBasicMaterial', this.color = new yi( 16777215 ), this.linewidth = 1, this.linecap = 'round', this.linejoin = 'round', this.lights = !1, this.setValues( t )
    }

    function gr( t, e, i ) {
        if (1 === i) return console.warn( 'THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead.' ), new yr( t, e );
        Ji.call( this ), this.type = 'Line', this.geometry = void 0 !== t ? t : new En, this.material = void 0 !== e ? e : new vr( { color: 16777215 * Math.random() } )
    }

    function yr( t, e ) {
        gr.call( this, t, e ), this.type = 'LineSegments'
    }

    function xr( t, e ) {
        gr.call( this, t, e ), this.type = 'LineLoop'
    }

    function br( t ) {
        Oi.call( this ), this.type = 'PointsMaterial', this.color = new yi( 16777215 ), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = !1, this.setValues( t )
    }

    function wr( t, e ) {
        Ji.call( this ), this.type = 'Points', this.geometry = void 0 !== t ? t : new En, this.material = void 0 !== e ? e : new br( { color: 16777215 * Math.random() } )
    }

    function _r() {
        Ji.call( this ), this.type = 'Group'
    }

    function Mr( t, e, i, n, r, a, o, s, c ) {
        Se.call( this, t, e, i, n, r, a, o, s, c ), this.generateMipmaps = !1;
        var h = this;
        requestAnimationFrame( function t() {
            var e = h.image;
            e.readyState >= e.HAVE_CURRENT_DATA && ( h.needsUpdate = !0 ), requestAnimationFrame( t )
        } )
    }

    function Er( t, e, i, n, r, a, o, s, c, h, l, u ) {
        Se.call( this, null, a, o, s, c, h, n, r, l, u ), this.image = {
            width: e,
            height: i
        }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
    }

    function Tr( t, e, i, n, r, a, o, s, c, h ) {
        if (( h = void 0 !== h ? h : Yt ) !== Yt && h !== Zt) throw new Error( 'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat' );
        void 0 === i && h === Yt && ( i = Ot ), void 0 === i && h === Zt && ( i = jt ), Se.call( this, null, n, r, a, o, s, h, i, c ), this.image = {
            width: t,
            height: e
        }, this.magFilter = void 0 !== o ? o : Tt, this.minFilter = void 0 !== s ? s : Tt, this.flipY = !1, this.generateMipmaps = !1
    }

    function Sr( t ) {
        En.call( this ), this.type = 'WireframeGeometry';
        var e, i, n, r, a, o, s, c, h, l, u = [], p = [0, 0], d = {}, f = ['a', 'b', 'c'];
        if (t && t.isGeometry) {
            var m = t.faces;
            for (e = 0, n = m.length; e < n; e++) {
                var v = m[e];
                for (i = 0; i < 3; i++) {
                    s = v[f[i]], c = v[f[( i + 1 ) % 3]], p[0] = Math.min( s, c ), p[1] = Math.max( s, c ), void 0 === d[h = p[0] + ',' + p[1]] && ( d[h] = {
                        index1: p[0],
                        index2: p[1]
                    } )
                }
            }
            for (h in d) o = d[h], l = t.vertices[o.index1], u.push( l.x, l.y, l.z ), l = t.vertices[o.index2], u.push( l.x, l.y, l.z )
        } else if (t && t.isBufferGeometry) {
            var g, y, x, b, w, _, M;
            if (l = new Me, null !== t.index) {
                for (g = t.attributes.position, y = t.index, 0 === ( x = t.groups ).length && ( x = [{
                    start: 0,
                    count: y.count,
                    materialIndex: 0
                }] ), r = 0, a = x.length; r < a; ++r) {
                    for (e = w = ( b = x[r] ).start, n = w + b.count; e < n; e += 3) {
                        for (i = 0; i < 3; i++) {
                            s = y.getX( e + i ), c = y.getX( e + ( i + 1 ) % 3 ), p[0] = Math.min( s, c ), p[1] = Math.max( s, c ), void 0 === d[h = p[0] + ',' + p[1]] && ( d[h] = {
                                index1: p[0],
                                index2: p[1]
                            } );
                        }
                    }
                }
                for (h in d) o = d[h], l.fromBufferAttribute( g, o.index1 ), u.push( l.x, l.y, l.z ), l.fromBufferAttribute( g, o.index2 ), u.push( l.x, l.y, l.z )
            } else {
                for (e = 0, n = ( g = t.attributes.position ).count / 3; e < n; e++) for (i = 0; i < 3; i++) _ = 3 * e + i, l.fromBufferAttribute( g, _ ), u.push( l.x, l.y, l.z ), M = 3 * e + ( i + 1 ) % 3, l.fromBufferAttribute( g, M ), u.push( l.x, l.y, l.z )
            }
        }
        this.addAttribute( 'position', new pn( u, 3 ) )
    }

    function Ar( t, e, i ) {
        nn.call( this ), this.type = 'ParametricGeometry', this.parameters = {
            func: t,
            slices: e,
            stacks: i
        }, this.fromBufferGeometry( new Lr( t, e, i ) ), this.mergeVertices()
    }

    function Lr( t, e, i ) {
        En.call( this ), this.type = 'ParametricBufferGeometry', this.parameters = { func: t, slices: e, stacks: i };
        var n, r, a = [], o = [], s = [], c = [], h = new Me, l = new Me, u = new Me, p = new Me, d = new Me, f = e + 1;
        for (n = 0; n <= i; n++) {
            var m = n / i;
            for (r = 0; r <= e; r++) {
                var v = r / e;
                l = t( v, m, l ), o.push( l.x, l.y, l.z ), v - 1e-5 >= 0 ? ( u = t( v - 1e-5, m, u ), p.subVectors( l, u ) ) : ( u = t( v + 1e-5, m, u ), p.subVectors( u, l ) ), m - 1e-5 >= 0 ? ( u = t( v, m - 1e-5, u ), d.subVectors( l, u ) ) : ( u = t( v, m + 1e-5, u ), d.subVectors( u, l ) ), h.crossVectors( p, d ).normalize(), s.push( h.x, h.y, h.z ), c.push( v, m )
            }
        }
        for (n = 0; n < i; n++) {
            for (r = 0; r < e; r++) {
                var g = n * f + r, y = n * f + r + 1, x = ( n + 1 ) * f + r + 1, b = ( n + 1 ) * f + r;
                a.push( g, y, b ), a.push( y, x, b )
            }
        }
        this.setIndex( a ), this.addAttribute( 'position', new pn( o, 3 ) ), this.addAttribute( 'normal', new pn( s, 3 ) ), this.addAttribute( 'uv', new pn( c, 2 ) )
    }

    function Rr( t, e, i, n ) {
        nn.call( this ), this.type = 'PolyhedronGeometry', this.parameters = {
            vertices: t,
            indices: e,
            radius: i,
            detail: n
        }, this.fromBufferGeometry( new Pr( t, e, i, n ) ), this.mergeVertices()
    }

    function Pr( t, e, i, n ) {
        En.call( this ), this.type = 'PolyhedronBufferGeometry', this.parameters = {
            vertices: t,
            indices: e,
            radius: i,
            detail: n
        }, i = i || 1;
        var r = [], a = [];

        function o( t, e, i, n ) {
            var r, a, o = Math.pow( 2, n ), c = [];
            for (r = 0; r <= o; r++) {
                c[r] = [];
                var h = t.clone().lerp( i, r / o ), l = e.clone().lerp( i, r / o ), u = o - r;
                for (a = 0; a <= u; a++) c[r][a] = 0 === a && r === o ? h : h.clone().lerp( l, a / u )
            }
            for (r = 0; r < o; r++) {
                for (a = 0; a < 2 * ( o - r ) - 1; a++) {
                    var p = Math.floor( a / 2 );
                    a % 2 == 0 ? ( s( c[r][p + 1] ), s( c[r + 1][p] ), s( c[r][p] ) ) : ( s( c[r][p + 1] ), s( c[r + 1][p + 1] ), s( c[r + 1][p] ) )
                }
            }
        }

        function s( t ) {
            r.push( t.x, t.y, t.z )
        }

        function c( e, i ) {
            var n = 3 * e;
            i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2]
        }

        function h( t, e, i, n ) {
            n < 0 && 1 === t.x && ( a[e] = t.x - 1 ), 0 === i.x && 0 === i.z && ( a[e] = n / 2 / Math.PI + .5 )
        }

        function l( t ) {
            return Math.atan2( t.z, -t.x )
        }

        !function ( t ) {
            for (var i = new Me, n = new Me, r = new Me, a = 0; a < e.length; a += 3) c( e[a + 0], i ), c( e[a + 1], n ), c( e[a + 2], r ), o( i, n, r, t )
        }( n = n || 0 ), function ( t ) {
            for (var e = new Me, i = 0; i < r.length; i += 3) e.x = r[i + 0], e.y = r[i + 1], e.z = r[i + 2], e.normalize().multiplyScalar( t ), r[i + 0] = e.x, r[i + 1] = e.y, r[i + 2] = e.z
        }( i ), function () {
            for (var t = new Me, e = 0; e < r.length; e += 3) {
                t.x = r[e + 0], t.y = r[e + 1], t.z = r[e + 2];
                var i = l( t ) / 2 / Math.PI + .5,
                    n = ( o = t, Math.atan2( -o.y, Math.sqrt( o.x * o.x + o.z * o.z ) ) / Math.PI + .5 );
                a.push( i, 1 - n )
            }
            var o;
            ( function () {
                for (var t = new Me, e = new Me, i = new Me, n = new Me, o = new be, s = new be, c = new be, u = 0, p = 0; u < r.length; u += 9, p += 6) {
                    t.set( r[u + 0], r[u + 1], r[u + 2] ), e.set( r[u + 3], r[u + 4], r[u + 5] ), i.set( r[u + 6], r[u + 7], r[u + 8] ), o.set( a[p + 0], a[p + 1] ), s.set( a[p + 2], a[p + 3] ), c.set( a[p + 4], a[p + 5] ), n.copy( t ).add( e ).add( i ).divideScalar( 3 );
                    var d = l( n );
                    h( o, p + 0, t, d ), h( s, p + 2, e, d ), h( c, p + 4, i, d )
                }
            } )(), function () {
                for (var t = 0; t < a.length; t += 6) {
                    var e = a[t + 0], i = a[t + 2], n = a[t + 4], r = Math.max( e, i, n ), o = Math.min( e, i, n );
                    r > .9 && o < .1 && ( e < .2 && ( a[t + 0] += 1 ), i < .2 && ( a[t + 2] += 1 ), n < .2 && ( a[t + 4] += 1 ) )
                }
            }()
        }(), this.addAttribute( 'position', new pn( r, 3 ) ), this.addAttribute( 'normal', new pn( r.slice(), 3 ) ), this.addAttribute( 'uv', new pn( a, 2 ) ), 0 === n ? this.computeVertexNormals() : this.normalizeNormals()
    }

    function Cr( t, e ) {
        nn.call( this ), this.type = 'TetrahedronGeometry', this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry( new Nr( t, e ) ), this.mergeVertices()
    }

    function Nr( t, e ) {
        Pr.call( this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e ), this.type = 'TetrahedronBufferGeometry', this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Ir( t, e ) {
        nn.call( this ), this.type = 'OctahedronGeometry', this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry( new Or( t, e ) ), this.mergeVertices()
    }

    function Or( t, e ) {
        Pr.call( this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e ), this.type = 'OctahedronBufferGeometry', this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Ur( t, e ) {
        nn.call( this ), this.type = 'IcosahedronGeometry', this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry( new Dr( t, e ) ), this.mergeVertices()
    }

    function Dr( t, e ) {
        var i = ( 1 + Math.sqrt( 5 ) ) / 2,
            n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1];
        Pr.call( this, n, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e ), this.type = 'IcosahedronBufferGeometry', this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Fr( t, e ) {
        nn.call( this ), this.type = 'DodecahedronGeometry', this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry( new zr( t, e ) ), this.mergeVertices()
    }

    function zr( t, e ) {
        var i = ( 1 + Math.sqrt( 5 ) ) / 2, n = 1 / i,
            r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n];
        Pr.call( this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e ), this.type = 'DodecahedronBufferGeometry', this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Br( t, e, i, n, r, a ) {
        nn.call( this ), this.type = 'TubeGeometry', this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: n,
            closed: r
        }, void 0 !== a && console.warn( 'THREE.TubeGeometry: taper has been removed.' );
        var o = new kr( t, e, i, n, r );
        this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry( o ), this.mergeVertices()
    }

    function kr( t, e, i, n, r ) {
        En.call( this ), this.type = 'TubeBufferGeometry', this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: n,
            closed: r
        }, e = e || 64, i = i || 1, n = n || 8, r = r || !1;
        var a = t.computeFrenetFrames( e, r );
        this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
        var o, s, c = new Me, h = new Me, l = new be, u = new Me, p = [], d = [], f = [], m = [];

        function v( r ) {
            u = t.getPointAt( r / e, u );
            var o = a.normals[r], l = a.binormals[r];
            for (s = 0; s <= n; s++) {
                var f = s / n * Math.PI * 2, m = Math.sin( f ), v = -Math.cos( f );
                h.x = v * o.x + m * l.x, h.y = v * o.y + m * l.y, h.z = v * o.z + m * l.z, h.normalize(), d.push( h.x, h.y, h.z ), c.x = u.x + i * h.x, c.y = u.y + i * h.y, c.z = u.z + i * h.z, p.push( c.x, c.y, c.z )
            }
        }

        !function () {
            for (o = 0; o < e; o++) v( o );
            v( !1 === r ? e : 0 ), function () {
                for (o = 0; o <= e; o++) for (s = 0; s <= n; s++) l.x = o / e, l.y = s / n, f.push( l.x, l.y )
            }(), function () {
                for (s = 1; s <= e; s++) {
                    for (o = 1; o <= n; o++) {
                        var t = ( n + 1 ) * ( s - 1 ) + ( o - 1 ), i = ( n + 1 ) * s + ( o - 1 ), r = ( n + 1 ) * s + o,
                            a = ( n + 1 ) * ( s - 1 ) + o;
                        m.push( t, i, a ), m.push( i, r, a )
                    }
                }
            }()
        }(), this.setIndex( m ), this.addAttribute( 'position', new pn( p, 3 ) ), this.addAttribute( 'normal', new pn( d, 3 ) ), this.addAttribute( 'uv', new pn( f, 2 ) )
    }

    function Gr( t, e, i, n, r, a, o ) {
        nn.call( this ), this.type = 'TorusKnotGeometry', this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a
        }, void 0 !== o && console.warn( 'THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.' ), this.fromBufferGeometry( new jr( t, e, i, n, r, a ) ), this.mergeVertices()
    }

    function jr( t, e, i, n, r, a ) {
        En.call( this ), this.type = 'TorusKnotBufferGeometry', this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a
        }, t = t || 1, e = e || .4, i = Math.floor( i ) || 64, n = Math.floor( n ) || 8, r = r || 2, a = a || 3;
        var o, s, c = [], h = [], l = [], u = [], p = new Me, d = new Me, f = new Me, m = new Me, v = new Me,
            g = new Me, y = new Me;
        for (o = 0; o <= i; ++o) {
            var x = o / i * r * Math.PI * 2;
            for (A( x, r, a, t, f ), A( x + .01, r, a, t, m ), g.subVectors( m, f ), y.addVectors( m, f ), v.crossVectors( g, y ), y.crossVectors( v, g ), v.normalize(), y.normalize(), s = 0; s <= n; ++s) {
                var b = s / n * Math.PI * 2, w = -e * Math.cos( b ), _ = e * Math.sin( b );
                p.x = f.x + ( w * y.x + _ * v.x ), p.y = f.y + ( w * y.y + _ * v.y ), p.z = f.z + ( w * y.z + _ * v.z ), h.push( p.x, p.y, p.z ), d.subVectors( p, f ).normalize(), l.push( d.x, d.y, d.z ), u.push( o / i ), u.push( s / n )
            }
        }
        for (s = 1; s <= i; s++) {
            for (o = 1; o <= n; o++) {
                var M = ( n + 1 ) * ( s - 1 ) + ( o - 1 ), E = ( n + 1 ) * s + ( o - 1 ), T = ( n + 1 ) * s + o,
                    S = ( n + 1 ) * ( s - 1 ) + o;
                c.push( M, E, S ), c.push( E, T, S )
            }
        }

        function A( t, e, i, n, r ) {
            var a = Math.cos( t ), o = Math.sin( t ), s = i / e * t, c = Math.cos( s );
            r.x = n * ( 2 + c ) * .5 * a, r.y = n * ( 2 + c ) * o * .5, r.z = n * Math.sin( s ) * .5
        }

        this.setIndex( c ), this.addAttribute( 'position', new pn( h, 3 ) ), this.addAttribute( 'normal', new pn( l, 3 ) ), this.addAttribute( 'uv', new pn( u, 2 ) )
    }

    function Hr( t, e, i, n, r ) {
        nn.call( this ), this.type = 'TorusGeometry', this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        }, this.fromBufferGeometry( new Vr( t, e, i, n, r ) ), this.mergeVertices()
    }

    function Vr( t, e, i, n, r ) {
        En.call( this ), this.type = 'TorusBufferGeometry', this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        }, t = t || 1, e = e || .4, i = Math.floor( i ) || 8, n = Math.floor( n ) || 6, r = r || 2 * Math.PI;
        var a, o, s = [], c = [], h = [], l = [], u = new Me, p = new Me, d = new Me;
        for (a = 0; a <= i; a++) {
            for (o = 0; o <= n; o++) {
                var f = o / n * r, m = a / i * Math.PI * 2;
                p.x = ( t + e * Math.cos( m ) ) * Math.cos( f ), p.y = ( t + e * Math.cos( m ) ) * Math.sin( f ), p.z = e * Math.sin( m ), c.push( p.x, p.y, p.z ), u.x = t * Math.cos( f ), u.y = t * Math.sin( f ), d.subVectors( p, u ).normalize(), h.push( d.x, d.y, d.z ), l.push( o / n ), l.push( a / i )
            }
        }
        for (a = 1; a <= i; a++) {
            for (o = 1; o <= n; o++) {
                var v = ( n + 1 ) * a + o - 1, g = ( n + 1 ) * ( a - 1 ) + o - 1, y = ( n + 1 ) * ( a - 1 ) + o,
                    x = ( n + 1 ) * a + o;
                s.push( v, g, x ), s.push( g, y, x )
            }
        }
        this.setIndex( s ), this.addAttribute( 'position', new pn( c, 3 ) ), this.addAttribute( 'normal', new pn( h, 3 ) ), this.addAttribute( 'uv', new pn( l, 2 ) )
    }

    nr.prototype = Object.assign( Object.create( Ki.prototype ), {
        constructor: nr, isPerspectiveCamera: !0, copy: function ( t, e ) {
            return Ki.prototype.copy.call( this, t, e ), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign( {}, t.view ), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
        }, setFocalLength: function ( t ) {
            var e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * xe.RAD2DEG * Math.atan( e ), this.updateProjectionMatrix()
        }, getFocalLength: function () {
            var t = Math.tan( .5 * xe.DEG2RAD * this.fov );
            return .5 * this.getFilmHeight() / t
        }, getEffectiveFOV: function () {
            return 2 * xe.RAD2DEG * Math.atan( Math.tan( .5 * xe.DEG2RAD * this.fov ) / this.zoom )
        }, getFilmWidth: function () {
            return this.filmGauge * Math.min( this.aspect, 1 )
        }, getFilmHeight: function () {
            return this.filmGauge / Math.max( this.aspect, 1 )
        }, setViewOffset: function ( t, e, i, n, r, a ) {
            this.aspect = t / e, null === this.view && ( this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            } ), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
        }, clearViewOffset: function () {
            null !== this.view && ( this.view.enabled = !1 ), this.updateProjectionMatrix()
        }, updateProjectionMatrix: function () {
            var t = this.near, e = t * Math.tan( .5 * xe.DEG2RAD * this.fov ) / this.zoom, i = 2 * e,
                n = this.aspect * i, r = -.5 * n, a = this.view;
            if (null !== this.view && this.view.enabled) {
                var o = a.fullWidth, s = a.fullHeight;
                r += a.offsetX * n / o, e -= a.offsetY * i / s, n *= a.width / o, i *= a.height / s
            }
            var c = this.filmOffset;
            0 !== c && ( r += t * c / this.getFilmWidth() ), this.projectionMatrix.makePerspective( r, r + n, e, e - i, t, this.far )
        }, toJSON: function ( t ) {
            var e = Ji.prototype.toJSON.call( this, t );
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && ( e.object.view = Object.assign( {}, this.view ) ), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
        }
    } ), rr.prototype = Object.assign( Object.create( nr.prototype ), {
        constructor: rr,
        isArrayCamera: !0
    } ), or.prototype.isFogExp2 = !0, or.prototype.clone = function () {
        return new or( this.color.getHex(), this.density )
    }, or.prototype.toJSON = function () {
        return { type: 'FogExp2', color: this.color.getHex(), density: this.density }
    }, sr.prototype.isFog = !0, sr.prototype.clone = function () {
        return new sr( this.color.getHex(), this.near, this.far )
    }, sr.prototype.toJSON = function () {
        return { type: 'Fog', color: this.color.getHex(), near: this.near, far: this.far }
    }, cr.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: cr, copy: function ( t, e ) {
            return Ji.prototype.copy.call( this, t, e ), null !== t.background && ( this.background = t.background.clone() ), null !== t.fog && ( this.fog = t.fog.clone() ), null !== t.overrideMaterial && ( this.overrideMaterial = t.overrideMaterial.clone() ), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
        }, toJSON: function ( t ) {
            var e = Ji.prototype.toJSON.call( this, t );
            return null !== this.background && ( e.object.background = this.background.toJSON( t ) ), null !== this.fog && ( e.object.fog = this.fog.toJSON() ), e
        }
    } ), hr.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: hr,
        isLensFlare: !0,
        copy: function ( t ) {
            Ji.prototype.copy.call( this, t ), this.positionScreen.copy( t.positionScreen ), this.customUpdateCallback = t.customUpdateCallback;
            for (var e = 0, i = t.lensFlares.length; e < i; e++) this.lensFlares.push( t.lensFlares[e] );
            return this
        },
        add: function ( t, e, i, n, r, a ) {
            void 0 === e && ( e = -1 ), void 0 === i && ( i = 0 ), void 0 === a && ( a = 1 ), void 0 === r && ( r = new yi( 16777215 ) ), void 0 === n && ( n = N ), i = Math.min( i, Math.max( 0, i ) ), this.lensFlares.push( {
                texture: t,
                size: e,
                distance: i,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: a,
                color: r,
                blending: n
            } )
        },
        updateLensFlares: function () {
            var t, e, i = this.lensFlares.length, n = 2 * -this.positionScreen.x, r = 2 * -this.positionScreen.y;
            for (t = 0; t < i; t++) ( e = this.lensFlares[t] ).x = this.positionScreen.x + n * e.distance, e.y = this.positionScreen.y + r * e.distance, e.wantedRotation = e.x * Math.PI * .25, e.rotation += .25 * ( e.wantedRotation - e.rotation )
        }
    } ), lr.prototype = Object.create( Oi.prototype ), lr.prototype.constructor = lr, lr.prototype.isSpriteMaterial = !0, lr.prototype.copy = function ( t ) {
        return Oi.prototype.copy.call( this, t ), this.color.copy( t.color ), this.map = t.map, this.rotation = t.rotation, this
    }, ur.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: ur,
        isSprite: !0,
        raycast: ( Gn = new Me, jn = new Me, Hn = new Me, function ( t, e ) {
            jn.setFromMatrixPosition( this.matrixWorld ), t.ray.closestPointToPoint( jn, Gn ), Hn.setFromMatrixScale( this.matrixWorld );
            var i = Hn.x * Hn.y / 4;
            if (!( jn.distanceToSquared( Gn ) > i )) {
                var n = t.ray.origin.distanceTo( Gn );
                n < t.near || n > t.far || e.push( { distance: n, point: Gn.clone(), face: null, object: this } )
            }
        } ),
        clone: function () {
            return new this.constructor( this.material ).copy( this )
        }
    } ), pr.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: pr, copy: function ( t ) {
            Ji.prototype.copy.call( this, t, !1 );
            for (var e = t.levels, i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                this.addLevel( r.object.clone(), r.distance )
            }
            return this
        }, addLevel: function ( t, e ) {
            void 0 === e && ( e = 0 ), e = Math.abs( e );
            for (var i = this.levels, n = 0; n < i.length && !( e < i[n].distance ); n++) ;
            i.splice( n, 0, { distance: e, object: t } ), this.add( t )
        }, getObjectForDistance: function ( t ) {
            for (var e = this.levels, i = 1, n = e.length; i < n && !( t < e[i].distance ); i++) ;
            return e[i - 1].object
        }, raycast: ( Vn = new Me, function ( t, e ) {
            Vn.setFromMatrixPosition( this.matrixWorld );
            var i = t.ray.origin.distanceTo( Vn );
            this.getObjectForDistance( i ).raycast( t, e )
        } ), update: function () {
            var t = new Me, e = new Me;
            return function ( i ) {
                var n = this.levels;
                if (n.length > 1) {
                    t.setFromMatrixPosition( i.matrixWorld ), e.setFromMatrixPosition( this.matrixWorld );
                    var r = t.distanceTo( e );
                    n[0].object.visible = !0;
                    for (var a = 1, o = n.length; a < o && r >= n[a].distance; a++) n[a - 1].object.visible = !1, n[a].object.visible = !0;
                    for (; a < o; a++) n[a].object.visible = !1
                }
            }
        }(), toJSON: function ( t ) {
            var e = Ji.prototype.toJSON.call( this, t );
            e.object.levels = [];
            for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
                var a = i[n];
                e.object.levels.push( { object: a.object.uuid, distance: a.distance } )
            }
            return e
        }
    } ), Object.assign( dr.prototype, {
        calculateInverses: function () {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var i = new we;
                this.bones[t] && i.getInverse( this.bones[t].matrixWorld ), this.boneInverses.push( i )
            }
        }, pose: function () {
            var t, e, i;
            for (e = 0, i = this.bones.length; e < i; e++) ( t = this.bones[e] ) && t.matrixWorld.getInverse( this.boneInverses[e] );
            for (e = 0, i = this.bones.length; e < i; e++) ( t = this.bones[e] ) && ( t.parent && t.parent.isBone ? ( t.matrix.getInverse( t.parent.matrixWorld ), t.matrix.multiply( t.matrixWorld ) ) : t.matrix.copy( t.matrixWorld ), t.matrix.decompose( t.position, t.quaternion, t.scale ) )
        }, update: ( Wn = new we, Xn = new we, function () {
            for (var t = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture, r = 0, a = t.length; r < a; r++) {
                var o = t[r] ? t[r].matrixWorld : Xn;
                Wn.multiplyMatrices( o, e[r] ), Wn.toArray( i, 16 * r )
            }
            void 0 !== n && ( n.needsUpdate = !0 )
        } ), clone: function () {
            return new dr( this.bones, this.boneInverses )
        }
    } ), fr.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: fr,
        isBone: !0
    } ), mr.prototype = Object.assign( Object.create( On.prototype ), {
        constructor: mr, isSkinnedMesh: !0, initBones: function () {
            var t, e, i, n, r = [];
            if (this.geometry && void 0 !== this.geometry.bones) {
                for (i = 0, n = this.geometry.bones.length; i < n; i++) e = this.geometry.bones[i], t = new fr, r.push( t ), t.name = e.name, t.position.fromArray( e.pos ), t.quaternion.fromArray( e.rotq ), void 0 !== e.scl && t.scale.fromArray( e.scl );
                for (i = 0, n = this.geometry.bones.length; i < n; i++) -1 !== ( e = this.geometry.bones[i] ).parent && null !== e.parent && void 0 !== r[e.parent] ? r[e.parent].add( r[i] ) : this.add( r[i] )
            }
            return this.updateMatrixWorld( !0 ), r
        }, bind: function ( t, e ) {
            this.skeleton = t, void 0 === e && ( this.updateMatrixWorld( !0 ), this.skeleton.calculateInverses(), e = this.matrixWorld ), this.bindMatrix.copy( e ), this.bindMatrixInverse.getInverse( e )
        }, pose: function () {
            this.skeleton.pose()
        }, normalizeSkinWeights: function () {
            var t, e;
            if (this.geometry && this.geometry.isGeometry) {
                for (e = 0; e < this.geometry.skinWeights.length; e++) {
                    var i = this.geometry.skinWeights[e];
                    ( t = 1 / i.manhattanLength() ) !== 1 / 0 ? i.multiplyScalar( t ) : i.set( 1, 0, 0, 0 )
                }
            } else if (this.geometry && this.geometry.isBufferGeometry) {
                var n = new Ae, r = this.geometry.attributes.skinWeight;
                for (e = 0; e < r.count; e++) n.x = r.getX( e ), n.y = r.getY( e ), n.z = r.getZ( e ), n.w = r.getW( e ), ( t = 1 / n.manhattanLength() ) !== 1 / 0 ? n.multiplyScalar( t ) : n.set( 1, 0, 0, 0 ), r.setXYZW( e, n.x, n.y, n.z, n.w )
            }
        }, updateMatrixWorld: function ( t ) {
            On.prototype.updateMatrixWorld.call( this, t ), 'attached' === this.bindMode ? this.bindMatrixInverse.getInverse( this.matrixWorld ) : 'detached' === this.bindMode ? this.bindMatrixInverse.getInverse( this.bindMatrix ) : console.warn( 'THREE.SkinnedMesh: Unrecognized bindMode: ' + this.bindMode )
        }, clone: function () {
            return new this.constructor( this.geometry, this.material ).copy( this )
        }
    } ), vr.prototype = Object.create( Oi.prototype ), vr.prototype.constructor = vr, vr.prototype.isLineBasicMaterial = !0, vr.prototype.copy = function ( t ) {
        return Oi.prototype.copy.call( this, t ), this.color.copy( t.color ), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
    }, gr.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: gr, isLine: !0, raycast: function () {
            var t = new we, e = new Cn, i = new zi;
            return function ( n, r ) {
                var a = n.linePrecision, o = a * a, s = this.geometry, c = this.matrixWorld;
                if (null === s.boundingSphere && s.computeBoundingSphere(), i.copy( s.boundingSphere ), i.applyMatrix4( c ), !1 !== n.ray.intersectsSphere( i )) {
                    t.getInverse( c ), e.copy( n.ray ).applyMatrix4( t );
                    var h = new Me, l = new Me, u = new Me, p = new Me, d = this && this.isLineSegments ? 2 : 1;
                    if (s.isBufferGeometry) {
                        var f = s.index, m = s.attributes.position.array;
                        if (null !== f) {
                            for (var v = f.array, g = 0, y = v.length - 1; g < y; g += d) {
                                var x = v[g], b = v[g + 1];
                                if (h.fromArray( m, 3 * x ), l.fromArray( m, 3 * b ), !( e.distanceSqToSegment( h, l, p, u ) > o )) {
                                    p.applyMatrix4( this.matrixWorld ), ( M = n.ray.origin.distanceTo( p ) ) < n.near || M > n.far || r.push( {
                                        distance: M,
                                        point: u.clone().applyMatrix4( this.matrixWorld ),
                                        index: g,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    } )
                                }
                            }
                        } else {
                            for (g = 0, y = m.length / 3 - 1; g < y; g += d) {
                                if (h.fromArray( m, 3 * g ), l.fromArray( m, 3 * g + 3 ), !( e.distanceSqToSegment( h, l, p, u ) > o )) {
                                    p.applyMatrix4( this.matrixWorld ), ( M = n.ray.origin.distanceTo( p ) ) < n.near || M > n.far || r.push( {
                                        distance: M,
                                        point: u.clone().applyMatrix4( this.matrixWorld ),
                                        index: g,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    } )
                                }
                            }
                        }
                    } else if (s.isGeometry) {
                        var w = s.vertices, _ = w.length;
                        for (g = 0; g < _ - 1; g += d) {
                            var M;
                            if (!( e.distanceSqToSegment( w[g], w[g + 1], p, u ) > o )) {
                                p.applyMatrix4( this.matrixWorld ), ( M = n.ray.origin.distanceTo( p ) ) < n.near || M > n.far || r.push( {
                                    distance: M,
                                    point: u.clone().applyMatrix4( this.matrixWorld ),
                                    index: g,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                } )
                            }
                        }
                    }
                }
            }
        }(), clone: function () {
            return new this.constructor( this.geometry, this.material ).copy( this )
        }
    } ), yr.prototype = Object.assign( Object.create( gr.prototype ), {
        constructor: yr,
        isLineSegments: !0
    } ), xr.prototype = Object.assign( Object.create( gr.prototype ), {
        constructor: xr,
        isLineLoop: !0
    } ), br.prototype = Object.create( Oi.prototype ), br.prototype.constructor = br, br.prototype.isPointsMaterial = !0, br.prototype.copy = function ( t ) {
        return Oi.prototype.copy.call( this, t ), this.color.copy( t.color ), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this
    }, wr.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: wr, isPoints: !0, raycast: function () {
            var t = new we, e = new Cn, i = new zi;
            return function ( n, r ) {
                var a = this, o = this.geometry, s = this.matrixWorld, c = n.params.Points.threshold;
                if (null === o.boundingSphere && o.computeBoundingSphere(), i.copy( o.boundingSphere ), i.applyMatrix4( s ), i.radius += c, !1 !== n.ray.intersectsSphere( i )) {
                    t.getInverse( s ), e.copy( n.ray ).applyMatrix4( t );
                    var h = c / ( ( this.scale.x + this.scale.y + this.scale.z ) / 3 ), l = h * h, u = new Me;
                    if (o.isBufferGeometry) {
                        var p = o.index, d = o.attributes.position.array;
                        if (null !== p) {
                            for (var f = p.array, m = 0, v = f.length; m < v; m++) {
                                var g = f[m];
                                u.fromArray( d, 3 * g ), b( u, g )
                            }
                        } else {
                            m = 0;
                            for (var y = d.length / 3; m < y; m++) u.fromArray( d, 3 * m ), b( u, m )
                        }
                    } else {
                        var x = o.vertices;
                        for (m = 0, y = x.length; m < y; m++) b( x[m], m )
                    }
                }

                function b( t, i ) {
                    var o = e.distanceSqToPoint( t );
                    if (o < l) {
                        var c = e.closestPointToPoint( t );
                        c.applyMatrix4( s );
                        var h = n.ray.origin.distanceTo( c );
                        if (h < n.near || h > n.far) return;
                        r.push( {
                            distance: h,
                            distanceToRay: Math.sqrt( o ),
                            point: c.clone(),
                            index: i,
                            face: null,
                            object: a
                        } )
                    }
                }
            }
        }(), clone: function () {
            return new this.constructor( this.geometry, this.material ).copy( this )
        }
    } ), _r.prototype = Object.assign( Object.create( Ji.prototype ), { constructor: _r } ), Mr.prototype = Object.create( Se.prototype ), Mr.prototype.constructor = Mr, Er.prototype = Object.create( Se.prototype ), Er.prototype.constructor = Er, Er.prototype.isCompressedTexture = !0, Tr.prototype = Object.create( Se.prototype ), Tr.prototype.constructor = Tr, Tr.prototype.isDepthTexture = !0, Sr.prototype = Object.create( En.prototype ), Sr.prototype.constructor = Sr, Ar.prototype = Object.create( nn.prototype ), Ar.prototype.constructor = Ar, Lr.prototype = Object.create( En.prototype ), Lr.prototype.constructor = Lr, Rr.prototype = Object.create( nn.prototype ), Rr.prototype.constructor = Rr, Pr.prototype = Object.create( En.prototype ), Pr.prototype.constructor = Pr, Cr.prototype = Object.create( nn.prototype ), Cr.prototype.constructor = Cr, Nr.prototype = Object.create( Pr.prototype ), Nr.prototype.constructor = Nr, Ir.prototype = Object.create( nn.prototype ), Ir.prototype.constructor = Ir, Or.prototype = Object.create( Pr.prototype ), Or.prototype.constructor = Or, Ur.prototype = Object.create( nn.prototype ), Ur.prototype.constructor = Ur, Dr.prototype = Object.create( Pr.prototype ), Dr.prototype.constructor = Dr, Fr.prototype = Object.create( nn.prototype ), Fr.prototype.constructor = Fr, zr.prototype = Object.create( Pr.prototype ), zr.prototype.constructor = zr, Br.prototype = Object.create( nn.prototype ), Br.prototype.constructor = Br, kr.prototype = Object.create( En.prototype ), kr.prototype.constructor = kr, Gr.prototype = Object.create( nn.prototype ), Gr.prototype.constructor = Gr, jr.prototype = Object.create( En.prototype ), jr.prototype.constructor = jr, Hr.prototype = Object.create( nn.prototype ), Hr.prototype.constructor = Hr, Vr.prototype = Object.create( En.prototype ), Vr.prototype.constructor = Vr;
    var Wr = {
        area: function ( t ) {
            for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
            return .5 * i
        }, triangulate: function () {
            function t( t, e, i, n, r, a ) {
                var o, s, c, h, l, u, p, d, f, m, v, g, y, x, b, w, _;
                if (s = t[a[e]].x, c = t[a[e]].y, h = t[a[i]].x, l = t[a[i]].y, u = t[a[n]].x, ( h - s ) * ( ( p = t[a[n]].y ) - c ) - ( l - c ) * ( u - s ) <= 0) return !1;
                for (m = u - h, v = p - l, g = s - u, y = c - p, x = h - s, b = l - c, o = 0; o < r; o++) if (d = t[a[o]].x, f = t[a[o]].y, !( d === s && f === c || d === h && f === l || d === u && f === p ) && ( w = x * ( f - c ) - b * ( d - s ), _ = g * ( f - p ) - y * ( d - u ), m * ( f - l ) - v * ( d - h ) >= -Number.EPSILON && _ >= -Number.EPSILON && w >= -Number.EPSILON )) return !1;
                return !0
            }

            return function ( e, i ) {
                var n = e.length;
                if (n < 3) return null;
                var r, a, o, s = [], c = [], h = [];
                if (Wr.area( e ) > 0) for (a = 0; a < n; a++) c[a] = a; else for (a = 0; a < n; a++) c[a] = n - 1 - a;
                var l = n, u = 2 * l;
                for (a = l - 1; l > 2;) {
                    if (u-- <= 0) return console.warn( 'THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()' ), i ? h : s;
                    if (l <= ( r = a ) && ( r = 0 ), l <= ( a = r + 1 ) && ( a = 0 ), l <= ( o = a + 1 ) && ( o = 0 ), t( e, r, a, o, l, c )) {
                        var p, d, f, m, v;
                        for (p = c[r], d = c[a], f = c[o], s.push( [e[p], e[d], e[f]] ), h.push( [c[r], c[a], c[o]] ), m = a, v = a + 1; v < l; m++, v++) c[m] = c[v];
                        u = 2 * --l
                    }
                }
                return i ? h : s
            }
        }(), triangulateShape: function ( t, e ) {
            function i( t ) {
                var e = t.length;
                e > 2 && t[e - 1].equals( t[0] ) && t.pop()
            }

            function n( t, e, i ) {
                return t.x !== e.x ? t.x < e.x ? t.x <= i.x && i.x <= e.x : e.x <= i.x && i.x <= t.x : t.y < e.y ? t.y <= i.y && i.y <= e.y : e.y <= i.y && i.y <= t.y
            }

            function r( t, e, i, r, a ) {
                var o = e.x - t.x, s = e.y - t.y, c = r.x - i.x, h = r.y - i.y, l = t.x - i.x, u = t.y - i.y,
                    p = s * c - o * h, d = s * l - o * u;
                if (Math.abs( p ) > Number.EPSILON) {
                    var f;
                    if (p > 0) {
                        if (d < 0 || d > p) return [];
                        if (( f = h * l - c * u ) < 0 || f > p) return []
                    } else {
                        if (d > 0 || d < p) return [];
                        if (( f = h * l - c * u ) > 0 || f < p) return []
                    }
                    if (0 === f) return !a || 0 !== d && d !== p ? [t] : [];
                    if (f === p) return !a || 0 !== d && d !== p ? [e] : [];
                    if (0 === d) return [i];
                    if (d === p) return [r];
                    var m = f / p;
                    return [{ x: t.x + m * o, y: t.y + m * s }]
                }
                if (0 !== d || h * l != c * u) return [];
                var v, g, y, x, b, w, _, M, E = 0 === o && 0 === s, T = 0 === c && 0 === h;
                return E && T ? t.x !== i.x || t.y !== i.y ? [] : [t] : E ? n( i, r, t ) ? [t] : [] : T ? n( t, e, i ) ? [i] : [] : ( 0 !== o ? ( t.x < e.x ? ( v = t, y = t.x, g = e, x = e.x ) : ( v = e, y = e.x, g = t, x = t.x ), i.x < r.x ? ( b = i, _ = i.x, w = r, M = r.x ) : ( b = r, _ = r.x, w = i, M = i.x ) ) : ( t.y < e.y ? ( v = t, y = t.y, g = e, x = e.y ) : ( v = e, y = e.y, g = t, x = t.y ), i.y < r.y ? ( b = i, _ = i.y, w = r, M = r.y ) : ( b = r, _ = r.y, w = i, M = i.y ) ), y <= _ ? x < _ ? [] : x === _ ? a ? [] : [b] : x <= M ? [b, g] : [b, w] : y > M ? [] : y === M ? a ? [] : [v] : x <= M ? [v, g] : [v, w] )
            }

            function a( t, e, i, n ) {
                var r = e.x - t.x, a = e.y - t.y, o = i.x - t.x, s = i.y - t.y, c = n.x - t.x, h = n.y - t.y,
                    l = r * s - a * o, u = r * h - a * c;
                if (Math.abs( l ) > Number.EPSILON) {
                    var p = c * s - h * o;
                    return l > 0 ? u >= 0 && p >= 0 : u >= 0 || p >= 0
                }
                return u > 0
            }

            i( t ), e.forEach( i );
            for (var o, s, c, h, l, u, p = {}, d = t.concat(), f = 0, m = e.length; f < m; f++) Array.prototype.push.apply( d, e[f] );
            for (o = 0, s = d.length; o < s; o++) void 0 !== p[l = d[o].x + ':' + d[o].y] && console.warn( 'THREE.ShapeUtils: Duplicate point', l, o ), p[l] = o;
            var v = function ( t, e ) {
                var i, n = t.concat();

                function o( t, e ) {
                    var r = n.length - 1, o = t - 1;
                    o < 0 && ( o = r );
                    var s = t + 1;
                    s > r && ( s = 0 );
                    var c = a( n[t], n[o], n[s], i[e] );
                    if (!c) return !1;
                    var h = i.length - 1, l = e - 1;
                    l < 0 && ( l = h );
                    var u = e + 1;
                    return u > h && ( u = 0 ), !!( c = a( i[e], i[l], i[u], n[t] ) )
                }

                function s( t, e ) {
                    var i, a;
                    for (i = 0; i < n.length; i++) if (a = i + 1, a %= n.length, r( t, e, n[i], n[a], !0 ).length > 0) return !0;
                    return !1
                }

                var c = [];

                function h( t, i ) {
                    var n, a, o, s;
                    for (n = 0; n < c.length; n++) for (a = e[c[n]], o = 0; o < a.length; o++) if (s = o + 1, s %= a.length, r( t, i, a[o], a[s], !0 ).length > 0) return !0;
                    return !1
                }

                for (var l, u, p, d, f, m, v, g, y, x, b = [], w = 0, _ = e.length; w < _; w++) c.push( w );
                for (var M = 0, E = 2 * c.length; c.length > 0;) {
                    if (--E < 0) {
                        console.log( 'THREE.ShapeUtils: Infinite Loop! Holes left:" + indepHoles.length + ", Probably Hole outside Shape!' );
                        break
                    }
                    for (u = M; u < n.length; u++) {
                        for (p = n[u], l = -1, w = 0; w < c.length; w++) {
                            if (f = c[w], void 0 === b[m = p.x + ':' + p.y + ':' + f]) {
                                i = e[f];
                                for (var T = 0; T < i.length; T++) {
                                    if (d = i[T], o( u, T ) && !s( p, d ) && !h( p, d )) {
                                        l = T, c.splice( w, 1 ), v = n.slice( 0, u + 1 ), g = n.slice( u ), y = i.slice( l ), x = i.slice( 0, l + 1 ), n = v.concat( y ).concat( x ).concat( g ), M = u;
                                        break
                                    }
                                }
                                if (l >= 0) break;
                                b[m] = !0
                            }
                        }
                        if (l >= 0) break
                    }
                }
                return n
            }( t, e ), g = Wr.triangulate( v, !1 );
            for (o = 0, s = g.length; o < s; o++) for (h = g[o], c = 0; c < 3; c++) void 0 !== ( u = p[l = h[c].x + ':' + h[c].y] ) && ( h[c] = u );
            return g.concat()
        }, isClockWise: function ( t ) {
            return Wr.area( t ) < 0
        }
    };

    function Xr( t, e ) {
        nn.call( this ), this.type = 'ExtrudeGeometry', this.parameters = {
            shapes: t,
            options: e
        }, this.fromBufferGeometry( new qr( t, e ) ), this.mergeVertices()
    }

    function qr( t, e ) {
        void 0 !== t && ( En.call( this ), this.type = 'ExtrudeBufferGeometry', t = Array.isArray( t ) ? t : [t], this.addShapeList( t, e ), this.computeVertexNormals() )
    }

    function Yr( t, e ) {
        nn.call( this ), this.type = 'TextGeometry', this.parameters = {
            text: t,
            parameters: e
        }, this.fromBufferGeometry( new Zr( t, e ) ), this.mergeVertices()
    }

    function Zr( t, e ) {
        var i = ( e = e || {} ).font;
        if (!i || !i.isFont) return console.error( 'THREE.TextGeometry: font parameter is not an instance of THREE.Font.' ), new nn;
        var n = i.generateShapes( t, e.size, e.curveSegments );
        e.amount = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && ( e.bevelThickness = 10 ), void 0 === e.bevelSize && ( e.bevelSize = 8 ), void 0 === e.bevelEnabled && ( e.bevelEnabled = !1 ), qr.call( this, n, e ), this.type = 'TextBufferGeometry'
    }

    function Jr( t, e, i, n, r, a, o ) {
        nn.call( this ), this.type = 'SphereGeometry', this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        }, this.fromBufferGeometry( new Kr( t, e, i, n, r, a, o ) ), this.mergeVertices()
    }

    function Kr( t, e, i, n, r, a, o ) {
        En.call( this ), this.type = 'SphereBufferGeometry', this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        }, t = t || 1, e = Math.max( 3, Math.floor( e ) || 8 ), i = Math.max( 2, Math.floor( i ) || 6 ), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var s, c, h = ( a = void 0 !== a ? a : 0 ) + ( o = void 0 !== o ? o : Math.PI ), l = 0, u = [], p = new Me,
            d = new Me, f = [], m = [], v = [], g = [];
        for (c = 0; c <= i; c++) {
            var y = [], x = c / i;
            for (s = 0; s <= e; s++) {
                var b = s / e;
                p.x = -t * Math.cos( n + b * r ) * Math.sin( a + x * o ), p.y = t * Math.cos( a + x * o ), p.z = t * Math.sin( n + b * r ) * Math.sin( a + x * o ), m.push( p.x, p.y, p.z ), d.set( p.x, p.y, p.z ).normalize(), v.push( d.x, d.y, d.z ), g.push( b, 1 - x ), y.push( l++ )
            }
            u.push( y )
        }
        for (c = 0; c < i; c++) {
            for (s = 0; s < e; s++) {
                var w = u[c][s + 1], _ = u[c][s], M = u[c + 1][s], E = u[c + 1][s + 1];
                ( 0 !== c || a > 0 ) && f.push( w, _, E ), ( c !== i - 1 || h < Math.PI ) && f.push( _, M, E )
            }
        }
        this.setIndex( f ), this.addAttribute( 'position', new pn( m, 3 ) ), this.addAttribute( 'normal', new pn( v, 3 ) ), this.addAttribute( 'uv', new pn( g, 2 ) )
    }

    function Qr( t, e, i, n, r, a ) {
        nn.call( this ), this.type = 'RingGeometry', this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a
        }, this.fromBufferGeometry( new $r( t, e, i, n, r, a ) ), this.mergeVertices()
    }

    function $r( t, e, i, n, r, a ) {
        En.call( this ), this.type = 'RingBufferGeometry', this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a
        }, t = t || .5, e = e || 1, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max( 3, i ) : 8;
        var o, s, c, h = [], l = [], u = [], p = [], d = t, f = ( e - t ) / ( n = void 0 !== n ? Math.max( 1, n ) : 1 ),
            m = new Me, v = new be;
        for (s = 0; s <= n; s++) {
            for (c = 0; c <= i; c++) o = r + c / i * a, m.x = d * Math.cos( o ), m.y = d * Math.sin( o ), l.push( m.x, m.y, m.z ), u.push( 0, 0, 1 ), v.x = ( m.x / e + 1 ) / 2, v.y = ( m.y / e + 1 ) / 2, p.push( v.x, v.y );
            d += f
        }
        for (s = 0; s < n; s++) {
            var g = s * ( i + 1 );
            for (c = 0; c < i; c++) {
                var y = o = c + g, x = o + i + 1, b = o + i + 2, w = o + 1;
                h.push( y, x, w ), h.push( x, b, w )
            }
        }
        this.setIndex( h ), this.addAttribute( 'position', new pn( l, 3 ) ), this.addAttribute( 'normal', new pn( u, 3 ) ), this.addAttribute( 'uv', new pn( p, 2 ) )
    }

    function ta( t, e, i, n ) {
        nn.call( this ), this.type = 'LatheGeometry', this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n
        }, this.fromBufferGeometry( new ea( t, e, i, n ) ), this.mergeVertices()
    }

    function ea( t, e, i, n ) {
        En.call( this ), this.type = 'LatheBufferGeometry', this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n
        }, e = Math.floor( e ) || 12, i = i || 0, n = n || 2 * Math.PI, n = xe.clamp( n, 0, 2 * Math.PI );
        var r, a, o, s = [], c = [], h = [], l = 1 / e, u = new Me, p = new be;
        for (a = 0; a <= e; a++) {
            var d = i + a * l * n, f = Math.sin( d ), m = Math.cos( d );
            for (o = 0; o <= t.length - 1; o++) u.x = t[o].x * f, u.y = t[o].y, u.z = t[o].x * m, c.push( u.x, u.y, u.z ), p.x = a / e, p.y = o / ( t.length - 1 ), h.push( p.x, p.y )
        }
        for (a = 0; a < e; a++) {
            for (o = 0; o < t.length - 1; o++) {
                var v = r = o + a * t.length, g = r + t.length, y = r + t.length + 1, x = r + 1;
                s.push( v, g, x ), s.push( g, y, x )
            }
        }
        if (this.setIndex( s ), this.addAttribute( 'position', new pn( c, 3 ) ), this.addAttribute( 'uv', new pn( h, 2 ) ), this.computeVertexNormals(), n === 2 * Math.PI) {
            var b = this.attributes.normal.array, w = new Me, _ = new Me, M = new Me;
            for (r = e * t.length * 3, a = 0, o = 0; a < t.length; a++, o += 3) w.x = b[o + 0], w.y = b[o + 1], w.z = b[o + 2], _.x = b[r + o + 0], _.y = b[r + o + 1], _.z = b[r + o + 2], M.addVectors( w, _ ).normalize(), b[o + 0] = b[r + o + 0] = M.x, b[o + 1] = b[r + o + 1] = M.y, b[o + 2] = b[r + o + 2] = M.z
        }
    }

    function ia( t, e ) {
        nn.call( this ), this.type = 'ShapeGeometry', 'object' == typeof e && ( console.warn( 'THREE.ShapeGeometry: Options parameter has been removed.' ), e = e.curveSegments ), this.parameters = {
            shapes: t,
            curveSegments: e
        }, this.fromBufferGeometry( new na( t, e ) ), this.mergeVertices()
    }

    function na( t, e ) {
        En.call( this ), this.type = 'ShapeBufferGeometry', this.parameters = {
            shapes: t,
            curveSegments: e
        }, e = e || 12;
        var i = [], n = [], r = [], a = [], o = 0, s = 0;
        if (!1 === Array.isArray( t )) h( t ); else for (var c = 0; c < t.length; c++) h( t[c] ), this.addGroup( o, s, c ), o += s, s = 0;

        function h( t ) {
            var o, c, h, l = n.length / 3, u = t.extractPoints( e ), p = u.shape, d = u.holes;
            if (!1 === Wr.isClockWise( p )) for (p = p.reverse(), o = 0, c = d.length; o < c; o++) h = d[o], !0 === Wr.isClockWise( h ) && ( d[o] = h.reverse() );
            var f = Wr.triangulateShape( p, d );
            for (o = 0, c = d.length; o < c; o++) h = d[o], p = p.concat( h );
            for (o = 0, c = p.length; o < c; o++) {
                var m = p[o];
                n.push( m.x, m.y, 0 ), r.push( 0, 0, 1 ), a.push( m.x, m.y )
            }
            for (o = 0, c = f.length; o < c; o++) {
                var v = f[o], g = v[0] + l, y = v[1] + l, x = v[2] + l;
                i.push( g, y, x ), s += 3
            }
        }

        this.setIndex( i ), this.addAttribute( 'position', new pn( n, 3 ) ), this.addAttribute( 'normal', new pn( r, 3 ) ), this.addAttribute( 'uv', new pn( a, 2 ) )
    }

    function ra( t, e ) {
        En.call( this ), this.type = 'EdgesGeometry', this.parameters = { thresholdAngle: e }, e = void 0 !== e ? e : 1;
        var i, n, r, a, o = [], s = Math.cos( xe.DEG2RAD * e ), c = [0, 0], h = {}, l = ['a', 'b', 'c'];
        t.isBufferGeometry ? ( a = new nn ).fromBufferGeometry( t ) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
        for (var u = a.vertices, p = a.faces, d = 0, f = p.length; d < f; d++) {
            for (var m = p[d], v = 0; v < 3; v++) {
                i = m[l[v]], n = m[l[( v + 1 ) % 3]], c[0] = Math.min( i, n ), c[1] = Math.max( i, n ), void 0 === h[r = c[0] + ',' + c[1]] ? h[r] = {
                    index1: c[0],
                    index2: c[1],
                    face1: d,
                    face2: void 0
                } : h[r].face2 = d;
            }
        }
        for (r in h) {
            var g = h[r];
            if (void 0 === g.face2 || p[g.face1].normal.dot( p[g.face2].normal ) <= s) {
                var y = u[g.index1];
                o.push( y.x, y.y, y.z ), y = u[g.index2], o.push( y.x, y.y, y.z )
            }
        }
        this.addAttribute( 'position', new pn( o, 3 ) )
    }

    function aa( t, e, i, n, r, a, o, s ) {
        nn.call( this ), this.type = 'CylinderGeometry', this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        }, this.fromBufferGeometry( new oa( t, e, i, n, r, a, o, s ) ), this.mergeVertices()
    }

    function oa( t, e, i, n, r, a, o, s ) {
        En.call( this ), this.type = 'CylinderBufferGeometry', this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        };
        var c = this;
        t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, i = i || 1, n = Math.floor( n ) || 8, r = Math.floor( r ) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
        var h = [], l = [], u = [], p = [], d = 0, f = [], m = i / 2, v = 0;

        function g( i ) {
            var r, a, f, g = new be, y = new Me, x = 0, b = !0 === i ? t : e, w = !0 === i ? 1 : -1;
            for (a = d, r = 1; r <= n; r++) l.push( 0, m * w, 0 ), u.push( 0, w, 0 ), p.push( .5, .5 ), d++;
            for (f = d, r = 0; r <= n; r++) {
                var _ = r / n * s + o, M = Math.cos( _ ), E = Math.sin( _ );
                y.x = b * E, y.y = m * w, y.z = b * M, l.push( y.x, y.y, y.z ), u.push( 0, w, 0 ), g.x = .5 * M + .5, g.y = .5 * E * w + .5, p.push( g.x, g.y ), d++
            }
            for (r = 0; r < n; r++) {
                var T = a + r, S = f + r;
                !0 === i ? h.push( S, S + 1, T ) : h.push( S + 1, S, T ), x += 3
            }
            c.addGroup( v, x, !0 === i ? 1 : 2 ), v += x
        }

        !function () {
            var a, g, y = new Me, x = new Me, b = 0, w = ( e - t ) / i;
            for (g = 0; g <= r; g++) {
                var _ = [], M = g / r, E = M * ( e - t ) + t;
                for (a = 0; a <= n; a++) {
                    var T = a / n, S = T * s + o, A = Math.sin( S ), L = Math.cos( S );
                    x.x = E * A, x.y = -M * i + m, x.z = E * L, l.push( x.x, x.y, x.z ), y.set( A, w, L ).normalize(), u.push( y.x, y.y, y.z ), p.push( T, 1 - M ), _.push( d++ )
                }
                f.push( _ )
            }
            for (a = 0; a < n; a++) {
                for (g = 0; g < r; g++) {
                    var R = f[g][a], P = f[g + 1][a], C = f[g + 1][a + 1], N = f[g][a + 1];
                    h.push( R, P, N ), h.push( P, C, N ), b += 6
                }
            }
            c.addGroup( v, b, 0 ), v += b
        }(), !1 === a && ( t > 0 && g( !0 ), e > 0 && g( !1 ) ), this.setIndex( h ), this.addAttribute( 'position', new pn( l, 3 ) ), this.addAttribute( 'normal', new pn( u, 3 ) ), this.addAttribute( 'uv', new pn( p, 2 ) )
    }

    function sa( t, e, i, n, r, a, o ) {
        aa.call( this, 0, t, e, i, n, r, a, o ), this.type = 'ConeGeometry', this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }

    function ca( t, e, i, n, r, a, o ) {
        oa.call( this, 0, t, e, i, n, r, a, o ), this.type = 'ConeBufferGeometry', this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }

    function ha( t, e, i, n ) {
        nn.call( this ), this.type = 'CircleGeometry', this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n
        }, this.fromBufferGeometry( new la( t, e, i, n ) ), this.mergeVertices()
    }

    function la( t, e, i, n ) {
        En.call( this ), this.type = 'CircleBufferGeometry', this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n
        }, t = t || 1, e = void 0 !== e ? Math.max( 3, e ) : 8, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI;
        var r, a, o = [], s = [], c = [], h = [], l = new Me, u = new be;
        for (s.push( 0, 0, 0 ), c.push( 0, 0, 1 ), h.push( .5, .5 ), a = 0, r = 3; a <= e; a++, r += 3) {
            var p = i + a / e * n;
            l.x = t * Math.cos( p ), l.y = t * Math.sin( p ), s.push( l.x, l.y, l.z ), c.push( 0, 0, 1 ), u.x = ( s[r] / t + 1 ) / 2, u.y = ( s[r + 1] / t + 1 ) / 2, h.push( u.x, u.y )
        }
        for (r = 1; r <= e; r++) o.push( r, r + 1, 0 );
        this.setIndex( o ), this.addAttribute( 'position', new pn( s, 3 ) ), this.addAttribute( 'normal', new pn( c, 3 ) ), this.addAttribute( 'uv', new pn( h, 2 ) )
    }

    Xr.prototype = Object.create( nn.prototype ), Xr.prototype.constructor = Xr, qr.prototype = Object.create( En.prototype ), qr.prototype.constructor = qr, qr.prototype.getArrays = function () {
        var t = this.getAttribute( 'position' ), e = t ? Array.prototype.slice.call( t.array ) : [],
            i = this.getAttribute( 'uv' ), n = i ? Array.prototype.slice.call( i.array ) : [], r = this.index;
        return { position: e, uv: n, index: r ? Array.prototype.slice.call( r.array ) : [] }
    }, qr.prototype.addShapeList = function ( t, e ) {
        var i = t.length;
        e.arrays = this.getArrays();
        for (var n = 0; n < i; n++) {
            var r = t[n];
            this.addShape( r, e )
        }
        this.setIndex( e.arrays.index ), this.addAttribute( 'position', new pn( e.arrays.position, 3 ) ), this.addAttribute( 'uv', new pn( e.arrays.uv, 2 ) )
    }, qr.prototype.addShape = function ( t, e ) {
        var i, n, r, a, o, s, c, h, l = e.arrays ? e.arrays : this.getArrays(), u = l.position, p = l.index, d = l.uv,
            f = [], m = void 0 !== e.amount ? e.amount : 100, v = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
            g = void 0 !== e.bevelSize ? e.bevelSize : v - 2, y = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
            x = void 0 === e.bevelEnabled || e.bevelEnabled, b = void 0 !== e.curveSegments ? e.curveSegments : 12,
            w = void 0 !== e.steps ? e.steps : 1, _ = e.extrudePath, M = !1,
            E = void 0 !== e.UVGenerator ? e.UVGenerator : Xr.WorldUVGenerator;
        _ && ( i = _.getSpacedPoints( w ), M = !0, x = !1, n = void 0 !== e.frames ? e.frames : _.computeFrenetFrames( w, !1 ), r = new Me, a = new Me, o = new Me ), x || ( y = 0, v = 0, g = 0 );
        var T = this, S = t.extractPoints( b ), A = S.shape, L = S.holes;
        if (!Wr.isClockWise( A )) for (A = A.reverse(), c = 0, h = L.length; c < h; c++) s = L[c], Wr.isClockWise( s ) && ( L[c] = s.reverse() );
        var R = Wr.triangulateShape( A, L ), P = A;
        for (c = 0, h = L.length; c < h; c++) s = L[c], A = A.concat( s );

        function C( t, e, i ) {
            return e || console.error( 'THREE.ExtrudeGeometry: vec does not exist' ), e.clone().multiplyScalar( i ).add( t )
        }

        var N, I, O, U, D, F, z = A.length, B = R.length;

        function k( t, e, i ) {
            var n, r, a, o = t.x - e.x, s = t.y - e.y, c = i.x - t.x, h = i.y - t.y, l = o * o + s * s,
                u = o * h - s * c;
            if (Math.abs( u ) > Number.EPSILON) {
                var p = Math.sqrt( l ), d = Math.sqrt( c * c + h * h ), f = e.x - s / p, m = e.y + o / p,
                    v = ( ( i.x - h / d - f ) * h - ( i.y + c / d - m ) * c ) / ( o * h - s * c ),
                    g = ( n = f + o * v - t.x ) * n + ( r = m + s * v - t.y ) * r;
                if (g <= 2) return new be( n, r );
                a = Math.sqrt( g / 2 )
            } else {
                var y = !1;
                o > Number.EPSILON ? c > Number.EPSILON && ( y = !0 ) : o < -Number.EPSILON ? c < -Number.EPSILON && ( y = !0 ) : Math.sign( s ) === Math.sign( h ) && ( y = !0 ), y ? ( n = -s, r = o, a = Math.sqrt( l ) ) : ( n = o, r = s, a = Math.sqrt( l / 2 ) )
            }
            return new be( n / a, r / a )
        }

        for (var G = [], j = 0, H = P.length, V = H - 1, W = j + 1; j < H; j++, V++, W++) V === H && ( V = 0 ), W === H && ( W = 0 ), G[j] = k( P[j], P[V], P[W] );
        var X, q, Y = [], Z = G.concat();
        for (c = 0, h = L.length; c < h; c++) {
            for (s = L[c], X = [], j = 0, V = ( H = s.length ) - 1, W = j + 1; j < H; j++, V++, W++) V === H && ( V = 0 ), W === H && ( W = 0 ), X[j] = k( s[j], s[V], s[W] );
            Y.push( X ), Z = Z.concat( X )
        }
        for (N = 0; N < y; N++) {
            for (O = N / y, U = v * Math.cos( O * Math.PI / 2 ), I = g * Math.sin( O * Math.PI / 2 ), j = 0, H = P.length; j < H; j++) K( ( D = C( P[j], G[j], I ) ).x, D.y, -U );
            for (c = 0, h = L.length; c < h; c++) for (s = L[c], X = Y[c], j = 0, H = s.length; j < H; j++) K( ( D = C( s[j], X[j], I ) ).x, D.y, -U )
        }
        for (I = g, j = 0; j < z; j++) D = x ? C( A[j], Z[j], I ) : A[j], M ? ( a.copy( n.normals[0] ).multiplyScalar( D.x ), r.copy( n.binormals[0] ).multiplyScalar( D.y ), o.copy( i[0] ).add( a ).add( r ), K( o.x, o.y, o.z ) ) : K( D.x, D.y, 0 );
        for (q = 1; q <= w; q++) for (j = 0; j < z; j++) D = x ? C( A[j], Z[j], I ) : A[j], M ? ( a.copy( n.normals[q] ).multiplyScalar( D.x ), r.copy( n.binormals[q] ).multiplyScalar( D.y ), o.copy( i[q] ).add( a ).add( r ), K( o.x, o.y, o.z ) ) : K( D.x, D.y, m / w * q );
        for (N = y - 1; N >= 0; N--) {
            for (O = N / y, U = v * Math.cos( O * Math.PI / 2 ), I = g * Math.sin( O * Math.PI / 2 ), j = 0, H = P.length; j < H; j++) K( ( D = C( P[j], G[j], I ) ).x, D.y, m + U );
            for (c = 0, h = L.length; c < h; c++) for (s = L[c], X = Y[c], j = 0, H = s.length; j < H; j++) D = C( s[j], X[j], I ), M ? K( D.x, D.y + i[w - 1].y, i[w - 1].x + U ) : K( D.x, D.y, m + U )
        }

        function J( t, e ) {
            var i, n;
            for (j = t.length; --j >= 0;) {
                i = j, ( n = j - 1 ) < 0 && ( n = t.length - 1 );
                var r = 0, a = w + 2 * y;
                for (r = 0; r < a; r++) {
                    var o = z * r, s = z * ( r + 1 );
                    $( e + i + o, e + n + o, e + n + s, e + i + s )
                }
            }
        }

        function K( t, e, i ) {
            f.push( t ), f.push( e ), f.push( i )
        }

        function Q( t, e, i ) {
            tt( t ), tt( e ), tt( i );
            var n = u.length / 3, r = E.generateTopUV( T, u, n - 3, n - 2, n - 1 );
            et( r[0] ), et( r[1] ), et( r[2] )
        }

        function $( t, e, i, n ) {
            tt( t ), tt( e ), tt( n ), tt( e ), tt( i ), tt( n );
            var r = u.length / 3, a = E.generateSideWallUV( T, u, r - 6, r - 3, r - 2, r - 1 );
            et( a[0] ), et( a[1] ), et( a[3] ), et( a[1] ), et( a[2] ), et( a[3] )
        }

        function tt( t ) {
            p.push( u.length / 3 ), u.push( f[3 * t + 0] ), u.push( f[3 * t + 1] ), u.push( f[3 * t + 2] )
        }

        function et( t ) {
            d.push( t.x ), d.push( t.y )
        }

        !function () {
            var t = u.length / 3;
            if (x) {
                var i = 0, n = z * i;
                for (j = 0; j < B; j++) Q( ( F = R[j] )[2] + n, F[1] + n, F[0] + n );
                for (n = z * ( i = w + 2 * y ), j = 0; j < B; j++) Q( ( F = R[j] )[0] + n, F[1] + n, F[2] + n )
            } else {
                for (j = 0; j < B; j++) Q( ( F = R[j] )[2], F[1], F[0] );
                for (j = 0; j < B; j++) Q( ( F = R[j] )[0] + z * w, F[1] + z * w, F[2] + z * w )
            }
            T.addGroup( t, u.length / 3 - t, void 0 !== e.material ? e.material : 0 )
        }(), function () {
            var t = u.length / 3, i = 0;
            for (J( P, i ), i += P.length, c = 0, h = L.length; c < h; c++) J( s = L[c], i ), i += s.length;
            T.addGroup( t, u.length / 3 - t, void 0 !== e.extrudeMaterial ? e.extrudeMaterial : 1 )
        }(), e.arrays || ( this.setIndex( p ), this.addAttribute( 'position', new pn( u, 3 ) ), this.addAttribute( 'uv', new pn( e.arrays.uv, 2 ) ) )
    }, Xr.WorldUVGenerator = {
        generateTopUV: function ( t, e, i, n, r ) {
            var a = e[3 * i], o = e[3 * i + 1], s = e[3 * n], c = e[3 * n + 1], h = e[3 * r], l = e[3 * r + 1];
            return [new be( a, o ), new be( s, c ), new be( h, l )]
        }, generateSideWallUV: function ( t, e, i, n, r, a ) {
            var o = e[3 * i], s = e[3 * i + 1], c = e[3 * i + 2], h = e[3 * n], l = e[3 * n + 1], u = e[3 * n + 2],
                p = e[3 * r], d = e[3 * r + 1], f = e[3 * r + 2], m = e[3 * a], v = e[3 * a + 1], g = e[3 * a + 2];
            return Math.abs( s - l ) < .01 ? [new be( o, 1 - c ), new be( h, 1 - u ), new be( p, 1 - f ), new be( m, 1 - g )] : [new be( s, 1 - c ), new be( l, 1 - u ), new be( d, 1 - f ), new be( v, 1 - g )]
        }
    }, Yr.prototype = Object.create( nn.prototype ), Yr.prototype.constructor = Yr, Zr.prototype = Object.create( qr.prototype ), Zr.prototype.constructor = Zr, Jr.prototype = Object.create( nn.prototype ), Jr.prototype.constructor = Jr, Kr.prototype = Object.create( En.prototype ), Kr.prototype.constructor = Kr, Qr.prototype = Object.create( nn.prototype ), Qr.prototype.constructor = Qr, $r.prototype = Object.create( En.prototype ), $r.prototype.constructor = $r, ta.prototype = Object.create( nn.prototype ), ta.prototype.constructor = ta, ea.prototype = Object.create( En.prototype ), ea.prototype.constructor = ea, ia.prototype = Object.create( nn.prototype ), ia.prototype.constructor = ia, na.prototype = Object.create( En.prototype ), na.prototype.constructor = na, ra.prototype = Object.create( En.prototype ), ra.prototype.constructor = ra, aa.prototype = Object.create( nn.prototype ), aa.prototype.constructor = aa, oa.prototype = Object.create( En.prototype ), oa.prototype.constructor = oa, sa.prototype = Object.create( aa.prototype ), sa.prototype.constructor = sa, ca.prototype = Object.create( oa.prototype ), ca.prototype.constructor = ca, ha.prototype = Object.create( nn.prototype ), ha.prototype.constructor = ha, la.prototype = Object.create( En.prototype ), la.prototype.constructor = la;
    var ua = Object.freeze( {
        WireframeGeometry: Sr,
        ParametricGeometry: Ar,
        ParametricBufferGeometry: Lr,
        TetrahedronGeometry: Cr,
        TetrahedronBufferGeometry: Nr,
        OctahedronGeometry: Ir,
        OctahedronBufferGeometry: Or,
        IcosahedronGeometry: Ur,
        IcosahedronBufferGeometry: Dr,
        DodecahedronGeometry: Fr,
        DodecahedronBufferGeometry: zr,
        PolyhedronGeometry: Rr,
        PolyhedronBufferGeometry: Pr,
        TubeGeometry: Br,
        TubeBufferGeometry: kr,
        TorusKnotGeometry: Gr,
        TorusKnotBufferGeometry: jr,
        TorusGeometry: Hr,
        TorusBufferGeometry: Vr,
        TextGeometry: Yr,
        TextBufferGeometry: Zr,
        SphereGeometry: Jr,
        SphereBufferGeometry: Kr,
        RingGeometry: Qr,
        RingBufferGeometry: $r,
        PlaneGeometry: An,
        PlaneBufferGeometry: Ln,
        LatheGeometry: ta,
        LatheBufferGeometry: ea,
        ShapeGeometry: ia,
        ShapeBufferGeometry: na,
        ExtrudeGeometry: Xr,
        ExtrudeBufferGeometry: qr,
        EdgesGeometry: ra,
        ConeGeometry: sa,
        ConeBufferGeometry: ca,
        CylinderGeometry: aa,
        CylinderBufferGeometry: oa,
        CircleGeometry: ha,
        CircleBufferGeometry: la,
        BoxGeometry: Tn,
        BoxBufferGeometry: Sn
    } );

    function pa( t ) {
        Oi.call( this ), this.type = 'ShadowMaterial', this.color = new yi( 0 ), this.opacity = 1, this.lights = !0, this.transparent = !0, this.setValues( t )
    }

    function da( t ) {
        Pn.call( this, t ), this.type = 'RawShaderMaterial'
    }

    function fa( t ) {
        Oi.call( this ), this.defines = { STANDARD: '' }, this.type = 'MeshStandardMaterial', this.color = new yi( 16777215 ), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new yi( 0 ), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new be( 1, 1 ), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = 'round', this.wireframeLinejoin = 'round', this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues( t )
    }

    function ma( t ) {
        fa.call( this ), this.defines = { PHYSICAL: '' }, this.type = 'MeshPhysicalMaterial', this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues( t )
    }

    function va( t ) {
        Oi.call( this ), this.type = 'MeshPhongMaterial', this.color = new yi( 16777215 ), this.specular = new yi( 1118481 ), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new yi( 0 ), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new be( 1, 1 ), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = st, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = 'round', this.wireframeLinejoin = 'round', this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues( t )
    }

    function ga( t ) {
        va.call( this ), this.defines = { TOON: '' }, this.type = 'MeshToonMaterial', this.gradientMap = null, this.setValues( t )
    }

    function ya( t ) {
        Oi.call( this ), this.type = 'MeshNormalMaterial', this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new be( 1, 1 ), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues( t )
    }

    function xa( t ) {
        Oi.call( this ), this.type = 'MeshLambertMaterial', this.color = new yi( 16777215 ), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new yi( 0 ), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = st, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = 'round', this.wireframeLinejoin = 'round', this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues( t )
    }

    function ba( t ) {
        vr.call( this ), this.type = 'LineDashedMaterial', this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues( t )
    }

    pa.prototype = Object.create( Oi.prototype ), pa.prototype.constructor = pa, pa.prototype.isShadowMaterial = !0, da.prototype = Object.create( Pn.prototype ), da.prototype.constructor = da, da.prototype.isRawShaderMaterial = !0, fa.prototype = Object.create( Oi.prototype ), fa.prototype.constructor = fa, fa.prototype.isMeshStandardMaterial = !0, fa.prototype.copy = function ( t ) {
        return Oi.prototype.copy.call( this, t ), this.defines = { STANDARD: '' }, this.color.copy( t.color ), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy( t.emissive ), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy( t.normalScale ), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, ma.prototype = Object.create( fa.prototype ), ma.prototype.constructor = ma, ma.prototype.isMeshPhysicalMaterial = !0, ma.prototype.copy = function ( t ) {
        return fa.prototype.copy.call( this, t ), this.defines = { PHYSICAL: '' }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
    }, va.prototype = Object.create( Oi.prototype ), va.prototype.constructor = va, va.prototype.isMeshPhongMaterial = !0, va.prototype.copy = function ( t ) {
        return Oi.prototype.copy.call( this, t ), this.color.copy( t.color ), this.specular.copy( t.specular ), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy( t.emissive ), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy( t.normalScale ), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, ga.prototype = Object.create( va.prototype ), ga.prototype.constructor = ga, ga.prototype.isMeshToonMaterial = !0, ga.prototype.copy = function ( t ) {
        return va.prototype.copy.call( this, t ), this.gradientMap = t.gradientMap, this
    }, ya.prototype = Object.create( Oi.prototype ), ya.prototype.constructor = ya, ya.prototype.isMeshNormalMaterial = !0, ya.prototype.copy = function ( t ) {
        return Oi.prototype.copy.call( this, t ), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy( t.normalScale ), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, xa.prototype = Object.create( Oi.prototype ), xa.prototype.constructor = xa, xa.prototype.isMeshLambertMaterial = !0, xa.prototype.copy = function ( t ) {
        return Oi.prototype.copy.call( this, t ), this.color.copy( t.color ), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy( t.emissive ), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, ba.prototype = Object.create( vr.prototype ), ba.prototype.constructor = ba, ba.prototype.isLineDashedMaterial = !0, ba.prototype.copy = function ( t ) {
        return vr.prototype.copy.call( this, t ), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
    };
    var wa = Object.freeze( {
        ShadowMaterial: pa,
        SpriteMaterial: lr,
        RawShaderMaterial: da,
        ShaderMaterial: Pn,
        PointsMaterial: br,
        MeshPhysicalMaterial: ma,
        MeshStandardMaterial: fa,
        MeshPhongMaterial: va,
        MeshToonMaterial: ga,
        MeshNormalMaterial: ya,
        MeshLambertMaterial: xa,
        MeshDepthMaterial: Ui,
        MeshDistanceMaterial: Di,
        MeshBasicMaterial: Rn,
        LineDashedMaterial: ba,
        LineBasicMaterial: vr,
        Material: Oi
    } ), _a = {
        enabled: !1, files: {}, add: function ( t, e ) {
            !1 !== this.enabled && ( this.files[t] = e )
        }, get: function ( t ) {
            if (!1 !== this.enabled) return this.files[t]
        }, remove: function ( t ) {
            delete this.files[t]
        }, clear: function () {
            this.files = {}
        }
    };

    function Ma( t, e, i ) {
        var n = this, r = !1, a = 0, o = 0, s = void 0;
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function ( t ) {
            o++, !1 === r && void 0 !== n.onStart && n.onStart( t, a, o ), r = !0
        }, this.itemEnd = function ( t ) {
            a++, void 0 !== n.onProgress && n.onProgress( t, a, o ), a === o && ( r = !1, void 0 !== n.onLoad && n.onLoad() )
        }, this.itemError = function ( t ) {
            void 0 !== n.onError && n.onError( t )
        }, this.resolveURL = function ( t ) {
            return s ? s( t ) : t
        }, this.setURLModifier = function ( t ) {
            s = t
        }
    }

    var Ea = new Ma, Ta = {};

    function Sa( t ) {
        this.manager = void 0 !== t ? t : Ea
    }

    function Aa( t ) {
        this.manager = void 0 !== t ? t : Ea, this._parser = null
    }

    function La( t ) {
        this.manager = void 0 !== t ? t : Ea
    }

    function Ra( t ) {
        this.manager = void 0 !== t ? t : Ea
    }

    function Pa( t, e ) {
        Ji.call( this ), this.type = 'Light', this.color = new yi( t ), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
    }

    function Ca( t, e, i ) {
        Pa.call( this, t, i ), this.type = 'HemisphereLight', this.castShadow = void 0, this.position.copy( Ji.DefaultUp ), this.updateMatrix(), this.groundColor = new yi( e )
    }

    function Na( t ) {
        this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new be( 512, 512 ), this.map = null, this.matrix = new we
    }

    function Ia() {
        Na.call( this, new nr( 50, 1, .5, 500 ) )
    }

    function Oa( t, e, i, n, r, a ) {
        Pa.call( this, t, e ), this.type = 'SpotLight', this.position.copy( Ji.DefaultUp ), this.updateMatrix(), this.target = new Ji, Object.defineProperty( this, 'power', {
            get: function () {
                return this.intensity * Math.PI
            }, set: function ( t ) {
                this.intensity = t / Math.PI
            }
        } ), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new Ia
    }

    function Ua( t, e, i, n ) {
        Pa.call( this, t, e ), this.type = 'PointLight', Object.defineProperty( this, 'power', {
            get: function () {
                return 4 * this.intensity * Math.PI
            }, set: function ( t ) {
                this.intensity = t / ( 4 * Math.PI )
            }
        } ), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new Na( new nr( 90, 1, .5, 500 ) )
    }

    function Da() {
        Na.call( this, new Qi( -5, 5, 5, -5, .5, 500 ) )
    }

    function Fa( t, e ) {
        Pa.call( this, t, e ), this.type = 'DirectionalLight', this.position.copy( Ji.DefaultUp ), this.updateMatrix(), this.target = new Ji, this.shadow = new Da
    }

    function za( t, e ) {
        Pa.call( this, t, e ), this.type = 'AmbientLight', this.castShadow = void 0
    }

    function Ba( t, e, i, n ) {
        Pa.call( this, t, e ), this.type = 'RectAreaLight', this.position.set( 0, 1, 0 ), this.updateMatrix(), this.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10
    }

    Object.assign( Sa.prototype, {
        load: function ( t, e, i, n ) {
            void 0 === t && ( t = '' ), void 0 !== this.path && ( t = this.path + t ), t = this.manager.resolveURL( t );
            var r = this, a = _a.get( t );
            if (void 0 !== a) {
                return r.manager.itemStart( t ), setTimeout( function () {
                    e && e( a ), r.manager.itemEnd( t )
                }, 0 ), a;
            }
            if (void 0 === Ta[t]) {
                var o = t.match( /^data:(.*?)(;base64)?,(.*)$/ );
                if (o) {
                    var s = o[1], c = !!o[2], h = o[3];
                    h = window.decodeURIComponent( h ), c && ( h = window.atob( h ) );
                    try {
                        var l, u = ( this.responseType || '' ).toLowerCase();
                        switch (u) {
                            case'arraybuffer':
                            case'blob':
                                for (var p = new Uint8Array( h.length ), d = 0; d < h.length; d++) p[d] = h.charCodeAt( d );
                                l = 'blob' === u ? new Blob( [p.buffer], { type: s } ) : p.buffer;
                                break;
                            case'document':
                                var f = new DOMParser;
                                l = f.parseFromString( h, s );
                                break;
                            case'json':
                                l = JSON.parse( h );
                                break;
                            default:
                                l = h
                        }
                        window.setTimeout( function () {
                            e && e( l ), r.manager.itemEnd( t )
                        }, 0 )
                    } catch (e) {
                        window.setTimeout( function () {
                            n && n( e ), r.manager.itemEnd( t ), r.manager.itemError( t )
                        }, 0 )
                    }
                } else {
                    Ta[t] = [], Ta[t].push( { onLoad: e, onProgress: i, onError: n } );
                    var m = new XMLHttpRequest;
                    for (var v in m.open( 'GET', t, !0 ), m.addEventListener( 'load', function ( e ) {
                        var i = e.target.response;
                        _a.add( t, i );
                        var n = Ta[t];
                        if (delete Ta[t], 200 === this.status) {
                            for (var a = 0, o = n.length; a < o; a++) {
                                ( s = n[a] ).onLoad && s.onLoad( i )
                            }
                            r.manager.itemEnd( t )
                        } else if (0 === this.status) {
                            console.warn( 'THREE.FileLoader: HTTP Status 0 received.' );
                            for (a = 0, o = n.length; a < o; a++) {
                                ( s = n[a] ).onLoad && s.onLoad( i )
                            }
                            r.manager.itemEnd( t )
                        } else {
                            for (a = 0, o = n.length; a < o; a++) {
                                var s;
                                ( s = n[a] ).onError && s.onError( e )
                            }
                            r.manager.itemEnd( t ), r.manager.itemError( t )
                        }
                    }, !1 ), m.addEventListener( 'progress', function ( e ) {
                        for (var i = Ta[t], n = 0, r = i.length; n < r; n++) {
                            var a = i[n];
                            a.onProgress && a.onProgress( e )
                        }
                    }, !1 ), m.addEventListener( 'error', function ( e ) {
                        var i = Ta[t];
                        delete Ta[t];
                        for (var n = 0, a = i.length; n < a; n++) {
                            var o = i[n];
                            o.onError && o.onError( e )
                        }
                        r.manager.itemEnd( t ), r.manager.itemError( t )
                    }, !1 ), void 0 !== this.responseType && ( m.responseType = this.responseType ), void 0 !== this.withCredentials && ( m.withCredentials = this.withCredentials ), m.overrideMimeType && m.overrideMimeType( void 0 !== this.mimeType ? this.mimeType : 'text/plain' ), this.requestHeader) {
                        m.setRequestHeader( v, this.requestHeader[v] );
                    }
                    m.send( null )
                }
                return r.manager.itemStart( t ), m
            }
            Ta[t].push( { onLoad: e, onProgress: i, onError: n } )
        }, setPath: function ( t ) {
            return this.path = t, this
        }, setResponseType: function ( t ) {
            return this.responseType = t, this
        }, setWithCredentials: function ( t ) {
            return this.withCredentials = t, this
        }, setMimeType: function ( t ) {
            return this.mimeType = t, this
        }, setRequestHeader: function ( t ) {
            return this.requestHeader = t, this
        }
    } ), Object.assign( Aa.prototype, {
        load: function ( t, e, i, n ) {
            var r = this, a = [], o = new Er;
            o.image = a;
            var s = new Sa( this.manager );

            function c( c ) {
                s.load( t[c], function ( t ) {
                    var i = r._parser( t, !0 );
                    a[c] = {
                        width: i.width,
                        height: i.height,
                        format: i.format,
                        mipmaps: i.mipmaps
                    }, 6 === ( h += 1 ) && ( 1 === i.mipmapCount && ( o.minFilter = Lt ), o.format = i.format, o.needsUpdate = !0, e && e( o ) )
                }, i, n )
            }

            if (s.setPath( this.path ), s.setResponseType( 'arraybuffer' ), Array.isArray( t )) {
                for (var h = 0, l = 0, u = t.length; l < u; ++l) c( l );
            } else {
                s.load( t, function ( t ) {
                    var i = r._parser( t, !0 );
                    if (i.isCubemap) {
                        for (var n = i.mipmaps.length / i.mipmapCount, s = 0; s < n; s++) {
                            a[s] = { mipmaps: [] };
                            for (var c = 0; c < i.mipmapCount; c++) a[s].mipmaps.push( i.mipmaps[s * i.mipmapCount + c] ), a[s].format = i.format, a[s].width = i.width, a[s].height = i.height
                        }
                    } else {
                        o.image.width = i.width, o.image.height = i.height, o.mipmaps = i.mipmaps;
                    }
                    1 === i.mipmapCount && ( o.minFilter = Lt ), o.format = i.format, o.needsUpdate = !0, e && e( o )
                }, i, n );
            }
            return o
        }, setPath: function ( t ) {
            return this.path = t, this
        }
    } ), Object.assign( function ( t ) {
        this.manager = void 0 !== t ? t : Ea, this._parser = null
    }.prototype, {
        load: function ( t, e, i, n ) {
            var r = this, a = new Pe, o = new Sa( this.manager );
            return o.setResponseType( 'arraybuffer' ), o.load( t, function ( t ) {
                var i = r._parser( t );
                i && ( void 0 !== i.image ? a.image = i.image : void 0 !== i.data && ( a.image.width = i.width, a.image.height = i.height, a.image.data = i.data ), a.wrapS = void 0 !== i.wrapS ? i.wrapS : Mt, a.wrapT = void 0 !== i.wrapT ? i.wrapT : Mt, a.magFilter = void 0 !== i.magFilter ? i.magFilter : Lt, a.minFilter = void 0 !== i.minFilter ? i.minFilter : Pt, a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && ( a.format = i.format ), void 0 !== i.type && ( a.type = i.type ), void 0 !== i.mipmaps && ( a.mipmaps = i.mipmaps ), 1 === i.mipmapCount && ( a.minFilter = Lt ), a.needsUpdate = !0, e && e( a, i ) )
            }, i, n ), a
        }
    } ), Object.assign( La.prototype, {
        crossOrigin: 'Anonymous', load: function ( t, e, i, n ) {
            void 0 === t && ( t = '' ), void 0 !== this.path && ( t = this.path + t ), t = this.manager.resolveURL( t );
            var r = this, a = _a.get( t );
            if (void 0 !== a) {
                return r.manager.itemStart( t ), setTimeout( function () {
                    e && e( a ), r.manager.itemEnd( t )
                }, 0 ), a;
            }
            var o = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'img' );
            return o.addEventListener( 'load', function () {
                _a.add( t, this ), e && e( this ), r.manager.itemEnd( t )
            }, !1 ), o.addEventListener( 'error', function ( e ) {
                n && n( e ), r.manager.itemEnd( t ), r.manager.itemError( t )
            }, !1 ), 'data:' !== t.substr( 0, 5 ) && void 0 !== this.crossOrigin && ( o.crossOrigin = this.crossOrigin ), r.manager.itemStart( t ), o.src = t, o
        }, setCrossOrigin: function ( t ) {
            return this.crossOrigin = t, this
        }, setPath: function ( t ) {
            return this.path = t, this
        }
    } ), Object.assign( function ( t ) {
        this.manager = void 0 !== t ? t : Ea
    }.prototype, {
        crossOrigin: 'Anonymous', load: function ( t, e, i, n ) {
            var r = new Ce, a = new La( this.manager );
            a.setCrossOrigin( this.crossOrigin ), a.setPath( this.path );
            var o = 0;

            function s( i ) {
                a.load( t[i], function ( t ) {
                    r.images[i] = t, 6 === ++o && ( r.needsUpdate = !0, e && e( r ) )
                }, void 0, n )
            }

            for (var c = 0; c < t.length; ++c) s( c );
            return r
        }, setCrossOrigin: function ( t ) {
            return this.crossOrigin = t, this
        }, setPath: function ( t ) {
            return this.path = t, this
        }
    } ), Object.assign( Ra.prototype, {
        crossOrigin: 'Anonymous', load: function ( t, e, i, n ) {
            var r = new La( this.manager );
            r.setCrossOrigin( this.crossOrigin ), r.setPath( this.path );
            var a = new Se;
            return a.image = r.load( t, function () {
                var i = t.search( /\.(jpg|jpeg)$/ ) > 0 || 0 === t.search( /^data\:image\/jpeg/ );
                a.format = i ? Vt : Wt, a.needsUpdate = !0, void 0 !== e && e( a )
            }, i, n ), a
        }, setCrossOrigin: function ( t ) {
            return this.crossOrigin = t, this
        }, setPath: function ( t ) {
            return this.path = t, this
        }
    } ), Pa.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: Pa,
        isLight: !0,
        copy: function ( t ) {
            return Ji.prototype.copy.call( this, t ), this.color.copy( t.color ), this.intensity = t.intensity, this
        },
        toJSON: function ( t ) {
            var e = Ji.prototype.toJSON.call( this, t );
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && ( e.object.groundColor = this.groundColor.getHex() ), void 0 !== this.distance && ( e.object.distance = this.distance ), void 0 !== this.angle && ( e.object.angle = this.angle ), void 0 !== this.decay && ( e.object.decay = this.decay ), void 0 !== this.penumbra && ( e.object.penumbra = this.penumbra ), void 0 !== this.shadow && ( e.object.shadow = this.shadow.toJSON() ), e
        }
    } ), Ca.prototype = Object.assign( Object.create( Pa.prototype ), {
        constructor: Ca,
        isHemisphereLight: !0,
        copy: function ( t ) {
            return Pa.prototype.copy.call( this, t ), this.groundColor.copy( t.groundColor ), this
        }
    } ), Object.assign( Na.prototype, {
        copy: function ( t ) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy( t.mapSize ), this
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, toJSON: function () {
            var t = {};
            return 0 !== this.bias && ( t.bias = this.bias ), 1 !== this.radius && ( t.radius = this.radius ), 512 === this.mapSize.x && 512 === this.mapSize.y || ( t.mapSize = this.mapSize.toArray() ), t.camera = this.camera.toJSON( !1 ).object, delete t.camera.matrix, t
        }
    } ), Ia.prototype = Object.assign( Object.create( Na.prototype ), {
        constructor: Ia,
        isSpotLightShadow: !0,
        update: function ( t ) {
            var e = this.camera, i = 2 * xe.RAD2DEG * t.angle, n = this.mapSize.width / this.mapSize.height,
                r = t.distance || e.far;
            i === e.fov && n === e.aspect && r === e.far || ( e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix() )
        }
    } ), Oa.prototype = Object.assign( Object.create( Pa.prototype ), {
        constructor: Oa,
        isSpotLight: !0,
        copy: function ( t ) {
            return Pa.prototype.copy.call( this, t ), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    } ), Ua.prototype = Object.assign( Object.create( Pa.prototype ), {
        constructor: Ua,
        isPointLight: !0,
        copy: function ( t ) {
            return Pa.prototype.copy.call( this, t ), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
        }
    } ), Da.prototype = Object.assign( Object.create( Na.prototype ), { constructor: Da } ), Fa.prototype = Object.assign( Object.create( Pa.prototype ), {
        constructor: Fa,
        isDirectionalLight: !0,
        copy: function ( t ) {
            return Pa.prototype.copy.call( this, t ), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    } ), za.prototype = Object.assign( Object.create( Pa.prototype ), {
        constructor: za,
        isAmbientLight: !0
    } ), Ba.prototype = Object.assign( Object.create( Pa.prototype ), {
        constructor: Ba,
        isRectAreaLight: !0,
        copy: function ( t ) {
            return Pa.prototype.copy.call( this, t ), this.width = t.width, this.height = t.height, this
        },
        toJSON: function ( t ) {
            var e = Pa.prototype.toJSON.call( this, t );
            return e.object.width = this.width, e.object.height = this.height, e
        }
    } );
    var ka, Ga = {
        arraySlice: function ( t, e, i ) {
            return Ga.isTypedArray( t ) ? new t.constructor( t.subarray( e, void 0 !== i ? i : t.length ) ) : t.slice( e, i )
        }, convertArray: function ( t, e, i ) {
            return !t || !i && t.constructor === e ? t : 'number' == typeof e.BYTES_PER_ELEMENT ? new e( t ) : Array.prototype.slice.call( t )
        }, isTypedArray: function ( t ) {
            return ArrayBuffer.isView( t ) && !( t instanceof DataView )
        }, getKeyframeOrder: function ( t ) {
            for (var e = t.length, i = new Array( e ), n = 0; n !== e; ++n) i[n] = n;
            return i.sort( function ( e, i ) {
                return t[e] - t[i]
            } ), i
        }, sortedArray: function ( t, e, i ) {
            for (var n = t.length, r = new t.constructor( n ), a = 0, o = 0; o !== n; ++a) for (var s = i[a] * e, c = 0; c !== e; ++c) r[o++] = t[s + c];
            return r
        }, flattenJSON: function ( t, e, i, n ) {
            for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n];) a = t[r++];
            if (void 0 !== a) {
                var o = a[n];
                if (void 0 !== o) {
                    if (Array.isArray( o )) {
                        do {
                            void 0 !== ( o = a[n] ) && ( e.push( a.time ), i.push.apply( i, o ) ), a = t[r++]
                        } while (void 0 !== a);
                    } else if (void 0 !== o.toArray) {
                        do {
                            void 0 !== ( o = a[n] ) && ( e.push( a.time ), o.toArray( i, i.length ) ), a = t[r++]
                        } while (void 0 !== a);
                    } else {
                        do {
                            void 0 !== ( o = a[n] ) && ( e.push( a.time ), i.push( o ) ), a = t[r++]
                        } while (void 0 !== a)
                    }
                }
            }
        }
    };

    function ja( t, e, i, n ) {
        this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor( i ), this.sampleValues = e, this.valueSize = i
    }

    function Ha( t, e, i, n ) {
        ja.call( this, t, e, i, n ), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
    }

    function Va( t, e, i, n ) {
        ja.call( this, t, e, i, n )
    }

    function Wa( t, e, i, n ) {
        ja.call( this, t, e, i, n )
    }

    function Xa( t, e, i, n ) {
        if (void 0 === t) throw new Error( 'track name is undefined' );
        if (void 0 === e || 0 === e.length) throw new Error( 'no keyframes in track named ' + t );
        this.name = t, this.times = Ga.convertArray( e, this.TimeBufferType ), this.values = Ga.convertArray( i, this.ValueBufferType ), this.setInterpolation( n || this.DefaultInterpolation ), this.validate(), this.optimize()
    }

    function qa( t, e, i, n ) {
        Xa.call( this, t, e, i, n )
    }

    function Ya( t, e, i, n ) {
        ja.call( this, t, e, i, n )
    }

    function Za( t, e, i, n ) {
        Xa.call( this, t, e, i, n )
    }

    function Ja( t, e, i, n ) {
        Xa.call( this, t, e, i, n )
    }

    function Ka( t, e, i, n ) {
        Xa.call( this, t, e, i, n )
    }

    function Qa( t, e, i ) {
        Xa.call( this, t, e, i )
    }

    function $a( t, e, i, n ) {
        Xa.call( this, t, e, i, n )
    }

    function to( t, e, i, n ) {
        Xa.apply( this, t, e, i, n )
    }

    function eo( t, e, i ) {
        this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = xe.generateUUID(), this.duration < 0 && this.resetDuration(), this.optimize()
    }

    function io( t ) {
        this.manager = void 0 !== t ? t : Ea, this.textures = {}
    }

    function no( t ) {
        this.manager = void 0 !== t ? t : Ea
    }

    Object.assign( ja.prototype, {
        evaluate: function ( t ) {
            var e = this.parameterPositions, i = this._cachedIndex, n = e[i], r = e[i - 1];
            t:{
                e:{
                    var a;
                    i:{
                        n:if (!( t < n )) {
                            for (var o = i + 2; ;) {
                                if (void 0 === n) {
                                    if (t < r) break n;
                                    return i = e.length, this._cachedIndex = i, this.afterEnd_( i - 1, t, r )
                                }
                                if (i === o) break;
                                if (r = n, t < ( n = e[++i] )) break e
                            }
                            a = e.length;
                            break i
                        }
                        if (t >= r) break t;
                        var s = e[1];
                        t < s && ( i = 2, r = s );
                        for (o = i - 2; ;) {
                            if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_( 0, t, n );
                            if (i === o) break;
                            if (n = r, t >= ( r = e[--i - 1] )) break e
                        }
                        a = i, i = 0
                    }
                    for (; i < a;) {
                        var c = i + a >>> 1;
                        t < e[c] ? a = c : i = c + 1
                    }
                    if (n = e[i], void 0 === ( r = e[i - 1] )) return this._cachedIndex = 0, this.beforeStart_( 0, t, n );
                    if (void 0 === n) return i = e.length, this._cachedIndex = i, this.afterEnd_( i - 1, r, t )
                }
                this._cachedIndex = i, this.intervalChanged_( i, r, n )
            }
            return this.interpolate_( i, r, t, n )
        }, settings: null, DefaultSettings_: {}, getSettings_: function () {
            return this.settings || this.DefaultSettings_
        }, copySampleValue_: function ( t ) {
            for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, a = 0; a !== n; ++a) e[a] = i[r + a];
            return e
        }, interpolate_: function () {
            throw new Error( 'call to abstract method' )
        }, intervalChanged_: function () {
        }
    } ), Object.assign( ja.prototype, {
        beforeStart_: ja.prototype.copySampleValue_,
        afterEnd_: ja.prototype.copySampleValue_
    } ), Ha.prototype = Object.assign( Object.create( ja.prototype ), {
        constructor: Ha,
        DefaultSettings_: { endingStart: oe, endingEnd: oe },
        intervalChanged_: function ( t, e, i ) {
            var n = this.parameterPositions, r = t - 2, a = t + 1, o = n[r], s = n[a];
            if (void 0 === o) {
                switch (this.getSettings_().endingStart) {
                    case 2401:
                        r = t, o = 2 * e - i;
                        break;
                    case 2402:
                        o = e + n[r = n.length - 2] - n[r + 1];
                        break;
                    default:
                        r = t, o = i
                }
            }
            if (void 0 === s) {
                switch (this.getSettings_().endingEnd) {
                    case 2401:
                        a = t, s = 2 * i - e;
                        break;
                    case 2402:
                        a = 1, s = i + n[1] - n[0];
                        break;
                    default:
                        a = t - 1, s = e
                }
            }
            var c = .5 * ( i - e ), h = this.valueSize;
            this._weightPrev = c / ( e - o ), this._weightNext = c / ( s - i ), this._offsetPrev = r * h, this._offsetNext = a * h
        },
        interpolate_: function ( t, e, i, n ) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = ( i - e ) / ( n - e ), f = d * d, m = f * d, v = -u * m + 2 * u * f - u * d, g = ( 1 + u ) * m + ( -1.5 - 2 * u ) * f + ( -.5 + u ) * d + 1, y = ( -1 - p ) * m + ( 1.5 + p ) * f + .5 * d, x = p * m - p * f, b = 0; b !== o; ++b) r[b] = v * a[h + b] + g * a[c + b] + y * a[s + b] + x * a[l + b];
            return r
        }
    } ), Va.prototype = Object.assign( Object.create( ja.prototype ), {
        constructor: Va,
        interpolate_: function ( t, e, i, n ) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = ( i - e ) / ( n - e ), l = 1 - h, u = 0; u !== o; ++u) r[u] = a[c + u] * l + a[s + u] * h;
            return r
        }
    } ), Wa.prototype = Object.assign( Object.create( ja.prototype ), {
        constructor: Wa, interpolate_: function ( t ) {
            return this.copySampleValue_( t - 1 )
        }
    } ), ka = {
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function ( t ) {
            return new Wa( this.times, this.values, this.getValueSize(), t )
        },
        InterpolantFactoryMethodLinear: function ( t ) {
            return new Va( this.times, this.values, this.getValueSize(), t )
        },
        InterpolantFactoryMethodSmooth: function ( t ) {
            return new Ha( this.times, this.values, this.getValueSize(), t )
        },
        setInterpolation: function ( t ) {
            var e;
            switch (t) {
                case 2300:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 !== e) {
                this.createInterpolant = e;
            } else {
                var i = 'unsupported interpolation for ' + this.ValueTypeName + ' keyframe track named ' + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation) throw new Error( i );
                    this.setInterpolation( this.DefaultInterpolation )
                }
                console.warn( 'THREE.KeyframeTrackPrototype:', i )
            }
        },
        getInterpolation: function () {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302
            }
        },
        getValueSize: function () {
            return this.values.length / this.times.length
        },
        shift: function ( t ) {
            if (0 !== t) for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t;
            return this
        },
        scale: function ( t ) {
            if (1 !== t) for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t;
            return this
        },
        trim: function ( t, e ) {
            for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t;) ++r;
            for (; -1 !== a && i[a] > e;) --a;
            if (++a, 0 !== r || a !== n) {
                r >= a && ( r = ( a = Math.max( a, 1 ) ) - 1 );
                var o = this.getValueSize();
                this.times = Ga.arraySlice( i, r, a ), this.values = Ga.arraySlice( this.values, r * o, a * o )
            }
            return this
        },
        validate: function () {
            var t = !0, e = this.getValueSize();
            e - Math.floor( e ) != 0 && ( console.error( 'THREE.KeyframeTrackPrototype: Invalid value size in track.', this ), t = !1 );
            var i = this.times, n = this.values, r = i.length;
            0 === r && ( console.error( 'THREE.KeyframeTrackPrototype: Track is empty.', this ), t = !1 );
            for (var a = null, o = 0; o !== r; o++) {
                var s = i[o];
                if ('number' == typeof s && isNaN( s )) {
                    console.error( 'THREE.KeyframeTrackPrototype: Time is not a valid number.', this, o, s ), t = !1;
                    break
                }
                if (null !== a && a > s) {
                    console.error( 'THREE.KeyframeTrackPrototype: Out of order keys.', this, o, s, a ), t = !1;
                    break
                }
                a = s
            }
            if (void 0 !== n && Ga.isTypedArray( n )) {
                o = 0;
                for (var c = n.length; o !== c; ++o) {
                    var h = n[o];
                    if (isNaN( h )) {
                        console.error( 'THREE.KeyframeTrackPrototype: Value is not a valid number.', this, o, h ), t = !1;
                        break
                    }
                }
            }
            return t
        },
        optimize: function () {
            for (var t = this.times, e = this.values, i = this.getValueSize(), n = 2302 === this.getInterpolation(), r = 1, a = t.length - 1, o = 1; o < a; ++o) {
                var s = !1, c = t[o];
                if (c !== t[o + 1] && ( 1 !== o || c !== c[0] )) {
                    if (n) {
                        s = !0;
                    } else {
                        for (var h = o * i, l = h - i, u = h + i, p = 0; p !== i; ++p) {
                            var d = e[h + p];
                            if (d !== e[l + p] || d !== e[u + p]) {
                                s = !0;
                                break
                            }
                        }
                    }
                }
                if (s) {
                    if (o !== r) {
                        t[r] = t[o];
                        var f = o * i, m = r * i;
                        for (p = 0; p !== i; ++p) e[m + p] = e[f + p]
                    }
                    ++r
                }
            }
            if (a > 0) {
                t[r] = t[a];
                for (f = a * i, m = r * i, p = 0; p !== i; ++p) e[m + p] = e[f + p];
                ++r
            }
            return r !== t.length && ( this.times = Ga.arraySlice( t, 0, r ), this.values = Ga.arraySlice( e, 0, r * i ) ), this
        }
    }, qa.prototype = Object.assign( Object.create( ka ), {
        constructor: qa,
        ValueTypeName: 'vector'
    } ), Ya.prototype = Object.assign( Object.create( ja.prototype ), {
        constructor: Ya,
        interpolate_: function ( t, e, i, n ) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = ( i - e ) / ( n - e ), h = s + o; s !== h; s += 4) _e.slerpFlat( r, 0, a, s - o, a, s, c );
            return r
        }
    } ), Za.prototype = Object.assign( Object.create( ka ), {
        constructor: Za,
        ValueTypeName: 'quaternion',
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function ( t ) {
            return new Ya( this.times, this.values, this.getValueSize(), t )
        },
        InterpolantFactoryMethodSmooth: void 0
    } ), Ja.prototype = Object.assign( Object.create( ka ), {
        constructor: Ja,
        ValueTypeName: 'number'
    } ), Ka.prototype = Object.assign( Object.create( ka ), {
        constructor: Ka,
        ValueTypeName: 'string',
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    } ), Qa.prototype = Object.assign( Object.create( ka ), {
        constructor: Qa,
        ValueTypeName: 'bool',
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    } ), $a.prototype = Object.assign( Object.create( ka ), {
        constructor: $a,
        ValueTypeName: 'color'
    } ), to.prototype = ka, ka.constructor = to, Object.assign( to, {
        parse: function ( t ) {
            if (void 0 === t.type) throw new Error( 'track type undefined, can not parse' );
            var e = to._getTrackTypeForValueTypeName( t.type );
            if (void 0 === t.times) {
                var i = [], n = [];
                Ga.flattenJSON( t.keys, i, n, 'value' ), t.times = i, t.values = n
            }
            return void 0 !== e.parse ? e.parse( t ) : new e( t.name, t.times, t.values, t.interpolation )
        }, toJSON: function ( t ) {
            var e, i = t.constructor;
            if (void 0 !== i.toJSON) {
                e = i.toJSON( t );
            } else {
                e = {
                    name: t.name,
                    times: Ga.convertArray( t.times, Array ),
                    values: Ga.convertArray( t.values, Array )
                };
                var n = t.getInterpolation();
                n !== t.DefaultInterpolation && ( e.interpolation = n )
            }
            return e.type = t.ValueTypeName, e
        }, _getTrackTypeForValueTypeName: function ( t ) {
            switch (t.toLowerCase()) {
                case'scalar':
                case'double':
                case'float':
                case'number':
                case'integer':
                    return Ja;
                case'vector':
                case'vector2':
                case'vector3':
                case'vector4':
                    return qa;
                case'color':
                    return $a;
                case'quaternion':
                    return Za;
                case'bool':
                case'boolean':
                    return Qa;
                case'string':
                    return Ka
            }
            throw new Error( 'Unsupported typeName: ' + t )
        }
    } ), Object.assign( eo, {
        parse: function ( t ) {
            for (var e = [], i = t.tracks, n = 1 / ( t.fps || 1 ), r = 0, a = i.length; r !== a; ++r) e.push( to.parse( i[r] ).scale( n ) );
            return new eo( t.name, t.duration, e )
        }, toJSON: function ( t ) {
            for (var e = [], i = t.tracks, n = {
                name: t.name,
                duration: t.duration,
                tracks: e
            }, r = 0, a = i.length; r !== a; ++r) {
                e.push( to.toJSON( i[r] ) );
            }
            return n
        }, CreateFromMorphTargetSequence: function ( t, e, i, n ) {
            for (var r = e.length, a = [], o = 0; o < r; o++) {
                var s = [], c = [];
                s.push( ( o + r - 1 ) % r, o, ( o + 1 ) % r ), c.push( 0, 1, 0 );
                var h = Ga.getKeyframeOrder( s );
                s = Ga.sortedArray( s, 1, h ), c = Ga.sortedArray( c, 1, h ), n || 0 !== s[0] || ( s.push( r ), c.push( c[0] ) ), a.push( new Ja( '.morphTargetInfluences[' + e[o].name + ']', s, c ).scale( 1 / i ) )
            }
            return new eo( t, -1, a )
        }, findByName: function ( t, e ) {
            var i = t;
            if (!Array.isArray( t )) {
                var n = t;
                i = n.geometry && n.geometry.animations || n.animations
            }
            for (var r = 0; r < i.length; r++) if (i[r].name === e) return i[r];
            return null
        }, CreateClipsFromMorphTargetSequences: function ( t, e, i ) {
            for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
                var s = t[a], c = s.name.match( r );
                if (c && c.length > 1) {
                    var h = n[u = c[1]];
                    h || ( n[u] = h = [] ), h.push( s )
                }
            }
            var l = [];
            for (var u in n) l.push( eo.CreateFromMorphTargetSequence( u, n[u], e, i ) );
            return l
        }, parseAnimation: function ( t, e ) {
            if (!t) return console.error( 'THREE.AnimationClip: No animation in JSONLoader data.' ), null;
            for (var i = function ( t, e, i, n, r ) {
                if (0 !== i.length) {
                    var a = [], o = [];
                    Ga.flattenJSON( i, a, o, n ), 0 !== a.length && r.push( new t( e, a, o ) )
                }
            }, n = [], r = t.name || 'default', a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
                var h = s[c].keys;
                if (h && 0 !== h.length) {
                    if (h[0].morphTargets) {
                        for (var l = {}, u = 0; u < h.length; u++) if (h[u].morphTargets) for (var p = 0; p < h[u].morphTargets.length; p++) l[h[u].morphTargets[p]] = -1;
                        for (var d in l) {
                            var f = [], m = [];
                            for (p = 0; p !== h[u].morphTargets.length; ++p) {
                                var v = h[u];
                                f.push( v.time ), m.push( v.morphTarget === d ? 1 : 0 )
                            }
                            n.push( new Ja( '.morphTargetInfluence[' + d + ']', f, m ) )
                        }
                        a = l.length * ( o || 1 )
                    } else {
                        var g = '.bones[' + e[c].name + ']';
                        i( qa, g + '.position', h, 'pos', n ), i( Za, g + '.quaternion', h, 'rot', n ), i( qa, g + '.scale', h, 'scl', n )
                    }
                }
            }
            return 0 === n.length ? null : new eo( r, a, n )
        }
    } ), Object.assign( eo.prototype, {
        resetDuration: function () {
            for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) {
                var n = this.tracks[e];
                t = Math.max( t, n.times[n.times.length - 1] )
            }
            this.duration = t
        }, trim: function () {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim( 0, this.duration );
            return this
        }, optimize: function () {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
            return this
        }
    } ), Object.assign( io.prototype, {
        load: function ( t, e, i, n ) {
            var r = this;
            new Sa( r.manager ).load( t, function ( t ) {
                e( r.parse( JSON.parse( t ) ) )
            }, i, n )
        }, setTextures: function ( t ) {
            this.textures = t
        }, parse: function ( t ) {
            var e = this.textures;

            function i( t ) {
                return void 0 === e[t] && console.warn( 'THREE.MaterialLoader: Undefined texture', t ), e[t]
            }

            var n = new wa[t.type];
            if (void 0 !== t.uuid && ( n.uuid = t.uuid ), void 0 !== t.name && ( n.name = t.name ), void 0 !== t.color && n.color.setHex( t.color ), void 0 !== t.roughness && ( n.roughness = t.roughness ), void 0 !== t.metalness && ( n.metalness = t.metalness ), void 0 !== t.emissive && n.emissive.setHex( t.emissive ), void 0 !== t.specular && n.specular.setHex( t.specular ), void 0 !== t.shininess && ( n.shininess = t.shininess ), void 0 !== t.clearCoat && ( n.clearCoat = t.clearCoat ), void 0 !== t.clearCoatRoughness && ( n.clearCoatRoughness = t.clearCoatRoughness ), void 0 !== t.uniforms && ( n.uniforms = t.uniforms ), void 0 !== t.vertexShader && ( n.vertexShader = t.vertexShader ), void 0 !== t.fragmentShader && ( n.fragmentShader = t.fragmentShader ), void 0 !== t.vertexColors && ( n.vertexColors = t.vertexColors ), void 0 !== t.fog && ( n.fog = t.fog ), void 0 !== t.flatShading && ( n.flatShading = t.flatShading ), void 0 !== t.blending && ( n.blending = t.blending ), void 0 !== t.side && ( n.side = t.side ), void 0 !== t.opacity && ( n.opacity = t.opacity ), void 0 !== t.transparent && ( n.transparent = t.transparent ), void 0 !== t.alphaTest && ( n.alphaTest = t.alphaTest ), void 0 !== t.depthTest && ( n.depthTest = t.depthTest ), void 0 !== t.depthWrite && ( n.depthWrite = t.depthWrite ), void 0 !== t.colorWrite && ( n.colorWrite = t.colorWrite ), void 0 !== t.wireframe && ( n.wireframe = t.wireframe ), void 0 !== t.wireframeLinewidth && ( n.wireframeLinewidth = t.wireframeLinewidth ), void 0 !== t.wireframeLinecap && ( n.wireframeLinecap = t.wireframeLinecap ), void 0 !== t.wireframeLinejoin && ( n.wireframeLinejoin = t.wireframeLinejoin ), void 0 !== t.rotation && ( n.rotation = t.rotation ), 1 !== t.linewidth && ( n.linewidth = t.linewidth ), void 0 !== t.dashSize && ( n.dashSize = t.dashSize ), void 0 !== t.gapSize && ( n.gapSize = t.gapSize ), void 0 !== t.scale && ( n.scale = t.scale ), void 0 !== t.skinning && ( n.skinning = t.skinning ), void 0 !== t.morphTargets && ( n.morphTargets = t.morphTargets ), void 0 !== t.dithering && ( n.dithering = t.dithering ), void 0 !== t.visible && ( n.visible = t.visible ), void 0 !== t.userData && ( n.userData = t.userData ), void 0 !== t.shading && ( n.flatShading = 1 === t.shading ), void 0 !== t.size && ( n.size = t.size ), void 0 !== t.sizeAttenuation && ( n.sizeAttenuation = t.sizeAttenuation ), void 0 !== t.map && ( n.map = i( t.map ) ), void 0 !== t.alphaMap && ( n.alphaMap = i( t.alphaMap ), n.transparent = !0 ), void 0 !== t.bumpMap && ( n.bumpMap = i( t.bumpMap ) ), void 0 !== t.bumpScale && ( n.bumpScale = t.bumpScale ), void 0 !== t.normalMap && ( n.normalMap = i( t.normalMap ) ), void 0 !== t.normalScale) {
                var r = t.normalScale;
                !1 === Array.isArray( r ) && ( r = [r, r] ), n.normalScale = ( new be ).fromArray( r )
            }
            return void 0 !== t.displacementMap && ( n.displacementMap = i( t.displacementMap ) ), void 0 !== t.displacementScale && ( n.displacementScale = t.displacementScale ), void 0 !== t.displacementBias && ( n.displacementBias = t.displacementBias ), void 0 !== t.roughnessMap && ( n.roughnessMap = i( t.roughnessMap ) ), void 0 !== t.metalnessMap && ( n.metalnessMap = i( t.metalnessMap ) ), void 0 !== t.emissiveMap && ( n.emissiveMap = i( t.emissiveMap ) ), void 0 !== t.emissiveIntensity && ( n.emissiveIntensity = t.emissiveIntensity ), void 0 !== t.specularMap && ( n.specularMap = i( t.specularMap ) ), void 0 !== t.envMap && ( n.envMap = i( t.envMap ) ), void 0 !== t.reflectivity && ( n.reflectivity = t.reflectivity ), void 0 !== t.lightMap && ( n.lightMap = i( t.lightMap ) ), void 0 !== t.lightMapIntensity && ( n.lightMapIntensity = t.lightMapIntensity ), void 0 !== t.aoMap && ( n.aoMap = i( t.aoMap ) ), void 0 !== t.aoMapIntensity && ( n.aoMapIntensity = t.aoMapIntensity ), void 0 !== t.gradientMap && ( n.gradientMap = i( t.gradientMap ) ), n
        }
    } ), Object.assign( no.prototype, {
        load: function ( t, e, i, n ) {
            var r = this;
            new Sa( r.manager ).load( t, function ( t ) {
                e( r.parse( JSON.parse( t ) ) )
            }, i, n )
        }, parse: function ( t ) {
            var e = new En, i = t.data.index;
            if (void 0 !== i) {
                var n = new co[i.type]( i.array );
                e.setIndex( new rn( n, 1 ) )
            }
            var r = t.data.attributes;
            for (var a in r) {
                var o = r[a];
                n = new co[o.type]( o.array );
                e.addAttribute( a, new rn( n, o.itemSize, o.normalized ) )
            }
            var s = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== s) {
                for (var c = 0, h = s.length; c !== h; ++c) {
                    var l = s[c];
                    e.addGroup( l.start, l.count, l.materialIndex )
                }
            }
            var u = t.data.boundingSphere;
            if (void 0 !== u) {
                var p = new Me;
                void 0 !== u.center && p.fromArray( u.center ), e.boundingSphere = new zi( p, u.radius )
            }
            return e
        }
    } );
    var ro, ao, oo, so, co = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: 'undefined' != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };

    function ho() {
        this.onLoadStart = function () {
        }, this.onLoadProgress = function () {
        }, this.onLoadComplete = function () {
        }
    }

    function lo( t ) {
        'boolean' == typeof t && ( console.warn( 'THREE.JSONLoader: showStatus parameter has been removed from constructor.' ), t = void 0 ), this.manager = void 0 !== t ? t : Ea, this.withCredentials = !1
    }

    function uo( t ) {
        this.manager = void 0 !== t ? t : Ea, this.texturePath = ''
    }

    ho.Handlers = {
        handlers: [], add: function ( t, e ) {
            this.handlers.push( t, e )
        }, get: function ( t ) {
            for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) {
                var r = e[i], a = e[i + 1];
                if (r.test( t )) return a
            }
            return null
        }
    }, Object.assign( ho.prototype, {
        crossOrigin: void 0,
        extractUrlBase: function ( t ) {
            var e = t.split( '/' );
            return 1 === e.length ? './' : ( e.pop(), e.join( '/' ) + '/' )
        },
        initMaterials: function ( t, e, i ) {
            for (var n = [], r = 0; r < t.length; ++r) n[r] = this.createMaterial( t[r], e, i );
            return n
        },
        createMaterial: ( ro = {
            NoBlending: C,
            NormalBlending: N,
            AdditiveBlending: I,
            SubtractiveBlending: O,
            MultiplyBlending: U,
            CustomBlending: D
        }, ao = new yi, oo = new Ra, so = new io, function ( t, e, i ) {
            var n = {};

            function r( t, r, a, o, s ) {
                var c, h = e + t, l = ho.Handlers.get( h );
                null !== l ? c = l.load( h ) : ( oo.setCrossOrigin( i ), c = oo.load( h ) ), void 0 !== r && ( c.repeat.fromArray( r ), 1 !== r[0] && ( c.wrapS = _t ), 1 !== r[1] && ( c.wrapT = _t ) ), void 0 !== a && c.offset.fromArray( a ), void 0 !== o && ( 'repeat' === o[0] && ( c.wrapS = _t ), 'mirror' === o[0] && ( c.wrapS = Et ), 'repeat' === o[1] && ( c.wrapT = _t ), 'mirror' === o[1] && ( c.wrapT = Et ) ), void 0 !== s && ( c.anisotropy = s );
                var u = xe.generateUUID();
                return n[u] = c, u
            }

            var a = { uuid: xe.generateUUID(), type: 'MeshLambertMaterial' };
            for (var o in t) {
                var s = t[o];
                switch (o) {
                    case'DbgColor':
                    case'DbgIndex':
                    case'opticalDensity':
                    case'illumination':
                        break;
                    case'DbgName':
                        a.name = s;
                        break;
                    case'blending':
                        a.blending = ro[s];
                        break;
                    case'colorAmbient':
                    case'mapAmbient':
                        console.warn( 'THREE.Loader.createMaterial:', o, 'is no longer supported.' );
                        break;
                    case'colorDiffuse':
                        a.color = ao.fromArray( s ).getHex();
                        break;
                    case'colorSpecular':
                        a.specular = ao.fromArray( s ).getHex();
                        break;
                    case'colorEmissive':
                        a.emissive = ao.fromArray( s ).getHex();
                        break;
                    case'specularCoef':
                        a.shininess = s;
                        break;
                    case'shading':
                        'basic' === s.toLowerCase() && ( a.type = 'MeshBasicMaterial' ), 'phong' === s.toLowerCase() && ( a.type = 'MeshPhongMaterial' ), 'standard' === s.toLowerCase() && ( a.type = 'MeshStandardMaterial' );
                        break;
                    case'mapDiffuse':
                        a.map = r( s, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy );
                        break;
                    case'mapDiffuseRepeat':
                    case'mapDiffuseOffset':
                    case'mapDiffuseWrap':
                    case'mapDiffuseAnisotropy':
                        break;
                    case'mapEmissive':
                        a.emissiveMap = r( s, t.mapEmissiveRepeat, t.mapEmissiveOffset, t.mapEmissiveWrap, t.mapEmissiveAnisotropy );
                        break;
                    case'mapEmissiveRepeat':
                    case'mapEmissiveOffset':
                    case'mapEmissiveWrap':
                    case'mapEmissiveAnisotropy':
                        break;
                    case'mapLight':
                        a.lightMap = r( s, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy );
                        break;
                    case'mapLightRepeat':
                    case'mapLightOffset':
                    case'mapLightWrap':
                    case'mapLightAnisotropy':
                        break;
                    case'mapAO':
                        a.aoMap = r( s, t.mapAORepeat, t.mapAOOffset, t.mapAOWrap, t.mapAOAnisotropy );
                        break;
                    case'mapAORepeat':
                    case'mapAOOffset':
                    case'mapAOWrap':
                    case'mapAOAnisotropy':
                        break;
                    case'mapBump':
                        a.bumpMap = r( s, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy );
                        break;
                    case'mapBumpScale':
                        a.bumpScale = s;
                        break;
                    case'mapBumpRepeat':
                    case'mapBumpOffset':
                    case'mapBumpWrap':
                    case'mapBumpAnisotropy':
                        break;
                    case'mapNormal':
                        a.normalMap = r( s, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy );
                        break;
                    case'mapNormalFactor':
                        a.normalScale = [s, s];
                        break;
                    case'mapNormalRepeat':
                    case'mapNormalOffset':
                    case'mapNormalWrap':
                    case'mapNormalAnisotropy':
                        break;
                    case'mapSpecular':
                        a.specularMap = r( s, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy );
                        break;
                    case'mapSpecularRepeat':
                    case'mapSpecularOffset':
                    case'mapSpecularWrap':
                    case'mapSpecularAnisotropy':
                        break;
                    case'mapMetalness':
                        a.metalnessMap = r( s, t.mapMetalnessRepeat, t.mapMetalnessOffset, t.mapMetalnessWrap, t.mapMetalnessAnisotropy );
                        break;
                    case'mapMetalnessRepeat':
                    case'mapMetalnessOffset':
                    case'mapMetalnessWrap':
                    case'mapMetalnessAnisotropy':
                        break;
                    case'mapRoughness':
                        a.roughnessMap = r( s, t.mapRoughnessRepeat, t.mapRoughnessOffset, t.mapRoughnessWrap, t.mapRoughnessAnisotropy );
                        break;
                    case'mapRoughnessRepeat':
                    case'mapRoughnessOffset':
                    case'mapRoughnessWrap':
                    case'mapRoughnessAnisotropy':
                        break;
                    case'mapAlpha':
                        a.alphaMap = r( s, t.mapAlphaRepeat, t.mapAlphaOffset, t.mapAlphaWrap, t.mapAlphaAnisotropy );
                        break;
                    case'mapAlphaRepeat':
                    case'mapAlphaOffset':
                    case'mapAlphaWrap':
                    case'mapAlphaAnisotropy':
                        break;
                    case'flipSided':
                        a.side = S;
                        break;
                    case'doubleSided':
                        a.side = A;
                        break;
                    case'transparency':
                        console.warn( 'THREE.Loader.createMaterial: transparency has been renamed to opacity' ), a.opacity = s;
                        break;
                    case'depthTest':
                    case'depthWrite':
                    case'colorWrite':
                    case'opacity':
                    case'reflectivity':
                    case'transparent':
                    case'visible':
                    case'wireframe':
                        a[o] = s;
                        break;
                    case'vertexColors':
                        !0 === s && ( a.vertexColors = P ), 'face' === s && ( a.vertexColors = R );
                        break;
                    default:
                        console.error( 'THREE.Loader.createMaterial: Unsupported', o, s )
                }
            }
            return 'MeshBasicMaterial' === a.type && delete a.emissive, 'MeshPhongMaterial' !== a.type && delete a.specular, a.opacity < 1 && ( a.transparent = !0 ), so.setTextures( n ), so.parse( a )
        } )
    } ), Object.assign( lo.prototype, {
        load: function ( t, e, i, n ) {
            var r = this,
                a = this.texturePath && 'string' == typeof this.texturePath ? this.texturePath : ho.prototype.extractUrlBase( t ),
                o = new Sa( this.manager );
            o.setWithCredentials( this.withCredentials ), o.load( t, function ( i ) {
                var n = JSON.parse( i ), o = n.metadata;
                if (void 0 !== o) {
                    var s = o.type;
                    if (void 0 !== s) {
                        if ('object' === s.toLowerCase()) return void console.error( 'THREE.JSONLoader: ' + t + ' should be loaded with THREE.ObjectLoader instead.' );
                        if ('scene' === s.toLowerCase()) return void console.error( 'THREE.JSONLoader: ' + t + ' should be loaded with THREE.SceneLoader instead.' )
                    }
                }
                var c = r.parse( n, a );
                e( c.geometry, c.materials )
            }, i, n )
        }, setTexturePath: function ( t ) {
            this.texturePath = t
        }, parse: function () {
            return function ( t, e ) {
                void 0 !== t.data && ( t = t.data ), void 0 !== t.scale ? t.scale = 1 / t.scale : t.scale = 1;
                var i = new nn;
                return function ( t, e ) {
                    function i( t, e ) {
                        return t & 1 << e
                    }

                    var n, r, a, o, s, c, h, l, u, p, d, f, m, v, g, y, x, b, w, _, M, E, T, S, A, L = t.faces,
                        R = t.vertices, P = t.normals, C = t.colors, N = t.scale, I = 0;
                    if (void 0 !== t.uvs) {
                        for (n = 0; n < t.uvs.length; n++) t.uvs[n].length && I++;
                        for (n = 0; n < I; n++) e.faceVertexUvs[n] = []
                    }
                    for (o = 0, s = R.length; o < s;) ( b = new Me ).x = R[o++] * N, b.y = R[o++] * N, b.z = R[o++] * N, e.vertices.push( b );
                    for (o = 0, s = L.length; o < s;) {
                        if (d = i( p = L[o++], 0 ), f = i( p, 1 ), m = i( p, 3 ), v = i( p, 4 ), g = i( p, 5 ), y = i( p, 6 ), x = i( p, 7 ), d) {
                            if (( _ = new $i ).a = L[o], _.b = L[o + 1], _.c = L[o + 3], ( M = new $i ).a = L[o + 1], M.b = L[o + 2], M.c = L[o + 3], o += 4, f && ( u = L[o++], _.materialIndex = u, M.materialIndex = u ), a = e.faces.length, m) for (n = 0; n < I; n++) for (S = t.uvs[n], e.faceVertexUvs[n][a] = [], e.faceVertexUvs[n][a + 1] = [], r = 0; r < 4; r++) A = new be( S[2 * ( l = L[o++] )], S[2 * l + 1] ), 2 !== r && e.faceVertexUvs[n][a].push( A ), 0 !== r && e.faceVertexUvs[n][a + 1].push( A );
                            if (v && ( h = 3 * L[o++], _.normal.set( P[h++], P[h++], P[h] ), M.normal.copy( _.normal ) ), g) for (n = 0; n < 4; n++) h = 3 * L[o++], T = new Me( P[h++], P[h++], P[h] ), 2 !== n && _.vertexNormals.push( T ), 0 !== n && M.vertexNormals.push( T );
                            if (y && ( E = C[c = L[o++]], _.color.setHex( E ), M.color.setHex( E ) ), x) for (n = 0; n < 4; n++) E = C[c = L[o++]], 2 !== n && _.vertexColors.push( new yi( E ) ), 0 !== n && M.vertexColors.push( new yi( E ) );
                            e.faces.push( _ ), e.faces.push( M )
                        } else {
                            if (( w = new $i ).a = L[o++], w.b = L[o++], w.c = L[o++], f && ( u = L[o++], w.materialIndex = u ), a = e.faces.length, m) for (n = 0; n < I; n++) for (S = t.uvs[n], e.faceVertexUvs[n][a] = [], r = 0; r < 3; r++) A = new be( S[2 * ( l = L[o++] )], S[2 * l + 1] ), e.faceVertexUvs[n][a].push( A );
                            if (v && ( h = 3 * L[o++], w.normal.set( P[h++], P[h++], P[h] ) ), g) for (n = 0; n < 3; n++) h = 3 * L[o++], T = new Me( P[h++], P[h++], P[h] ), w.vertexNormals.push( T );
                            if (y && ( c = L[o++], w.color.setHex( C[c] ) ), x) for (n = 0; n < 3; n++) c = L[o++], w.vertexColors.push( new yi( C[c] ) );
                            e.faces.push( w )
                        }
                    }
                }( t, i ), function ( t, e ) {
                    var i = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                    if (t.skinWeights) {
                        for (var n = 0, r = t.skinWeights.length; n < r; n += i) {
                            var a = t.skinWeights[n], o = i > 1 ? t.skinWeights[n + 1] : 0,
                                s = i > 2 ? t.skinWeights[n + 2] : 0, c = i > 3 ? t.skinWeights[n + 3] : 0;
                            e.skinWeights.push( new Ae( a, o, s, c ) )
                        }
                    }
                    if (t.skinIndices) {
                        for (n = 0, r = t.skinIndices.length; n < r; n += i) {
                            var h = t.skinIndices[n], l = i > 1 ? t.skinIndices[n + 1] : 0,
                                u = i > 2 ? t.skinIndices[n + 2] : 0, p = i > 3 ? t.skinIndices[n + 3] : 0;
                            e.skinIndices.push( new Ae( h, l, u, p ) )
                        }
                    }
                    e.bones = t.bones, e.bones && e.bones.length > 0 && ( e.skinWeights.length !== e.skinIndices.length || e.skinIndices.length !== e.vertices.length ) && console.warn( 'When skinning, number of vertices (' + e.vertices.length + '), skinIndices (' + e.skinIndices.length + '), and skinWeights (' + e.skinWeights.length + ') should match.' )
                }( t, i ), function ( t, e ) {
                    var i = t.scale;
                    if (void 0 !== t.morphTargets) {
                        for (var n = 0, r = t.morphTargets.length; n < r; n++) {
                            e.morphTargets[n] = {}, e.morphTargets[n].name = t.morphTargets[n].name, e.morphTargets[n].vertices = [];
                            for (var a = e.morphTargets[n].vertices, o = t.morphTargets[n].vertices, s = 0, c = o.length; s < c; s += 3) {
                                var h = new Me;
                                h.x = o[s] * i, h.y = o[s + 1] * i, h.z = o[s + 2] * i, a.push( h )
                            }
                        }
                    }
                    if (void 0 !== t.morphColors && t.morphColors.length > 0) {
                        console.warn( 'THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.' );
                        var l = e.faces, u = t.morphColors[0].colors;
                        for (n = 0, r = l.length; n < r; n++) l[n].color.fromArray( u, 3 * n )
                    }
                }( t, i ), function ( t, e ) {
                    var i = [], n = [];
                    void 0 !== t.animation && n.push( t.animation ), void 0 !== t.animations && ( t.animations.length ? n = n.concat( t.animations ) : n.push( t.animations ) );
                    for (var r = 0; r < n.length; r++) {
                        var a = eo.parseAnimation( n[r], e.bones );
                        a && i.push( a )
                    }
                    if (e.morphTargets) {
                        var o = eo.CreateClipsFromMorphTargetSequences( e.morphTargets, 10 );
                        i = i.concat( o )
                    }
                    i.length > 0 && ( e.animations = i )
                }( t, i ), i.computeFaceNormals(), i.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length ? { geometry: i } : {
                    geometry: i,
                    materials: ho.prototype.initMaterials( t.materials, e, this.crossOrigin )
                }
            }
        }()
    } ), Object.assign( uo.prototype, {
        load: function ( t, e, i, n ) {
            '' === this.texturePath && ( this.texturePath = t.substring( 0, t.lastIndexOf( '/' ) + 1 ) );
            var r = this;
            new Sa( r.manager ).load( t, function ( i ) {
                var a = null;
                try {
                    a = JSON.parse( i )
                } catch (e) {
                    return void 0 !== n && n( e ), void console.error( 'THREE:ObjectLoader: Can\'t parse ' + t + '.', e.message )
                }
                var o = a.metadata;
                void 0 !== o && void 0 !== o.type && 'geometry' !== o.type.toLowerCase() ? r.parse( a, e ) : console.error( 'THREE.ObjectLoader: Can\'t load ' + t + '. Use THREE.JSONLoader instead.' )
            }, i, n )
        }, setTexturePath: function ( t ) {
            this.texturePath = t
        }, setCrossOrigin: function ( t ) {
            this.crossOrigin = t
        }, parse: function ( t, e ) {
            var i = this.parseGeometries( t.geometries ), n = this.parseImages( t.images, function () {
                    void 0 !== e && e( o )
                } ), r = this.parseTextures( t.textures, n ), a = this.parseMaterials( t.materials, r ),
                o = this.parseObject( t.object, i, a );
            return t.animations && ( o.animations = this.parseAnimations( t.animations ) ), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e( o ), o
        }, parseGeometries: function ( t ) {
            var e = {};
            if (void 0 !== t) {
                for (var i = new lo, n = new no, r = 0, a = t.length; r < a; r++) {
                    var o, s = t[r];
                    switch (s.type) {
                        case'PlaneGeometry':
                        case'PlaneBufferGeometry':
                            o = new ua[s.type]( s.width, s.height, s.widthSegments, s.heightSegments );
                            break;
                        case'BoxGeometry':
                        case'BoxBufferGeometry':
                        case'CubeGeometry':
                            o = new ua[s.type]( s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments );
                            break;
                        case'CircleGeometry':
                        case'CircleBufferGeometry':
                            o = new ua[s.type]( s.radius, s.segments, s.thetaStart, s.thetaLength );
                            break;
                        case'CylinderGeometry':
                        case'CylinderBufferGeometry':
                            o = new ua[s.type]( s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength );
                            break;
                        case'ConeGeometry':
                        case'ConeBufferGeometry':
                            o = new ua[s.type]( s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength );
                            break;
                        case'SphereGeometry':
                        case'SphereBufferGeometry':
                            o = new ua[s.type]( s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength );
                            break;
                        case'DodecahedronGeometry':
                        case'DodecahedronBufferGeometry':
                        case'IcosahedronGeometry':
                        case'IcosahedronBufferGeometry':
                        case'OctahedronGeometry':
                        case'OctahedronBufferGeometry':
                        case'TetrahedronGeometry':
                        case'TetrahedronBufferGeometry':
                            o = new ua[s.type]( s.radius, s.detail );
                            break;
                        case'RingGeometry':
                        case'RingBufferGeometry':
                            o = new ua[s.type]( s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength );
                            break;
                        case'TorusGeometry':
                        case'TorusBufferGeometry':
                            o = new ua[s.type]( s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc );
                            break;
                        case'TorusKnotGeometry':
                        case'TorusKnotBufferGeometry':
                            o = new ua[s.type]( s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q );
                            break;
                        case'LatheGeometry':
                        case'LatheBufferGeometry':
                            o = new ua[s.type]( s.points, s.segments, s.phiStart, s.phiLength );
                            break;
                        case'PolyhedronGeometry':
                        case'PolyhedronBufferGeometry':
                            o = new ua[s.type]( s.vertices, s.indices, s.radius, s.details );
                            break;
                        case'BufferGeometry':
                            o = n.parse( s );
                            break;
                        case'Geometry':
                            o = i.parse( s, this.texturePath ).geometry;
                            break;
                        default:
                            console.warn( 'THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"' );
                            continue
                    }
                    o.uuid = s.uuid, void 0 !== s.name && ( o.name = s.name ), e[s.uuid] = o
                }
            }
            return e
        }, parseMaterials: function ( t, e ) {
            var i = {};
            if (void 0 !== t) {
                var n = new io;
                n.setTextures( e );
                for (var r = 0, a = t.length; r < a; r++) {
                    var o = t[r];
                    if ('MultiMaterial' === o.type) {
                        for (var s = [], c = 0; c < o.materials.length; c++) s.push( n.parse( o.materials[c] ) );
                        i[o.uuid] = s
                    } else {
                        i[o.uuid] = n.parse( o )
                    }
                }
            }
            return i
        }, parseAnimations: function ( t ) {
            for (var e = [], i = 0; i < t.length; i++) {
                var n = eo.parse( t[i] );
                e.push( n )
            }
            return e
        }, parseImages: function ( t, e ) {
            var i = this, n = {};

            function r( t ) {
                return i.manager.itemStart( t ), a.load( t, function () {
                    i.manager.itemEnd( t )
                }, void 0, function () {
                    i.manager.itemEnd( t ), i.manager.itemError( t )
                } )
            }

            if (void 0 !== t && t.length > 0) {
                var a = new La( new Ma( e ) );
                a.setCrossOrigin( this.crossOrigin );
                for (var o = 0, s = t.length; o < s; o++) {
                    var c = t[o], h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test( c.url ) ? c.url : i.texturePath + c.url;
                    n[c.uuid] = r( h )
                }
            }
            return n
        }, parseTextures: function ( t, e ) {
            function i( t, e ) {
                return 'number' == typeof t ? t : ( console.warn( 'THREE.ObjectLoader.parseTexture: Constant should be in numeric form.', t ), e[t] )
            }

            var n = {};
            if (void 0 !== t) {
                for (var r = 0, a = t.length; r < a; r++) {
                    var o = t[r];
                    void 0 === o.image && console.warn( 'THREE.ObjectLoader: No "image" specified for', o.uuid ), void 0 === e[o.image] && console.warn( 'THREE.ObjectLoader: Undefined image', o.image );
                    var s = new Se( e[o.image] );
                    s.needsUpdate = !0, s.uuid = o.uuid, void 0 !== o.name && ( s.name = o.name ), void 0 !== o.mapping && ( s.mapping = i( o.mapping, po ) ), void 0 !== o.offset && s.offset.fromArray( o.offset ), void 0 !== o.repeat && s.repeat.fromArray( o.repeat ), void 0 !== o.center && s.center.fromArray( o.center ), void 0 !== o.rotation && ( s.rotation = o.rotation ), void 0 !== o.wrap && ( s.wrapS = i( o.wrap[0], fo ), s.wrapT = i( o.wrap[1], fo ) ), void 0 !== o.minFilter && ( s.minFilter = i( o.minFilter, mo ) ), void 0 !== o.magFilter && ( s.magFilter = i( o.magFilter, mo ) ), void 0 !== o.anisotropy && ( s.anisotropy = o.anisotropy ), void 0 !== o.flipY && ( s.flipY = o.flipY ), n[o.uuid] = s
                }
            }
            return n
        }, parseObject: function () {
            var t = new we;
            return function ( e, i, n ) {
                var r;

                function a( t ) {
                    return void 0 === i[t] && console.warn( 'THREE.ObjectLoader: Undefined geometry', t ), i[t]
                }

                function o( t ) {
                    if (void 0 !== t) {
                        if (Array.isArray( t )) {
                            for (var e = [], i = 0, r = t.length; i < r; i++) {
                                var a = t[i];
                                void 0 === n[a] && console.warn( 'THREE.ObjectLoader: Undefined material', a ), e.push( n[a] )
                            }
                            return e
                        }
                        return void 0 === n[t] && console.warn( 'THREE.ObjectLoader: Undefined material', t ), n[t]
                    }
                }

                switch (e.type) {
                    case'Scene':
                        r = new cr, void 0 !== e.background && Number.isInteger( e.background ) && ( r.background = new yi( e.background ) ), void 0 !== e.fog && ( 'Fog' === e.fog.type ? r.fog = new sr( e.fog.color, e.fog.near, e.fog.far ) : 'FogExp2' === e.fog.type && ( r.fog = new or( e.fog.color, e.fog.density ) ) );
                        break;
                    case'PerspectiveCamera':
                        r = new nr( e.fov, e.aspect, e.near, e.far ), void 0 !== e.focus && ( r.focus = e.focus ), void 0 !== e.zoom && ( r.zoom = e.zoom ), void 0 !== e.filmGauge && ( r.filmGauge = e.filmGauge ), void 0 !== e.filmOffset && ( r.filmOffset = e.filmOffset ), void 0 !== e.view && ( r.view = Object.assign( {}, e.view ) );
                        break;
                    case'OrthographicCamera':
                        r = new Qi( e.left, e.right, e.top, e.bottom, e.near, e.far );
                        break;
                    case'AmbientLight':
                        r = new za( e.color, e.intensity );
                        break;
                    case'DirectionalLight':
                        r = new Fa( e.color, e.intensity );
                        break;
                    case'PointLight':
                        r = new Ua( e.color, e.intensity, e.distance, e.decay );
                        break;
                    case'RectAreaLight':
                        r = new Ba( e.color, e.intensity, e.width, e.height );
                        break;
                    case'SpotLight':
                        r = new Oa( e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay );
                        break;
                    case'HemisphereLight':
                        r = new Ca( e.color, e.groundColor, e.intensity );
                        break;
                    case'SkinnedMesh':
                        console.warn( 'THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.' );
                    case'Mesh':
                        var s = a( e.geometry ), c = o( e.material );
                        r = s.bones && s.bones.length > 0 ? new mr( s, c ) : new On( s, c );
                        break;
                    case'LOD':
                        r = new pr;
                        break;
                    case'Line':
                        r = new gr( a( e.geometry ), o( e.material ), e.mode );
                        break;
                    case'LineLoop':
                        r = new xr( a( e.geometry ), o( e.material ) );
                        break;
                    case'LineSegments':
                        r = new yr( a( e.geometry ), o( e.material ) );
                        break;
                    case'PointCloud':
                    case'Points':
                        r = new wr( a( e.geometry ), o( e.material ) );
                        break;
                    case'Sprite':
                        r = new ur( o( e.material ) );
                        break;
                    case'Group':
                        r = new _r;
                        break;
                    default:
                        r = new Ji
                }
                if (r.uuid = e.uuid, void 0 !== e.name && ( r.name = e.name ), void 0 !== e.matrix ? ( t.fromArray( e.matrix ), t.decompose( r.position, r.quaternion, r.scale ) ) : ( void 0 !== e.position && r.position.fromArray( e.position ), void 0 !== e.rotation && r.rotation.fromArray( e.rotation ), void 0 !== e.quaternion && r.quaternion.fromArray( e.quaternion ), void 0 !== e.scale && r.scale.fromArray( e.scale ) ), void 0 !== e.castShadow && ( r.castShadow = e.castShadow ), void 0 !== e.receiveShadow && ( r.receiveShadow = e.receiveShadow ), e.shadow && ( void 0 !== e.shadow.bias && ( r.shadow.bias = e.shadow.bias ), void 0 !== e.shadow.radius && ( r.shadow.radius = e.shadow.radius ), void 0 !== e.shadow.mapSize && r.shadow.mapSize.fromArray( e.shadow.mapSize ), void 0 !== e.shadow.camera && ( r.shadow.camera = this.parseObject( e.shadow.camera ) ) ), void 0 !== e.visible && ( r.visible = e.visible ), void 0 !== e.userData && ( r.userData = e.userData ), void 0 !== e.children) for (var h = e.children, l = 0; l < h.length; l++) r.add( this.parseObject( h[l], i, n ) );
                if ('LOD' === e.type) {
                    for (var u = e.levels, p = 0; p < u.length; p++) {
                        var d = u[p], f = r.getObjectByProperty( 'uuid', d.object );
                        void 0 !== f && r.addLevel( f, d.distance )
                    }
                }
                return r
            }
        }()
    } );
    var po = {
        UVMapping: 300,
        CubeReflectionMapping: mt,
        CubeRefractionMapping: vt,
        EquirectangularReflectionMapping: gt,
        EquirectangularRefractionMapping: yt,
        SphericalReflectionMapping: xt,
        CubeUVReflectionMapping: bt,
        CubeUVRefractionMapping: wt
    }, fo = { RepeatWrapping: _t, ClampToEdgeWrapping: Mt, MirroredRepeatWrapping: Et }, mo = {
        NearestFilter: Tt,
        NearestMipMapNearestFilter: St,
        NearestMipMapLinearFilter: At,
        LinearFilter: Lt,
        LinearMipMapNearestFilter: Rt,
        LinearMipMapLinearFilter: Pt
    };

    function vo( t, e, i, n, r ) {
        var a = .5 * ( n - e ), o = .5 * ( r - i ), s = t * t;
        return ( 2 * i - 2 * n + a + o ) * ( t * s ) + ( -3 * i + 3 * n - 2 * a - o ) * s + a * t + i
    }

    function go( t, e, i, n ) {
        return function ( t, e ) {
            var i = 1 - t;
            return i * i * e
        }( t, e ) + function ( t, e ) {
            return 2 * ( 1 - t ) * t * e
        }( t, i ) + function ( t, e ) {
            return t * t * e
        }( t, n )
    }

    function yo( t, e, i, n, r ) {
        return function ( t, e ) {
            var i = 1 - t;
            return i * i * i * e
        }( t, e ) + function ( t, e ) {
            var i = 1 - t;
            return 3 * i * i * t * e
        }( t, i ) + function ( t, e ) {
            return 3 * ( 1 - t ) * t * t * e
        }( t, n ) + function ( t, e ) {
            return t * t * t * e
        }( t, r )
    }

    function xo() {
        this.type = 'Curve', this.arcLengthDivisions = 200
    }

    function bo( t, e ) {
        xo.call( this ), this.type = 'LineCurve', this.v1 = t || new be, this.v2 = e || new be
    }

    function wo() {
        xo.call( this ), this.type = 'CurvePath', this.curves = [], this.autoClose = !1
    }

    function _o( t, e, i, n, r, a, o, s ) {
        xo.call( this ), this.type = 'EllipseCurve', this.aX = t || 0, this.aY = e || 0, this.xRadius = i || 1, this.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
    }

    function Mo( t ) {
        xo.call( this ), this.type = 'SplineCurve', this.points = t || []
    }

    function Eo( t, e, i, n ) {
        xo.call( this ), this.type = 'CubicBezierCurve', this.v0 = t || new be, this.v1 = e || new be, this.v2 = i || new be, this.v3 = n || new be
    }

    function To( t, e, i ) {
        xo.call( this ), this.type = 'QuadraticBezierCurve', this.v0 = t || new be, this.v1 = e || new be, this.v2 = i || new be
    }

    Object.assign( xo.prototype, {
        getPoint: function () {
            return console.warn( 'THREE.Curve: .getPoint() not implemented.' ), null
        }, getPointAt: function ( t, e ) {
            var i = this.getUtoTmapping( t );
            return this.getPoint( i, e )
        }, getPoints: function ( t ) {
            void 0 === t && ( t = 5 );
            for (var e = [], i = 0; i <= t; i++) e.push( this.getPoint( i / t ) );
            return e
        }, getSpacedPoints: function ( t ) {
            void 0 === t && ( t = 5 );
            for (var e = [], i = 0; i <= t; i++) e.push( this.getPointAt( i / t ) );
            return e
        }, getLength: function () {
            var t = this.getLengths();
            return t[t.length - 1]
        }, getLengths: function ( t ) {
            if (void 0 === t && ( t = this.arcLengthDivisions ), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, i, n = [], r = this.getPoint( 0 ), a = 0;
            for (n.push( 0 ), i = 1; i <= t; i++) a += ( e = this.getPoint( i / t ) ).distanceTo( r ), n.push( a ), r = e;
            return this.cacheArcLengths = n, n
        }, updateArcLengths: function () {
            this.needsUpdate = !0, this.getLengths()
        }, getUtoTmapping: function ( t, e ) {
            var i, n = this.getLengths(), r = 0, a = n.length;
            i = e || t * n[a - 1];
            for (var o, s = 0, c = a - 1; s <= c;) {
                if (( o = n[r = Math.floor( s + ( c - s ) / 2 )] - i ) < 0) {
                    s = r + 1;
                } else {
                    if (!( o > 0 )) {
                        c = r;
                        break
                    }
                    c = r - 1
                }
            }
            if (n[r = c] === i) return r / ( a - 1 );
            var h = n[r];
            return ( r + ( i - h ) / ( n[r + 1] - h ) ) / ( a - 1 )
        }, getTangent: function ( t ) {
            var e = t - 1e-4, i = t + 1e-4;
            e < 0 && ( e = 0 ), i > 1 && ( i = 1 );
            var n = this.getPoint( e );
            return this.getPoint( i ).clone().sub( n ).normalize()
        }, getTangentAt: function ( t ) {
            var e = this.getUtoTmapping( t );
            return this.getTangent( e )
        }, computeFrenetFrames: function ( t, e ) {
            var i, n, r, a = new Me, o = [], s = [], c = [], h = new Me, l = new we;
            for (i = 0; i <= t; i++) n = i / t, o[i] = this.getTangentAt( n ), o[i].normalize();
            s[0] = new Me, c[0] = new Me;
            var u = Number.MAX_VALUE, p = Math.abs( o[0].x ), d = Math.abs( o[0].y ), f = Math.abs( o[0].z );
            for (p <= u && ( u = p, a.set( 1, 0, 0 ) ), d <= u && ( u = d, a.set( 0, 1, 0 ) ), f <= u && a.set( 0, 0, 1 ), h.crossVectors( o[0], a ).normalize(), s[0].crossVectors( o[0], h ), c[0].crossVectors( o[0], s[0] ), i = 1; i <= t; i++) s[i] = s[i - 1].clone(), c[i] = c[i - 1].clone(), h.crossVectors( o[i - 1], o[i] ), h.length() > Number.EPSILON && ( h.normalize(), r = Math.acos( xe.clamp( o[i - 1].dot( o[i] ), -1, 1 ) ), s[i].applyMatrix4( l.makeRotationAxis( h, r ) ) ), c[i].crossVectors( o[i], s[i] );
            if (!0 === e) for (r = Math.acos( xe.clamp( s[0].dot( s[t] ), -1, 1 ) ), r /= t, o[0].dot( h.crossVectors( s[0], s[t] ) ) > 0 && ( r = -r ), i = 1; i <= t; i++) s[i].applyMatrix4( l.makeRotationAxis( o[i], r * i ) ), c[i].crossVectors( o[i], s[i] );
            return { tangents: o, normals: s, binormals: c }
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this
        }
    } ), bo.prototype = Object.create( xo.prototype ), bo.prototype.constructor = bo, bo.prototype.isLineCurve = !0, bo.prototype.getPoint = function ( t, e ) {
        var i = e || new be;
        return 1 === t ? i.copy( this.v2 ) : ( i.copy( this.v2 ).sub( this.v1 ), i.multiplyScalar( t ).add( this.v1 ) ), i
    }, bo.prototype.getPointAt = function ( t, e ) {
        return this.getPoint( t, e )
    }, bo.prototype.getTangent = function () {
        return this.v2.clone().sub( this.v1 ).normalize()
    }, bo.prototype.copy = function ( t ) {
        return xo.prototype.copy.call( this, t ), this.v1.copy( t.v1 ), this.v2.copy( t.v2 ), this
    }, wo.prototype = Object.assign( Object.create( xo.prototype ), {
        constructor: wo, add: function ( t ) {
            this.curves.push( t )
        }, closePath: function () {
            var t = this.curves[0].getPoint( 0 ), e = this.curves[this.curves.length - 1].getPoint( 1 );
            t.equals( e ) || this.curves.push( new bo( e, t ) )
        }, getPoint: function ( t ) {
            for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
                if (i[n] >= e) {
                    var r = i[n] - e, a = this.curves[n], o = a.getLength(), s = 0 === o ? 0 : 1 - r / o;
                    return a.getPointAt( s )
                }
                n++
            }
            return null
        }, getLength: function () {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        }, updateArcLengths: function () {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
        }, getCurveLengths: function () {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push( e );
            return this.cacheLengths = t, t
        }, getSpacedPoints: function ( t ) {
            void 0 === t && ( t = 40 );
            for (var e = [], i = 0; i <= t; i++) e.push( this.getPoint( i / t ) );
            return this.autoClose && e.push( e[0] ), e
        }, getPoints: function ( t ) {
            t = t || 12;
            for (var e, i = [], n = 0, r = this.curves; n < r.length; n++) {
                for (var a = r[n], o = a && a.isEllipseCurve ? 2 * t : a && a.isLineCurve ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints( o ), c = 0; c < s.length; c++) {
                    var h = s[c];
                    e && e.equals( h ) || ( i.push( h ), e = h )
                }
            }
            return this.autoClose && i.length > 1 && !i[i.length - 1].equals( i[0] ) && i.push( i[0] ), i
        }, copy: function ( t ) {
            xo.prototype.copy.call( this, t ), this.curves = [];
            for (var e = 0, i = t.curves.length; e < i; e++) {
                var n = t.curves[e];
                this.curves.push( n.clone() )
            }
            return this.autoClose = t.autoClose, this
        }
    } ), _o.prototype = Object.create( xo.prototype ), _o.prototype.constructor = _o, _o.prototype.isEllipseCurve = !0, _o.prototype.getPoint = function ( t, e ) {
        for (var i = e || new be, n = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs( r ) < Number.EPSILON; r < 0;) r += n;
        for (; r > n;) r -= n;
        r < Number.EPSILON && ( r = a ? 0 : n ), !0 !== this.aClockwise || a || ( r === n ? r = -n : r -= n );
        var o = this.aStartAngle + t * r, s = this.aX + this.xRadius * Math.cos( o ),
            c = this.aY + this.yRadius * Math.sin( o );
        if (0 !== this.aRotation) {
            var h = Math.cos( this.aRotation ), l = Math.sin( this.aRotation ), u = s - this.aX, p = c - this.aY;
            s = u * h - p * l + this.aX, c = u * l + p * h + this.aY
        }
        return i.set( s, c )
    }, _o.prototype.copy = function ( t ) {
        return xo.prototype.copy.call( this, t ), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }, Mo.prototype = Object.create( xo.prototype ), Mo.prototype.constructor = Mo, Mo.prototype.isSplineCurve = !0, Mo.prototype.getPoint = function ( t, e ) {
        var i = e || new be, n = this.points, r = ( n.length - 1 ) * t, a = Math.floor( r ), o = r - a,
            s = n[0 === a ? a : a - 1], c = n[a], h = n[a > n.length - 2 ? n.length - 1 : a + 1],
            l = n[a > n.length - 3 ? n.length - 1 : a + 2];
        return i.set( vo( o, s.x, c.x, h.x, l.x ), vo( o, s.y, c.y, h.y, l.y ) ), i
    }, Mo.prototype.copy = function ( t ) {
        xo.prototype.copy.call( this, t ), this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push( n.clone() )
        }
        return this
    }, Eo.prototype = Object.create( xo.prototype ), Eo.prototype.constructor = Eo, Eo.prototype.isCubicBezierCurve = !0, Eo.prototype.getPoint = function ( t, e ) {
        var i = e || new be, n = this.v0, r = this.v1, a = this.v2, o = this.v3;
        return i.set( yo( t, n.x, r.x, a.x, o.x ), yo( t, n.y, r.y, a.y, o.y ) ), i
    }, Eo.prototype.copy = function ( t ) {
        return xo.prototype.copy.call( this, t ), this.v0.copy( t.v0 ), this.v1.copy( t.v1 ), this.v2.copy( t.v2 ), this.v3.copy( t.v3 ), this
    }, To.prototype = Object.create( xo.prototype ), To.prototype.constructor = To, To.prototype.isQuadraticBezierCurve = !0, To.prototype.getPoint = function ( t, e ) {
        var i = e || new be, n = this.v0, r = this.v1, a = this.v2;
        return i.set( go( t, n.x, r.x, a.x ), go( t, n.y, r.y, a.y ) ), i
    }, To.prototype.copy = function ( t ) {
        return xo.prototype.copy.call( this, t ), this.v0.copy( t.v0 ), this.v1.copy( t.v1 ), this.v2.copy( t.v2 ), this
    };
    var So, Ao = Object.assign( Object.create( wo.prototype ), {
        setFromPoints: function ( t ) {
            this.moveTo( t[0].x, t[0].y );
            for (var e = 1, i = t.length; e < i; e++) this.lineTo( t[e].x, t[e].y )
        }, moveTo: function ( t, e ) {
            this.currentPoint.set( t, e )
        }, lineTo: function ( t, e ) {
            var i = new bo( this.currentPoint.clone(), new be( t, e ) );
            this.curves.push( i ), this.currentPoint.set( t, e )
        }, quadraticCurveTo: function ( t, e, i, n ) {
            var r = new To( this.currentPoint.clone(), new be( t, e ), new be( i, n ) );
            this.curves.push( r ), this.currentPoint.set( i, n )
        }, bezierCurveTo: function ( t, e, i, n, r, a ) {
            var o = new Eo( this.currentPoint.clone(), new be( t, e ), new be( i, n ), new be( r, a ) );
            this.curves.push( o ), this.currentPoint.set( r, a )
        }, splineThru: function ( t ) {
            var e = new Mo( [this.currentPoint.clone()].concat( t ) );
            this.curves.push( e ), this.currentPoint.copy( t[t.length - 1] )
        }, arc: function ( t, e, i, n, r, a ) {
            var o = this.currentPoint.x, s = this.currentPoint.y;
            this.absarc( t + o, e + s, i, n, r, a )
        }, absarc: function ( t, e, i, n, r, a ) {
            this.absellipse( t, e, i, i, n, r, a )
        }, ellipse: function ( t, e, i, n, r, a, o, s ) {
            var c = this.currentPoint.x, h = this.currentPoint.y;
            this.absellipse( t + c, e + h, i, n, r, a, o, s )
        }, absellipse: function ( t, e, i, n, r, a, o, s ) {
            var c = new _o( t, e, i, n, r, a, o, s );
            if (this.curves.length > 0) {
                var h = c.getPoint( 0 );
                h.equals( this.currentPoint ) || this.lineTo( h.x, h.y )
            }
            this.curves.push( c );
            var l = c.getPoint( 1 );
            this.currentPoint.copy( l )
        }, copy: function ( t ) {
            return wo.prototype.copy.call( this, t ), this.currentPoint.copy( t.currentPoint ), this
        }
    } );

    function Lo( t ) {
        wo.call( this ), this.type = 'Path', this.currentPoint = new be, t && this.setFromPoints( t )
    }

    function Ro( t ) {
        Lo.call( this, t ), this.type = 'Shape', this.holes = []
    }

    function Po() {
        this.type = 'ShapePath', this.subPaths = [], this.currentPath = null
    }

    function Co( t ) {
        this.type = 'Font', this.data = t
    }

    Lo.prototype = Ao, Ao.constructor = Lo, Ro.prototype = Object.assign( Object.create( Ao ), {
        constructor: Ro,
        getPointsHoles: function ( t ) {
            for (var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints( t );
            return e
        },
        extractPoints: function ( t ) {
            return { shape: this.getPoints( t ), holes: this.getPointsHoles( t ) }
        },
        copy: function ( t ) {
            Lo.prototype.copy.call( this, t ), this.holes = [];
            for (var e = 0, i = t.holes.length; e < i; e++) {
                var n = t.holes[e];
                this.holes.push( n.clone() )
            }
            return this
        }
    } ), Object.assign( Po.prototype, {
        moveTo: function ( t, e ) {
            this.currentPath = new Lo, this.subPaths.push( this.currentPath ), this.currentPath.moveTo( t, e )
        }, lineTo: function ( t, e ) {
            this.currentPath.lineTo( t, e )
        }, quadraticCurveTo: function ( t, e, i, n ) {
            this.currentPath.quadraticCurveTo( t, e, i, n )
        }, bezierCurveTo: function ( t, e, i, n, r, a ) {
            this.currentPath.bezierCurveTo( t, e, i, n, r, a )
        }, splineThru: function ( t ) {
            this.currentPath.splineThru( t )
        }, toShapes: function ( t, e ) {
            function i( t ) {
                for (var e = [], i = 0, n = t.length; i < n; i++) {
                    var r = t[i], a = new Ro;
                    a.curves = r.curves, e.push( a )
                }
                return e
            }

            function n( t, e ) {
                for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
                    var o = e[r], s = e[a], c = s.x - o.x, h = s.y - o.y;
                    if (Math.abs( h ) > Number.EPSILON) {
                        if (h < 0 && ( o = e[a], c = -c, s = e[r], h = -h ), t.y < o.y || t.y > s.y) continue;
                        if (t.y === o.y) {
                            if (t.x === o.x) return !0
                        } else {
                            var l = h * ( t.x - o.x ) - c * ( t.y - o.y );
                            if (0 === l) return !0;
                            if (l < 0) continue;
                            n = !n
                        }
                    } else {
                        if (t.y !== o.y) continue;
                        if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0
                    }
                }
                return n
            }

            var r = Wr.isClockWise, a = this.subPaths;
            if (0 === a.length) return [];
            if (!0 === e) return i( a );
            var o, s, c, h = [];
            if (1 === a.length) return s = a[0], ( c = new Ro ).curves = s.curves, h.push( c ), h;
            var l = !r( a[0].getPoints() );
            l = t ? !l : l;
            var u, p, d = [], f = [], m = [], v = 0;
            f[v] = void 0, m[v] = [];
            for (var g = 0, y = a.length; g < y; g++) {
                o = r( u = ( s = a[g] ).getPoints() ), ( o = t ? !o : o ) ? ( !l && f[v] && v++, f[v] = {
                    s: new Ro,
                    p: u
                }, f[v].s.curves = s.curves, l && v++, m[v] = [] ) : m[v].push( { h: s, p: u[0] } );
            }
            if (!f[0]) return i( a );
            if (f.length > 1) {
                for (var x = !1, b = [], w = 0, _ = f.length; w < _; w++) d[w] = [];
                for (w = 0, _ = f.length; w < _; w++) {
                    for (var M = m[w], E = 0; E < M.length; E++) {
                        for (var T = M[E], S = !0, A = 0; A < f.length; A++) {
                            n( T.p, f[A].p ) && ( w !== A && b.push( {
                                froms: w,
                                tos: A,
                                hole: E
                            } ), S ? ( S = !1, d[A].push( T ) ) : x = !0 );
                        }
                        S && d[w].push( T )
                    }
                }
                b.length > 0 && ( x || ( m = d ) )
            }
            g = 0;
            for (var L = f.length; g < L; g++) {
                c = f[g].s, h.push( c );
                for (var R = 0, P = ( p = m[g] ).length; R < P; R++) c.holes.push( p[R].h )
            }
            return h
        }
    } ), Object.assign( Co.prototype, {
        isFont: !0, generateShapes: function ( t, e, i ) {
            function n( t, e, i, n ) {
                var a = r.glyphs[t] || r.glyphs['?'];
                if (a) {
                    var o, s, c, h, l, u, p, d, f, m = new Po, v = [];
                    if (a.o) {
                        for (var g = a._cachedOutline || ( a._cachedOutline = a.o.split( ' ' ) ), y = 0, x = g.length; y < x;) {
                            switch (g[y++]) {
                                case'm':
                                    o = g[y++] * e + i, s = g[y++] * e + n, m.moveTo( o, s );
                                    break;
                                case'l':
                                    o = g[y++] * e + i, s = g[y++] * e + n, m.lineTo( o, s );
                                    break;
                                case'q':
                                    c = g[y++] * e + i, h = g[y++] * e + n, l = g[y++] * e + i, u = g[y++] * e + n, m.quadraticCurveTo( l, u, c, h ), ( f = v[v.length - 1] ) && ( f.x, f.y );
                                    break;
                                case'b':
                                    c = g[y++] * e + i, h = g[y++] * e + n, l = g[y++] * e + i, u = g[y++] * e + n, p = g[y++] * e + i, d = g[y++] * e + n, m.bezierCurveTo( l, u, p, d, c, h ), ( f = v[v.length - 1] ) && ( f.x, f.y )
                            }
                        }
                    }
                    return { offsetX: a.ha * e, path: m }
                }
            }

            void 0 === e && ( e = 100 ), void 0 === i && ( i = 4 );
            for (var r = this.data, a = function ( t ) {
                for (var i = String( t ).split( '' ), a = e / r.resolution, o = ( r.boundingBox.yMax - r.boundingBox.yMin + r.underlineThickness ) * a, s = 0, c = 0, h = [], l = 0; l < i.length; l++) {
                    var u = i[l];
                    if ('\n' === u) {
                        s = 0, c -= o;
                    } else {
                        var p = n( u, a, s, c );
                        s += p.offsetX, h.push( p.path )
                    }
                }
                return h
            }( t ), o = [], s = 0, c = a.length; s < c; s++) {
                Array.prototype.push.apply( o, a[s].toShapes() );
            }
            return o
        }
    } ), Object.assign( function ( t ) {
        this.manager = void 0 !== t ? t : Ea
    }.prototype, {
        load: function ( t, e, i, n ) {
            var r = this, a = new Sa( this.manager );
            a.setPath( this.path ), a.load( t, function ( t ) {
                var i;
                try {
                    i = JSON.parse( t )
                } catch (e) {
                    console.warn( 'THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.' ), i = JSON.parse( t.substring( 65, t.length - 2 ) )
                }
                var n = r.parse( i );
                e && e( n )
            }, i, n )
        }, parse: function ( t ) {
            return new Co( t )
        }, setPath: function ( t ) {
            return this.path = t, this
        }
    } );
    var No, Io, Oo, Uo, Do, Fo, zo, Bo, ko, Go, jo, Ho, Vo, Wo, Xo, qo, Yo = {
        getContext: function () {
            return void 0 === So && ( So = new ( window.AudioContext || window.webkitAudioContext ) ), So
        }, setContext: function ( t ) {
            So = t
        }
    };

    function Zo( t ) {
        this.manager = void 0 !== t ? t : Ea
    }

    function Jo( t, e, i ) {
        Ji.call( this ), this.type = 'CubeCamera';
        var n = new nr( 90, 1, t, e );
        n.up.set( 0, -1, 0 ), n.lookAt( new Me( 1, 0, 0 ) ), this.add( n );
        var r = new nr( 90, 1, t, e );
        r.up.set( 0, -1, 0 ), r.lookAt( new Me( -1, 0, 0 ) ), this.add( r );
        var a = new nr( 90, 1, t, e );
        a.up.set( 0, 0, 1 ), a.lookAt( new Me( 0, 1, 0 ) ), this.add( a );
        var o = new nr( 90, 1, t, e );
        o.up.set( 0, 0, -1 ), o.lookAt( new Me( 0, -1, 0 ) ), this.add( o );
        var s = new nr( 90, 1, t, e );
        s.up.set( 0, -1, 0 ), s.lookAt( new Me( 0, 0, 1 ) ), this.add( s );
        var c = new nr( 90, 1, t, e );
        c.up.set( 0, -1, 0 ), c.lookAt( new Me( 0, 0, -1 ) ), this.add( c );
        var h = { format: Vt, magFilter: Lt, minFilter: Lt };
        this.renderTarget = new Re( i, i, h ), this.renderTarget.texture.name = 'CubeCamera', this.update = function ( t, e ) {
            null === this.parent && this.updateMatrixWorld();
            var i = this.renderTarget, h = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, i.activeCubeFace = 0, t.render( e, n, i ), i.activeCubeFace = 1, t.render( e, r, i ), i.activeCubeFace = 2, t.render( e, a, i ), i.activeCubeFace = 3, t.render( e, o, i ), i.activeCubeFace = 4, t.render( e, s, i ), i.texture.generateMipmaps = h, i.activeCubeFace = 5, t.render( e, c, i ), t.setRenderTarget( null )
        }, this.clear = function ( t, e, i, n ) {
            for (var r = this.renderTarget, a = 0; a < 6; a++) r.activeCubeFace = a, t.setRenderTarget( r ), t.clear( e, i, n );
            t.setRenderTarget( null )
        }
    }

    function Ko() {
        Ji.call( this ), this.type = 'AudioListener', this.context = Yo.getContext(), this.gain = this.context.createGain(), this.gain.connect( this.context.destination ), this.filter = null
    }

    function Qo( t ) {
        Ji.call( this ), this.type = 'Audio', this.context = t.context, this.gain = this.context.createGain(), this.gain.connect( t.getInput() ), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = 'empty', this.filters = []
    }

    function $o( t ) {
        Qo.call( this, t ), this.panner = this.context.createPanner(), this.panner.connect( this.gain )
    }

    function ts( t, e ) {
        this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array( this.analyser.frequencyBinCount ), t.getOutput().connect( this.analyser )
    }

    function es( t, e, i ) {
        this.binding = t, this.valueSize = i;
        var n, r = Float64Array;
        switch (e) {
            case'quaternion':
                n = this._slerp;
                break;
            case'string':
            case'bool':
                r = Array, n = this._select;
                break;
            default:
                n = this._lerp
        }
        this.buffer = new r( 4 * i ), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
    }

    function is( t, e, i ) {
        var n = i || ns.parseTrackName( e );
        this._targetGroup = t, this._bindings = t.subscribe_( e, n )
    }

    function ns( t, e, i ) {
        this.path = e, this.parsedPath = i || ns.parseTrackName( e ), this.node = ns.findNode( t, this.parsedPath.nodeName ) || t, this.rootNode = t
    }

    function rs( t, e, i ) {
        this._mixer = t, this._clip = e, this._localRoot = i || null;
        for (var n = e.tracks, r = n.length, a = new Array( r ), o = {
            endingStart: oe,
            endingEnd: oe
        }, s = 0; s !== r; ++s) {
            var c = n[s].createInterpolant( null );
            a[s] = c, c.settings = o
        }
        this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array( r ), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = ae, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }

    function as( t ) {
        'string' == typeof t && ( console.warn( 'THREE.Uniform: Type parameter is no longer needed.' ), t = arguments[1] ), this.value = t
    }

    function os() {
        En.call( this ), this.type = 'InstancedBufferGeometry', this.maxInstancedCount = void 0
    }

    function ss( t, e, i, n ) {
        this.uuid = xe.generateUUID(), this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
    }

    function cs( t, e ) {
        this.uuid = xe.generateUUID(), this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function () {
        }, this.version = 0
    }

    function hs( t, e, i ) {
        cs.call( this, t, e ), this.meshPerAttribute = i || 1
    }

    function ls( t, e, i ) {
        rn.call( this, t, e ), this.meshPerAttribute = i || 1
    }

    function us( t, e, i, n ) {
        this.ray = new Cn( t, e ), this.near = i || 0, this.far = n || 1 / 0, this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: { threshold: 1 },
            Sprite: {}
        }, Object.defineProperties( this.params, {
            PointCloud: {
                get: function () {
                    return console.warn( 'THREE.Raycaster: params.PointCloud has been renamed to params.Points.' ), this.Points
                }
            }
        } )
    }

    function ps( t, e ) {
        return t.distance - e.distance
    }

    function ds( t, e, i, n ) {
        if (!1 !== t.visible && ( t.raycast( e, i ), !0 === n )) for (var r = t.children, a = 0, o = r.length; a < o; a++) ds( r[a], e, i, !0 )
    }

    function fs( t, e, i ) {
        return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this
    }

    function ms( t ) {
        Ji.call( this ), this.material = t, this.render = function () {
        }
    }

    function vs( t, e, i, n ) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var r = void 0 !== i ? i : 16711680, a = void 0 !== n ? n : 1, o = 0, s = this.object.geometry;
        s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && ( o = s.attributes.normal.count );
        var c = new En, h = new pn( 2 * o * 3, 3 );
        c.addAttribute( 'position', h ), yr.call( this, c, new vr( {
            color: r,
            linewidth: a
        } ) ), this.matrixAutoUpdate = !1, this.update()
    }

    function gs( t, e ) {
        Ji.call( this ), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
        for (var i = new En, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++, a++) {
            var o = r / 32 * Math.PI * 2, s = a / 32 * Math.PI * 2;
            n.push( Math.cos( o ), Math.sin( o ), 1, Math.cos( s ), Math.sin( s ), 1 )
        }
        i.addAttribute( 'position', new pn( n, 3 ) );
        var c = new vr( { fog: !1 } );
        this.cone = new yr( i, c ), this.add( this.cone ), this.update()
    }

    function ys( t ) {
        for (var e = function t( e ) {
            var i = [];
            e && e.isBone && i.push( e );
            for (var n = 0; n < e.children.length; n++) i.push.apply( i, t( e.children[n] ) );
            return i
        }( t ), i = new En, n = [], r = [], a = new yi( 0, 0, 1 ), o = new yi( 0, 1, 0 ), s = 0; s < e.length; s++) {
            var c = e[s];
            c.parent && c.parent.isBone && ( n.push( 0, 0, 0 ), n.push( 0, 0, 0 ), r.push( a.r, a.g, a.b ), r.push( o.r, o.g, o.b ) )
        }
        i.addAttribute( 'position', new pn( n, 3 ) ), i.addAttribute( 'color', new pn( r, 3 ) );
        var h = new vr( { vertexColors: P, depthTest: !1, depthWrite: !1, transparent: !0 } );
        yr.call( this, i, h ), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    }

    function xs( t, e, i ) {
        this.light = t, this.light.updateMatrixWorld(), this.color = i;
        var n = new Kr( e, 4, 2 ), r = new Rn( { wireframe: !0, fog: !1 } );
        On.call( this, n, r ), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }

    function bs( t, e ) {
        Ji.call( this ), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
        var i = new vr( { fog: !1 } ), n = new En;
        n.addAttribute( 'position', new rn( new Float32Array( 15 ), 3 ) ), this.line = new gr( n, i ), this.add( this.line ), this.update()
    }

    function ws( t, e, i ) {
        Ji.call( this ), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i;
        var n = new Or( e );
        n.rotateY( .5 * Math.PI ), this.material = new Rn( {
            wireframe: !0,
            fog: !1
        } ), void 0 === this.color && ( this.material.vertexColors = P );
        var r = n.getAttribute( 'position' ), a = new Float32Array( 3 * r.count );
        n.addAttribute( 'color', new rn( a, 3 ) ), this.add( new On( n, this.material ) ), this.update()
    }

    function _s( t, e, i, n ) {
        t = t || 10, e = e || 10, i = new yi( void 0 !== i ? i : 4473924 ), n = new yi( void 0 !== n ? n : 8947848 );
        for (var r = e / 2, a = t / e, o = t / 2, s = [], c = [], h = 0, l = 0, u = -o; h <= e; h++, u += a) {
            s.push( -o, 0, u, o, 0, u ), s.push( u, 0, -o, u, 0, o );
            var p = h === r ? i : n;
            p.toArray( c, l ), l += 3, p.toArray( c, l ), l += 3, p.toArray( c, l ), l += 3, p.toArray( c, l ), l += 3
        }
        var d = new En;
        d.addAttribute( 'position', new pn( s, 3 ) ), d.addAttribute( 'color', new pn( c, 3 ) );
        var f = new vr( { vertexColors: P } );
        yr.call( this, d, f )
    }

    function Ms( t, e, i, n, r, a ) {
        t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new yi( void 0 !== r ? r : 4473924 ), a = new yi( void 0 !== a ? a : 8947848 );
        var o, s, c, h, l, u, p, d = [], f = [];
        for (h = 0; h <= e; h++) c = h / e * ( 2 * Math.PI ), o = Math.sin( c ) * t, s = Math.cos( c ) * t, d.push( 0, 0, 0 ), d.push( o, 0, s ), p = 1 & h ? r : a, f.push( p.r, p.g, p.b ), f.push( p.r, p.g, p.b );
        for (h = 0; h <= i; h++) for (p = 1 & h ? r : a, u = t - t / i * h, l = 0; l < n; l++) c = l / n * ( 2 * Math.PI ), o = Math.sin( c ) * u, s = Math.cos( c ) * u, d.push( o, 0, s ), f.push( p.r, p.g, p.b ), c = ( l + 1 ) / n * ( 2 * Math.PI ), o = Math.sin( c ) * u, s = Math.cos( c ) * u, d.push( o, 0, s ), f.push( p.r, p.g, p.b );
        var m = new En;
        m.addAttribute( 'position', new pn( d, 3 ) ), m.addAttribute( 'color', new pn( f, 3 ) );
        var v = new vr( { vertexColors: P } );
        yr.call( this, m, v )
    }

    function Es( t, e, i, n ) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var r = void 0 !== i ? i : 16776960, a = void 0 !== n ? n : 1, o = 0, s = this.object.geometry;
        s && s.isGeometry ? o = s.faces.length : console.warn( 'THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.' );
        var c = new En, h = new pn( 2 * o * 3, 3 );
        c.addAttribute( 'position', h ), yr.call( this, c, new vr( {
            color: r,
            linewidth: a
        } ) ), this.matrixAutoUpdate = !1, this.update()
    }

    function Ts( t, e, i ) {
        Ji.call( this ), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && ( e = 1 );
        var n = new En;
        n.addAttribute( 'position', new pn( [-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3 ) );
        var r = new vr( { fog: !1 } );
        this.lightPlane = new gr( n, r ), this.add( this.lightPlane ), ( n = new En ).addAttribute( 'position', new pn( [0, 0, 0, 0, 0, 1], 3 ) ), this.targetLine = new gr( n, r ), this.add( this.targetLine ), this.update()
    }

    function Ss( t ) {
        var e = new En, i = new vr( { color: 16777215, vertexColors: R } ), n = [], r = [], a = {},
            o = new yi( 16755200 ), s = new yi( 16711680 ), c = new yi( 43775 ), h = new yi( 16777215 ),
            l = new yi( 3355443 );

        function u( t, e, i ) {
            p( t, i ), p( e, i )
        }

        function p( t, e ) {
            n.push( 0, 0, 0 ), r.push( e.r, e.g, e.b ), void 0 === a[t] && ( a[t] = [] ), a[t].push( n.length / 3 - 1 )
        }

        u( 'n1', 'n2', o ), u( 'n2', 'n4', o ), u( 'n4', 'n3', o ), u( 'n3', 'n1', o ), u( 'f1', 'f2', o ), u( 'f2', 'f4', o ), u( 'f4', 'f3', o ), u( 'f3', 'f1', o ), u( 'n1', 'f1', o ), u( 'n2', 'f2', o ), u( 'n3', 'f3', o ), u( 'n4', 'f4', o ), u( 'p', 'n1', s ), u( 'p', 'n2', s ), u( 'p', 'n3', s ), u( 'p', 'n4', s ), u( 'u1', 'u2', c ), u( 'u2', 'u3', c ), u( 'u3', 'u1', c ), u( 'c', 't', h ), u( 'p', 'c', l ), u( 'cn1', 'cn2', l ), u( 'cn3', 'cn4', l ), u( 'cf1', 'cf2', l ), u( 'cf3', 'cf4', l ), e.addAttribute( 'position', new pn( n, 3 ) ), e.addAttribute( 'color', new pn( r, 3 ) ), yr.call( this, e, i ), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
    }

    function As( t, e ) {
        this.object = t, void 0 === e && ( e = 16776960 );
        var i = new Uint16Array( [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7] ),
            n = new Float32Array( 24 ), r = new En;
        r.setIndex( new rn( i, 1 ) ), r.addAttribute( 'position', new rn( n, 3 ) ), yr.call( this, r, new vr( { color: e } ) ), this.matrixAutoUpdate = !1, this.update()
    }

    function Ls( t, e ) {
        this.type = 'Box3Helper', this.box = t;
        var i = void 0 !== e ? e : 16776960,
            n = new Uint16Array( [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7] ), r = new En;
        r.setIndex( new rn( n, 1 ) ), r.addAttribute( 'position', new pn( [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3 ) ), yr.call( this, r, new vr( { color: i } ) ), this.geometry.computeBoundingSphere()
    }

    function Rs( t, e, i ) {
        this.type = 'PlaneHelper', this.plane = t, this.size = void 0 === e ? 1 : e;
        var n = void 0 !== i ? i : 16776960, r = new En;
        r.addAttribute( 'position', new pn( [1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3 ) ), r.computeBoundingSphere(), gr.call( this, r, new vr( { color: n } ) );
        var a = new En;
        a.addAttribute( 'position', new pn( [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3 ) ), a.computeBoundingSphere(), this.add( new On( a, new Rn( {
            color: n,
            opacity: .2,
            transparent: !0,
            depthWrite: !1
        } ) ) )
    }

    function Ps( t, e, i, n, r, a ) {
        Ji.call( this ), void 0 === n && ( n = 16776960 ), void 0 === i && ( i = 1 ), void 0 === r && ( r = .2 * i ), void 0 === a && ( a = .2 * r ), void 0 === Vo && ( ( Vo = new En ).addAttribute( 'position', new pn( [0, 0, 0, 0, 1, 0], 3 ) ), ( Wo = new oa( 0, .5, 1, 5, 1 ) ).translate( 0, -.5, 0 ) ), this.position.copy( e ), this.line = new gr( Vo, new vr( { color: n } ) ), this.line.matrixAutoUpdate = !1, this.add( this.line ), this.cone = new On( Wo, new Rn( { color: n } ) ), this.cone.matrixAutoUpdate = !1, this.add( this.cone ), this.setDirection( t ), this.setLength( i, r, a )
    }

    function Cs( t ) {
        var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t], i = new En;
        i.addAttribute( 'position', new pn( e, 3 ) ), i.addAttribute( 'color', new pn( [1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3 ) );
        var n = new vr( { vertexColors: P } );
        yr.call( this, i, n )
    }

    function Ns() {
        var t = 0, e = 0, i = 0, n = 0;

        function r( r, a, o, s ) {
            t = r, e = o, i = -3 * r + 3 * a - 2 * o - s, n = 2 * r - 2 * a + o + s
        }

        return {
            initCatmullRom: function ( t, e, i, n, a ) {
                r( e, i, a * ( i - t ), a * ( n - e ) )
            }, initNonuniformCatmullRom: function ( t, e, i, n, a, o, s ) {
                var c = ( e - t ) / a - ( i - t ) / ( a + o ) + ( i - e ) / o,
                    h = ( i - e ) / o - ( n - e ) / ( o + s ) + ( n - i ) / s;
                r( e, i, c *= o, h *= o )
            }, calc: function ( r ) {
                var a = r * r;
                return t + e * r + i * a + n * ( a * r )
            }
        }
    }

    Object.assign( Zo.prototype, {
        load: function ( t, e, i, n ) {
            var r = new Sa( this.manager );
            r.setResponseType( 'arraybuffer' ), r.load( t, function ( t ) {
                Yo.getContext().decodeAudioData( t, function ( t ) {
                    e( t )
                } )
            }, i, n )
        }
    } ), Object.assign( function () {
        this.type = 'StereoCamera', this.aspect = 1, this.eyeSep = .064, this.cameraL = new nr, this.cameraL.layers.enable( 1 ), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new nr, this.cameraR.layers.enable( 2 ), this.cameraR.matrixAutoUpdate = !1
    }.prototype, {
        update: ( ko = new we, Go = new we, function ( t ) {
            if (No !== this || Io !== t.focus || Oo !== t.fov || Uo !== t.aspect * this.aspect || Do !== t.near || Fo !== t.far || zo !== t.zoom || Bo !== this.eyeSep) {
                No = this, Io = t.focus, Oo = t.fov, Uo = t.aspect * this.aspect, Do = t.near, Fo = t.far, zo = t.zoom;
                var e, i, n = t.projectionMatrix.clone(), r = ( Bo = this.eyeSep / 2 ) * Do / Io,
                    a = Do * Math.tan( xe.DEG2RAD * Oo * .5 ) / zo;
                Go.elements[12] = -Bo, ko.elements[12] = Bo, e = -a * Uo + r, i = a * Uo + r, n.elements[0] = 2 * Do / ( i - e ), n.elements[8] = ( i + e ) / ( i - e ), this.cameraL.projectionMatrix.copy( n ), e = -a * Uo - r, i = a * Uo - r, n.elements[0] = 2 * Do / ( i - e ), n.elements[8] = ( i + e ) / ( i - e ), this.cameraR.projectionMatrix.copy( n )
            }
            this.cameraL.matrixWorld.copy( t.matrixWorld ).multiply( Go ), this.cameraR.matrixWorld.copy( t.matrixWorld ).multiply( ko )
        } )
    } ), Jo.prototype = Object.create( Ji.prototype ), Jo.prototype.constructor = Jo, Ko.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: Ko, getInput: function () {
            return this.gain
        }, removeFilter: function () {
            null !== this.filter && ( this.gain.disconnect( this.filter ), this.filter.disconnect( this.context.destination ), this.gain.connect( this.context.destination ), this.filter = null )
        }, getFilter: function () {
            return this.filter
        }, setFilter: function ( t ) {
            null !== this.filter ? ( this.gain.disconnect( this.filter ), this.filter.disconnect( this.context.destination ) ) : this.gain.disconnect( this.context.destination ), this.filter = t, this.gain.connect( this.filter ), this.filter.connect( this.context.destination )
        }, getMasterVolume: function () {
            return this.gain.gain.value
        }, setMasterVolume: function ( t ) {
            this.gain.gain.value = t
        }, updateMatrixWorld: function () {
            var t = new Me, e = new _e, i = new Me, n = new Me;
            return function ( r ) {
                Ji.prototype.updateMatrixWorld.call( this, r );
                var a = this.context.listener, o = this.up;
                this.matrixWorld.decompose( t, e, i ), n.set( 0, 0, -1 ).applyQuaternion( e ), a.positionX ? ( a.positionX.setValueAtTime( t.x, this.context.currentTime ), a.positionY.setValueAtTime( t.y, this.context.currentTime ), a.positionZ.setValueAtTime( t.z, this.context.currentTime ), a.forwardX.setValueAtTime( n.x, this.context.currentTime ), a.forwardY.setValueAtTime( n.y, this.context.currentTime ), a.forwardZ.setValueAtTime( n.z, this.context.currentTime ), a.upX.setValueAtTime( o.x, this.context.currentTime ), a.upY.setValueAtTime( o.y, this.context.currentTime ), a.upZ.setValueAtTime( o.z, this.context.currentTime ) ) : ( a.setPosition( t.x, t.y, t.z ), a.setOrientation( n.x, n.y, n.z, o.x, o.y, o.z ) )
            }
        }()
    } ), Qo.prototype = Object.assign( Object.create( Ji.prototype ), {
        constructor: Qo, getOutput: function () {
            return this.gain
        }, setNodeSource: function ( t ) {
            return this.hasPlaybackControl = !1, this.sourceType = 'audioNode', this.source = t, this.connect(), this
        }, setBuffer: function ( t ) {
            return this.buffer = t, this.sourceType = 'buffer', this.autoplay && this.play(), this
        }, play: function () {
            if (!0 !== this.isPlaying) {
                if (!1 !== this.hasPlaybackControl) {
                    var t = this.context.createBufferSource();
                    return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind( this ), t.playbackRate.setValueAtTime( this.playbackRate, this.startTime ), this.startTime = this.context.currentTime, t.start( this.startTime, this.offset ), this.isPlaying = !0, this.source = t, this.connect()
                }
                console.warn( 'THREE.Audio: this Audio has no playback control.' )
            } else {
                console.warn( 'THREE.Audio: Audio is already playing.' )
            }
        }, pause: function () {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && ( this.source.stop(), this.offset += ( this.context.currentTime - this.startTime ) * this.playbackRate, this.isPlaying = !1 ), this;
            console.warn( 'THREE.Audio: this Audio has no playback control.' )
        }, stop: function () {
            if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.offset = 0, this.isPlaying = !1, this;
            console.warn( 'THREE.Audio: this Audio has no playback control.' )
        }, connect: function () {
            if (this.filters.length > 0) {
                this.source.connect( this.filters[0] );
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect( this.filters[t] );
                this.filters[this.filters.length - 1].connect( this.getOutput() )
            } else {
                this.source.connect( this.getOutput() );
            }
            return this
        }, disconnect: function () {
            if (this.filters.length > 0) {
                this.source.disconnect( this.filters[0] );
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect( this.filters[t] );
                this.filters[this.filters.length - 1].disconnect( this.getOutput() )
            } else {
                this.source.disconnect( this.getOutput() );
            }
            return this
        }, getFilters: function () {
            return this.filters
        }, setFilters: function ( t ) {
            return t || ( t = [] ), !0 === this.isPlaying ? ( this.disconnect(), this.filters = t, this.connect() ) : this.filters = t, this
        }, getFilter: function () {
            return this.getFilters()[0]
        }, setFilter: function ( t ) {
            return this.setFilters( t ? [t] : [] )
        }, setPlaybackRate: function ( t ) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime( this.playbackRate, this.context.currentTime ), this;
            console.warn( 'THREE.Audio: this Audio has no playback control.' )
        }, getPlaybackRate: function () {
            return this.playbackRate
        }, onEnded: function () {
            this.isPlaying = !1
        }, getLoop: function () {
            return !1 === this.hasPlaybackControl ? ( console.warn( 'THREE.Audio: this Audio has no playback control.' ), !1 ) : this.loop
        }, setLoop: function ( t ) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && ( this.source.loop = this.loop ), this;
            console.warn( 'THREE.Audio: this Audio has no playback control.' )
        }, getVolume: function () {
            return this.gain.gain.value
        }, setVolume: function ( t ) {
            return this.gain.gain.value = t, this
        }
    } ), $o.prototype = Object.assign( Object.create( Qo.prototype ), {
        constructor: $o, getOutput: function () {
            return this.panner
        }, getRefDistance: function () {
            return this.panner.refDistance
        }, setRefDistance: function ( t ) {
            this.panner.refDistance = t
        }, getRolloffFactor: function () {
            return this.panner.rolloffFactor
        }, setRolloffFactor: function ( t ) {
            this.panner.rolloffFactor = t
        }, getDistanceModel: function () {
            return this.panner.distanceModel
        }, setDistanceModel: function ( t ) {
            this.panner.distanceModel = t
        }, getMaxDistance: function () {
            return this.panner.maxDistance
        }, setMaxDistance: function ( t ) {
            this.panner.maxDistance = t
        }, updateMatrixWorld: function () {
            var t = new Me;
            return function ( e ) {
                Ji.prototype.updateMatrixWorld.call( this, e ), t.setFromMatrixPosition( this.matrixWorld ), this.panner.setPosition( t.x, t.y, t.z )
            }
        }()
    } ), Object.assign( ts.prototype, {
        getFrequencyData: function () {
            return this.analyser.getByteFrequencyData( this.data ), this.data
        }, getAverageFrequency: function () {
            for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++) t += e[i];
            return t / e.length
        }
    } ), Object.assign( es.prototype, {
        accumulate: function ( t, e ) {
            var i = this.buffer, n = this.valueSize, r = t * n + n, a = this.cumulativeWeight;
            if (0 === a) {
                for (var o = 0; o !== n; ++o) i[r + o] = i[o];
                a = e
            } else {
                var s = e / ( a += e );
                this._mixBufferRegion( i, r, 0, s, n )
            }
            this.cumulativeWeight = a
        }, apply: function ( t ) {
            var e = this.valueSize, i = this.buffer, n = t * e + e, r = this.cumulativeWeight, a = this.binding;
            if (this.cumulativeWeight = 0, r < 1) {
                var o = 3 * e;
                this._mixBufferRegion( i, n, o, 1 - r, e )
            }
            for (var s = e, c = e + e; s !== c; ++s) {
                if (i[s] !== i[s + e]) {
                    a.setValue( i, n );
                    break
                }
            }
        }, saveOriginalState: function () {
            var t = this.binding, e = this.buffer, i = this.valueSize, n = 3 * i;
            t.getValue( e, n );
            for (var r = i, a = n; r !== a; ++r) e[r] = e[n + r % i];
            this.cumulativeWeight = 0
        }, restoreOriginalState: function () {
            var t = 3 * this.valueSize;
            this.binding.setValue( this.buffer, t )
        }, _select: function ( t, e, i, n, r ) {
            if (n >= .5) for (var a = 0; a !== r; ++a) t[e + a] = t[i + a]
        }, _slerp: function ( t, e, i, n ) {
            _e.slerpFlat( t, e, t, e, t, i, n )
        }, _lerp: function ( t, e, i, n, r ) {
            for (var a = 1 - n, o = 0; o !== r; ++o) {
                var s = e + o;
                t[s] = t[s] * a + t[i + o] * n
            }
        }
    } ), Object.assign( is.prototype, {
        getValue: function ( t, e ) {
            this.bind();
            var i = this._targetGroup.nCachedObjects_, n = this._bindings[i];
            void 0 !== n && n.getValue( t, e )
        }, setValue: function ( t, e ) {
            for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue( t, e )
        }, bind: function () {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
        }, unbind: function () {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
        }
    } ), Object.assign( ns, {
        Composite: is,
        create: function ( t, e, i ) {
            return t && t.isAnimationObjectGroup ? new ns.Composite( t, e, i ) : new ns( t, e, i )
        },
        sanitizeNodeName: function ( t ) {
            return t.replace( /\s/g, '_' ).replace( /[^\w-]/g, '' )
        },
        parseTrackName: ( jo = new RegExp( '^' + /((?:[\w-]+[\/:])*)/.source + /([\w-\.]+)?/.source + /(?:\.([\w-]+)(?:\[(.+)\])?)?/.source + /\.([\w-]+)(?:\[(.+)\])?/.source + '$' ), Ho = ['material', 'materials', 'bones'], function ( t ) {
            var e = jo.exec( t );
            if (!e) throw new Error( 'PropertyBinding: Cannot parse trackName: ' + t );
            var i = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] },
                n = i.nodeName && i.nodeName.lastIndexOf( '.' );
            if (void 0 !== n && -1 !== n) {
                var r = i.nodeName.substring( n + 1 );
                -1 !== Ho.indexOf( r ) && ( i.nodeName = i.nodeName.substring( 0, n ), i.objectName = r )
            }
            if (null === i.propertyName || 0 === i.propertyName.length) throw new Error( 'PropertyBinding: can not parse propertyName from trackName: ' + t );
            return i
        } ),
        findNode: function ( t, e ) {
            if (!e || '' === e || 'root' === e || '.' === e || -1 === e || e === t.name || e === t.uuid) return t;
            if (t.skeleton) {
                var i = function ( t ) {
                    for (var i = 0; i < t.bones.length; i++) {
                        var n = t.bones[i];
                        if (n.name === e) return n
                    }
                    return null
                }( t.skeleton );
                if (i) return i
            }
            if (t.children) {
                var n = function ( t ) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        if (r.name === e || r.uuid === e) return r;
                        var a = n( r.children );
                        if (a) return a
                    }
                    return null
                }, r = n( t.children );
                if (r) return r
            }
            return null
        }
    } ), Object.assign( ns.prototype, {
        _getValue_unavailable: function () {
        },
        _setValue_unavailable: function () {
        },
        BindingType: { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 },
        Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
        GetterByBindingType: [function ( t, e ) {
            t[e] = this.node[this.propertyName]
        }, function ( t, e ) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
        }, function ( t, e ) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }, function ( t, e ) {
            this.resolvedProperty.toArray( t, e )
        }],
        SetterByBindingTypeAndVersioning: [[function ( t, e ) {
            this.targetObject[this.propertyName] = t[e]
        }, function ( t, e ) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
        }, function ( t, e ) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function ( t, e ) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
        }, function ( t, e ) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
            this.targetObject.needsUpdate = !0
        }, function ( t, e ) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function ( t, e ) {
            this.resolvedProperty[this.propertyIndex] = t[e]
        }, function ( t, e ) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
        }, function ( t, e ) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function ( t, e ) {
            this.resolvedProperty.fromArray( t, e )
        }, function ( t, e ) {
            this.resolvedProperty.fromArray( t, e ), this.targetObject.needsUpdate = !0
        }, function ( t, e ) {
            this.resolvedProperty.fromArray( t, e ), this.targetObject.matrixWorldNeedsUpdate = !0
        }]],
        getValue: function ( t, e ) {
            this.bind(), this.getValue( t, e )
        },
        setValue: function ( t, e ) {
            this.bind(), this.setValue( t, e )
        },
        bind: function () {
            var t = this.node, e = this.parsedPath, i = e.objectName, n = e.propertyName, r = e.propertyIndex;
            if (t || ( t = ns.findNode( this.rootNode, e.nodeName ) || this.rootNode, this.node = t ), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
                if (i) {
                    var a = e.objectIndex;
                    switch (i) {
                        case'materials':
                            if (!t.material) return void console.error( 'THREE.PropertyBinding: Can not bind to material as node does not have a material.', this );
                            if (!t.material.materials) return void console.error( 'THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.', this );
                            t = t.material.materials;
                            break;
                        case'bones':
                            if (!t.skeleton) return void console.error( 'THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.', this );
                            t = t.skeleton.bones;
                            for (var o = 0; o < t.length; o++) {
                                if (t[o].name === a) {
                                    a = o;
                                    break
                                }
                            }
                            break;
                        default:
                            if (void 0 === t[i]) return void console.error( 'THREE.PropertyBinding: Can not bind to objectName of node undefined.', this );
                            t = t[i]
                    }
                    if (void 0 !== a) {
                        if (void 0 === t[a]) return void console.error( 'THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.', this, t );
                        t = t[a]
                    }
                }
                var s = t[n];
                if (void 0 !== s) {
                    var c = this.Versioning.None;
                    void 0 !== t.needsUpdate ? ( c = this.Versioning.NeedsUpdate, this.targetObject = t ) : void 0 !== t.matrixWorldNeedsUpdate && ( c = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = t );
                    var h = this.BindingType.Direct;
                    if (void 0 !== r) {
                        if ('morphTargetInfluences' === n) {
                            if (!t.geometry) return void console.error( 'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.', this );
                            if (t.geometry.isBufferGeometry) {
                                if (!t.geometry.morphAttributes) return void console.error( 'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.', this );
                                for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++) {
                                    if (t.geometry.morphAttributes.position[o].name === r) {
                                        r = o;
                                        break
                                    }
                                }
                            } else {
                                if (!t.geometry.morphTargets) return void console.error( 'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.', this );
                                for (o = 0; o < this.node.geometry.morphTargets.length; o++) {
                                    if (t.geometry.morphTargets[o].name === r) {
                                        r = o;
                                        break
                                    }
                                }
                            }
                        }
                        h = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
                    } else {
                        void 0 !== s.fromArray && void 0 !== s.toArray ? ( h = this.BindingType.HasFromToArray, this.resolvedProperty = s ) : Array.isArray( s ) ? ( h = this.BindingType.EntireArray, this.resolvedProperty = s ) : this.propertyName = n;
                    }
                    this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][c]
                } else {
                    var l = e.nodeName;
                    console.error( 'THREE.PropertyBinding: Trying to update property for track: ' + l + '.' + n + ' but it wasn\'t found.', t )
                }
            } else {
                console.error( 'THREE.PropertyBinding: Trying to update node for track: ' + this.path + ' but it wasn\'t found.' )
            }
        },
        unbind: function () {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
    } ), Object.assign( ns.prototype, {
        _getValue_unbound: ns.prototype.getValue,
        _setValue_unbound: ns.prototype.setValue
    } ), Object.assign( function () {
        this.uuid = xe.generateUUID(), this._objects = Array.prototype.slice.call( arguments ), this.nCachedObjects_ = 0;
        var t = {};
        this._indicesByUUID = t;
        for (var e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var n = this;
        this.stats = {
            objects: {
                get total() {
                    return n._objects.length
                }, get inUse() {
                    return this.total - n.nCachedObjects_
                }
            }, get bindingsPerObject() {
                return n._bindings.length
            }
        }
    }.prototype, {
        isAnimationObjectGroup: !0, add: function () {
            for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = 0, h = arguments.length; c !== h; ++c) {
                var l = arguments[c], u = l.uuid, p = n[u], d = void 0;
                if (void 0 === p) {
                    p = e++, n[u] = p, t.push( l );
                    for (var f = 0, m = s; f !== m; ++f) o[f].push( new ns( l, r[f], a[f] ) )
                } else if (p < i) {
                    d = t[p];
                    var v = --i, g = t[v];
                    n[g.uuid] = p, t[p] = g, n[u] = v, t[v] = l;
                    for (f = 0, m = s; f !== m; ++f) {
                        var y = o[f], x = y[v], b = y[p];
                        y[p] = x, void 0 === b && ( b = new ns( l, r[f], a[f] ) ), y[v] = b
                    }
                } else {
                    t[p] !== d && console.error( 'THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.' )
                }
            }
            this.nCachedObjects_ = i
        }, remove: function () {
            for (var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, a = 0, o = arguments.length; a !== o; ++a) {
                var s = arguments[a], c = s.uuid, h = i[c];
                if (void 0 !== h && h >= e) {
                    var l = e++, u = t[l];
                    i[u.uuid] = h, t[h] = u, i[c] = l, t[l] = s;
                    for (var p = 0, d = r; p !== d; ++p) {
                        var f = n[p], m = f[l], v = f[h];
                        f[h] = m, f[l] = v
                    }
                }
            }
            this.nCachedObjects_ = e
        }, uncache: function () {
            for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o].uuid, h = n[c];
                if (void 0 !== h) {
                    if (delete n[c], h < i) {
                        var l = --i, u = t[l], p = t[g = --e];
                        n[u.uuid] = h, t[h] = u, n[p.uuid] = l, t[l] = p, t.pop();
                        for (var d = 0, f = a; d !== f; ++d) {
                            var m = ( y = r[d] )[l], v = y[g];
                            y[h] = m, y[l] = v, y.pop()
                        }
                    } else {
                        var g;
                        n[( p = t[g = --e] ).uuid] = h, t[h] = p, t.pop();
                        for (d = 0, f = a; d !== f; ++d) {
                            var y;
                            ( y = r[d] )[h] = y[g], y.pop()
                        }
                    }
                }
            }
            this.nCachedObjects_ = i
        }, subscribe_: function ( t, e ) {
            var i = this._bindingsIndicesByPath, n = i[t], r = this._bindings;
            if (void 0 !== n) return r[n];
            var a = this._paths, o = this._parsedPaths, s = this._objects, c = s.length, h = this.nCachedObjects_,
                l = new Array( c );
            n = r.length, i[t] = n, a.push( t ), o.push( e ), r.push( l );
            for (var u = h, p = s.length; u !== p; ++u) {
                var d = s[u];
                l[u] = new ns( d, t, e )
            }
            return l
        }, unsubscribe_: function ( t ) {
            var e = this._bindingsIndicesByPath, i = e[t];
            if (void 0 !== i) {
                var n = this._paths, r = this._parsedPaths, a = this._bindings, o = a.length - 1, s = a[o];
                e[t[o]] = i, a[i] = s, a.pop(), r[i] = r[o], r.pop(), n[i] = n[o], n.pop()
            }
        }
    } ), Object.assign( rs.prototype, {
        play: function () {
            return this._mixer._activateAction( this ), this
        }, stop: function () {
            return this._mixer._deactivateAction( this ), this.reset()
        }, reset: function () {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        }, isRunning: function () {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction( this )
        }, isScheduled: function () {
            return this._mixer._isActiveAction( this )
        }, startAt: function ( t ) {
            return this._startTime = t, this
        }, setLoop: function ( t, e ) {
            return this.loop = t, this.repetitions = e, this
        }, setEffectiveWeight: function ( t ) {
            return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
        }, getEffectiveWeight: function () {
            return this._effectiveWeight
        }, fadeIn: function ( t ) {
            return this._scheduleFading( t, 0, 1 )
        }, fadeOut: function ( t ) {
            return this._scheduleFading( t, 1, 0 )
        }, crossFadeFrom: function ( t, e, i ) {
            if (t.fadeOut( e ), this.fadeIn( e ), i) {
                var n = this._clip.duration, r = t._clip.duration, a = r / n, o = n / r;
                t.warp( 1, a, e ), this.warp( o, 1, e )
            }
            return this
        }, crossFadeTo: function ( t, e, i ) {
            return t.crossFadeFrom( this, e, i )
        }, stopFading: function () {
            var t = this._weightInterpolant;
            return null !== t && ( this._weightInterpolant = null, this._mixer._takeBackControlInterpolant( t ) ), this
        }, setEffectiveTimeScale: function ( t ) {
            return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
        }, getEffectiveTimeScale: function () {
            return this._effectiveTimeScale
        }, setDuration: function ( t ) {
            return this.timeScale = this._clip.duration / t, this.stopWarping()
        }, syncWith: function ( t ) {
            return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
        }, halt: function ( t ) {
            return this.warp( this._effectiveTimeScale, 0, t )
        }, warp: function ( t, e, i ) {
            var n = this._mixer, r = n.time, a = this._timeScaleInterpolant, o = this.timeScale;
            null === a && ( a = n._lendControlInterpolant(), this._timeScaleInterpolant = a );
            var s = a.parameterPositions, c = a.sampleValues;
            return s[0] = r, s[1] = r + i, c[0] = t / o, c[1] = e / o, this
        }, stopWarping: function () {
            var t = this._timeScaleInterpolant;
            return null !== t && ( this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant( t ) ), this
        }, getMixer: function () {
            return this._mixer
        }, getClip: function () {
            return this._clip
        }, getRoot: function () {
            return this._localRoot || this._mixer._root
        }, _update: function ( t, e, i, n ) {
            if (this.enabled) {
                var r = this._startTime;
                if (null !== r) {
                    var a = ( t - r ) * i;
                    if (a < 0 || 0 === i) return;
                    this._startTime = null, e = i * a
                }
                e *= this._updateTimeScale( t );
                var o = this._updateTime( e ), s = this._updateWeight( t );
                if (s > 0) for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l) c[l].evaluate( o ), h[l].accumulate( n, s )
            } else {
                this._updateWeight( t )
            }
        }, _updateWeight: function ( t ) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var i = this._weightInterpolant;
                if (null !== i) {
                    var n = i.evaluate( t )[0];
                    e *= n, t > i.parameterPositions[1] && ( this.stopFading(), 0 === n && ( this.enabled = !1 ) )
                }
            }
            return this._effectiveWeight = e, e
        }, _updateTimeScale: function ( t ) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var i = this._timeScaleInterpolant;
                if (null !== i) e *= i.evaluate( t )[0], t > i.parameterPositions[1] && ( this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e )
            }
            return this._effectiveTimeScale = e, e
        }, _updateTime: function ( t ) {
            var e = this.time + t;
            if (0 === t) return e;
            var i = this._clip.duration, n = this.loop, r = this._loopCount;
            if (2200 === n) {
                -1 === r && ( this._loopCount = 0, this._setEndings( !0, !0, !1 ) );
                t:{
                    if (e >= i) {
                        e = i;
                    } else {
                        if (!( e < 0 )) break t;
                        e = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this._mixer.dispatchEvent( {
                        type: 'finished',
                        action: this,
                        direction: t < 0 ? -1 : 1
                    } )
                }
            } else {
                var a = 2202 === n;
                if (-1 === r && ( t >= 0 ? ( r = 0, this._setEndings( !0, 0 === this.repetitions, a ) ) : this._setEndings( 0 === this.repetitions, !0, a ) ), e >= i || e < 0) {
                    var o = Math.floor( e / i );
                    e -= i * o, r += Math.abs( o );
                    var s = this.repetitions - r;
                    if (s < 0) {
                        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? i : 0, this._mixer.dispatchEvent( {
                            type: 'finished',
                            action: this,
                            direction: t > 0 ? 1 : -1
                        } );
                    } else {
                        if (0 === s) {
                            var c = t < 0;
                            this._setEndings( c, !c, a )
                        } else {
                            this._setEndings( !1, !1, a );
                        }
                        this._loopCount = r, this._mixer.dispatchEvent( { type: 'loop', action: this, loopDelta: o } )
                    }
                }
                if (a && 1 == ( 1 & r )) return this.time = e, i - e
            }
            return this.time = e, e
        }, _setEndings: function ( t, e, i ) {
            var n = this._interpolantSettings;
            i ? ( n.endingStart = 2401, n.endingEnd = 2401 ) : ( n.endingStart = t ? this.zeroSlopeAtStart ? 2401 : oe : 2402, n.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : oe : 2402 )
        }, _scheduleFading: function ( t, e, i ) {
            var n = this._mixer, r = n.time, a = this._weightInterpolant;
            null === a && ( a = n._lendControlInterpolant(), this._weightInterpolant = a );
            var o = a.parameterPositions, s = a.sampleValues;
            return o[0] = r, s[0] = e, o[1] = r + t, s[1] = i, this
        }
    } ), Object.assign( function ( t ) {
        this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }.prototype, i.prototype, {
        _bindAction: function ( t, e ) {
            var i = t._localRoot || this._root, n = t._clip.tracks, r = n.length, a = t._propertyBindings,
                o = t._interpolants, s = i.uuid, c = this._bindingsByRootAndName, h = c[s];
            void 0 === h && ( h = {}, c[s] = h );
            for (var l = 0; l !== r; ++l) {
                var u = n[l], p = u.name, d = h[p];
                if (void 0 !== d) {
                    a[l] = d;
                } else {
                    if (void 0 !== ( d = a[l] )) {
                        null === d._cacheIndex && ( ++d.referenceCount, this._addInactiveBinding( d, s, p ) );
                        continue
                    }
                    var f = e && e._propertyBindings[l].binding.parsedPath;
                    ++( d = new es( ns.create( i, p, f ), u.ValueTypeName, u.getValueSize() ) ).referenceCount, this._addInactiveBinding( d, s, p ), a[l] = d
                }
                o[l].resultBuffer = d.buffer
            }
        }, _activateAction: function ( t ) {
            if (!this._isActiveAction( t )) {
                if (null === t._cacheIndex) {
                    var e = ( t._localRoot || this._root ).uuid, i = t._clip.uuid, n = this._actionsByClip[i];
                    this._bindAction( t, n && n.knownActions[0] ), this._addInactiveAction( t, i, e )
                }
                for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
                    var s = r[a];
                    0 == s.useCount++ && ( this._lendBinding( s ), s.saveOriginalState() )
                }
                this._lendAction( t )
            }
        }, _deactivateAction: function ( t ) {
            if (this._isActiveAction( t )) {
                for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                    var r = e[i];
                    0 == --r.useCount && ( r.restoreOriginalState(), this._takeBackBinding( r ) )
                }
                this._takeBackAction( t )
            }
        }, _initMemoryManager: function () {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    }, get inUse() {
                        return t._nActiveActions
                    }
                }, bindings: {
                    get total() {
                        return t._bindings.length
                    }, get inUse() {
                        return t._nActiveBindings
                    }
                }, controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    }, get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        }, _isActiveAction: function ( t ) {
            var e = t._cacheIndex;
            return null !== e && e < this._nActiveActions
        }, _addInactiveAction: function ( t, e, i ) {
            var n = this._actions, r = this._actionsByClip, a = r[e];
            if (void 0 === a) {
                a = { knownActions: [t], actionByRoot: {} }, t._byClipCacheIndex = 0, r[e] = a;
            } else {
                var o = a.knownActions;
                t._byClipCacheIndex = o.length, o.push( t )
            }
            t._cacheIndex = n.length, n.push( t ), a.actionByRoot[i] = t
        }, _removeInactiveAction: function ( t ) {
            var e = this._actions, i = e[e.length - 1], n = t._cacheIndex;
            i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
            var r = t._clip.uuid, a = this._actionsByClip, o = a[r], s = o.knownActions, c = s[s.length - 1],
                h = t._byClipCacheIndex;
            c._byClipCacheIndex = h, s[h] = c, s.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[( t._localRoot || this._root ).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction( t )
        }, _removeInactiveBindingsForAction: function ( t ) {
            for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                var r = e[i];
                0 == --r.referenceCount && this._removeInactiveBinding( r )
            }
        }, _lendAction: function ( t ) {
            var e = this._actions, i = t._cacheIndex, n = this._nActiveActions++, r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        }, _takeBackAction: function ( t ) {
            var e = this._actions, i = t._cacheIndex, n = --this._nActiveActions, r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        }, _addInactiveBinding: function ( t, e, i ) {
            var n = this._bindingsByRootAndName, r = n[e], a = this._bindings;
            void 0 === r && ( r = {}, n[e] = r ), r[i] = t, t._cacheIndex = a.length, a.push( t )
        }, _removeInactiveBinding: function ( t ) {
            var e = this._bindings, i = t.binding, n = i.rootNode.uuid, r = i.path, a = this._bindingsByRootAndName,
                o = a[n], s = e[e.length - 1], c = t._cacheIndex;
            s._cacheIndex = c, e[c] = s, e.pop(), delete o[r];
            t:{
                for (var h in o) break t;
                delete a[n]
            }
        }, _lendBinding: function ( t ) {
            var e = this._bindings, i = t._cacheIndex, n = this._nActiveBindings++, r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        }, _takeBackBinding: function ( t ) {
            var e = this._bindings, i = t._cacheIndex, n = --this._nActiveBindings, r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        }, _lendControlInterpolant: function () {
            var t = this._controlInterpolants, e = this._nActiveControlInterpolants++, i = t[e];
            return void 0 === i && ( ( i = new Va( new Float32Array( 2 ), new Float32Array( 2 ), 1, this._controlInterpolantsResultBuffer ) ).__cacheIndex = e, t[e] = i ), i
        }, _takeBackControlInterpolant: function ( t ) {
            var e = this._controlInterpolants, i = t.__cacheIndex, n = --this._nActiveControlInterpolants, r = e[n];
            t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
        }, _controlInterpolantsResultBuffer: new Float32Array( 1 ), clipAction: function ( t, e ) {
            var i = e || this._root, n = i.uuid, r = 'string' == typeof t ? eo.findByName( i, t ) : t,
                a = null !== r ? r.uuid : t, o = this._actionsByClip[a], s = null;
            if (void 0 !== o) {
                var c = o.actionByRoot[n];
                if (void 0 !== c) return c;
                s = o.knownActions[0], null === r && ( r = s._clip )
            }
            if (null === r) return null;
            var h = new rs( this, r, e );
            return this._bindAction( h, s ), this._addInactiveAction( h, a, n ), h
        }, existingAction: function ( t, e ) {
            var i = e || this._root, n = i.uuid, r = 'string' == typeof t ? eo.findByName( i, t ) : t,
                a = r ? r.uuid : t, o = this._actionsByClip[a];
            return void 0 !== o && o.actionByRoot[n] || null
        }, stopAllAction: function () {
            var t = this._actions, e = this._nActiveActions, i = this._bindings, n = this._nActiveBindings;
            this._nActiveActions = 0, this._nActiveBindings = 0;
            for (var r = 0; r !== e; ++r) t[r].reset();
            for (r = 0; r !== n; ++r) i[r].useCount = 0;
            return this
        }, update: function ( t ) {
            t *= this.timeScale;
            for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign( t ), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
                e[o]._update( n, t, r, a )
            }
            var s = this._bindings, c = this._nActiveBindings;
            for (o = 0; o !== c; ++o) s[o].apply( a );
            return this
        }, getRoot: function () {
            return this._root
        }, uncacheClip: function ( t ) {
            var e = this._actions, i = t.uuid, n = this._actionsByClip, r = n[i];
            if (void 0 !== r) {
                for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
                    var c = a[o];
                    this._deactivateAction( c );
                    var h = c._cacheIndex, l = e[e.length - 1];
                    c._cacheIndex = null, c._byClipCacheIndex = null, l._cacheIndex = h, e[h] = l, e.pop(), this._removeInactiveBindingsForAction( c )
                }
                delete n[i]
            }
        }, uncacheRoot: function ( t ) {
            var e = t.uuid, i = this._actionsByClip;
            for (var n in i) {
                var r = i[n].actionByRoot[e];
                void 0 !== r && ( this._deactivateAction( r ), this._removeInactiveAction( r ) )
            }
            var a = this._bindingsByRootAndName[e];
            if (void 0 !== a) {
                for (var o in a) {
                    var s = a[o];
                    s.restoreOriginalState(), this._removeInactiveBinding( s )
                }
            }
        }, uncacheAction: function ( t, e ) {
            var i = this.existingAction( t, e );
            null !== i && ( this._deactivateAction( i ), this._removeInactiveAction( i ) )
        }
    } ), as.prototype.clone = function () {
        return new as( void 0 === this.value.clone ? this.value : this.value.clone() )
    }, os.prototype = Object.assign( Object.create( En.prototype ), {
        constructor: os,
        isInstancedBufferGeometry: !0,
        copy: function ( t ) {
            return En.prototype.copy.call( this, t ), this.maxInstancedCount = t.maxInstancedCount, this
        },
        clone: function () {
            return ( new this.constructor ).copy( this )
        }
    } ), Object.defineProperties( ss.prototype, {
        count: {
            get: function () {
                return this.data.count
            }
        }, array: {
            get: function () {
                return this.data.array
            }
        }
    } ), Object.assign( ss.prototype, {
        isInterleavedBufferAttribute: !0, setX: function ( t, e ) {
            return this.data.array[t * this.data.stride + this.offset] = e, this
        }, setY: function ( t, e ) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e, this
        }, setZ: function ( t, e ) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e, this
        }, setW: function ( t, e ) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e, this
        }, getX: function ( t ) {
            return this.data.array[t * this.data.stride + this.offset]
        }, getY: function ( t ) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        }, getZ: function ( t ) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        }, getW: function ( t ) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        }, setXY: function ( t, e, i ) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
        }, setXYZ: function ( t, e, i, n ) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
        }, setXYZW: function ( t, e, i, n, r ) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
        }
    } ), Object.defineProperty( cs.prototype, 'needsUpdate', {
        set: function ( t ) {
            !0 === t && this.version++
        }
    } ), Object.assign( cs.prototype, {
        isInterleavedBuffer: !0, setArray: function ( t ) {
            if (Array.isArray( t )) throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );
            this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t
        }, setDynamic: function ( t ) {
            return this.dynamic = t, this
        }, copy: function ( t ) {
            return this.array = new t.array.constructor( t.array ), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
        }, copyAt: function ( t, e, i ) {
            t *= this.stride, i *= e.stride;
            for (var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
            return this
        }, set: function ( t, e ) {
            return void 0 === e && ( e = 0 ), this.array.set( t, e ), this
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, onUpload: function ( t ) {
            return this.onUploadCallback = t, this
        }
    } ), hs.prototype = Object.assign( Object.create( cs.prototype ), {
        constructor: hs,
        isInstancedInterleavedBuffer: !0,
        copy: function ( t ) {
            return cs.prototype.copy.call( this, t ), this.meshPerAttribute = t.meshPerAttribute, this
        }
    } ), ls.prototype = Object.assign( Object.create( rn.prototype ), {
        constructor: ls,
        isInstancedBufferAttribute: !0,
        copy: function ( t ) {
            return rn.prototype.copy.call( this, t ), this.meshPerAttribute = t.meshPerAttribute, this
        }
    } ), Object.assign( us.prototype, {
        linePrecision: 1, set: function ( t, e ) {
            this.ray.set( t, e )
        }, setFromCamera: function ( t, e ) {
            e && e.isPerspectiveCamera ? ( this.ray.origin.setFromMatrixPosition( e.matrixWorld ), this.ray.direction.set( t.x, t.y, .5 ).unproject( e ).sub( this.ray.origin ).normalize() ) : e && e.isOrthographicCamera ? ( this.ray.origin.set( t.x, t.y, ( e.near + e.far ) / ( e.near - e.far ) ).unproject( e ), this.ray.direction.set( 0, 0, -1 ).transformDirection( e.matrixWorld ) ) : console.error( 'THREE.Raycaster: Unsupported camera type.' )
        }, intersectObject: function ( t, e ) {
            var i = [];
            return ds( t, this, i, e ), i.sort( ps ), i
        }, intersectObjects: function ( t, e ) {
            var i = [];
            if (!1 === Array.isArray( t )) return console.warn( 'THREE.Raycaster.intersectObjects: objects is not an Array.' ), i;
            for (var n = 0, r = t.length; n < r; n++) ds( t[n], this, i, e );
            return i.sort( ps ), i
        }
    } ), Object.assign( function ( t ) {
        this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }.prototype, {
        start: function () {
            this.startTime = ( 'undefined' == typeof performance ? Date : performance ).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
        }, stop: function () {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1
        }, getElapsedTime: function () {
            return this.getDelta(), this.elapsedTime
        }, getDelta: function () {
            var t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                var e = ( 'undefined' == typeof performance ? Date : performance ).now();
                t = ( e - this.oldTime ) / 1e3, this.oldTime = e, this.elapsedTime += t
            }
            return t
        }
    } ), Object.assign( fs.prototype, {
        set: function ( t, e, i ) {
            return this.radius = t, this.phi = e, this.theta = i, this
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
        }, makeSafe: function () {
            return this.phi = Math.max( 1e-6, Math.min( Math.PI - 1e-6, this.phi ) ), this
        }, setFromVector3: function ( t ) {
            return this.radius = t.length(), 0 === this.radius ? ( this.theta = 0, this.phi = 0 ) : ( this.theta = Math.atan2( t.x, t.z ), this.phi = Math.acos( xe.clamp( t.y / this.radius, -1, 1 ) ) ), this
        }
    } ), Object.assign( function ( t, e, i ) {
        return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this
    }.prototype, {
        set: function ( t, e, i ) {
            return this.radius = t, this.theta = e, this.y = i, this
        }, clone: function () {
            return ( new this.constructor ).copy( this )
        }, copy: function ( t ) {
            return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
        }, setFromVector3: function ( t ) {
            return this.radius = Math.sqrt( t.x * t.x + t.z * t.z ), this.theta = Math.atan2( t.x, t.z ), this.y = t.y, this
        }
    } ), ms.prototype = Object.create( Ji.prototype ), ms.prototype.constructor = ms, ms.prototype.isImmediateRenderObject = !0, vs.prototype = Object.create( yr.prototype ), vs.prototype.constructor = vs, vs.prototype.update = function () {
        var t = new Me, e = new Me, i = new Ee;
        return function () {
            var n = ['a', 'b', 'c'];
            this.object.updateMatrixWorld( !0 ), i.getNormalMatrix( this.object.matrixWorld );
            var r = this.object.matrixWorld, a = this.geometry.attributes.position, o = this.object.geometry;
            if (o && o.isGeometry) {
                for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; l < u; l++) {
                    for (var p = c[l], d = 0, f = p.vertexNormals.length; d < f; d++) {
                        var m = s[p[n[d]]], v = p.vertexNormals[d];
                        t.copy( m ).applyMatrix4( r ), e.copy( v ).applyMatrix3( i ).normalize().multiplyScalar( this.size ).add( t ), a.setXYZ( h, t.x, t.y, t.z ), h += 1, a.setXYZ( h, e.x, e.y, e.z ), h += 1
                    }
                }
            } else if (o && o.isBufferGeometry) {
                var g = o.attributes.position, y = o.attributes.normal;
                for (h = 0, d = 0, f = g.count; d < f; d++) t.set( g.getX( d ), g.getY( d ), g.getZ( d ) ).applyMatrix4( r ), e.set( y.getX( d ), y.getY( d ), y.getZ( d ) ), e.applyMatrix3( i ).normalize().multiplyScalar( this.size ).add( t ), a.setXYZ( h, t.x, t.y, t.z ), h += 1, a.setXYZ( h, e.x, e.y, e.z ), h += 1
            }
            a.needsUpdate = !0
        }
    }(), gs.prototype = Object.create( Ji.prototype ), gs.prototype.constructor = gs, gs.prototype.dispose = function () {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    }, gs.prototype.update = function () {
        var t = new Me, e = new Me;
        return function () {
            this.light.updateMatrixWorld();
            var i = this.light.distance ? this.light.distance : 1e3, n = i * Math.tan( this.light.angle );
            this.cone.scale.set( n, n, i ), t.setFromMatrixPosition( this.light.matrixWorld ), e.setFromMatrixPosition( this.light.target.matrixWorld ), this.cone.lookAt( e.sub( t ) ), void 0 !== this.color ? this.cone.material.color.set( this.color ) : this.cone.material.color.copy( this.light.color )
        }
    }(), ys.prototype = Object.create( yr.prototype ), ys.prototype.constructor = ys, ys.prototype.updateMatrixWorld = function () {
        var t = new Me, e = new we, i = new we;
        return function ( n ) {
            var r = this.bones, a = this.geometry, o = a.getAttribute( 'position' );
            i.getInverse( this.root.matrixWorld );
            for (var s = 0, c = 0; s < r.length; s++) {
                var h = r[s];
                h.parent && h.parent.isBone && ( e.multiplyMatrices( i, h.matrixWorld ), t.setFromMatrixPosition( e ), o.setXYZ( c, t.x, t.y, t.z ), e.multiplyMatrices( i, h.parent.matrixWorld ), t.setFromMatrixPosition( e ), o.setXYZ( c + 1, t.x, t.y, t.z ), c += 2 )
            }
            a.getAttribute( 'position' ).needsUpdate = !0, Ji.prototype.updateMatrixWorld.call( this, n )
        }
    }(), xs.prototype = Object.create( On.prototype ), xs.prototype.constructor = xs, xs.prototype.dispose = function () {
        this.geometry.dispose(), this.material.dispose()
    }, xs.prototype.update = function () {
        void 0 !== this.color ? this.material.color.set( this.color ) : this.material.color.copy( this.light.color )
    }, bs.prototype = Object.create( Ji.prototype ), bs.prototype.constructor = bs, bs.prototype.dispose = function () {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, bs.prototype.update = function () {
        var t = .5 * this.light.width, e = .5 * this.light.height, i = this.line.geometry.attributes.position,
            n = i.array;
        n[0] = t, n[1] = -e, n[2] = 0, n[3] = t, n[4] = e, n[5] = 0, n[6] = -t, n[7] = e, n[8] = 0, n[9] = -t, n[10] = -e, n[11] = 0, n[12] = t, n[13] = -e, n[14] = 0, i.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set( this.color ) : this.line.material.color.copy( this.light.color )
    }, ws.prototype = Object.create( Ji.prototype ), ws.prototype.constructor = ws, ws.prototype.dispose = function () {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, ws.prototype.update = function () {
        var t = new Me, e = new yi, i = new yi;
        return function () {
            var n = this.children[0];
            if (void 0 !== this.color) {
                this.material.color.set( this.color );
            } else {
                var r = n.geometry.getAttribute( 'color' );
                e.copy( this.light.color ), i.copy( this.light.groundColor );
                for (var a = 0, o = r.count; a < o; a++) {
                    var s = a < o / 2 ? e : i;
                    r.setXYZ( a, s.r, s.g, s.b )
                }
                r.needsUpdate = !0
            }
            n.lookAt( t.setFromMatrixPosition( this.light.matrixWorld ).negate() )
        }
    }(), _s.prototype = Object.create( yr.prototype ), _s.prototype.constructor = _s, Ms.prototype = Object.create( yr.prototype ), Ms.prototype.constructor = Ms, Es.prototype = Object.create( yr.prototype ), Es.prototype.constructor = Es, Es.prototype.update = function () {
        var t = new Me, e = new Me, i = new Ee;
        return function () {
            this.object.updateMatrixWorld( !0 ), i.getNormalMatrix( this.object.matrixWorld );
            for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; h < l; h++) {
                var u = s[h], p = u.normal;
                t.copy( o[u.a] ).add( o[u.b] ).add( o[u.c] ).divideScalar( 3 ).applyMatrix4( n ), e.copy( p ).applyMatrix3( i ).normalize().multiplyScalar( this.size ).add( t ), r.setXYZ( c, t.x, t.y, t.z ), c += 1, r.setXYZ( c, e.x, e.y, e.z ), c += 1
            }
            r.needsUpdate = !0
        }
    }(), Ts.prototype = Object.create( Ji.prototype ), Ts.prototype.constructor = Ts, Ts.prototype.dispose = function () {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
    }, Ts.prototype.update = function () {
        var t = new Me, e = new Me, i = new Me;
        return function () {
            t.setFromMatrixPosition( this.light.matrixWorld ), e.setFromMatrixPosition( this.light.target.matrixWorld ), i.subVectors( e, t ), this.lightPlane.lookAt( i ), void 0 !== this.color ? ( this.lightPlane.material.color.set( this.color ), this.targetLine.material.color.set( this.color ) ) : ( this.lightPlane.material.color.copy( this.light.color ), this.targetLine.material.color.copy( this.light.color ) ), this.targetLine.lookAt( i ), this.targetLine.scale.z = i.length()
        }
    }(), Ss.prototype = Object.create( yr.prototype ), Ss.prototype.constructor = Ss, Ss.prototype.update = function () {
        var t, e, i = new Me, n = new Ki;

        function r( r, a, o, s ) {
            i.set( a, o, s ).unproject( n );
            var c = e[r];
            if (void 0 !== c) for (var h = t.getAttribute( 'position' ), l = 0, u = c.length; l < u; l++) h.setXYZ( c[l], i.x, i.y, i.z )
        }

        return function () {
            t = this.geometry, e = this.pointMap;
            n.projectionMatrix.copy( this.camera.projectionMatrix ), r( 'c', 0, 0, -1 ), r( 't', 0, 0, 1 ), r( 'n1', -1, -1, -1 ), r( 'n2', 1, -1, -1 ), r( 'n3', -1, 1, -1 ), r( 'n4', 1, 1, -1 ), r( 'f1', -1, -1, 1 ), r( 'f2', 1, -1, 1 ), r( 'f3', -1, 1, 1 ), r( 'f4', 1, 1, 1 ), r( 'u1', .7, 1.1, -1 ), r( 'u2', -.7, 1.1, -1 ), r( 'u3', 0, 2, -1 ), r( 'cf1', -1, 0, 1 ), r( 'cf2', 1, 0, 1 ), r( 'cf3', 0, -1, 1 ), r( 'cf4', 0, 1, 1 ), r( 'cn1', -1, 0, -1 ), r( 'cn2', 1, 0, -1 ), r( 'cn3', 0, -1, -1 ), r( 'cn4', 0, 1, -1 ), t.getAttribute( 'position' ).needsUpdate = !0
        }
    }(), As.prototype = Object.create( yr.prototype ), As.prototype.constructor = As, As.prototype.update = function () {
        var t = new Fi;
        return function ( e ) {
            if (void 0 !== e && console.warn( 'THREE.BoxHelper: .update() has no longer arguments.' ), void 0 !== this.object && t.setFromObject( this.object ), !t.isEmpty()) {
                var i = t.min, n = t.max, r = this.geometry.attributes.position, a = r.array;
                a[0] = n.x, a[1] = n.y, a[2] = n.z, a[3] = i.x, a[4] = n.y, a[5] = n.z, a[6] = i.x, a[7] = i.y, a[8] = n.z, a[9] = n.x, a[10] = i.y, a[11] = n.z, a[12] = n.x, a[13] = n.y, a[14] = i.z, a[15] = i.x, a[16] = n.y, a[17] = i.z, a[18] = i.x, a[19] = i.y, a[20] = i.z, a[21] = n.x, a[22] = i.y, a[23] = i.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }
    }(), As.prototype.setFromObject = function ( t ) {
        return this.object = t, this.update(), this
    }, Ls.prototype = Object.create( yr.prototype ), Ls.prototype.constructor = Ls, Ls.prototype.updateMatrixWorld = function ( t ) {
        var e = this.box;
        e.isEmpty() || ( e.getCenter( this.position ), e.getSize( this.scale ), this.scale.multiplyScalar( .5 ), Ji.prototype.updateMatrixWorld.call( this, t ) )
    }, Rs.prototype = Object.create( gr.prototype ), Rs.prototype.constructor = Rs, Rs.prototype.updateMatrixWorld = function ( t ) {
        var e = -this.plane.constant;
        Math.abs( e ) < 1e-8 && ( e = 1e-8 ), this.scale.set( .5 * this.size, .5 * this.size, e ), this.lookAt( this.plane.normal ), Ji.prototype.updateMatrixWorld.call( this, t )
    }, Ps.prototype = Object.create( Ji.prototype ), Ps.prototype.constructor = Ps, Ps.prototype.setDirection = ( qo = new Me, function ( t ) {
        t.y > .99999 ? this.quaternion.set( 0, 0, 0, 1 ) : t.y < -.99999 ? this.quaternion.set( 1, 0, 0, 0 ) : ( qo.set( t.z, 0, -t.x ).normalize(), Xo = Math.acos( t.y ), this.quaternion.setFromAxisAngle( qo, Xo ) )
    } ), Ps.prototype.setLength = function ( t, e, i ) {
        void 0 === e && ( e = .2 * t ), void 0 === i && ( i = .2 * e ), this.line.scale.set( 1, Math.max( 0, t - e ), 1 ), this.line.updateMatrix(), this.cone.scale.set( i, e, i ), this.cone.position.y = t, this.cone.updateMatrix()
    }, Ps.prototype.setColor = function ( t ) {
        this.line.material.color.copy( t ), this.cone.material.color.copy( t )
    }, Cs.prototype = Object.create( yr.prototype ), Cs.prototype.constructor = Cs;
    var Is = new Me, Os = new Ns, Us = new Ns, Ds = new Ns;

    function Fs( t, e, i, n ) {
        xo.call( this ), this.type = 'CatmullRomCurve3', this.points = t || [], this.closed = e || !1, this.curveType = i || 'centripetal', this.tension = n || .5
    }

    function zs( t, e, i, n ) {
        xo.call( this ), this.type = 'CubicBezierCurve3', this.v0 = t || new Me, this.v1 = e || new Me, this.v2 = i || new Me, this.v3 = n || new Me
    }

    function Bs( t, e, i ) {
        xo.call( this ), this.type = 'QuadraticBezierCurve3', this.v0 = t || new Me, this.v1 = e || new Me, this.v2 = i || new Me
    }

    function ks( t, e ) {
        xo.call( this ), this.type = 'LineCurve3', this.v1 = t || new Me, this.v2 = e || new Me
    }

    function Gs( t, e, i, n, r, a ) {
        _o.call( this, t, e, i, i, n, r, a ), this.type = 'ArcCurve'
    }

    function js( t ) {
        console.warn( 'THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.' ), Fs.call( this, t ), this.type = 'catmullrom'
    }

    Fs.prototype = Object.create( xo.prototype ), Fs.prototype.constructor = Fs, Fs.prototype.isCatmullRomCurve3 = !0, Fs.prototype.getPoint = function ( t, e ) {
        var i, n, r, a, o = e || new Me, s = this.points, c = s.length, h = ( c - ( this.closed ? 0 : 1 ) ) * t,
            l = Math.floor( h ), u = h - l;
        if (this.closed ? l += l > 0 ? 0 : ( Math.floor( Math.abs( l ) / s.length ) + 1 ) * s.length : 0 === u && l === c - 1 && ( l = c - 2, u = 1 ), this.closed || l > 0 ? i = s[( l - 1 ) % c] : ( Is.subVectors( s[0], s[1] ).add( s[0] ), i = Is ), n = s[l % c], r = s[( l + 1 ) % c], this.closed || l + 2 < c ? a = s[( l + 2 ) % c] : ( Is.subVectors( s[c - 1], s[c - 2] ).add( s[c - 1] ), a = Is ), 'centripetal' === this.curveType || 'chordal' === this.curveType) {
            var p = 'chordal' === this.curveType ? .5 : .25, d = Math.pow( i.distanceToSquared( n ), p ),
                f = Math.pow( n.distanceToSquared( r ), p ), m = Math.pow( r.distanceToSquared( a ), p );
            f < 1e-4 && ( f = 1 ), d < 1e-4 && ( d = f ), m < 1e-4 && ( m = f ), Os.initNonuniformCatmullRom( i.x, n.x, r.x, a.x, d, f, m ), Us.initNonuniformCatmullRom( i.y, n.y, r.y, a.y, d, f, m ), Ds.initNonuniformCatmullRom( i.z, n.z, r.z, a.z, d, f, m )
        } else {
            'catmullrom' === this.curveType && ( Os.initCatmullRom( i.x, n.x, r.x, a.x, this.tension ), Us.initCatmullRom( i.y, n.y, r.y, a.y, this.tension ), Ds.initCatmullRom( i.z, n.z, r.z, a.z, this.tension ) );
        }
        return o.set( Os.calc( u ), Us.calc( u ), Ds.calc( u ) ), o
    }, Fs.prototype.copy = function ( t ) {
        xo.prototype.copy.call( this, t ), this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push( n.clone() )
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }, zs.prototype = Object.create( xo.prototype ), zs.prototype.constructor = zs, zs.prototype.isCubicBezierCurve3 = !0, zs.prototype.getPoint = function ( t, e ) {
        var i = e || new Me, n = this.v0, r = this.v1, a = this.v2, o = this.v3;
        return i.set( yo( t, n.x, r.x, a.x, o.x ), yo( t, n.y, r.y, a.y, o.y ), yo( t, n.z, r.z, a.z, o.z ) ), i
    }, zs.prototype.copy = function ( t ) {
        return xo.prototype.copy.call( this, t ), this.v0.copy( t.v0 ), this.v1.copy( t.v1 ), this.v2.copy( t.v2 ), this.v3.copy( t.v3 ), this
    }, Bs.prototype = Object.create( xo.prototype ), Bs.prototype.constructor = Bs, Bs.prototype.isQuadraticBezierCurve3 = !0, Bs.prototype.getPoint = function ( t, e ) {
        var i = e || new Me, n = this.v0, r = this.v1, a = this.v2;
        return i.set( go( t, n.x, r.x, a.x ), go( t, n.y, r.y, a.y ), go( t, n.z, r.z, a.z ) ), i
    }, Bs.prototype.copy = function ( t ) {
        return xo.prototype.copy.call( this, t ), this.v0.copy( t.v0 ), this.v1.copy( t.v1 ), this.v2.copy( t.v2 ), this
    }, ks.prototype = Object.create( xo.prototype ), ks.prototype.constructor = ks, ks.prototype.isLineCurve3 = !0, ks.prototype.getPoint = function ( t, e ) {
        var i = e || new Me;
        return 1 === t ? i.copy( this.v2 ) : ( i.copy( this.v2 ).sub( this.v1 ), i.multiplyScalar( t ).add( this.v1 ) ), i
    }, ks.prototype.getPointAt = function ( t, e ) {
        return this.getPoint( t, e )
    }, ks.prototype.copy = function ( t ) {
        return xo.prototype.copy.call( this, t ), this.v1.copy( t.v1 ), this.v2.copy( t.v2 ), this
    }, Gs.prototype = Object.create( _o.prototype ), Gs.prototype.constructor = Gs, Gs.prototype.isArcCurve = !0, xo.create = function ( t, e ) {
        return console.log( 'THREE.Curve.create() has been deprecated' ), t.prototype = Object.create( xo.prototype ), t.prototype.constructor = t, t.prototype.getPoint = e, t
    }, Object.assign( wo.prototype, {
        createPointsGeometry: function ( t ) {
            console.warn( 'THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.' );
            var e = this.getPoints( t );
            return this.createGeometry( e )
        }, createSpacedPointsGeometry: function ( t ) {
            console.warn( 'THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.' );
            var e = this.getSpacedPoints( t );
            return this.createGeometry( e )
        }, createGeometry: function ( t ) {
            console.warn( 'THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.' );
            for (var e = new nn, i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.vertices.push( new Me( r.x, r.y, r.z || 0 ) )
            }
            return e
        }
    } ), Object.assign( Lo.prototype, {
        fromPoints: function ( t ) {
            console.warn( 'THREE.Path: .fromPoints() has been renamed to .setFromPoints().' ), this.setFromPoints( t )
        }
    } ), js.prototype = Object.create( Fs.prototype ), Object.assign( js.prototype, {
        initFromArray: function () {
            console.error( 'THREE.Spline: .initFromArray() has been removed.' )
        }, getControlPointsArray: function () {
            console.error( 'THREE.Spline: .getControlPointsArray() has been removed.' )
        }, reparametrizeByArcLength: function () {
            console.error( 'THREE.Spline: .reparametrizeByArcLength() has been removed.' )
        }
    } ), _s.prototype.setColors = function () {
        console.error( 'THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.' )
    }, ys.prototype.update = function () {
        console.error( 'THREE.SkeletonHelper: update() no longer needs to be called.' )
    }, Object.assign( Mi.prototype, {
        center: function ( t ) {
            return console.warn( 'THREE.Box2: .center() has been renamed to .getCenter().' ), this.getCenter( t )
        }, empty: function () {
            return console.warn( 'THREE.Box2: .empty() has been renamed to .isEmpty().' ), this.isEmpty()
        }, isIntersectionBox: function ( t ) {
            return console.warn( 'THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().' ), this.intersectsBox( t )
        }, size: function ( t ) {
            return console.warn( 'THREE.Box2: .size() has been renamed to .getSize().' ), this.getSize( t )
        }
    } ), Object.assign( Fi.prototype, {
        center: function ( t ) {
            return console.warn( 'THREE.Box3: .center() has been renamed to .getCenter().' ), this.getCenter( t )
        }, empty: function () {
            return console.warn( 'THREE.Box3: .empty() has been renamed to .isEmpty().' ), this.isEmpty()
        }, isIntersectionBox: function ( t ) {
            return console.warn( 'THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().' ), this.intersectsBox( t )
        }, isIntersectionSphere: function ( t ) {
            return console.warn( 'THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().' ), this.intersectsSphere( t )
        }, size: function ( t ) {
            return console.warn( 'THREE.Box3: .size() has been renamed to .getSize().' ), this.getSize( t )
        }
    } ), Nn.prototype.center = function ( t ) {
        return console.warn( 'THREE.Line3: .center() has been renamed to .getCenter().' ), this.getCenter( t )
    }, Object.assign( xe, {
        random16: function () {
            return console.warn( 'THREE.Math: .random16() has been deprecated. Use Math.random() instead.' ), Math.random()
        }, nearestPowerOfTwo: function ( t ) {
            return console.warn( 'THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().' ), xe.floorPowerOfTwo( t )
        }, nextPowerOfTwo: function ( t ) {
            return console.warn( 'THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().' ), xe.ceilPowerOfTwo( t )
        }
    } ), Object.assign( Ee.prototype, {
        flattenToArrayOffset: function ( t, e ) {
            return console.warn( 'THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.' ), this.toArray( t, e )
        }, multiplyVector3: function ( t ) {
            return console.warn( 'THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.' ), t.applyMatrix3( this )
        }, multiplyVector3Array: function () {
            console.error( 'THREE.Matrix3: .multiplyVector3Array() has been removed.' )
        }, applyToBuffer: function ( t ) {
            return console.warn( 'THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.' ), this.applyToBufferAttribute( t )
        }, applyToVector3Array: function () {
            console.error( 'THREE.Matrix3: .applyToVector3Array() has been removed.' )
        }
    } ), Object.assign( we.prototype, {
        extractPosition: function ( t ) {
            return console.warn( 'THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().' ), this.copyPosition( t )
        }, flattenToArrayOffset: function ( t, e ) {
            return console.warn( 'THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.' ), this.toArray( t, e )
        }, getPosition: function () {
            var t;
            return function () {
                return void 0 === t && ( t = new Me ), console.warn( 'THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.' ), t.setFromMatrixColumn( this, 3 )
            }
        }(), setRotationFromQuaternion: function ( t ) {
            return console.warn( 'THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().' ), this.makeRotationFromQuaternion( t )
        }, multiplyToArray: function () {
            console.warn( 'THREE.Matrix4: .multiplyToArray() has been removed.' )
        }, multiplyVector3: function ( t ) {
            return console.warn( 'THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.' ), t.applyMatrix4( this )
        }, multiplyVector4: function ( t ) {
            return console.warn( 'THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.' ), t.applyMatrix4( this )
        }, multiplyVector3Array: function () {
            console.error( 'THREE.Matrix4: .multiplyVector3Array() has been removed.' )
        }, rotateAxis: function ( t ) {
            console.warn( 'THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.' ), t.transformDirection( this )
        }, crossVector: function ( t ) {
            return console.warn( 'THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.' ), t.applyMatrix4( this )
        }, translate: function () {
            console.error( 'THREE.Matrix4: .translate() has been removed.' )
        }, rotateX: function () {
            console.error( 'THREE.Matrix4: .rotateX() has been removed.' )
        }, rotateY: function () {
            console.error( 'THREE.Matrix4: .rotateY() has been removed.' )
        }, rotateZ: function () {
            console.error( 'THREE.Matrix4: .rotateZ() has been removed.' )
        }, rotateByAxis: function () {
            console.error( 'THREE.Matrix4: .rotateByAxis() has been removed.' )
        }, applyToBuffer: function ( t ) {
            return console.warn( 'THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.' ), this.applyToBufferAttribute( t )
        }, applyToVector3Array: function () {
            console.error( 'THREE.Matrix4: .applyToVector3Array() has been removed.' )
        }, makeFrustum: function ( t, e, i, n, r, a ) {
            return console.warn( 'THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.' ), this.makePerspective( t, e, n, i, r, a )
        }
    } ), Bi.prototype.isIntersectionLine = function ( t ) {
        return console.warn( 'THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().' ), this.intersectsLine( t )
    }, _e.prototype.multiplyVector3 = function ( t ) {
        return console.warn( 'THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.' ), t.applyQuaternion( this )
    }, Object.assign( Cn.prototype, {
        isIntersectionBox: function ( t ) {
            return console.warn( 'THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().' ), this.intersectsBox( t )
        }, isIntersectionPlane: function ( t ) {
            return console.warn( 'THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().' ), this.intersectsPlane( t )
        }, isIntersectionSphere: function ( t ) {
            return console.warn( 'THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().' ), this.intersectsSphere( t )
        }
    } ), Object.assign( Ro.prototype, {
        extractAllPoints: function ( t ) {
            return console.warn( 'THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.' ), this.extractPoints( t )
        }, extrude: function ( t ) {
            return console.warn( 'THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.' ), new Xr( this, t )
        }, makeGeometry: function ( t ) {
            return console.warn( 'THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.' ), new ia( this, t )
        }
    } ), Object.assign( be.prototype, {
        fromAttribute: function ( t, e, i ) {
            return console.warn( 'THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().' ), this.fromBufferAttribute( t, e, i )
        }, distanceToManhattan: function ( t ) {
            return console.warn( 'THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().' ), this.manhattanDistanceTo( t )
        }, lengthManhattan: function () {
            return console.warn( 'THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().' ), this.manhattanLength()
        }
    } ), Object.assign( Me.prototype, {
        setEulerFromRotationMatrix: function () {
            console.error( 'THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.' )
        }, setEulerFromQuaternion: function () {
            console.error( 'THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.' )
        }, getPositionFromMatrix: function ( t ) {
            return console.warn( 'THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().' ), this.setFromMatrixPosition( t )
        }, getScaleFromMatrix: function ( t ) {
            return console.warn( 'THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().' ), this.setFromMatrixScale( t )
        }, getColumnFromMatrix: function ( t, e ) {
            return console.warn( 'THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().' ), this.setFromMatrixColumn( e, t )
        }, applyProjection: function ( t ) {
            return console.warn( 'THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.' ), this.applyMatrix4( t )
        }, fromAttribute: function ( t, e, i ) {
            return console.warn( 'THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().' ), this.fromBufferAttribute( t, e, i )
        }, distanceToManhattan: function ( t ) {
            return console.warn( 'THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().' ), this.manhattanDistanceTo( t )
        }, lengthManhattan: function () {
            return console.warn( 'THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().' ), this.manhattanLength()
        }
    } ), Object.assign( Ae.prototype, {
        fromAttribute: function ( t, e, i ) {
            return console.warn( 'THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().' ), this.fromBufferAttribute( t, e, i )
        }, lengthManhattan: function () {
            return console.warn( 'THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().' ), this.manhattanLength()
        }
    } ), nn.prototype.computeTangents = function () {
        console.warn( 'THREE.Geometry: .computeTangents() has been removed.' )
    }, Object.assign( Ji.prototype, {
        getChildByName: function ( t ) {
            return console.warn( 'THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().' ), this.getObjectByName( t )
        }, renderDepth: function () {
            console.warn( 'THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.' )
        }, translate: function ( t, e ) {
            return console.warn( 'THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.' ), this.translateOnAxis( e, t )
        }
    } ), Object.defineProperties( Ji.prototype, {
        eulerOrder: {
            get: function () {
                return console.warn( 'THREE.Object3D: .eulerOrder is now .rotation.order.' ), this.rotation.order
            }, set: function ( t ) {
                console.warn( 'THREE.Object3D: .eulerOrder is now .rotation.order.' ), this.rotation.order = t
            }
        }, useQuaternion: {
            get: function () {
                console.warn( 'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' )
            }, set: function () {
                console.warn( 'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' )
            }
        }
    } ), Object.defineProperties( pr.prototype, {
        objects: {
            get: function () {
                return console.warn( 'THREE.LOD: .objects has been renamed to .levels.' ), this.levels
            }
        }
    } ), Object.defineProperty( dr.prototype, 'useVertexTexture', {
        get: function () {
            console.warn( 'THREE.Skeleton: useVertexTexture has been removed.' )
        }, set: function () {
            console.warn( 'THREE.Skeleton: useVertexTexture has been removed.' )
        }
    } ), Object.defineProperty( xo.prototype, '__arcLengthDivisions', {
        get: function () {
            return console.warn( 'THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.' ), this.arcLengthDivisions
        }, set: function ( t ) {
            console.warn( 'THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.' ), this.arcLengthDivisions = t
        }
    } ), nr.prototype.setLens = function ( t, e ) {
        console.warn( 'THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.' ), void 0 !== e && ( this.filmGauge = e ), this.setFocalLength( t )
    }, Object.defineProperties( Pa.prototype, {
        onlyShadow: {
            set: function () {
                console.warn( 'THREE.Light: .onlyShadow has been removed.' )
            }
        }, shadowCameraFov: {
            set: function ( t ) {
                console.warn( 'THREE.Light: .shadowCameraFov is now .shadow.camera.fov.' ), this.shadow.camera.fov = t
            }
        }, shadowCameraLeft: {
            set: function ( t ) {
                console.warn( 'THREE.Light: .shadowCameraLeft is now .shadow.camera.left.' ), this.shadow.camera.left = t
            }
        }, shadowCameraRight: {
            set: function ( t ) {
                console.warn( 'THREE.Light: .shadowCameraRight is now .shadow.camera.right.' ), this.shadow.camera.right = t
            }
        }, shadowCameraTop: {
            set: function ( t ) {
                console.warn( 'THREE.Light: .shadowCameraTop is now .shadow.camera.top.' ), this.shadow.camera.top = t
            }
        }, shadowCameraBottom: {
            set: function ( t ) {
                console.warn( 'THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.' ), this.shadow.camera.bottom = t
            }
        }, shadowCameraNear: {
            set: function ( t ) {
                console.warn( 'THREE.Light: .shadowCameraNear is now .shadow.camera.near.' ), this.shadow.camera.near = t
            }
        }, shadowCameraFar: {
            set: function ( t ) {
                console.warn( 'THREE.Light: .shadowCameraFar is now .shadow.camera.far.' ), this.shadow.camera.far = t
            }
        }, shadowCameraVisible: {
            set: function () {
                console.warn( 'THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.' )
            }
        }, shadowBias: {
            set: function ( t ) {
                console.warn( 'THREE.Light: .shadowBias is now .shadow.bias.' ), this.shadow.bias = t
            }
        }, shadowDarkness: {
            set: function () {
                console.warn( 'THREE.Light: .shadowDarkness has been removed.' )
            }
        }, shadowMapWidth: {
            set: function ( t ) {
                console.warn( 'THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.' ), this.shadow.mapSize.width = t
            }
        }, shadowMapHeight: {
            set: function ( t ) {
                console.warn( 'THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.' ), this.shadow.mapSize.height = t
            }
        }
    } ), Object.defineProperties( rn.prototype, {
        length: {
            get: function () {
                return console.warn( 'THREE.BufferAttribute: .length has been deprecated. Use .count instead.' ), this.array.length
            }
        }
    } ), Object.assign( En.prototype, {
        addIndex: function ( t ) {
            console.warn( 'THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().' ), this.setIndex( t )
        }, addDrawCall: function ( t, e, i ) {
            void 0 !== i && console.warn( 'THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.' ), console.warn( 'THREE.BufferGeometry: .addDrawCall() is now .addGroup().' ), this.addGroup( t, e )
        }, clearDrawCalls: function () {
            console.warn( 'THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().' ), this.clearGroups()
        }, computeTangents: function () {
            console.warn( 'THREE.BufferGeometry: .computeTangents() has been removed.' )
        }, computeOffsets: function () {
            console.warn( 'THREE.BufferGeometry: .computeOffsets() has been removed.' )
        }
    } ), Object.defineProperties( En.prototype, {
        drawcalls: {
            get: function () {
                return console.error( 'THREE.BufferGeometry: .drawcalls has been renamed to .groups.' ), this.groups
            }
        }, offsets: {
            get: function () {
                return console.warn( 'THREE.BufferGeometry: .offsets has been renamed to .groups.' ), this.groups
            }
        }
    } ), Object.defineProperties( as.prototype, {
        dynamic: {
            set: function () {
                console.warn( 'THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.' )
            }
        }, onUpdate: {
            value: function () {
                return console.warn( 'THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.' ), this
            }
        }
    } ), Object.defineProperties( Oi.prototype, {
        wrapAround: {
            get: function () {
                console.warn( 'THREE.Material: .wrapAround has been removed.' )
            }, set: function () {
                console.warn( 'THREE.Material: .wrapAround has been removed.' )
            }
        }, wrapRGB: {
            get: function () {
                return console.warn( 'THREE.Material: .wrapRGB has been removed.' ), new yi
            }
        }, shading: {
            get: function () {
                console.error( 'THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.' )
            }, set: function ( t ) {
                console.warn( 'THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.' ), this.flatShading = 1 === t
            }
        }
    } ), Object.defineProperties( va.prototype, {
        metal: {
            get: function () {
                return console.warn( 'THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.' ), !1
            }, set: function () {
                console.warn( 'THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead' )
            }
        }
    } ), Object.defineProperties( Pn.prototype, {
        derivatives: {
            get: function () {
                return console.warn( 'THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.' ), this.extensions.derivatives
            }, set: function ( t ) {
                console.warn( 'THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.' ), this.extensions.derivatives = t
            }
        }
    } ), Object.assign( ar.prototype, {
        getCurrentRenderTarget: function () {
            return console.warn( 'THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().' ), this.getRenderTarget()
        }, getMaxAnisotropy: function () {
            return console.warn( 'THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().' ), this.capabilities.getMaxAnisotropy()
        }, getPrecision: function () {
            return console.warn( 'THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.' ), this.capabilities.precision
        }, resetGLState: function () {
            return console.warn( 'THREE.WebGLRenderer: .resetGLState() is now .state.reset().' ), this.state.reset()
        }, supportsFloatTextures: function () {
            return console.warn( 'THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( \'OES_texture_float\' ).' ), this.extensions.get( 'OES_texture_float' )
        }, supportsHalfFloatTextures: function () {
            return console.warn( 'THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( \'OES_texture_half_float\' ).' ), this.extensions.get( 'OES_texture_half_float' )
        }, supportsStandardDerivatives: function () {
            return console.warn( 'THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( \'OES_standard_derivatives\' ).' ), this.extensions.get( 'OES_standard_derivatives' )
        }, supportsCompressedTextureS3TC: function () {
            return console.warn( 'THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( \'WEBGL_compressed_texture_s3tc\' ).' ), this.extensions.get( 'WEBGL_compressed_texture_s3tc' )
        }, supportsCompressedTexturePVRTC: function () {
            return console.warn( 'THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( \'WEBGL_compressed_texture_pvrtc\' ).' ), this.extensions.get( 'WEBGL_compressed_texture_pvrtc' )
        }, supportsBlendMinMax: function () {
            return console.warn( 'THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( \'EXT_blend_minmax\' ).' ), this.extensions.get( 'EXT_blend_minmax' )
        }, supportsVertexTextures: function () {
            return console.warn( 'THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.' ), this.capabilities.vertexTextures
        }, supportsInstancedArrays: function () {
            return console.warn( 'THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( \'ANGLE_instanced_arrays\' ).' ), this.extensions.get( 'ANGLE_instanced_arrays' )
        }, enableScissorTest: function ( t ) {
            console.warn( 'THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().' ), this.setScissorTest( t )
        }, initMaterial: function () {
            console.warn( 'THREE.WebGLRenderer: .initMaterial() has been removed.' )
        }, addPrePlugin: function () {
            console.warn( 'THREE.WebGLRenderer: .addPrePlugin() has been removed.' )
        }, addPostPlugin: function () {
            console.warn( 'THREE.WebGLRenderer: .addPostPlugin() has been removed.' )
        }, updateShadowMap: function () {
            console.warn( 'THREE.WebGLRenderer: .updateShadowMap() has been removed.' )
        }
    } ), Object.defineProperties( ar.prototype, {
        shadowMapEnabled: {
            get: function () {
                return this.shadowMap.enabled
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.' ), this.shadowMap.enabled = t
            }
        }, shadowMapType: {
            get: function () {
                return this.shadowMap.type
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.' ), this.shadowMap.type = t
            }
        }, shadowMapCullFace: {
            get: function () {
                return this.shadowMap.cullFace
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.' ), this.shadowMap.cullFace = t
            }
        }
    } ), Object.defineProperties( Gi.prototype, {
        cullFace: {
            get: function () {
                return this.renderReverseSided ? w : b
            }, set: function ( t ) {
                var e = t !== b;
                console.warn( 'WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to ' + e + '.' ), this.renderReverseSided = e
            }
        }
    } ), Object.defineProperties( Le.prototype, {
        wrapS: {
            get: function () {
                return console.warn( 'THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.' ), this.texture.wrapS
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.' ), this.texture.wrapS = t
            }
        }, wrapT: {
            get: function () {
                return console.warn( 'THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.' ), this.texture.wrapT
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.' ), this.texture.wrapT = t
            }
        }, magFilter: {
            get: function () {
                return console.warn( 'THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.' ), this.texture.magFilter
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.' ), this.texture.magFilter = t
            }
        }, minFilter: {
            get: function () {
                return console.warn( 'THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.' ), this.texture.minFilter
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.' ), this.texture.minFilter = t
            }
        }, anisotropy: {
            get: function () {
                return console.warn( 'THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.' ), this.texture.anisotropy
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.' ), this.texture.anisotropy = t
            }
        }, offset: {
            get: function () {
                return console.warn( 'THREE.WebGLRenderTarget: .offset is now .texture.offset.' ), this.texture.offset
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderTarget: .offset is now .texture.offset.' ), this.texture.offset = t
            }
        }, repeat: {
            get: function () {
                return console.warn( 'THREE.WebGLRenderTarget: .repeat is now .texture.repeat.' ), this.texture.repeat
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderTarget: .repeat is now .texture.repeat.' ), this.texture.repeat = t
            }
        }, format: {
            get: function () {
                return console.warn( 'THREE.WebGLRenderTarget: .format is now .texture.format.' ), this.texture.format
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderTarget: .format is now .texture.format.' ), this.texture.format = t
            }
        }, type: {
            get: function () {
                return console.warn( 'THREE.WebGLRenderTarget: .type is now .texture.type.' ), this.texture.type
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderTarget: .type is now .texture.type.' ), this.texture.type = t
            }
        }, generateMipmaps: {
            get: function () {
                return console.warn( 'THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.' ), this.texture.generateMipmaps
            }, set: function ( t ) {
                console.warn( 'THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.' ), this.texture.generateMipmaps = t
            }
        }
    } ), Qo.prototype.load = function ( t ) {
        console.warn( 'THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.' );
        var e = this;
        return ( new Zo ).load( t, function ( t ) {
            e.setBuffer( t )
        } ), this
    }, ts.prototype.getData = function () {
        return console.warn( 'THREE.AudioAnalyser: .getData() is now .getFrequencyData().' ), this.getFrequencyData()
    }, Jo.prototype.updateCubeMap = function ( t, e ) {
        return console.warn( 'THREE.CubeCamera: .updateCubeMap() is now .update().' ), this.update( t, e )
    };
    var Hs = /^[og]\s*(.+)?/, Vs = /^mtllib /, Ws = /^usemtl /;

    function Xs( t ) {
        this.manager = void 0 !== t ? t : Ea, this.materials = null
    }

    Xs.prototype = {
        constructor: Xs, load: function ( t, e, i, n ) {
            var r = this, a = new Sa( r.manager );
            a.setPath( this.path ), a.load( t, function ( t ) {
                e( r.parse( t ) )
            }, i, n )
        }, setPath: function ( t ) {
            this.path = t
        }, setMaterials: function ( t ) {
            return this.materials = t, this
        }, parse: function ( t ) {
            console.time( 'OBJLoader' );
            var e = new function () {
                var t = {
                    objects: [],
                    object: {},
                    vertices: [],
                    normals: [],
                    colors: [],
                    uvs: [],
                    materialLibraries: [],
                    startObject: function ( t, e ) {
                        if (this.object && !1 === this.object.fromDeclaration) return this.object.name = t, void ( this.object.fromDeclaration = !1 !== e );
                        var i = this.object && 'function' == typeof this.object.currentMaterial ? this.object.currentMaterial() : void 0;
                        if (this.object && 'function' == typeof this.object._finalize && this.object._finalize( !0 ), this.object = {
                            name: t || '',
                            fromDeclaration: !1 !== e,
                            geometry: { vertices: [], normals: [], colors: [], uvs: [] },
                            materials: [],
                            smooth: !0,
                            startMaterial: function ( t, e ) {
                                var i = this._finalize( !1 );
                                i && ( i.inherited || i.groupCount <= 0 ) && this.materials.splice( i.index, 1 );
                                var n = {
                                    index: this.materials.length,
                                    name: t || '',
                                    mtllib: Array.isArray( e ) && e.length > 0 ? e[e.length - 1] : '',
                                    smooth: void 0 !== i ? i.smooth : this.smooth,
                                    groupStart: void 0 !== i ? i.groupEnd : 0,
                                    groupEnd: -1,
                                    groupCount: -1,
                                    inherited: !1,
                                    clone: function ( t ) {
                                        var e = {
                                            index: 'number' == typeof t ? t : this.index,
                                            name: this.name,
                                            mtllib: this.mtllib,
                                            smooth: this.smooth,
                                            groupStart: 0,
                                            groupEnd: -1,
                                            groupCount: -1,
                                            inherited: !1
                                        };
                                        return e.clone = this.clone.bind( e ), e
                                    }
                                };
                                return this.materials.push( n ), n
                            },
                            currentMaterial: function () {
                                if (this.materials.length > 0) return this.materials[this.materials.length - 1]
                            },
                            _finalize: function ( t ) {
                                var e = this.currentMaterial();
                                if (e && -1 === e.groupEnd && ( e.groupEnd = this.geometry.vertices.length / 3, e.groupCount = e.groupEnd - e.groupStart, e.inherited = !1 ), t && this.materials.length > 1) for (var i = this.materials.length - 1; i >= 0; i--) this.materials[i].groupCount <= 0 && this.materials.splice( i, 1 );
                                return t && 0 === this.materials.length && this.materials.push( {
                                    name: '',
                                    smooth: this.smooth
                                } ), e
                            }
                        }, i && i.name && 'function' == typeof i.clone) {
                            var n = i.clone( 0 );
                            n.inherited = !0, this.object.materials.push( n )
                        }
                        this.objects.push( this.object )
                    },
                    finalize: function () {
                        this.object && 'function' == typeof this.object._finalize && this.object._finalize( !0 )
                    },
                    parseVertexIndex: function ( t, e ) {
                        var i = parseInt( t, 10 );
                        return 3 * ( i >= 0 ? i - 1 : i + e / 3 )
                    },
                    parseNormalIndex: function ( t, e ) {
                        var i = parseInt( t, 10 );
                        return 3 * ( i >= 0 ? i - 1 : i + e / 3 )
                    },
                    parseUVIndex: function ( t, e ) {
                        var i = parseInt( t, 10 );
                        return 2 * ( i >= 0 ? i - 1 : i + e / 2 )
                    },
                    addVertex: function ( t, e, i ) {
                        var n = this.vertices, r = this.object.geometry.vertices;
                        r.push( n[t + 0], n[t + 1], n[t + 2] ), r.push( n[e + 0], n[e + 1], n[e + 2] ), r.push( n[i + 0], n[i + 1], n[i + 2] )
                    },
                    addVertexLine: function ( t ) {
                        var e = this.vertices;
                        this.object.geometry.vertices.push( e[t + 0], e[t + 1], e[t + 2] )
                    },
                    addNormal: function ( t, e, i ) {
                        var n = this.normals, r = this.object.geometry.normals;
                        r.push( n[t + 0], n[t + 1], n[t + 2] ), r.push( n[e + 0], n[e + 1], n[e + 2] ), r.push( n[i + 0], n[i + 1], n[i + 2] )
                    },
                    addColor: function ( t, e, i ) {
                        var n = this.colors, r = this.object.geometry.colors;
                        r.push( n[t + 0], n[t + 1], n[t + 2] ), r.push( n[e + 0], n[e + 1], n[e + 2] ), r.push( n[i + 0], n[i + 1], n[i + 2] )
                    },
                    addUV: function ( t, e, i ) {
                        var n = this.uvs, r = this.object.geometry.uvs;
                        r.push( n[t + 0], n[t + 1] ), r.push( n[e + 0], n[e + 1] ), r.push( n[i + 0], n[i + 1] )
                    },
                    addUVLine: function ( t ) {
                        var e = this.uvs;
                        this.object.geometry.uvs.push( e[t + 0], e[t + 1] )
                    },
                    addFace: function ( t, e, i, n, r, a, o, s, c ) {
                        var h = this.vertices.length, l = this.parseVertexIndex( t, h ),
                            u = this.parseVertexIndex( e, h ), p = this.parseVertexIndex( i, h );
                        if (this.addVertex( l, u, p ), void 0 !== n) {
                            var d = this.uvs.length;
                            l = this.parseUVIndex( n, d ), u = this.parseUVIndex( r, d ), p = this.parseUVIndex( a, d ), this.addUV( l, u, p )
                        }
                        if (void 0 !== o) {
                            var f = this.normals.length;
                            l = this.parseNormalIndex( o, f ), u = o === s ? l : this.parseNormalIndex( s, f ), p = o === c ? l : this.parseNormalIndex( c, f ), this.addNormal( l, u, p )
                        }
                        this.colors.length > 0 && this.addColor( l, u, p )
                    },
                    addLineGeometry: function ( t, e ) {
                        this.object.geometry.type = 'Line';
                        for (var i = this.vertices.length, n = this.uvs.length, r = 0, a = t.length; r < a; r++) this.addVertexLine( this.parseVertexIndex( t[r], i ) );
                        var o = 0;
                        for (a = e.length; o < a; o++) this.addUVLine( this.parseUVIndex( e[o], n ) )
                    }
                };
                return t.startObject( '', !1 ), t
            };
            -1 !== t.indexOf( '\r\n' ) && ( t = t.replace( /\r\n/g, '\n' ) ), -1 !== t.indexOf( '\\\n' ) && ( t = t.replace( /\\\n/g, '' ) );
            for (var i = t.split( '\n' ), n = '', r = '', a = [], o = 'function' == typeof ''.trimLeft, s = 0, c = i.length; s < c; s++) {
                if (n = i[s], 0 !== ( n = o ? n.trimLeft() : n.trim() ).length && '#' !== ( r = n.charAt( 0 ) )) {
                    if ('v' === r) {
                        var h = n.split( /\s+/ );
                        switch (h[0]) {
                            case'v':
                                e.vertices.push( parseFloat( h[1] ), parseFloat( h[2] ), parseFloat( h[3] ) ), 8 === h.length && e.colors.push( parseFloat( h[4] ), parseFloat( h[5] ), parseFloat( h[6] ) );
                                break;
                            case'vn':
                                e.normals.push( parseFloat( h[1] ), parseFloat( h[2] ), parseFloat( h[3] ) );
                                break;
                            case'vt':
                                e.uvs.push( parseFloat( h[1] ), parseFloat( h[2] ) )
                        }
                    } else if ('f' === r) {
                        for (var l = n.substr( 1 ).trim().split( /\s+/ ), u = [], p = 0, d = l.length; p < d; p++) {
                            var f = l[p];
                            if (f.length > 0) {
                                var m = f.split( '/' );
                                u.push( m )
                            }
                        }
                        var v = u[0];
                        for (p = 1, d = u.length - 1; p < d; p++) {
                            var g = u[p], y = u[p + 1];
                            e.addFace( v[0], g[0], y[0], v[1], g[1], y[1], v[2], g[2], y[2] )
                        }
                    } else if ('l' === r) {
                        var x = n.substring( 1 ).trim().split( ' ' ), b = [], w = [];
                        if (-1 === n.indexOf( '/' )) {
                            b = x;
                        } else {
                            for (var _ = 0, M = x.length; _ < M; _++) {
                                var E = x[_].split( '/' );
                                '' !== E[0] && b.push( E[0] ), '' !== E[1] && w.push( E[1] )
                            }
                        }
                        e.addLineGeometry( b, w )
                    } else if (null !== ( a = Hs.exec( n ) )) {
                        var T = ( ' ' + a[0].substr( 1 ).trim() ).substr( 1 );
                        e.startObject( T )
                    } else if (Ws.test( n )) {
                        e.object.startMaterial( n.substring( 7 ).trim(), e.materialLibraries );
                    } else if (Vs.test( n )) {
                        e.materialLibraries.push( n.substring( 7 ).trim() );
                    } else {
                        if ('s' !== r) {
                            if ('\0' === n) continue;
                            throw new Error( 'OBJLoader: Unexpected line: "' + n + '"' )
                        }
                        if (( a = n.split( ' ' ) ).length > 1) {
                            var S = a[1].trim().toLowerCase();
                            e.object.smooth = '0' !== S && 'off' !== S
                        } else {
                            e.object.smooth = !0;
                        }
                        ( z = e.object.currentMaterial() ) && ( z.smooth = e.object.smooth )
                    }
                }
            }
            e.finalize();
            var A = new _r;
            A.materialLibraries = [].concat( e.materialLibraries );
            for (s = 0, c = e.objects.length; s < c; s++) {
                var L = e.objects[s], R = L.geometry, P = L.materials, C = 'Line' === R.type;
                if (0 !== R.vertices.length) {
                    var N = new En;
                    N.addAttribute( 'position', new pn( R.vertices, 3 ) ), R.normals.length > 0 ? N.addAttribute( 'normal', new pn( R.normals, 3 ) ) : N.computeVertexNormals(), R.colors.length > 0 && N.addAttribute( 'color', new pn( R.colors, 3 ) ), R.uvs.length > 0 && N.addAttribute( 'uv', new pn( R.uvs, 2 ) );
                    for (var I, O = [], U = 0, D = P.length; U < D; U++) {
                        var F = P[U], z = void 0;
                        if (null !== this.materials && ( z = this.materials.create( F.name ), C && z && !( z instanceof vr ) )) {
                            var B = new vr;
                            B.copy( z ), z = B
                        }
                        z || ( ( z = C ? new vr : new va ).name = F.name ), z.flatShading = !F.smooth, O.push( z )
                    }
                    if (O.length > 1) {
                        for (U = 0, D = P.length; U < D; U++) {
                            F = P[U];
                            N.addGroup( F.groupStart, F.groupCount, U )
                        }
                        I = C ? new yr( N, O ) : new On( N, O )
                    } else {
                        I = C ? new yr( N, O[0] ) : new On( N, O[0] );
                    }
                    I.name = L.name, A.add( I )
                }
            }
            return console.timeEnd( 'OBJLoader' ), A
        }
    };
    var qs = function t() {
        this._parser = t.parse
    };
    ( qs.prototype = Object.create( Aa.prototype ) ).constructor = qs, qs.parse = function ( t, e ) {
        var i = { mipmaps: [], width: 0, height: 0, format: null, mipmapCount: 1 };

        function n( t ) {
            return t.charCodeAt( 0 ) + ( t.charCodeAt( 1 ) << 8 ) + ( t.charCodeAt( 2 ) << 16 ) + ( t.charCodeAt( 3 ) << 24 )
        }

        function r( t, e, i, n ) {
            for (var r = i * n * 4, a = new Uint8Array( t, e, r ), o = new Uint8Array( r ), s = 0, c = 0, h = 0; h < n; h++) {
                for (var l = 0; l < i; l++) {
                    var u = a[c], p = a[++c], d = a[++c], f = a[++c];
                    c++, o[s] = d, o[++s] = p, o[++s] = u, o[++s] = f, s++
                }
            }
            return o
        }

        var a, o = n( 'DXT1' ), s = n( 'DXT3' ), c = n( 'DXT5' ), h = n( 'ETC1' ), l = new Int32Array( t, 0, 31 );
        if (542327876 !== l[0]) return console.error( 'DDSLoader.parse: Invalid magic number in DDS header.' ), i;
        if (4 & !l[20]) return console.error( 'DDSLoader.parse: Unsupported format, must contain a FourCC code.' ), i;
        var u, p = l[21], d = !1;
        switch (p) {
            case o:
                a = 8, i.format = Jt;
                break;
            case s:
                a = 16, i.format = Qt;
                break;
            case c:
                a = 16, i.format = $t;
                break;
            case h:
                a = 8, i.format = re;
                break;
            default:
                if (!( 32 === l[22] && 16711680 & l[23] && 65280 & l[24] && 255 & l[25] && 4278190080 & l[26] )) return console.error( 'DDSLoader.parse: Unsupported FourCC code ', ( u = p, String.fromCharCode( 255 & u, u >> 8 & 255, u >> 16 & 255, u >> 24 & 255 ) ) ), i;
                d = !0, a = 64, i.format = Wt
        }
        i.mipmapCount = 1, 131072 & l[2] && !1 !== e && ( i.mipmapCount = Math.max( 1, l[7] ) );
        var f = l[28];
        if (i.isCubemap = !!( 512 & f ), i.isCubemap && ( !( 1024 & f ) || !( 2048 & f ) || !( 4096 & f ) || !( 8192 & f ) || !( 16384 & f ) || !( 32768 & f ) )) return console.error( 'DDSLoader.parse: Incomplete cubemap faces' ), i;
        i.width = l[4], i.height = l[3];
        for (var m = l[1] + 4, v = i.isCubemap ? 6 : 1, g = 0; g < v; g++) {
            for (var y = i.width, x = i.height, b = 0; b < i.mipmapCount; b++) {
                if (d) {
                    var w = ( _ = r( t, m, y, x ) ).length;
                } else {
                    w = Math.max( 4, y ) / 4 * Math.max( 4, x ) / 4 * a;
                    var _ = new Uint8Array( t, m, w )
                }
                var M = { data: _, width: y, height: x };
                i.mipmaps.push( M ), m += w, y = Math.max( y >> 1, 1 ), x = Math.max( x >> 1, 1 )
            }
        }
        return i
    };
    var Ys = ho.Handlers;
    Ys.add( /\.dds$/i, new qs );
    var Zs = function ( t ) {
        this.manager = void 0 !== t ? t : Ea
    };
    Zs.prototype = {
        constructor: Zs, load: function ( t, e, i, n ) {
            var r = this, a = new Sa( this.manager );
            a.setPath( this.path ), a.load( t, function ( t ) {
                e( r.parse( t ) )
            }, i, n )
        }, setPath: function ( t ) {
            this.path = t
        }, setTexturePath: function ( t ) {
            this.texturePath = t
        }, setBaseUrl: function ( t ) {
            console.warn( 'MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead.' ), this.setTexturePath( t )
        }, setCrossOrigin: function ( t ) {
            this.crossOrigin = t
        }, setMaterialOptions: function ( t ) {
            this.materialOptions = t
        }, parse: function ( t ) {
            for (var e = t.split( '\n' ), i = {}, n = /\s+/, r = {}, a = 0; a < e.length; a++) {
                var o = e[a];
                if (0 !== ( o = o.trim() ).length && '#' !== o.charAt( 0 )) {
                    var s = o.indexOf( ' ' ), c = s >= 0 ? o.substring( 0, s ) : o;
                    c = c.toLowerCase();
                    var h = s >= 0 ? o.substring( s + 1 ) : '';
                    if (h = h.trim(), 'newmtl' === c) {
                        i = { name: h }, r[h] = i;
                    } else if (i) {
                        if ('ka' === c || 'kd' === c || 'ks' === c) {
                            var l = h.split( n, 3 );
                            i[c] = [parseFloat( l[0] ), parseFloat( l[1] ), parseFloat( l[2] )]
                        } else {
                            i[c] = h
                        }
                    }
                }
            }
            var u = new Zs.MaterialCreator( this.texturePath || this.path, this.materialOptions );
            return u.setCrossOrigin( this.crossOrigin ), u.setManager( this.manager ), u.setMaterials( r ), u
        }
    }, ( Zs.MaterialCreator = function ( t, e ) {
        this.baseUrl = t || '', this.options = e, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.side = this.options && this.options.side ? this.options.side : T, this.wrap = this.options && this.options.wrap ? this.options.wrap : _t
    } ).prototype = {
        constructor: Zs.MaterialCreator, crossOrigin: 'Anonymous', setCrossOrigin: function ( t ) {
            this.crossOrigin = t
        }, setManager: function ( t ) {
            this.manager = t
        }, setMaterials: function ( t ) {
            this.materialsInfo = this.convert( t ), this.materials = {}, this.materialsArray = [], this.nameLookup = {}
        }, convert: function ( t ) {
            if (!this.options) return t;
            var e = {};
            for (var i in t) {
                var n = t[i], r = {};
                for (var a in e[i] = r, n) {
                    var o = !0, s = n[a], c = a.toLowerCase();
                    switch (c) {
                        case'kd':
                        case'ka':
                        case'ks':
                            this.options && this.options.normalizeRGB && ( s = [s[0] / 255, s[1] / 255, s[2] / 255] ), this.options && this.options.ignoreZeroRGBs && 0 === s[0] && 0 === s[1] && 0 === s[2] && ( o = !1 )
                    }
                    o && ( r[c] = s )
                }
            }
            return e
        }, preload: function () {
            for (var t in this.materialsInfo) this.create( t )
        }, getIndex: function ( t ) {
            return this.nameLookup[t]
        }, getAsArray: function () {
            var t = 0;
            for (var e in this.materialsInfo) this.materialsArray[t] = this.create( e ), this.nameLookup[e] = t, t++;
            return this.materialsArray
        }, create: function ( t ) {
            return void 0 === this.materials[t] && this.createMaterial_( t ), this.materials[t]
        }, createMaterial_: function ( t ) {
            var e = this, i = this.materialsInfo[t], n = { name: t, side: this.side };

            function r( t, i ) {
                if (!n[t]) {
                    var r, a, o = e.getTextureParams( i, n ),
                        s = e.loadTexture( ( r = e.baseUrl, 'string' != typeof ( a = o.url ) || '' === a ? '' : /^https?:\/\//i.test( a ) ? a : r + a ) );
                    s.repeat.copy( o.scale ), s.offset.copy( o.offset ), s.wrapS = e.wrap, s.wrapT = e.wrap, n[t] = s
                }
            }

            for (var a in i) {
                var o, s = i[a];
                if ('' !== s) {
                    switch (a.toLowerCase()) {
                        case'kd':
                            n.color = ( new yi ).fromArray( s );
                            break;
                        case'ks':
                            n.specular = ( new yi ).fromArray( s );
                            break;
                        case'map_kd':
                            r( 'map', s );
                            break;
                        case'map_ks':
                            r( 'specularMap', s );
                            break;
                        case'norm':
                            r( 'normalMap', s );
                            break;
                        case'map_bump':
                        case'bump':
                            r( 'bumpMap', s );
                            break;
                        case'ns':
                            n.shininess = parseFloat( s );
                            break;
                        case'd':
                            ( o = parseFloat( s ) ) < 1 && ( n.opacity = o, n.transparent = !0 );
                            break;
                        case'tr':
                            ( o = parseFloat( s ) ) > 0 && ( n.opacity = 1 - o, n.transparent = !0 )
                    }
                }
            }
            return this.materials[t] = new va( n ), this.materials[t]
        }, getTextureParams: function ( t, e ) {
            var i, n = { scale: new be( 1, 1 ), offset: new be( 0, 0 ) }, r = t.split( /\s+/ );
            return ( i = r.indexOf( '-bm' ) ) >= 0 && ( e.bumpScale = parseFloat( r[i + 1] ), r.splice( i, 2 ) ), ( i = r.indexOf( '-s' ) ) >= 0 && ( n.scale.set( parseFloat( r[i + 1] ), parseFloat( r[i + 2] ) ), r.splice( i, 4 ) ), ( i = r.indexOf( '-o' ) ) >= 0 && ( n.offset.set( parseFloat( r[i + 1] ), parseFloat( r[i + 2] ) ), r.splice( i, 4 ) ), n.url = r.join( ' ' ).trim(), n
        }, loadTexture: function ( t, e, i, n, r ) {
            var a, o = Ys.get( t ), s = void 0 !== this.manager ? this.manager : Ea;
            return null === o && ( o = new Ra( s ) ), o.setCrossOrigin && o.setCrossOrigin( this.crossOrigin ), a = o.load( t, i, n, r ), void 0 !== e && ( a.mapping = e ), a
        }
    };
    var Js = new Fi;
    var Ks = function ( t, e ) {
        var i, n, r, a, o;
        this.object = t, this.domElement = void 0 !== e ? e : document, this.enabled = !0, this.target = new Me, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .25, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            BOTTOM: 40
        }, this.mouseButtons = {
            ORBIT: v,
            ZOOM: g,
            PAN: y
        }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function () {
            return f.phi
        }, this.getAzimuthalAngle = function () {
            return f.theta
        }, this.saveState = function () {
            s.target0.copy( s.target ), s.position0.copy( s.object.position ), s.zoom0 = s.object.zoom
        }, this.reset = function () {
            s.target.copy( s.target0 ), s.object.position.copy( s.position0 ), s.object.zoom = s.zoom0, s.object.updateProjectionMatrix(), s.dispatchEvent( c ), s.update(), p = u.NONE
        }, this.update = ( i = new Me, n = ( new _e ).setFromUnitVectors( t.up, new Me( 0, 1, 0 ) ), r = n.clone().inverse(), a = new Me, o = new _e, function () {
            var t = s.object.position;
            return i.copy( t ).sub( s.target ), i.applyQuaternion( n ), f.setFromVector3( i ), s.autoRotate && p === u.NONE && N( 2 * Math.PI / 60 / 60 * s.autoRotateSpeed ), f.theta += m.theta, f.phi += m.phi, f.theta = Math.max( s.minAzimuthAngle, Math.min( s.maxAzimuthAngle, f.theta ) ), f.phi = Math.max( s.minPolarAngle, Math.min( s.maxPolarAngle, f.phi ) ), f.makeSafe(), f.radius *= x, f.radius = Math.max( s.minDistance, Math.min( s.maxDistance, f.radius ) ), s.target.add( b ), i.setFromSpherical( f ), i.applyQuaternion( r ), t.copy( s.target ).add( i ), s.object.lookAt( s.target ), !0 === s.enableDamping ? ( m.theta *= 1 - s.dampingFactor, m.phi *= 1 - s.dampingFactor ) : m.set( 0, 0, 0 ), x = 1, b.set( 0, 0, 0 ), !!( w || a.distanceToSquared( s.object.position ) > d || 8 * ( 1 - o.dot( s.object.quaternion ) ) > d ) && ( s.dispatchEvent( c ), a.copy( s.object.position ), o.copy( s.object.quaternion ), w = !1, !0 )
        } ), this.dispose = function () {
            s.domElement.removeEventListener( 'contextmenu', Y, !1 ), s.domElement.removeEventListener( 'mousedown', k, !1 ), s.domElement.removeEventListener( 'wheel', H, !1 ), s.domElement.removeEventListener( 'touchstart', W, !1 ), s.domElement.removeEventListener( 'touchend', q, !1 ), s.domElement.removeEventListener( 'touchmove', X, !1 ), document.removeEventListener( 'mousemove', G, !1 ), document.removeEventListener( 'mouseup', j, !1 ), window.removeEventListener( 'keydown', V, !1 )
        };
        var s = this, c = { type: 'change' }, h = { type: 'start' }, l = { type: 'end' },
            u = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 }, p = u.NONE,
            d = 1e-6, f = new fs, m = new fs, x = 1, b = new Me, w = !1, _ = new be, M = new be, E = new be, T = new be,
            S = new be, A = new be, L = new be, R = new be, P = new be;

        function C() {
            return Math.pow( .95, s.zoomSpeed )
        }

        function N( t ) {
            m.theta -= t
        }

        function I( t ) {
            m.phi -= t
        }

        var O, U = ( O = new Me, function ( t, e ) {
            O.setFromMatrixColumn( e, 0 ), O.multiplyScalar( -t ), b.add( O )
        } ), D = function () {
            var t = new Me;
            return function ( e, i ) {
                t.setFromMatrixColumn( i, 1 ), t.multiplyScalar( e ), b.add( t )
            }
        }(), F = function () {
            var t = new Me;
            return function ( e, i ) {
                var n = s.domElement === document ? s.domElement.body : s.domElement;
                if (s.object instanceof nr) {
                    var r = s.object.position;
                    t.copy( r ).sub( s.target );
                    var a = t.length();
                    a *= Math.tan( s.object.fov / 2 * Math.PI / 180 ), U( 2 * e * a / n.clientHeight, s.object.matrix ), D( 2 * i * a / n.clientHeight, s.object.matrix )
                } else {
                    s.object instanceof Qi ? ( U( e * ( s.object.right - s.object.left ) / s.object.zoom / n.clientWidth, s.object.matrix ), D( i * ( s.object.top - s.object.bottom ) / s.object.zoom / n.clientHeight, s.object.matrix ) ) : ( console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' ), s.enablePan = !1 )
                }
            }
        }();

        function z( t ) {
            s.object instanceof nr ? x /= t : s.object instanceof Qi ? ( s.object.zoom = Math.max( s.minZoom, Math.min( s.maxZoom, s.object.zoom * t ) ), s.object.updateProjectionMatrix(), w = !0 ) : ( console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' ), s.enableZoom = !1 )
        }

        function B( t ) {
            s.object instanceof nr ? x *= t : s.object instanceof Qi ? ( s.object.zoom = Math.max( s.minZoom, Math.min( s.maxZoom, s.object.zoom / t ) ), s.object.updateProjectionMatrix(), w = !0 ) : ( console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' ), s.enableZoom = !1 )
        }

        function k( t ) {
            if (!1 !== s.enabled) {
                switch (t.preventDefault(), t.button) {
                    case s.mouseButtons.ORBIT:
                        if (!1 === s.enableRotate) return;
                        !function ( t ) {
                            _.set( t.clientX, t.clientY )
                        }( t ), p = u.ROTATE;
                        break;
                    case s.mouseButtons.ZOOM:
                        if (!1 === s.enableZoom) return;
                        !function ( t ) {
                            L.set( t.clientX, t.clientY )
                        }( t ), p = u.DOLLY;
                        break;
                    case s.mouseButtons.PAN:
                        if (!1 === s.enablePan) return;
                        !function ( t ) {
                            T.set( t.clientX, t.clientY )
                        }( t ), p = u.PAN
                }
                p !== u.NONE && ( document.addEventListener( 'mousemove', G, !1 ), document.addEventListener( 'mouseup', j, !1 ), s.dispatchEvent( h ) )
            }
        }

        function G( t ) {
            if (!1 !== s.enabled) {
                switch (t.preventDefault(), p) {
                    case u.ROTATE:
                        if (!1 === s.enableRotate) return;
                        !function ( t ) {
                            M.set( t.clientX, t.clientY ), E.subVectors( M, _ );
                            var e = s.domElement === document ? s.domElement.body : s.domElement;
                            N( 2 * Math.PI * E.x / e.clientWidth * s.rotateSpeed ), I( 2 * Math.PI * E.y / e.clientHeight * s.rotateSpeed ), _.copy( M ), s.update()
                        }( t );
                        break;
                    case u.DOLLY:
                        if (!1 === s.enableZoom) return;
                        !function ( t ) {
                            R.set( t.clientX, t.clientY ), P.subVectors( R, L ), P.y > 0 ? z( C() ) : P.y < 0 && B( C() ), L.copy( R ), s.update()
                        }( t );
                        break;
                    case u.PAN:
                        if (!1 === s.enablePan) return;
                        !function ( t ) {
                            S.set( t.clientX, t.clientY ), A.subVectors( S, T ), F( A.x, A.y ), T.copy( S ), s.update()
                        }( t )
                }
            }
        }

        function j( t ) {
            !1 !== s.enabled && ( document.removeEventListener( 'mousemove', G, !1 ), document.removeEventListener( 'mouseup', j, !1 ), s.dispatchEvent( l ), p = u.NONE )
        }

        function H( t ) {
            !1 === s.enabled || !1 === s.enableZoom || p !== u.NONE && p !== u.ROTATE || ( t.preventDefault(), t.stopPropagation(), function ( t ) {
                t.deltaY < 0 ? B( C() ) : t.deltaY > 0 && z( C() ), s.update()
            }( t ), s.dispatchEvent( h ), s.dispatchEvent( l ) )
        }

        function V( t ) {
            !1 !== s.enabled && !1 !== s.enableKeys && !1 !== s.enablePan && function ( t ) {
                switch (t.keyCode) {
                    case s.keys.UP:
                        F( 0, s.keyPanSpeed ), s.update();
                        break;
                    case s.keys.BOTTOM:
                        F( 0, -s.keyPanSpeed ), s.update();
                        break;
                    case s.keys.LEFT:
                        F( s.keyPanSpeed, 0 ), s.update();
                        break;
                    case s.keys.RIGHT:
                        F( -s.keyPanSpeed, 0 ), s.update()
                }
            }( t )
        }

        function W( t ) {
            if (!1 !== s.enabled) {
                switch (t.touches.length) {
                    case 1:
                        if (!1 === s.enableRotate) return;
                        !function ( t ) {
                            _.set( t.touches[0].pageX, t.touches[0].pageY )
                        }( t ), p = u.TOUCH_ROTATE;
                        break;
                    case 2:
                        if (!1 === s.enableZoom) return;
                        !function ( t ) {
                            var e = t.touches[0].pageX - t.touches[1].pageX,
                                i = t.touches[0].pageY - t.touches[1].pageY, n = Math.sqrt( e * e + i * i );
                            L.set( 0, n )
                        }( t ), p = u.TOUCH_DOLLY;
                        break;
                    case 3:
                        if (!1 === s.enablePan) return;
                        !function ( t ) {
                            T.set( t.touches[0].pageX, t.touches[0].pageY )
                        }( t ), p = u.TOUCH_PAN;
                        break;
                    default:
                        p = u.NONE
                }
                p !== u.NONE && s.dispatchEvent( h )
            }
        }

        function X( t ) {
            if (!1 !== s.enabled) {
                switch (t.preventDefault(), t.stopPropagation(), t.touches.length) {
                    case 1:
                        if (!1 === s.enableRotate) return;
                        if (p !== u.TOUCH_ROTATE) return;
                        !function ( t ) {
                            M.set( t.touches[0].pageX, t.touches[0].pageY ), E.subVectors( M, _ );
                            var e = s.domElement === document ? s.domElement.body : s.domElement;
                            N( 2 * Math.PI * E.x / e.clientWidth * s.rotateSpeed ), I( 2 * Math.PI * E.y / e.clientHeight * s.rotateSpeed ), _.copy( M ), s.update()
                        }( t );
                        break;
                    case 2:
                        if (!1 === s.enableZoom) return;
                        if (p !== u.TOUCH_DOLLY) return;
                        !function ( t ) {
                            var e = t.touches[0].pageX - t.touches[1].pageX,
                                i = t.touches[0].pageY - t.touches[1].pageY,
                                n = Math.sqrt( e * e + i * i );
                            R.set( 0, n ), P.subVectors( R, L ), P.y > 0 ? B( C() ) : P.y < 0 && z( C() ), L.copy( R ), s.update()
                        }( t );
                        break;
                    case 3:
                        if (!1 === s.enablePan) return;
                        if (p !== u.TOUCH_PAN) return;
                        !function ( t ) {
                            S.set( t.touches[0].pageX, t.touches[0].pageY ), A.subVectors( S, T ), F( A.x, A.y ), T.copy( S ), s.update()
                        }( t );
                        break;
                    default:
                        p = u.NONE
                }
            }
        }

        function q( t ) {
            !1 !== s.enabled && ( s.dispatchEvent( l ), p = u.NONE )
        }

        function Y( t ) {
            t.preventDefault()
        }

        s.domElement.addEventListener( 'contextmenu', Y, !1 ), s.domElement.addEventListener( 'mousedown', k, !1 ), s.domElement.addEventListener( 'wheel', H, !1 ), s.domElement.addEventListener( 'touchstart', W, !1 ), s.domElement.addEventListener( 'touchend', q, !1 ), s.domElement.addEventListener( 'touchmove', X, !1 ), window.addEventListener( 'keydown', V, !1 ), this.update()
    };
    ( Ks.prototype = Object.create( i.prototype ) ).constructor = Ks;
    var Qs = function () {
        try {
            var t = document.createElement( 'canvas' );
            return !( !window.WebGLRenderingContext || !t.getContext( 'webgl' ) && !t.getContext( 'experimental-webgl' ) )
        } catch (t) {
            return !1
        }
    }(), $s = {
        render: function () {
            var t = this.$createElement, e = this._self._c || t;
            return e( 'div', {
                staticStyle: {
                    width: '100%',
                    height: '100%',
                    margin: '0',
                    border: '0',
                    padding: '0'
                }
            }, [this.suportWebGL ? e( 'canvas', {
                ref: 'canvas',
                staticStyle: { width: '100%', height: '100%' }
            } ) : e( 'div', [this._t( 'default', [this._v( ' Your browser does not seem to support ' ), e( 'a', {
                staticStyle: { color: '#000' },
                attrs: { href: 'http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation' }
            }, [this._v( 'WebGL' )] ), this._v( '.' ), e( 'br' ), this._v( '\' ' )] )], 2 )] )
        },
        staticRenderFns: [],
        props: {
            src: { type: String },
            width: { type: Number },
            height: { type: Number },
            position: {
                type: Object, default: function () {
                    return { x: 0, y: 0, z: 0 }
                }
            },
            rotation: {
                type: Object, default: function () {
                    return { x: 0, y: 0, z: 0 }
                }
            },
            scale: {
                type: Object, default: function () {
                    return { x: 1, y: 1, z: 1 }
                }
            },
            lights: {
                type: Array, default: function () {
                    return []
                }
            },
            cameraPosition: { type: Object },
            cameraRotation: { type: Object },
            cameraUp: { type: Object },
            cameraLookAt: { type: Object },
            backgroundColor: { default: 16777215 },
            backgroundAlpha: { type: Number, default: 1 },
            controllable: { type: Boolean, default: !0 },
            crossOrigin: { default: 'anonymous' }
        },
        data: function () {
            return {
                suportWebGL: Qs,
                size: { width: this.width, height: this.height },
                object: null,
                raycaster: new us,
                mouse: new be,
                camera: new nr( 45, 1, .01, 1e5 ),
                scene: new cr,
                wrapper: new Ji,
                renderer: null,
                controls: null,
                allLights: [],
                clock: 'undefined' == typeof performance ? Date : performance,
                reqId: null
            }
        },
        computed: {
            hasListener: function () {
                var t = this._events, e = {};
                return ['on-mousemove', 'on-mouseup', 'on-mousedown', 'on-click'].forEach( function ( i ) {
                    e[i] = !!t[i] && t[i].length > 0
                } ), e
            }
        },
        mounted: function () {
            void 0 !== this.width && void 0 !== this.height || ( this.size = {
                width: this.$el.offsetWidth,
                height: this.$el.offsetHeight
            } ), this.renderer = new ar( {
                antialias: !0,
                alpha: !0,
                canvas: this.$refs.canvas
            } ), this.renderer.shadowMap.enabled = !0, this.scene.add( this.wrapper ), this.load(), this.update(), this.$el.addEventListener( 'mousedown', this.onMouseDown, !1 ), this.$el.addEventListener( 'mousemove', this.onMouseMove, !1 ), this.$el.addEventListener( 'mouseup', this.onMouseUp, !1 ), this.$el.addEventListener( 'click', this.onClick, !1 ), window.addEventListener( 'resize', this.onResize, !1 ), this.animate()
        },
        beforeDestroy: function () {
            cancelAnimationFrame( this.reqId ), this.$el.removeEventListener( 'mousedown', this.onMouseDown, !1 ), this.$el.removeEventListener( 'mousemove', this.onMouseMove, !1 ), this.$el.removeEventListener( 'mouseup', this.onMouseUp, !1 ), this.$el.removeEventListener( 'click', this.onClick, !1 ), window.removeEventListener( 'resize', this.onResize, !1 )
        },
        watch: {
            src: function () {
                this.load()
            }, rotation: {
                deep: !0, handler: function ( t ) {
                    this.object && this.object.rotation.set( t.x, t.y, t.z )
                }
            }, position: {
                deep: !0, handler: function ( t ) {
                    this.object && this.object.position.set( t.x, t.y, t.z )
                }
            }, scale: {
                deep: !0, handler: function ( t ) {
                    this.object && this.object.scale.set( t.x, t.y, t.z )
                }
            }, lights: {
                deep: !0, handler: function ( t, e ) {
                    this.updateLights()
                }
            }, size: {
                deep: !0, handler: function ( t ) {
                    this.updateCamera(), this.updateRenderer()
                }
            }, controllable: function () {
                this.updateControls()
            }, backgroundAlpha: function () {
                this.updateRenderer()
            }, backgroundColor: function () {
                this.updateRenderer()
            }
        },
        methods: {
            onResize: function () {
                var t = this;
                void 0 !== this.width && void 0 !== this.height || this.$nextTick( function () {
                    t.size = { width: t.$el.offsetWidth, height: t.$el.offsetHeight }
                } )
            }, onMouseDown: function ( t ) {
                if (this.hasListener['on-mousedown']) {
                    var e = this.pick( t.clientX, t.clientY );
                    this.$emit( 'on-mousedown', e )
                }
            }, onMouseMove: function ( t ) {
                if (this.hasListener['on-mousemove']) {
                    var e = this.pick( t.clientX, t.clientY );
                    this.$emit( 'on-mousemove', e )
                }
            }, onMouseUp: function ( t ) {
                if (this.hasListener['on-mouseup']) {
                    var e = this.pick( t.clientX, t.clientY );
                    this.$emit( 'on-mouseup', e )
                }
            }, onClick: function ( t ) {
                if (this.hasListener['on-click']) {
                    var e = this.pick( t.clientX, t.clientY );
                    this.$emit( 'on-click', e )
                }
            }, pick: function ( t, e ) {
                if (this.object) {
                    var i = this.$el.getBoundingClientRect();
                    t -= i.left, e -= i.top, this.mouse.x = t / this.size.width * 2 - 1, this.mouse.y = -e / this.size.height * 2 + 1, this.raycaster.setFromCamera( this.mouse, this.camera );
                    var n = this.raycaster.intersectObject( this.object, !0 );
                    return ( n && n.length ) > 0 ? n[0] : null
                }
            }, update: function () {
                this.updateRenderer(), this.updateCamera(), this.updateLights(), this.updateControls()
            }, updateModel: function () {
                var t = this.object;
                if (t) {
                    var e = this.position, i = this.rotation, n = this.scale;
                    t.position.set( e.x, e.y, e.z ), t.rotation.set( i.x, i.y, i.z ), t.scale.set( n.x, n.y, n.z )
                }
            }, updateRenderer: function () {
                var t = this.renderer;
                t.setSize( this.size.width, this.size.height ), t.setPixelRatio( window.devicePixelRatio || 1 ), t.setClearColor( new yi( this.backgroundColor ).getHex() ), t.setClearAlpha( this.backgroundAlpha )
            }, updateCamera: function () {
                var t = this.camera, e = this.object;
                if (t.aspect = this.size.width / this.size.height, t.updateProjectionMatrix(), this.cameraLookAt || this.cameraPosition || this.cameraRotation || this.cameraUp) {
                    t.position.set( this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z ), t.rotation.set( this.cameraRotation.x, this.cameraRotation.y, this.cameraRotation.z ), t.up.set( this.cameraUp.x, this.cameraUp.y, this.cameraUp.z ), t.lookAt( new Me( this.cameraLookAt.x, this.cameraLookAt.y, this.cameraLookAt.z ) );
                } else {
                    if (!e) return;
                    var i = function ( t ) {
                        return Js.setFromObject( t ), Js.getSize()
                    }( e ).length();
                    t.position.set( 0, 0, 0 ), t.position.z = i, t.lookAt( new Me )
                }
            }, updateLights: function () {
                var t = this;
                this.scene.remove.apply( this.scene, this.allLights ), this.allLights = [], this.lights.forEach( function ( e ) {
                    if (e.type) {
                        var i = e.type.toLowerCase(), n = null;
                        if ('ambient' === i || 'ambientlight' === i) {
                            n = new za( e.color || 4210752, e.intensity || 1 );
                        } else if ('point' === i || 'pointlight' === i) {
                            n = new Ua( e.color || 16777215, e.intensity || 1, e.distance || 0, e.decay || 1 ), e.position && n.position.copy( e.position )
                        } else if ('directional' === i || 'directionallight' === i) {
                            n = new Fa( e.color || 16777215, e.intensity || 1 ), e.position && n.position.copy( e.position ), e.target && n.target.copy( e.target )
                        } else if ('hemisphere' === i || 'hemispherelight' === i) {
                            n = new Ca( e.skyColor || 16777215, e.groundColor || 16777215, e.intensity || 1 ), e.position && n.position.copy( e.position )
                        }
                        t.allLights.push( n ), t.scene.add( n )
                    }
                } )
            }, updateControls: function () {
                if (!this.controllable || !this.controls) {
                    if (this.controllable) {
                        if (this.controls) return;
                        this.controls = new Ks( this.camera, this.$el ), this.controls.type = 'orbit'
                    } else {
                        this.controls && ( this.controls.dispose(), this.controls = null )
                    }
                }
            }, load: function () {
                var t = this;
                this.src && ( this.object && this.wrapper.remove( this.object ), this.loader.load( this.src, function () {
                    var e = t.getObject.apply( t, arguments );
                    t.process && t.process( e ), t.addObject( e ), t.$emit( 'on-load' )
                }, function ( e ) {
                    t.$emit( 'on-progress', e )
                }, function ( e ) {
                    t.$emit( 'on-error', e )
                } ) )
            }, getObject: function ( t ) {
                return t
            }, addObject: function ( t ) {
                var e = function ( t ) {
                    return Js.setFromObject( t ), Js.getCenter()
                }( t );
                this.wrapper.position.copy( e.negate() ), this.object = t, this.wrapper.add( t ), this.updateCamera(), this.updateModel()
            }, animate: function () {
                this.reqId = requestAnimationFrame( this.animate ), this.render()
            }, render: function () {
                this.renderer.render( this.scene, this.camera )
            }
        }
    }, tc = {
        name: 'model-obj', mixins: [$s], props: {
            lights: {
                type: Array, default: function () {
                    return [{
                        type: 'HemisphereLight',
                        position: { x: 0, y: 1, z: 0 },
                        skyColor: 11184895,
                        groundColor: 8413280,
                        intensity: .2
                    }, { type: 'DirectionalLight', position: { x: 1, y: 1, z: 1 }, color: 16777215, intensity: .8 }]
                }
            }, smoothing: { type: Boolean, default: !1 }, mtlPath: { type: String }, mtl: { type: String }
        }, data: function () {
            var t = new Xs, e = new Zs;
            return e.setCrossOrigin( this.crossOrigin ), { loader: t, mtlLoader: e }
        }, watch: {
            mtl: function () {
                this.load()
            }
        }, methods: {
            process: function ( t ) {
                this.smoothing && t.traverse( function ( t ) {
                    t.geometry && ( t.geometry = function ( t ) {
                        var e = t.getAttribute( 'position' ).array, i = void 0, n = void 0 !== t.getAttribute( 'uv' );
                        n && ( i = t.getAttribute( 'uv' ).array );
                        var r = void 0, a = void 0 !== t.getAttribute( 'normal' );
                        a && ( r = t.getAttribute( 'normal' ).array );
                        for (var o = [], s = [], c = [], h = [], l = void 0, u = void 0, p = void 0, d = void 0, f = new Me, m = new Me, v = new Me, g = new Me, y = new Me, x = new Me, b = new be, w = new be, _ = new be, M = 0; M < e.length; M += 9) {
                            f.x = e[M], f.y = e[M + 1], f.z = e[M + 2], m.x = e[M + 3], m.y = e[M + 4], m.z = e[M + 5], v.x = e[M + 6], v.y = e[M + 7], v.z = e[M + 8], l = [f, m, v], a && ( g.x = r[M], g.y = r[M + 1], g.z = r[M + 2], y.x = r[M + 3], y.y = r[M + 4], y.z = r[M + 5], x.x = r[M + 6], x.y = r[M + 7], x.z = r[M + 8], u = [g, y, x] ), n && ( b.x = i[M], b.y = i[M + 1], w.x = i[M + 2], w.y = i[M + 3], _.x = i[M + 4], _.y = i[M + 5], p = [b, w, _] ), d = [], l.forEach( function ( t, e ) {
                                var i = P( t, s );
                                -1 === i && ( i = s.length, s.push( t.clone() ), a && c.push( u[e].clone() ), n && h.push( p[e].clone() ) ), d.push( i )
                            } ), o.push( d[0], d[1], d[2] );
                        }
                        var E = new Float32Array( 3 * s.length ), T = void 0, S = void 0;
                        a && ( T = new Float32Array( 3 * s.length ) ), n && ( S = new Float32Array( 2 * s.length ) );
                        for (var A = 0, L = 0, R = 0; R < s.length; R++) E[L = 3 * R] = s[R].x, E[L + 1] = s[R].y, E[L + 2] = s[R].z, a && ( T[L] = c[R].x, T[L + 1] = c[R].y, T[L + 2] = c[R].z ), n && ( S[A = 2 * R] = h[R].x, S[A + 1] = h[R].y );
                        return t.addAttribute( 'position', new rn( E, 3 ) ), a && t.addAttribute( 'normal', new rn( T, 3 ) ), n && t.addAttribute( 'uv', new rn( S, 2 ) ), t.setIndex( new rn( new Uint32Array( o ), 1 ) ), t;

                        function P( t, e ) {
                            for (var i = 0; i < e.length; i++) if (t.equals( e[i] )) return i;
                            return -1
                        }
                    }( t.geometry ), t.geometry.computeVertexNormals() )
                } )
            }, load: function () {
                var t = this;
                if (this.src) {
                    this.object && this.wrapper.remove( this.object );
                    var e = function ( e ) {
                        t.process && t.process( e ), t.addObject( e ), t.$emit( 'on-load' )
                    }, i = function ( e ) {
                        t.$emit( 'on-progress', e )
                    }, n = function ( e ) {
                        t.$emit( 'on-error', e )
                    };
                    if (this.mtl) {
                        var r = this.mtlPath, a = this.mtl;
                        if (!this.mtlPath) {
                            var o = /^(.*\/)([^/]*)$/.exec( this.mtl );
                            o && ( r = o[1], a = o[2] )
                        }
                        r && this.mtlLoader.setPath( r ), this.mtlLoader.load( a, function ( r ) {
                            r.preload(), t.loader.setMaterials( r ), t.loader.load( t.src, e, i, n )
                        }, function () {
                        }, n )
                    } else {
                        this.loader.load( this.src, e, i, n )
                    }
                }
            }
        }
    }, ec = {
        name: 'model-three', mixins: [$s], data: function () {
            var t = new uo;
            return t.setCrossOrigin( this.crossOrigin ), { loader: t }
        }
    }, ic = function ( t ) {
        this.manager = void 0 !== t ? t : Ea
    };
    ic.prototype = {
        constructor: ic, load: function ( t, e, i, n ) {
            var r = this, a = new Sa( r.manager );
            a.setResponseType( 'arraybuffer' ), a.load( t, function ( t ) {
                e( r.parse( t ) )
            }, i, n )
        }, parse: function ( t ) {
            var e = this.ensureBinary( t );
            return function () {
                var t;
                if (84 + 50 * ( t = new DataView( e ) ).getUint32( 80, !0 ) === t.byteLength) return !0;
                for (var i = [115, 111, 108, 105, 100], n = 0; n < 5; n++) if (i[n] != t.getUint8( n, !1 )) return !0;
                return !1
            }() ? this.parseBinary( e ) : this.parseASCII( this.ensureString( t ) )
        }, parseBinary: function ( t ) {
            for (var e, i, n, r, a, o, s, c, h = new DataView( t ), l = h.getUint32( 80, !0 ), u = !1, p = 0; p < 70; p++) 1129270351 == h.getUint32( p, !1 ) && 82 == h.getUint8( p + 4 ) && 61 == h.getUint8( p + 5 ) && ( u = !0, r = [], a = h.getUint8( p + 6 ) / 255, o = h.getUint8( p + 7 ) / 255, s = h.getUint8( p + 8 ) / 255, c = h.getUint8( p + 9 ) / 255 );
            for (var d = new En, f = [], m = [], v = 0; v < l; v++) {
                var g = 84 + 50 * v, y = h.getFloat32( g, !0 ), x = h.getFloat32( g + 4, !0 ),
                    b = h.getFloat32( g + 8, !0 );
                if (u) {
                    var w = h.getUint16( g + 48, !0 );
                    0 == ( 32768 & w ) ? ( e = ( 31 & w ) / 31, i = ( w >> 5 & 31 ) / 31, n = ( w >> 10 & 31 ) / 31 ) : ( e = a, i = o, n = s )
                }
                for (var _ = 1; _ <= 3; _++) {
                    var M = g + 12 * _;
                    f.push( h.getFloat32( M, !0 ) ), f.push( h.getFloat32( M + 4, !0 ) ), f.push( h.getFloat32( M + 8, !0 ) ), m.push( y, x, b ), u && r.push( e, i, n )
                }
            }
            return d.addAttribute( 'position', new rn( new Float32Array( f ), 3 ) ), d.addAttribute( 'normal', new rn( new Float32Array( m ), 3 ) ), u && ( d.addAttribute( 'color', new rn( new Float32Array( r ), 3 ) ), d.hasColors = !0, d.alpha = c ), d
        }, parseASCII: function ( t ) {
            var e, i, n, r, a, o;
            e = new En, i = /facet([\s\S]*?)endfacet/g;
            for (var s = [], c = [], h = new Me; null !== ( a = i.exec( t ) );) {
                for (o = a[0], n = /normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g; null !== ( a = n.exec( o ) );) h.x = parseFloat( a[1] ), h.y = parseFloat( a[3] ), h.z = parseFloat( a[5] );
                for (r = /vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g; null !== ( a = r.exec( o ) );) s.push( parseFloat( a[1] ), parseFloat( a[3] ), parseFloat( a[5] ) ), c.push( h.x, h.y, h.z )
            }
            return e.addAttribute( 'position', new rn( new Float32Array( s ), 3 ) ), e.addAttribute( 'normal', new rn( new Float32Array( c ), 3 ) ), e
        }, ensureString: function ( t ) {
            if ('string' != typeof t) {
                for (var e = new Uint8Array( t ), i = [], n = 0; n < t.byteLength; n++) i.push( String.fromCharCode( e[n] ) );
                return i.join( '' )
            }
            return t
        }, ensureBinary: function ( t ) {
            if ('string' == typeof t) {
                for (var e = new Uint8Array( t.length ), i = 0; i < t.length; i++) e[i] = 255 & t.charCodeAt( i );
                return e.buffer || e
            }
            return t
        }
    };
    var nc = {
        name: 'model-stl', mixins: [$s], props: {
            lights: {
                type: Array, default: function () {
                    return [{
                        type: 'HemisphereLight',
                        position: { x: 0, y: 1, z: 0 },
                        skyColor: 11184895,
                        groundColor: 8413280,
                        intensity: .2
                    }, { type: 'DirectionalLight', position: { x: 1, y: 1, z: 1 }, color: 16777215, intensity: .8 }]
                }
            }
        }, data: function () {
            return { loader: new ic }
        }, methods: {
            getObject: function ( t ) {
                return new On( t, new va )
            }
        }
    }, rc = function ( t ) {
        this.manager = void 0 !== t ? t : Ea, this.propertyNameMapping = {}
    };
    rc.prototype = {
        constructor: rc, load: function ( t, e, i, n ) {
            var r = this, a = new Sa( this.manager );
            a.setResponseType( 'arraybuffer' ), a.load( t, function ( t ) {
                e( r.parse( t ) )
            }, i, n )
        }, setPropertyNameMapping: function ( t ) {
            this.propertyNameMapping = t
        }, parse: function ( t ) {
            function e( t ) {
                var e = '', i = 0, n = /ply([\s\S]*)end_header\s/.exec( t );
                null !== n && ( e = n[1], i = n[0].length );
                var r, a, o, s, c, h, u = { comments: [], elements: [], headerLength: i }, p = e.split( '\n' );
                for (var d = 0; d < p.length; d++) {
                    var f = p[d];
                    if ('' !== ( f = f.trim() )) {
                        switch (a = ( o = f.split( /\s+/ ) ).shift(), f = o.join( ' ' ), a) {
                            case'format':
                                u.format = o[0], u.version = o[1];
                                break;
                            case'comment':
                                u.comments.push( f );
                                break;
                            case'element':
                                void 0 !== r && u.elements.push( r ), ( r = {} ).name = o[0], r.count = parseInt( o[1] ), r.properties = [];
                                break;
                            case'property':
                                r.properties.push( ( s = o, c = l.propertyNameMapping, h = void 0, 'list' === ( h = { type: s[0] } ).type ? ( h.name = s[3], h.countType = s[1], h.itemType = s[2] ) : h.name = s[1], h.name in c && ( h.name = c[h.name] ), h ) );
                                break;
                            default:
                                console.log( 'unhandled', a, o )
                        }
                    }
                }
                return void 0 !== r && u.elements.push( r ), u
            }

            function i( t, e ) {
                switch (e) {
                    case'char':
                    case'uchar':
                    case'short':
                    case'ushort':
                    case'int':
                    case'uint':
                    case'int8':
                    case'uint8':
                    case'int16':
                    case'uint16':
                    case'int32':
                    case'uint32':
                        return parseInt( t );
                    case'float':
                    case'double':
                    case'float32':
                    case'float64':
                        return parseFloat( t )
                }
            }

            function n( t, e ) {
                for (var n = e.split( /\s+/ ), r = {}, a = 0; a < t.length; a++) {
                    if ('list' === t[a].type) {
                        for (var o = [], s = i( n.shift(), t[a].countType ), c = 0; c < s; c++) o.push( i( n.shift(), t[a].itemType ) );
                        r[t[a].name] = o
                    } else {
                        r[t[a].name] = i( n.shift(), t[a].type );
                    }
                }
                return r
            }

            function r( t, e ) {
                var i, r = { indices: [], vertices: [], normals: [], uvs: [], colors: [] }, s = '';
                null !== ( i = /end_header\s([\s\S]*)$/.exec( t ) ) && ( s = i[1] );
                for (var c = s.split( '\n' ), h = 0, l = 0, u = 0; u < c.length; u++) {
                    var p = c[u];
                    if ('' !== ( p = p.trim() )) {
                        l >= e.elements[h].count && ( h++, l = 0 );
                        var d = n( e.elements[h].properties, p );
                        o( r, e.elements[h].name, d ), l++
                    }
                }
                return a( r )
            }

            function a( t ) {
                var e = new En;
                return t.indices.length > 0 && e.setIndex( t.indices ), e.addAttribute( 'position', new pn( t.vertices, 3 ) ), t.normals.length > 0 && e.addAttribute( 'normal', new pn( t.normals, 3 ) ), t.uvs.length > 0 && e.addAttribute( 'uv', new pn( t.uvs, 2 ) ), t.colors.length > 0 && e.addAttribute( 'color', new pn( t.colors, 3 ) ), e.computeBoundingSphere(), e
            }

            function o( t, e, i ) {
                if ('vertex' === e) {
                    t.vertices.push( i.x, i.y, i.z ), 'nx' in i && 'ny' in i && 'nz' in i && t.normals.push( i.nx, i.ny, i.nz ), 's' in i && 't' in i && t.uvs.push( i.s, i.t ), 'red' in i && 'green' in i && 'blue' in i && t.colors.push( i.red / 255, i.green / 255, i.blue / 255 );
                } else if ('face' === e) {
                    var n = i.vertex_indices || i.vertex_index;
                    3 === n.length ? t.indices.push( n[0], n[1], n[2] ) : 4 === n.length && ( t.indices.push( n[0], n[1], n[3] ), t.indices.push( n[1], n[2], n[3] ) )
                }
            }

            function s( t, e, i, n ) {
                switch (i) {
                    case'int8':
                    case'char':
                        return [t.getInt8( e ), 1];
                    case'uint8':
                    case'uchar':
                        return [t.getUint8( e ), 1];
                    case'int16':
                    case'short':
                        return [t.getInt16( e, n ), 2];
                    case'uint16':
                    case'ushort':
                        return [t.getUint16( e, n ), 2];
                    case'int32':
                    case'int':
                        return [t.getInt32( e, n ), 4];
                    case'uint32':
                    case'uint':
                        return [t.getUint32( e, n ), 4];
                    case'float32':
                    case'float':
                        return [t.getFloat32( e, n ), 4];
                    case'float64':
                    case'double':
                        return [t.getFloat64( e, n ), 8]
                }
            }

            function c( t, e, i, n ) {
                for (var r, a = {}, o = 0, c = 0; c < i.length; c++) {
                    if ('list' === i[c].type) {
                        var h = [], l = ( r = s( t, e + o, i[c].countType, n ) )[0];
                        o += r[1];
                        for (var u = 0; u < l; u++) r = s( t, e + o, i[c].itemType, n ), h.push( r[0] ), o += r[1];
                        a[i[c].name] = h
                    } else {
                        r = s( t, e + o, i[c].type, n ), a[i[c].name] = r[0], o += r[1];
                    }
                }
                return [a, o]
            }

            var h, l = this;
            if (t instanceof ArrayBuffer) {
                var u = function ( t ) {
                    var e = new Uint8Array( t );
                    if (void 0 !== window.TextDecoder) return ( new TextDecoder ).decode( e );
                    for (var i = '', n = 0, r = t.byteLength; n < r; n++) i += String.fromCharCode( e[n] );
                    return i
                }( t ), p = e( u );
                h = 'ascii' === p.format ? r( u, p ) : function ( t, e ) {
                    for (var i, n = {
                        indices: [],
                        vertices: [],
                        normals: [],
                        uvs: [],
                        colors: []
                    }, r = 'binary_little_endian' === e.format, s = new DataView( t, e.headerLength ), h = 0, l = 0; l < e.elements.length; l++) {
                        for (var u = 0; u < e.elements[l].count; u++) {
                            h += ( i = c( s, h, e.elements[l].properties, r ) )[1];
                            var p = i[0];
                            o( n, e.elements[l].name, p )
                        }
                    }
                    return a( n )
                }( t, p )
            } else {
                h = r( t, e( t ) );
            }
            return h
        }
    };
    var ac = {
        name: 'model-ply', mixins: [$s], props: {
            lights: {
                type: Array, default: function () {
                    return [{
                        type: 'HemisphereLight',
                        position: { x: 0, y: 1, z: 0 },
                        skyColor: 11184895,
                        groundColor: 8413280,
                        intensity: .2
                    }, { type: 'DirectionalLight', position: { x: 1, y: 1, z: 1 }, color: 16777215, intensity: .8 }]
                }
            }
        }, data: function () {
            return { loader: new rc }
        }, methods: {
            getObject: function ( t ) {
                return t.computeVertexNormals(), new On( t, new fa )
            }
        }
    }, oc = function ( t ) {
        this.manager = void 0 !== t ? t : Ea
    };
    oc.prototype = {
        constructor: oc, crossOrigin: 'Anonymous', load: function ( t, e, i, n ) {
            var r = this, a = ho.prototype.extractUrlBase( t );
            new Sa( r.manager ).load( t, function ( t ) {
                e( r.parse( t, a ) )
            }, i, n )
        }, options: {
            set convertUpAxis( t ) {
                console.warn( 'ColladaLoader: options.convertUpAxis() has been removed. Up axis is converted automatically.' )
            }
        }, setCrossOrigin: function ( t ) {
            this.crossOrigin = t
        }, parse: function ( t, e ) {
            function i( t, e ) {
                for (var i = [], n = t.childNodes, r = 0, a = n.length; r < a; r++) {
                    var o = n[r];
                    o.nodeName === e && i.push( o )
                }
                return i
            }

            function n( t ) {
                if (0 === t.length) return [];
                for (var e = t.trim().split( /\s+/ ), i = new Array( e.length ), n = 0, r = e.length; n < r; n++) i[n] = e[n];
                return i
            }

            function r( t ) {
                if (0 === t.length) return [];
                for (var e = t.trim().split( /\s+/ ), i = new Array( e.length ), n = 0, r = e.length; n < r; n++) i[n] = parseFloat( e[n] );
                return i
            }

            function a( t ) {
                if (0 === t.length) return [];
                for (var e = t.trim().split( /\s+/ ), i = new Array( e.length ), n = 0, r = e.length; n < r; n++) i[n] = parseInt( e[n] );
                return i
            }

            function o( t ) {
                return t.substring( 1 )
            }

            function s( t ) {
                return 0 === Object.keys( t ).length
            }

            function c( t, e, n, r ) {
                var a = i( t, e )[0];
                if (void 0 !== a) for (var o = i( a, n ), s = 0; s < o.length; s++) r( o[s] )
            }

            function h( t, e ) {
                for (var i in t) {
                    t[i].build = e( t[i] )
                }
            }

            function l( t, e ) {
                return void 0 !== t.build ? t.build : ( t.build = e( t ), t.build )
            }

            function u( t ) {
                for (var e = { inputs: {} }, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'input':
                                var a = o( r.getAttribute( 'source' ) ), s = r.getAttribute( 'semantic' );
                                e.inputs[s] = a
                        }
                    }
                }
                return e
            }

            function p( t ) {
                var e = {}, i = t.getAttribute( 'target' ).split( '/' ), n = i.shift(), r = i.shift(),
                    a = -1 !== r.indexOf( '(' ), s = -1 !== r.indexOf( '.' );
                if (s) {
                    r = ( i = r.split( '.' ) ).shift(), e.member = i.shift();
                } else if (a) {
                    var c = r.split( '(' );
                    r = c.shift();
                    for (var h = 0; h < c.length; h++) c[h] = parseInt( c[h].replace( /\)/, '' ) );
                    e.indices = c
                }
                return e.id = n, e.sid = r, e.arraySyntax = a, e.memberSyntax = s, e.sampler = o( t.getAttribute( 'source' ) ), e
            }

            function d( t ) {
                var e = [], i = t.channels, n = t.samplers, r = t.sources;
                for (var a in i) {
                    if (i.hasOwnProperty( a )) {
                        var o = i[a], s = n[o.sampler], c = s.inputs.INPUT, h = s.inputs.OUTPUT;
                        x( m( o, r[c], r[h] ), e )
                    }
                }
                return e
            }

            function f( t ) {
                return l( Dt.animations[t], d )
            }

            function m( t, e, i ) {
                var n, r, a, o, s, c, h = Dt.nodes[t.id], l = St( h.id ), u = h.transforms[t.sid],
                    p = h.matrix.clone().transpose(), d = {};
                switch (u) {
                    case'matrix':
                        for (a = 0, o = e.array.length; a < o; a++) {
                            if (n = e.array[a], r = a * i.stride, void 0 === d[n] && ( d[n] = {} ), !0 === t.arraySyntax) {
                                var f = i.array[r], m = t.indices[0] + 4 * t.indices[1];
                                d[n][m] = f
                            } else {
                                for (s = 0, c = i.stride; s < c; s++) d[n][s] = i.array[r + s];
                            }
                        }
                        break;
                    case'translate':
                    case'rotate':
                    case'scale':
                        console.warn( 'ColladaLoader: Animation transform type "%s" not yet implemented.', u )
                }
                var v = function ( t, e ) {
                    var i = [];
                    for (var n in t) i.push( { time: parseFloat( n ), value: t[n] } );
                    i.sort( function ( t, e ) {
                        return t.time - e.time
                    } );
                    for (var r = 0; r < 16; r++) b( i, r, e.elements[r] );
                    return i
                }( d, p );
                return { name: l.uuid, keyframes: v }
            }

            var v = new Me, g = new Me, y = new _e;

            function x( t, e ) {
                for (var i = t.keyframes, n = t.name, r = [], a = [], o = [], s = [], c = 0, h = i.length; c < h; c++) {
                    var l = i[c], u = l.time, p = l.value;
                    mt.fromArray( p ).transpose(), mt.decompose( v, y, g ), r.push( u ), a.push( v.x, v.y, v.z ), o.push( y.x, y.y, y.z, y.w ), s.push( g.x, g.y, g.z )
                }
                return a.length > 0 && e.push( new qa( n + '.position', r, a ) ), o.length > 0 && e.push( new Za( n + '.quaternion', r, o ) ), s.length > 0 && e.push( new qa( n + '.scale', r, s ) ), e
            }

            function b( t, e, i ) {
                var n, r, a, o = !0;
                for (r = 0, a = t.length; r < a; r++) void 0 === ( n = t[r] ).value[e] ? n.value[e] = null : o = !1;
                if (!0 === o) {
                    for (r = 0, a = t.length; r < a; r++) ( n = t[r] ).value[e] = i;
                } else {
                    !function ( t, e ) {
                        for (var i, n, r = 0, a = t.length; r < a; r++) {
                            var o = t[r];
                            if (null === o.value[e]) {
                                if (i = w( t, r, e ), n = _( t, r, e ), null === i) {
                                    o.value[e] = n.value[e];
                                    continue
                                }
                                if (null === n) {
                                    o.value[e] = i.value[e];
                                    continue
                                }
                                M( o, i, n, e )
                            }
                        }
                    }( t, e )
                }
            }

            function w( t, e, i ) {
                for (; e >= 0;) {
                    var n = t[e];
                    if (null !== n.value[i]) return n;
                    e--
                }
                return null
            }

            function _( t, e, i ) {
                for (; e < t.length;) {
                    var n = t[e];
                    if (null !== n.value[i]) return n;
                    e++
                }
                return null
            }

            function M( t, e, i, n ) {
                i.time - e.time != 0 ? t.value[n] = ( t.time - e.time ) * ( i.value[n] - e.value[n] ) / ( i.time - e.time ) + e.value[n] : t.value[n] = e.value[n]
            }

            function E( t ) {
                for (var e = [], i = t.name, n = t.end - t.start || -1, r = t.animations, a = 0, o = r.length; a < o; a++) for (var s = f( r[a] ), c = 0, h = s.length; c < h; c++) e.push( s[c] );
                return new eo( i, n, e )
            }

            function T( t ) {
                return l( Dt.clips[t], E )
            }

            function S( t ) {
                for (var e = { sources: {} }, i = 0, n = t.childNodes.length; i < n; i++) {
                    var a = t.childNodes[i];
                    if (1 === a.nodeType) {
                        switch (a.nodeName) {
                            case'bind_shape_matrix':
                                e.bindShapeMatrix = r( a.textContent );
                                break;
                            case'source':
                                var o = a.getAttribute( 'id' );
                                e.sources[o] = $( a );
                                break;
                            case'joints':
                                e.joints = A( a );
                                break;
                            case'vertex_weights':
                                e.vertexWeights = L( a )
                        }
                    }
                }
                return e
            }

            function A( t ) {
                for (var e = { inputs: {} }, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'input':
                                var a = r.getAttribute( 'semantic' ), s = o( r.getAttribute( 'source' ) );
                                e.inputs[a] = s
                        }
                    }
                }
                return e
            }

            function L( t ) {
                for (var e = { inputs: {} }, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'input':
                                var s = r.getAttribute( 'semantic' ), c = o( r.getAttribute( 'source' ) ),
                                    h = parseInt( r.getAttribute( 'offset' ) );
                                e.inputs[s] = { id: c, offset: h };
                                break;
                            case'vcount':
                                e.vcount = a( r.textContent );
                                break;
                            case'v':
                                e.v = a( r.textContent )
                        }
                    }
                }
                return e
            }

            function R( t ) {
                var e = { id: t.id }, i = Dt.geometries[e.id];
                return void 0 !== t.skin && ( e.skin = function ( t ) {
                    var e, i, n,
                        r = { joints: [], indices: { array: [], stride: 4 }, weights: { array: [], stride: 4 } },
                        a = t.sources, o = t.vertexWeights, s = o.vcount, c = o.v, h = o.inputs.JOINT.offset,
                        l = o.inputs.WEIGHT.offset, u = t.sources[t.joints.inputs.JOINT],
                        p = t.sources[t.joints.inputs.INV_BIND_MATRIX], d = a[o.inputs.WEIGHT.id].array, f = 0;
                    for (e = 0, n = s.length; e < n; e++) {
                        var m = s[e], v = [];
                        for (i = 0; i < m; i++) {
                            var g = c[f + h], y = c[f + l], x = d[y];
                            v.push( { index: g, weight: x } ), f += 2
                        }
                        for (v.sort( M ), i = 0; i < 4; i++) {
                            var b = v[i];
                            void 0 !== b ? ( r.indices.array.push( b.index ), r.weights.array.push( b.weight ) ) : ( r.indices.array.push( 0 ), r.weights.array.push( 0 ) )
                        }
                    }
                    for (r.bindMatrix = ( new we ).fromArray( t.bindShapeMatrix ).transpose(), e = 0, n = u.array.length; e < n; e++) {
                        var w = u.array[e], _ = ( new we ).fromArray( p.array, e * p.stride ).transpose();
                        r.joints.push( { name: w, boneInverse: _ } )
                    }
                    return r;

                    function M( t, e ) {
                        return e.weight - t.weight
                    }
                }( t.skin ), i.sources.skinIndices = e.skin.indices, i.sources.skinWeights = e.skin.weights ), e
            }

            function P( t ) {
                return l( Dt.controllers[t], R )
            }

            function C( t ) {
                return void 0 !== t.build ? t.build : t.init_from
            }

            function N( t ) {
                for (var e = { surfaces: {}, samplers: {} }, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'newparam':
                                I( r, e );
                                break;
                            case'technique':
                                e.technique = D( r )
                        }
                    }
                }
                return e
            }

            function I( t, e ) {
                for (var i = t.getAttribute( 'sid' ), n = 0, r = t.childNodes.length; n < r; n++) {
                    var a = t.childNodes[n];
                    if (1 === a.nodeType) {
                        switch (a.nodeName) {
                            case'surface':
                                e.surfaces[i] = O( a );
                                break;
                            case'sampler2D':
                                e.samplers[i] = U( a )
                        }
                    }
                }
            }

            function O( t ) {
                for (var e = {}, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'init_from':
                                e.init_from = r.textContent
                        }
                    }
                }
                return e
            }

            function U( t ) {
                for (var e = {}, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'source':
                                e.source = r.textContent
                        }
                    }
                }
                return e
            }

            function D( t ) {
                for (var e = {}, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'constant':
                            case'lambert':
                            case'blinn':
                            case'phong':
                                e.type = r.nodeName, e.parameters = F( r )
                        }
                    }
                }
                return e
            }

            function F( t ) {
                for (var e = {}, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'emission':
                            case'diffuse':
                            case'specular':
                            case'shininess':
                            case'transparent':
                            case'transparency':
                                e[r.nodeName] = z( r )
                        }
                    }
                }
                return e
            }

            function z( t ) {
                for (var e = {}, i = 0, n = t.childNodes.length; i < n; i++) {
                    var a = t.childNodes[i];
                    if (1 === a.nodeType) {
                        switch (a.nodeName) {
                            case'color':
                                e[a.nodeName] = r( a.textContent );
                                break;
                            case'float':
                                e[a.nodeName] = parseFloat( a.textContent );
                                break;
                            case'texture':
                                e[a.nodeName] = { id: a.getAttribute( 'texture' ), extra: B( a ) }
                        }
                    }
                }
                return e
            }

            function B( t ) {
                for (var e = { technique: {} }, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'extra':
                                k( r, e )
                        }
                    }
                }
                return e
            }

            function k( t, e ) {
                for (var i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'technique':
                                G( r, e )
                        }
                    }
                }
            }

            function G( t, e ) {
                for (var i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'repeatU':
                            case'repeatV':
                            case'offsetU':
                            case'offsetV':
                                e.technique[r.nodeName] = parseFloat( r.textContent );
                                break;
                            case'wrapU':
                            case'wrapV':
                                'TRUE' === r.textContent.toUpperCase() ? e.technique[r.nodeName] = 1 : 'FALSE' === r.textContent.toUpperCase() ? e.technique[r.nodeName] = 0 : e.technique[r.nodeName] = parseInt( r.textContent )
                        }
                    }
                }
            }

            function j( t ) {
                return t
            }

            function H( t ) {
                var e, i, n = ( e = t.url, l( Dt.effects[e], j ) ), r = n.profile.technique;
                switch (r.type) {
                    case'phong':
                    case'blinn':
                        i = new va;
                        break;
                    case'lambert':
                        i = new xa;
                        break;
                    default:
                        i = new Rn
                }

                function a( t ) {
                    var e, i = n.profile.samplers[t.id];
                    if (void 0 !== i) {
                        var r = n.profile.surfaces[i.source], a = It.load( ( e = r.init_from, l( Dt.images[e], C ) ) ),
                            o = t.extra;
                        if (void 0 !== o && void 0 !== o.technique && !1 === s( o.technique )) {
                            var c = o.technique;
                            a.wrapS = c.wrapU ? _t : Mt, a.wrapT = c.wrapV ? _t : Mt, a.offset.set( c.offsetU || 0, c.offsetV || 0 ), a.repeat.set( c.repeatU || 1, c.repeatV || 1 )
                        } else {
                            a.wrapS = _t, a.wrapT = _t;
                        }
                        return a
                    }
                    return console.error( 'ColladaLoader: Undefined sampler', t.id ), null
                }

                i.name = t.name;
                var o = r.parameters;
                for (var c in o) {
                    var h = o[c];
                    switch (c) {
                        case'diffuse':
                            h.color && i.color.fromArray( h.color ), h.texture && ( i.map = a( h.texture ) );
                            break;
                        case'specular':
                            h.color && i.specular && i.specular.fromArray( h.color ), h.texture && ( i.specularMap = a( h.texture ) );
                            break;
                        case'shininess':
                            h.float && i.shininess && ( i.shininess = h.float );
                            break;
                        case'emission':
                            h.color && i.emissive && i.emissive.fromArray( h.color );
                            break;
                        case'transparent':
                            i.transparent = !0;
                            break;
                        case'transparency':
                            void 0 !== h.float && ( i.opacity = h.float ), i.transparent = !0
                    }
                }
                return i
            }

            function V( t ) {
                return l( Dt.materials[t], H )
            }

            function W( t ) {
                for (var e = 0; e < t.childNodes.length; e++) {
                    var i = t.childNodes[e];
                    switch (i.nodeName) {
                        case'technique_common':
                            return X( i )
                    }
                }
                return {}
            }

            function X( t ) {
                for (var e = {}, i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    switch (n.nodeName) {
                        case'perspective':
                        case'orthographic':
                            e.technique = n.nodeName, e.parameters = q( n )
                    }
                }
                return e
            }

            function q( t ) {
                for (var e = {}, i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    switch (n.nodeName) {
                        case'xfov':
                        case'yfov':
                        case'xmag':
                        case'ymag':
                        case'znear':
                        case'zfar':
                        case'aspect_ratio':
                            e[n.nodeName] = parseFloat( n.textContent )
                    }
                }
                return e
            }

            function Y( t ) {
                var e;
                switch (t.optics.technique) {
                    case'perspective':
                        e = new nr( t.optics.parameters.yfov, t.optics.parameters.aspect_ratio, t.optics.parameters.znear, t.optics.parameters.zfar );
                        break;
                    case'orthographic':
                        var i = t.optics.parameters.ymag, n = t.optics.parameters.xmag,
                            r = t.optics.parameters.aspect_ratio;
                        n = void 0 === n ? i * r : n, i = void 0 === i ? n / r : i, e = new Qi( -( n *= .5 ), n, i *= .5, -i, t.optics.parameters.znear, t.optics.parameters.zfar );
                        break;
                    default:
                        e = new nr
                }
                return e.name = t.name, e
            }

            function Z( t ) {
                for (var e = {}, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'directional':
                            case'point':
                            case'spot':
                            case'ambient':
                                e.technique = r.nodeName, e.parameters = J( r )
                        }
                    }
                }
                return e
            }

            function J( t ) {
                for (var e = {}, i = 0, n = t.childNodes.length; i < n; i++) {
                    var a = t.childNodes[i];
                    if (1 === a.nodeType) {
                        switch (a.nodeName) {
                            case'color':
                                var o = r( a.textContent );
                                e.color = ( new yi ).fromArray( o );
                                break;
                            case'falloff_angle':
                                e.falloffAngle = parseFloat( a.textContent );
                                break;
                            case'quadratic_attenuation':
                                var s = parseFloat( a.textContent );
                                e.distance = s ? Math.sqrt( 1 / s ) : 0
                        }
                    }
                }
                return e
            }

            function K( t ) {
                var e;
                switch (t.technique) {
                    case'directional':
                        e = new Fa;
                        break;
                    case'point':
                        e = new Ua;
                        break;
                    case'spot':
                        e = new Oa;
                        break;
                    case'ambient':
                        e = new za
                }
                return t.parameters.color && e.color.copy( t.parameters.color ), t.parameters.distance && ( e.distance = t.parameters.distance ), e
            }

            function Q( t ) {
                return l( Dt.lights[t], K )
            }

            function $( t ) {
                for (var e = { array: [], stride: 3 }, a = 0; a < t.childNodes.length; a++) {
                    var o = t.childNodes[a];
                    if (1 === o.nodeType) {
                        switch (o.nodeName) {
                            case'float_array':
                                e.array = r( o.textContent );
                                break;
                            case'Name_array':
                                e.array = n( o.textContent );
                                break;
                            case'technique_common':
                                var s = i( o, 'accessor' )[0];
                                void 0 !== s && ( e.stride = parseInt( s.getAttribute( 'stride' ) ) )
                        }
                    }
                }
                return e
            }

            function tt( t ) {
                for (var e = {}, i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    1 === n.nodeType && ( e[n.getAttribute( 'semantic' )] = o( n.getAttribute( 'source' ) ) )
                }
                return e
            }

            function et( t ) {
                for (var e = {
                    type: t.nodeName,
                    material: t.getAttribute( 'material' ),
                    count: parseInt( t.getAttribute( 'count' ) ),
                    inputs: {},
                    stride: 0
                }, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'input':
                                var s = o( r.getAttribute( 'source' ) ), c = r.getAttribute( 'semantic' ),
                                    h = parseInt( r.getAttribute( 'offset' ) );
                                e.inputs[c] = { id: s, offset: h }, e.stride = Math.max( e.stride, h + 1 );
                                break;
                            case'vcount':
                                e.vcount = a( r.textContent );
                                break;
                            case'p':
                                e.p = a( r.textContent )
                        }
                    }
                }
                return e
            }

            function it( t ) {
                var e = {}, i = t.sources, n = t.vertices, r = t.primitives;
                if (0 === r.length) return {};
                var a = function ( t ) {
                    for (var e = {}, i = 0; i < t.length; i++) {
                        var n = t[i];
                        void 0 === e[n.type] && ( e[n.type] = [] ), e[n.type].push( n )
                    }
                    return e
                }( r );
                for (var o in a) e[o] = nt( a[o], i, n );
                return e
            }

            function nt( t, e, i ) {
                for (var n = {}, r = { array: [], stride: 0 }, a = { array: [], stride: 0 }, o = {
                    array: [],
                    stride: 0
                }, s = {
                    array: [],
                    stride: 0
                }, c = [], h = 4, l = [], u = 4, p = new En, d = [], f = 0, m = 0, v = 0; v < t.length; v++) {
                    var g = t[v], y = g.inputs, x = 1;
                    for (var b in g.vcount && 4 === g.vcount[0] && ( x = 2 ), m = 'lines' === g.type || 'linestrips' === g.type ? 2 * g.count : 3 * g.count * x, p.addGroup( f, m, v ), f += m, g.material && d.push( g.material ), y) {
                        var w = y[b];
                        switch (b) {
                            case'VERTEX':
                                for (var _ in i) {
                                    var M = i[_];
                                    switch (_) {
                                        case'POSITION':
                                            rt( g, e[M], w.offset, r.array ), r.stride = e[M].stride, e.skinWeights && e.skinIndices && ( rt( g, e.skinIndices, w.offset, c ), rt( g, e.skinWeights, w.offset, l ) );
                                            break;
                                        case'NORMAL':
                                            rt( g, e[M], w.offset, a.array ), a.stride = e[M].stride;
                                            break;
                                        case'COLOR':
                                            rt( g, e[M], w.offset, s.array ), s.stride = e[M].stride;
                                            break;
                                        case'TEXCOORD':
                                            rt( g, e[M], w.offset, o.array ), o.stride = e[M].stride;
                                            break;
                                        default:
                                            console.warn( 'ColladaLoader: Semantic "%s" not handled in geometry build process.', _ )
                                    }
                                }
                                break;
                            case'NORMAL':
                                rt( g, e[w.id], w.offset, a.array ), a.stride = e[w.id].stride;
                                break;
                            case'COLOR':
                                rt( g, e[w.id], w.offset, s.array ), s.stride = e[w.id].stride;
                                break;
                            case'TEXCOORD':
                                rt( g, e[w.id], w.offset, o.array ), o.stride = e[w.id].stride
                        }
                    }
                }
                return r.array.length > 0 && p.addAttribute( 'position', new pn( r.array, r.stride ) ), a.array.length > 0 && p.addAttribute( 'normal', new pn( a.array, a.stride ) ), s.array.length > 0 && p.addAttribute( 'color', new pn( s.array, s.stride ) ), o.array.length > 0 && p.addAttribute( 'uv', new pn( o.array, o.stride ) ), c.length > 0 && p.addAttribute( 'skinIndex', new pn( c, h ) ), l.length > 0 && p.addAttribute( 'skinWeight', new pn( l, u ) ), n.data = p, n.type = t[0].type, n.materialKeys = d, n
            }

            function rt( t, e, i, n ) {
                var r = t.p, a = t.stride, o = t.vcount;

                function s( t ) {
                    for (var e = r[t + i] * l, a = e + l; e < a; e++) n.push( h[e] )
                }

                var c = 0, h = e.array, l = e.stride;
                if (void 0 !== t.vcount) {
                    for (var u = 0, p = 0, d = o.length; p < d; p++) {
                        var f = o[p];
                        if (4 === f) {
                            var m = u + 1 * a, v = u + 2 * a, g = u + 3 * a;
                            s( u + 0 * a ), s( m ), s( g ), s( m ), s( v ), s( g )
                        } else if (3 === f) {
                            m = u + 1 * a, v = u + 2 * a;
                            s( u + 0 * a ), s( m ), s( v )
                        } else {
                            c = Math.max( c, f );
                        }
                        u += a * f
                    }
                    c > 0 && console.log( 'ColladaLoader: Geometry has faces with more than 4 vertices.' )
                } else {
                    for (p = 0, d = r.length; p < d; p += a) s( p )
                }
            }

            function at( t ) {
                return l( Dt.geometries[t], it )
            }

            function ot( t ) {
                return void 0 !== t.build ? t.build : t
            }

            function st( t, e ) {
                for (var i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    if (1 === n.nodeType) {
                        switch (n.nodeName) {
                            case'joint':
                                e.joints[n.getAttribute( 'sid' )] = ct( n );
                                break;
                            case'link':
                                e.links.push( lt( n ) )
                        }
                    }
                }
            }

            function ct( t ) {
                for (var e, i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    if (1 === n.nodeType) {
                        switch (n.nodeName) {
                            case'prismatic':
                            case'revolute':
                                e = ht( n )
                        }
                    }
                }
                return e
            }

            function ht( t, e ) {
                e = {
                    sid: t.getAttribute( 'sid' ),
                    name: t.getAttribute( 'name' ) || '',
                    axis: new Me,
                    limits: { min: 0, max: 0 },
                    type: t.nodeName,
                    static: !1,
                    zeroPosition: 0,
                    middlePosition: 0
                };
                for (var i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    if (1 === n.nodeType) {
                        switch (n.nodeName) {
                            case'axis':
                                var a = r( n.textContent );
                                e.axis.fromArray( a );
                                break;
                            case'limits':
                                var o = n.getElementsByTagName( 'max' )[0], s = n.getElementsByTagName( 'min' )[0];
                                e.limits.max = parseFloat( o.textContent ), e.limits.min = parseFloat( s.textContent )
                        }
                    }
                }
                return e.limits.min >= e.limits.max && ( e.static = !0 ), e.middlePosition = ( e.limits.min + e.limits.max ) / 2, e
            }

            function lt( t ) {
                for (var e = {
                    sid: t.getAttribute( 'sid' ),
                    name: t.getAttribute( 'name' ) || '',
                    attachments: [],
                    transforms: []
                }, i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    if (1 === n.nodeType) {
                        switch (n.nodeName) {
                            case'attachment_full':
                                e.attachments.push( ut( n ) );
                                break;
                            case'matrix':
                            case'translate':
                            case'rotate':
                                e.transforms.push( pt( n ) )
                        }
                    }
                }
                return e
            }

            function ut( t ) {
                for (var e = {
                    joint: t.getAttribute( 'joint' ).split( '/' ).pop(),
                    transforms: [],
                    links: []
                }, i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    if (1 === n.nodeType) {
                        switch (n.nodeName) {
                            case'link':
                                e.links.push( lt( n ) );
                                break;
                            case'matrix':
                            case'translate':
                            case'rotate':
                                e.transforms.push( pt( n ) )
                        }
                    }
                }
                return e
            }

            function pt( t ) {
                var e = { type: t.nodeName }, i = r( t.textContent );
                switch (e.type) {
                    case'matrix':
                        e.obj = new we, e.obj.fromArray( i ).transpose();
                        break;
                    case'translate':
                        e.obj = new Me, e.obj.fromArray( i );
                        break;
                    case'rotate':
                        e.obj = new Me, e.obj.fromArray( i ), e.angle = xe.degToRad( i[3] )
                }
                return e
            }

            function dt( t ) {
                for (var e = { target: t.getAttribute( 'target' ).split( '/' ).pop() }, i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    if (1 === n.nodeType) {
                        switch (n.nodeName) {
                            case'axis':
                                var r = n.getElementsByTagName( 'param' )[0];
                                e.axis = r.textContent;
                                var a = e.axis.split( 'inst_' ).pop().split( 'axis' )[0];
                                e.jointIndex = a.substr( 0, a.length - 1 )
                        }
                    }
                }
                return e
            }

            function ft( t ) {
                return void 0 !== t.build ? t.build : t
            }

            var mt = new we, vt = new Me;

            function gt( t ) {
                for (var e = {
                    name: t.getAttribute( 'name' ),
                    type: t.getAttribute( 'type' ),
                    id: t.getAttribute( 'id' ),
                    sid: t.getAttribute( 'sid' ),
                    matrix: new we,
                    nodes: [],
                    instanceCameras: [],
                    instanceControllers: [],
                    instanceLights: [],
                    instanceGeometries: [],
                    instanceNodes: [],
                    transforms: {}
                }, i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    if (1 === n.nodeType) {
                        switch (n.nodeName) {
                            case'node':
                                n.hasAttribute( 'id' ) && ( e.nodes.push( n.getAttribute( 'id' ) ), gt( n ) );
                                break;
                            case'instance_camera':
                                e.instanceCameras.push( o( n.getAttribute( 'url' ) ) );
                                break;
                            case'instance_controller':
                                e.instanceControllers.push( yt( n ) );
                                break;
                            case'instance_light':
                                e.instanceLights.push( o( n.getAttribute( 'url' ) ) );
                                break;
                            case'instance_geometry':
                                e.instanceGeometries.push( yt( n ) );
                                break;
                            case'instance_node':
                                e.instanceNodes.push( o( n.getAttribute( 'url' ) ) );
                                break;
                            case'matrix':
                                var a = r( n.textContent );
                                e.matrix.multiply( mt.fromArray( a ).transpose() ), e.transforms[n.getAttribute( 'sid' )] = n.nodeName;
                                break;
                            case'translate':
                                a = r( n.textContent );
                                vt.fromArray( a ), e.matrix.multiply( mt.makeTranslation( vt.x, vt.y, vt.z ) ), e.transforms[n.getAttribute( 'sid' )] = n.nodeName;
                                break;
                            case'rotate':
                                a = r( n.textContent );
                                var s = xe.degToRad( a[3] );
                                e.matrix.multiply( mt.makeRotationAxis( vt.fromArray( a ), s ) ), e.transforms[n.getAttribute( 'sid' )] = n.nodeName;
                                break;
                            case'scale':
                                a = r( n.textContent );
                                e.matrix.scale( vt.fromArray( a ) ), e.transforms[n.getAttribute( 'sid' )] = n.nodeName;
                                break;
                            case'extra':
                                break;
                            default:
                                console.log( n )
                        }
                    }
                }
                return t.hasAttribute( 'id' ) && ( Dt.nodes[t.getAttribute( 'id' )] = e ), e
            }

            function yt( t ) {
                for (var e = {
                    id: o( t.getAttribute( 'url' ) ),
                    materials: {},
                    skeletons: []
                }, i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    switch (n.nodeName) {
                        case'bind_material':
                            for (var r = n.getElementsByTagName( 'instance_material' ), a = 0; a < r.length; a++) {
                                var s = r[a], c = s.getAttribute( 'symbol' ), h = s.getAttribute( 'target' );
                                e.materials[c] = o( h )
                            }
                            break;
                        case'skeleton':
                            e.skeletons.push( o( n.textContent ) )
                    }
                }
                return e
            }

            function xt( t, e ) {
                var i, n, r, a = [], o = [];
                for (i = 0; i < t.length; i++) {
                    bt( St( t[i] ), e, a )
                }
                for (i = 0; i < e.length; i++) {
                    for (n = 0; n < a.length; n++) {
                        if (( r = a[n] ).bone.name === e[i].name) {
                            o[i] = r, r.processed = !0;
                            break
                        }
                    }
                }
                for (i = 0; i < a.length; i++) !1 === ( r = a[i] ).processed && ( o.push( r ), r.processed = !0 );
                var s = [], c = [];
                for (i = 0; i < o.length; i++) r = o[i], s.push( r.bone ), c.push( r.boneInverse );
                return new dr( s, c )
            }

            function bt( t, e, i ) {
                t.traverse( function ( t ) {
                    if (!0 === t.isBone) {
                        for (var n, r = 0; r < e.length; r++) {
                            var a = e[r];
                            if (a.name === t.name) {
                                n = a.boneInverse;
                                break
                            }
                        }
                        void 0 === n && ( n = new we ), i.push( { bone: t, boneInverse: n, processed: !1 } )
                    }
                } )
            }

            function wt( t ) {
                for (var e, i = [], n = t.matrix, r = t.nodes, a = t.type, o = t.instanceCameras, s = t.instanceControllers, c = t.instanceLights, h = t.instanceGeometries, u = t.instanceNodes, p = 0, d = r.length; p < d; p++) i.push( St( r[p] ) );
                for (p = 0, d = o.length; p < d; p++) i.push( ( e = o[p], l( Dt.cameras[e], Y ) ).clone() );
                for (p = 0, d = s.length; p < d; p++) {
                    for (var f = P( ( b = s[p] ).id ), m = Tt( at( f.id ), b.materials ), v = xt( b.skeletons, f.skin.joints ), g = 0, y = m.length; g < y; g++) {
                        var x;
                        ( x = m[g] ).isSkinnedMesh && ( x.bind( v, f.skin.bindMatrix ), x.normalizeSkinWeights() ), i.push( x )
                    }
                }
                for (p = 0, d = c.length; p < d; p++) i.push( Q( c[p] ).clone() );
                for (p = 0, d = h.length; p < d; p++) {
                    var b;
                    for (g = 0, y = ( m = Tt( at( ( b = h[p] ).id ), b.materials ) ).length; g < y; g++) i.push( m[g] )
                }
                for (p = 0, d = u.length; p < d; p++) i.push( St( u[p] ).clone() );
                if (0 === r.length && 1 === i.length) {
                    x = i[0];
                } else {
                    x = 'JOINT' === a ? new fr : new _r;
                    for (p = 0; p < i.length; p++) x.add( i[p] )
                }
                return x.name = 'JOINT' === a ? t.sid : t.name, x.matrix.copy( n ), x.matrix.decompose( x.position, x.quaternion, x.scale ), x
            }

            function Et( t, e ) {
                for (var i = [], n = 0, r = t.length; n < r; n++) {
                    var a = e[t[n]];
                    i.push( V( a ) )
                }
                return i
            }

            function Tt( t, e ) {
                var i = [];
                for (var n in t) {
                    var r = t[n], a = Et( r.materialKeys, e );
                    0 === a.length && ( 'lines' === n || 'linestrips' === n ? a.push( new vr ) : a.push( new va ) );
                    var o = void 0 !== r.data.attributes.skinIndex;
                    if (o) for (var s = 0, c = a.length; s < c; s++) a[s].skinning = !0;
                    var h, l = 1 === a.length ? a[0] : a;
                    switch (n) {
                        case'lines':
                            h = new yr( r.data, l );
                            break;
                        case'linestrips':
                            h = new gr( r.data, l );
                            break;
                        case'triangles':
                        case'polylist':
                            h = o ? new mr( r.data, l ) : new On( r.data, l )
                    }
                    i.push( h )
                }
                return i
            }

            function St( t ) {
                return l( Dt.nodes[t], wt )
            }

            function At( t ) {
                var e = new _r;
                e.name = t.name;
                for (var i = t.children, n = 0; n < i.length; n++) {
                    var r = i[n];
                    null === r.id ? e.add( wt( r ) ) : e.add( St( r.id ) )
                }
                return e
            }

            function Lt( t ) {
                return l( Dt.visualScenes[t], At )
            }

            if (console.time( 'ColladaLoader' ), 0 === t.length) return { scene: new cr };
            console.time( 'ColladaLoader: DOMParser' );
            var Rt = ( new DOMParser ).parseFromString( t, 'application/xml' );
            console.timeEnd( 'ColladaLoader: DOMParser' );
            var Pt = i( Rt, 'COLLADA' )[0], Ct = Pt.getAttribute( 'version' );
            console.log( 'ColladaLoader: File version', Ct );
            var Nt = function ( t ) {
                return {
                    unit: function ( t ) {
                        return void 0 !== t ? parseFloat( t.getAttribute( 'meter' ) ) : 1
                    }( i( t, 'unit' )[0] ), upAxis: function ( t ) {
                        return void 0 !== t ? t.textContent : 'Y_UP'
                    }( i( t, 'up_axis' )[0] )
                }
            }( i( Pt, 'asset' )[0] ), It = new Ra( this.manager );
            It.setPath( e ).setCrossOrigin( this.crossOrigin );
            var Ot = [], Ut = {}, Dt = {
                animations: {},
                clips: {},
                controllers: {},
                images: {},
                effects: {},
                materials: {},
                cameras: {},
                lights: {},
                geometries: {},
                nodes: {},
                visualScenes: {},
                kinematicsModels: {},
                kinematicsScenes: {}
            };
            console.time( 'ColladaLoader: Parse' ), c( Pt, 'library_animations', 'animation', function ( t ) {
                for (var e = { sources: {}, samplers: {}, channels: {} }, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r, a = t.childNodes[i];
                    if (1 === a.nodeType) {
                        switch (a.nodeName) {
                            case'source':
                                r = a.getAttribute( 'id' ), e.sources[r] = $( a );
                                break;
                            case'sampler':
                                r = a.getAttribute( 'id' ), e.samplers[r] = u( a );
                                break;
                            case'channel':
                                r = a.getAttribute( 'target' ), e.channels[r] = p( a );
                                break;
                            default:
                                console.log( a )
                        }
                    }
                }
                Dt.animations[t.getAttribute( 'id' )] = e
            } ), c( Pt, 'library_animation_clips', 'animation_clip', function ( t ) {
                for (var e = {
                    name: t.getAttribute( 'id' ) || 'default',
                    start: parseFloat( t.getAttribute( 'start' ) || 0 ),
                    end: parseFloat( t.getAttribute( 'end' ) || 0 ),
                    animations: []
                }, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'instance_animation':
                                e.animations.push( o( r.getAttribute( 'url' ) ) )
                        }
                    }
                }
                Dt.clips[t.getAttribute( 'id' )] = e
            } ), c( Pt, 'library_controllers', 'controller', function ( t ) {
                for (var e = {}, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'skin':
                                e.id = o( r.getAttribute( 'source' ) ), e.skin = S( r );
                                break;
                            case'morph':
                                e.id = o( r.getAttribute( 'source' ) ), console.warn( 'ColladaLoader: Morph target animation not supported yet.' )
                        }
                    }
                }
                Dt.controllers[t.getAttribute( 'id' )] = e
            } ), c( Pt, 'library_images', 'image', function ( t ) {
                var e = { init_from: i( t, 'init_from' )[0].textContent };
                Dt.images[t.getAttribute( 'id' )] = e
            } ), c( Pt, 'library_effects', 'effect', function ( t ) {
                for (var e = {}, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'profile_COMMON':
                                e.profile = N( r )
                        }
                    }
                }
                Dt.effects[t.getAttribute( 'id' )] = e
            } ), c( Pt, 'library_materials', 'material', function ( t ) {
                for (var e = { name: t.getAttribute( 'name' ) }, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'instance_effect':
                                e.url = o( r.getAttribute( 'url' ) )
                        }
                    }
                }
                Dt.materials[t.getAttribute( 'id' )] = e
            } ), c( Pt, 'library_cameras', 'camera', function ( t ) {
                for (var e = { name: t.getAttribute( 'name' ) }, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'optics':
                                e.optics = W( r )
                        }
                    }
                }
                Dt.cameras[t.getAttribute( 'id' )] = e
            } ), c( Pt, 'library_lights', 'light', function ( t ) {
                for (var e = {}, i = 0, n = t.childNodes.length; i < n; i++) {
                    var r = t.childNodes[i];
                    if (1 === r.nodeType) {
                        switch (r.nodeName) {
                            case'technique_common':
                                e = Z( r )
                        }
                    }
                }
                Dt.lights[t.getAttribute( 'id' )] = e
            } ), c( Pt, 'library_geometries', 'geometry', function ( t ) {
                for (var e = {
                    name: t.getAttribute( 'name' ),
                    sources: {},
                    vertices: {},
                    primitives: []
                }, n = i( t, 'mesh' )[0], r = 0; r < n.childNodes.length; r++) {
                    var a = n.childNodes[r];
                    if (1 === a.nodeType) {
                        var o = a.getAttribute( 'id' );
                        switch (a.nodeName) {
                            case'source':
                                e.sources[o] = $( a );
                                break;
                            case'vertices':
                                e.vertices = tt( a );
                                break;
                            case'polygons':
                                console.warn( 'ColladaLoader: Unsupported primitive type: ', a.nodeName );
                                break;
                            case'lines':
                            case'linestrips':
                            case'polylist':
                            case'triangles':
                                e.primitives.push( et( a ) );
                                break;
                            default:
                                console.log( a )
                        }
                    }
                }
                Dt.geometries[t.getAttribute( 'id' )] = e
            } ), c( Pt, 'library_nodes', 'node', gt ), c( Pt, 'library_visual_scenes', 'visual_scene', function ( t ) {
                for (var e = {
                    name: t.getAttribute( 'name' ),
                    children: []
                }, n = i( t, 'node' ), r = 0; r < n.length; r++) {
                    e.children.push( gt( n[r] ) );
                }
                Dt.visualScenes[t.getAttribute( 'id' )] = e
            } ), c( Pt, 'library_kinematics_models', 'kinematics_model', function ( t ) {
                for (var e = {
                    name: t.getAttribute( 'name' ) || '',
                    joints: {},
                    links: []
                }, i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    if (1 === n.nodeType) {
                        switch (n.nodeName) {
                            case'technique_common':
                                st( n, e )
                        }
                    }
                }
                Dt.kinematicsModels[t.getAttribute( 'id' )] = e
            } ), c( Pt, 'scene', 'instance_kinematics_scene', function ( t ) {
                for (var e = { bindJointAxis: [] }, i = 0; i < t.childNodes.length; i++) {
                    var n = t.childNodes[i];
                    if (1 === n.nodeType) {
                        switch (n.nodeName) {
                            case'bind_joint_axis':
                                e.bindJointAxis.push( dt( n ) )
                        }
                    }
                }
                Dt.kinematicsScenes[o( t.getAttribute( 'url' ) )] = e
            } ), console.timeEnd( 'ColladaLoader: Parse' ), console.time( 'ColladaLoader: Build' ), h( Dt.animations, d ), h( Dt.clips, E ), h( Dt.controllers, R ), h( Dt.images, C ), h( Dt.effects, j ), h( Dt.materials, H ), h( Dt.cameras, Y ), h( Dt.lights, K ), h( Dt.geometries, it ), h( Dt.visualScenes, At ), console.timeEnd( 'ColladaLoader: Build' ), function () {
                var t = Dt.clips;
                if (!0 === s( t )) {
                    if (!1 === s( Dt.animations )) {
                        var e = [];
                        for (var i in Dt.animations) for (var n = f( i ), r = 0, a = n.length; r < a; r++) e.push( n[r] );
                        Ot.push( new eo( 'default', -1, e ) )
                    }
                } else {
                    for (var i in t) Ot.push( T( i ) )
                }
            }(), function () {
                var t = Object.keys( Dt.kinematicsModels )[0], e = Object.keys( Dt.kinematicsScenes )[0],
                    i = Object.keys( Dt.visualScenes )[0];
                if (void 0 !== t && void 0 !== e) {
                    for (var n, a = ( n = t, l( Dt.kinematicsModels[n], ot ) ), o = function ( t ) {
                        return l( Dt.kinematicsScenes[t], ft )
                    }( e ), s = Lt( i ), c = o.bindJointAxis, h = {}, u = 0, p = c.length; u < p; u++) {
                        var d = c[u], f = Pt.querySelector( '[sid="' + d.target + '"]' );
                        if (f) {
                            var m = f.parentElement;
                            g( d.jointIndex, m )
                        }
                    }
                    var v = new we;
                    Ut = {
                        joints: a && a.joints, getJointValue: function ( t ) {
                            var e = h[t];
                            if (e) return e.position;
                            console.warn( 'ColladaLoader: Joint ' + t + ' doesn\'t exist.' )
                        }, setJointValue: function ( t, e ) {
                            var i = h[t];
                            if (i) {
                                var n = i.joint;
                                if (e > n.limits.max || e < n.limits.min) {
                                    console.warn( 'ColladaLoader: Joint ' + t + ' value ' + e + ' outside of limits (min: ' + n.limits.min + ', max: ' + n.limits.max + ').' );
                                } else if (n.static) {
                                    console.warn( 'ColladaLoader: Joint ' + t + ' is static.' );
                                } else {
                                    var r = i.object, a = n.axis, o = i.transforms;
                                    mt.identity();
                                    for (var s = 0; s < o.length; s++) {
                                        var c = o[s];
                                        if (c.sid && -1 !== c.sid.indexOf( t )) {
                                            switch (n.type) {
                                                case'revolute':
                                                    mt.multiply( v.makeRotationAxis( a, xe.degToRad( e ) ) );
                                                    break;
                                                case'prismatic':
                                                    mt.multiply( v.makeTranslation( a.x * e, a.y * e, a.z * e ) );
                                                    break;
                                                default:
                                                    console.warn( 'ColladaLoader: Unknown joint type: ' + n.type )
                                            }
                                        } else {
                                            switch (c.type) {
                                                case'matrix':
                                                    mt.multiply( c.obj );
                                                    break;
                                                case'translate':
                                                    mt.multiply( v.makeTranslation( c.obj.x, c.obj.y, c.obj.z ) );
                                                    break;
                                                case'scale':
                                                    mt.scale( c.obj );
                                                    break;
                                                case'rotate':
                                                    mt.multiply( v.makeRotationAxis( c.obj, c.angle ) )
                                            }
                                        }
                                    }
                                    r.matrix.copy( mt ), r.matrix.decompose( r.position, r.quaternion, r.scale ), h[t].position = e
                                }
                            } else {
                                console.log( 'ColladaLoader: ' + t + ' does not exist.' )
                            }
                        }
                    }
                }

                function g( t, e ) {
                    var i = e.getAttribute( 'name' ), n = a.joints[t];
                    s.traverse( function ( a ) {
                        a.name === i && ( h[t] = {
                            object: a, transforms: function ( t ) {
                                for (var e = [], i = Pt.querySelector( '[id="' + t.id + '"]' ), n = 0; n < i.childNodes.length; n++) {
                                    var a = i.childNodes[n];
                                    if (1 === a.nodeType) {
                                        switch (a.nodeName) {
                                            case'matrix':
                                                var o = r( a.textContent ), s = ( new we ).fromArray( o ).transpose();
                                                e.push( { sid: a.getAttribute( 'sid' ), type: a.nodeName, obj: s } );
                                                break;
                                            case'translate':
                                            case'scale':
                                                var o = r( a.textContent ), c = ( new Me ).fromArray( o );
                                                e.push( { sid: a.getAttribute( 'sid' ), type: a.nodeName, obj: c } );
                                                break;
                                            case'rotate':
                                                var o = r( a.textContent ), c = ( new Me ).fromArray( o ),
                                                    h = xe.degToRad( o[3] );
                                                e.push( {
                                                    sid: a.getAttribute( 'sid' ),
                                                    type: a.nodeName,
                                                    obj: c,
                                                    angle: h
                                                } )
                                        }
                                    }
                                }
                                return e
                            }( e ), joint: n, position: n.zeroPosition
                        } )
                    } )
                }
            }();
            var Ft = function ( t ) {
                return Lt( o( i( t, 'instance_visual_scene' )[0].getAttribute( 'url' ) ) )
            }( i( Pt, 'scene' )[0] );
            return 'Z_UP' === Nt.upAxis && ( Ft.rotation.x = -Math.PI / 2 ), Ft.scale.multiplyScalar( Nt.unit ), console.timeEnd( 'ColladaLoader' ), {
                animations: Ot,
                kinematics: Ut,
                library: Dt,
                scene: Ft
            }
        }
    };
    var sc = {
        name: 'model-collada', mixins: [$s], props: {
            lights: {
                type: Array, default: function () {
                    return [{
                        type: 'HemisphereLight',
                        position: { x: 0, y: 1, z: 0 },
                        skyColor: 11184895,
                        groundColor: 8413280,
                        intensity: .2
                    }, { type: 'DirectionalLight', position: { x: 1, y: 1, z: 1 }, color: 16777215, intensity: .8 }]
                }
            }, smoothing: { type: Boolean, default: !1 }
        }, data: function () {
            var t = new oc;
            return t.setCrossOrigin( this.crossOrigin ), { loader: t }
        }, methods: {
            getObject: function ( t ) {
                return t.scene
            }
        }
    }, cc = {
        decodeText: function ( t ) {
            if ('undefined' != typeof TextDecoder) return ( new TextDecoder ).decode( t );
            for (var e = '', i = 0, n = t.length; i < n; i++) e += String.fromCharCode( t[i] );
            return e
        }, extractUrlBase: function ( t ) {
            var e = t.split( '/' );
            return 1 === e.length ? './' : ( e.pop(), e.join( '/' ) + '/' )
        }
    };

    function hc( t ) {
        this.manager = void 0 !== t ? t : Ea
    }

    hc.prototype = {
        constructor: hc, crossOrigin: 'Anonymous', load: function ( t, e, i, n ) {
            var r = this, a = void 0 !== this.path ? this.path : cc.extractUrlBase( t ), o = new Sa( r.manager );
            o.setResponseType( 'arraybuffer' ), o.load( t, function ( t ) {
                try {
                    r.parse( t, a, e, n )
                } catch (t) {
                    if (void 0 === n) throw t;
                    n( t )
                }
            }, i, n )
        }, setCrossOrigin: function ( t ) {
            return this.crossOrigin = t, this
        }, setPath: function ( t ) {
            return this.path = t, this
        }, parse: function ( t, e, i, n ) {
            var r, a = {};
            if ('string' == typeof t) {
                r = t;
            } else if (cc.decodeText( new Uint8Array( t, 0, 4 ) ) === pc) {
                try {
                    a[lc.KHR_BINARY_GLTF] = new function ( t ) {
                        this.name = lc.KHR_BINARY_GLTF, this.content = null, this.body = null;
                        var e = new DataView( t, 0, dc );
                        if (this.header = {
                            magic: cc.decodeText( new Uint8Array( t.slice( 0, 4 ) ) ),
                            version: e.getUint32( 4, !0 ),
                            length: e.getUint32( 8, !0 )
                        }, this.header.magic !== pc) {
                            throw new Error( 'GLTFLoader: Unsupported glTF-Binary header.' );
                        }
                        if (this.header.version < 2) throw new Error( 'GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.' );
                        var i = new DataView( t, dc ), n = 0;
                        for (; n < i.byteLength;) {
                            var r = i.getUint32( n, !0 );
                            n += 4;
                            var a = i.getUint32( n, !0 );
                            if (n += 4, a === fc.JSON) {
                                var o = new Uint8Array( t, dc + n, r );
                                this.content = cc.decodeText( o )
                            } else if (a === fc.BIN) {
                                var s = dc + n;
                                this.body = t.slice( s, s + r )
                            }
                            n += r
                        }
                        if (null === this.content) throw new Error( 'addEnvMap: false: JSON content not found.' )
                    }( t )
                } catch (t) {
                    return void ( n && n( t ) )
                }
                r = a[lc.KHR_BINARY_GLTF].content
            } else {
                r = cc.decodeText( new Uint8Array( t ) );
            }
            var o = JSON.parse( r );
            void 0 === o.asset || o.asset.version[0] < 2 ? n && n( new Error( 'GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead.' ) ) : ( o.extensionsUsed && ( o.extensionsUsed.indexOf( lc.KHR_LIGHTS ) >= 0 && ( a[lc.KHR_LIGHTS] = new function ( t ) {
                this.name = lc.KHR_LIGHTS, this.lights = {};
                var e = ( t.extensions && t.extensions[lc.KHR_LIGHTS] || {} ).lights || {};
                for (var i in e) {
                    var n, r = e[i], a = ( new yi ).fromArray( r.color );
                    switch (r.type) {
                        case'directional':
                            ( n = new Fa( a ) ).position.set( 0, 0, 1 );
                            break;
                        case'point':
                            n = new Ua( a );
                            break;
                        case'spot':
                            ( n = new Oa( a ) ).position.set( 0, 0, 1 );
                            break;
                        case'ambient':
                            n = new za( a )
                    }
                    n && ( void 0 !== r.constantAttenuation && ( n.intensity = r.constantAttenuation ), void 0 !== r.linearAttenuation && ( n.distance = 1 / r.linearAttenuation ), void 0 !== r.quadraticAttenuation && ( n.decay = r.quadraticAttenuation ), void 0 !== r.fallOffAngle && ( n.angle = r.fallOffAngle ), void 0 !== r.fallOffExponent && console.warn( 'GLTFLoader:: light.fallOffExponent not currently supported.' ), n.name = r.name || 'light_' + i, this.lights[i] = n )
                }
            }( o ) ), o.extensionsUsed.indexOf( lc.KHR_MATERIALS_COMMON ) >= 0 && ( a[lc.KHR_MATERIALS_COMMON] = new uc( o ) ), o.extensionsUsed.indexOf( lc.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ) >= 0 && ( a[lc.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS] = new function () {
                return {
                    name: lc.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
                    specularGlossinessParams: ['color', 'map', 'lightMap', 'lightMapIntensity', 'aoMap', 'aoMapIntensity', 'emissive', 'emissiveIntensity', 'emissiveMap', 'bumpMap', 'bumpScale', 'normalMap', 'displacementMap', 'displacementScale', 'displacementBias', 'specularMap', 'specular', 'glossinessMap', 'glossiness', 'alphaMap', 'envMap', 'envMapIntensity', 'refractionRatio'],
                    getMaterialType: function () {
                        return Pn
                    },
                    extendParams: function ( t, e, i ) {
                        var n = e.extensions[this.name], r = _i.standard, a = bi.clone( r.uniforms ),
                            o = ['#ifdef USE_SPECULARMAP', '    uniform sampler2D specularMap;', '#endif'].join( '\n' ),
                            s = ['#ifdef USE_GLOSSINESSMAP', '    uniform sampler2D glossinessMap;', '#endif'].join( '\n' ),
                            c = ['vec3 specularFactor = specular;', '#ifdef USE_SPECULARMAP', '    vec4 texelSpecular = texture2D( specularMap, vUv );', '    texelSpecular = sRGBToLinear( texelSpecular );', '    // reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture', '    specularFactor *= texelSpecular.rgb;', '#endif'].join( '\n' ),
                            h = ['float glossinessFactor = glossiness;', '#ifdef USE_GLOSSINESSMAP', '    vec4 texelGlossiness = texture2D( glossinessMap, vUv );', '    // reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture', '    glossinessFactor *= texelGlossiness.a;', '#endif'].join( '\n' ),
                            l = ['PhysicalMaterial material;', 'material.diffuseColor = diffuseColor.rgb;', 'material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );', 'material.specularColor = specularFactor.rgb;'].join( '\n' ),
                            u = r.fragmentShader.replace( '#include <specularmap_fragment>', '' ).replace( 'uniform float roughness;', 'uniform vec3 specular;' ).replace( 'uniform float metalness;', 'uniform float glossiness;' ).replace( '#include <roughnessmap_pars_fragment>', o ).replace( '#include <metalnessmap_pars_fragment>', s ).replace( '#include <roughnessmap_fragment>', c ).replace( '#include <metalnessmap_fragment>', h ).replace( '#include <lights_physical_fragment>', l );
                        delete a.roughness, delete a.metalness, delete a.roughnessMap, delete a.metalnessMap, a.specular = { value: ( new yi ).setHex( 1118481 ) }, a.glossiness = { value: .5 }, a.specularMap = { value: null }, a.glossinessMap = { value: null }, t.vertexShader = r.vertexShader, t.fragmentShader = u, t.uniforms = a, t.defines = { STANDARD: '' }, t.color = new yi( 1, 1, 1 ), t.opacity = 1;
                        var p = [];
                        if (Array.isArray( n.diffuseFactor )) {
                            var d = n.diffuseFactor;
                            t.color.fromArray( d ), t.opacity = d[3]
                        }
                        if (void 0 !== n.diffuseTexture && p.push( i.assignTexture( t, 'map', n.diffuseTexture.index ) ), t.emissive = new yi( 0, 0, 0 ), t.glossiness = void 0 !== n.glossinessFactor ? n.glossinessFactor : 1, t.specular = new yi( 1, 1, 1 ), Array.isArray( n.specularFactor ) && t.specular.fromArray( n.specularFactor ), void 0 !== n.specularGlossinessTexture) {
                            var f = n.specularGlossinessTexture.index;
                            p.push( i.assignTexture( t, 'glossinessMap', f ) ), p.push( i.assignTexture( t, 'specularMap', f ) )
                        }
                        return Promise.all( p )
                    },
                    createMaterial: function ( t ) {
                        var e = new Pn( {
                            defines: t.defines,
                            vertexShader: t.vertexShader,
                            fragmentShader: t.fragmentShader,
                            uniforms: t.uniforms,
                            fog: !0,
                            lights: !0,
                            opacity: t.opacity,
                            transparent: t.transparent
                        } );
                        return e.isGLTFSpecularGlossinessMaterial = !0, e.color = t.color, e.map = void 0 === t.map ? null : t.map, e.lightMap = null, e.lightMapIntensity = 1, e.aoMap = void 0 === t.aoMap ? null : t.aoMap, e.aoMapIntensity = 1, e.emissive = t.emissive, e.emissiveIntensity = 1, e.emissiveMap = void 0 === t.emissiveMap ? null : t.emissiveMap, e.bumpMap = void 0 === t.bumpMap ? null : t.bumpMap, e.bumpScale = 1, e.normalMap = void 0 === t.normalMap ? null : t.normalMap, t.normalScale && ( e.normalScale = t.normalScale ), e.displacementMap = null, e.displacementScale = 1, e.displacementBias = 0, e.specularMap = void 0 === t.specularMap ? null : t.specularMap, e.specular = t.specular, e.glossinessMap = void 0 === t.glossinessMap ? null : t.glossinessMap, e.glossiness = t.glossiness, e.alphaMap = null, e.envMap = void 0 === t.envMap ? null : t.envMap, e.envMapIntensity = 1, e.refractionRatio = .98, e.extensions.derivatives = !0, e
                    },
                    cloneMaterial: function ( t ) {
                        var e = t.clone();
                        e.isGLTFSpecularGlossinessMaterial = !0;
                        for (var i = this.specularGlossinessParams, n = 0, r = i.length; n < r; n++) e[i[n]] = t[i[n]];
                        return e
                    },
                    refreshUniforms: function ( t, e, i, n, r, a ) {
                        var o, s, c, h = r.uniforms, l = r.defines;
                        if (h.opacity.value = r.opacity, h.diffuse.value.copy( r.color ), h.emissive.value.copy( r.emissive ).multiplyScalar( r.emissiveIntensity ), h.map.value = r.map, h.specularMap.value = r.specularMap, h.alphaMap.value = r.alphaMap, h.lightMap.value = r.lightMap, h.lightMapIntensity.value = r.lightMapIntensity, h.aoMap.value = r.aoMap, h.aoMapIntensity.value = r.aoMapIntensity, r.map ? o = r.map : r.specularMap ? o = r.specularMap : r.displacementMap ? o = r.displacementMap : r.normalMap ? o = r.normalMap : r.bumpMap ? o = r.bumpMap : r.glossinessMap ? o = r.glossinessMap : r.alphaMap ? o = r.alphaMap : r.emissiveMap && ( o = r.emissiveMap ), void 0 !== o) {
                            if (o.isWebGLRenderTarget && ( o = o.texture ), void 0 !== o.matrix) {
                                if (!0 === o.matrixAutoUpdate) {
                                    s = o.offset, c = o.repeat;
                                    var u = o.rotation, p = o.center;
                                    o.matrix.setUvTransform( s.x, s.y, c.x, c.y, u, p.x, p.y )
                                }
                                h.uvTransform.value.copy( o.matrix )
                            } else {
                                s = o.offset, c = o.repeat, h.offsetRepeat.value.set( s.x, s.y, c.x, c.y );
                            }
                        }
                        h.envMap.value = r.envMap, h.envMapIntensity.value = r.envMapIntensity, h.flipEnvMap.value = r.envMap && r.envMap.isCubeTexture ? -1 : 1, h.refractionRatio.value = r.refractionRatio, h.specular.value.copy( r.specular ), h.glossiness.value = r.glossiness, h.glossinessMap.value = r.glossinessMap, h.emissiveMap.value = r.emissiveMap, h.bumpMap.value = r.bumpMap, h.normalMap.value = r.normalMap, h.displacementMap.value = r.displacementMap, h.displacementScale.value = r.displacementScale, h.displacementBias.value = r.displacementBias, null !== h.glossinessMap.value && void 0 === l.USE_GLOSSINESSMAP && ( l.USE_GLOSSINESSMAP = '', l.USE_ROUGHNESSMAP = '' ), null === h.glossinessMap.value && void 0 !== l.USE_GLOSSINESSMAP && ( delete l.USE_GLOSSINESSMAP, delete l.USE_ROUGHNESSMAP )
                    }
                }
            } ) ), console.time( 'GLTFLoader' ), new Fc( o, a, {
                path: e || this.path || '',
                crossOrigin: this.crossOrigin,
                manager: this.manager
            } ).parse( function ( t, e, n, r, a ) {
                console.timeEnd( 'GLTFLoader' ), i( { scene: t, scenes: e, cameras: n, animations: r, asset: a } )
            }, n ) )
        }
    };
    var lc = {
        KHR_BINARY_GLTF: 'KHR_binary_glTF',
        KHR_LIGHTS: 'KHR_lights',
        KHR_MATERIALS_COMMON: 'KHR_materials_common',
        KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness'
    };

    function uc( t ) {
        this.name = lc.KHR_MATERIALS_COMMON
    }

    uc.prototype.getMaterialType = function ( t ) {
        switch (t.extensions[this.name].type) {
            case'commonBlinn':
            case'commonPhong':
                return va;
            case'commonLambert':
                return xa;
            case'commonConstant':
            default:
                return Rn
        }
    }, uc.prototype.extendParams = function ( t, e, i ) {
        var n = e.extensions[this.name], r = [], a = [];
        switch (n.type) {
            case'commonBlinn':
            case'commonPhong':
                a.push( 'diffuseFactor', 'diffuseTexture', 'specularFactor', 'specularTexture', 'shininessFactor' );
                break;
            case'commonLambert':
                a.push( 'diffuseFactor', 'diffuseTexture' )
        }
        var o = {};
        return a.forEach( function ( t ) {
            void 0 !== n[t] && ( o[t] = n[t] )
        } ), void 0 !== o.diffuseFactor && ( t.color = ( new yi ).fromArray( o.diffuseFactor ), t.opacity = o.diffuseFactor[3] ), void 0 !== o.diffuseTexture && r.push( i.assignTexture( t, 'map', o.diffuseTexture.index ) ), void 0 !== o.specularFactor && ( t.specular = ( new yi ).fromArray( o.specularFactor ) ), void 0 !== o.specularTexture && r.push( i.assignTexture( t, 'specularMap', o.specularTexture.index ) ), void 0 !== o.shininessFactor && ( t.shininess = o.shininessFactor ), Promise.all( r )
    };
    var pc = 'glTF', dc = 12, fc = { JSON: 1313821514, BIN: 5130562 };
    var mc = 0, vc = 1, gc = 2, yc = 3, xc = 4, bc = 5, wc = 6, _c = {
            5120: Int8Array,
            5121: Uint8Array,
            5122: Int16Array,
            5123: Uint16Array,
            5125: Uint32Array,
            5126: Float32Array
        }, Mc = { 9728: Tt, 9729: Lt, 9984: St, 9985: Rt, 9986: At, 9987: Pt }, Ec = { 33071: Mt, 33648: Et, 10497: _t },
        Tc = { 6406: Ht, 6407: Vt, 6408: Wt, 6409: Xt, 6410: qt }, Sc = { 5121: Ct, 32819: Bt, 32820: kt, 33635: Gt },
        Ac = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
        Lc = { scale: 'scale', translation: 'position', rotation: 'quaternion', weights: 'morphTargetInfluences' },
        Rc = { CUBICSPLINE: 2302, LINEAR: 2301, STEP: 2300 }, Pc = 'OPAQUE', Cc = 'MASK', Nc = 'BLEND';

    function Ic( t, e ) {
        return 'string' != typeof t || '' === t ? '' : /^(https?:)?\/\//i.test( t ) ? t : /^data:.*,.*$/i.test( t ) ? t : /^blob:.*$/i.test( t ) ? t : e + t
    }

    function Oc( t, e, i, n ) {
        var r = t.geometry, a = t.material, o = i.targets, s = r.morphAttributes;
        s.position = [], s.normal = [], a.morphTargets = !0;
        for (var c = 0, h = o.length; c < h; c++) {
            var l, u, p = o[c], d = 'morphTarget' + c;
            if (void 0 !== p.POSITION) {
                l = n[p.POSITION].clone();
                for (var f = r.attributes.position, m = 0, v = l.count; m < v; m++) l.setXYZ( m, l.getX( m ) + f.getX( m ), l.getY( m ) + f.getY( m ), l.getZ( m ) + f.getZ( m ) )
            } else {
                r.attributes.position && ( l = r.attributes.position.clone() );
            }
            if (void 0 !== l && ( l.name = d, s.position.push( l ) ), void 0 !== p.NORMAL) {
                a.morphNormals = !0, u = n[p.NORMAL].clone();
                var g = r.attributes.normal;
                for (m = 0, v = u.count; m < v; m++) u.setXYZ( m, u.getX( m ) + g.getX( m ), u.getY( m ) + g.getY( m ), u.getZ( m ) + g.getZ( m ) )
            } else {
                void 0 !== r.attributes.normal && ( u = r.attributes.normal.clone() );
            }
            void 0 !== u && ( u.name = d, s.normal.push( u ) )
        }
        if (t.updateMorphTargets(), void 0 !== e.weights) for (c = 0, h = e.weights.length; c < h; c++) t.morphTargetInfluences[c] = e.weights[c]
    }

    function Uc( t, e ) {
        if (t.indices !== e.indices) return !1;
        var i = t.attributes || {}, n = e.attributes || {}, r = Object.keys( i ), a = Object.keys( n );
        if (r.length !== a.length) return !1;
        for (var o = 0, s = r.length; o < s; o++) {
            var c = r[o];
            if (i[c] !== n[c]) return !1
        }
        return !0
    }

    function Dc( t, e ) {
        for (var i = 0, n = t.length; i < n; i++) {
            var r = t[i];
            if (Uc( r.primitive, e )) return r.geometry
        }
        return null
    }

    function Fc( t, e, i ) {
        this.json = t || {}, this.extensions = e || {}, this.options = i || {}, this.cache = new function () {
            var t = {};
            return {
                get: function ( e ) {
                    return t[e]
                }, add: function ( e, i ) {
                    t[e] = i
                }, remove: function ( e ) {
                    delete t[e]
                }, removeAll: function () {
                    t = {}
                }
            }
        }, this.primitiveCache = [], this.textureLoader = new Ra( this.options.manager ), this.textureLoader.setCrossOrigin( this.options.crossOrigin ), this.fileLoader = new Sa( this.options.manager ), this.fileLoader.setResponseType( 'arraybuffer' )
    }

    Fc.prototype.parse = function ( t, e ) {
        var i = this.json;
        this.cache.removeAll(), this.markDefs(), this.getMultiDependencies( ['scene', 'animation', 'camera'] ).then( function ( e ) {
            var n = e.scenes || [], r = n[i.scene || 0], a = e.animations || [], o = i.asset, s = e.cameras || [];
            t( r, n, s, a, o )
        } ).catch( e )
    }, Fc.prototype.markDefs = function () {
        for (var t = this.json.nodes || [], e = this.json.skins || [], i = this.json.meshes || [], n = {}, r = {}, a = 0, o = e.length; a < o; a++) for (var s = e[a].joints, c = 0, h = s.length; c < h; c++) t[s[c]].isBone = !0;
        for (var l = 0, u = t.length; l < u; l++) {
            var p = t[l];
            void 0 !== p.mesh && ( void 0 === n[p.mesh] && ( n[p.mesh] = r[p.mesh] = 0 ), n[p.mesh]++, void 0 !== p.skin && ( i[p.mesh].isSkinnedMesh = !0 ) )
        }
        this.json.meshReferences = n, this.json.meshUses = r
    }, Fc.prototype.getDependency = function ( t, e ) {
        var i = t + ':' + e, n = this.cache.get( i );
        n || ( n = this['load' + t.charAt( 0 ).toUpperCase() + t.slice( 1 )]( e ), this.cache.add( i, n ) );
        return n
    }, Fc.prototype.getDependencies = function ( t ) {
        var e = this.cache.get( t );
        if (!e) {
            var i = this, n = this.json[t + ( 'mesh' === t ? 'es' : 's' )] || [];
            e = Promise.all( n.map( function ( e, n ) {
                return i.getDependency( t, n )
            } ) ), this.cache.add( t, e )
        }
        return e
    }, Fc.prototype.getMultiDependencies = function ( t ) {
        for (var e = {}, i = [], n = 0, r = t.length; n < r; n++) {
            var a = t[n], o = this.getDependencies( a );
            o = o.then( function ( t, i ) {
                e[t] = i
            }.bind( this, a + ( 'mesh' === a ? 'es' : 's' ) ) ), i.push( o )
        }
        return Promise.all( i ).then( function () {
            return e
        } )
    }, Fc.prototype.loadBuffer = function ( t ) {
        var e = this.json.buffers[t], i = this.fileLoader;
        if (e.type && 'arraybuffer' !== e.type) throw new Error( 'GLTFLoader: ' + e.type + ' buffer type is not supported.' );
        if (void 0 === e.uri && 0 === t) return Promise.resolve( this.extensions[lc.KHR_BINARY_GLTF].body );
        var n = this.options;
        return new Promise( function ( t, r ) {
            i.load( Ic( e.uri, n.path ), t, void 0, function () {
                r( new Error( 'GLTFLoader: Failed to load buffer "' + e.uri + '".' ) )
            } )
        } )
    }, Fc.prototype.loadBufferView = function ( t ) {
        var e = this.json.bufferViews[t];
        return this.getDependency( 'buffer', e.buffer ).then( function ( t ) {
            var i = e.byteLength || 0, n = e.byteOffset || 0;
            return t.slice( n, n + i )
        } )
    }, Fc.prototype.loadAccessor = function ( t ) {
        var e = this.json, i = this.json.accessors[t], n = [];
        return void 0 !== i.bufferView ? n.push( this.getDependency( 'bufferView', i.bufferView ) ) : n.push( null ), void 0 !== i.sparse && ( n.push( this.getDependency( 'bufferView', i.sparse.indices.bufferView ) ), n.push( this.getDependency( 'bufferView', i.sparse.values.bufferView ) ) ), Promise.all( n ).then( function ( t ) {
            var n, r = t[0], a = Ac[i.type], o = _c[i.componentType], s = o.BYTES_PER_ELEMENT, c = s * a,
                h = e.bufferViews[i.bufferView].byteStride, l = !0 === i.normalized;
            h && h !== c ? n = new ss( new cs( new o( r ), h / s ), a, i.byteOffset / s, l ) : n = new rn( null === r ? new o( i.count * a ) : new o( r, i.byteOffset, i.count * a ), a, l );
            if (void 0 !== i.sparse) {
                var u = Ac.SCALAR, p = _c[i.sparse.indices.componentType], d = i.sparse.indices.byteOffset || 0,
                    f = i.sparse.values.byteOffset || 0, m = new p( t[1], d, i.sparse.count * u ),
                    v = new o( t[2], f, i.sparse.count * a );
                null !== r && n.setArray( n.array.slice() );
                for (var g = 0, y = m.length; g < y; g++) {
                    var x = m[g];
                    if (n.setX( x, v[g * a] ), a >= 2 && n.setY( x, v[g * a + 1] ), a >= 3 && n.setZ( x, v[g * a + 2] ), a >= 4 && n.setW( x, v[g * a + 3] ), a >= 5) throw new Error( 'GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' )
                }
            }
            return n
        } )
    }, Fc.prototype.loadTexture = function ( t ) {
        var e = this.json, i = this.options, n = this.textureLoader, r = window.URL || window.webkitURL,
            a = e.textures[t], o = e.images[a.source], s = o.uri, c = !1;
        return void 0 !== o.bufferView && ( s = this.getDependency( 'bufferView', o.bufferView ).then( function ( t ) {
            c = !0;
            var e = new Blob( [t], { type: o.mimeType } );
            return s = r.createObjectURL( e )
        } ) ), Promise.resolve( s ).then( function ( t ) {
            var e = ho.Handlers.get( t ) || n;
            return new Promise( function ( n, r ) {
                e.load( Ic( t, i.path ), n, void 0, r )
            } )
        } ).then( function ( t ) {
            !0 === c && r.revokeObjectURL( s ), t.flipY = !1, void 0 !== a.name && ( t.name = a.name ), t.format = void 0 !== a.format ? Tc[a.format] : Wt, void 0 !== a.internalFormat && t.format !== Tc[a.internalFormat] && console.warn( 'GLTFLoader: Three.js does not support texture internalFormat which is different from texture format. internalFormat will be forced to be the same value as format.' ), t.type = void 0 !== a.type ? Sc[a.type] : Ct;
            var i = ( e.samplers || {} )[a.sampler] || {};
            return t.magFilter = Mc[i.magFilter] || Lt, t.minFilter = Mc[i.minFilter] || Pt, t.wrapS = Ec[i.wrapS] || _t, t.wrapT = Ec[i.wrapT] || _t, t
        } )
    }, Fc.prototype.assignTexture = function ( t, e, i ) {
        return this.getDependency( 'texture', i ).then( function ( i ) {
            t[e] = i
        } )
    }, Fc.prototype.loadMaterial = function ( t ) {
        this.json;
        var e, i = this.extensions, n = this.json.materials[t], r = {}, a = n.extensions || {}, o = [];
        if (a[lc.KHR_MATERIALS_COMMON]) {
            var s = i[lc.KHR_MATERIALS_COMMON];
            e = s.getMaterialType( n ), o.push( s.extendParams( r, n, this ) )
        } else if (a[lc.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            var c = i[lc.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            e = c.getMaterialType( n ), o.push( c.extendParams( r, n, this ) )
        } else if (void 0 !== n.pbrMetallicRoughness) {
            e = fa;
            var h = n.pbrMetallicRoughness;
            if (r.color = new yi( 1, 1, 1 ), r.opacity = 1, Array.isArray( h.baseColorFactor )) {
                var l = h.baseColorFactor;
                r.color.fromArray( l ), r.opacity = l[3]
            }
            if (void 0 !== h.baseColorTexture && o.push( this.assignTexture( r, "map", h.baseColorTexture.index ) ), r.metalness = void 0 !== h.metallicFactor ? h.metallicFactor : 1, r.roughness = void 0 !== h.roughnessFactor ? h.roughnessFactor : 1, void 0 !== h.metallicRoughnessTexture) {
                var u = h.metallicRoughnessTexture.index;
                o.push( this.assignTexture( r, "metalnessMap", u ) ), o.push( this.assignTexture( r, "roughnessMap", u ) )
            }
        } else {
            e = va;
        }
        !0 === n.doubleSided && ( r.side = A );
        var p = n.alphaMode || Pc;
        return p === Nc ? r.transparent = !0 : ( r.transparent = !1, p === Cc && ( r.alphaTest = void 0 !== n.alphaCutoff ? n.alphaCutoff : .5 ) ), void 0 !== n.normalTexture && ( o.push( this.assignTexture( r, "normalMap", n.normalTexture.index ) ), r.normalScale = new be( 1, 1 ), void 0 !== n.normalTexture.scale && r.normalScale.set( n.normalTexture.scale, n.normalTexture.scale ) ), void 0 !== n.occlusionTexture && ( o.push( this.assignTexture( r, "aoMap", n.occlusionTexture.index ) ), void 0 !== n.occlusionTexture.strength && ( r.aoMapIntensity = n.occlusionTexture.strength ) ), void 0 !== n.emissiveFactor && ( e === Rn ? r.color = ( new yi ).fromArray( n.emissiveFactor ) : r.emissive = ( new yi ).fromArray( n.emissiveFactor ) ), void 0 !== n.emissiveTexture && ( e === Rn ? o.push( this.assignTexture( r, "map", n.emissiveTexture.index ) ) : o.push( this.assignTexture( r, "emissiveMap", n.emissiveTexture.index ) ) ), Promise.all( o ).then( function () {
            var t;
            return t = e === Pn ? i[lc.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial( r ) : new e( r ), void 0 !== n.name && ( t.name = n.name ), t.normalScale && ( t.normalScale.x = -t.normalScale.x ), t.map && ( t.map.encoding = ue ), t.emissiveMap && ( t.emissiveMap.encoding = ue ), n.extras && ( t.userData = n.extras ), t
        } )
    }, Fc.prototype.loadGeometries = function ( t ) {
        var e = this.primitiveCache;
        return this.getDependencies( "accessor" ).then( function ( i ) {
            for (var n = [], r = 0, a = t.length; r < a; r++) {
                var o = t[r], s = Dc( e, o );
                if (s) {
                    n.push( s );
                } else {
                    var c = new En, h = o.attributes;
                    for (var l in h) {
                        var u = i[h[l]];
                        switch (l) {
                            case"POSITION":
                                c.addAttribute( "position", u );
                                break;
                            case"NORMAL":
                                c.addAttribute( "normal", u );
                                break;
                            case"TEXCOORD_0":
                            case"TEXCOORD0":
                            case"TEXCOORD":
                                c.addAttribute( "uv", u );
                                break;
                            case"TEXCOORD_1":
                                c.addAttribute( "uv2", u );
                                break;
                            case"COLOR_0":
                            case"COLOR0":
                            case"COLOR":
                                c.addAttribute( "color", u );
                                break;
                            case"WEIGHTS_0":
                            case"WEIGHT":
                                c.addAttribute( "skinWeight", u );
                                break;
                            case"JOINTS_0":
                            case"JOINT":
                                c.addAttribute( "skinIndex", u )
                        }
                    }
                    void 0 !== o.indices && c.setIndex( i[o.indices] ), e.push( {
                        primitive: o,
                        geometry: c
                    } ), n.push( c )
                }
            }
            return n
        } )
    }, Fc.prototype.loadMesh = function ( t ) {
        var e = this, i = ( this.json, this.extensions ), n = this.json.meshes[t];
        return this.getMultiDependencies( ["accessor", "material"] ).then( function ( r ) {
            var a = new _r, o = n.primitives;
            return e.loadGeometries( o ).then( function ( e ) {
                for (var s = 0, c = o.length; s < c; s++) {
                    var h = o[s], l = e[s], u = void 0 === h.material ? new fa( {
                        color: 16777215,
                        emissive: 0,
                        metalness: 1,
                        roughness: 1,
                        transparent: !1,
                        depthTest: !0,
                        side: T
                    } ) : r.materials[h.material];
                    u.aoMap && void 0 === l.attributes.uv2 && void 0 !== l.attributes.uv && ( console.log( "GLTFLoader: Duplicating UVs to support aoMap." ), l.addAttribute( "uv2", new rn( l.attributes.uv.array, 2 ) ) );
                    var p, d = void 0 !== l.attributes.color, f = void 0 === l.attributes.normal,
                        m = !0 === n.isSkinnedMesh, v = void 0 !== h.targets;
                    if (d || f || m || v) if (u.isGLTFSpecularGlossinessMaterial) u = i[lc.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial( u ); else u = u.clone();
                    if (d && ( u.vertexColors = P, u.needsUpdate = !0 ), f && ( u.flatShading = !0 ), h.mode === xc || h.mode === bc || h.mode === wc || void 0 === h.mode) {
                        m ? ( p = new mr( l, u ), u.skinning = !0 ) : p = new On( l, u ), h.mode === bc ? p.drawMode = ce : h.mode === wc && ( p.drawMode = he );
                    } else if (h.mode === vc) {
                        p = new yr( l, u );
                    } else if (h.mode === yc) {
                        p = new gr( l, u );
                    } else if (h.mode === gc) {
                        p = new xr( l, u );
                    } else {
                        if (h.mode !== mc) throw new Error( "GLTFLoader: Primitive mode unsupported: " + h.mode );
                        p = new wr( l, u )
                    }
                    if (p.name = n.name || "mesh_" + t, v && Oc( p, n, h, r.accessors ), void 0 !== n.extras && ( p.userData = n.extras ), void 0 !== h.extras && ( p.geometry.userData = h.extras ), !0 === u.isGLTFSpecularGlossinessMaterial && ( p.onBeforeRender = i[lc.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms ), !( o.length > 1 )) return p;
                    p.name += "_" + s, a.add( p )
                }
                return a
            } )
        } )
    }, Fc.prototype.loadCamera = function ( t ) {
        var e, i = this.json.cameras[t], n = i[i.type];
        if (n) {
            if ("perspective" === i.type) {
                var r = n.aspectRatio || 1, a = n.yfov * r;
                e = new nr( xe.radToDeg( a ), r, n.znear || 1, n.zfar || 2e6 )
            } else {
                "orthographic" === i.type && ( e = new Qi( n.xmag / -2, n.xmag / 2, n.ymag / 2, n.ymag / -2, n.znear, n.zfar ) );
            }
            return void 0 !== i.name && ( e.name = i.name ), i.extras && ( e.userData = i.extras ), Promise.resolve( e )
        }
        console.warn( "GLTFLoader: Missing camera parameters." )
    }, Fc.prototype.loadSkin = function ( t ) {
        var e = this.json.skins[t], i = { joints: e.joints };
        return void 0 === e.inverseBindMatrices ? Promise.resolve( i ) : this.getDependency( "accessor", e.inverseBindMatrices ).then( function ( t ) {
            return i.inverseBindMatrices = t, i
        } )
    }, Fc.prototype.loadAnimation = function ( t ) {
        this.json;
        var e = this.json.animations[t];
        return this.getMultiDependencies( ["accessor", "node"] ).then( function ( i ) {
            for (var n = [], r = 0, a = e.channels.length; r < a; r++) {
                var o = e.channels[r], s = e.samplers[o.sampler];
                if (s) {
                    var c = o.target, h = void 0 !== c.node ? c.node : c.id,
                        l = void 0 !== e.parameters ? e.parameters[s.input] : s.input,
                        u = void 0 !== e.parameters ? e.parameters[s.output] : s.output, p = i.accessors[l],
                        d = i.accessors[u], f = i.nodes[h];
                    if (f) {
                        var m;
                        switch (f.updateMatrix(), f.matrixAutoUpdate = !0, Lc[c.path]) {
                            case Lc.weights:
                                m = Ja;
                                break;
                            case Lc.rotation:
                                m = Za;
                                break;
                            case Lc.position:
                            case Lc.scale:
                            default:
                                m = qa
                        }
                        var v = f.name ? f.name : f.uuid;
                        if ("CUBICSPLINE" === s.interpolation) {
                            for (var g = d.itemSize, y = new ( 0, d.array.constructor )( d.count * g / 3 ), x = 0, b = d.count; x < b; x += 3) y[x * g / 3] = d.getX( x + 1 ), g > 1 && ( y[x * g / 3 + 1] = d.getY( x + 1 ) ), g > 2 && ( y[x * g / 3 + 2] = d.getZ( x + 1 ) ), g > 3 && ( y[x * g / 3 + 3] = d.getW( x + 1 ) );
                            d = new rn( y, g / 3, d.normalized )
                        }
                        var w = void 0 !== s.interpolation ? Rc[s.interpolation] : 2301, _ = [];
                        Lc[c.path] === Lc.weights ? f.traverse( function ( t ) {
                            !0 === t.isMesh && !0 === t.material.morphTargets && _.push( t.name ? t.name : t.uuid )
                        } ) : _.push( v );
                        for (x = 0, b = _.length; x < b; x++) n.push( new m( _[x] + "." + Lc[c.path], Ga.arraySlice( p.array, 0 ), Ga.arraySlice( d.array, 0 ), w ) )
                    }
                }
            }
            return new eo( h = void 0 !== e.name ? e.name : "animation_" + t, void 0, n )
        } )
    }, Fc.prototype.loadNode = function ( t ) {
        this.json;
        var e = this.extensions, i = this.json.meshReferences, n = this.json.meshUses, r = this.json.nodes[t];
        return this.getMultiDependencies( ["mesh", "skin", "camera"] ).then( function ( t ) {
            var a;
            if (!0 === r.isBone) {
                a = new fr;
            } else if (void 0 !== r.mesh) {
                var o = t.meshes[r.mesh];
                if (a = o.clone(), !0 === o.isGroup) {
                    for (var s = 0, c = o.children.length; s < c; s++) {
                        var h = o.children[s];
                        h.material && !0 === h.material.isGLTFSpecularGlossinessMaterial && ( a.children[s].onBeforeRender = h.onBeforeRender )
                    }
                } else {
                    o.material && !0 === o.material.isGLTFSpecularGlossinessMaterial && ( a.onBeforeRender = o.onBeforeRender );
                }
                i[r.mesh] > 1 && ( a.name += "_instance_" + n[r.mesh]++ )
            } else if (void 0 !== r.camera) {
                a = t.cameras[r.camera];
            } else if (r.extensions && r.extensions[lc.KHR_LIGHTS] && void 0 !== r.extensions[lc.KHR_LIGHTS].light) {
                a = e[lc.KHR_LIGHTS].lights[r.extensions[lc.KHR_LIGHTS].light]
            } else {
                a = new Ji;
            }
            if (void 0 !== r.name && ( a.name = ns.sanitizeNodeName( r.name ) ), r.extras && ( a.userData = r.extras ), void 0 !== r.matrix) {
                var l = new we;
                l.fromArray( r.matrix ), a.applyMatrix( l )
            } else {
                void 0 !== r.translation && a.position.fromArray( r.translation ), void 0 !== r.rotation && a.quaternion.fromArray( r.rotation ), void 0 !== r.scale && a.scale.fromArray( r.scale );
            }
            return a
        } )
    }, Fc.prototype.loadScene = function () {
        function t( e, i, n, r, a ) {
            var o = r[e], s = n.nodes[e];
            if (void 0 !== s.skin) {
                for (var c = !0 === o.isGroup ? o.children : [o], h = 0, l = c.length; h < l; h++) {
                    for (var u = c[h], p = a[s.skin], d = [], f = [], m = 0, v = p.joints.length; m < v; m++) {
                        var g = p.joints[m], y = r[g];
                        if (y) {
                            d.push( y );
                            var x = new we;
                            void 0 !== p.inverseBindMatrices && x.fromArray( p.inverseBindMatrices.array, 16 * m ), f.push( x )
                        } else {
                            console.warn( 'GLTFLoader: Joint "%s" could not be found.', g )
                        }
                    }
                    u.bind( new dr( d, f ), u.matrixWorld )
                }
            }
            if (i.add( o ), s.children) {
                var b = s.children;
                for (h = 0, l = b.length; h < l; h++) {
                    t( b[h], o, n, r, a )
                }
            }
        }

        return function ( e ) {
            var i = this.json, n = this.extensions, r = this.json.scenes[e];
            return this.getMultiDependencies( ["node", "skin"] ).then( function ( e ) {
                var a = new cr;
                void 0 !== r.name && ( a.name = r.name ), r.extras && ( a.userData = r.extras );
                for (var o = r.nodes || [], s = 0, c = o.length; s < c; s++) t( o[s], a, i, e.nodes, e.skins );
                if (r.extensions && r.extensions[lc.KHR_LIGHTS] && void 0 !== r.extensions[lc.KHR_LIGHTS].light) {
                    var h = n[lc.KHR_LIGHTS].lights;
                    a.add( h[r.extensions[lc.KHR_LIGHTS].light] )
                }
                return a
            } )
        }
    }();
    var zc = {
            name: "model-gltf", mixins: [$s], props: {
                lights: {
                    type: Array, default: function () {
                        return [{ type: "AmbientLight", color: 11184810 }, {
                            type: "DirectionalLight",
                            position: { x: 1, y: 1, z: 1 },
                            color: 16777215,
                            intensity: .8
                        }]
                    }
                }
            }, data: function () {
                var t = new hc;
                return t.setCrossOrigin( this.crossOrigin ), { loader: t }
            }, methods: {
                load: function () {
                    var t = this;
                    this.src && ( this.object && this.wrapper.remove( this.object ), this.loader.load( this.src, function ( e ) {
                        t.addObject( e.scene ), t.$emit( "on-load" )
                    }, function ( e ) {
                        t.$emit( "on-progress", e )
                    }, function ( e ) {
                        console.log( e ), t.$emit( "on-error", e )
                    } ) )
                }
            }
        }, Bc = e.extend( ec, { name: "model-json" } ), kc = e.extend( sc, { name: "model-dae" } ),
        Gc = [tc, ec, Bc, nc, ac, sc, kc, zc], jc = function ( t ) {
            Gc.map( function ( e ) {
                t.component( e.name, e )
            } )
        };
    "undefined" != typeof window && window.Vue && jc( window.Vue );
    var Hc = {
        install: jc,
        ModelObj: tc,
        ModelThree: ec,
        ModelJson: Bc,
        ModelStl: nc,
        ModelPly: ac,
        ModelCollada: sc,
        ModelDae: kc,
        ModelGltf: zc
    };
    t.default = Hc, t.install = jc, t.ModelObj = tc, t.ModelThree = ec, t.ModelJson = Bc, t.ModelStl = nc, t.ModelPly = ac, t.ModelCollada = sc, t.ModelDae = kc, t.ModelGltf = zc, Object.defineProperty( t, "__esModule", { value: !0 } )
} );
//# sourceMappingURL=vue-3d-model.js.map
