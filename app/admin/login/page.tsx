'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        router.push('/admin/dashboard')
      } else {
        setError(data.error || 'Invalid password')
      }
    } catch (error) {
      setError('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f6ef] px-4">
      {/* Back to Home Link */}
      <div className="absolute top-6 left-4 z-20">
        <Link 
          href="/" 
          className="text-sm text-[#35063e] hover:text-gold-metallic transition-colors"
        >
          ← back to home
        </Link>
      </div>
      
      <div className="bg-white/75 backdrop-blur-md border border-[#35063e]/15 rounded-2xl p-8 md:p-12 max-w-md w-full shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gold-metallic mb-2">
            Admin Login
          </h1>
          <p className="text-[#35063e]/70">Access the admin dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-300 rounded-lg p-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gold-metallic mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#f3efe6] border border-[#35063e]/25 rounded-lg text-[#35063e] placeholder:text-[#35063e]/50 focus:outline-none focus:ring-2 focus:ring-gold-metallic focus:border-transparent transition-all"
              placeholder="Enter admin password"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold-metallic text-black font-semibold py-3 px-6 rounded-lg hover:bg-gold-bright transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
