
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SubscribeBox = () => {
  return (
    <div className="bg-card border rounded-lg p-4 mb-6">
      <h2 className="text-lg font-semibold mb-2">Stay Updated</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Subscribe to our newsletter to get the latest articles directly to your inbox.
      </p>
      <div className="space-y-2">
        <Input placeholder="Your email address" type="email" />
        <Button className="w-full">Subscribe</Button>
      </div>
    </div>
  );
};

export default SubscribeBox;
