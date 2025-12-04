import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="Nobody asked but here are the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M2 Max, 16GB RAM (2023)">
            {`Macbooks have great hardware and software that is hard to beat for laptops. I am still using macOS 15 as macOS 26 still has a ton of issues and I don't like liquid glass either.`}
          </Tool>
          <Tool title={`Dell 27" QHD Monitor`}>
            {`Really nothing special. I find that 1440p is the minimum resolution
            for a good display experience. At 27" 1440p is sharp enough but a 4k monitor might be in my future at some point.`}
          </Tool>
          <Tool title="Keychron Q1 Keyboard">
            {`I’m a big fan of custom keyboards, and I use them whenever I can.
            The Q1 isn’t the fanciest custom keyboard out there but I’ve done a
            few things with it to make it sound and feel nicer. I used the force
            break and tape mod’s to eliminate some of the ping that early Q1
            models had.`}
          </Tool>
          <Tool title="Razer Orochi V2 Mouse">
            {`I love the Razer Orochi. It’s the mouse I use the most because it is
            lightweight, ergonomic, and portable. It has a fantastic pulling
            rate and feels great to use with the 2.4GHz dongle. I also think the
            design is fantastic.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Zed">
            {`Zed is a minimalistic text editor that I use for my development needs. It's lightweight, fast, and has a clean interface. I find it easy to navigate and use, and it's perfect for my minimalistic setup.`}
          </Tool>
          <Tool title="Ghostty">
            {`Ghostty is lightweight and fast. It is much better than the built-in terminal and has runs smoothly in rendering benchmarks. It's also highly customizable and has built in features that I enjoy using.`}
          </Tool>
          <Tool title="Chrome">
            {`Google Chrome is still the most popular web browser so it’s what I
            use to test my web apps most of the time.`}
          </Tool>
          <Tool title="WSL 2">
            {`I use WSL 2 when I am stuck with Windows primarily because Linux is
            much more powerful for development than Windows.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="V0">
            {`I used to use Figma as just a design tool and a virtual whiteboard
            for basically everything. Collaboration features was the real hook.
            However, in recent months with Figma changing their pricing model,
            and the rise of AI tools, I no longer use Figma for hardly anything.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Software">
          <Tool title="Mac Mouse Fix">
            {`It’s no small secret that macOS is terrible with mice. I’m not sure
            if Apple is trying to sell more Magic Trackpads or something but the
            default mouse experience is pretty terrible. Luckily Mac Mouse Fix
            exists and fixes pretty much any issue I have with how my mouse
            behaves.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast App">
            {`Raycast is a lot more than just better spotlight app. I enjoy using
            it for it’s amazing extensions and shortcuts. I haven’t used it for
            any AI tools yet but I enjoy the productivity aspect of it.`}
          </Tool>
          <Tool title="Notion Calendar">
            {`I like notion calendar because it syncs with my Google Calendar and
            it can run in the background to make sure I don’t miss any events.`}
          </Tool>
          <Tool title="Cal.com">
            {`Amazing open source tool for scheduling meetings while protecting my
            calendar and making sure I still have lots of time for deep work
            during the week.`}
          </Tool>
          <Tool title="Affinity">
            {`Remember when Adobe Photoshop was a one time purchase? Now it’s
            crazy expensive. I don’t need photo editing tools that often anymore
            but when I do I reach for Affinity. I have really enjoyed using it
            so far and it's free with some paid feature add ons.`}
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
