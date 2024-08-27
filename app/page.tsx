import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="max-w-96 m-auto">
      <h2 className="text-3xl mb-4">Homepage</h2>
      <Button variant="outline" size="lg" className="capitalize">
        Test button
      </Button>
    </div>
  )
}
